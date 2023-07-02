<template>
  <Navbar />
  <main>
    <section class="background">
      <Background :background="backgroundText" />
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

<script>
import Navbar from '../../components/Navbar.vue'
import Footer from '../../components/Footer.vue'
import Background from '../../components/Background.vue'
import Plugins from '../../components/Plugins.vue'

export default {
  name: 'App',
  components: {
    Navbar, Footer, Background, Plugins
  },
  data() {
    return {
      backgroundText: "AUTO Hoàng Sơn - Chăm sóc ÔTÔ chuyên nghiệp",
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
