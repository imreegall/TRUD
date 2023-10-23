<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "trud-star",

  props: {
    duration: {
      type: String,
      default() {
        return "3s"
      },
    }
  }
})
</script>

<template>
  <div class="trud-star">
    <div
        class="circle"
        :style="{
          'animation-duration': this.duration,
        }"
    ></div>
  </div>
</template>

<style scoped lang="sass">
@keyframes starTwinking
  0%
    transform: scale(1)
  50%
    transform: scale(1.5)
  100%
    transform: scale(1)

.trud-star
  display: flex
  align-items: center
  justify-content: center
  position: relative
  width: 0
  height: 0

  .circle
    aspect-ratio: 1
    position: absolute
    background: radial-gradient(closest-side, $green3 13%, $green3 14%, #31E7A744 15%, #31E7A722 50%, #31E7A70F 75%, transparent 100%)
    transition: transform
    animation: starTwinking linear infinite

    @media (min-width: $desktopScreenMinWidth)
      filter: blur(2px)
      width: 100px

    @media (max-width: $mobileScreenMaxWidth)
      filter: blur(1px)
      width: 50px
</style>