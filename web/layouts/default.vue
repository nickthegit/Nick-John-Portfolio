<template>
  <div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
div {
  padding-top: 200px;
  min-height: 60vh;
  @media screen and (max-width: 768px) {
    padding-top: 140px;
  }
  @media screen and (max-width: 480px) {
    padding-top: 120px;
  }
}
</style>
