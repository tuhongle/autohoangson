<template>
  <Navbar />
  <main>
    <section class="background">
      <Background :background="backgroundText" />
    </section>
    <section class="addressInfo">
      <div class="container-lg py-5">
        <div class="row">
          <div class="col-12 col-xl-8 mb-5 mb-xl-0">
            <h5 class="border border-1 border-tertiary p-3 fw-bold">
              <i class="bi bi-geo-alt-fill"></i>
              <span class="ps-3">THÔNG TIN ĐỊA CHỈ</span>
            </h5>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="../../assets/Locations/coso-1.png" class="d-block w-100" alt="...">
                  <div class="carousel-caption d-none d-md-block">
                    <p class="display-6 text-dark fw-bold bg-secondary-subtle opacity-50 py-2">Cơ sở 1</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="../../assets/Locations/coso-2.png" class="d-block w-100" alt="...">
                  <div class="carousel-caption d-none d-md-block">
                    <p class="display-6 text-dark fw-bold bg-secondary-subtle opacity-50 py-2">Cơ sở 2</p>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon bg-dark p-5 opacity-50" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon bg-dark p-5 opacity-50" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div class="col-12 col-xl-4">
            <div class="card ps-2 border-0">
              <div class="card-body text-light p-4">
                <h5 class="card-title fw-bold mb-4">THÔNG TIN LIÊN HỆ</h5>
                <ul class="list-unstyled">
                  <li class="small card-text border border-1 border-secondary d-flex align-items-center">
                    <i class="bi bi-telephone-fill fs-5 me-1 px-4 d-flex align-items-center justify-content-center"></i>
                    <div class="ps-3 d-inline-block py-3">0999999999</div>
                  </li>
                  <li class="small card-text border border-1 border-secondary d-flex align-items-center">
                    <i class="bi bi-envelope-fill fs-5 me-1 px-4 d-flex align-items-center justify-content-center"></i>
                    <div class="ps-3 d-inline-block"><a href="mailto:cvdv@autohoangson.com" class="text-light text-decoration-none">cvdv@autohoangson.com</a></div>
                  </li>
                  <li class="small card-text border border-1 border-secondary d-flex align-items-center">
                    <i class="bi bi-house-check fs-5 me-1 px-4 d-flex align-items-center justify-content-center"></i>
                    <div class="ps-3 d-inline-block">08 Bùi Công Trừng - Đông Thạnh - Hóc Môn - HCM</div>
                  </li>
                  <li class="small card-text border border-1 border-secondary d-flex align-items-center">
                    <i class="bi bi-browser-chrome fs-5 me-1 px-4 d-flex align-items-center justify-content-center"></i>
                    <div class="ps-3 d-inline-block"><a href="#index.html" class="text-light text-decoration-none">autohoangson.com</a></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer class="bg-dark">
    <Footer />
  </footer>
</template>

<script>
import Navbar from '../../components/Navbar.vue'
import Footer from '../../components/Footer.vue'
import Background from '../../components/Background.vue'

export default {
  name: 'App',
  components: {
    Navbar, Footer, Background
  },
  data() {
    return {
      backgroundText: "Liên hệ",
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
