<template>
  <article class="section text-center">
    <div class="container">
      <h2 class="heading"><span class="heading__txt">401</span></h2>
      <p>Authenticator</p>
    </div>
  </article>
</template>

<script>
import { computed, reactive } from "vue";
import { useHead } from "@vueuse/head";

export default {
  setup() {
    const siteData = reactive({
      title: `Authenticator`,
    });

    useHead({
      title: computed(() => siteData.title),
    });
  },
};
</script>
