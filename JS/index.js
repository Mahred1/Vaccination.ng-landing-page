// lenis setup code with scroll trigger
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 3000)
})

gsap.ticker.lagSmoothing(0)



const bannerItems= document.querySelector(".banner-items");
const submitBanner= document.querySelector(".submit-banner");
const banner= document.querySelector(".banner");
const myLocation = document.querySelector(".location");
const date = document.querySelector(".date");
const vaccine = document.querySelector(".vaccine");
const row1= document.querySelector(".row1");
const row2= document.querySelector(".row2");
const smallCards =document.querySelector(".minidesktop-cards");
const card2 =document.querySelector(".card-2");
const card3 =document.querySelector(".card-3");
const regContent = document.querySelector(".registration-content");
const regDetail = document.querySelector(".registration-details");
const regHeader = document.querySelector(".registration-details h1");
const hero = document.querySelector(".hero");
const front = document.querySelector(".front");
const mainHeader = document.querySelector(".main-header");
const navItem = document.querySelectorAll(".main-nav-item a");
const mobNav = document.querySelector(".mobile-nav");
const mobNavLink = document.querySelectorAll(".mobile-nav a");
const burger = document.querySelector(".burger");
const footerNav = document.querySelectorAll(".footer-nav-item");
const heroPrimary = document.querySelector(".hero-btn__primary");
const heroSecondary = document.querySelector(".hero-btn__secondary");
const comingSoon = document.querySelector(".coming-soon");
const backDrop =document.querySelector(".back-drop");
const checkPatient =document.querySelector(".check-patient a");
const success= document.querySelector(".success");
const errorModal =document.querySelector(".error");
const phoneVerify = document.querySelector(".phone-ver");
const submitReg =document.querySelector(".submit-reg");
const regCheck = document.querySelector(".reg-footer a");
const sendEmail =document.querySelector(".quote-email img");
const readMore = document.querySelectorAll(".reasons-read__more");

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
    animations();
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
regCheck.addEventListener("click",(e)=>{
    e.preventDefault();
    document.querySelector(".check-corona").scrollIntoView({behavior:"smooth",block:"center"})
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
        loader.style.display= "none";
    })
})

// modal interactions

submitBanner.addEventListener("click",(e)=>{
    e.preventDefault();
    comingSoon.classList.add("open-modal");
    backDrop.classList.add("open-modal");
    gsap.to(comingSoon,{scale:"1",duration:"320ms"});
})

backDrop.addEventListener("click",(e)=>{
    
    gsap.fromTo(comingSoon,{scale:"1"},{scale:"0",duration:"320ms"});
    gsap.fromTo(success,{scale:"1"},{scale:"0",duration:"320ms"});
    gsap.fromTo(errorModal,{scale:"1"},{scale:"0",duration:"320ms"});
        comingSoon.classList.remove("open-modal");
        success.classList.remove("open-modal"); 
        errorModal.classList.remove("open-modal"); 
        backDrop.classList.remove("open-modal"); 



})
document.querySelector(".coming-soon button").addEventListener("click",()=>{
    gsap.fromTo(comingSoon,{scale:"1"},{scale:"0",duration:"320ms"});
    comingSoon.classList.remove("open-modal");
    backDrop.classList.remove("open-modal");

})

checkPatient.addEventListener("click",(e)=>{
    e.preventDefault();

    if (  document.querySelectorAll(".check-patient input")[0].value.trim()!=="" 
            &&
        document.querySelectorAll(".check-patient input")[1].value.trim()!==""  ) {
        success.classList.add("open-modal");
        gsap.to(success,{scale:"1",duration:"320ms"});    
      
    }else{
          errorModal.classList.add("open-modal");
        gsap.to(errorModal,{scale:"1",duration:"320ms"});
    }
    
    backDrop.classList.add("open-modal");
   
})


phoneVerify.addEventListener("click",(e)=>{
    e.preventDefault();
    if (document.querySelector(".phone-number input").value ==="") {
        errorModal.classList.add("open-modal");
        gsap.to(errorModal,{scale:"1",duration:"320ms"});
    } else {
        success.classList.add("open-modal");
        gsap.to(success,{scale:"1",duration:"320ms"});
    }
    backDrop.classList.add("open-modal");
})

submitReg.addEventListener("click",(e)=>{
    e.preventDefault();
    if (document.querySelector(".phone-number input").value !=="" && document.querySelector(".full-name").value !=="") {
        success.classList.add("open-modal");
        gsap.to(success,{scale:"1",duration:"320ms"});
    }else{
        errorModal.classList.add("open-modal");
        gsap.to(errorModal,{scale:"1",duration:"320ms"});
    }
    backDrop.classList.add("open-modal");
})
 
sendEmail.addEventListener("click",()=>{
    if (document.querySelector(".quote-email input").value.trim()!=="") {
        success.classList.add("open-modal");
        gsap.to(success,{scale:"1",duration:"320ms"});
    }else{
        errorModal.classList.add("open-modal");
        gsap.to(errorModal,{scale:"1",duration:"320ms"});
    }
    backDrop.classList.add("open-modal");
})

