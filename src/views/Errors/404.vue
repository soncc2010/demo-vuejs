<template>
  <article class="section text-center">
    <div class="container">
      <h2 class="heading"><span class="heading__txt">404</span></h2>
      <p>Page not found</p>
    </div>
  </article>
</template>

<script>
import { computed, reactive } from "vue";
import { useHead } from "@vueuse/head";

export default {
  setup() {
    const siteData = reactive({
      title: `Page not found `,
    });

    useHead({
      title: computed(() => siteData.title),
    });
  },
};
</script>
