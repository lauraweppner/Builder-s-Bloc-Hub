/* ==========================================================
   Builder's Bloc Field Portal
   app.js
   Version 1.0
========================================================== */

document.addEventListener("DOMContentLoaded", () => {
    console.log("Builder's Bloc Field Portal Loaded");

    initializeGreeting();
    initializeStatus();
    loadVersion();
    checkForUpdates();
});


/* ==========================================================
   Greeting
========================================================== */

function initializeGreeting() {

    const greeting = document.getElementById("greeting");

    if (!greeting) return;

    const hour = new Date().getHours();

    let message = "Welcome";

    if (hour < 12) {
        message = "🌅 Good Morning";
    } else if (hour < 17) {
        message = "☀️ Good Afternoon";
    } else {
        message = "🌙 Good Evening";
    }

    greeting.textContent = message;

}


/* ==========================================================
   Online / Offline Status
========================================================== */

function initializeStatus() {

    updateStatus();

    window.addEventListener("online", updateStatus);
    window.addEventListener("offline", updateStatus);

}

function updateStatus() {

    const status = document.getElementById("status");

    if (!status) return;

    if (navigator.onLine) {

        status.innerHTML = "🟢 Online";

    } else {

        status.innerHTML = "🔴 Offline";

    }

}


/* ==========================================================
   Load Version
========================================================== */

async function loadVersion() {

    const version = document.getElementById("version");

    if (!version) return;

    try {

        const response = await fetch("version.json");

        const data = await response.json();

        version.textContent = "Version " + data.version;

    }

    catch (error) {

        version.textContent = "Version";

        console.log(error);

    }

}


/* ==========================================================
   Check For Updates
========================================================== */

async function checkForUpdates() {

    const update = document.getElementById("updateMessage");

    if (!update) return;

    try {

        const response = await fetch("version.json?nocache=" + Date.now());

        const latest = await response.json();

        const current = document.getElementById("version").textContent
            .replace("Version ","");

        if (latest.version !== current) {

            update.innerHTML =
            `
            <button class="update-button">
                ⬆ Update Available
            </button>
            `;

            document
                .querySelector(".update-button")
                .addEventListener("click", () => {

                    location.reload(true);

                });

        }

    }

    catch(error){

        console.log("Offline");

    }

}