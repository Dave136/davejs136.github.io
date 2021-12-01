<template>
  <section class="info-wrapper">
    <div class="info">
      <div class="info-icon">
        <img class="img" :src="personIcon" alt="person icon" />
      </div>
      <div class="info-content">
        <div class="info-text">David Arenas</div>
      </div>
    </div>
    <div class="info">
      <div class="info-icon">
        <img class="img" :src="locationIcon" alt="location icon" />
      </div>
      <div class="info-content">
        <div class="info-text">Caracas, Venezuela</div>
      </div>
    </div>
    <div class="info">
      <div class="info-icon">
        <img class="img" :src="mailIcon" alt="mail icon" />
      </div>
      <div class="info-content">
        <div class="info-text">davejs136@gmail.com</div>
      </div>
    </div>
    <div class="info">
      <div class="info-icon">
        <img class="img" :src="callIcon" alt="call icon" />
      </div>
      <div class="info-content">
        <div class="info-text">+58 412 023 9639"</div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import { getImageUrl } from '../../../utils';

const personIcon = import.meta.env.DEV ? getImageUrl('person') : '/images/person.svg';
const locationIcon = import.meta.env.DEV ? getImageUrl('location') : '/images/location.svg';
const mailIcon = import.meta.env.DEV ? getImageUrl('mail') : '/images/mail.svg';
const callIcon = import.meta.env.DEV ? getImageUrl('call') : '/images/call.svg';


const tl = gsap.timeline({ defaults: { duration: 1, opacity: 1 } });

onMounted(() => {
  const infoItems = document.querySelectorAll('.info');

  tl.from(infoItems, {
    opacity: 0,
    x: -50,
    stagger: .4,
  })
});
</script>

<style lang="scss" scoped>
.info-wrapper {
  display: grid;
  margin-top: 1rem;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
}

.info {
  display: flex;
  align-items: center;
  padding: 1rem 0rem;
  width: 100%;
}

.info-icon {
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  margin-right: 0.5rem;
}

.info-text {
  font-size: 0.75rem;
  color: rgb(199, 199, 199);
}

.img {
  color: #fff;
}
</style>