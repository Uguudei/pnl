<script setup>
import LongTurtle from "./components/LongTurtle.vue";
import ShortTurtle from "./components/ShortTurtle.vue";
</script>

<template>
  <header>
    <img alt="Trutle logo" class="logo" src="./assets/turtle-favicon.svg" width="125" height="125" />
  </header>

  <main>
    <div class="wrapper">
      <LongTurtle position="Long"></LongTurtle>
      <ShortTurtle position="Short"></ShortTurtle>
    </div>>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header {
    position: center;
  }

  .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
