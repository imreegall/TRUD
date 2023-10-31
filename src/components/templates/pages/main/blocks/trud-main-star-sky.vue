<script>
import { defineComponent } from 'vue'

import trudStar from "@/components/UI-kit/star-sky/trud-star.vue";

export default defineComponent({
  name: "trud-main-star-sky",

  components: {
    trudStar,
  },
})
</script>

<template>
  <div class="trud-main-star-sky">
    <div class="star-sky">
      <svg class="sky only-ds" xmlns="http://www.w3.org/2000/svg" width="1291" height="1639" viewBox="0 0 1291 1639" fill="none">
        <g opacity="0.4" filter="url(#filter0_f_822_4844)">
          <path d="M749.417 695.428L1046.08 755.897L1281.86 1056.85L403.501 1387.5L8.99999 1630.5L137.463 1056.85L749.417 695.428ZM749.417 695.428L636.578 472.907L810.031 9.47538L1050.69 41.8545" stroke="#31E7A7" stroke-width="1" stroke-linejoin="round"/>
        </g>
        <defs>
          <filter id="filter0_f_822_4844" x="0.5" y="0.975586" width="1289.86" height="1638.02" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_822_4844"/>
          </filter>
        </defs>
      </svg>

      <svg class="sky only-mb" xmlns="http://www.w3.org/2000/svg" width="278" height="726" viewBox="0 0 278 726" fill="none">
        <g opacity="0.2" filter="url(#filter0_f_822_4029)">
          <path d="M82.1292 255.55L178.713 251.251L274.124 335.407L82.1292 607L16.499 722L3.9992 522L82.1292 255.55ZM82.1292 255.55L30.6798 188.095L50.3701 12.8616L127.489 3.60053" stroke="#31E7A7" stroke-width="1" stroke-linejoin="round"/>
        </g>
        <defs>
          <filter id="filter0_f_822_4029" x="0.686411" y="0.298716" width="276.752" height="725.016" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="0.779841" result="effect1_foregroundBlur_822_4029"/>
          </filter>
        </defs>
      </svg>

      <trud-star class="star1" duration="4.5s" />

      <trud-star class="star2" duration="7s" />

      <trud-star class="star3" duration="6s" />

      <trud-star class="star4" duration="5s" />

      <trud-star class="star5" duration="6.5s" />

      <trud-star class="star6" duration="4s" size="large" />

      <trud-star class="star7" duration="7.5s" />

      <trud-star class="star8" duration="8s" />

      <trud-star class="star9" duration="5.5s" />
    </div>
  </div>
</template>

<style scoped lang="sass">
.trud-main-star-sky
  width: 100%
  padding-top: 40px
  position: absolute
  display: flex
  top: 0
  z-index: 0

  @media (min-width: $desktopScreenMinWidth)
    max-width: calc(1920px - 315px * 2 + 20px * 2)
    padding: 0 20px
    top: 20px

  @media (max-width: $mobileScreenMaxWidth)
    padding-left: 37px
    padding-right: 47px
    top: -20px

  .star-sky
    height: 100%
    width: 100%
    display: flex
    position: relative

    @media (min-width: $desktopScreenMinWidth)
      //margin-left: 80px
      //margin-right: 200px

    @media (max-width: $mobileScreenMaxWidth)
      //margin-left: 35px
      //margin-right: 35px

    .sky
      width: 100%
      height: 100%

    .star1
      position: absolute

      @media (min-width: $desktopScreenMinWidth)
        top: 2.6%
        right: 18.5%

      @media (max-width: $mobileScreenMaxWidth)
        top: 0.5%
        right: 55%

    .star2
      position: absolute

      @media (min-width: $desktopScreenMinWidth)
        top: 0.6%
        right: 37.2%

      @media (max-width: $mobileScreenMaxWidth)
        top: 1.8%
        right: 81.5%

    .star3
      position: absolute

      @media (min-width: $desktopScreenMinWidth)
        top: 29%
        right: 50.6%

      @media (max-width: $mobileScreenMaxWidth)
        top: 25.8%
        right: 88.8%

    .star4
      position: absolute

      @media (min-width: $desktopScreenMinWidth)
        top: 42.5%
        right: 42.1%

      @media (max-width: $mobileScreenMaxWidth)
        top: 35.1%
        right: 70.5%

    .star5
      position: absolute

      @media (min-width: $desktopScreenMinWidth)
        top: 46.2%
        right: 19%

      @media (max-width: $mobileScreenMaxWidth)
        top: 34.7%
        right: 36%

    .star6
      position: absolute

      @media (min-width: $desktopScreenMinWidth)
        top: 64.4%
        right: 0.8%

      @media (max-width: $mobileScreenMaxWidth)
        top: 46.2%
        right: 2%

    .star7
      position: absolute

      @media (min-width: $desktopScreenMinWidth)
        top: 64.5%
        right: 89.3%

      @media (max-width: $mobileScreenMaxWidth)
        top: 72%
        right: 98.5%

    .star8
      position: absolute

      @media (min-width: $desktopScreenMinWidth)
        top: 99.2%
        right: 99.2%

      @media (max-width: $mobileScreenMaxWidth)
        top: 84%
        right: 71%

    .star9
      position: absolute

      @media (min-width: $desktopScreenMinWidth)
        top: 84.8%
        right: 69%

      @media (max-width: $mobileScreenMaxWidth)
        top: 98.8%
        right: 94%
</style>