<script>
import { defineComponent } from 'vue'

import trudButton from "@/components/UI-kit/button/trud-button.vue";

export default defineComponent({
  name: "trud-main-welcome",

  components: {
    trudButton,
  },
})
</script>

<template>
  <div class="trud-main-welcome">
    <main>
      <div class="title">
        <h1>True-Decentralisation</h1>

        <h1>True Economics</h1>
      </div>

      <h5 class="description only-ds">This is root of TRUD</h5>
      <h5 class="description only-mb">This is father and mother of TRUD</h5>

      <trud-button title="BUY TRUD" type="disabled" border-radius="large" width="100%" max-width="463px" />
    </main>

    <img src="/assets/images/logos/trud.png" alt="" class="image">
  </div>
</template>

<style scoped lang="sass">
.trud-main-welcome
  display: flex
  width: 100%
  padding: 0 20px
  gap: 30px

  @media (min-width: $desktopScreenMinWidth)
    justify-content: space-between
    align-items: flex-start
    max-width: calc(1920px - 100px * 2 + 20px * 2)
    margin-top: 144px

  @media (max-width: $mobileScreenMaxWidth)
    margin-top: 90px
    flex-direction: column-reverse
    align-items: center

  main
    display: flex
    flex-direction: column

    @media (min-width: $desktopScreenMinWidth)
      align-items: flex-start

    @media (max-width: $mobileScreenMaxWidth)
      align-items: center
      text-align: center
      gap: 24px

    > .title
      display: flex
      flex-direction: column
      color: $white2
      line-height: 110%

      @media (min-width: $desktopScreenMinWidth)
        align-items: flex-start
        gap: 10px
        font-size: 80px

      @media (max-width: $mobileScreenMaxWidth)
        align-items: center
        gap: 16px
        font-size: 24px

    .description
      color: $white2

      @media (min-width: $desktopScreenMinWidth)
        margin: 64px 0 72px 17px
        font-size: 36px

      @media (max-width: $mobileScreenMaxWidth)
        font-size: 20px

  .image
    aspect-ratio: 1
    +user-select(none)

    @media (min-width: $desktopScreenMinWidth)
      width: 500px
      margin-right: 80px

    @media (max-width: $mobileScreenMaxWidth)
      width: calc(100% * calc((360 - 88 * 2) / 360))
</style>