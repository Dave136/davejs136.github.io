<template>
  <header class="header">
    <Burger />
    <div class="logo">
      <logo />
    </div>
  </header>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import gsap from "gsap";
import Burger from "./Burger.vue";
import Logo from "../../../assets/images/logo.svg";

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

<!-- <template>
  <nav class="nav">
    <div class="menu" @click="openMenu(!isOpen)">
      <burger :isOpen="isOpen" />
    </div>
    <div class="brand">
      <Logo />
    </div>
    <div class="group-links">
      <a class="link" href="#home">Home</a>
      <a class="link" href="#projects">Projects</a>
      <a class="link" href="#about">About</a>
      <a class="link" href="#contact">Contact</a>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue';

import type { MenuStore } from '../providers/menu';

import Logo from '../../../assets/images/logo.svg';
import Burger from './Burger.vue';

const store = inject<MenuStore>('menu') as MenuStore;
const isOpen = computed(() => store?.state.isOpen);
const openMenu = store?.openMenu;
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables';
.nav {
  position: sticky;
  padding: 1rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.brand {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 15%);
}

.menu {
  cursor: pointer;
}

.group-links {
  display: none;
}

.link {
  margin-left: 2rem;
  margin-right: 2rem;
  color: $primary;
  transition: all ease 0.5s;

  &:hover {
    color: darken($color: $primary, $amount: 30);
  }
}

.none {
  display: none;
}
</style>
 -->
