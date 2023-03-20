<template>
  <article class="wrapper grid-12">
    <img :src="imgSrc" />
    <div class="info">
      <hgroup>
        <h2>{{ client }}</h2>
        <h1>{{ title }}</h1>
      </hgroup>
      <section>
        <div v-if="tags.length" class="tags">tag1 tag2 tag3</div>
        <div v-if="siteLink.length">Site Link</div>
      </section>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  title: String,
  client: String,
  imgSrc: String,
  slug: String,
  tags: {
    type: Array,
    default: [],
  },
  siteLink: { type: String, default: "" },
});
onMounted(() => {
  console.log(`the component is now mounted.`, props.siteLink.length);
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
.info {
  grid-column: 1 / 6;
  grid-row: 1 / 1;
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
hgroup {
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  gap: 15px;
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
}
section {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 30px;
}
</style>
