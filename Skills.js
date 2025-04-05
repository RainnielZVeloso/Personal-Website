document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach((bar) => {
        let targetPercent = parseInt(bar.getAttribute("data-percent"));
        let currentPercent = 0;
        let progressText = bar.nextElementSibling; // Get the span element for text update

        let interval = setInterval(() => {
            if (currentPercent >= targetPercent) {
                clearInterval(interval);
            } else {
                currentPercent++;
                bar.style.width = currentPercent + "%";
                progressText.textContent = currentPercent + "%"; // Update the text
            }
        }, 20); // Adjust speed of counting animation
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const title = document.querySelector(".pageT");
    title.style.animation = "reappear 2s ease-out forwards";
});