<script>
import { defineComponent } from 'vue'

import trudButton from "@/components/UI-kit/button/trud-button.vue";

// import { MetaMaskSDK } from '@metamask/sdk';

export default defineComponent({
  name: "trud-header",

  data() {
    return {
      isScrolled: false,

      sdk: null,
      account: null,
      chainId: null,
      connected: false,
      lastResponse: null,
      provider: null,
      availableLanguages: [],
      selectedLanguage: '',
    }
  },

  components: {
    trudButton,
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.changeHeader)
  },

  async mounted() {
    window.addEventListener('scroll', this.changeHeader)

    this.changeHeader()

    // Init SDK
    await this.sdk?.init().then(() => {
      this.provider = this.sdk?.getProvider();

      // Chain changed
      this.provider?.on("chainChanged", (chain) => {
        this.chainId = chain;
      });

      // Accounts changed
      this.provider?.on("accountsChanged", (accounts) => {
        this.account = accounts[0];
      });

      // Connected event
      this.provider?.on('connect', () => {
        this.onConnect();
        this.connected = true;
      });

      // Disconnect event
      this.provider?.on('disconnect', () => {
        this.connected = false;
      });

      this.availableLanguages = this.sdk?.availableLanguages ?? ['en']
    });
  },

  // created() {
  //   this.sdk = new MetaMaskSDK({
  //     dappMetadata: {
  //       url: window.location.href,
  //       name: 'TRUD',
  //     },
  //     enableDebug: false,
  //     checkInstallationImmediately: false,
  //     logging: {
  //       developerMode: false,
  //     },
  //     i18nOptions: {
  //       enabled: true,
  //     },
  //   });
  // },

  methods: {
    changeHeader() {
      if (window.scrollY > 0) {
        if (this.isScrolled) {
          return
        }

        this.$refs.header.classList.add('active')
        this.isScrolled = true
      } else {
        if (!this.isScrolled) {
          return
        }

        this.$refs.header.classList.remove('active')
        this.isScrolled = false
      }
    },

    handleBurgerClick(status) {
      this.$emit('show-burger-menu', status)
    },

    async onConnect() {
      const res = await this.provider.request({
        method: 'eth_requestAccounts',
        params: [],
      });

      this.account = res[0];
      this.lastResponse = "";
      this.chainId = this.provider.chainId;
    },

    async handleConnectButtonClick() {
      if (this.address) {
        return
      }

      await this.onConnect()
    },
  },

  computed: {
    address() {
      if (!this.provider) {
        return null
      }

      if (!this.provider.selectedAddress && !this.account) {
        return null
      }

      const string = this.provider.selectedAddress || this.account

      return string.slice(0, 4) + '...' + string.substring(string.length - 2)
    },
  }
})
</script>

<template>
  <div class="trud-header" ref="header">
    <div class="burger-island-wrapper only-mb" @click="handleBurgerClick(false)">
      <div class="burger">
        <div class="line"></div>

        <div class="line"></div>
      </div>
    </div>

    <div class="burger-wrapper only-mb" @click="handleBurgerClick(true)">
      <div class="burger">
        <div class="line"></div>

        <div class="line"></div>
      </div>
    </div>

    <a class="logo-wrapper" href="#main">
      <div class="logo"></div>

      <h1 class="title">TRUD</h1>
    </a>

    <nav class="only-ds">
      <a href="#litepaper"><h4>Litepaper</h4></a>

      <a href="#ecosystem"><h4>Ecosystem</h4></a>

      <a href="#tokenomic"><h4>Tokenomic</h4></a>

      <a href="#roadmap"><h4>Roadmap</h4></a>

      <a href="#community"><h4>Community</h4></a>
    </nav>

    <div class="buttons-group">
      <trud-button class="button" title="Room" type="transparent" />

      <trud-button
          v-if="this.address"
          class="button address"
          type="green"
          :title="this.address"
          :showSoon="false"
          :line-height="true"
      />

      <trud-button
          v-else
          class="button"
          title="Connect"
          type="green"
          :showSoon="false"
          @click="handleConnectButtonClick"
      >
        <div class="icon"></div>
      </trud-button>
    </div>
  </div>
</template>

