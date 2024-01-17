<template>
  <Navbar />
  <main>
    <section class="background">
      <Background :background="backgroundText" />
    </section>
    <section class="content">
      <div class="container-lg">
        <div class="row my-5">
          <div class="col-12 col-xl-8">
            <div class="main-content">
              <div class="text-center mb-5">
                <img :src="image[0]" alt="hình giới thiệu số 1" class="img-fluid rounded">
              </div>
              <p class="lh-lg mb-4 lead"><strong>Công ty TNHH TM DV Sửa Chữa Ô Tô Hoàng Sơn (Auto Hoàng Sơn)</strong> chính thức ra đời năm 2020. Khởi đầu từ một xưởng sửa chữa, đồng sơn ô tô nhỏ, sau 3 năm xây dựng, hình thành và phát triển Auto Hoàng Sơn đã khẳng định được uy tín trên thị trường dịch vụ ô tô.</p>
              <div class="text-center mb-5">
                <img :src="image[1]" alt="hình giới thiệu số 2" class="img-fluid rounded">
              </div>
              <h3 class="text-danger fw-bold mb-3">Là đối tác hợp tác tin cậy</h3>
              <p class="lh-lg"><strong>Auto Hoàng Sơn</strong> tự hào là đối tác tin cậy được các công ty bảo hiểm ô tô uy tín ủy quyền sửa chữa, đền bù tổn thất và là thành viên trong Liên Minh hợp tác xã ô tô Miền Nam, đồng thời là đối tác của một số công ty vận tải, cho thuê xe tự lái trên địa bàn thành phố Hồ Chí Minh, Bình Dương, Đồng Nai.</p>
              <div class="text-center mb-5">
                <img :src="image[2]" alt="hình giới thiệu số 3" class="img-fluid rounded">
              </div>
              <p class="lh-lg">Hiện nay, Auto có 2 cơ sở tại TP Hồ Chí Minh. Các cơ sở đều được trang bị máy móc hiện đại, sẵn sàng phục vụ khách hàng 7 ngày/ tuần. Bên cạnh đó, đội ngũ nhân viên của Auto Hoàng Sơn luôn được đào tạo nâng cao tay nghề, cải thiện bản thân không ngừng nhằm hướng tới 3 giá trị cốt lõi trong chất lượng dịch vụ:</p>
              <ul>
                <li class="mb-2 text-primary"><strong>Kỹ năng, kỹ thuật thành thạo</strong></li>
                <li class="mb-2 text-primary"><strong>Phong cách chuyên nghiệp</strong></li>
                <li class="mb-2 text-primary"><strong>Thái độ chuyên tâm</strong></li>
              </ul>
              <p class="lh-lg">Đây cũng là 3 giá trị cốt lõi để Auto Hoàng Sơn hướng tới cung cấp những dịch vụ tốt nhất có thể cho khách hàng theo tiêu chí:</p>
              <h3 class="text-danger text-center my-3">"Chăm sóc bằng tâm dịch vụ xứng tầm"</h3>
              <p class="lh-lg">Nhờ chuyên tâm trong xây dựng uy tín, nâng cao chất lượng dịch vụ, <b>Auto Hoàng Sơn</b> đã từng bước chinh phục được những khách hàng khó tính nhất, với những dòng xe từ thông dụng cho đến những dòng xe ở phân khúc cao cấp nhất.</p>
            </div>
          </div>
          <div class="col-12 col-xl-4 d-none d-xl-block">
            <div class="card ps-2 border-0">
              <div class="card-body text-light p-4">
                <h5 class="card-title fw-bold mb-4">THÔNG TIN LIÊN HỆ</h5>
                <ul class="list-unstyled">
                  <li class="small card-text border border-1 border-secondary d-flex align-items-center">
                    <i class="bi bi-telephone-fill fs-5 me-1 px-4 d-flex align-items-center justify-content-center"></i>
                    <div class="ps-3 d-inline-block py-3">0982.93.97.79</div>
                  </li>
                  <li class="small card-text border border-1 border-secondary d-flex align-items-center">
                    <i class="bi bi-envelope-fill fs-5 me-1 px-4 d-flex align-items-center justify-content-center"></i>
                    <div class="ps-3 d-inline-block"><a href="mailto:cvdv@autohoangson.com" class="text-light text-decoration-none">cvdv@autohoangson.com</a></div>
                  </li>
                  <li class="small card-text border border-1 border-secondary d-flex align-items-center">
                    <i class="bi bi-house-check fs-5 me-1 px-4 d-flex align-items-center justify-content-center"></i>
                    <div class="ps-3 d-inline-block pe-3">08 Bùi Công Trừng - Đông Thạnh - Hóc Môn - HCM</div>
                  </li>
                  <li class="small card-text border border-1 border-secondary d-flex align-items-center">
                    <i class="bi bi-browser-chrome fs-5 me-1 px-4 d-flex align-items-center justify-content-center"></i>
                    <div class="ps-3 d-inline-block"><a href="https://www.autohoangson.com" class="text-light text-decoration-none">autohoangson.com</a></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
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
</template>

<script setup>
import Navbar from '../../components/Navbar.vue'
import Footer from '../../components/Footer.vue'
import Background from '../../components/Background.vue'
import Plugins from '../../components/Plugins.vue'

import intro from '../../assets/main/info.png'
import intro1 from '../../assets/main/intro-1.jpg'
import intro2 from '../../assets/main/intro-2.jpg'

const backgroundText = "AUTO Hoàng Sơn - Chăm sóc ÔTÔ chuyên nghiệp";
const image = [intro, intro1, intro2];

</script>

<style>
#app {
  font-family: Roboto, Lato, Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
