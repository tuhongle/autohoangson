<template>
  <Navbar />
  <main>
    <section class="hero-images py-5">
      <Carousel />
    </section>
    <section class="cards py-5">
      <Cards />
    </section>
    <section class="caption">
      <div class="container-lg p-5">
        <blockquote class="text-center fst-italic mb-5">
          <h1 class="mb-3"><i class="bi bi-quote"></i>CHĂM XE BẰNG TÂM</h1>
          <h1>DỊCH VỤ XỨNG TẦM<i class="bi bi-quote"></i></h1>
        </blockquote>
        <div class="row">
          <div class="col-6 col-lg-3 mb-3 mb-lg-0" v-for="icon in icons" :key="icon.src">
            <div class="card border-0 text-center">
              <img :src="icon.src" :alt="icon.alt" class="card-img-top w-25 mx-auto">
              <div class="card-body">
                <h4 class="card-title fw-bold">{{ icon.title }}</h4>
                <p class="lead card-text opacity-75">{{ icon.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="garage">
      <div class="container-lg p-5 text-center">
        <h1 class="mb-5">HỆ THỐNG GARAGE</h1>
        <div class="row">
          <div class="col-12 col-lg-6 mb-4 mb-lg-0" v-for="garage in garages" :key="garage.id">
            <div class="row h-100 border-1 border-bottom mx-2 pb-2">
              <div class="col-12 col-sm-6 mb-3 mb-sm-0 overflow-hidden">
                <img :src="garage.src" :alt="garage.alt" class="img-fluid">
              </div>
              <div class="col-12 col-sm-6 text-start">
                <h5 class="fw-bold mb-3">CƠ SỞ {{ garage.id }}</h5>
                <p class="small">
                  <i class="bi bi-geo-alt-fill text-primary me-1"></i>
                  {{ garage.address }}
                </p>
                <p class="small">
                  <i class="bi bi-telephone-fill text-primary me-1"></i>
                  {{ garage.phone }}
                </p>
                <p class="small">
                  <i class="bi bi-envelope-fill text-primary me-1"></i>
                  {{ garage.mail }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="insurance">
      <div class="container-lg p-5 text-start text-light">
        <div class="row">
          <div class="col-12 col-md-6 mb-3 mb-md-0">
            <h2 class="fw-bold">TƯ VẤN BẢO HIỂM</h2>
            <p class="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae numquam nisi alias quidem, voluptatum unde. Excepturi voluptates culpa iusto, ullam ipsum at a cumque ad ab voluptate aut rem suscipit eveniet molestiae nostrum provident, sit dolor quam quod ratione tempora. Corrupti minima sunt dicta totam. Vitae dignissimos veritatis similique temporibus ad nostrum accusantium hic debitis ducimus fuga sunt possimus ullam quo, corporis dolorum optio. Dolor, expedita amet? Assumenda nemo quod fuga nihil, eius molestiae adipisci commodi incidunt id. Accusamus ab consequuntur quasi autem dolore in eius eligendi dolorem, tempore pariatur blanditiis! Similique cupiditate accusamus fugit architecto provident error aspernatur vitae!</p>
            <button class="btn btn-light border-0 me-3">XEM THÊM</button>
            <button class="btn btn-light border-0">LIÊN HỆ</button>
          </div>
          <div class="col-12 col-md-6">
            <img src="../../assets/background/background-1.jpg" alt="" class="img-fluid">
          </div>
        </div>
      </div>
    </section>
    <section class="customers">
      <div class="container py-5 text-center">
      <h1 class="mb-5" data-bs-toggle="modal" data-bs-target="#register">ĐỐI TÁC - BẢO HIỂM LIÊN KIẾT</h1>
      <CustomerLogos />
      </div>
    </section>
  </main>
  <footer class="bg-dark">
    <Footer />
  </footer>
  <!-- Modal -->
  <Modal />
</template>

<script>
import Navbar from '../../components/Navbar.vue'
import Footer from '../../components/Footer.vue'
import Carousel from '../../components/Carousel.vue'
import Cards from '../../components/Cards.vue'
import CustomerLogos from '../../components/CustomerLogos.vue'
import Modal from '../../components/Modal.vue'

import icon1 from '../../assets/iconsCaption/icon-1.png'
import icon2 from '../../assets/iconsCaption/icon-2.png'
import icon4 from '../../assets/iconsCaption/icon-4.png'
import icon3 from '../../assets/iconsCaption/icon-3.png'

import garage1 from '../../assets/garages/garage-1.jpg'
import garage2 from '../../assets/garages/garage-2.jpg'

export default {
  name: 'App',
  components: {
    Navbar, Footer, Carousel, Cards, CustomerLogos, Modal
  },
  data() {
    return {
      icons: [
        {src: icon1, alt: 'icon 1', title: 'KỸ THUẬT VIÊN', text: 'Chuyên nghiệp'},
        {src: icon2, alt: 'icon 2', title: 'TRANG THIẾT BỊ', text: 'Hiện đại'},
        {src: icon3, alt: 'icon 3', title: 'QUY TRÌNH CHĂM SÓC', text: 'Bài bản'},
        {src: icon4, alt: 'icon 4', title: 'UY TÍN - CHẤT LƯỢNG', text: 'Giá cả hợp lý'},
      ],
      garages: [
        {src: garage1, alt: 'garage 1', id: 1, address: '08 Bùi Công Trừng - Đông Thạnh - Hóc Môn - HCM', phone: '0999999999', mail: 'cvdv@autohoangson.com'},
        {src: garage2, alt: 'garage 2', id: 2, address: '20/1A đường số 21 - P.8 - Gò vấp - TP HCM', phone: '0999999999', mail: 'cvdv@autohoangson.com'},
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Roboto, Lato, Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
