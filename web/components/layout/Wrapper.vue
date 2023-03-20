<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
div {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 40px;
  padding-right: 40px;
  @media screen and (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
