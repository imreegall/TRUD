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
    if (window.scrollY > 0) {
      if (this.isScrolled) {
        return
      }

      this.isScrolled = true
    } else {
      if (!this.isScrolled) {
        return
      }

      this.isScrolled = false
    }

    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        if (this.isScrolled) {
          return
        }

        this.isScrolled = true
      } else {
        if (!this.isScrolled) {
          return
        }

        this.isScrolled = false
      }
    })
  },

  watch: {
    isScrolled() {
      this.$refs.header.classList.toggle('active')
    }
  }
})
</script>

<template>
  <div class="trud-header" ref="header">
    <div class="burger only-mb">
      <div class="line"></div>

      <div class="line"></div>
    </div>

    <div class="logo-wrapper">
      <div class="logo"></div>

      <h1 class="title">TRUD</h1>
    </div>

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
    gap: 50px
    position: fixed
    top: 40px
    z-index: 999
    +border-radius(999px)

    &.active
      background-color: $green13
      padding: 16px 40px
      max-width: calc(1920px - 335px * 2 + 20px * 2)

      .logo-wrapper

        > .title
          display: none

        .logo
          width: 50px !important

  @media (max-width: $mobileScreenMaxWidth)
    align-items: flex-start

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
        width: 73px

      @media (max-width: $mobileScreenMaxWidth)
        width: 30px

    > .title
      color: $white1

      @media (min-width: $desktopScreenMinWidth)
        font-size: 50px
        line-height: 55px

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

    .button
      +border-radius(999px)

      &:first-child
        @media (min-width: $desktopScreenMinWidth)
          font-size: 20px
          line-height: 14px
          padding: 13px 30px 15px

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