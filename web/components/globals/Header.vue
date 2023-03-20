<template>
  <header ref="el">
    <div class="header-wrapper wrapper">
      <NuxtLink class="brand" to="/">
        <h1>Nick John</h1>
        <h2>Frontend Developer</h2>
      </NuxtLink>
      <nav>
        <ul>
          <li><NuxtLink to="/">Work</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import Headroom from "headroom.js";
const el = ref(null);
onMounted(() => {
  console.log(`the component is now mounted.`, el.value);
  var headroom = new Headroom(el.value, {
    offset: {
      down: 150,
    },
  });
  // initialise headroom
  headroom.init();
});
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  position: fixed;
  z-index: 999;
  @media screen and (max-width: 768px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
}
.header-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.brand {
  font-family: "CabinetGrotesk-Variable", sans-serif;
  font-variation-settings: "wght" 600;
  text-transform: uppercase;
  font-size: responsive 16px 28px;
  line-height: responsive 17px 29px;
}
nav {
  ul {
    display: flex;
    font-size: responsive 16px 24px;
    line-height: responsive 16px 24px;
    gap: 40px;
    @media screen and (max-width: 480px) {
      gap: 20px;
    }
  }
  a {
    opacity: 0.5;
    &.router-link-active {
      text-decoration: underline;
      text-underline-offset: 10px;
      opacity: 1;
    }
    &:hover {
      opacity: 1;
    }
  }
}
</style>
