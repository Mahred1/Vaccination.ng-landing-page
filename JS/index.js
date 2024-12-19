let bannerItems= document.querySelector(".banner-items");
let submitBanner= document.querySelector(".submit-banner");
let banner= document.querySelector(".banner");

let miniDesktop = window.matchMedia("(max-width: 1178px)");

function responsiveBanner(x){
    console.log("rere");
    if (x.matches) {
        console.log(x.matches)
        bannerItems.appendChild(submitBanner);
    }else{
        banner.appendChild(submitBanner);
    }
}



responsiveBanner(miniDesktop); 
window.addEventListener("resize",()=>{
 responsiveBanner(miniDesktop); 
    
})
