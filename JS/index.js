let bannerItems= document.querySelector(".banner-items");
let submitBanner= document.querySelector(".submit-banner");
let banner= document.querySelector(".banner");
let smallCards =document.querySelector(".minidesktop-cards");
let card2 =document.querySelector(".card-2");
let card3 =document.querySelector(".card-3");
let regContent = document.querySelector(".registration-content");
let regDetail = document.querySelector(".registration-details");
let regHeader = document.querySelector(".registration-details h1");
console.log(regHeader);

let miniDesktop = window.matchMedia("(max-width: 1178px)");

function responsivecomponents(x){
;
    if (x.matches) {

        bannerItems.appendChild(submitBanner);
        smallCards.appendChild(card2);
        smallCards.appendChild(card3);

        firstElementCont= regContent.firstChild;
        regContent.insertBefore(regHeader,firstElementCont);

    }else{
        banner.appendChild(submitBanner);
        smallCards.parentElement.appendChild(card2);
        smallCards.parentElement.appendChild(card3);

        firstElementReg = regDetail.firstChild;

        regDetail.insertBefore(regHeader,firstElementReg);
    }
}



responsivecomponents(miniDesktop); 
window.addEventListener("resize",()=>{
 responsivecomponents(miniDesktop); 
    
})
