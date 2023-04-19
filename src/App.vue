<script setup>
import TheCalculator from "./components/TheCalculator.vue";
import TheFooter from "./components/TheFooter.vue";
import TurtleWorld from "./components/TurtleWorld.vue";
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/turtle-favicon.svg" width="125" height="125" />
    <div class="wrapper">
      <TurtleWorld msg="Turtle" />
    </div>
  </header>

  <main>
    <TheCalculator></TheCalculator>
  </main>

  <footer>
    <TheFooter />
  </footer>
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

r  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
