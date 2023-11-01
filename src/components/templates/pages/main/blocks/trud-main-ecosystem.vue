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
        },

        {
          title: "Ordinals mint".toUpperCase(),
          description: "Create your Bitcoin NFT",
          backgroundImage: "ordinals_mint.png",
        },

        {
          title: "Army of ai-promoter".toUpperCase(),
          description: "Hire your own army",
          backgroundImage: "x_bot.png",
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
            <trud-button class="button" title="INFORMATION" type="transparent" />

            <trud-button class="button" title="GO TO SITE" type="green" :link="block.link" />
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

      @media (min-width: $desktopScreenMinWidth)
        padding: 30px

      @media (max-width: $mobileScreenMaxWidth)
        padding: 20px

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

          @media (min-width: $desktopScreenMinWidth)
            gap: 20px
            flex-wrap: wrap

          @media (max-width: $mobileScreenMaxWidth)
            gap: 12px

          .button
            +border-radius(999px)

            &:first-child
              @media (min-width: $desktopScreenMinWidth)
                font-size: 17px
                line-height: 12px
                padding: 12px 24px
                width: 100%
                max-width: 161px

              @media (max-width: $mobileScreenMaxWidth)
                font-size: 15px
                line-height: 11px
                padding: 10px 16px
                width: 100%
                max-width: 132px

            &:last-child
              @media (min-width: $desktopScreenMinWidth)
                font-size: 17px
                line-height: 12px
                padding: 12px 24px
                width: 100%
                max-width: 139px

              @media (max-width: $mobileScreenMaxWidth)
                font-size: 15px
                line-height: 11px
                padding: 10px 16px
                width: 100%
                max-width: 112px
</style>