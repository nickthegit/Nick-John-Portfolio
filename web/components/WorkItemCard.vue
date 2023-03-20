<template>
  <article class="wrapper grid-12">
    <img :src="imgSrc" />
    <hgroup>
      <h2>{{ client }}</h2>
      <h1>{{ title }}</h1>
    </hgroup>
  </article>
</template>

<script setup>
defineProps({
  title: String,
  client: String,
  imgSrc: String,
});
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  grid-column: 4 / 13;
  grid-row: 1 / 1;
  z-index: 1;
  position: relative;
}
hgroup {
  grid-column: 1 / 6;
  grid-row: 1 / 1;
  z-index: 2;
  position: relative;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
h1 {
  font-family: "Figue";
  font-size: responsive 24px 68px;
  line-height: responsive 24px 68px;
}
h2 {
  font-size: responsive 16px 22px;
  line-height: responsive 16px 22px;
  font-variation-settings: "wght" 600;
}
</style>
