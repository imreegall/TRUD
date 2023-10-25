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
        return ['transparent', 'green', 'darkGreen'].includes(type)
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
})
</script>

<template>
  <button
      class="trud-button"
      :class="buttonClasses"
  >
    <h4 v-html="title" />
  </button>
</template>

<style scoped lang="sass">
.trud-button
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

  &.transparent
    border: 1px solid $green3
    background-color: transparent
    color: $green3

    &:hover
      background-color: $green2

  &.green
    background-color: $green3
    color: $green4

    &:hover
      background-color: $green7

  &.darkGreen
    background-color: $green11
    color: $white5

    &:hover
      background-color: $green12

  > *
    position: relative
</style>