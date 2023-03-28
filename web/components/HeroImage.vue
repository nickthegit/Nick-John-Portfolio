<template>
  <div>
    <picture>
      <source
        media="(max-width: 480px)"
        :srcset="`${$urlFor(img)
          .width(440)
          .height(440)
          .fit('max')
          .dpr(2)
          .auto('format')
          .url()} 2x, ${$urlFor(img)
          .width(440)
          .height(440)
          .fit('max')
          .auto('format')
          .url()}`"
      />
      <source
        media="(max-width: 768px)"
        :srcset="`${$urlFor(img)
          .width(541)
          .height(361)
          .fit('max')
          .dpr(2)
          .auto('format')
          .url()} 2x, ${$urlFor(img)
          .width(541)
          .height(361)
          .fit('max')
          .auto('format')
          .url()}`"
      />
      <source
        media="(max-width: 1024px)"
        :srcset="`${$urlFor(img)
          .width(698)
          .height(393)
          .fit('max')
          .dpr(2)
          .auto('format')
          .url()} 2x, ${$urlFor(img)
          .width(698)
          .height(393)
          .fit('max')
          .auto('format')
          .url()}`"
      />
      <source
        media="(max-width: 1440px)"
        :srcset="`${$urlFor(img)
          .width(1010)
          .height(568)
          .fit('max')
          .dpr(2)
          .auto('format')
          .url()} 2x, ${$urlFor(img)
          .width(1010)
          .height(568)
          .fit('max')
          .auto('format')
          .url()}`"
      />
      <img
        :src="`${$urlFor(img)
          .width(1010)
          .height(568)
          .fit('max')
          .auto('format')
          .url()}`"
        :alt="altText"
      />
    </picture>
  </div>
</template>

<script setup>
const props = defineProps({
  img: {
    type: Object,
    required: true,
  },
  altText: {
    type: String,
    default: "A Nick John type of Image",
  },
});
</script>

<style lang="scss" scoped>
div {
  width: 100%;
  height: 0;
  position: relative;
  overflow: hidden;
  padding-bottom: calc((9 / 16) * 100%);
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    padding-bottom: calc((2 / 3) * 100%);
  }
  @media screen and (max-width: 480px) {
    padding-bottom: calc((1 / 1) * 100%);
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
</style>
