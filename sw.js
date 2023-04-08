// install service worker
self.addEventListener('install', eve => {
    console.log('service worker installed!!', eve);
});

//activate event
self.addEventListener('activate', evt => {
    console.log('service worker activated');
});