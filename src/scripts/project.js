$(() => {

  //Nav hamburger/close button
  $(".hamburgerSVG").on("click",()=>{
    $(".NavContainer").removeClass("Righthide")
  })
  $(".CloseSVG").on("click",()=>{
    $(".NavContainer").addClass("Righthide")
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
