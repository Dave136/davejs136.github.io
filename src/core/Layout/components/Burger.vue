<template>
  <div class="burger" @click="openMenu">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import gsap from 'gsap';

const tl = gsap.timeline({
  defaults: { duration: 1 },
  paused: true,
  reversed: true,
})

const openMenu = (e: MouseEvent) => {
  if (tl.isActive()) {
    e.preventDefault();
    e.stopImmediatePropagation();
  }

  animate();
}

const animate = () => {
  tl.reversed() ? tl.play() : tl.reverse();
}

onMounted(() => {
  const lines = document.querySelectorAll(".line");
  const links = document.querySelectorAll(".link");

  gsap.from(lines, {
    width: 0,
    stagger: .3,
  });

  tl.to(".main", {
    scale: 0,
    duration: 0.6,
    ease: "power4.inOut",
  })
    .to(
      lines,
      {
        width: "100%",
      },
      "-=1"
    )
    .to(".burger", {
      duration: 0.2,
      scale: 0,
      ease: "back.easeIn",
      onComplete: animateIn,
    });

  function animateIn() {
    tl.set(".burger", {
      right: 0,
      left: "inherit",
      justifyContent: "center",
      alignItems: "center",
    });
    tl.set(".line:nth-child(1)", { y: 3 });
    tl.set(".line:nth-child(3)", { display: "none" });
    tl.set([".line:nth-child(1)", ".line:nth-child(2)"], { width: "60%" });

    tl.to(".menu", {
      transform: "translateX(0)",
    });

    tl.from(
      links,
      {
        duration: 0.3,
        opacity: 0,
        stagger: 0.2,
      },
      "-=.5"
    );

    tl.to(".burger", {
      duration: 0.2,
      delay: 0.4,
      scale: 1,
      ease: "back.easeOut",
    });

    tl.to(".line:nth-child(1)", {
      duration: 0.3,
      delay: 0.4,
      rotation: -135,
    });
    tl.to(
      ".line:nth-child(2)",
      {
        duration: 0.3,
        delay: 0.3,
        rotation: 135,
      },
      "-=.6"
    );
  }
})

</script>

<style lang="scss">
.burger {
  position: absolute;
  width: 2.2rem;
  height: 1.3rem;
  left: 0;
  top: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
}

.line {
  width: 100%;
  height: 3px;
  border-radius: 4px;
  background-color: #fff;

  &:nth-child(1) {
    width: 90%;
  }

  &:nth-child(2) {
    width: 70%;
  }

  &:nth-child(3) {
    width: 50%;
  }
}
</style>
