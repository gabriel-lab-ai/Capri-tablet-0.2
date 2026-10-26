const C='capri-v1',F=['./','index.html','assets/capri.png','assets/intro.gif','assets/icon-192.png','manifest.webmanifest'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F))));
self.addEventListener('fetch',e=>{if(e.request.url.includes('api.anthropic.com'))return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});