$(() => {

  var isAnimationComplete=false;

  var tlFirstFade = gsap.timeline();
  var tlNavFade = gsap.timeline();
  var tlToSize0 = gsap.timeline();

  tlFirstFade.from(".Fade1Gsap", {
    scale: 0,
    stagger: 0.2,
    duration: 0.8,
  }).from(".Fade2Gsap",{
    scale: 0,
    stagger: 0.2,
    duration: 0.8,
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
    if($(this).val()=="../pages/ContactMe.html" || $(this).val()== "../pages/Project.html"){
      tlNavFade.reverse().then(()=>{
        window.location.href = `${$(this).val()}`;
      });
    }else{
      if(isAnimationComplete){
        tlNavFade.reverse().then(()=>{
          $(".NavContainer").addClass("Righthide");
        }).then(()=>{
          setTimeout(() => {
            window.location.href = `${$(this).val()}`;            
          }, 500);
        })
      }  
    }

  })
  
  //Main Picture Animation
  $(".transparentContainer").on( "mouseenter", ()=>{
    $("#MainPicture").toggleClass("FilterBrightnessON")
    $(".LetterContainer").toggleClass("FilterBrightnessON")
  } ).on( "mouseleave", ()=>{
    $("#MainPicture").toggleClass("FilterBrightnessON")
    $(".LetterContainer").toggleClass("FilterBrightnessON")
  });


  $(".textArea").on("click",function(){
    console.log("hello")
    tlFirstFade.reverse()
//    window.location.href = `../pages/ContactMe.html`;
  })

  //Link Logo Brightness
  $(".LinkLogo").on("mouseenter", function(){
    $(this).toggleClass("FilterBrightnessON")
  }).on( "mouseleave", function(){
    $(this).toggleClass("FilterBrightnessON")
  })

});