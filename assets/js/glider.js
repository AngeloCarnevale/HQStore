const $carousel = document.querySelector('.js-carousel')

new Glider($carousel, {
  slidesToShow: 5,
  slidesToScroll: 5,
  draggable: true,
  arrows: {
    prev: ".glider-prev",
    next: ".glider-next"
  },
  scrollLock: true
})
 