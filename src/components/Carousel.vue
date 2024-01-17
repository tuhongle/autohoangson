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
import hinhbia from '../assets/carousel/hinh-bia.png'
import hinhson from '../assets/carousel/hinh-son.png'
import baoduong from '../assets/carousel/bao-duong.png'
import baohiem from '../assets/carousel/insurance.png'
import diachi from '../assets/carousel/dia-chi.png'

export default {
    name: "Carousel",
    data() {
        return {
            images: [
                {src: hinhbia, alt: 'hình bìa', active: true},
                {src: hinhson, alt: 'hình sơn', active: false},
                {src: baoduong, alt: 'hình bảo dưỡng', active: false},
                {src: baohiem, alt: 'hình bảo hiểm', active: false},
                {src: diachi, alt: 'hình địa chỉ', active: false},
            ]
        }
    },
}
</script>

<style scoped>
img {
    /* border:2px solid #fff; */
    -moz-box-shadow: 5px 10px 5px #000;
    -webkit-box-shadow: 5px 10px 5px #000;
    box-shadow: 5px 10px 5px #000;
}
</style>
