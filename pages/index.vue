<template>
  <div>
    <header>
      <h1>{{ homeDataQuery.heading_1 }}</h1>
      <h2>{{ homeDataQuery.heading_2 }}</h2>
    </header>
    <main>
      <article>
        <h2
          v-for="(introParagraph, index) in homeDataQuery.introduction"
          :key="`homeintro${index}`"
        >
          {{ introParagraph }}
        </h2>
      </article>
      <section id="work">
        <h3>Work</h3>
        <article v-for="work in workDataQuery" :key="work.slug">
          Work-item: {{ work.slug }} status: {{ work.status }}
        </article>
      </section>
    </main>
    <pre>{{ workDataQuery }}</pre>
  </div>
</template>

<script setup>
const { data: homeDataQuery } = await useAsyncData("home", () =>
  queryContent("/").findOne()
);
const { data: workDataQuery } = await useAsyncData("work", () =>
  queryContent("/work").where({ status: "published" }).find()
);
onMounted(async () => {
  const data = await workDataQuery;
  console.log("hi", data);
});
</script>

<style lang="scss" scoped></style>
