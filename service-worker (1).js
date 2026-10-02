const CACHE_NAME = "buildersbloc-fieldportal-v4";

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
    "./pages/Safety_Procedures_Review.html"
];

self.addEventListener("install", event => {
    self.skipWaiting();

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(FILES_TO_CACHE))
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

                        const clone = response.clone();

                        caches.open(CACHE_NAME)
                            .then(cache => cache.put(event.request, clone));

                        return response;
                    });

            })

    );

});
