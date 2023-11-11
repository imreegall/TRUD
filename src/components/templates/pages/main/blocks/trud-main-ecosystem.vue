<script>
import { defineComponent } from 'vue'

import trudButton from "@/components/UI-kit/button/trud-button.vue";

export default defineComponent({
  name: "trud-main-ecosystem",

  components: {
    trudButton,
  },

  data() {
    return {
      ecosystem: [
        {
          title: "Historical collection".toUpperCase(),
          description: "Bitcoin NFT collection",
          backgroundImage: "historical_collection.png",
          link: "https://historicalcollection.art/",
        },

        {
          title: "Ordinals mint".toUpperCase(),
          description: "Create your Bitcoin NFT",
          backgroundImage: "ordinals_mint.png",
          link: "https://ordinalsmint.tech/",
        },

        {
          title: "Army of ai-promoter".toUpperCase(),
          description: "Hire your own army",
          backgroundImage: "x_bot.png",
          link: "",
        },
      ]
    }
  },
})
</script>

<template>
  <div class="trud-main-ecosystem" id="ecosystem">
    <h1 class="title">TRUD Ecosystem</h1>

    <main>
      <div
          class="block"
          v-for="block in ecosystem"
          :key="`trud-main-ecosystem-block-${ block.backgroundImage }`"
          :style="{
            'background-image': `url(/assets/images/templates/main/ecosystem/${ block.backgroundImage })`
          }"
      >
        <div class="content">
          <div class="information">
            <h1 class="title" v-html="block.title" />

            <h3 class="description" v-html="block.description" />
          </div>

          <div class="buttons-group">
            <trud-button
                class="button"
                title="Link"
                type="green"
                :link="block.link"
            />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped lang="sass">
.trud-main-ecosystem
  display: flex
  flex-direction: column
  padding: 0 20px
  width: 100%

  @media (min-width: $desktopScreenMinWidth)
    gap: 80px
    margin-top: 130px
    max-width: calc(1920px - 315px * 2 + 20px * 2)

  @media (max-width: $mobileScreenMaxWidth)
    gap: 40px
    margin-top: 70px

  > .title
    color: $white4
    line-height: 140%

    @media (min-width: $desktopScreenMinWidth)
      font-size: 36px

    @media (max-width: $mobileScreenMaxWidth)
      font-size: 24px

  main
    display: flex
    width: 100%

    @media (min-width: $desktopScreenMinWidth)
      gap: 30px

    @media (max-width: $mobileScreenMaxWidth)
      flex-direction: column
      gap: 20px

    .block
      display: flex
      align-items: flex-end
      width: 100%
      aspect-ratio: 1
      +background-image-settings()
      +border-radius(20px)
      position: relative

      @media (min-width: $desktopScreenMinWidth)
        padding: 30px

      @media (max-width: $mobileScreenMaxWidth)
        padding: 20px

      &::after
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        display: block
        content: ""
        background: linear-gradient(0deg, #000 27.14%, rgba(4, 29, 20, 0.00) 78.21%)
        z-index: 1

      > *
        z-index: 2

      .content
        display: flex
        flex-direction: column
        gap: 30px
        width: 100%

        .information
          display: flex
          flex-direction: column
          gap: 20px
          color: $white2

          > .title
            @media (min-width: $desktopScreenMinWidth)
              font-size: 24px

            @media (max-width: $mobileScreenMaxWidth)
              font-size: 20px

          > .description
            @media (min-width: $desktopScreenMinWidth)
              font-size: 20px

            @media (max-width: $mobileScreenMaxWidth)
              font-size: 17px

        .buttons-group
          display: flex
          justify-content: flex-start
          width: 100%

          .button
            +border-radius(999px)

            @media (min-width: $desktopScreenMinWidth)
              font-size: 17px
              line-height: 12px
              padding: 12px 24px
              width: 100%
              max-width: 100px

            @media (max-width: $mobileScreenMaxWidth)
              font-size: 15px
              line-height: 11px
              padding: 10px 16px
              width: 100%
              max-width: 100px
</style>