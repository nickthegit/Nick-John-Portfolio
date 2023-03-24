<template>
  <main>
    <article class="wrapper grid-12 wysiwyg">
      <h1>About</h1>
      <div>
        <p class="first">
          I am a Front End Web Developer, based in the UK. Specialising in
          front-end technologies & everything JavaScript.
        </p>
        <p>
          My stack includes Vue.js, React, Sass, Tailwind, Vuex, Wordpress,
          Jamstack, Next.js, Nuxt.js, Shopify, WebGL and Git. I also care for
          great UI interactions, UX design and good semantics.
        </p>
        <p>
          I also have a passion for learning new technologies and I am always
          experimenting with new tools and frameworks. I am a big fan of
          progressive enhancement and I am always looking for ways to improve
          performance and accessibility.
        </p>
        <p>
          I am currently working as a Front End Developer at
          <a href="https://www.ournameismud.co.uk/" target="_blank">MUD</a>.
        </p>
      </div>
    </article>

    <section class="wrapper grid-12">
      <h2>Clients</h2>
      <p class="first">
        I've been lucky to work with some great brands over the years, some
        highlighs are:
      </p>
      <ul>
        <li v-for="client in clients" :key="client.key">
          <img :src="`/imgs/client-logos/${client.logo}`" :alt="client.name" />
        </li>
      </ul>
    </section>
  </main>
</template>

<script setup>
definePageMeta({
  layout: "about",
});
// Converse, Nike, Pepsi, Timberland, Goal.com, Vice, StockX, Itsu
const clients = [
  {
    name: "Converse",
    logo: "Converse.svg",
    key: "converse",
  },
  {
    name: "Nike",
    logo: "Nike.svg",
    key: "nike",
  },
  {
    name: "Pepsi",
    logo: "Pepsi.svg",
    key: "pepsi",
  },
  {
    name: "Timberland",
    logo: "Timberland.svg",
    key: "timberland",
  },
  {
    name: "Goal.com",
    logo: "Goal.com.svg",
    key: "goal",
  },
  {
    name: "Vice",
    logo: "Vice.svg",
    key: "vice",
  },
  {
    name: "StockX",
    logo: "StockX.svg",
    key: "stockx",
  },
  {
    name: "Itsu",
    logo: "Itsu.svg",
    key: "itsu",
  },
];
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--content-spacing);
}
article {
  gap: var(--spacing);
  div {
    grid-column: 3 / span 6;
    @media (max-width: 768px) {
      grid-column: 3 / span 8;
    }
    @media (max-width: 480px) {
      grid-column: 1 / span 12;
    }
  }
}
h1,
h2 {
  grid-column: 1 / span 2;
  font-family: "Figue", serif;
  font-size: responsive 18px 28px;
  position: relative;
  top: -3px;
}
p {
  grid-column: 3 / span 6;
  @media (max-width: 768px) {
    grid-column: 3 / span 8;
  }
  @media (max-width: 480px) {
    grid-column: 1 / span 12;
  }
  &.first {
    font-size: responsive 20px 24px;
    font-variation-settings: "wght" 500;
  }
}
section {
  grid-template-rows: auto auto;
  gap: var(--spacing);
  p {
    order: 2;
    grid-row-start: 1;
  }
  h2 {
    order: 1;
    grid-row-start: 1;
  }
  ul {
    order: 3;
    grid-row-start: 2;
  }
  @media (max-width: 480px) {
    h2 {
      grid-row-start: 1;
    }
    p {
      grid-row-start: 2;
    }
    ul {
      grid-row-start: 3;
    }
  }
}
ul {
  grid-row-start: 2;
  grid-column: 3 / span 6;
  @media (max-width: 768px) {
    grid-column: 3 / span 8;
  }
  @media (max-width: 480px) {
    grid-column: 1 / span 12;
  }
  //
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: var(--spacing);
}
li {
  width: 100%;
  grid-column: span 2;
  @media (max-width: 480px) {
    grid-column: span 4;
  }
  img,
  svg {
    width: 100%;
  }
}
</style>
