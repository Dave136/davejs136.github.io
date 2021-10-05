<template>
  <div class="menu">
    <div class="nav">
      <router-link class="link" to="/">Home</router-link>
      <router-link class="link" to="/projects">Projects</router-link>
      <router-link class="link" to="/about">About</router-link>
      <router-link class="link" to="/contact">Contact</router-link>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.menu {
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  transform: translateX(-100%);
  background-color: rgb(16, 16, 16);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.link {
  display: block;
  width: 100%;
  padding: 2rem;
  font-weight: 400;
  color: rgb(194, 194, 194);
}
</style>
