<script>
import { defineComponent } from 'vue'

import trudCoin from "@/components/UI-kit/coin/trud-coin.vue";

export default defineComponent({
  name: "trud-main-supply",

  components: {
    trudCoin,
  },

  props: {
    address: {
      type: String,
      default() {
        return null
      }
    },

    balance: {
      type: String,
      default() {
        return null
      }
    },
  },

  data() {
    return {
      title: "The TRUD token stands for True Decentralization " +
          "and has been designed to serve " +
          "as a model for a fair internal economy. " +
          "It serves the purposes of voting " +
          "and settlements within our ecosystem, " +
          "and all products and services " +
          "are paid for using this token. " +
          "Any other income received " +
          "goes 100% into the liquidity of the TRUD token. " +
          "Enthusiasts have joined forces to collaborate " +
          "and are ready to create for you, " +
          "with the aim of boosting the demand " +
          "and popularity of this novel economic concept. " +
          "While the token's price remains at low levels, " +
          "it's advisable to accumulate them for future purchases.",

      text: [
          "All 100% tokens has been allocated " +
          "to the Uniswap liquidity pool and all liquidity " +
          "is securely locked within the contract.",

          "No presales or airdrops",

          "There are zero token taxes",
      ],

      tags: [
        {
          title: "dextools".toUpperCase(),
          link: "https://www.dextools.io/app/ether/pair-explorer/0x0f5cc4bb5c21234abd765987e5584fa2b94053b2",
        },

        {
          title: "etherscan".toUpperCase(),
          link: "https://etherscan.io/token/0x2e7729f4E4AA8E68D13830D372F975046d4a498F",
        },

        {
          title: "etherscan".toUpperCase(),
          link: "https://etherscan.io/token/0x2e7729f4E4AA8E68D13830D372F975046d4a498F",
        },

        {
          title: "COINGECKO",
          link: "",
        },
      ],

      code: "0x2e7729f4E4AA8E68D13830D372F975046d4a498F",

      isCopied: false,

      testAddresses: [
        '0xF859222A98Da1cCFF5Bb4373404d4C7cac66256d',
        '0x6DE4C1Eb559EDf6A18FDAdf9d756585C1dF3074b',
      ],
    }
  },

  methods: {
    handleCopyButton() {
      if (this.isCopied) {
        return
      }

      navigator.clipboard.writeText(this.code).then(() => {
        const button = this.$refs.copyButton

        button.classList.toggle("active")

        setTimeout(() => {
          button.classList.toggle("active")

          this.isCopied = false
        }, 2000)
      })

      this.isCopied = true
    },

    handleTagClick(link) {
      if (link === "") {
        return
      }

      window.open(link, "_blank")
    },
  },

  computed: {
    isAddressOfTester() {
      if (!this.address) {
        return false
      }

      return this.testAddresses.includes(this.address)
    },
  },
})
</script>

<template>
  <div class="trud-main-supply" id="tokenomic">
    <div class="coin-wrapper">
      <div class="round"></div>

      <trud-coin
          :color="0xFFFFFF"
          :mouseFollow="false"
          :controls="false"
          :speed="500"
      />
    </div>

    <h1 class="title" v-html="title"></h1>

    <main>
      <div class="about">
        <div class="supply">
          <h2 class="title">Total Supply:</h2>

          <h1 class="value">1.000.000.000</h1>
        </div>

        <div class="text">
          <template
              v-for="(paragraph, index) in text"
              :key="`trud-main-supply-paragraph-${ index }`"
          >
            <br v-if="index">

            <h3 v-html="paragraph"></h3>
          </template>
        </div>
      </div>

      <div class="tags">
        <h4
            class="tag"
            v-for="(tag, index) in tags"
            :key="`trud-main-supply-tags-tag-${ index }`"
            v-html="tag.title"
            @click="handleTagClick(tag.link)"
        />
      </div>

      <div class="copy" @click="handleCopyButton">
        <div class="button" ref="copyButton">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M16.6091 1.34961H6.06281C5.52209 1.35093 5.00399 1.56675 4.62222 1.94968C4.24046 2.33262 4.02623 2.85138 4.02656 3.39211V4.02398H3.38781C2.84682 4.02547 2.32852 4.2416 1.94674 4.62491C1.56496 5.00821 1.3509 5.52736 1.35156 6.06836V16.6077C1.35123 17.1485 1.56546 17.6672 1.94722 18.0502C2.32899 18.4331 2.84709 18.6489 3.38781 18.6502H13.9341C14.4756 18.6497 14.9948 18.4344 15.3778 18.0515C15.7607 17.6685 15.9761 17.1493 15.9766 16.6077V15.9759H16.6091C17.1507 15.9752 17.6699 15.7597 18.0528 15.3767C18.4357 14.9936 18.6511 14.4743 18.6516 13.9327V3.39211C18.6509 2.85061 18.4355 2.33147 18.0526 1.94857C17.6697 1.56567 17.1506 1.35027 16.6091 1.34961ZM14.7266 16.6071C14.7266 17.0446 14.3709 17.3996 13.9341 17.3996H3.38719C3.17799 17.3985 2.9778 17.3144 2.83052 17.1658C2.68324 17.0172 2.6009 16.8163 2.60156 16.6071V6.06711C2.60156 5.62961 2.95406 5.27398 3.38719 5.27398H13.9341C14.3716 5.27398 14.7266 5.63023 14.7266 6.06711V15.3496V16.6071ZM17.4016 13.9321C17.4016 14.3696 17.0459 14.7252 16.6091 14.7252H15.9766V6.06711C15.9761 5.5255 15.7607 5.00621 15.3778 4.62317C14.9949 4.24014 14.4757 4.02465 13.9341 4.02398H5.27656V3.39211C5.27656 2.95461 5.62906 2.59961 6.06281 2.59961H16.6091C17.0466 2.59961 17.4016 2.95461 17.4016 3.39211V13.9321Z" fill="#919D98"/>
          </svg>
        </div>

        <h5 class="copied">Copied!</h5>

        <h4 class="value">{{ code }}</h4>
      </div>
    </main>
  </div>
