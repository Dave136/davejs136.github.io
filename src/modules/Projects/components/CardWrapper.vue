<template>
  <div class="card-wrapper">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.card-wrapper {
  height: calc(100% - 5rem);
  overflow-x: hidden;
}
</style>