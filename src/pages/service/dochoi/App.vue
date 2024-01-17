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
            <div class="main-content lh-lg">
              <div class="text-cetner mb-5">
                <img :src="dochoi1" alt="hình Đồ chơi 1" class="img-fluid rounded">
              </div>
              <ol>
                <li>
                  <b class="h4 ps-1 text-decoration-underline mb-3 d-block">Phụ kiện ô tô, đồ chơi ô tô là gì?</b>
                  <p>Phụ kiện ô tô, đồ chơi xe ô tô là những vật dụng, trang thiết bị được lắp đặt thêm vào xe nhằm phục vụ mục đích sử dụng của chủ xe, cũng như giúp tăng thêm tính thẩm mỹ, tiện nghi, đặc biệt là đảm bảo an toàn cho người lái.</p>
                  <p>Mục đích chính của chúng là nhằm tăng tính an toàn, tạo sự thoải mái, tiện nghi cho lái xe và hành khách trên xe ô tô.</p>
                </li>
                <li>
                  <b class="h4 ps-1 text-decoration-underline mb-3 d-block">Khi nào bạn nên dùng phụ kiện ô tô?</b>
                  <p>Từ xưa ta đều biết các xe ô tô giá rẻ thường không được trang bị đầy đủ các phụ kiện, thiết bị đồ chơi xe ô tô, vì để đảm bảo giá thành, chất lượng và độ tiện nghi trên xe, nên khi vừa sắm xe bạn có thể đầu tư cho mình những món phụ kiện đồ chơi xe ô tô vô cùng hữu ích cho xế cưng của mình.</p>
                  <p>Nhưng thế không có nghĩa là những dòng xe cao cấp không cần đến việc lắp đặt các phụ kiện đồ chơi cho xe ô tô. Trên thực tế, các chủ xe thường thích lắp thêm dàn đèn led, kẹp điện thoại, áo ghế, màn hình… để nâng tầm xe ô tô của mình lên.</p>
                  <p>Và sự thật là hầu hết những chiếc ô tô được lắp được phụ kiện đồ chơi điều trông hiện đại và sang trọng hẳn so với những chiếc xe ô tô không lắp.</p>
                </li>
                <li>
                  <b class="h4 ps-1 text-decoration-underline mb-3 d-block">Nguồn gốc đồ chơi ô tô ở đâu tốt nhất?</b>
                  <p>Thông thường, các sản phẩm xuất xứ từ Nhật Bản, châu Âu có mức giá cao hơn hàng nội địa, hàng Tàu, chính về thế nên chất lượng, độ bền cao hơn.</p>
                  <p>Bên cạnh đó, có rất nhiều nguồn hàng nhập lậu, hàng giả, hàng nhái, không có nguồn gốc xuất xứ, được bán với giá siêu rẻ. Bạn tuyệt đối tránh xa mặt hàng này, thay vào đó nên mua hàng chính hãng, có tên tuổi thương hiệu nổi tiếng.</p>
                </li>
              </ol>
            </div>
          </div>
          <div class="col-12 col-xl-4 d-none d-xl-block">
            <div class="text-cetner mb-4">
              <img :src="dochoi" alt="hình Đồ chơi" class="img-fluid rounded">
            </div>
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
import Navbar from '../../../components/Navbar.vue'
import Footer from '../../../components/Footer.vue'
import Background from '../../../components/Background.vue'
import Plugins from '../../../components/Plugins.vue'

import dochoi from '../../../assets/cards/card-4.jpg'
import dochoi1 from '../../../assets/main/dochoi-1.jpg'

const backgroundText = "Đồ chơi Ôtô";

</script>

<style>
#app {
  font-family: Roboto, Lato, Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
