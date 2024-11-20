function upDate(event) {
    // Logging to check if the event triggers
    console.log('Event triggered:', event);

    // Get the preview image
    const previewPic = event.target;

    // Log information about the image
    console.log('Alt text:', previewPic.alt);
    console.log('Image source:', previewPic.src);

    // Update the content of the #image div
    const imageDiv = document.getElementById('image');
    imageDiv.innerHTML = `You are viewing: <br> ${previewPic.alt}`;

    // Change the background image of the #image div
    imageDiv.style.backgroundImage = `url(${previewPic.src})`;
}

function undo() {
    const imageDiv = document.getElementById('image');

    // Reset the background image and text
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}

// Select all images with the class 'image-preview'
const images = document.querySelectorAll('.image-preview');

// Add event listeners to each image
images.forEach(image => {
    image.addEventListener('mouseover', upDate);
    image.addEventListener('mouseout', undo);
});

