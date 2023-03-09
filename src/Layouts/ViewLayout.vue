<template lang="">
  <div>
    <main>
      <Navbar />
      <router-view />
      <Footer />
    </main>
  </div>
</template>
<script>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
export default { components: { Navbar, Footer } };
</script>
<style lang=""></style>
