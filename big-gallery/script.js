window.addEventListener('load', () => {
  document.querySelectorAll('.slr2-big-gallery .swiper').forEach((swiper) => {
    let delay = '3s';
    let timer = swiper.querySelector('.swiper-timer');

    new Swiper(swiper, {
      // Optional parameters
      loop: true,
      lazy: {
        loadPrevNext: true,
      },
      autoplay: {
        delay: delay,
        disableOnInteraction: false,
      },

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
      on: {
        transitionStart: () => {
          if (!timer) return;
          timer.classList.remove('swiper-timer--animate');
          timer.style.width = '0';
        },
        transitionEnd: () => {
          if (!timer) return;
          timer.classList.add('swiper-timer--animate');
          timer.style.width = '100%';
        },
      },
    });
  });
});
