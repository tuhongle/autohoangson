<template>
  <div class="backgroundInsert"></div>
  <div class="container-fluid d-flex align-items-center justify-content-center">
    <h1 class="display-3 fw-bold">{{ background }}</h1>
  </div>
</template>

<script>
export default {
    name: "Background",
    props: ['background'],
}
</script>