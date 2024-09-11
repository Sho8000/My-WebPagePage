$(() => {

  $(".ForLink").on( "mouseenter", ()=>{
    $("#MainPicture").toggleClass("FilterBrightnessON")
    $(".LetterContainer").toggleClass("FilterBrightnessON")
    $(".LinkUnderP").toggleClass("active")
  } ).on( "mouseleave", ()=>{
    $("#MainPicture").toggleClass("FilterBrightnessON")
    $(".LetterContainer").toggleClass("FilterBrightnessON")
    $(".LinkUnderP").toggleClass("active")
  });

  $(".LinkLogo").on("mouseenter", function(){
    $(this).toggleClass("FilterBrightnessON")
  }).on( "mouseleave", function(){
    $(this).toggleClass("FilterBrightnessON")
  })

  var tlFade = gsap.timeline();
  var tlExpansion = gsap.timeline();

  //FirstAnimation
  tlFade.to(".Fade",{
    scaleY: 0,
    stagger: 0,
    duration:0.1,
  }).then(()=>{
    $(".Fade").removeClass("opacity")
    }).then(()=>{
      tlFade.to(".Fade",{
      scaleY: 1,
      stagger: 0.2,
      duration: 0.5,  
    })
  })
  
/*   tlFade.from(".Fade", {
    scaleY: 0,
    stagger: 0.2,
    duration: 0.5,
  });
 */
  $(".MoveToOtherPages").on("click",function(){
    tlFade.reverse().then(()=>{
      if($(this).val()!=="pages/Project.html"){
        window.location.href = `${$(this).val()}`;
      }else{
        $("#MainPicture").addClass("FilterBrightnessOFF")
        tlExpansion.to(".Expension",{
          scale:2,
          ease: "power4.out",
          duration:1.5,
          onUpdate:()=>{
//            console.log('here')
          },
          onComplete: ()=>{
            setTimeout(()=>{
              window.location.href = `${$(this).val()}`;
            },500)
          }
        })      
      }
    });
  })
})
