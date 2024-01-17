<template>
  <Navbar />
  <main>
    <section class="background">
      <Background :background="backgroundText" />
    </section>
    <section class="content">
      <div class="container-lg my-3 my-md-5">
        <img :src="recruit" alt="hình tuyển dụng" class="img-fluid rounded">
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

import recruit from '../../assets/main/recruit.jpg'

const backgroundText = "Tuyển dụng";

</script>

<style>
#app {
  font-family: Roboto, Lato, Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
