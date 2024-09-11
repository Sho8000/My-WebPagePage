$(() => {

  var isAnimationComplete=false;

  var tlNavFade = gsap.timeline();
  var tlToSize0 = gsap.timeline();

  //Nav hamburger/close button
  $(".hamburgerSVG").on("click",()=>{
    if(!isAnimationComplete){
      tlToSize0.to(".Fade",{
        scaleY: 0,
        stagger: 0,
        duration:0.5,
      }).then(()=>{
        tlToSize0.pause();
        $(".Fade").removeClass("opacity")
      })
    }
    $(".NavContainer").removeClass("Righthide");
    setTimeout(() => {
      if(!isAnimationComplete){
        tlNavFade.to(".Fade",{
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
  
    //Link Logo Brightness
    $(".LinkLogo").on("mouseenter", function(){
      $(this).toggleClass("FilterBrightnessON")
    }).on( "mouseleave", function(){
      $(this).toggleClass("FilterBrightnessON")
    })
  
})
