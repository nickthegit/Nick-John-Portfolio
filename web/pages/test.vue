<template>
  <div>
    <ul>
      <li
        v-for="project in projects"
        :key="project._id"
        @click="selectHandler(project, $event)"
        :class="selectedItem._id === project._id || !hasItem ? '' : 'hide'"
      >
        <WorkItemCard
          :title="project.title"
          :img-src="project.mainImage"
          :client="project.client"
          :slug="project.slug"
          :isHero="hero"
        />
        <Project v-if="selectedItem._id === project._id" :project="project" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import Lenis from "@studio-freight/lenis";
let lenis;

const router = useRouter();

const homeQuery = groq`
*[_type == "homePage" ][0] {
  projects[]-> {
    _id,
    "title": coalesce(title, false),
    "body": coalesce(body, false),
    "images": coalesce(images.images, false),
    "credits": coalesce(credits, false),
    "link": coalesce(link, false),
    "featuredVideo": coalesce(featuredVideo, false),
    "video": coalesce(video, false),
    "mainImage": coalesce(mainImage, false),
    "categories": coalesce(categories[]->{
      _id,
      title
    }, false),
    "slug": coalesce(slug.current, false),
    "client": coalesce(client, false),
  }
}
`;

const { data, refresh } = await useSanityQuery(homeQuery);
const { projects } = data.value;

const hero = ref(false);

const selectedItem = ref({});
const hasItem = computed(() => {
  return selectedItem?.value?._id?.length > 0;
});

watch(selectedItem, (val) => {
  console.log("aaaarrrgghhh", val);
  lenis.scrollTo(document.body, {
    offset: -180,
    immediate: true,
    onComplete: async () => {
      console.log("doney");
      router.push({ path: `/work/` + val.slug });
    },
  });
});

const selectHandler = async (item, event) => {
  const target = event.target;
  lenis.scrollTo(target, {
    offset: -180,
    lock: true,
    force: true,
    onComplete: async () => {
      selectedItem.value = await item;
    },
  });
};

onMounted(() => {
  lenis = new Lenis({ lerp: 0.1 });

  lenis.on("scroll", (e) => {
    // console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});
// console.log(projects);
</script>

<style lang="scss" scoped>
ul {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--card-spacing);
}
li {
  cursor: pointer;
  scroll-padding: var(--card-spacing);
  &.hide {
    display: none;
  }
}
</style>
