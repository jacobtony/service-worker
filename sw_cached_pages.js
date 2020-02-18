const cacheName = "v5";
const cacheAssets = [
    "/index.html",
    "/about.html",
    "/js/main.js",
    "/css/style.css"
]
//Call install Event
self.addEventListener("install", (e)=>{
    console.log("SW Installed");
});
self.addEventListener("activate", (e)=>{
    console.log("SW Acivated");
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(cacheNames.map(cache => {
                if(cache !== cacheName){
                    caches.delete(cache)
                }
            }))
        }

    ))
    
})

self.addEventListener("fetch", (e) => {
    console.log(e.request)
    e.respondWith(
        fetch(e.request).then((res)=>{
            const resClone = res.clone();
            console.log("Fetching success")  
            caches
            .open(cacheName)
            .then(cache => {
               cache.put(e.request, resClone);

            })
            console.log(res)
            return res
        })
        .catch(() => {
            console.log("Fetching error")
            return caches.match(e.request)
        })
    )
})
