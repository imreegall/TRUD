<template>
  <div class="trud">
    <trud-wallet-connector
        ref="wallet-connector"
        @update-data="updateData"
    />

    <router-view
        :address="address"
        :balance="balance"
        @open-wallet-connect="openWalletConnect"
    />
  </div>
</template>

<script>
import trudWalletConnector from "@/components/templates/wallet-connector/trud-wallet-connector.vue";
import axios from "axios";

export default {
  name: 'App',

  components: {
    trudWalletConnector,
  },

  data() {
    return {
      address: null,

      balance: null,
    }
  },

  methods: {
    async openWalletConnect() {
      await this.$refs["wallet-connector"].openModal()
    },

    updateData(address, balance = undefined) {
      this.address = address

      if (balance === undefined) {
        return
      }

      this.balance = balance
    },

    async getBalance(address) {
      await axios.get(`https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0x2e7729f4e4aa8e68d13830d372f975046d4a498f&address=${ address }&tag=latest&apikey=W8VUZ5281MZV536M4FU1Q3GNMHV6P45PCP`)
          .then(response => {
            this.balance = response.data.result
          })
          .catch(error => {
            this.balance = null

            console.log("Getting Balance Error:", error)
          })
    },
  },

  watch: {
    address: {
      immediate: true,
      async handler(newVal) {
        console.log('address:', newVal)

        if (!newVal) {
          this.balance = null

          return
        }

        await this.getBalance(newVal)
      }
    }
  }
}
</script>

<style scoped lang="sass">

</style>
