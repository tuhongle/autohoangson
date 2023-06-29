<template>
    <div class="container-lg">
        <swiper
          :slidesPerView="1"
          :spaceBetween="10"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :navigation="true"
          :loop="true"
          :breakpoints="{
            '640': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '768': {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            '992': {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            '1024': {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide v-for="card in cards" :key="card.id">
            <div class="card border-0">
                <img :src="card.src" :alt="card.alt" class="card-img-top">
                <div class="card-body py-3">
                    <h5 class="card-title mb-4 fw-bolder">{{ card.title }}</h5>
                    <p class="small">{{ card.text }}</p>
                    <button class="btn btn-primary">
                        <a href="#" class="text-light text-decoration-none">Xem thêm</a>
                    </button>
                </div>
            </div>
          </swiper-slide>
        </swiper>
    </div>
  </template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import card1 from '../assets/cards/card-1.jpg'
import card2 from '../assets/cards/card-2.jpg'
import card3 from '../assets/cards/card-3.jpg'
import card4 from '../assets/cards/card-4.jpg'
import card5 from '../assets/cards/card-5.jpg'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
  
  data() {
    return {
      cards: [
        {src: card1, alt: "1", title: "ĐỒNG SƠN", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore odio vel. Aliquid, perferendis suscipit?"},
        {src: card2, alt: "2", title: "DETAILING", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore odio vel. Aliquid, perferendis suscipit?"},
        {src: card3, alt: "3", title: "MÁY GẦM", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore odio vel. Aliquid, perferendis suscipit?"},
        {src: card4, alt: "4", title: "ĐIỆN ÔTÔ", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore odio vel. Aliquid, perferendis suscipit?"},
        {src: card5, alt: "5", title: "ĐỒ CHƠI", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore odio vel. Aliquid, perferendis suscipit?"},
      ],
    }
  }
};
</script>
  