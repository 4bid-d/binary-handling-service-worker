// const CACHE_VERSION = 'v1';
// const CURRENT_CACHES = {
//   prefetch: `prefetch-cache-v${CACHE_VERSION}`
// };
// const cacheAsset = [
//     '20201108_003849.jpg',
//     'index.html',
//     'about.html',
//     "main.js"
// ];

// self.addEventListener('install', (event) => {
 
//     event.waitUntil(
//     caches
//     .open(CACHE_VERSION)
//     .then((cache) => {
//         cache.addAll(cacheAsset)
//     })
//     .then(()=>self.skipWaiting())
//     )
// });


self.addEventListener('activate', (event) => {
    event.preventDefault()
    console.log("acticvated")
})