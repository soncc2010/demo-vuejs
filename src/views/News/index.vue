<template>
  <article class="section text-center">
    <div class="container container--sm">
      <h2 class="heading"><span class="heading__txt">News Page</span></h2>
      <p class="text-justify">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32.
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
      title: `News Page`,
    });

    useHead({
      title: computed(() => siteData.title),
    });
  },
};
</script>
