<template>
  <layout>
    <card-wrapper>
      <card />
      <card />
    </card-wrapper>
  </layout>
</template>

<script lang="ts" setup>
import CardWrapper from './components/CardWrapper.vue';
import Card from './components/Card.vue';
</script>

<style lang="scss" scoped>
.title {
  margin-top: 0;
  color: #fff;
  font-family: "Comfortaa", sans-serif;
  text-align: center;
}
</style>