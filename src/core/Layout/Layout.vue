<template>
  <div class="container">
    <div class="overlay"></div>
    <Menu />
    <Header />
    <main class="main">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Menu from "./components/Menu.vue";
import Header from './components/TheHeader.vue';
import Footer from './components/TheFooter.vue';
</script>

<style lang="scss">
.container {
  padding: 1rem;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  position: relative;

  display: grid;
  grid-template-rows: auto 1fr auto;
  background-image: url("/images/bg.jpg");
  background-size: cover;
  background-position: center center;
}

.overlay {
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: linear-gradient(0, rgba(0, 0, 0, 0.782), rgba(0, 0, 0, 0.72));
  z-index: 0;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
}
</style>
