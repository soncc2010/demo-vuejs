<template>
  <div class="wrapper">
    <l-header />
    <main class="main">
      <slot></slot>
    </main>
    <l-footer />
  </div>
</template>

<script>
import LHeader from "@/components/LHeader";
import LFooter from "@/components/LFooter";

export default {
  name: "DefaultLayout",
  components: {
    LHeader,
    LFooter,
  },
};
</script>
