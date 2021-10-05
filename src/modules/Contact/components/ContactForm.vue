<template>
  <section class="contact">
    <form class="form" @submit.prevent="sendMessage">
      <div class="form-group">
        <label for="name" class="label">Name</label>
        <input type="text" class="input" v-model="name" id="name" placeholder="John Doe" />
      </div>
      <div class="form-group">
        <label for="email" class="label">Email</label>
        <input type="email" class="input" v-model="email" id="email" placeholder="john@doe.com" />
      </div>
      <div class="form-group">
        <label for="message" class="label">Message</label>
        <textarea
          id="message"
          class="textarea"
          v-model="message"
          placeholder="Hi! My name is John i wanna hire you!"
          rows="5"
        ></textarea>
      </div>
      <div class="form-group">
        <button class="button" type="submit">Send</button>
      </div>
    </form>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

const name = ref("");
const email = ref("");
const message = ref("");

const tl = gsap.timeline({ defaults: { duration: 1, opacity: 0 } })

onMounted(() => {
  const formGroupItems = document.querySelectorAll('.form-group');
  const labelItems = document.querySelectorAll('.label');

  tl
    .from(formGroupItems, {
      x: -50,
      stagger: .4,
    })
    .from(labelItems, {
      stagger: .2,
    }, '-=1')
    .from('button', {
      ease: "back.out"
    }, '-=1')
});

const sendMessage = () => {
  console.log(
    name.value,
    email.value,
    message.value,
  );
  console.log('Message sent')
}

</script>

<style lang="scss" scoped>
@import "../../../assets/scss/variables";

.contact {
  display: block;
  width: 100%;
}

.form {
  display: block;
  color: #ccc;
  max-width: 100%;
}

.form-group {
  margin-top: 1.2rem;
  width: 100%;
  display: flex;
  flex-direction: column;

  &:last-child {
    margin-bottom: 2rem;
  }
}

.label {
  display: block;
  font-size: 0.8rem;
  margin-bottom: 1rem;
}

.input,
.textarea {
  padding: 0.7rem;
  border-radius: 4px;
  font-size: 0.8em;

  &:focus {
    border: 1px solid darken($primary, 12%);
  }
}

.button {
  background-color: $primary;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 0.8rem;
}
</style>
