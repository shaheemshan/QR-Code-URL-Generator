import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

async function promptForUrl() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'URL',
      message: 'Type your URL: '
    }
  ]);

  const url = answers.URL;

  // Generate QR code image
  const qr_svg = qr.image(url);
  qr_svg.pipe(fs.createWriteStream('qr-img.png'));

  // Append the new URL followed by a newline
  fs.appendFile('url.txt', url + '\n', (err) => {
    if (err) throw err;
    console.log('The URL has been saved!');
  });
}

// Prompt for URLs in a loop until the user decides to stop
async function main() {
  while (true) {
    await promptForUrl();

    const { continuePrompt } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'continuePrompt',
        message: 'Do you want to add another URL?',
        default: false
      }
    ]);

    if (!continuePrompt) {
      break;
    }
  }
}

main().catch(error => {
  console.error('An error occurred:', error);
});
