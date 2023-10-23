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
  gap: 40px

  > .title
    line-height: 140%

    @media (min-width: $desktopScreenMinWidth)
      font-size: 24px
      color: $white2

    @media (max-width: $mobileScreenMaxWidth)
      font-size: 20px
      color: $white4

  main
    display: flex

    @media (min-width: $desktopScreenMinWidth)
      gap: 40px

    @media (max-width: $mobileScreenMaxWidth)
      gap: 30px
      flex-direction: column

    .document
      color: $green3
      font-size: 17px
      line-height: 140%
</style>