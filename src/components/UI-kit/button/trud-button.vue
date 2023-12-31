<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "trud-button",

  data() {
    return {
      isButtonClicked: false,
    }
  },

  props: {
    title: {
      type: String,
      default() {
        return ""
      },
    },

    link: {
      type: String,
      default() {
        return ""
      }
    },

    type: {
      type: String,
      default() {
        return "transparent"
      },
      validator(type) {
        return ['transparent', 'green', 'darkGreen'].includes(type)
      },
    },

    showSoon: {
      type: Boolean,
      default() {
        return true
      },
    },

    lineHeight: {
      type: Boolean,
      default() {
        return false
      },
    },
  },

  computed: {
    buttonClasses() {
      const buttonClasses = {}
      buttonClasses[this.type] = true

      return buttonClasses
    },
  },

  methods: {
    handleButtonClick() {
      if (this.isButtonClicked) {
        return
      }

      if (this.link === "") {
        if (this.showSoon) {
          this.isButtonClicked = true

          this.$refs.button.classList.add("soon-active")

          setTimeout(() => {
            this.$refs.button.classList.remove("soon-active")

            this.isButtonClicked = false
          }, 1000)
        }
      } else {
        window.open(this.link, "_blank")
      }
    },
  },
})
</script>

<template>
  <button
      class="trud-button"
      :class="buttonClasses"
      @click="handleButtonClick"
      ref="button"
  >
    <span class="cover"></span>

    <h4
        v-html="title"
        class="title"
        :class="{
          'hide-overflow': lineHeight,
        }"
    />

    <slot></slot>
  </button>
</template>

<style scoped lang="sass">
.trud-button
  white-space: nowrap
  user-select: none
  display: flex
  text-align: center
  justify-content: center
  align-items: center
  position: relative
  overflow: hidden

  &:after
    display: none
    content: "SOON"
    position: absolute
    font-family: Manrope, "Calibri Light", sans-serif
    font-weight: 600
    animation: left ease-in 1s
    z-index: 20

  &.soon-active
    color: transparent !important

    .cover
      display: flex
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      background-color: inherit
      z-index: 10

    &:after
      display: block

  &:hover
    cursor: pointer

  &:active
    > *
      top: 1px

  &.transparent
    border: 1px solid $green3
    background-color: transparent
    color: $green3

    &:after
      color: $green3

    &:hover
      background-color: $green2

  &.green
    background-color: $green3
    color: $green4

    &:after
      color: $green4

    &:hover
      background-color: $green7

  &.darkGreen
    background-color: $green11
    color: $white5

    &:after
      color: $white5

    &:hover
      background-color: $green12

  > *
    position: relative

    &.title
      &.hide-overflow
        text-overflow: ellipsis
        overflow: hidden
        white-space: nowrap
        line-height: 1
</style>