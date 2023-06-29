<template>
    <div class="row">
        <swiper
          :slidesPerView="2"
          :spaceBetween="10"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :pagination="{
            dynamicBullets: true,
            clickable: true,
            }"
          :loop="true"
          :breakpoints="{
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
          <swiper-slide v-for="logo in logos" :key="logo.id">
            <div class="card p-3">
                <img :src="logo.src" :alt="logo.alt" class="card-img-top img-fluid">
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

import logo1 from '../assets/customers/logo-1.jpg'
import logo2 from '../assets/customers/logo-2.png'
import logo3 from '../assets/customers/logo-3.png'
import logo4 from '../assets/customers/logo-4.png'
import logo5 from '../assets/customers/logo-5.jpg'
import logo6 from '../assets/customers/logo-6.png'
import logo7 from '../assets/customers/logo-7.png'


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
      logos: [
        {src: logo1, alt: "1"},
        {src: logo2, alt: "2"},
        {src: logo3, alt: "3"},
        {src: logo4, alt: "4"},
        {src: logo5, alt: "5"},
        {src: logo6, alt: "6"},
        {src: logo7, alt: "7"},
      ],
    }
  }
};
</script>
  