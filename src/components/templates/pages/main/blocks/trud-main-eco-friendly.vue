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
})
</script>

<template>
  <div class="trud-main-eco-friendly" id="community">
    <div class="map"></div>

    <div class="coin only-ds">
      <trud-coin :color="0xFFFFFF" :mouseFollow="true" :controls="false" :speed="0" :reverse="true" />

      <div class="green-round"></div>
    </div>

    <main>
      <h1 class="title">Eco-friendly company</h1>

      <div class="text">
        <h3>Eco-friendly company is a completely self-sufficient, independent, decentralized
          structure. A living organism consisting of people, which independently determines a
          large-scale development path in which, regardless of the circumstances, the result will
          be achieved. People's relationships are not cemented by a fixed salary; instead, people
          independently determine each other's income by creating products and using their
          skills for successful implementation. Everyone brings their own contribution to the
          development of the system, big or small, it doesn't matter, people can replace each
          other along the way.</h3>

        <br>

        <h3>In this we see the sustainability and longevity of our community, we are growing very
          quickly and always welcome new members to our Eco-friendly company.</h3>
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