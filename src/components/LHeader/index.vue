<template>
  <header class="header">
    <div class="header__top">
      <div class="container">
        <h1 class="header__slogan">
          A development with a heart will have money
        </h1>
      </div>
    </div>
    <div class="header__md">
      <div class="header__wrap container">
        <router-link to="/" class="header__logo"
          ><img src="@/assets/images/logo.png" alt="I love vue"
        /></router-link>
        <div class="header__nav">
          <g-nav />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import GNav from "@/components/Gnav/";

export default {
  name: "LHeader",
  components: {
    GNav,
  },
};
</script>

<style lang="scss" scoped>
@import "./styles/header.scss";
</style>
