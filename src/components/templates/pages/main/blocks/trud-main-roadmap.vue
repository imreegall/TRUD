<script>
import { defineComponent } from 'vue'

import trudButton from "@/components/UI-kit/button/trud-button.vue";

export default defineComponent({
  name: "trud-main-roadmap",

  components: {
    trudButton,
  },

  data() {
    return {
      seasons: {
        I: {
          title: "Season I \"Knot\"",
          text: [
            "To become part of our family, you must hold 1 TRUD in your wallet. " +
            "This grants you access to the professor's chamber, " +
            "where you can gain insights into the future of the world economy, " +
            "helping you understand unfolding events and guard against potential errors.",

            "We've enabled Uniswap for your convenience. " +
            "Exchange 1 TRUD, link your wallet to the website, " +
            "and new opportunities will unfold in front of you.",
          ],
        },

        II: {
          title: "Season 2 of \"Legends\" opens when the capitalization of TRUD reaches $ 1,000,000!",
          text: [
              "It features a historical collection of legendary figures, " +
              "comprised of 1,000 unique NFT artworks on the Bitcoin blockchain. " +
              "This is one of the first collections created on Bitcoin and features genuine crypto artifacts. " +
              "Each Historical NFT is valued at 199000 TRUD, " +
              "and this launch coincides with the formation of the collectors' club of the same name.",
          ],
        },

        III: {
          title: "Season 3 of \"Book & DAO\" opens with a capitalization of $10.000.000 TRUD!",
          text: [
              "This marks the launch of new services, products, and DAO, " +
              "along with the inauguration of the TRUD millionaires club. " +
              "The professor will also publish a book.",
          ],
        },

        IV: {
          title: "Season 4 \"Put in\" opens when TRUD capitalization is $100,000,000",
          text: [
              "This chapter entails an extensive promotion of the TRUD ecosystem.",
          ],
        },

        V: {
          title: "Season 5<br>\"New Economic concept\"",
          text: [
              "When the TRUD token reaches a value of $1, the experiment begins...",
          ],
        },
      }
    }
  }
})
</script>

