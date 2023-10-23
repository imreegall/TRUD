<script>
import { defineComponent } from 'vue'

import trudMainWelcome from "@/components/templates/pages/main/blocks/trud-main-welcome.vue";
import trudMainAbout from "@/components/templates/pages/main/blocks/trud-main-about.vue";
import trudMainStarSky from "@/components/templates/pages/main/blocks/trud-main-star-sky.vue";

export default defineComponent({
  name: "trud-main",

  components: {
    trudMainWelcome,
    trudMainAbout,
    trudMainStarSky,
  },
})
</script>

<template>
  <div class="trud-main">
    <trud-main-welcome />

    <trud-main-about />

    <trud-main-star-sky class="star-sky" />
  </div>
</template>

<style scoped lang="sass">
.trud-main
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  position: relative

  > *
    z-index: 10

    &.star-sky
      z-index: 5
</style>