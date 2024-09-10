$(() => {

  var tlFirstFade = gsap.timeline();

  tlFirstFade.from(".Fade1Gsap", {
    scale: 0,
    stagger: 0.2,
    duration: 0.8,
  }).from(".Fade2Gsap",{
    scale: 0,
    stagger: 0.2,
    duration: 0.8,
  })

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

});