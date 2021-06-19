<template>
  <nav class="ganv">
    <ul class="gnav__ls">
      <li class="gnav__item">
        <router-link to="/" class="gnav__link">Home</router-link>
      </li>
      <li class="gnav__item">
        <router-link to="/about" class="gnav__link">About</router-link>
      </li>
      <li class="gnav__item">
        <router-link to="/news" class="gnav__link">News</router-link>
      </li>
      <li class="gnav__item">
        <router-link to="/contact" class="gnav__link">Contact</router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import "./styles/gnav";
</style>
