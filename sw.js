const CACHE_NAME = 'builders-bloc-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/Daily%20Safety%20Plan%20Log.html', // Spaces must be written as %20 in software scripts
  '/Safety%20Meeting%20Report%20Filler_2.html',
  '/Safety%20Meeting%20Report%20Filler_3.html',
  '/Day_Planner_4.html',
  '/Foundations%20Payroll.html',      // Pre-cached for when you upload this file
  '/Carpentry%20Payroll.html'         // Pre-cached for when you upload this file
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
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