const title = document.getElementById("title");
const cursor = document.getElementById("cursor");

const textArray = [
    "Sagar",
    "a Tutor",
    "a Helper",
    "a Educator",
];
const typingDelay = 50;
const eraseDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

let type = () => {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursor.classList.contains("cursorActive"))
            cursor.classList.add("cursorActive");
        title.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursor.classList.remove("cursorActive");
        setTimeout(erase, newTextDelay);
    }
};

let erase = () => {
    if (charIndex > 0) {
        if (!cursor.classList.contains("cursorActive"))
            cursor.classList.add("cursorActive");
        title.textContent = textArray[textArrayIndex].substring(
            0,
            charIndex - 1
        );
        charIndex--;
        setTimeout(erase, eraseDelay);
    } else {
        cursor.classList.remove("cursorActive");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) {
            textArrayIndex = 0;
        }
        setTimeout(type, typingDelay + 1100);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    if (textArray.length) setTimeout(type, 1000);
});

// education
for (let btn of document.querySelectorAll(".school-btn")) {
    btn.addEventListener("click", () => {
        document
            .querySelector("button.text-blue")
            .classList.remove("text-blue");

        btn.classList.add("text-blue");

        for (let card of document.querySelectorAll(".school-card")) {
            card.classList.add("hidden");
        }
        document.querySelector(`#${btn.id}`).classList.remove("hidden");
    });
}
