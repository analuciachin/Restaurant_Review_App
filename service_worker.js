var cache_name = 'restaurant-app-index';
var urlsToCache = [
  '/',
  '/css/style.css',
  '/css/over570.css',
  '/css/over830.css',
  '/js/dbhelper.js',
  '/js/main.js',
  '/data/restaurants.json',
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  '/img/9.jpg',
  '/img/10.jpg'
];


self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(cache_name).then(function(cache) {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response){
      if(response) { 
        return response;
      }
      return fetch(event.request);
    })
  );
});