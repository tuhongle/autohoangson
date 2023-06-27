<template>
    <div class="container-lg">
        <swiper
          :slidesPerView="1"
          :spaceBetween="10"
          :navigation="{
            clickable: true,
          }"
          :breakpoints="{
            '640': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '768': {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            '992': {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            '1024': {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide>
            <div class="card border-0">
                <img src="https://images.hdqwalls.com/download/retrowave-car-4k-fr-1280x720.jpg" alt="" class="card-img-top">
                <div class="card-body py-3">
                    <h5 class="card-title mb-4 fw-bolder">ĐỒNG SƠN</h5>
                    <p class="small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore odio vel. Aliquid, perferendis suscipit?</p>
                    <button class="btn btn-primary">
                        <a href="#" class="text-light text-decoration-none">Xem thêm</a>
                    </button>
                </div>
            </div>
          </swiper-slide>
          <swiper-slide>Slide 2</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
          <swiper-slide>Slide 4</swiper-slide>
          <swiper-slide>Slide 5</swiper-slide>
        </swiper>
    </div>
  </template>

  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
    import 'swiper/css/pagination';
  
    // import required modules
    import { Pagination } from 'swiper';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [Pagination],
        };
      },
    };
  </script>
  