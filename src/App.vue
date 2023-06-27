<template>
  <Navbar />
  <main>
    <section class="hero-images py-5">
      <Carousel />
    </section>
    <section class="cards py-5">
      <Cards />
    </section>
  </main>
  <footer class="bg-dark">
    <Footer />
  </footer>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Carousel from './components/Carousel.vue'
import Cards from './components/Cards.vue'

export default {
  name: 'App',
  components: {
    Navbar, Footer, Carousel, Cards
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
