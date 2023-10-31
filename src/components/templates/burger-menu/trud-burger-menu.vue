<script>
import { defineComponent } from 'vue'

import trudButton from "@/components/UI-kit/button/trud-button.vue";

export default defineComponent({
  name: "trud-burger-menu",

  components: {
    trudButton,
  },

  props: {
    closeButtonStatus: {
      type: Boolean,
      default() {
        return false
      }
    },
  },

  methods: {
    handleLinkClick() {
      this.$emit('close-burger-menu')
    },

    handleCloseButtonClick() {
      this.$emit('close-burger-menu')
    },
  },
})
</script>

<template>
  <div class="trud-burger-menu only-mb">
    <svg v-if="closeButtonStatus" class="close-button" @click="handleCloseButtonClick" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
      <g clip-path="url(#clip0_822_4657)">
        <path d="M25.6114 4.38863C19.7586 -1.46288 10.2404 -1.46288 4.38767 4.38863C-1.46256 10.2401 -1.46256 19.7608 4.38767 25.6123C7.31404 28.5375 11.1571 29.9994 15.0002 29.9994C18.8433 29.9994 22.685 28.5374 25.6114 25.6123C31.4629 19.7609 31.4629 10.2401 25.6114 4.38863ZM21.1893 19.4219C21.6782 19.9109 21.6782 20.7013 21.1893 21.1902C21.0733 21.3065 20.9355 21.3988 20.7837 21.4617C20.632 21.5245 20.4693 21.5568 20.3051 21.5567C20.1408 21.5568 19.9782 21.5245 19.8265 21.4616C19.6747 21.3988 19.5369 21.3065 19.4209 21.1902L15.0001 16.7681L10.5805 21.1889C10.346 21.4234 10.028 21.5552 9.69635 21.5554C9.5321 21.5555 9.36944 21.5232 9.21771 21.4604C9.06597 21.3975 8.92816 21.3052 8.81216 21.1889C8.3232 20.7 8.3232 19.9084 8.81216 19.4206L13.2317 14.9998L8.81093 10.579C8.32197 10.0901 8.32197 9.29846 8.81093 8.81073C9.29866 8.32177 10.0903 8.32177 10.5792 8.81073L15 13.2315L19.4208 8.81073C19.9098 8.32177 20.7002 8.32177 21.1892 8.81073C21.6781 9.29846 21.6781 10.0901 21.1892 10.579L16.7684 14.9998L21.1893 19.4219Z" fill="#5A6A64"/>
      </g>
      <defs>
        <clipPath id="clip0_822_4657">
          <rect width="30" height="30" fill="white"/>
        </clipPath>
      </defs>
    </svg>

    <svg v-else class="close-button-false" @click="handleCloseButtonClick" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
      <g clip-path="url(#clip0_822_4657)">
        <path d="M25.6114 4.38863C19.7586 -1.46288 10.2404 -1.46288 4.38767 4.38863C-1.46256 10.2401 -1.46256 19.7608 4.38767 25.6123C7.31404 28.5375 11.1571 29.9994 15.0002 29.9994C18.8433 29.9994 22.685 28.5374 25.6114 25.6123C31.4629 19.7609 31.4629 10.2401 25.6114 4.38863ZM21.1893 19.4219C21.6782 19.9109 21.6782 20.7013 21.1893 21.1902C21.0733 21.3065 20.9355 21.3988 20.7837 21.4617C20.632 21.5245 20.4693 21.5568 20.3051 21.5567C20.1408 21.5568 19.9782 21.5245 19.8265 21.4616C19.6747 21.3988 19.5369 21.3065 19.4209 21.1902L15.0001 16.7681L10.5805 21.1889C10.346 21.4234 10.028 21.5552 9.69635 21.5554C9.5321 21.5555 9.36944 21.5232 9.21771 21.4604C9.06597 21.3975 8.92816 21.3052 8.81216 21.1889C8.3232 20.7 8.3232 19.9084 8.81216 19.4206L13.2317 14.9998L8.81093 10.579C8.32197 10.0901 8.32197 9.29846 8.81093 8.81073C9.29866 8.32177 10.0903 8.32177 10.5792 8.81073L15 13.2315L19.4208 8.81073C19.9098 8.32177 20.7002 8.32177 21.1892 8.81073C21.6781 9.29846 21.6781 10.0901 21.1892 10.579L16.7684 14.9998L21.1893 19.4219Z" fill="#5A6A64"/>
      </g>
      <defs>
        <clipPath id="clip0_822_4657">
          <rect width="30" height="30" fill="white"/>
        </clipPath>
      </defs>
    </svg>

    <nav>
      <a href="#litepaper" @click="handleLinkClick"><h4>Litepaper</h4></a>

      <a href="#ecosystem" @click="handleLinkClick"><h4>Ecosystem</h4></a>

      <a href="#tokenomic" @click="handleLinkClick"><h4>Tokenomic</h4></a>

      <a href="#roadmap" @click="handleLinkClick"><h4>Roadmap</h4></a>

      <a href="#community" @click="handleLinkClick"><h4>Community</h4></a>
    </nav>

    <div class="buttons-group">
      <trud-button class="button" title="Connect wallet" type="green" />

      <trud-button class="button" title="Room" type="transparent" />
    </div>
  </div>
</template>

<style scoped lang="sass">
.trud-burger-menu
  display: flex
  flex-direction: column
  align-items: center
  gap: 60px
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100vh
  background-color: #06261BF2
  z-index: 99999
  padding: 100px 50px

  .close-button
    position: absolute
    top: 32px
    left: 35px

    &:hover
      cursor: pointer

  .close-button-false
    position: absolute
    bottom: 100px

    &:hover
      cursor: pointer

  nav
    display: flex
    flex-direction: column
    text-align: center
    gap: 12px
    font-size: 20px
    line-height: 40px
    color: $white2

  .buttons-group
    display: flex
    flex-direction: column
    gap: 30px
    align-items: center

    .button
      width: 100%
      max-width: 205px
      +border-radius(999px)

      &:first-of-type
        padding: 14px 40px 16px

      &:last-of-type
        padding: 13px 39px 15px
</style>