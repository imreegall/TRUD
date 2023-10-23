<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "trud-button",

  props: {
    title: {
      type: String,
      default() {
        return ""
      },
    },

    type: {
      type: String,
      default() {
        return "transparent"
      },
      validator(type) {
        return ['transparent', 'disabled', 'darkGreen'].includes(type)
      },
    },

    borderRadius: {
      type: String,
      default() {
        return "large"
      },
      validator(borderRadius) {
        return ['small', 'large'].includes(borderRadius)
      },
    },

    width: {
      type: String,
      default() {
        return "unset"
      },
    },

    maxWidth: {
      type: String,
      default() {
        return "unset"
      },
    },
  },

  computed: {
    buttonClasses() {
      const buttonClasses = {}
      buttonClasses[this.type] = true
      buttonClasses['border-' + this.borderRadius] = true

      return buttonClasses
    },

    buttonStyles() {
      const buttonStyles = {}
      buttonStyles['width'] = this.width
      buttonStyles['max-width'] = this.maxWidth

      return buttonStyles
    }
  },
})
</script>

<template>
  <button
      class="trud-button"
      :class="buttonClasses"
      :style="buttonStyles"
  >
    <h4 v-html="title" />
  </button>
</template>

<style scoped lang="sass">
.trud-button
  padding: 14px 30px 16px
  font-size: 20px
  line-height: 120%
  white-space: nowrap
  user-select: none
  display: flex
  text-align: center
  justify-content: center

  &:hover
    cursor: pointer

  &:active
    > *
      top: 1px

  &.border-large
    +border-radius(999px)

  &.border-small
    +border-radius(6px)

  &.transparent
    border: 1px solid $green1
    background-color: transparent
    color: $green3

    &:hover
      background-color: $green2

  &.disabled
    padding: 15px 30px 17px
    background-color: $green1
    color: $green4

    &:active
      > *
        top: 0px

  > *
    position: relative
</style>