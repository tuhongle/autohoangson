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
            '768': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '992': {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            '1024': {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide v-for="card in cards" :key="card.id">
            <div class="card border-0">
                <img :src="card.src" :alt="card.alt" class="card-img-top mb-3">
                <div class="card-body py-3">
                    <h5 class="card-title mb-3 fw-bolder">{{ card.title }}</h5>
                    <p class="card-subtitle mb-3 small truncate-text">{{ card.text }}</p>
                    <button class="btn btn-primary">
                        <a :href="card.html" class="text-light text-decoration-none">Xem thêm</a>
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
import card1 from '../assets/cards/card-1.png'
import card2 from '../assets/cards/card-2.png'
import card3 from '../assets/cards/card-3.jpg'
import card4 from '../assets/cards/card-4.jpg'

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
        {src: card1, alt: "1", title: "ĐỒNG SƠN", text: "Đồng sơn ô tô là những kỹ thuật nhằm sửa chữa, lấy lại diện mạo, hình dáng và màu sơn ban đầu của một chi tiết, bộ phận trên xe hay toàn bộ xe. Khi đồng sơn, xe trải qua 2 giai đoạn là làm đồng gồm các kỹ thuật như gò, chà, nắn kéo… và làm sơn gồm nhiều bước can thiệp vào từng lớp sơn, từng chi tiết nhỏ để đem lại màu sơn chuẩn xác, có độ mịn và bóng như sơn gốc. Trong tương lai, nó sẽ còn phát triển ở một tầm cao mới.", html: '/dich-vu/dong-son-oto.html'},
        {src: card2, alt: "2", title: "DETAILING", text: "Detailing chính là công việc chăm sóc xe hơi hay gọi một cách xa hoa hơn tí đó là Car Spa. Cụ thể là thực hiện các công việc như như làm đẹp nội ngoại thất, khoang máy cho xe rất kỹ lưỡng bao gồm các bước như rửa xe, dọn dẹp, tẩy ố, đánh bóng… bằng các thiết bị, vật liệu chuyên dụng Sau khi trải qua các bước detail chuyên nghiệp, chiếc xe sẽ quay về tình trạng thẩm mỹ có thể coi là như mới.", html: '/dich-vu/detailing-oto.html'},
        {src: card3, alt: "3", title: "MÁY GẦM ĐIỆN", text: "Ai chẳng muốn chiếc xe của mình luôn được “Mạnh khỏe” Tuy nhiên thì thời gian cùng với những thói quen sử dụng ô tô của chính những chủ nhân chiếc xế hộp đó gây nên những vấn đề về máy gầm điện. Những chủ nhân của các dòng ô tô đặc biệt là các dòng ô tô sang như Mercedes, BMW, Audi, Range Rover…", html: "/dich-vu/may-gam-dien-oto.html"},
        {src: card4, alt: "4", title: "ĐỒ CHƠI", text: "Phụ kiện ô tô, đồ chơi xe ô tô là những vật dụng, trang thiết bị được lắp đặt thêm vào xe nhằm phục vụ mục đích sử dụng của chủ xe, cũng như giúp tăng thêm tính thẩm mỹ, tiện nghi, đặc biệt là đảm bảo an toàn cho người lái. Mục đích chính của chúng là nhằm tăng tính an toàn, tạo sự thoải mái, tiện nghi cho lái xe và hành khách trên xe ô tô.", html: "/dich-vu/do-choi-oto.html"},
      ],
    }
  }
};
</script>

<style scoped lang="scss">
.card-body {
  p.truncate-text {
    -webkit-line-clamp: 4;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
</style>
  