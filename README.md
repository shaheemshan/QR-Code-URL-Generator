# QR-Code-URL-Generator
This Node.js project allows users to generate QR code images from URLs. Each entered URL is saved in a text file (url.txt) either separated by commas or on new lines, based on user preference. The project uses the inquirer module for interactive command-line input and the qr-image module for generating QR code images.

Features
Interactive Command-Line Interface: Easily enter URLs through a user-friendly prompt.
QR Code Generation: Generates a QR code image (qr-img.png) for each entered URL.
URL Storage: Saves URLs in url.txt, either separated by commas or on new lines.
Continuous Entry: Option to add multiple URLs in a single session.

Dependencies
inquirer - For interactive command-line input.
qr-image - For generating QR code images.
fs (File System) - For reading and writing files.


Type your URL: https://example.com
The URL has been saved!
Do you want to add another URL? (y/N)


Generates qr-img.png for https://example.com.
Appends https://example.com to url.txt.
Contributing
Feel free to fork this project, submit pull requests, or report issues. Contributions are always welcome!
