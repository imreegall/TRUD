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
      <svg class="sky only-ds" xmlns="http://www.w3.org/2000/svg" width="1622" height="1805" viewBox="0 0 1622 1805" fill="none">
        <g opacity="0.05" filter="url(#filter0_f_705_99)">
          <path d="M1099.34 690.914L1392.54 766.39L1612.71 1078.95L443.35 1540.1L9.00118 1796.48L287.287 1169.92L1099.34 690.914ZM1099.34 690.914L997.959 462.943L1194.76 8.931L1433.45 53.5062" stroke="#31E7A7" stroke-width="9" stroke-linejoin="round"/>
        </g>
        <defs>
          <filter id="filter0_f_705_99" x="0.500977" y="0.429688" width="1620.71" height="1804.55" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_705_99"/>
          </filter>
        </defs>
      </svg>

      <svg class="sky only-mb" xmlns="http://www.w3.org/2000/svg" width="278" height="726" viewBox="0 0 278 726" fill="none">
        <g opacity="0.05" filter="url(#filter0_f_764_1394)">
          <path d="M82.1292 255.549L178.713 251.25L274.124 335.406L82.1292 606.999L16.499 721.999L3.9992 521.999L82.1292 255.549ZM82.1292 255.549L30.6798 188.094L50.3701 12.8606L127.489 3.59955" stroke="#31E7A7" stroke-width="3.50929" stroke-linejoin="round"/>
        </g>
        <defs>
          <filter id="filter0_f_764_1394" x="0.684458" y="0.297739" width="276.754" height="725.016" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="0.779841" result="effect1_foregroundBlur_764_1394"/>
          </filter>
        </defs>
      </svg>

      <trud-star class="star1" duration="4.5s" />

      <trud-star class="star2" duration="7s" />

      <trud-star class="star3" duration="6s" />

      <trud-star class="star4" duration="5s" />

      <trud-star class="star5" duration="6.5s" />

      <trud-star class="star6" duration="4s" />

      <trud-star class="star7" duration="7.5s" />

      <trud-star class="star8" duration="8s" />

      <trud-star class="star9" duration="5.5s" />
    </div>
  </div>
</template>

<style scoped lang="sass">
.trud-main-star-sky
  width: 100%
  max-width: 1920px
  padding-top: 40px
  position: absolute
  display: flex
  top: 0
  z-index: 0

  .star-sky
    height: 100%
    width: 100%
    display: flex
    position: relative

    @media (min-width: $desktopScreenMinWidth)
      margin-left: 80px
      margin-right: 200px

    @media (max-width: $mobileScreenMaxWidth)
      margin-left: 35px
      margin-right: 35px

    .sky
      width: 100%
      height: 100%

    .star1
      position: absolute

      @media (min-width: $desktopScreenMinWidth)
        top: 3.1%
        right: 11.5%

      @media (max-width: $mobileScreenMaxWidth)
        top: 0.5%
        right: 55%

    .star2
      position: absolute

      @media (min-width: $desktopScreenMinWidth)
        top: 0.5%
        right: 26.2%

      @media (max-width: $mobileScreenMaxWidth)
        top: 1.8%
        right: 81.5%

    .star3
      position: absolute

      @media (min-width: $desktopScreenMinWidth)
        top: 25.5%
        right: 38.3%

      @media (max-width: $mobileScreenMaxWidth)
        top: 25.8%
        right: 88.8%

    .star4
      position: absolute

      @media (min-width: $desktopScreenMinWidth)
        top: 38.3%
        right: 32.2%

      @media (max-width: $mobileScreenMaxWidth)
        top: 35.1%
        right: 70.5%

    .star5
      position: absolute

      @media (min-width: $desktopScreenMinWidth)
        top: 42.5%
        right: 14.2%

      @media (max-width: $mobileScreenMaxWidth)
        top: 34.7%
        right: 36%

    .star6
      position: absolute

      @media (min-width: $desktopScreenMinWidth)
        top: 59.7%
        right: 0.8%

      @media (max-width: $mobileScreenMaxWidth)
        top: 46.2%
        right: 2%

    .star7
      position: absolute

      @media (min-width: $desktopScreenMinWidth)
        top: 64.8%
        right: 82%

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
        top: 85%
        right: 72%

      @media (max-width: $mobileScreenMaxWidth)
        top: 98.8%
        right: 94%
</style>