function downloadZipFile(fileName) {
  const link = document.createElement('a');
  link.href = `./assets/${fileName}`;
  link.download = fileName;
  link.click();
}

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Add this function to handle the download of the "URL BANK.zip" file
function downloadURLBankZipFile() {
  downloadZipFile('URL_BANK.zip');
}

