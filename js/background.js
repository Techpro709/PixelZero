// Create moving/morphing gradient blobs in the background
const blobsElement = document.getElementById("blobs");

const numBlobs = 10;
for (let i = 0; i < numBlobs; i++) {
    const blob = document.createElement("div");
    blob.classList.add("blob");
    blobsElement.appendChild(blob);
}

// Apply animation to the blobs
const blobs = document.querySelectorAll(".blob");
blobs.forEach((blob, index) => {
    const size = Math.floor(Math.random() * 200) + 100;
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const animationDuration = Math.random() * 10 + 5;
    const animationDelay = Math.random() * 5;

    blob.style.width = `${size}px`;
    blob.style.height = `${size}px`;
    blob.style.top = `${top}%`;
    blob.style.left = `${left}%`;
    blob.style.animationDuration = `${animationDuration}s`;
    blob.style.animationDelay = `${animationDelay}s`;
});
