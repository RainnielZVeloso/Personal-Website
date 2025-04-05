function visitFacebook() {
    window.open("https://www.facebook.com/rainniel.veloso.5/", "_blank");
}

function copyPhoneNumber() {
    const phoneNumber = "09928703377";
    navigator.clipboard.writeText(phoneNumber).then(() => {
        alert("Phone number copied!");
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
}

function sendEmail() {
    window.location.href = "mailto:rainnielzv.scc@gmail.com";
}

document.addEventListener("DOMContentLoaded", function () {
    const title = document.querySelector(".pageT");
    title.style.animation = "reappear 2s ease-out forwards";
});