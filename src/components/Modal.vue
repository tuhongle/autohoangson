<template>
  <div class="modal fade shadow" id="register" tabindex="-1" aria-labelledby="registerLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5 mx-auto" id="registerLabel">ĐĂNG KÝ DỊCH VỤ</h1>
        <button type="button" class="btn-close position-absolute" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form action="">
            <h5 class="mt-4">1. Dịch vụ cho xe (*)</h5>
            <p class="fst-italic ms-4">Có thể chọn nhiều phương án</p>
            <div class="row row-cols-3">
                <div class="col mb-3" v-for="service in services" :key="service.id">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" :id="service.id">
                        <label class="form-check-label" :for="service.id">
                            {{ service.label }}
                        </label>
                    </div>
                </div>
            </div>
            <h5 class="mt-4">2. Thông tin khách hàng</h5>
            <p class="fst-italic ms-4">Vui lòng để lại thông tin</p>
            <div class="row row-cols-2 mb-4">
                <div class="col mb-3">
                    <input type="text" class="form-control shadow-none" name="Họ tên" placeholder="Họ và tên *" required>
                </div>
                <div class="col mb-3">
                    <input type="tel" class="form-control shadow-none" name="Số điện thoại" placeholder="Điện thoại *" required>
                </div>
                <div class="col mb-3">
                    <input type="text" class="form-control shadow-none" name="Thương hiệu xe" placeholder="Thương hiệu xe">
                </div>
                <div class="col mb-3">
                    <input type="date" class="form-control shadow-none" name="Ngày hẹn">
                </div>
                <div class="col">
                    <div class="form-check">
                        <input type="radio" class="form-check-input" name="Dịch vụ" id="insurance">
                        <label for="insurance" class="form-check-label">Dịch vụ bảo hiểm</label>
                    </div>
                </div>
                <div class="col">
                    <div class="form-check">
                        <input type="radio" class="form-check-input" name="Dịch vụ" id="cash">
                        <label for="cash" class="form-check-label">Dịch vụ tiền mặt</label>
                    </div>
                </div>
            </div>
            <div class="row mb-4">
                <div class="col-12">
                    <textarea class="form-control shadow-none" name="yêu cầu" cols="30" rows="5" placeholder="Yêu cầu của khách hàng..."></textarea>
                </div>
            </div>
            <div class="row mb-4">
                <div class="col-12 text-center">
                    <button class="btn btn-primary text-light px-4 py-2 mb-3">ĐĂNG KÝ</button>
                    <p class="lead">Hotline tư vấn: {{ tele }}</p>
                </div>
            </div>
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import * as bootstrap from 'bootstrap'

export default {
    name: "Modal",
    data() {
        return {
            modal: null,
            tele: '0999999999',
            showModal: true,
            services: [
                {id: "dong-son", label: "Đồng sơn"},
                {id: "detailing", label: "Detailing"},
                {id: "may-gam", label: "Máy gầm"},
                {id: "dien-oto", label: "Điện ôtô"},
                {id: "do-choi", label: "Đồ chơi"},
            ]
        }
    },
    mounted() {
        this.modal = new bootstrap.Modal('#register');
        this.modal.show();
    },
    methods: {
        closeModal() {
            this.modal.hide();
        }
    }
}
</script>