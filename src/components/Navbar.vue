<template>
  <nav class="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
    <div class="container-lg">
      <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarMenu" aria-controls="navbarMenu" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a href="#" class="navbar-brand mx-auto ms-md-start">
          <img src="../assets/logo-autohoangson.png" alt="logo-autohoangson" class="img-fluid" width="100">
      </a>
      <div class="offcanvas offcanvas-start bg-dark-subtle" tabindex="-1" id="navbarMenu" aria-labelledby="navbarMenuLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title fw-bold" id="navbarMenuLabel">AUTO HOÀNG SƠN</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body px-0">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item me-2">
            <a href="/index.html" class="nav-link px-3 py-3" aria-current="page">TRANG CHỦ</a>
            </li>
            <li class="nav-item me-2">
              <a href="" class="nav-link px-3 py-3">GIỚI THIỆU</a>
            </li>
            <li class="nav-item me-2 dropdown">
              <a href="" class="nav-link px-3 py-3 d-flex" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                DỊCH VỤ
                <i class="bi bi-chevron-down ms-md-0 ps-md-2 ms-auto"></i>
              </a>
              <div class="dropdown-menu bg-dark-subtle text-light pb-2 pt-0 py-md-0 px-3 px-md-0 text-start text-md-center">
                <a href="" class="dropdown-item py-2 border-bottom border-1 border-dark-subtle">ĐỒNG SƠN</a>
                <a href="" class="dropdown-item py-2 border-bottom border-1 border-dark-subtle">DETAILING</a>
                <a href="" class="dropdown-item py-2 border-bottom border-1 border-dark-subtle">MÁY GẦM</a>
                <a href="" class="dropdown-item py-2 border-bottom border-1 border-dark-subtle">ĐIỆN ÔTÔ</a>
                <a href="" class="dropdown-item py-2 border-bottom border-1 border-dark-subtle">ĐỒ CHƠI</a>
              </div>
            </li>
            <li class="nav-item me-2">
              <a href="" class="nav-link px-3 py-3">BẢO HIỂM</a>
            </li>
            <li class="nav-item me-2">
              <a href="" class="nav-link px-3 py-3">TUYỂN DỤNG</a>
            </li>
            <li class="nav-item me-2">
              <a href="/contact.html" class="nav-link px-3 py-3">LIÊN HỆ</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      open : false,
    }
  },
  methods: {}
}
</script>