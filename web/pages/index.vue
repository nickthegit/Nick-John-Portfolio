<template>
  <div>
    <section class="work-items-wrapper">
      <ul>
        <li v-for="item in workItems" :key="item.id">
          <NuxtLink :to="`/work/${item.slug}`">
            <WorkItemCard
              :title="item.title"
              :img-src="item.imgSrc"
              :client="item.client"
              :slug="item.slug"
            />
          </NuxtLink>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
const state = ref(0);
const workItems = [
  {
    title: "Renew Labs Store",
    slug: "renew-labs-store",
    client: "Converse",
    id: "5319c34d-d2fe-5f09-aed0-1daa0e2b033d",
    imgSrc: "https://via.placeholder.com/600x400/f27272/969696",
  },
  {
    title: "title of a project here",
    slug: "title-of-a-project-here",
    client: "Nike",
    id: "b0b5b9b1-1b1b-sgb1b9b1b",
    imgSrc: "https://via.placeholder.com/600x400/72f2f2/969696",
  },
  {
    title: "title of a project2 here",
    slug: "title-of-a-project2-here",
    client: "Nike",
    id: "b0b5sgf-9b1b-1b1b9b1b9b1b",
    imgSrc: "https://via.placeholder.com/600x400/ac72f2/969696",
  },
  {
    title: "title of a project3 here",
    slug: "title-of-a-project3-here",
    client: "Nike",
    id: "b0b5b9b1-1bsfgfg9b1b-1b1b9b1b9b1b",
    imgSrc: "https://via.placeholder.com/600x400/72f2f2/969696",
  },
  {
    title: "title of a project4 here",
    slug: "title-of-a-project4-here",
    client: "Nike",
    id: "b0b5b9b1-1b1b-5bfsgfsgb1b9b1b",
    imgSrc: "https://via.placeholder.com/600x400/72f2f2/969696",
  },
  {
    title: "title of a project5 here",
    slug: "title-of-a-project5-here",
    client: "Nike",
    id: "b0b5b9bsfgsdg9b-9b1b-1b1b9b1b9b1b",
    imgSrc: "https://via.placeholder.com/600x400/72f2f2/969696",
  },
  {
    title: "title of a project6 here",
    slug: "title-of-a-project6-here",
    client: "Nike",
    id: "b0b5b9b1-1b1b-5b9b-9b1b-1b1b9b1b9b1b",
    imgSrc: "https://via.placeholder.com/600x400/72f2f2/969696",
  },
  {
    title: "title of a project7 here",
    slug: "title-of-a-project7-here",
    client: "Nike",
    id: "b0b5b9b1-1b1b-5b9b-dsf1b-1b1b9b1b9b1b",
    imgSrc: "https://via.placeholder.com/600x400/72f2f2/969696",
  },
  {
    title: "title of a project8 here",
    slug: "title-of-a-project8-here",
    client: "Nike",
    id: "b0b5b9b1-1b1b-dsf9b-9b1b-1b1b9b1b9b1b",
    imgSrc: "https://via.placeholder.com/600x400/72f2f2/969696",
  },
];
</script>

<style lang="scss" scoped>
ul {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 180px;
  @media screen and (max-width: 768px) {
    gap: 100px;
  }
  @media screen and (max-width: 480px) {
    gap: 80px;
  }
}
</style>
