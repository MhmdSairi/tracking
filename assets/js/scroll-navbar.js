// @ts-nocheck
(function ($) {
   $(function () {
      const header = $(".start-style");
      
      $(window).scroll(function () {
        const scroll = $(window).scrollTop();
        
        // pengkondisian ketika website di scroll lebih dari 5 pixel
        if (scroll >= 5) {
          header.removeClass("start-style").addClass("scroll-on");
        } else {
          header.removeClass("scroll-on").addClass("start-style");
        }
      });
    });  
  })(jQuery);
  