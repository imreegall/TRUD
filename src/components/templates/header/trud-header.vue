<script>
import { defineComponent } from 'vue'

import trudButton from "@/components/UI-kit/button/trud-button.vue";

export default defineComponent({
  name: "trud-header",

  data() {
    return {
      isScrolled: false,
    }
  },

  components: {
    trudButton,
  },

  mounted() {
    window.addEventListener('scroll', this.changeHeader)

    this.changeHeader()
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.changeHeader)
  },

  methods: {
    changeHeader() {
      if (window.scrollY > 0) {
        if (this.isScrolled) {
          return
        }

        this.$refs.header.classList.add('active')
        this.isScrolled = true
      } else {
        if (!this.isScrolled) {
          return
        }

        this.$refs.header.classList.remove('active')
        this.isScrolled = false
      }
    },
  },
})
</script>

<template>
  <div class="trud-header" ref="header">
    <div class="burger-wrapper only-mb">
      <div class="burger">
        <div class="line"></div>

        <div class="line"></div>
      </div>
    </div>

    <a class="logo-wrapper" href="#main">
      <div class="logo"></div>

      <h1 class="title">TRUD</h1>
    </a>

    <nav class="only-ds">
      <a href="#litepaper"><h4>Litepaper</h4></a>

      <a href="#ecosystem"><h4>Ecosystem</h4></a>

      <a href="#tokenomic"><h4>Tokenomic</h4></a>

      <a href="#roadmap"><h4>Roadmap</h4></a>

      <a href="#community"><h4>Community</h4></a>
    </nav>

    <div class="buttons-group">
      <trud-button class="button" title="Room" type="transparent" />

      <trud-button class="button" title="Connect wallet" type="green" />
    </div>
  </div>
</template>

<style scoped lang="sass">
.trud-header
  display: flex
  width: 100%
  justify-content: space-between
  padding: 0 20px

  @media (min-width: $desktopScreenMinWidth)
    max-width: calc(1920px - 315px * 2 + 20px * 2)
    align-items: center
    position: fixed
    top: 40px
    z-index: 999
    +border-radius(999px)

    &.active
      background-color: $green13
      padding: 8px
      max-width: calc(1920px - 440px * 2 + 20px * 2)
      top: 14px

      .logo-wrapper
        > .title
          display: none

        .logo
          width: 50px !important

      nav
        gap: 20px

      .buttons-group
        column-gap: 15px

  @media (max-width: $mobileScreenMaxWidth)
    align-items: flex-start
    gap: 16px

  .burger-wrapper
    width: 100%

    .burger
      display: flex
      flex-direction: column
      gap: 7px
      width: 40px
      aspect-ratio: 1
      justify-content: center
      align-items: center

      &:hover
        cursor: pointer

        .line
          background-color: $green7

      .line
        height: 5px
        width: 33px
        background-color: $green3
        +border-radius(999px)

  .logo-wrapper
    display: flex
    align-items: center
    gap: 10px
    +user-select(none)
    margin-left: 0

    @media (min-width: $desktopScreenMinWidth)

    @media (max-width: $mobileScreenMaxWidth)
      margin-top: 5px

    .logo
      +background-image-settings()
      background-image: url("/public/assets/images/logos/trud.png")
      aspect-ratio: 1

      @media (min-width: $desktopScreenMinWidth)
        width: 53px

      @media (max-width: $mobileScreenMaxWidth)
        width: 30px

    > .title
      color: $white1

      @media (min-width: $desktopScreenMinWidth)
        font-size: 30px
        line-height: 33px

      @media (max-width: $mobileScreenMaxWidth)
        font-size: 24px
        line-height: 26px

  nav
    display: flex
    align-items: baseline
    gap: 24px
    line-height: 120%
    font-size: 20px
    color: $white2

  .buttons-group
    display: flex

    @media (min-width: $desktopScreenMinWidth)
      gap: 10px 30px
      align-items: center
      flex-wrap: wrap-reverse
      justify-content: flex-end

    @media (max-width: $mobileScreenMaxWidth)
      gap: 5px
      flex-direction: column-reverse
      align-items: flex-end
      margin-top: 7.5px
      width: 100%

    .button
      +border-radius(999px)

      &:first-child
        @media (min-width: $desktopScreenMinWidth)
          font-size: 20px
          line-height: 14px
          padding: 13px 29px 15px

        @media (max-width: $mobileScreenMaxWidth)
          font-size: 12px
          line-height: 9px
          padding: 6px 9px

      &:last-child
        @media (min-width: $desktopScreenMinWidth)
          font-size: 20px
          line-height: 14px
          padding: 14px 30px 16px

        @media (max-width: $mobileScreenMaxWidth)
          font-size: 12px
          line-height: 9px
          padding: 8px 12px
</style>