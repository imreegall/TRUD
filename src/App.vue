<template>
  <div class="trud">
    <router-view
        :address="address"
        :balance="balance"
        @wallet-connect="walletConnect"
    />

    <trud-meta-mask-connector
        :need-connect="isNeedWalletConnect"
        @update-data="updateData"
    />
  </div>
</template>

<script>
import trudMetaMaskConnector from "@/components/templates/metaMaskConnector/trud-meta-mask-connector.vue";

export default {
  name: 'App',

  components: {
    trudMetaMaskConnector,
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
    },

    updateData(address, balance) {
      this.address = address
      this.balance = balance
    },
  },
}
</script>

<style scoped lang="sass">
.trud
</style>