<template>
  <div class="trud-main-roadmap" id="roadmap">
    <div class="current-season">
      <div class="npc"></div>

      <main>
        <div class="content">
          <div class="title">
            <h1 class="text">Season</h1>

            <svg class="only-ds" xmlns="http://www.w3.org/2000/svg" width="16" height="40" viewBox="0 0 16 40" fill="none">
              <path d="M15 33.5924H11.1776V6.40762H15V0H1V6.40762H4.82217V33.5924H1V40H15V33.5924Z" fill="#E7EEF3"/>
            </svg>

            <svg class="only-mb" xmlns="http://www.w3.org/2000/svg" width="16" height="31" viewBox="0 0 16 31" fill="none">
              <g clip-path="url(#clip0_822_4011)">
                <path d="M13.5 25.9638H10.6332V5.57525H13.5V0.769531H3V5.57525H5.86663V25.9638H3V30.7695H13.5V25.9638Z" fill="#E7EEF3"/>
              </g>
              <defs>
                <clipPath id="clip0_822_4011">
                  <rect width="16" height="30" fill="white" transform="translate(0 0.769531)"/>
                </clipPath>
              </defs>
            </svg>

            <h1 class="text">“Knot”</h1>
          </div>

          <span class="text">
            <template
                v-for="(paragraph, index) in seasons.I.text"
                :key="`trud-main-roadmap-season-I-ds-paragraph-${ index }`"
            >
              <br v-if="index">

              <h2 v-html="paragraph"></h2>
            </template>
          </span>
        </div>

        <div class="buttons-group">
          <trud-button class="button" title="BUY TRUD" type="green" link="https://app.uniswap.org/swap?theme=dark&exactField=input&exactAmount=1&inputCurrency=eth&outputCurrency=0x2e7729f4E4AA8E68D13830D372F975046d4a498F" />

          <trud-button class="button" title="GO TO ROOM" type="transparent" />
        </div>
      </main>
    </div>

    <div class="roadmap-ds only-ds">
      <div class="top-level">
        <div class="line"></div>

        <div class="season-2">
          <h2 class="title" v-html="seasons.II.title"></h2>

          <span class="text">
            <template
                v-for="(paragraph, index) in seasons.II.text"
                :key="`trud-main-roadmap-season-II-ds-paragraph-${ index }`"
            >
              <br v-if="index">

              <h3 v-html="paragraph"></h3>
            </template>
          </span>
        </div>

        <div class="season-4">
          <h2 class="title" v-html="seasons.IV.title"></h2>

          <span class="text">
            <template
                v-for="(paragraph, index) in seasons.IV.text"
                :key="`trud-main-roadmap-season-IV-ds-paragraph-${ index }`"
            >
              <br v-if="index">

              <h2 v-html="paragraph"></h2>
            </template>
          </span>
        </div>
      </div>

      <div class="middle-level">
        <div class="round active">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M24 30.2331H20.7237V5.76686H24V0H12V5.76686H15.2761V30.2331H12V36H24V30.2331Z" fill="#06322A"/>
          </svg>
        </div>

        <div class="round">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M30 30.2331H26.5657V5.76686H30V0H6V5.76686H9.43426V30.2331H6V36H30V30.2331ZM20.8553 30.2331H15.1449V5.76686H20.8553V30.2331Z" fill="#034B32"/>
          </svg>
        </div>

        <div class="round">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
            <g clip-path="url(#clip0_822_5019)">
              <path d="M36 5.76686V0H0V5.76686H3.4904V30.2331H0V36H36V30.2331H32.5096V5.76686H36ZM15.0982 30.2331H9.2944V5.76686H15.0982V30.2331ZM26.7058 30.2331H20.902V5.76686H26.7058V30.2331Z" fill="#034B32"/>
            </g>
            <defs>
              <clipPath id="clip0_822_5019">
                <rect width="36" height="36" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>

        <div class="round">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M2.45312 5.76686H4.72454V30.2331H2.45312V36H33.544V30.2331H24.9464L31.253 5.76686H33.544V0H2.45312V5.76686ZM25.4023 5.76686L20.8166 23.5568L16.2508 5.76705H25.4023V5.76686ZM10.3833 5.76686H10.4017L16.681 30.2331H10.3833V5.76686Z" fill="#034B32"/>
          </svg>
        </div>

        <div class="round">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M12 0H3L12 36H24.375L33.375 0H24.375L18.75 27L12 0Z" fill="#034B32"/>
          </svg>
        </div>

        <div class="progress">
          <div class="logo"></div>
        </div>
      </div>

      <div class="bottom-level">
        <div class="season-3">
          <h2 class="title" v-html="seasons.III.title"></h2>

          <span class="text">
            <template
                v-for="(paragraph, index) in seasons.III.text"
                :key="`trud-main-roadmap-season-III-ds-paragraph-${ index }`"
            >
              <br v-if="index">

              <h3 v-html="paragraph"></h3>
            </template>
          </span>
        </div>

        <div class="season-5">
          <h2 class="title" v-html="seasons.V.title"></h2>

          <span class="text">
            <template
                v-for="(paragraph, index) in seasons.V.text"
                :key="`trud-main-roadmap-season-V-ds-paragraph-${ index }`"
            >
              <br v-if="index">

              <h2 v-html="paragraph"></h2>
            </template>
          </span>
        </div>
      </div>
    </div>

    <div class="roadmap-mb only-mb">
      <div class="season-2">
        <div class="lines">
          <div class="current-season">
            <div class="free44"></div>

            <div class="round">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M16 20.1554H13.8158V3.84457H16V0H8V3.84457H10.1841V20.1554H8V24H16V20.1554Z" fill="#06322A"/>
              </svg>
            </div>

            <div class="free68"></div>

            <div class="logo"></div>

            <div class="free93"></div>

            <div></div>
          </div>

          <div class="round">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M20 20.1554H17.7105V3.84457H20V0H4V3.84457H6.2895V20.1554H4V24H20V20.1554ZM13.9035 20.1554H10.0966V3.84457H13.9035V20.1554Z" fill="#034B32"/>
            </svg>
          </div>

          <div class="free">

          </div>
        </div>

        <div class="block">
          <h2 class="title" v-html="seasons.II.title"></h2>

          <span class="text">
            <template
                v-for="(paragraph, index) in seasons.II.text"
                :key="`trud-main-roadmap-season-II-mb-paragraph-${ index }`"
            >
              <br v-if="index">

              <h3 v-html="paragraph"></h3>
            </template>
          </span>
        </div>
      </div>

      <div class="season-3">
        <div class="lines">
          <div class="round">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g clip-path="url(#clip0_822_3987)">
                <path d="M24 3.84457V0H0V3.84457H2.32694V20.1554H0V24H24V20.1554H21.6731V3.84457H24ZM10.0655 20.1554H6.19627V3.84457H10.0655V20.1554ZM17.8039 20.1554H13.9347V3.84457H17.8039V20.1554Z" fill="#034B32"/>
              </g>
              <defs>
                <clipPath id="clip0_822_3987">
                  <rect width="24" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        <div class="block">
          <h2 class="title" v-html="seasons.III.title"></h2>

          <span class="text">
            <template
                v-for="(paragraph, index) in seasons.III.text"
                :key="`trud-main-roadmap-season-III-ds-paragraph-${ index }`"
            >
              <br v-if="index">

              <h3 v-html="paragraph"></h3>
            </template>
          </span>
        </div>
      </div>

      <div class="season-4">
        <div class="lines">
          <div class="round">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M1.63672 3.84457H3.15099V20.1554H1.63672V24H22.364V20.1554H16.6322L20.8366 3.84457H22.364V0H1.63672V3.84457ZM16.9361 3.84457L13.8791 15.7046L10.8352 3.8447H16.9361V3.84457ZM6.92347 3.84457H6.9358L11.122 20.1554H6.92347V3.84457Z" fill="#034B32"/>
            </svg>
          </div>
        </div>

        <div class="block">
          <h2 class="title" v-html="seasons.IV.title"></h2>

          <span class="text">
            <template
                v-for="(paragraph, index) in seasons.IV.text"
                :key="`trud-main-roadmap-season-IV-ds-paragraph-${ index }`"
            >
              <br v-if="index">

              <h2 v-html="paragraph"></h2>
            </template>
          </span>
        </div>
      </div>

      <div class="season-5">
        <div class="lines">
          <div class="round">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M8 0H2L8 24H16.25L22.25 0H16.25L12.5 18L8 0Z" fill="#034B32"/>
            </svg>
          </div>
        </div>

        <div class="block">
          <h2 class="title" v-html="seasons.V.title"></h2>

          <span class="text">
            <template
                v-for="(paragraph, index) in seasons.V.text"
                :key="`trud-main-roadmap-season-V-ds-paragraph-${ index }`"
            >
              <br v-if="index">

              <h2 v-html="paragraph"></h2>
            </template>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.trud-main-roadmap
  width: 100%
  display: flex
  flex-direction: column
  align-items: center

  @media (min-width: $desktopScreenMinWidth)
    padding: 0 20px
    max-width: calc(1920px - 110px * 2 + 20px * 2)

  @media (max-width: $mobileScreenMaxWidth)

  .current-season
    display: flex
    z-index: 10

    @media (min-width: $desktopScreenMinWidth)
      gap: 114px
      align-items: flex-end
      padding: 82px 209px 0 133px
      +background-image-settings()
      background-image: url("/public/assets/images/templates/main/roadmap/theme-ds.png")
      +border-radius(20px)

    @media (max-width: $mobileScreenMaxWidth)
      flex-direction: column

    .npc
      aspect-ratio: calc(507 / 624)
      +background-image-settings()
      background-image: url("/public/assets/images/templates/main/roadmap/npc.png")
      pointer-events: none

      @media (min-width: $desktopScreenMinWidth)
        width: calc(100% * 507 / calc(507 + 114 + 736))

      @media (max-width: $mobileScreenMaxWidth)
        width: 100%

    main
      display: flex
      flex-direction: column
      width: 100%

      @media (min-width: $desktopScreenMinWidth)
        gap: 40px
        padding-bottom: 72px
        flex: 1

      @media (max-width: $mobileScreenMaxWidth)
        gap: 30px
        +background-image-settings()
        background-image: url("/public/assets/images/templates/main/roadmap/theme-mb.png")
        padding: 30px 20px
        +border-radius(20px)

      .content
        display: flex
        flex-direction: column

        @media (min-width: $desktopScreenMinWidth)
          gap: 70px

        @media (max-width: $mobileScreenMaxWidth)
          gap: 30px

        > .title
          display: flex
          align-items: baseline
          width: 100%

          @media (min-width: $desktopScreenMinWidth)
            gap: 24px

          @media (max-width: $mobileScreenMaxWidth)
            gap: 10px
            justify-content: center

          > .text
            color: $white2

            @media (min-width: $desktopScreenMinWidth)
              font-size: 55px
              line-height: 39px

            @media (max-width: $mobileScreenMaxWidth)
              font-size: 24px
              line-height: 17px

        > .text
          line-height: 140%
          color: $white2

          @media (min-width: $desktopScreenMinWidth)
            font-size: 24px

          @media (max-width: $mobileScreenMaxWidth)
            font-weight: 400
            font-size: 17px

      .buttons-group
        display: flex

        @media (min-width: $desktopScreenMinWidth)
          gap: 40px

        @media (max-width: $mobileScreenMaxWidth)
          gap: 20px
          flex-direction: column

        .button
          width: 100%
          +border-radius(999px)
          font-size: 20px
          line-height: 14px

          @media (min-width: $desktopScreenMinWidth)
            max-width: 320px

          @media (max-width: $mobileScreenMaxWidth)

          &:first-child
            padding: 19px 49px

          &:last-child
            padding: 20px 50px

  .roadmap-ds
    width: 100%
    max-width: calc(1920px - 315px * 2)
    margin: 0 20px

    .top-level
      width: 100%
      display: flex

      > .line
        width: 6px
        background-color: $green3
        margin: 0 27px

      .season-2
        background-color: $green6
        border: 1px solid $green3
        +border-radius(20px)
        padding: 39px
        display: flex
        flex-direction: column
        gap: 30px
        width: 100%
        max-width: 646px
        margin-right: 61px
        margin-left: 63px
        margin-top: 92px
        flex: 1

        > .title
          line-height: 120%
          font-size: 20px
          color: $white2

        > .text
          color: $green14
          font-size: 17px
          line-height: 140%

      .season-4
        display: flex
        flex-direction: column
        gap: 20px
        background-color: $green6
        border: 1px solid $green3
        +border-radius(20px)
        width: 100%
        max-width: 386px
        padding: 23px
        align-self: flex-end
        flex: 1

        > .title
          line-height: 120%
          font-size: 20px
          color: $white2

        > .text
          color: $green14
          font-size: 17px
          line-height: 140%

    .middle-level
      display: flex
      padding-top: 61px
      padding-bottom: 65px
      justify-content: space-between
      align-items: center
      position: relative

      &:before
        content: ""
        display: block
        position: absolute
        left: 5px
        width: 100vw
        height: 6px
        background-color: $green6

      .progress
        position: absolute
        left: 141px
        display: flex
        justify-content: center
        align-items: center

        &:after
          content: ""
          display: block
          height: 6px
          width: 90px
          background-color: $green3
          position: absolute
          left: -85px
          z-index: 5

        .logo
          width: 70px
          aspect-ratio: 1
          +background-image-settings()
          background-image: url("/public/assets/images/logos/trud.png")
          z-index: 10

      .round
        width: 60px
        aspect-ratio: 1
        +border-radius(50%)
        position: relative
        display: flex
        justify-content: center
        align-items: center
        background-color: $green6

        &.active
          background-color: $green3

        &:nth-of-type(1)
          &:after
            display: block
            content: ""
            width: 6px
            height: 65px
            top: -61px
            background-color: $green3
            position: absolute

        &:nth-of-type(2)
          &:after
            display: block
            content: ""
            width: 6px
            height: 65px
            top: -61px
            background-color: $green6
            position: absolute

        &:nth-of-type(3)
          &:after
            display: block
            content: ""
            width: 6px
            height: 65px
            bottom: -65px
            background-color: $green6
            position: absolute

        &:nth-of-type(4)
          &:after
            display: block
            content: ""
            width: 6px
            height: 65px
            top: -61px
            background-color: $green6
            position: absolute

        &:nth-of-type(5)
          &:after
            display: block
            content: ""
            width: 6px
            height: 65px
            bottom: -65px
            background-color: $green6
            position: absolute

    .bottom-level
      display: flex
      justify-content: flex-end
      align-items: flex-start

      .season-3
        display: flex
        flex-direction: column
        gap: 30px
        padding: 39px
        background-color: $green6
        border: 1px solid $green3
        +border-radius(20px)
        width: 100%
        max-width: 646px
        margin-right: 61px

        > .title
          line-height: 120%
          font-size: 20px
          color: $white2

        > .text
          color: $green14
          font-size: 17px
          line-height: 140%

      .season-5
        display: flex
        flex-direction: column
        gap: 30px
        padding: 23px
        background-color: $green6
        border: 1px solid $green3
        +border-radius(20px)
        width: 100%
        max-width: 310px

        > .title
          line-height: 120%
          font-size: 20px
          color: $white2

        > .text
          color: $green14
          font-size: 17px
          line-height: 140%

  .roadmap-mb
    display: flex
    flex-direction: column
    padding: 0 20px
    margin-top: 31px
    margin-bottom: 60px
    z-index: 5
    gap: 20px
    position: relative

    &:after
      content: ""
      display: block
      width: 6px
      height: calc(100% + 101px)
      background-color: $green6
      left: 37px
      top: -5px
      position: absolute
      z-index: -5

    .season-2
      display: flex
      gap: 26px

      .lines
        width: 40px
        display: flex
        align-items: center
        justify-content: center
        position: relative
        flex-direction: column

        .current-season
          display: flex
          height: 100%
          flex: 1
          flex-direction: column
          align-items: center

          .free44
            height: 44px
            width: 100%
            flex: calc(44 / calc(93 + 68 + 44))
            min-height: 10px
            position: relative
            display: flex
            justify-content: center
            align-items: center

            &:after
              content: ""
              display: block
              width: 6px
              height: calc(150% + 31px)
              position: absolute
              background-color: $green3
              top: calc(-25% - 31px)
              z-index: 5

          .free68
            height: 68px
            width: 100%
            flex: calc(68 / calc(93 + 68 + 44))
            min-height: 10px
            position: relative
            display: flex
            justify-content: center
            align-items: center

            &:after
              content: ""
              display: block
              width: 6px
              height: 150%
              position: absolute
              background-color: $green3
              top: -25%
              z-index: 5

          .free93
            height: 93px
            width: 100%
            flex: calc(93 / calc(93 + 68 + 44))
            min-height: 10px

          > .round
            background-color: $green3
            width: 40px
            aspect-ratio: 1
            +border-radius(50%)
            display: flex
            justify-content: center
            align-items: center
            z-index: 10

          > .logo
            +background-image-settings()
            background-image: url("/public/assets/images/logos/trud.png")
            width: 50px
            aspect-ratio: 1
            +border-radius(50%)
            z-index: 10

        > .round
          background-color: $green6
          +border-radius(50%)
          width: 40px
          aspect-ratio: 1
          display: flex
          justify-content: center
          align-items: center
          position: relative

          &:after
            content: ""
            display: block
            position: absolute
            height: 6px
            width: 30px
            right: -28px
            background-color: $green6

        .free
          height: 100%
          flex: 1
          width: 100%

      .block
        display: flex
        flex-direction: column
        gap: 20px
        padding: 23px
        background-color: $green6
        border: 1px solid $green3
        +border-radius(20px)
        width: 100%
        z-index: 10

        > .title
          line-height: 140%
          font-size: 17px
          color: $white2
          font-weight: 600

        > .text
          color: $green14
          font-size: 17px
          line-height: 140%

    .season-3
      display: flex
      gap: 26px

      .lines
        width: 40px
        display: flex
        align-items: center
        justify-content: center

        > .round
          background-color: $green6
          +border-radius(50%)
          width: 40px
          aspect-ratio: 1
          display: flex
          justify-content: center
          align-items: center
          position: relative

          &:after
            content: ""
            display: block
            position: absolute
            height: 6px
            width: 30px
            right: -28px
            background-color: $green6

      .block
        display: flex
        flex-direction: column
        gap: 20px
        padding: 23px
        background-color: $green6
        border: 1px solid $green3
        +border-radius(20px)
        width: 100%
        z-index: 10

        > .title
          line-height: 140%
          font-size: 17px
          color: $white2
          font-weight: 600

        > .text
          color: $green14
          font-size: 17px
          line-height: 140%
          font-weight: 500

    .season-4
      display: flex
      gap: 26px

      .lines
        width: 40px
        display: flex
        align-items: center
        justify-content: center

        > .round
          background-color: $green6
          +border-radius(50%)
          width: 40px
          aspect-ratio: 1
          display: flex
          justify-content: center
          align-items: center
          position: relative

          &:after
            content: ""
            display: block
            position: absolute
            height: 6px
            width: 30px
            right: -28px
            background-color: $green6

      .block
        display: flex
        flex-direction: column
        gap: 20px
        padding: 23px
        background-color: $green6
        border: 1px solid $green3
        +border-radius(20px)
        width: 100%
        z-index: 10

        > .title
          line-height: 140%
          font-size: 17px
          color: $white2
          font-weight: 600

        > .text
          color: $green14
          font-size: 17px
          line-height: 140%
          font-weight: 500

    .season-5
      display: flex
      gap: 26px

      .lines
        width: 40px
        display: flex
        align-items: center
        justify-content: center

        > .round
          background-color: $green6
          +border-radius(50%)
          width: 40px
          aspect-ratio: 1
          display: flex
          justify-content: center
          align-items: center
          position: relative

          &:after
            content: ""
            display: block
            position: absolute
            height: 6px
            width: 30px
            right: -28px
            background-color: $green6

      .block
        display: flex
        flex-direction: column
        gap: 20px
        padding: 23px
        background-color: $green6
        border: 1px solid $green3
        +border-radius(20px)
        width: 100%
        z-index: 10

        > .title
          line-height: 140%
          font-size: 17px
          color: $white2
          font-weight: 600

        > .text
          color: $green14
          font-size: 17px
          line-height: 140%
          font-weight: 500
</style>