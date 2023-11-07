<script>
import { defineComponent } from 'vue'

import trudMainStarSky from "@/components/templates/pages/main/blocks/trud-main-star-sky.vue";
import trudMainWelcome from "@/components/templates/pages/main/blocks/trud-main-welcome.vue";
import trudMainAbout from "@/components/templates/pages/main/blocks/trud-main-about.vue";
import trudMainEcosystem from "@/components/templates/pages/main/blocks/trud-main-ecosystem.vue";
import trudMainNews from "@/components/templates/pages/main/blocks/trud-main-news.vue";
import trudMainHowToBuy from "@/components/templates/pages/main/blocks/trud-main-how-to-buy.vue";
import trudMainSupply from "@/components/templates/pages/main/blocks/trud-main-supply.vue";
import trudMainRoadmap from "@/components/templates/pages/main/blocks/trud-main-roadmap.vue";
import trudMainEcoFriendly from "@/components/templates/pages/main/blocks/trud-main-eco-friendly.vue";

import trudHeader from "@/components/templates/header/trud-header.vue";
import trudFooter from "@/components/templates/footer/trud-footer.vue";

import trudBurgerMenu from "@/components/templates/burger-menu/trud-burger-menu.vue";

export default defineComponent({
  name: "trud-main",

  components: {
    trudMainStarSky,
    trudMainWelcome,
    trudMainAbout,
    trudMainEcosystem,
    trudMainNews,
    trudMainHowToBuy,
    trudMainSupply,
    trudMainRoadmap,
    trudMainEcoFriendly,

    trudHeader,
    trudFooter,

    trudBurgerMenu,
  },

  props: {
    address: {
      type: String,
      default() {
        return null
      }
    },

    balance: {
      type: String,
      default() {
        return null
      }
    },
  },

  data() {
    return {
      isBurgerMenuShown: false,
      closeButtonStatus: true,
    }
  },
})
</script>

<template>
  <div class="trud-main" id="main">
    <trud-header
        :address="address"
        :balance="balance"
        @showBurgerMenu="status => {
          isBurgerMenuShown = true
          closeButtonStatus = status
        }"
        @walletConnect="$emit('walletConnect')"
    />

    <main>
      <trud-main-star-sky class="star-sky" />

      <trud-main-welcome />

      <trud-main-about />

      <trud-main-ecosystem />

      <trud-main-news />

      <trud-main-how-to-buy />

      <trud-main-supply />

      <trud-main-roadmap />

      <trud-main-eco-friendly />
    </main>

    <trud-footer />

    <trud-burger-menu
        v-show="isBurgerMenuShown"
        :closeButtonStatus="closeButtonStatus"
        @closeBurgerMenu="isBurgerMenuShown = false"
    />
  </div>
</template>

<style scoped lang="sass">
.trud-main
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  background-color: $black
  min-height: 100vh

  @media (min-width: $desktopScreenMinWidth)
    padding: calc(40px + 73px) 0 130px

  @media (max-width: $mobileScreenMaxWidth)
    padding: 25px 0 92px

  main
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