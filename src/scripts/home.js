$(() => {

  $(".Courgette").on("click",function(){
    console.log("Hello")
    })

  $(".ForLink").on( "mouseenter", ()=>{
    $("#MainPicture").toggleClass("FilterBrightnessON")
    $(".LetterContainer").toggleClass("FilterBrightnessON")
  } ).on( "mouseleave", ()=>{
    $("#MainPicture").toggleClass("FilterBrightnessON")
    $(".LetterContainer").toggleClass("FilterBrightnessON")
  });

  $(".LinkLogo").on("mouseenter", function(){
    $(this).toggleClass("FilterBrightnessON")
  }).on( "mouseleave", function(){
    $(this).toggleClass("FilterBrightnessON")
  })


  var tlFade = gsap.timeline();

  tlFade.from(".Fade", {
    scaleY: 0,
    stagger: 0.2,
    duration: 0.5,
  });

  $(".MoveToOtherPages").on("click",function(){
    tlFade.to(".Fade", {
      scaleY: 0,
      stagger: 0.2,
      duration: 0.5,
    });
  
  })

})
