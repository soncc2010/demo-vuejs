<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

import DefaultLayout from "@/layouts/DefaultLayout.vue";
import SidebarLayout from "@/layouts/SidebarLayout.vue";

export default {
  name: "App",
  components: {
    DefaultLayout,
    SidebarLayout,
  },
  setup() {
    const layoutList = { default: DefaultLayout, sidebar: SidebarLayout };
    const route = useRoute();

    const layout = computed(() => {
      const keyLayout = route.meta.layout || "default";
      return layoutList[keyLayout];
    });

    return {
      layout,
    };
  },
};
</script>
