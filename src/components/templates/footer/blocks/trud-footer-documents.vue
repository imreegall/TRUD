<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "trud-footer-documents",
})
</script>

<template>
  <div class="trud-footer-documents">
    <h1 class="title">DOCUMENTS</h1>

    <main>
      <h1 class="document">DOCUMENT</h1>

      <h1 class="document">DOCUMENT</h1>

      <h1 class="document">DOCUMENT</h1>

      <h1 class="document">DOCUMENT</h1>
    </main>
  </div>
</template>

<style scoped lang="sass">
.trud-footer-documents
  display: flex
  flex-direction: column
  align-items: center

  @media (min-width: $desktopScreenMinWidth)
    gap: 20px

  @media (max-width: $mobileScreenMaxWidth)
    gap: 25px

  > .title
    @media (min-width: $desktopScreenMinWidth)
      font-size: 24px
      line-height: 17px
      color: $white2

    @media (max-width: $mobileScreenMaxWidth)
      font-size: 20px
      line-height: 14px
      color: $white4

  main
    display: flex

    @media (min-width: $desktopScreenMinWidth)

    @media (max-width: $mobileScreenMaxWidth)
      flex-direction: column

    .document
      color: $green3
      font-size: 17px
      line-height: 12px
      +user-select(none)
      position: relative

      @media (min-width: $desktopScreenMinWidth)
        padding: 20px

      @media (max-width: $mobileScreenMaxWidth)
        padding: 15px

      &:hover
        cursor: pointer
        background-color: $green2

      &:active
        top: 1px
</style>