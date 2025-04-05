document.addEventListener("DOMContentLoaded", function () {
    let modal = document.getElementById("imageModal");
    let modalImage = document.getElementById("modalImage");

    if (!modal || !modalImage) {
        console.error("Modal or modalImage element not found in the DOM.");
    }

    function openModal(img) {
        modal.style.display = "flex";
        modalImage.src = img.src;

        // Ensure the hover effect is disabled only when the modal is open
        document.querySelectorAll(".certificate-box img").forEach(image => {
            image.classList.add("no-hover");
        });

        console.log("Modal opened for image:", img.src);
    }

    function closeModal() {
        modal.style.display = "none";

        // Re-enable hover effect when the modal is closed
        document.querySelectorAll(".certificate-box img").forEach(image => {
            image.classList.remove("no-hover");
        });

        console.log("Modal closed.");
    }

    // Add event listeners for images
    document.querySelectorAll(".certificate-box img").forEach(img => {
        img.addEventListener("click", function () {
            openModal(img);
        });
    });

    // Add event listener for closing the modal
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Add event listener for the close button
    let closeButton = document.querySelector(".close-btn");
    if (closeButton) {
        closeButton.addEventListener("click", closeModal);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const title = document.querySelector(".pageT");
    title.style.animation = "reappear 2s ease-out forwards";
});