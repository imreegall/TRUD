<script>
import { defineComponent } from 'vue'

import trudFooterSocials from "@/components/templates/footer/blocks/trud-footer-socials.vue";
import trudFooterDocuments from "@/components/templates/footer/blocks/trud-footer-documents.vue";

export default defineComponent({
  name: "trud-footer",

  components: {
    trudFooterSocials,
    trudFooterDocuments,
  },
})
</script>

<template>
  <div class="trud-footer">
    <trud-footer-socials />

    <trud-footer-documents />
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
</style>