<style scoped lang="sass">
.trud-header
  display: flex
  width: 100%
  justify-content: space-between
  padding: 0 20px

  @media (min-width: $desktopScreenMinWidth)
    max-width: calc(1920px - 315px * 2 + 20px * 2)
    align-items: center
    position: fixed
    top: 40px
    z-index: 999
    +border-radius(999px)

    &.active
      background-color: $green13
      padding: 8px
      max-width: calc(1920px - 440px * 2 + 20px * 2)
      top: 14px

      .logo-wrapper
        > .title
          display: none

        .logo
          width: 50px !important

      nav
        gap: 20px

      .buttons-group
        column-gap: 15px

  @media (max-width: $mobileScreenMaxWidth)
    align-items: flex-start
    gap: 16px
    position: relative

    &.active
      .burger-island-wrapper
        display: flex

  .burger-island-wrapper
    display: none
    width: 100%
    justify-content: center
    align-items: center
    position: fixed
    bottom: 40px
    z-index: 9999
    left: 0

    .burger
      display: flex
      flex-direction: column
      gap: 7px
      justify-content: center
      align-items: center
      background-color: $green13
      padding: 14px 36px
      +border-radius(999px)

      &:hover
        cursor: pointer

        .line
          background-color: $green7

      .line
        height: 5px
        width: 33px
        background-color: $green3
        +border-radius(999px)

  .burger-wrapper
    width: 100%
    z-index: 10

    .burger
      display: flex
      flex-direction: column
      gap: 7px
      width: 40px
      aspect-ratio: 1
      justify-content: center
      align-items: center

      &:hover
        cursor: pointer

        .line
          background-color: $green7

      .line
        height: 5px
        width: 33px
        background-color: $green3
        +border-radius(999px)

  .logo-wrapper
    display: flex
    align-items: center
    gap: 10px
    +user-select(none)

    @media (min-width: $desktopScreenMinWidth)

    @media (max-width: $mobileScreenMaxWidth)
      position: absolute
      width: 100%
      top: 0
      left: 0
      justify-content: center
      margin-top: 5px
      padding-right: 40px

    .logo
      +background-image-settings()
      background-image: url("/public/assets/images/logos/trud.png")
      aspect-ratio: 1

      @media (min-width: $desktopScreenMinWidth)
        width: 53px

      @media (max-width: $mobileScreenMaxWidth)
        width: 30px

    > .title
      color: $white1

      @media (min-width: $desktopScreenMinWidth)
        font-size: 30px
        line-height: 33px

      @media (max-width: $mobileScreenMaxWidth)
        font-size: 24px
        line-height: 26px

  nav
    display: flex
    align-items: baseline
    gap: 24px
    line-height: 120%
    font-size: 20px
    color: $white2

  .buttons-group
    display: flex

    @media (min-width: $desktopScreenMinWidth)
      gap: 10px 30px
      align-items: center
      flex-wrap: wrap-reverse
      justify-content: flex-end

    @media (max-width: $mobileScreenMaxWidth)
      gap: 5px
      flex-direction: column-reverse
      align-items: flex-end
      margin-top: 7.5px
      width: 100%
      z-index: 10

    .button
      +border-radius(999px)

      &:first-child
        @media (min-width: $desktopScreenMinWidth)
          font-size: 20px
          line-height: 14px
          padding: 13px 50px 15px

        @media (max-width: $mobileScreenMaxWidth)
          font-size: 12px
          line-height: 9px
          padding: 8px 20px

      &:last-child
        @media (min-width: $desktopScreenMinWidth)
          font-size: 20px
          line-height: 14px
          padding: 14px 30px 16px

          &.address
            width: 167px
            padding: 11px 30px 13px

        @media (max-width: $mobileScreenMaxWidth)
          font-size: 12px
          line-height: 9px
          padding: 8px 12px

          &.address
            max-width: 100px
            width: 100%
            padding: 9px 12px

        > .icon
          width: 14px
          aspect-ratio: 1
          position: relative
          display: flex
          justify-content: center
          align-items: center
          margin-left: 10px

          &:after
            display: block
            content: ""
            +background-image-settings()
            background-image: url("/public/assets/images/templates/header/wallet.svg")
            width: 25px
            aspect-ratio: 1
            position: absolute
</style>