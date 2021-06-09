const image = document.getElementById("image");
const statusDisplay = document.getElementById("status");
const bgColor = document.getElementById("main");

function setColor() {
    bgColor.classList.add("online");
}

async function connectionStatus() {
    try {
        const fetchResult = await fetch('https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Shirley_Temple_handprint.jpg/330px-Shirley_Temple_handprint.jpg?time=' + (new Date().getTime()));
        image.src = "./images/online.png";
        setColor();
        return fetchResult.status >= 200 && fetchResult.status < 300;

    } catch (error) {
        statusDisplay.textContent = "internet connection down"
        image.src = "./images/offline.png";
        bgColor.classList.remove("online");
    }
}

setInterval(async() => {
    const result = await connectionStatus();
    if (result) {
        statusDisplay.textContent = "You are ONLINE"
        setColor();

    }
}, 5000);

window.addEventListener("load", async(event) => {
    if (connectionStatus()) {
        statusDisplay.textContent = "You are ONLINE x"

    } else {
        statusDisplay.textContent = "You are OFFLINE"
    }
})