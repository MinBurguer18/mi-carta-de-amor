// This file contains the JavaScript code for the love letter webpage.

document.addEventListener('DOMContentLoaded', () => {
    alert('Advertencia: este archivo contiene mucho amor');
    const image = document.getElementById('love-image');
    const letterContainer = document.getElementById('letter-container');
    const closeBtn = document.getElementById('close-letter');

    image.addEventListener('click', () => {
        letterContainer.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        letterContainer.style.display = 'none';
    });
});