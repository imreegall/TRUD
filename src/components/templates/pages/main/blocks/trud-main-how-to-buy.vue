<script>
import { defineComponent } from 'vue'

import trudButton from "@/components/UI-kit/button/trud-button.vue";

export default defineComponent({
  name: "trud-main-how-to-buy",

  components: {
    trudButton,
  },

  data() {
    return {
      instruction: [
          "Download and set up a wallet like <a class='link' href='https://metamask.io/download/' target='_blank'>MetaMask</a>. Deposit ETH into it or purchase ETH directly through <a class='link' href='https://metamask.io/download/' target='_blank'>MetaMask</a>.",
          'Visit <a class="link" href="https://app.uniswap.org/swap?theme=dark&exactField=input&exactAmount=1&inputCurrency=eth&outputCurrency=0x2e7729f4E4AA8E68D13830D372F975046d4a498F" target=\'_blank\'>app.uniswap.org</a> and link your wallet using the top corner option. In the token search bar, enter "TRUD".',
          "Specify the ETH amount you want to swap for TRUD, and then confirm the transaction within your wallet. Congratulations! You have a TRUD Token!",
      ]
    }
  },
})
</script>

<template>
  <div class="trud-main-how-to-buy">
    <h1 class="title">How to Buy</h1>

    <main>
      <div class="instruction">
        <div class="green-round"></div>

        <div
            class="check"
            v-for="(check, index) in instruction"
            :key="`trud-main-how-to-buy-instruction-check-${ index }`"
        >
          <h1 class="title" v-html="index + 1" />

          <h2 class="text" v-html="check" />
        </div>
      </div>

      <div class="video-wrapper">
        <h1 class="title">Watch video how to buy TRUD</h1>

        <div class="options">
          <trud-button class="button" title="WATCH" type="green" />

          <h1 class="time">0:15</h1>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped lang="sass">
.trud-main-how-to-buy
  display: flex
  flex-direction: column
  width: 100%
  padding: 0 20px

  @media (min-width: $desktopScreenMinWidth)
    gap: 80px
    margin-top: 140px
    max-width: calc(1920px - 315px * 2 + 20px * 2)

  @media (max-width: $mobileScreenMaxWidth)
    gap: 40px
    margin-top: 70px

  > .title
    color: $white4

    @media (min-width: $desktopScreenMinWidth)
      font-size: 36px
      line-height: 26px

    @media (max-width: $mobileScreenMaxWidth)
      font-size: 24px
      line-height: 17px
      text-align: center

  main
    display: flex
    gap: 30px

    @media (min-width: $desktopScreenMinWidth)

    @media (max-width: $mobileScreenMaxWidth)
      flex-direction: column

    .instruction
      display: flex
      flex-direction: column
      width: 100%
      flex: 1
      position: relative

      @media (min-width: $desktopScreenMinWidth)
        gap: 30px

      @media (max-width: $mobileScreenMaxWidth)
        gap: 20px

      .green-round
        position: absolute
        top: -20%
        left: 0
        width: 80%
        aspect-ratio: 1
        z-index: -1
        background: radial-gradient(closest-side, #31E7A766, transparent 100%)
        filter: blur(100px)

      .check
        display: flex

        @media (min-width: $desktopScreenMinWidth)
          gap: 30px
          align-items: center

        @media (max-width: $mobileScreenMaxWidth)
          gap: 16px
          align-items: flex-start

        > .title
          color: white
          line-height: 110%
          font-variant-numeric: lining-nums proportional-nums
          width: 100%
          max-width: 44px
          -webkit-text-stroke: 2px $green3
          -webkit-text-fill-color: transparent

          @media (min-width: $desktopScreenMinWidth)
            font-size: 80px

          @media (max-width: $mobileScreenMaxWidth)
            font-size: 60px

        .text
          background-color: $green6
          +border-radius(20px)
          border: 1px solid $green3
          padding: 20px
          color: $white2
          line-height: 140%

          @media (min-width: $desktopScreenMinWidth)
            font-size: 24px

          @media (max-width: $mobileScreenMaxWidth)
            font-size: 17px

    .video-wrapper
      display: flex
      flex-direction: column
      justify-content: space-between
      +background-image-settings()
      background-image: url("/public/assets/images/templates/main/how-to-buy/collection.png")

      @media (min-width: $desktopScreenMinWidth)
        width: 520px
        height: 486px
        +border-radius(40px)
        padding: 28px 30px 53px
        +user-select(none)

      @media (max-width: $mobileScreenMaxWidth)
        width: 100%
        aspect-ratio: calc(336 / 486)
        +border-radius(20px)
        padding: 33px 22px 28px

      > .title
        color: $white2
        text-align: center

        @media (min-width: $desktopScreenMinWidth)
          font-size: 24px
          line-height: 17px

        @media (max-width: $mobileScreenMaxWidth)
          font-size: 20px
          line-height: 14px


      .options
        display: flex
        flex-direction: column
        align-items: center
        gap: 20px

        .button
          color: $green4
          font-size: 17px
          line-height: 12px
          padding: 12px 24px
          +border-radius(999px)

        .time
          color: $green9
          font-size: 17px
          line-height: 12px
          font-variant-numeric: lining-nums proportional-nums
</style>