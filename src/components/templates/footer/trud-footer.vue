<script>
import { defineComponent } from 'vue'

import trudFooterSocials from "@/components/templates/footer/blocks/trud-footer-socials.vue";
// import trudFooterDocuments from "@/components/templates/footer/blocks/trud-footer-documents.vue";

export default defineComponent({
  name: "trud-footer",

  components: {
    trudFooterSocials,
    // trudFooterDocuments,
  },
})
</script>

<template>
  <div class="trud-footer">
    <trud-footer-socials />

<!--    <trud-footer-documents />-->

    <footer>
      <div class="logo-wrapper">
        <div class="logo"></div>

        <h1 class="title">TRUD</h1>
      </div>

      <h3 class="title">© 2023 TRUD</h3>
    </footer>
  </div>
</template>

<style scoped lang="sass">
.trud-footer
  display: flex
  flex-direction: column
  align-items: center
  width: 100%

  @media (min-width: $desktopScreenMinWidth)
    margin-top: 140px
    gap: 70px

  @media (max-width: $mobileScreenMaxWidth)
    margin-top: 60px
    gap: 40px

  footer
    display: flex
    flex-direction: column
    align-items: center
    +user-select(none)

    @media (min-width: $desktopScreenMinWidth)
      gap: 30px

    @media (max-width: $mobileScreenMaxWidth)
      gap: 20px

    .logo-wrapper
      display: flex
      gap: 20px
      align-items: center
      +opacity(30)

      .logo
        +background-image-settings()
        background-image: url("/public/assets/images/logos/trud.png")
        aspect-ratio: 1

        @media (min-width: $desktopScreenMinWidth)
          width: 88px

        @media (max-width: $mobileScreenMaxWidth)
          width: 60px

      > .title
        color: $white1
        font-size: 52px
        line-height: 57px

    > .title
      font-size: 15px
      line-height: 11px
      font-variant-numeric: lining-nums proportional-nums

      @media (min-width: $desktopScreenMinWidth)
        color: $green10

      @media (max-width: $mobileScreenMaxWidth)
        color: $green9
</style>