</template>

<style scoped lang="sass">
@keyframes showCopy
  0%
    +opacity(0)
  10%
    +opacity(100)
  90%
    +opacity(100)
  100%
    +opacity(0)

.trud-main-supply
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  +background-image-settings()
  +border-radius(40px)
  background-image: url("/public/assets/images/templates/main/supply/background.png")
  position: relative

  @media (min-width: $desktopScreenMinWidth)
    gap: 60px
    margin: 280px 20px 130px
    max-width: calc(1920px - 315px * 2 + 20px * 2)
    padding: 210px 60px 105px

  @media (max-width: $mobileScreenMaxWidth)
    gap: 30px
    margin: 110px 0 60px
    padding: 100px 20px 60px

  .coin-wrapper
    position: absolute
    aspect-ratio: 1
    display: flex
    justify-content: center
    align-items: center

    @media (min-width: $desktopScreenMinWidth)
      width: 280px
      top: -140px

    @media (max-width: $mobileScreenMaxWidth)
      width: 120px
      top: -60px

    > .round
      aspect-ratio: 1
      background-color: $black
      position: absolute
      +border-radius(50%)
      z-index: -10

      @media (min-width: $desktopScreenMinWidth)
        width: calc(100% - 10px)

      @media (max-width: $mobileScreenMaxWidth)
        width: calc(100% - 2px)

  > .title
    color: $green4
    line-height: 140%

    @media (min-width: $desktopScreenMinWidth)
      font-size: 24px
      text-align: center

    @media (max-width: $mobileScreenMaxWidth)
      font-size: 20px
      text-align: left

  main
    display: flex
    flex-direction: column
    width: 100%
    align-items: center

    @media (min-width: $desktopScreenMinWidth)
      gap: 40px

    @media (max-width: $mobileScreenMaxWidth)
      gap: 30px

    .about
      display: flex
      align-items: center
      width: 100%

      @media (min-width: $desktopScreenMinWidth)
        gap: 40px

      @media (max-width: $mobileScreenMaxWidth)
        gap: 30px
        flex-direction: column

      .supply
        display: flex
        flex-direction: column
        align-items: center
        +background-image-settings()
        background-image: url("/public/assets/images/templates/main/supply/supply.png")
        +border-radius(20px)
        width: 100%

        @media (min-width: $desktopScreenMinWidth)
          gap: 30px
          padding: 40px
          max-width: 455px

        @media (max-width: $mobileScreenMaxWidth)
          gap: 20px
          padding: 30px

        > .title
          color: $white2
          font-size: 24px
          line-height: 17px

        .value
          color: $white2
          font-size: 36px
          line-height: 26px

      .text
        width: 100%
        flex: 1
        color: $green4
        line-height: 1

        @media (min-width: $desktopScreenMinWidth)
          font-size: 20px

        @media (max-width: $mobileScreenMaxWidth)
          font-size: 17px

    .tags
      display: flex
      gap: 20px
      align-items: center
      justify-content: center

      @media (min-width: $desktopScreenMinWidth)

      @media (max-width: $mobileScreenMaxWidth)
        flex-wrap: wrap
        width: 100%

      .tag
        color: $green4
        font-size: 15px
        line-height: 12px
        background-color: $wood
        +border-radius(999px)
        text-align: center
        cursor: pointer

        @media (min-width: $desktopScreenMinWidth)
          padding: 12px 24px

        @media (max-width: $mobileScreenMaxWidth)
          padding: 12px 16px
          max-width: calc((100% - 20px) / 2)
          width: 100%
          text-overflow: ellipsis
          white-space: nowrap
          overflow: hidden

    .copy
      display: flex
      gap: 10px
      align-items: center
      justify-content: center
      padding: 14px 30px
      background-color: $brown
      +opacity(80)
      +border-radius(999px)
      +user-select(none)
      position: relative

      &:hover
        cursor: pointer

      .button
        position: relative

        + .copied
          display: none
          color: $white2
          background-color: $brown
          padding: 10px 15px
          position: absolute
          bottom: -50px
          z-index: 999
          +border-radius(999px)
          animation: showCopy 2s linear
          transition: all
          +opacity(0)

          &:hover
            cursor: default

        &.active
          + .copied
            display: block

      .value
        color: $white2
        line-height: 120%
        word-break: break-all
        text-align: center
        flex: 1
        +user-select(text)

        @media (min-width: $desktopScreenMinWidth)
          font-size: 20px

        @media (max-width: $mobileScreenMaxWidth)
          font-size: 17px
</style>