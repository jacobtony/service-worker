if(navigator.serviceWorker){
    
    window.addEventListener("load", ()=>{
        navigator.serviceWorker
        .register("/master/sw_cached_pages.js")
        .then(reg => console.log(reg));
    })
}
