<template>
  <footer class="footer">&copy; Davejs, 2021. All rights reserved!</footer>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import gsap from 'gsap';

onMounted(() => {
  gsap.from(".footer", {
    duration: 1,
    color: "#f2f2f2",
    fontSize: "1rem",
    yoyo: true,
  })
});
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(151, 151, 151);
  font-size: 0.8rem;
  z-index: 1;
}
</style>