const CACHE_NAME = 'builders-bloc-v5'; // Incremented version to drop old broken storage indexes
const ASSETS = [
  '/',
  '/index.html',
  '/sw.js',
  '/Daily_Safety_Plan_Log.html',
  '/Day_Planner.html',
  '/Safety_Meeting_Report.pdf',
  '/Foundations_Hazard_Observation_Sheet.pdf'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.all(
        ASSETS.map((url) => {
          return cache.add(url).catch((error) => console.log('Background cache skipping missing file:', url));
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});