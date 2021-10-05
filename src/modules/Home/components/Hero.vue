<template>
  <div class="text">
    <p class="text-line">
      Hello! My name is
      <span class="name">David</span>
    </p>
    <p class="text-line">Full Stack developer</p>
  </div>
  <button class="button button--outline">Hire me</button>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import gsap from 'gsap';

const tl = gsap.timeline({ defaults: { duration: 1, opacity: 0 } })

onMounted(() => {
  tl.from(".text", {
    scale: 0,
    ease: "back.out",
  });

  tl.from(".name", {
    delay: .2,
    ease: "power4.out",
  }, "-=.1");

  tl.from(".button", {
    ease: "power4.in",
    scale: 1.4,
  }, "-=.8")
});
</script>

<style lang="scss">
.text {
  text-align: center;
  font-size: 1.3rem;
  font-weight: 400;
  color: #e2e2e2;
}

.text-line {
  display: block;
  font-size: 1.3rem;
}

.name {
  font-weight: 600;
}

.button {
  --blue: rgba(18, 150, 200, 0.8);
  padding: 0.6rem 1.3rem;
  background-color: rgb(18, 145, 191);
  transition: all ease 0.4s;
  font-weight: 300;
  box-shadow: 0 0 10px var(--blue);
  font-size: 0.9rem;
  border: 1px solid var(--blue);
  width: 6rem;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    background-color: transparent;
    box-shadow: none;
  }
}
</style>
