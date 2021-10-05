<template>
  <layout>
    <section class="about">
      <figure class="img-wrapper">
        <img class="img" src="#" alt="me" />
      </figure>
      <div class="content">
        <h3 class="title">Who is me?</h3>
        <p
          class="description"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nulla temporibus nesciunt voluptate? Similique architecto laudantium voluptates minus sequi odit praesentium aliquid commodi repudiandae? Aliquid tempore deserunt aliquam, consectetur laborum illum eligendi praesentium.</p>
      </div>
      <button class="button">Download CV</button>
    </section>
  </layout>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import gsap from 'gsap';

const tl = gsap.timeline({
  defaults: {
    x: -50,
    opacity: 0,
    duration: 1,
  }
});

onMounted(() => {
  tl
    .from('.img-wrapper', { delay: .4 })
    .from('.title', { delay: .6 }, "-=.5")
    .from('.description', { delay: .7 }, "-=.6")
});
</script>

<style lang="scss" scoped>
.about {
  --text-color: #c0c0c0;
  display: grid;
  margin: 2rem 0;
  grid-template-rows: 1fr auto auto;
  width: 100%;
  height: 100%;
}

.img-wrapper {
  width: 100%;
  height: auto;
  background-color: rgba(0, 0, 0, 0.7);
  color: #b8b8b8;
  margin: 0;
}

.img {
  display: block;
  width: 100%;
  height: 100%;
}

.content,
.title {
  color: var(--text-color);
}

.content {
  display: flex;
  flex-flow: column;
  align-items: center;
}

.button {
  background-color: rgb(12, 166, 221);
  color: var(--text-color);
  border: 1px solid transparent;
  border-radius: 4px;
  font-weight: normal;
  padding: 0.5rem 0.8rem;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  font-size: 0.9rem;
}

.description {
  font-size: 0.8rem;
  line-height: 1.7;
  margin-bottom: 1.4rem;
  color: var(--text-color);
}
</style>