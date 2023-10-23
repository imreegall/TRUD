<template>
  <div class="trud">
    <trud-header />

    <trud-main />

    <trud-footer />
  </div>
</template>

<script>
import trudHeader from "@/components/templates/header/trud-header.vue";
import trudMain from "@/components/templates/pages/main/trud-main.vue";
import trudFooter from "@/components/templates/footer/trud-footer.vue";

export default {
  name: 'App',

  components: {
    trudHeader,
    trudMain,
    trudFooter,
  },
}
</script>

<style scoped lang="sass">
.trud
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  background-color: $black
  min-height: 100vh

  @media (min-width: $desktopScreenMinWidth)
    padding: 40px 0 168px

  @media (max-width: $mobileScreenMaxWidth)
    padding: 20px 0 60px
</style>
