<template>
  <header class="header">
    <Burger />
    <div class="logo">
      <img :src="logo" alt="logo" />
    </div>
  </header>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import gsap from "gsap";
import Burger from "./Burger.vue";
import { getImageUrl } from "../../../utils";

const logo = import.meta.env.DEV ? getImageUrl('logo') : '/images/logo.svg';

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
