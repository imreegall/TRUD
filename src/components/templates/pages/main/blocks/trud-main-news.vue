<script>
import { defineComponent } from 'vue'

import trudButton from "@/components/UI-kit/button/trud-button.vue";

export default defineComponent({
  name: "trud-main-news",

  components: {
    trudButton,
  },

  data() {
    return {
      news: [
        {
          img: "new1.png",
          title: "Record-Breaking NFT Art Sale: Digital Masterpiece Fetches $10 Million!",
          description: "An astonishing NFT artwork has shattered records, " +
              "selling for an astounding $10 million! Learn how this milestone " +
              "was achieved and the lessons it holds for the NFT space",
        },

        {
          img: "new1.png",
          title: "Record-Breaking NFT Art Sale: Digital Masterpiece Fetches $10 Million!",
          description: "An astonishing NFT artwork has shattered records, " +
              "selling for an astounding $10 million! Learn how this milestone " +
              "was achieved and the lessons it holds for the NFT space",
        },

        {
          img: "new1.png",
          title: "Record-Breaking",
          description: "An astonishing NFT artwork has shattered records, " +
              "selling for an astounding $10 million! Learn how this milestone " +
              "was achieved and the lessons it holds for the NFT space",
        },
      ],
    }
  },

  mounted() {
    this.checkNewsBlocks()

    window.addEventListener('resize', this.checkNewsBlocks)
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.checkNewsBlocks)
  },

  methods: {
    checkNewsBlocks() {
      let wrapperMaxHeight

      if (document.body.scrollWidth < 1280) {
        wrapperMaxHeight = 212
      } else {
        wrapperMaxHeight = 240
      }

      const news = document.getElementsByClassName("news-block")

      Array.from(news).forEach(newsBlock => {
        const title = newsBlock.querySelector(".title")
        const description = newsBlock.querySelector(".description")

        const buttonHeight = 36
        const gap = 20

        const freeHeight = wrapperMaxHeight - buttonHeight - gap * 2 - title.clientHeight
        const lineHeight = parseFloat(window.getComputedStyle(description, null).getPropertyValue('line-height'))

        description.style.webkitLineClamp = Math.floor(freeHeight / lineHeight)
      })
    },
  },
})
</script>

<template>
  <div class="trud-main-news">
    <h1 class="title">News</h1>

    <main>
      <div class="news-wrapper">
        <div
            class="news-block"
            v-for="(block, index) in news"
            :key="`trud-main-news-new-${ index }`"
        >
          <div
              class="image"
              :style="{
                'background-image': `url(/assets/images/templates/main/news/${ block.img })`,
              }"
          ></div>

          <div class="about">
            <h1 class="title" v-html="block.title" />

            <h3 class="description news-description" v-html="block.description" />

            <trud-button class="button" title="Marketing" type="transparent" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped lang="sass">
.trud-main-news
  display: flex
  flex-direction: column
  width: 100%
  padding: 0 20px

  @media (min-width: $desktopScreenMinWidth)
    max-width: calc(1920px - 315px * 2 + 20px)
    margin-top: 140px
    gap: 80px

  @media (max-width: $mobileScreenMaxWidth)
    margin-top: 70px
    gap: 40px

  > .title
    color: $white4

    @media (min-width: $desktopScreenMinWidth)
      font-size: 36px
      line-height: 26px

    @media (max-width: $mobileScreenMaxWidth)
      font-size: 24px
      line-height: 17px

  main
    display: flex

    .news-wrapper
      display: flex
      gap: 20px

      .news-block
        display: flex
        padding: 20px
        +border-radius(40px)
        background-color: $green6

        @media (min-width: $desktopScreenMinWidth)
          gap: 30px
          width: 567px
          align-items: flex-start
          max-height: 280px

        @media (max-width: $mobileScreenMaxWidth)
          gap: 20px
          flex-direction: column
          max-height: 512px
          width: 280px

        .image
          +background-image-settings()
          width: 240px
          aspect-ratio: 1
          +border-radius(20px)
          pointer-events: none

        .about
          display: flex
          flex-direction: column
          align-items: flex-start
          justify-content: space-between
          height: 100%
          flex: 1

          @media (min-width: $desktopScreenMinWidth)

          @media (max-width: $mobileScreenMaxWidth)
            gap: 20px

          > .title
            line-height: 140%
            font-size: 20px
            color: $white2

          .description
            line-height: 140%
            font-size: 17px
            color: $green14
            display: -webkit-box
            //-webkit-line-clamp: 3
            -webkit-box-orient: vertical
            overflow: hidden

          .button
            padding: 11px 23px
            +border-radius(999px)

            @media (min-width: $desktopScreenMinWidth)
              font-size: 17px
              line-height: 12px

            @media (max-width: $mobileScreenMaxWidth)
              font-size: 15px
              line-height: 11px
</style>