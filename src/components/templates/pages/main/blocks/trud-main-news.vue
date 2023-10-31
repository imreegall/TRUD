<script>
import { defineComponent } from 'vue'

import trudButton from "@/components/UI-kit/button/trud-button.vue";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';

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
          img: "new3.jpg",
          title: "Liquidity Permanently Locked: TRUD Token Now Available on Uniswap!",
          description: "We are thrilled to inform our community that TRUD Token is now available for trading on Uniswap! This is...",
          link: "https://medium.com/@historicalcollectionart/liquidity-permanently-locked-trud-token-now-available-on-uniswap-6318650dd337",
        },

        {
          img: "new2.jpg",
          title: " Acquire the Rarest Ordinals with TRUD Tokens!",
          description: "Have you ever dreamed of owning something unique from the cryptocurrency world? We have...",
          link: "https://medium.com/@historicalcollectionart/acquire-the-rarest-ordinals-with-trud-tokens-457df396b168",
        },

        {
          img: "new1.png",
          title: "Hire an Army of AI Promoters for Your Social Media!",
          description: "Have you ever dreamed of having your own AI promoter working tirelessly to make your brand.....",
          link: "https://medium.com/@historicalcollectionart/hire-an-army-of-ai-promoters-for-your-social-media-c8977d3a7f7b",
        },
      ],

      swiperEl: useSwiper(),
    }
  },

  mounted() {
    setTimeout(this.checkNewsBlocks, 500)

    window.addEventListener('resize', this.checkNewsBlocks)
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.checkNewsBlocks)
  },

  methods: {
    checkNewsBlocks() {
      let wrapperMaxHeight

      wrapperMaxHeight = 240

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

    handleSlideClick(e) {
      const currentElement = e.currentTarget

      const swiperSlider = e.currentTarget.parentElement

      const swiperPlugin = swiperSlider.parentElement

      const slidesArray = Array.from(swiperSlider.querySelectorAll('.swiper-slide'))

      const indexOfCurrentSlide = slidesArray.indexOf(currentElement)

      const activeSlide = swiperSlider.querySelector('.swiper-slide-active')

      const indexOfActiveSlide = slidesArray.indexOf(activeSlide)

      if (indexOfCurrentSlide <= indexOfActiveSlide) {
        swiperPlugin.swiper.slidePrev()

        return
      }

      if (indexOfCurrentSlide > indexOfActiveSlide + 2) {
        swiperPlugin.swiper.slideNext()
      }
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
            :slides-per-view="2"
            class="news-wrapper only-mb"
            :modules="modules"
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

              <trud-button class="button" title="Read" type="transparent" :link="block.link" />
            </div>
          </swiper-slide>

          <swiper-slide />
        </swiper>

        <swiper
            :slides-per-view="4"
            :space-between="20"
            class="news-wrapper only-ds"
            :modules="modules"
        >

          <swiper-slide />

          <swiper-slide
              class="news-block"
              v-for="(block, index) in news"
              :key="`trud-main-news-new-${ index }`"
              @click="handleSlideClick"
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

              <trud-button class="button" title="Read" type="transparent" />
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

  @media (min-width: $desktopScreenMinWidth)
    max-width: calc(1920px - 315px * 2 + 20px)
    margin-top: 140px
    gap: 80px
    padding: 0 20px

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
      overflow: hidden

    .swiper-wrapper
      @media (min-width: $desktopScreenMinWidth)
        width: calc(567px * 4 + 20px * 3)
        position: relative
        left: calc(-567px - 20px)

      @media (max-width: $mobileScreenMaxWidth)
        width: 100%

      .news-wrapper
        @media (min-width: $desktopScreenMinWidth)
          padding-bottom: 50px

        @media (max-width: $mobileScreenMaxWidth)
          min-width: calc(200% - 100px)

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
            cursor: pointer

            &.swiper-slide-next
              +opacity(100)
              cursor: default

              & + *
                +opacity(100)
                cursor: default

          @media (max-width: $mobileScreenMaxWidth)
            gap: 20px
            flex-direction: column
            //max-height: 512px
            max-width: calc(100% /2 - 20px)
            margin-left: 20px

          .image
            +background-image-settings()
            aspect-ratio: 1
            +border-radius(20px)
            pointer-events: none

            @media (min-width: $desktopScreenMinWidth)
              width: 240px

            @media (max-width: $mobileScreenMaxWidth)
              width: 100%

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
              max-height: 240px

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