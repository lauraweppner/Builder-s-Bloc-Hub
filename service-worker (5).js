const CACHE_NAME = "buildersbloc-fieldportal-v11";

const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./style.css",
    "./app.js",
    "./manifest.json",
    "./version.json",

    "./images/logo.png",
    "./images/icon-192.png",
    "./images/icon-512.png",

    "./pages/Day_Planner.html",
    "./pages/Safety_Plan_Log.html",
    "./pages/Fall_Protection_Plan.html",
    "./pages/Safety_Meeting.html",
    "./pages/Huddle_Talk.html",
    "./pages/Field_Inspection.html",
    "./pages/Foundation_Hazard_Observation_Sheet.html",
    "./pages/Plumbing_Inspection.html",

    "./pages/Employee_Incident_Report.html",
    "./pages/Foreman_Statement.html",
    "./pages/Witness_Statement.html",
    "./pages/Superintendent_Investigation.html",
    "./pages/Refusal_of_Care.html",

    "./pages/Reasonable_Suspicion_Checklist.html",
    "./pages/Carpentry_Field_Orientation.html",
    "./pages/Hydration_Chart.html",
    "./pages/On_the_Job_Stretches.html",
    "./pages/First_Aid_Quick_Reference.html",
    "./pages/Safety_Procedures_Review.html",
    "./pages/Injury_Response.html",
    "./pages/Heat_and_Cold_Illness.html",
    "./pages/Severe_Weather.html"
];

/* Files the Incident Reporting pages load from other websites: the PDF
   builder and the font list. Saved on the device too, so those pages can
   build and send a PDF without a signal. If one of these cannot be
   reached, the rest of the portal is still saved. */

const OUTSIDE_FILES = [
    "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",
    "https://fonts.googleapis.com/css2?family=Archivo+Expanded:wght@700;800&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap"
];

/* Each file is saved on its own. If one is missing or cannot be reached,
   the rest are still saved, and the copy from the previous version is
   kept for that one when there is one. */

function saveOne(cache, url) {

    return cache.add(url)
        .catch(error => {

            console.log("Not saved for offline:", url, error);

            return caches.match(url)
                .then(previous => previous ? cache.put(url, previous) : undefined)
                .catch(() => undefined);

        });

}

self.addEventListener("install", event => {
    self.skipWaiting();

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => Promise.all(
                FILES_TO_CACHE.concat(OUTSIDE_FILES).map(url => saveOne(cache, url))
            ))
    );
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys.map(key => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            )
        )
    );

    self.clients.claim();
});

self.addEventListener("fetch", event => {

    if (event.request.method !== "GET") return;

    event.respondWith(

        caches.match(event.request)
            .then(cached => {

                if (cached) {
                    return cached;
                }

                return fetch(event.request)
                    .then(response => {

                        /* Keep a copy of good responses only, and skip the
                           update check so it does not pile up copies. */

                        const good = response.ok || response.type === "opaque";
                        const updateCheck = event.request.url.includes("nocache=");

                        if (good && !updateCheck) {

                            const clone = response.clone();

                            caches.open(CACHE_NAME)
                                .then(cache => cache.put(event.request, clone));

                        }

                        return response;
                    });

            })

    );

});
