<script>
import { defineComponent } from 'vue'

import trudButton from "@/components/UI-kit/button/trud-button.vue";

export default defineComponent({
  name: "trud-header",

  components: {
    trudButton,
  },
})
</script>

<template>
  <div class="trud-header">
    <div class="logo-wrapper">
      <div class="logo"></div>

      <h1 class="title">TRUD</h1>
    </div>

    <nav class="only-ds">
      <h4>Litepaper</h4>

      <h4>Ecosystem</h4>

      <h4>Tokenomic</h4>

      <h4>Roadmap</h4>

      <h4>Community</h4>
    </nav>

    <div class="buttons-group only-ds">
      <trud-button title="Room" type="transparent" border-radius="large" />

      <trud-button title="Connect wallet" type="disabled" border-radius="large" />
    </div>
  </div>
</template>

<style scoped lang="sass">
.trud-header
  display: flex
  align-items: center
  width: 100%
  justify-content: space-between
  padding: 0 20px

  @media (min-width: $desktopScreenMinWidth)
    max-width: calc(1920px - 100px * 2 + 20px * 2)

  @media (max-width: $mobileScreenMaxWidth)

  .logo-wrapper
    display: flex
    align-items: center
    gap: 10px
    +user-select(none)

    .logo
      +background-image-settings()
      background-image: url("/public/assets/images/logos/trud.png")
      aspect-ratio: 1

      @media (min-width: $desktopScreenMinWidth)
        width: 73px

      @media (max-width: $mobileScreenMaxWidth)
        width: 50px

    > .title
      line-height: 110%
      color: $white1

      @media (min-width: $desktopScreenMinWidth)
        font-size: 50px

      @media (max-width: $mobileScreenMaxWidth)
        font-size: 30px

  nav
    display: flex
    align-items: baseline
    gap: 32px
    line-height: 120%
    font-size: 20px
    color: $white2

  .buttons-group
    display: flex
    gap: 30px
    align-items: center
</style>