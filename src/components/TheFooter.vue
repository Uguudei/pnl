<script setup>
import WelcomeItem from './WelcomeItem.vue';
import SupportIcon from './icons/IconSupport.vue';
import ToolingIcon from './icons/IconTooling.vue';
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Tooling</template>

    More instructions are available in <code>README.md</code>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Turtle</template>

    As an independent project, Turtle relies on community backing for its sustainability. You can help us by
    <a href="" target="_blank" rel="noopener">becoming a sponsor</a>.
  </WelcomeItem>
</template>
