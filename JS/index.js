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
let hero = document.querySelector(".hero");
let front = document.querySelector(".front");
let mainHeader = document.querySelector(".main-header");
let navItem = document.querySelectorAll(".main-nav-item a");
let mobNav = document.querySelector(".mobile-nav");
let mobNavLink = document.querySelectorAll(".mobile-nav a");
let burger = document.querySelector(".burger");
let footerNav = document.querySelectorAll(".footer-nav-item");
let heroPrimary = document.querySelector(".hero-btn__primary");
let heroSecondary = document.querySelector(".hero-btn__secondary");
let comingSoon = document.querySelector(".coming-soon");
let backDrop =document.querySelector(".back-drop");

//Responsive front background
let miniDesktop = window.matchMedia("(max-width: 1178px)");
let heroStyle= window.getComputedStyle(hero);

function heroHeight(){
    const marginTop= parseInt(heroStyle.marginTop);
    const marginBottom= parseInt(heroStyle.marginBottom);
    const rect = hero.getBoundingClientRect();
    const rect2 =mainHeader.getBoundingClientRect();
    front.style.height=`${rect.height+rect2.height+marginBottom+marginTop}px`;

}
window.addEventListener("load",()=>{
    heroHeight();
});
// Responsive components
function responsivecomponents(x){

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

// Resize Adjustment
heroHeight();
responsivecomponents(miniDesktop); 
window.addEventListener("resize",()=>{
 responsivecomponents(miniDesktop); 
    heroHeight();
})


// active navigation 

navItem.forEach(item => {
    item.addEventListener("click",(e)=>{
       if (!e.target.parentElement.classList.contains("active")) {
        document.querySelector(".active").classList.remove("active");
        if(e.target.parentElement.classList.contains("main-nav-item")){

            e.target.parentElement.classList.add("active");
        }
       }
       e.stopPropagation(); 

       e.preventDefault();
       let targetId = e.target.getAttribute('href');
       let targetElement =document.querySelector(targetId);
       targetElement.scrollIntoView({ behavior: "smooth",block: "center"});  
    });
});

// Mobile Navigation

burger.addEventListener("click",(e)=>{
    if(mobNav.classList.contains("open-mob")){
        mobNav.classList.add("close-mob");
        mobNav.classList.remove("open-mob");
        setTimeout(() => {
            mobNav.classList.remove("close-mob");
        }, 400);
    }else{ 
        mobNav.classList.remove("close-mob");
        mobNav.classList.add("open-mob");
        
    }
    if (!burger.classList.contains("rotated")) {
        burger.classList.add("rotated");
    } else {
        burger.classList.remove("rotated");
    }
})

mobNavLink.forEach(link=>{
    link.addEventListener("click",(e)=>{
        if(!link.classList.contains("active-mob")){
            document.querySelector(".active-mob").classList.remove("active-mob");
            e.target.classList.add("active-mob"); 

        }
        setTimeout(() => {
            mobNav.classList.add("close-mob"); 
            mobNav.classList.remove("open-mob");
            burger.classList.remove("rotated"); 
         }, 300);
         setTimeout(() => {
            mobNav.classList.remove("close-mob"); 
         }, 400);
       
        e.preventDefault();
       let targetId = e.target.getAttribute('href');
       let targetElement =document.querySelector(targetId);
       targetElement.scrollIntoView({ behavior: "smooth"}); 
         
    })


})

// smmoth scroll
document.querySelector(".nav-cta").addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("e");
    document.querySelector(".check-corona").scrollIntoView({behavior:"smooth", block: "center"});
})  

document.querySelector(".logo").addEventListener("click",(e)=>{
    e.preventDefault();
    document.getElementById("front").scrollIntoView({behavior:"smooth"});
})

heroPrimary.addEventListener("click",(e)=>{
    e.preventDefault();
    document.getElementById("banner").scrollIntoView({behavior:"smooth",block:"center"});
})

heroSecondary.addEventListener("click",(e)=>{
    e.preventDefault();
    document.getElementById("quote").scrollIntoView({behavior:"smooth",block:"center"});
})
// footer navigation

footerNav.forEach((link)=>{
    link.addEventListener("click",(e)=>{
        if (!e.target.classList.contains("active-foot")) {
            document.querySelector(".active-foot").classList.remove("active-foot");
            e.target.classList.add("active-foot");
        }
        e.preventDefault();
        let targetId = e.target.getAttribute('href');
        let targetElement =document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: "smooth"}); 
    })
})

// Load animation
window.addEventListener("load",()=>{
    let loader= document.querySelector(".loader");
    loader.style.opacity="0";
    loader.addEventListener("transitionend",()=>{
        loader.style.visibility= "hidden";
    })
})

// modal interactions

submitBanner.addEventListener("click",(e)=>{
    e.preventDefault();
    comingSoon.classList.add("open-modal");
    backDrop.classList.add("open-modal");

})

backDrop.addEventListener("click",(e)=>{
    comingSoon.classList.remove("open-modal");
    backDrop.classList.remove("open-modal");

})
document.querySelector(".coming-soon button").addEventListener("click",()=>{
    comingSoon.classList.remove("open-modal");
    backDrop.classList.remove("open-modal");
})