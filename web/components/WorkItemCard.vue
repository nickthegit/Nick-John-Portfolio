<template>
  <article class="wrapper grid-12">
    <div class="long-width-box" ref="longWidthBox"></div>
    <div class="short-width-box" ref="shortWidthBox"></div>
    <div class="img-wrapper" ref="imgWrapper">
      <HeroImage :img="imgSrc" :alt-text="`${title} - Feature image`" />
    </div>
    <div class="info">
      <hgroup :class="showInfo && isHero ? 'showInfo' : ''">
        <h2>{{ client }}</h2>
        <h1>{{ title }}</h1>
      </hgroup>
      <Transition name="fade">
        <section v-show="showInfo && isHero">
          <div v-if="tags.length" class="tags">
            <p v-for="tag in tags" :key="tag._id">
              {{ tag.title }}<span>/</span>
            </p>
          </div>
          <div v-if="siteLink.length" class="link">
            <a :href="siteLink" target="_blank" rel="noopener noreferrer">
              Visit Site
            </a>
          </div>
        </section>
      </Transition>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  title: String,
  client: String,
  imgSrc: Object,
  slug: String,
  tags: {
    type: Array,
    default: [],
  },
  siteLink: { type: String, default: "" },
  isHero: { type: Boolean, default: false },
});

const showInfo = computed(() => {
  return props.tags.length > 0 || props.siteLink.length > 0 ? true : false;
});

const shortWidthBox = await ref(null);
const longWidthBox = await ref(null);
const imgWrapper = await ref(null);

const hero = computed(() => {
  return props.isHero;
});

watch(hero, async (newSWB, oldSWB) => {
  nextTick(() => {
    changeImgWidth();
  });
});

const changeImgWidth = () => {
  if (hero.value) {
    imgWrapper.value.style.width = shortWidthBox.value.offsetWidth + "px";
  } else {
    imgWrapper.value.style.width = longWidthBox.value.offsetWidth + "px";
  }
};

onMounted(() => {
  changeImgWidth();
});
</script>

<style lang="scss" scoped>
article {
  gap: var(--spacing);
  grid-template-rows: auto auto;
}
.long-width-box,
.short-width-box {
  width: 100%;
  position: relative;
  z-index: 9999;
  grid-row: 1 / 1;
  @media screen and (max-width: 480px) {
    grid-column: 1 / 13 !important;
  }
}
.long-width-box {
  grid-column: 4 / 13;
}
.short-width-box {
  grid-column: 5 / 13;
}
.img-wrapper {
  width: 100%;
  grid-column: 4 / 13;
  grid-row: 1 / 1;
  z-index: 1;
  transition: all 0.3s ease-in-out;
  justify-self: end;
  @media screen and (max-width: 480px) {
    grid-column: 1 / 13;
  }
}

.info {
  height: 100%;
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
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  p {
    text-transform: uppercase;
    &:nth-last-child(1) {
      span {
        display: none;
      }
    }
    span {
      display: inline-block;
      margin-left: 5px;
    }
  }
}
.link {
  a {
    text-decoration: underline;
    text-underline-offset: 3px;
    &:hover {
      color: var(--color-primary);
      text-decoration-color: var(--color-primary);
    }
  }
}
</style>
