/* ==========================================================
   Builder's Bloc Field Portal
   app.js
   Version 1.1
========================================================== */

document.addEventListener("DOMContentLoaded", async () => {
    console.log("Builder's Bloc Field Portal Loaded");

    initializeGreeting();
    initializeStatus();
    await loadVersion();
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
                .addEventListener("click", updateNow);

        }

    }

    catch(error){

        console.log("Offline");

    }

}


/* ==========================================================
   Update Now
   Downloads fresh copies of every saved file, then reloads.
========================================================== */

async function updateNow() {

    const button = document.querySelector(".update-button");

    if (button) {
        button.disabled = true;
        button.textContent = "⏳ Updating, keep the portal open...";
    }

    try {

        if ("serviceWorker" in navigator) {

            const registration = await navigator.serviceWorker.getRegistration();

            if (registration) {

                /* Pick up a new service-worker.js if one was uploaded */

                await registration.update().catch(() => {});

                const incoming = registration.installing || registration.waiting;

                if (incoming) {

                    /* A new one is installing: it downloads everything fresh */

                    await new Promise(resolve => {

                        incoming.addEventListener("statechange", () => {
                            if (incoming.state === "activated" || incoming.state === "redundant") resolve();
                        });

                        if (incoming.state === "activated") resolve();

                        setTimeout(resolve, 180000);

                    });

                } else if (registration.active) {

                    /* Same service worker: ask it to download everything fresh */

                    await new Promise(resolve => {

                        const channel = new MessageChannel();

                        channel.port1.onmessage = () => resolve();

                        registration.active.postMessage({ type: "refresh" }, [channel.port2]);

                        setTimeout(resolve, 180000);

                    });

                }

            }

        }

    }

    catch (error) {

        console.log(error);

    }

    location.reload();

}
