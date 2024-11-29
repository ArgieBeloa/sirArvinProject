document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("myButton");
    const text = document.getElementById("text");

    button.addEventListener("click", () => {
        text.textContent = "Text has changed!";
    });
});
