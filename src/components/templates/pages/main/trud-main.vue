<script>
import { defineComponent } from 'vue'

import trudMainStarSky from "@/components/templates/pages/main/blocks/trud-main-star-sky.vue";
import trudMainWelcome from "@/components/templates/pages/main/blocks/trud-main-welcome.vue";
import trudMainAbout from "@/components/templates/pages/main/blocks/trud-main-about.vue";
import trudMainEcosystem from "@/components/templates/pages/main/blocks/trud-main-ecosystem.vue";
import trudMainHowToBuy from "@/components/templates/pages/main/blocks/trud-main-how-to-buy.vue";
import trudMainSupply from "@/components/templates/pages/main/blocks/trud-main-supply.vue";
import trudMainEcoFriendly from "@/components/templates/pages/main/blocks/trud-main-eco-friendly.vue";

export default defineComponent({
  name: "trud-main",

  components: {
    trudMainStarSky,
    trudMainWelcome,
    trudMainAbout,
    trudMainEcosystem,
    trudMainHowToBuy,
    trudMainSupply,
    trudMainEcoFriendly,
  },
})
</script>

<template>
  <div class="trud-main">
    <trud-main-star-sky class="star-sky" />

    <trud-main-welcome />

    <trud-main-about />

    <trud-main-ecosystem />

    <trud-main-how-to-buy />

    <trud-main-supply />

    <trud-main-eco-friendly />
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