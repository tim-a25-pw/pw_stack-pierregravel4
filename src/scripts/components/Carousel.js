import Swiper from 'swiper/bundle';

export default class Carousel {
  constructor(element) {
    this.element = element;
    this.options = {
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: true,
      pagination: {
        el: this.element.querySelector('.swiper-pagination'),
        clickable: true,
        type: 'bullets',
      },

      navigation: {
        nextEl: this.element.querySelector('.swiper-button-next'),
        prevEl: this.element.querySelector('.swiper-button-prev'),
      },
    };
    this.init();
  }

  setOptions() {
    if ('split' in this.element.dataset) {
      this.options.breakpoints = {
        1215: {
          slidesPerView: 3,
          centeredSlides: false,
        },
      };
    }
    if ('autoplay' in this.element.dataset) {
      this.options.autoplay = {
        delay: 5000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      };
    }
    if ('loop' in this.element.dataset) {
      this.options.loop = true;
    }
    if ('slides' in this.element.dataset) {
      this.options.slidesPerView = parseFloat(this.element.dataset.slides);
    }

    if ('space' in this.element.dataset) {
      this.options.spaceBetween = parseFloat(this.element.dataset.space);
    }
  }

  init() {
    this.setOptions();
    new Swiper(this.element, this.options);
  }
}