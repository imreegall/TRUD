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
      testAddresses: [
        '0xF859222A98Da1cCFF5Bb4373404d4C7cac66256d',
        '0x6DE4C1Eb559EDf6A18FDAdf9d756585C1dF3074b',
      ],
    }
  },

  computed: {
    isAddressOfTester() {
      if (!this.address) {
        return false
      }

      return this.testAddresses.includes(this.address)
    },
  },
})
</script>

<template>
  <div class="trud-main-welcome">
    <div class="wrapper">
      <main>
        <div class="title">
          <h1>True Economy</h1>

          <h1>True Decentralisation</h1>
        </div>

        <h5 class="description">This is the root of TRUD</h5>

        <trud-button class="button" title="BUY TRUD" type="green" link="https://app.uniswap.org/swap?outputCurrency=0x2e7729f4e4aa8e68d13830d372f975046d4a498f" />
      </main>

      <!--    <img src="/assets/images/logos/trud.png" alt="" class="image">-->
      <div class="image">
        <trud-coin
            class="only-ds"
            :color="0x00FF00"
            :mouseFollow="true"
            :controls="false"
            :speed="250"
        />

        <trud-coin
            class="only-mb"
            :color="0x00FF00"
            :mouseFollow="false"
            :controls="false"
            :speed="250"
        />

        <div class="green-round"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.trud-main-welcome
  width: 100%
  display: flex
  justify-content: center
  overflow-x: clip

  .wrapper
    display: flex
    width: 100%
    padding: 0 20px
    gap: 30px

    @media (min-width: $desktopScreenMinWidth)
      justify-content: space-between
      align-items: flex-start
      max-width: calc(1920px - 315px * 2 + 20px * 2)
      margin-top: 144px

    @media (max-width: $mobileScreenMaxWidth)
      margin-top: 63px
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
          font-size: 65px
          line-height: 72px

        @media (max-width: $mobileScreenMaxWidth)
          align-items: center
          gap: 16px
          font-size: 24px
          line-height: 26px

      .description
        color: $white2

        @media (min-width: $desktopScreenMinWidth)
          margin-top: 74px
          margin-bottom: 98px
          font-size: 33px
          line-height: 22px

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
          max-width: 386px

        @media (max-width: $mobileScreenMaxWidth)
          padding: 13px 50px

    .image
      aspect-ratio: 1
      display: flex
      justify-content: center
      align-items: center
      position: relative

      @media (min-width: $desktopScreenMinWidth)
        width: 450px

      @media (max-width: $mobileScreenMaxWidth)
        width: calc(calc(100% - 68px * 2))

      .green-round
        position: absolute
        width: 130%
        aspect-ratio: 1
        z-index: -1
        background: radial-gradient(closest-side, #31E7A788 0%, transparent 100%)
</style>