readMore.forEach(item=>{
    item.addEventListener("click",(e)=>{
        e.preventDefault();
        comingSoon.classList.add("open-modal");
        backDrop.classList.add("open-modal");
        gsap.to(comingSoon,{scale:"1",duration:"320ms"});
    })
})
document.querySelector(".success button").addEventListener("click",()=>{
    gsap.fromTo(success,{scale:"1"},{scale:"0",duration:"320ms"});
    success.classList.remove("open-modal");
    backDrop.classList.remove("open-modal");

})
document.querySelector(".error button").addEventListener("click",()=>{
    gsap.fromTo(errorModal,{scale:"1"},{scale:"0",duration:"320ms"});
    errorModal.classList.remove("open-modal");
    backDrop.classList.remove("open-modal");

})



function animations(){
    // hero section
    let heroImg = document.querySelectorAll(".hero-img div");
    let heroCont = document.querySelector(".hero-content").childNodes;

   let heroTl = gsap.timeline({
    duration: 0.35
   })

   heroTl.from(mainHeader,{yPercent:-100})

   heroImg.forEach(Img => {
    heroTl.from(Img,{scale:0},"-=0.2")
   });

   heroTl.from(banner,{yPercent:100,opacity:0},">-0.8");
   heroTl.from(".banner-title",{opacity:0},">-0.5");

   heroCont.forEach(content => {
    if(content.nodeType===1){
        heroTl.from(content,{yPercent:-100,opacity:0},"-=1.5")
    }
   });

   partnerAmin();
   checkAnim();
   reasonAnim();
   regAnim();

}

scrollNavs();

function scrollNavs(){
    let sections= document.querySelectorAll("section");
    
    sections.forEach(section=>{
        secTl = gsap.timeline();
        ScrollTrigger.create({
            trigger: section,
            start: 'top 85%',
            end: 'bottom bottom',
            animation: secTl,
            scrub: true,
            onToggle: self => activateNav()
        })

        function activateNav(){
            let secId= section.getAttribute("id");
            let navs = document.querySelectorAll(".main-nav-item");

            navs.forEach(nav=>{
             let navLoc = nav.getAttribute("location");
            
             if (secId !== null && secId===navLoc) {
               
                 if (!nav.classList.contains("active")) {
                    document.querySelector(".active").classList.remove("active");
                    nav.classList.add("active");
                }
               
                     
                
              
             }
            //  for footer nav

            if(secId==="quote"){
                document.querySelector(".active-foot").classList.remove("active-foot");
                document.getElementById("contact-foot").classList.add("active-foot");
            }
            })
            
        }
      
    })
}

function partnerAmin(){
    const partnerSec = document.querySelector(".partners-section");
    let partnerTl = gsap.timeline();

    ScrollTrigger.create({
        trigger: partnerSec,
        start: 'top 95%',
        end: 'bottom 95%',
        animation: partnerTl
    })

    const partnerLogo = document.querySelectorAll(".partners img");
     partnerLogo.forEach(logo => {
        partnerTl.from(logo,{opacity:0,scale:0},"<")
     });
}

function checkAnim(){
    const checkSec = document.querySelector(".check-corona");
     let checkTl =gsap.timeline();

     ScrollTrigger.create({
        trigger: checkSec,
        start: 'top 95%',
        end:'bottom 95%',
        animation:checkTl,
        scrub:true
     })

     checkTl.from(".check-covid",{opacity:0,yPercent:80,scale:0.8})
}

function reasonAnim(){
    const reasonSec = document.querySelector(".vaccine-reasons");
    const reasonHeadingP = document.querySelectorAll(".vaccine-reasons__heading p");
    const reasonHeading = document.querySelectorAll(".vaccine-reasons__heading h1");
    const reasonCards= document.querySelectorAll(".vaccine-cards>div");

    const reasonTl = gsap.timeline({duration:'5000ms'});

    ScrollTrigger.create({
        trigger: reasonSec,
        start: 'top 95%',
        end:'bottom 95%',
        scrub:true,
        animation:reasonTl
    })

    reasonTl.from(reasonHeading,{opacity:0,yPercent:-100,xPercent:-100,xPercent:-50});
    reasonTl.from(reasonHeadingP,{opacity:0,yPercent:-100,xPercent:-100,xPercent:50},"<");

    reasonCards.forEach(card => {
        reasonTl.from(card,{xPercent:-100,opacity:0})
    });
    
}

function regAnim(){
    const regSec = document.querySelector(".registration");
    const regTl= gsap.timeline();

    ScrollTrigger.create({
        trigger:regSec,
        start:'top 85%',
        end:'bottom 75%',
        animation: regTl

    })

    const regImg =document.querySelectorAll(".registration-img img");

    regImg.forEach(img => {
        regTl.from(img,{opacity:0,scale:0,delay:1},"-=1");
    });

    const regH1 = document.querySelector(".registration-details h1");
    const regH2 = document.querySelectorAll(".registration-details h2");

    regTl.from(regH1,{opacity:0,yPercent:-50},"<");
    regH2.forEach(Header => {
        regTl.from(Header,{opacity:0,yPercent:-50},"-=0.2")
    });

}

