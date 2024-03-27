// Dynamically change the name and rotate it towards the cursor while hovering
const nameElement = document.getElementById("name");

// Calculate initial rotation angles based on the center of the screen
let centerX = window.innerWidth / 2;
let centerY = window.innerHeight / 2;
let angleX = 0;
let angleY = 0;

document.addEventListener('DOMContentLoaded', () => {
    const rect = nameElement.getBoundingClientRect();
    const textCenterX = rect.left + rect.width / 2;
    const textCenterY = rect.top + rect.height / 2;

    angleX = (textCenterY - centerY) / centerY * 10;
    angleY = (textCenterX - centerX) / centerX * 10;
});

document.addEventListener('mousemove', (event) => {
    const dx = event.clientX - centerX;
    const dy = event.clientY - centerY;

    const tiltX = -(dy / centerY) * 10;
    const tiltY = (dx / centerX) * 10;

    nameElement.style.transform = `perspective(250px) rotateX(${angleX + tiltX}deg) rotateY(${angleY + tiltY}deg)`;
});

// Function to change the name
function changeName(newName) {
    nameElement.textContent = newName;
    adjustFontSize();

    const maxLength = 10; // Maximum number of characters before resizing
    const fontSizeFactor = 0.03; // Factor to adjust font size

    const nameLength = nameElement.textContent.length;
    const fontSize = Math.min(100, 100 / nameLength * maxLength * fontSizeFactor);
    nameElement.style.fontSize = `${fontSize}vw`;
}
