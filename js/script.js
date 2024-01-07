






var swiper = new Swiper(".mySwiper", {
  autoHeight: true, //enable auto height
  spaceBetween: 10,
  slidesPerView: 1,
   
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {  
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
	


			
	
	
        



   



    
