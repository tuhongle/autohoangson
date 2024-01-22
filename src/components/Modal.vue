<template>
  <div class="modal fade shadow" id="register" tabindex="-1" aria-labelledby="registerLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5 mx-auto" id="registerLabel">ĐĂNG KÝ DỊCH VỤ</h1>
        <button type="button" class="btn-close position-absolute" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div id="promotionImages" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item" data-bs-interval="2000" :class="{'active': index === 1}" v-for="(image, index) in imageArray" :key="index">
                    <img :src="'https://autohoangson.com/img/banners/'+image" class="d-block w-100" alt="hình Promotion Banner">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#promotionImages" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#promotionImages" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <form @submit.prevent="sendEmail">
            <h5 class="mt-4">1. Dịch vụ cho xe (*)</h5>
            <p class="fst-italic ms-4">Có thể chọn nhiều phương án</p>
            <div class="row row-cols-3">
                <div class="col mb-3" v-for="service in services" :key="service.id">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="service" :value="service.label" :id="service.id" v-model="selectedServices">
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
                    <input type="text" class="form-control shadow-none" name="name" v-model="name" placeholder="Họ và tên *" required>
                </div>
                <div class="col mb-3">
                    <input type="tel" class="form-control shadow-none" name="telephone" v-model="telephone" placeholder="Điện thoại *" required>
                </div>
                <div class="col mb-3">
                    <input type="text" class="form-control shadow-none" name="carType" v-model="carType" placeholder="Thương hiệu xe">
                </div>
                <div class="col mb-3">
                    <input type="date" class="form-control shadow-none" name="date" v-model="date">
                </div>
                <div class="col">
                    <div class="form-check">
                        <input type="radio" class="form-check-input" id="insurance" value="bảo hiểm" v-model="serviceType">
                        <label for="insurance" class="form-check-label">Dịch vụ bảo hiểm</label>
                    </div>
                </div>
                <div class="col">
                    <div class="form-check">
                        <input type="radio" class="form-check-input" id="cash" value="tiền mặt" v-model="serviceType">
                        <label for="cash" class="form-check-label">Dịch vụ tiền mặt</label>
                    </div>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-12">
                    <textarea class="form-control shadow-none" name="message" v-model="message" cols="30" rows="3" placeholder="Yêu cầu của khách hàng..."></textarea>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-12 text-center">
                    <button class="btn btn-primary text-light px-4 py-2 mb-3" type="submit">ĐĂNG KÝ</button>
                    <p class="lead">Hotline tư vấn: {{ tele }}</p>
                    <p class="text-success bg-success-subtle border border-1 border-1 py-2" v-if="success">Cám ơn quý khách. Chúng tôi sẽ liên lạc với bạn sớm nhất!</p>
                </div>
            </div>
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script >
import * as bootstrap from 'bootstrap'
import emailjs from '@emailjs/browser';

export default {
    name: "Modal",
    data() {
        return {
            modal: null,
            success: true,
            tele: '0982.93.97.79',
            showModal: true,
            mailParams: {},
            services: [
                {id: "dong-son", label: "Đồng sơn"},
                {id: "detailing", label: "Detailing"},
                {id: "may-gam", label: "Máy gầm"},
                {id: "dien-oto", label: "Điện ôtô"},
                {id: "do-choi", label: "Đồ chơi"},
                {id: "bao-hiem", label: "Bảo hiểm"},
            ],
            selectedServices: [],
            name: '',
            telephone: null,
            carType: '',
            date: '',
            message: '',
            serviceType: 'bảo hiểm',
            imageArray: null,
        }
    },
    async mounted() {
        this.modal = new bootstrap.Modal('#register');
        this.modal.show();
        this.success = false;
        this.imageArray = await this.fetchBanners();
    },
    methods: {
        sendEmail() {
            this.mailParams = {
                service: this.selectedServices,
                name: this.name,
                telephone: this.telephone,
                carType: this.carType,
                date: this.date,
                serviceType: this.serviceType,
                message: this.message,
            };
            emailjs.send('service_ydbnr89','template_s8r68rm', this.mailParams, 'U4yZ5_-S_d864S08N')
                .then((response) => {
                    this.success = true;
                    this.selectedServices = [];
                    this.name = '';
                    this.telephone = null;
                    this.carType = '';
                    this.date = '';
                    this.serviceType = 'bảo hiểm';
                    this.message = '';
                    console.log('SUCCESS!', response.status, response.text);
                }, (err) => {
                    console.log('FAILED...', err);
                });
        },
        async fetchBanners() {
            try {
                const response = await fetch("https://www.autohoangson.com/img/banners/", {
                    mode: 'no-cors',
                });
                const jsonResponse = await response.json();
                return jsonResponse;
            }
            catch (error) {
                console.log(error);
            }
        }
    },
}
</script>