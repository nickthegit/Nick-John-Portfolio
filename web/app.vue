<template>
  <div>
    <GlobalsHeader />
    <NuxtLayout>
      <NuxtPage class="main-content" />
    </NuxtLayout>
    <GlobalsFooter />
  </div>
</template>

<style lang="scss">
.main-content {
  padding-top: 140px;
  min-height: 60vh;
  @media screen and (max-width: 768px) {
    padding-top: 80px;
  }
  @media screen and (max-width: 480px) {
    padding-top: 65px;
  }
}
</style>
