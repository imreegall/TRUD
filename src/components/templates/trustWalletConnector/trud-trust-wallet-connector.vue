<script>
import { defineComponent } from 'vue'

import axios from "axios";

import { TrustWallet } from "@thirdweb-dev/wallets";

export default defineComponent({
  name: "trud-trust-wallet-connector",

  props: {
    needConnect: {
      type: Boolean,
      default() {
        return false
      },
    },
  },

  data() {
    return {
      axios,
      address: null,

      balance: null,

      wasConnected: false,

      wallet: null,
    }
  },

  async beforeMount() {
    const wasConnected = localStorage.getItem('wasConnected')

    this.wasConnected = wasConnected === "TrustWallet"
  },

  mounted() {
    this.wallet = new TrustWallet({});
  },

  methods: {
    async updateData() {
      await this.$emit('updateData', this.address, this.balance)
    },

    async connect() {
      if (!this.wasConnected) {
        localStorage.setItem('wasConnected', "TrustWallet")
      }

      await this.wallet.connect();
    },

    // async onComplete(data) {
    //   if (!data) {
    //     this.address = null
    //     return
    //   }
    //
    //   if (data.type === "NO_LOGIN") {
    //     localStorage.removeItem('wasConnected')
    //   }
    //
    //   if (!data.metaMaskAddress) {
    //     this.address = null
    //     return
    //   }
    //
    //   this.address = data.metaMaskAddress
    // },

    async getBalance(address) {
      await this.axios.get(`https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0x2e7729f4e4aa8e68d13830d372f975046d4a498f&address=${ address }&tag=latest&apikey=W8VUZ5281MZV536M4FU1Q3GNMHV6P45PCP`)
          .then(response => {
            this.balance = response.data.result
          })
          .catch(error => {
            console.log("Getting Balance Error:", error)

            this.balance = null
          })
    },
  },

  watch: {
    needConnect: {
      immediate: true,
      async handler(newVal) {
        if (!newVal) {
          return
        }

        await this.connect()
      },
    },

    address: {
      immediate: true,
      async handler(newVal) {
        await this.updateData()

        if (!newVal) {
          return
        }

        await this.getBalance(newVal)
      },
    },

    balance: {
      immediate: true,
      async handler() {
        await this.updateData()
      },
    },
  },
})
</script>

<template>
  <div class="trud-trust-wallet-connector">

  </div>
</template>

<style scoped lang="sass">

</style>