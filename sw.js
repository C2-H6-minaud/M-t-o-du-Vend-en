self.addEventListener('fetch', (event) => {
    // Ce code permet à l'app de fonctionner hors ligne plus tard
    event.respondWith(fetch(event.request));
});