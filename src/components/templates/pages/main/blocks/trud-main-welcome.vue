<script>
import { defineComponent } from 'vue'

import trudButton from "@/components/UI-kit/button/trud-button.vue";

import trudCoin from "@/components/UI-kit/coin/trud-coin.vue";

export default defineComponent({
  name: "trud-main-welcome",

  components: {
    trudButton,

    trudCoin,
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

      <h5 class="description">This is root of TRUD</h5>

      <trud-button class="button" title="BUY TRUD" type="green" />
    </main>

<!--    <img src="/assets/images/logos/trud.png" alt="" class="image">-->
    <div class="image">
      <trud-coin :color="0x00FF00" :controls="true" :speed="100" />

      <div class="green-round"></div>
    </div>
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

      @media (min-width: $desktopScreenMinWidth)
        align-items: flex-start
        gap: 10px
        font-size: 80px
        line-height: 88px

      @media (max-width: $mobileScreenMaxWidth)
        align-items: center
        gap: 16px
        font-size: 24px
        line-height: 26px

    .description
      color: $white2

      @media (min-width: $desktopScreenMinWidth)
        margin: 64px 0 72px 17px
        font-size: 36px
        line-height: 26px

      @media (max-width: $mobileScreenMaxWidth)
        font-size: 17px
        line-height: 12px

    .button
      font-size: 20px
      line-height: 14px
      +border-radius(999px)
      width: 100%

      @media (min-width: $desktopScreenMinWidth)
        padding: 20px 50px
        max-width: 463px

      @media (max-width: $mobileScreenMaxWidth)
        padding: 13px 50px

  .image
    aspect-ratio: 1
    display: flex
    justify-content: center
    align-items: center
    position: relative

    @media (min-width: $desktopScreenMinWidth)
      width: 500px
      margin-right: 80px

    @media (max-width: $mobileScreenMaxWidth)
      width: calc(100% * calc((360 - 88 * 2) / 360))

    .green-round
      position: absolute
      width: 130%
      aspect-ratio: 1
      z-index: -1
      background: radial-gradient(closest-side, #31E7A788 0%, transparent 100%)
</style>