<script>
import { defineComponent } from 'vue'

import trudButton from "@/components/UI-kit/button/trud-button.vue";

export default defineComponent({
  name: "trud-main-about",

  components: {
    trudButton,
  },

  data() {
    return {
      text: [
          "The TRUD token is a pioneer in promoting a new economic concept!",

          "Our primary focus is on significant matters, " +
          "demonstrating by our own example that cryptocurrencies " +
          "can bring together people from across " +
          "the globe to achieve grand objectives. " +
          "It is possible to establish Eco-friendly " +
          "companies and promote groundbreaking ideas.",

          "We find ourselves in remarkable times, " +
          "where even the wealthiest monarchs " +
          "of the past lacked the conveniences " +
          "and comforts accessible to an average person today. " +
          "Regrettably, despite the current advancements and progress, " +
          "these simple luxuries remain out of reach " +
          "for many due to the limitations " +
          "of the current global economic system.",
      ],
    }
  },
})
</script>

<template>
  <div class="trud-main-about" id="litepaper">
    <h1 class="title">Just Try It</h1>

    <main>
      <h2
          v-for="(paragraph, index) in text"
          :key="`trud-main-about-text-paragraph-${ index }`"
          v-html="paragraph"
          :class="{
            'text-left': index > 0
          }"
      ></h2>
    </main>

    <trud-button
        class="button"
        title="READ WHITEPAPER"
        type="green"
        link="https://samigrella-company.gitbook.io/trud/"
        :show-soon="false"
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

    > .text-left
      text-align: left
      width: 100%

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