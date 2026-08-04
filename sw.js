const CACHE_NAME = 'builders-bloc-v3';
const ASSETS = [
  '/',
  '/index.html',
  '/sw.js',
  '/Daily%20Safety%20Plan%20Log.html',
  '/Safety%20Meeting.html',
  '/Carpentry%20Payroll.html',
  '/Field%20Reports.html',
  '/Day%20Planner.html',
  '/Foundations%20Hazard%20Observation%20Sheet.html',
  '/Foundations%20Payroll.html',
  '/Flatwork%20Payroll.html',
  '/Plumbing%20Payroll.html',
  '/Plumbing%20Inspection.html',
  '/Drywall%20Payroll.html'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.all(
        ASSETS.map((url) => {
          return cache.add(url).catch((error) => console.error('Cache failed for:', url, error));
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