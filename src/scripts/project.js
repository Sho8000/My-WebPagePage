$(() => {

  var isAnimationComplete=false;

  var tlFirstFade = gsap.timeline();
  var tlNavFade = gsap.timeline();
  var tlToSize0 = gsap.timeline();

    //FirstAnimation
    tlFirstFade.to(".FirstFade",{
      scaleY: 0,
      stagger: 0,
      duration:0.1,
    }).then(()=>{
      $(".FirstFade").removeClass("FirstOpacity")
      }).then(()=>{
        tlFirstFade.to(".FirstFade",{
        scaleY: 1,
        stagger: 0.2,
        duration: 0.5,  
      })
    })
  
  //Nav hamburger/close button
  $(".hamburgerSVG").on("click",()=>{
    if(!isAnimationComplete){
      tlToSize0.to(".NavFade",{
        scaleY: 0,
        stagger: 0,
        duration:0.5,
      }).then(()=>{
        tlToSize0.pause();
        $(".NavFade").removeClass("opacity")
      })
    }
    $(".NavContainer").removeClass("Righthide");
    setTimeout(() => {
      if(!isAnimationComplete){
        tlNavFade.to(".NavFade",{
          scaleY: 1,
          stagger: 0.2,
          duration: 0.5,  
          onComplete: ()=>{
            isAnimationComplete=true;
          }
        })
      }else{
        tlNavFade.play()
      }        
    }, 500);
  })
  $(".CloseSVG").on("click",()=>{
    if(isAnimationComplete){
      tlNavFade.reverse().then(()=>{
        $(".NavContainer").addClass("Righthide");
      })  
    }
  })

  //Go to Other Link
  $(".MoveToOtherPages").on("click",function(){
    tlNavFade.reverse().then(()=>{
      window.location.href = `${$(this).val()}`;
    });
  })
  
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow:true,
      slideShadows:true,
      shadowOffset:20,
      shadowScale:0.94,
    },
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

    //Link Logo Brightness
    $(".LinkLogo").on("mouseenter", function(){
      $(this).toggleClass("FilterBrightnessON")
    }).on( "mouseleave", function(){
      $(this).toggleClass("FilterBrightnessON")
    })
  
})
