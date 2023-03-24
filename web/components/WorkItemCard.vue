<template>
  <article class="wrapper grid-12">
    <div class="img-wrapper" ref="imgWrapper">
      <img :src="imgSrc" />
    </div>
    <div class="info">
      <hgroup :class="showInfo ? 'showInfo' : ''">
        <h2>{{ client }}</h2>
        <h1>{{ title }}</h1>
      </hgroup>
      <Transition name="fade">
        <section v-show="showInfo">
          <div v-if="tags.length" class="tags">{{ tags }}</div>
          <div v-if="siteLink.length">{{ siteLink }}</div>
        </section>
      </Transition>
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

const showInfo = computed(() => {
  return props.tags.length > 0 || props.siteLink.length > 0 ? true : false;
});

const dummyImg = ref(null);
const imgWrapper = ref(null);
let shortWidth = ref(0);
let longWidth = ref("100%");

// onMounted(() => {});
nextTick(() => {
  // shortWidth = dummyImg.value.clientWidth;
  // longWidth = imgWrapper.value.clientWidth;
  // console.log(shortWidth, longWidth);
  // dummyImg.value.style.width = `${imgWrapper.value.clientWidth}px`;
});
</script>

<style lang="scss" scoped>
article {
  gap: var(--spacing);
  grid-template-rows: auto auto;
}
.img-wrapper {
  grid-column: 4 / 13;
  grid-row: 1 / 1;
  z-index: 1;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  height: 0;
  padding-bottom: calc((9 / 16) * 100%);
  @media screen and (max-width: 480px) {
    grid-column: 1 / 13;
  }
}
img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
}
.info {
  grid-column: 1 / 6;
  grid-row: 1 / 1;
  z-index: 2;
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: var(--spacing);
  @media screen and (max-width: 480px) {
    grid-column: 1 / 13;
    grid-row: 2 / 3;
    grid-template-rows: auto auto;
  }
}
hgroup {
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-self: end;
  transform: translateY(50%);
  transition: transform 0.3s ease-in-out;
  &.showInfo {
    transform: translateY(0);
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
}
section {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-self: start;
}
</style>
