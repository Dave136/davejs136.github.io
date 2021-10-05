<template>
  <div class="card">
    <figure class="card__image">
      <img src="#" alt="image" />
    </figure>
    <div class="card__body">
      <h3 class="card__title">Notes clone</h3>
      <p
        class="card__description"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eligendi sapiente. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button class="card__button">Github</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import gsap from 'gsap';

const tl = gsap.timeline({ defaults: { duration: .7 } });

onMounted(() => {
  tl.fromTo(".card", {
    x: -50,
    scale: .5,
    ease: "power4.in",
  }, {
    x: 0,
    scale: 1,
  });

  tl
    .fromTo(".card__image", {
      duration: .2,
      height: 0,
      delay: .4,
    }, {
      height: "50%"
    })
    .fromTo(".card__body", {
      duration: .3,
      delay: .4,
      x: -50,
      opacity: 0
    }, {
      x: 0,
      opacity: 1,
    })
    .fromTo(".card__button", {
      x: -40,
      delay: .6,
      ease: "power4.in",
      opacity: 0,
    }, {
      x: 0,
      opacity: 1,
    })
});
</script>

<style lang="scss" scoped>
figure {
  height: 100% !important;
}
.card {
  --text-color: rgb(197, 197, 197);
  --text-color-opacity: rgb(197, 197, 197, 0.5);
  margin-bottom: 2rem;
  display: grid;
  grid-template-rows: 45% 55%;
  height: 100%;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  // background: linear-gradient(
  //   120deg,
  //   rgba(255, 255, 255, 0.5),
  //   rgba(255, 255, 255, 0)
  // );
  background: linear-gradient(120deg, rgb(0, 0, 0, 0.9), rgba(0, 0, 0, 0.672));
  border-radius: 0.2rem;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.9);

  &__image {
    margin: 0;
    height: 100%;
    border-top-left-radius: 0.2rem;
    border-top-right-radius: 0.2rem;
    background-color: rgba(20, 20, 20, 0.7);
    color: var(--text-color-opacity);
    font-size: 0.8rem;
  }

  &__body {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    align-items: center;
  }

  &__title {
    margin: 0;
    text-align: center;
    color: var(--text-color);
  }

  &__description {
    color: var(--text-color);
    margin-left: 1rem;
    line-height: 1.2rem;
    font-size: 0.8rem;
  }

  &__button {
    margin-top: 0.7rem;
    padding: 0.4rem 1rem;
    background-color: transparent;
    color: var(--text-color);
    border-radius: 0.1rem;
    outline: none;
    font-size: 0.9rem;
    border: 1px solid var(--text-color);
    transition: all ease 0.3s;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);

    &:hover {
      box-shadow: none;
    }
  }
}
</style>