$(() => {

  var isAnimationComplete=false;

  var tlNavFade = gsap.timeline();

  $(".hamburgerSVG").on("click",()=>{
    $(".NavContainer").removeClass("Righthide");
    setTimeout(() => {
      if(!isAnimationComplete){
        tlNavFade.from(".Fade",{
          scaleY: 0,
          stagger: 0.2,
          duration: 0.5,  
          onComplete: ()=>{
            isAnimationComplete=true;
            console.log('isAnimationPlaying:', isAnimationPlaying)
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
})
