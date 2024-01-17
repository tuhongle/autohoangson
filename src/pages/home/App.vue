<template>
  <Navbar />
  <main>
    <section class="hero-images pb-5" style="margin-top: 100px !important;">
      <Carousel />
    </section>
    <section class="cards py-5">
      <Cards />
    </section>
    <section class="caption">
      <div class="container-lg p-5">
        <blockquote class="text-center fst-italic mb-5 text-primary">
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
        <h1 class="mb-5 text-primary">HỆ THỐNG GARAGE</h1>
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
          <div class="col-12 col-md-6 mb-4 mb-md-0">
            <h2 class="fw-bold shadow-lg">TƯ VẤN BẢO HIỂM</h2>
            <p class="lh-lg"><b>Auto Hoàng Sơn</b> là đơn vị đã được hầu hết các công ty bảo hiểm ô tô Việt Nam tin tưởng ủy quyền sửa chữa đền bù tổn thất. Với kinh nghiệm làm việc với nhiều công ty bảo hiểm chúng tôi tin rằng sẽ tư vấn cho khách hàng sản phẩm bảo hiểm phù hợp nhất theo nhu cầu , đặc thù công việc và thói quen sử dụng.</p>
            <h5 class="mb-3 fw-bold">Lợi thế cho khách hàng khi mua bảo hiểm tại Auto Hoàng Sơn:</h5>
            <ul>
              <li class="mb-2">Được tư vấn lựa chọn sản phẩm tốt nhất cho khách hàng.</li>
              <li class="mb-2">Được hỗ trợ làm hồ sơ</li>
              <li class="mb-2">Được tư vấn hỗ trợ khi xẩy ra sự cố, đảm bảo quyền lợi cao nhất cho khách hàng.</li>
              <li class="mb-2">Hướng dẫn khách hàng làm hồ sơ bồi thường tổn thất.</li>
              <li class="mb-2">Được hỗ trợ chi phí giảm trừ, khấu trừ khi xẩy ra tổn thất</li>
              <li class="mb-2">........</li>
            </ul>
            <p class="lh-lg">Ngoài ra tùy vào từng thời điểm mà <span class="fw-bold">Auto Hoàng Sơn</span> luôn có chương trình <u>khuyến mãi</u>, <u>giảm giá</u> cho khách hàng khi mua bảo hiểm.</p>
            <div class="hotline d-flex mb-3">
              <p class="fw-bold me-3 text-danger">Hotline:</p>
              <div class="contact">
                <p>0982 93 97 79 - 0943 87 61 61 ( CS1 )</p>
                <p>0844 77 20 20 - 0947 03 32 32 ( CS2 )</p>
              </div>
            </div>
            <button class="btn btn-light px-3 py-2 border-0 me-3"><a href="/insurance.html" class="text-decoration-none text-dark">XEM THÊM</a></button>
            <button class="btn btn-light px-3 py-2 border-0"><a href="/contact.html" class="text-decoration-none text-dark">LIÊN HỆ</a></button>
          </div>
          <div class="col-12 col-md-6 d-flex flex-column">
            <img :src="insurance" alt="hình tư vấn bảo hiểm" class="d-block img-fluid rounded my-auto" style="filter: drop-shadow(5px 10px 10px black);">
            <img :src="info" alt="hình địa chỉ" class="d-none d-md-block img-fluid rounded my-auto" style="filter: drop-shadow(5px 10px 10px rgba(128, 128, 128, 0.3));">
          </div>
        </div>
      </div>
    </section>
    <section class="customers">
      <div class="container py-5 text-center">
      <h1 class="mb-5 text-primary">ĐỐI TÁC - BẢO HIỂM LIÊN KIẾT</h1>
      <CustomerLogos />
      </div>
    </section>
  </main>
  <!-- Plugins -->
  <div id="plugins" class="position-fixed z-1">
    <Plugins />
  </div>
  <!-- Footer -->
  <footer class="bg-dark">
    <Footer />
  </footer>
  <!-- Modal -->
  <teleport to="#modals">
    <Modal />
  </teleport>
</template>

<script>
import Navbar from '../../components/Navbar.vue'
import Footer from '../../components/Footer.vue'
import Carousel from '../../components/Carousel.vue'
import Cards from '../../components/Cards.vue'
import CustomerLogos from '../../components/CustomerLogos.vue'
import Modal from '../../components/Modal.vue'
import Plugins from '../../components/Plugins.vue'

import icon1 from '../../assets/iconsCaption/icon-1.png'
import icon2 from '../../assets/iconsCaption/icon-2.png'
import icon4 from '../../assets/iconsCaption/icon-4.png'
import icon3 from '../../assets/iconsCaption/icon-3.png'

import garage1 from '../../assets/garages/garage-1.jpg'
import garage2 from '../../assets/garages/garage-2.jpg'

import insurance from '../../assets/main/insurance.png'
import info from '../../assets/main/info.png'

export default {
  name: 'App',
  components: {
    Navbar, Footer, Carousel, Cards, CustomerLogos, Modal, Plugins
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
        {src: garage1, alt: 'garage 1', id: 1, address: '08 Bùi Công Trừng - Đông Thạnh - Hóc Môn - HCM', phone: '0943876161', mail: 'cvdv@autohoangson.com'},
        {src: garage2, alt: 'garage 2', id: 2, address: '20/1A đường số 21 - P.8 - Gò vấp - TP HCM', phone: '0844772020', mail: 'cvdv@autohoangson.com'},
      ],
      insurance,
      info,
    }
  }
}
</script>

<style>
#app {
  font-family: Roboto, Lato, Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}

#modals {
  max-width: 600px !important;
}
</style>
