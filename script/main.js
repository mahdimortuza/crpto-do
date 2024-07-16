// logic for handling toggle menu
    $(document).ready(function() {
        $('#menu-toggle').click(function() {
            $('#mobile-menu').toggleClass('hidden');
        });
        $('[id="menu-item"]').click(function() {
            $('#mobile-menu').addClass('hidden');

        })
    }); 

//  slider logic starts here 
   var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      freeMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {        
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
      }
    });