let bannerItems= document.querySelector(".banner-items");
let submitBanner= document.querySelector(".submit-banner");
let banner= document.querySelector(".banner");
let myLocation = document.querySelector(".location");
let date = document.querySelector(".date");
let vaccine = document.querySelector(".vaccine");
let row1= document.querySelector(".row1");
let row2= document.querySelector(".row2");
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

        row1.appendChild(myLocation);
        row1.appendChild(date);
        row2.appendChild(vaccine);
        row2.appendChild(submitBanner);
        smallCards.appendChild(card2);
        smallCards.appendChild(card3);
        
        firstElementCont= regContent.firstChild;
        regContent.insertBefore(regHeader,firstElementCont);

    }else{
        banner.appendChild(submitBanner);
        bannerItems.appendChild(myLocation);
        bannerItems.appendChild(date);
        bannerItems.appendChild(vaccine);
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
