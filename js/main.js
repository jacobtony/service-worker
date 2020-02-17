if(navigator.serviceWorker){
    
    window.addEventListener("load", ()=>{
        navigator.serviceWorker
        .register("https://raw.githack.com/jacobtony/service-worker/master/sw_cached_pages.js")
        .then(reg => console.log(reg));
    })
}
