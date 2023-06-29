<template>
    <div class="container-fluid px-0">
        <div id="heroImage" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item" data-bs-interval="2000" :class="{'active': image.active}" v-for="image in images" :key="image.src">
                    <img :src="image.src" class="d-block w-100" :alt="image.alt">
                </div>
            </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#heroImage" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#heroImage" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
    </div>
</template>

<script>
import dongson from '../assets/carousel/dong-son.jpg'
import detailing from '../assets/carousel/detailing.jpg'
import khunggam from '../assets/carousel/khung-gam.jpg'
import dienmay from '../assets/carousel/dien-may.jpg'
import dochoi from '../assets/carousel/do-choi.jpg'

export default {
    name: "Carousel",
    data() {
        return {
            images: [
                {src: dongson, alt: 'hình ảnh Đồng Sơn', active: true},
                {src: detailing, alt: 'hình ảnh Detailing', active: false},
                {src: khunggam, alt: 'hình ảnh Khung gầm', active: false},
                {src: dienmay, alt: 'hình ảnh Điện máy', active: false},
                {src: dochoi, alt: 'hình ảnh Đồ chơi', active: false},
            ]
        }
    },
}
</script>
