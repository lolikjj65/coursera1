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
