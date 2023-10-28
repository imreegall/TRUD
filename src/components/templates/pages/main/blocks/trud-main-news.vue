<script>
import { defineComponent } from 'vue'

import trudButton from "@/components/UI-kit/button/trud-button.vue";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

import 'swiper/css/effect-cards';

// import required modules
// import { Pagination } from 'swiper/modules';

// import required modules
import { EffectCards } from 'swiper/modules';

export default defineComponent({
  name: "trud-main-news",

  components: {
    trudButton,

    Swiper,
    SwiperSlide,
  },

  setup() {
    return {
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return '<div class="' + className + ' pagination-round"></div>';
        },
      },
      // modules: [Pagination, EffectCards],
      modules: [EffectCards],
    };
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
      <div class="swiper-wrapper">
        <swiper
            effect="cards"
            :grabCursor="true"
            :modules="modules"
            class="news-wrapper only-mb"
        >
          <swiper-slide
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
          </swiper-slide>
        </swiper>

        <swiper
            :slides-per-view="4"
            :space-between="20"
            class="news-wrapper only-ds"
            :pagination="pagination"
            :modules="modules"
        >

          <swiper-slide />

          <swiper-slide
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
          </swiper-slide>

          <swiper-slide />
        </swiper>
      </div>
    </main>
  </div>
</template>

<style lang="sass">
.swiper-pagination
  display: flex
  align-items: center
  justify-content: center
  gap: 20px

  .swiper-pagination-bullet
    background-color: $green4
    width: 16px
    height: 16px
    +opacity(100)

    &-active
      background-color: $green3
      width: 20px
      height: 20px
</style>

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
      text-align: center

  main
    display: flex

    @media (min-width: $desktopScreenMinWidth)

    @media (max-width: $mobileScreenMaxWidth)
      width: 100%
      justify-content: center

    .swiper-wrapper
      @media (min-width: $desktopScreenMinWidth)
        width: calc(567px * 4 + 20px * 3)
        position: relative
        left: calc(-567px - 20px)

      @media (max-width: $mobileScreenMaxWidth)
        width: 100%
        max-width: 280px

      .news-wrapper
        @media (min-width: $desktopScreenMinWidth)
          padding-bottom: 50px

        @media (max-width: $mobileScreenMaxWidth)
          width: 100%

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
            +opacity(50)

            &.swiper-slide-next
              +opacity(100)

              & + *
                +opacity(100)

          @media (max-width: $mobileScreenMaxWidth)
            gap: 20px
            flex-direction: column
            max-height: 512px
            width: 280px
            border: 1px solid $white7

            &.swiper-slide-prev
              border-color: $white6

            &.swiper-slide-next
              border-color: $white6

            &.swiper-slide-active
              border-color: $white4

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