if(navigator.serviceWorker){
    
    window.addEventListener("load", ()=>{
        navigator.serviceWorker
        .register("/sw_cached_pages.js")
        .then(reg => console.log(reg));
    })
}