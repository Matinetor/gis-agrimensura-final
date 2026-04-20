const CACHE_NAME = "portal-de-obras-cache-v1";
const urlsToCache = [
  "index.html",
  "dist/vendor/css/bootstrap.min.css",
  "dist/vendor/css/leaflet.css",
  "dist/vendor/css/font-awesome.min.css",
  "dist/vendor/css/leaflet.awesome-markers.css",
  "dist/vendor/css/jquery.fancybox.min.css",
  "dist/vendor/js/jquery.fancybox.min.js",
  "dist/vendor/js/leaflet-image.js",
  "dist/vendor/js/proj4.js",
  "dist/vendor/js/marked.min.js",
  "src/js/",
  "src/styles/",
  "assets/proyectos/",
  "assets/layers/obras.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).catch((error) => {
        console.error("Fetch failed; returning offline page instead.", error);
        return caches.match("index.html");
      });
    })
  );
});

self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});