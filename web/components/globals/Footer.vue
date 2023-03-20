<template>
  <footer>
    <LayoutWrapper class="footer-wrapper">
      <section class="footer-socials">
        <!-- linkedin — github — email -->
        <a
          href="https://www.linkedin.com/in/nickjohn-dev/"
          target="_blank"
          rel="noopener noreferrer"
          >linkedin</a
        >
        <a
          href="https://github.com/nickthegit"
          target="_blank"
          rel="noopener noreferrer"
          >github</a
        >
        <a
          href="mailto:nickjohnmail@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          >email</a
        >
      </section>
      <section class="footer-bottom-bar">© Nick John {{ currentYear }}</section>
    </LayoutWrapper>
  </footer>
</template>

<script setup>
const currentYear = computed(() => {
  return new Date().getFullYear();
});
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
}
.footer-socials {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  font-family: "Figue";
  font-size: responsive 22px 48px;
  line-height: responsive 22px 48px;
  width: 100%;
  text-align: center;
  padding-top: 120px;
  padding-bottom: 120px;
  @media screen and (max-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
    gap: 60px;
  }
  @media screen and (max-width: 480px) {
    padding-top: 40px;
    padding-bottom: 40px;
    gap: 40px;
  }
}
.footer-bottom-bar {
  width: 100%;
  text-align: center;
}
</style>
