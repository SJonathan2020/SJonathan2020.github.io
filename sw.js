//install
self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('first-app')
        .then(function(cache) {
          cache.addAll([
            '/',
            '/index.html',
            '/blog.html',
            '/contact.html',
            '/about.html',
            '/app.js',
            '/styles.css',
            '/manifest.json',
            '/images/about-header.jpg',
            '/images/contact-image.jpg',
            '/images/example-blog01.jpg',
            '/images/example-blog02.jpg',
            '/images/example-blog03.jpg',
            '/images/example-blog04.jpg',
            '/images/example-blog05.jpg',
            '/images/example-blog06.jpg',
            '/images/example-blog07.jpg',
            '/images/footer-background.png',
            '/images/header-bg.jpg',
            '/images/photo.jpg',
            '/images/photo-wide.jpg',
            '/images/portfolio-example-01.jpg',
            '/images/portfolio-example-02.jpg',
            '/images/portfolio-example-03.jpg',
            '/images/portfolio-example-04.jpg',
            '/images/portfolio-example-05.jpg',
            '/images/portfolio-example-06.jpg',
            '/images/logo.png',
            '/images/icon144.png',
            '/images/icon218.png',
            '/images/example-work01.jpg',
            '/images/example-work02.jpg',
            '/images/example-work03.jpg',
            '/images/example-work04.jpg',
            '/images/example-work05.jpg',
            '/images/example-work06.jpg',
            '/images/example-work07.jpg',
            '/images/example-work08.jpg',
            '/images/example-work09.jpg'
                      ])
        })
    );
    return self.clients.claim();
  });
  

// self.addEventListener('fetch', function(event) {
//     event.respondWith(
//       caches.match(event.request)
//         .then(function(res) {
//           return res;
//         })
//     );
//   });

// self.addEventListener('activate', function (event) {
//   event.waitUntil(
//     caches.keys().then(function ('first-app') {
//       return Promise.all(
//         cacheNames
//           .filter(function ('first-app') {
//             // Return true if you want to remove this cache,
//             // but remember that caches are shared across
//             // the whole origin
//           })
//           .map(function (cacheName) {
//             return caches.delete(cacheName);
//           }),
//       );
//     }),
//   );
// });
  
//cache then network
// self.addEventListener('fetch', function(event) {
//     event.respondWith(
//       caches.open('first-app')
//         .then(function(cache) {
//           return fetch(event.request)
//             .then(function(res) {
//               cache.put(event.request, res.clone());
//               return res;
//             });
//         })
//     );
//   });

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    }),
  );
});
