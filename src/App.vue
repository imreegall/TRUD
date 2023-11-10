<template>
  <div class="trud">
    <router-view
        :address="address"
        :balance="balance"
        @wallet-connect="walletConnect"
    />

    <trud-modal-connect-wallet
        :is-modal-opened="isNeedWalletConnect"
        @close-modal="isNeedWalletConnect = false"
        @update-data="updateData"
    />

<!--    <trud-meta-mask-connector-->
<!--        :need-connect="isNeedWalletConnect"-->
<!--        @update-data="updateData"-->
<!--    />-->
  </div>
</template>

<script>
import trudModalConnectWallet from "@/components/templates/modals/walletConnectModal/trud-modal-connect-wallet.vue";

export default {
  name: 'App',

  components: {
    trudModalConnectWallet,
  },

  data() {
    return {
      isNeedWalletConnect: false,

      address: null,

      balance: null,
    }
  },

  methods: {
    walletConnect() {
      this.isNeedWalletConnect = false
      this.isNeedWalletConnect = true
      console.log('TEST2')
    },

    updateData(address, balance) {
      this.address = address
      this.balance = balance

      console.log('new Data:', address, balance)
    },
  },
}
</script>

<style scoped lang="sass">
.trud
</style>
