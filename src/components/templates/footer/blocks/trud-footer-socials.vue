<script>
import { defineComponent } from 'vue'

import trudTelegramLogo from "@/components/UI-kit/logos/trud-telegram-logo.vue";
import trudTwitterLogo from "@/components/UI-kit/logos/trud-twitter-logo.vue";
import trudDiscordLogo from "@/components/UI-kit/logos/trud-discord-logo.vue";
import trudYoutubeLogo from "@/components/UI-kit/logos/trud-youtube-logo.vue";
import trudMediumLogo from "@/components/UI-kit/logos/trud-medium-logo.vue";
// import trudTiktokLogo from "@/components/UI-kit/logos/trud-tiktok-logo.vue";
import trudInstagramLogo from "@/components/UI-kit/logos/trud-instagram-logo.vue";
import trudGithubLogo from "@/components/UI-kit/logos/trud-github-logo.vue";
import trudRedditLogo from "@/components/UI-kit/logos/trud-reddit-logo.vue";

export default defineComponent({
  name: "trud-footer-socials",

  components: {
    trudTelegramLogo,
    trudTwitterLogo,
    trudDiscordLogo,
    trudYoutubeLogo,
    trudMediumLogo,
    // trudTiktokLogo,
    trudInstagramLogo,
    trudGithubLogo,
    trudRedditLogo,
  },
})
</script>

<template>
  <div class="trud-footer-socials">
    <h1 class="title">Our socials</h1>

    <main>
      <a class="social" href="https://instagram.com/historicalcollection.art?igshid=OGQ5ZDc2ODk2ZA==" target="_blank">
        <trud-instagram-logo />

        <h1 class="title">INSTAGRAM</h1>
      </a>

      <a class="social" href="https://t.me/TRUDtoken" target="_blank">
        <trud-telegram-logo />

        <h1 class="title">TELEGRAM</h1>
      </a>

      <a class="social" href="https://x.com/trudtoken" target="_blank">
        <trud-twitter-logo />

        <h1 class="title">TWITTER</h1>
      </a>

      <a class="social" href="https://discord.gg/historicalcollection" target="_blank">
        <trud-discord-logo />

        <h1 class="title">DISCORD</h1>
      </a>

      <a class="social" href="https://youtube.com/@historicalcollectionart" target="_blank">
        <trud-youtube-logo />

        <h1 class="title">YOUTUBE</h1>
      </a>

      <a class="social" href="https://medium.com/@historicalcollectionart" target="_blank">
        <trud-medium-logo />

        <h1 class="title">MEDIUM</h1>
      </a>

      <a class="social" href="https://github.com/TRUD-token" target="_blank">
        <trud-github-logo />

        <h1 class="title">GITHUB</h1>
      </a>

      <a class="social" href="https://www.reddit.com/user/TRUDtoken" target="_blank">
        <trud-reddit-logo />

        <h1 class="title">REDDIT</h1>
      </a>

<!--      <a class="social" href="https://www.tiktok.com/@historical.collection" target="_blank">-->
<!--        <trud-tiktok-logo />-->

<!--        <h1 class="title">TIKTOK</h1>-->
<!--      </a>-->
    </main>
  </div>
</template>

<style scoped lang="sass">
.trud-footer-socials
  display: flex
  flex-direction: column
  align-items: center
  width: 100%

  @media (min-width: $desktopScreenMinWidth)
    padding: 0 20px
    gap: 80px

  @media (max-width: $mobileScreenMaxWidth)
    padding: 0 50px
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
    flex-wrap: wrap
    justify-content: center
    gap: 30px
    width: 100%

    .social
      +user-select(none)

      @media (min-width: $desktopScreenMinWidth)
        background-color: $green6
        +border-radius(20px)
        padding: 20px
        display: flex
        flex-direction: column
        align-items: center
        gap: 20px
        flex-basis: 100%
        color: $green3
        font-size: 20px
        line-height: 14px
        max-width: 156px

        &:hover
          cursor: pointer
          background-color: $green8

      @media (max-width: $mobileScreenMaxWidth)
        &:first-child
          order: 1

        &:hover
          cursor: pointer

      &:active
        > *
          top: 1px

      > *
        position: relative

      > .title
        @media (min-width: $desktopScreenMinWidth)

        @media (max-width: $mobileScreenMaxWidth)
          display: none
</style>