<template>
  <div class="layout-default-wrapper">
    <ul :class="hasItem ? 'close-gap' : ''">
      <li
        v-for="project in projects"
        :key="project._id"
        @click="selectHandler(project, $event)"
        :class="[selectedItem._id === project._id || !hasItem ? '' : 'hide']"
      >
        <WorkItemCard
          :title="project.title"
          :img-src="project.mainImage"
          :client="project.client"
          :slug="project.slug"
          :isHero="selectedItem._id === project._id ? true : false"
        />
      </li>
    </ul>
    <NuxtPage :transition="transition" />
  </div>
</template>

<script setup>
import Lenis from "@studio-freight/lenis";
let lenis;
const router = useRouter();

const route = useRoute();

const transition = () => {
  return {
    mode: "out-in",
    css: false,
    onLeave: (el, done) => {
      console.log("leave");
      done();
    },
    onAfterLeave: () => {
      console.log("after leave");
    },
    onBeforeEnter: (el) => {
      console.log("before enter");
    },
    onEnter: (el, done) => {
      console.log("enter");
      done;
    },
  };
};

// ***************
// Get Data from api
// ***************
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

// ***************
// Do something when clicking on a card here
// ***************

const selectedItem = ref({});

const position = ref(0);

const hasItem = computed(() => {
  return selectedItem?.value?._id;
});

watch(selectedItem, (val) => {
  if (val?._id && route.name === "index") {
    const space = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--card-spacing"
      )
    );
    lenis.scrollTo(document.body, {
      offset: -space,
      immediate: true,
      onComplete: async () => {
        router.push({ path: `/work/` + val.slug });
      },
    });
  }
});

const selectHandler = async (item, event) => {
  const target = event.target;
  const space = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--card-spacing"
    )
  );
  lenis.scrollTo(target, {
    offset: -space,
    lock: true,
    force: true,
    onComplete: async () => {
      position.value = await lenis.targetScroll;
      selectedItem.value = await item;
    },
  });
};

// ***************
// Watch Page changes
// ***************
watch(
  () => route.name,
  (current, prev) => {
    // Do something here...
    if (current === "work-slug") {
      selectedItem.value = projects.find((item) => {
        return item.slug === route.params.slug;
      });
    }
    if (current === "index") {
      // if lenis has been initialized
      selectedItem.value = {};
      setTimeout(() => {
        if (lenis) {
          lenis.scrollTo(document.body, {
            offset: position.value,
            immediate: true,
            onComplete: async () => {},
          });
        }
      }, 50);
    }
  },
  { immediate: true }
);

onMounted(() => {});

// ***************
// LENIS
// ***************
onMounted(() => {
  lenis = new Lenis({ lerp: 0.1 });
  lenis.on("scroll", (e) => {
    // console.log(lenis.targetScroll);
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
.layout-default-wrapper {
  padding-top: var(--card-spacing);
  min-height: 60vh;
  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--card-spacing);
    &.close-gap {
      gap: 0;
    }
  }
  li {
    position: relative;
    cursor: pointer;
    scroll-padding: var(--card-spacing);
    &.hide {
      visibility: hidden;
      height: 0;
      overflow: hidden;
    }
    &.invisable {
      opacity: 0;
      pointer-events: none;
    }
  }
}
</style>
