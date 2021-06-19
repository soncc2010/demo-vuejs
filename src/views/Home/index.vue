<template>
  <article class="section text-center">
    <div class="container container--sm">
      <h2 class="heading"><span class="heading__txt">Home Page</span></h2>
      <p class="text-justify">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>
      <div class="mt-50">
        <router-link
          to="/contact"
          class="btn btn--outline-success btn--sm btn--min-lg"
          >Contact</router-link
        >
      </div>
    </div>
  </article>
</template>

<script>
import { computed, reactive } from "vue";
import { useHead } from "@vueuse/head";

export default {
  setup() {
    const siteData = reactive({
      title: `Home Page`,
    });

    useHead({
      title: computed(() => siteData.title),
    });
  },
};
</script>
