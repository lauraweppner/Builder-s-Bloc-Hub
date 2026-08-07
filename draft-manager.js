// ===========================================
// Builder's Bloc Draft Manager
// Automatically saves form progress
// ===========================================

document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("form");

    if (!form) return;

    const STORAGE_KEY = "draft-" + window.location.pathname;

    // -----------------------------
    // Restore draft if one exists
    // -----------------------------
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {

        if (confirm("An unfinished form was found.\n\nWould you like to continue where you left off?")) {

            const data = JSON.parse(saved);

            Object.keys(data).forEach(id => {

                const field = document.getElementById(id);

                if (!field) return;

                if (field.type === "checkbox") {

                    field.checked = data[id];

                } else {

                    field.value = data[id];

                }

            });

        }

    }

    // -----------------------------
    // Save every 2 seconds
    // -----------------------------
    setInterval(() => {

        const data = {};

        form.querySelectorAll("input, textarea, select").forEach(field => {

            if (!field.id) return;

            if (field.type === "checkbox") {

                data[field.id] = field.checked;

            } else {

                data[field.id] = field.value;

            }

        });

        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

    }, 2000);

});