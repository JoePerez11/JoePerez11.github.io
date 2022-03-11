const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

left.addEventListener("mouseenter", () => {
    container.classList.add("hover-left");
});

left.addEventListener("mouseleave", () => {
    container.classList.remove("hover-left");
});

right.addEventListener("mouseenter", () => {
    container.classList.add("hover-right");
});

right.addEventListener("mouseleave", () => {
    container.classList.remove("hover-right");
});
© 2022 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
