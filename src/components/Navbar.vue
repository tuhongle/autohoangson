<template>
  <nav class="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
    <div class="container-lg">
      <a href="#" class="navbar-brand">
          <img src="../assets/logo-autohoangson.png" alt="logo-autohoangson" class="img-fluid" width="100">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Close</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item me-2">
            <a href="" class="nav-link active" aria-current="page">TRANG CHỦ</a>
            </li>
            <li class="nav-item me-2">
              <a href="" class="nav-link">GIỚI THIỆU</a>
            </li>
            <li class="nav-item me-2">
              <a href="" class="nav-link">DỊCH VỤ</a>
            </li>
            <li class="nav-item me-2">
              <a href="" class="nav-link">BẢO HIỂM</a>
            </li>
            <li class="nav-item me-2">
              <a href="" class="nav-link">TUYỂN DỤNG</a>
            </li>
            <li class="nav-item me-2">
              <a href="" class="nav-link">LIÊN HỆ</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>