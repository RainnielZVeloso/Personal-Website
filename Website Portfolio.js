const text = "I am a Grade 11 ICT student at St. Clare College. Inspired by advanced technology, My dream is to become a game developer and create the most advanced artificial intelligence.";
const element = document.getElementById("typing-text");
let i = 0;

function typeWriter() {
  if (i < text.length) {
    element.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 20); // adjust typing speed here
  }
}

window.onload = typeWriter;

document.addEventListener("DOMContentLoaded", function () {
    const title = document.querySelector(".pageT");
    title.style.animation = "reappear 2s ease-out forwards";
});