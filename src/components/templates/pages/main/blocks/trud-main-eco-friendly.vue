<script>
import { defineComponent } from 'vue'

import trudButton from "@/components/UI-kit/button/trud-button.vue";
import trudCoin from "@/components/UI-kit/coin/trud-coin.vue";

export default defineComponent({
  name: "trud-main-eco-friendly",

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
      text: [
          "The Eco-friendly company serves as an entirely self-sufficient, " +
          "independent, and decentralized entity. " +
          "It is a living organism comprised of individuals who independently " +
          "chart a large-scale developmental path where, " +
          "regardless of circumstances, they will achieve results. " +
          "Relationships among people are not bound by fixed salaries; " +
          "instead, individuals independently determine their incomes " +
          "by contributing their skills and creating products for successful implementation. " +
          "Everyone plays a role in the system's development, " +
          "and whether one's contribution is big or small, " +
          "it matters not, for individuals can step in for one another along the way.",

          "In this, we see the sustainability and longevity of our community, " +
          "which is growing rapidly and always extends a warm welcome to new members."
      ],

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
  <div class="trud-main-eco-friendly" id="community">
    <div class="map"></div>

    <div class="coin only-ds">
      <trud-coin
          :color="0xFFFFFF"
          :mouseFollow="true"
          :controls="false"
          :speed="0"
          :reverse="true"
      />

      <div class="green-round"></div>
    </div>

    <main>
      <h1 class="title">Eco-friendly company</h1>

      <div class="text">
        <template
            v-for="(paragraph, index) in text"
            :key="`trud-main-eco-friendly-text-paragraph-${ index }`"
        >
          <br v-if="index > 0">

          <h3 v-html="paragraph"></h3>
        </template>
      </div>

      <trud-button class="button" title="INTAKE FORM" type="darkGreen" />
    </main>
  </div>
</template>

<style scoped lang="sass">
.trud-main-eco-friendly
  display: flex
  gap: 50px
  align-items: center
  justify-content: center
  position: relative
  width: 100%

  @media (min-width: $desktopScreenMinWidth)
    margin-top: 130px
    max-width: calc(1920px - 294px * 2 + 20px * 2)
    padding: 90px 20px

  @media (max-width: $mobileScreenMaxWidth)

  .map
    position: absolute
    +background-image-settings()
    pointer-events: none

    @media (min-width: $desktopScreenMinWidth)
      height: 100%
      max-width: calc(100% - 20px * 2)
      aspect-ratio: calc(1666 / 705)
      background-image: url("/public/assets/images/templates/main/eco-friendly/map-ds.png")
      +opacity(15)

    @media (max-width: $mobileScreenMaxWidth)
      position: absolute
      top: 55px
      bottom: 0
      background-image: url("/public/assets/images/templates/main/eco-friendly/map-mb.png")
      width: 100%
      background-size: 100% 100%

  .coin
    display: flex
    justify-content: center
    align-items: center
    width: 500px
    aspect-ratio: 1
    position: relative

    .green-round
      position: absolute
      width: 140%
      aspect-ratio: 1
      z-index: -1
      background: radial-gradient(closest-side, #31E7A766 50%, #31E7A725 75%, transparent 100%)
      filter: blur(10px)

  main
    display: flex
    flex-direction: column
    gap: 20px
    background: linear-gradient(-45deg, #b29963, #e7e5d8)
    mix-blend-mode: hard-light

    @media (min-width: $desktopScreenMinWidth)
      padding: 49px
      +border-radius(20px)
      border: 1px solid $green3
      width: 100%
      flex: 1
      margin-right: 25px

    @media (max-width: $mobileScreenMaxWidth)
      padding: 40px 20px 60px
      align-items: center

    > .title
      color: $green4
      text-align: center

      @media (min-width: $desktopScreenMinWidth)
        font-size: 36px

      @media (max-width: $mobileScreenMaxWidth)
        font-size: 24px

    .text
      color: $green4
      font-size: 18px

    .button
      +border-radius(999px)
      padding: 15px 30px
      max-width: 280px
      width: 100%
      font-size: 20px
      line-height: 14px
</style>