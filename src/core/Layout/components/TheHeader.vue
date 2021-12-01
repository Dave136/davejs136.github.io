<template>
  <header class="header">
    <Burger />
    <div class="logo">
      <img src="/images/logo.svg" alt="logo" />
    </div>
  </header>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import gsap from "gsap";
import Burger from "./Burger.vue";

onMounted(() => {
  const logo = document.querySelector(".logo");

  gsap.from(logo, {
    duration: 1,
    x: 50,
    opacity: 0,
  });
})

</script>

<style lang="scss">
.header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  cursor: pointer;
}
</style>
