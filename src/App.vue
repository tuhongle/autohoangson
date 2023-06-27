<template>
  <Navbar />
  <main>
    <section class="hero-images vh-100">
      <div class="container">

      </div>
    </section>
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar, Footer
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
