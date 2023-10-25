<script>
import { defineComponent } from 'vue'

import trudButton from "@/components/UI-kit/button/trud-button.vue";

export default defineComponent({
  name: "trud-main-about",

  components: {
    trudButton,
  },
})
</script>

<template>
  <div class="trud-main-about" id="litepaper">
    <h1 class="title">A New Economic Concept</h1>

    <main>
      <h2>The TRUD token is a pioneer of promoting a new economic concept!</h2>

      <h2>The Internet united all people on earth and gave freedom to a new
        concept, blockchain gave the opportunity to back up this concept
        with finance, regardless of location, governments and banks.
        Artificial intelligence has confirmed its loyalty, stability
        and positive impact on humanity. History has never known
        better moments to improve the world!</h2>

      <h2>Today's money is information, not a product or a product ...</h2>

      <h2>The only thing that can be created in unlimited
        volume is money, the number of zeros in your phone...</h2>

      <h2>Bitcoin is an experiment. It was created in order to clearly
        demonstrate the power of limited
        emissions, the power of the new economic order...</h2>

      <h2>Bitcoin will grow as long as fiat money is issued indefinitely...</h2>

      <h2>The next experiment is a limited issue of the national
        currency in a small country. No more inflation or deflation,
        these are two lies. The truth is in the middle...</h2>
    </main>

    <trud-button
        class="button"
        title="READ LITEPAPER"
        type="green"
    />
  </div>
</template>

<style scoped lang="sass">
.trud-main-about
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  color: $white3

  @media (min-width: $desktopScreenMinWidth)
    padding: 0 20px
    gap: 80px
    max-width: calc(1920px - 485px * 2 + 20px * 2)
    margin-top: 160px

  @media (max-width: $mobileScreenMaxWidth)
    padding: 0 25px
    gap: 40px
    margin-top: 80px

  > .title
    text-align: center

    @media (min-width: $desktopScreenMinWidth)
      font-size: 36px
      line-height: 26px

    @media (max-width: $mobileScreenMaxWidth)
      font-size: 24px
      line-height: 17px

  main
    display: flex
    flex-direction: column
    gap: calc(24px * 1.4)
    line-height: 140%

    @media (min-width: $desktopScreenMinWidth)
      font-size: 24px
      text-align: center
      align-items: center

    @media (max-width: $mobileScreenMaxWidth)
      font-size: 17px
      font-weight: 400
      color: $white2
      text-align: left
      align-items: flex-start

      > *:first-child
        text-align: center

  .button
    font-size: 20px
    line-height: 14px
    padding: 18px 10px
    +border-radius(6px)
    width: 100%

    @media (min-width: $desktopScreenMinWidth)
      max-width: 393px

    @media (max-width: $mobileScreenMaxWidth)
      max-width: 248px
</style>