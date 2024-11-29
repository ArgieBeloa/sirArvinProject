console.log("New content JS loaded!");
document.addEventListener("DOMContentLoaded", () => {
    const message = document.createElement('p');
    message.textContent = "This message is dynamically added via newContent.js!";
    document.querySelector('.content').appendChild(message);
});
