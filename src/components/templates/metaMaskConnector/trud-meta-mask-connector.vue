<script>
import { defineComponent } from 'vue'

import axios from 'axios'

import VueMetamask from 'vue-metamask';


export default defineComponent({
  name: "trud-meta-mask-connector",

  components: {
    VueMetamask,
  },

  props: {
    needConnect: {
      type: Boolean,
      default() {
        return false
      }
    },
  },

  data() {
    return {
      axios,
      address: null,

      balance: null,

      wasConnected: false,
    }
  },

  async beforeMount() {
    this.wasConnected = localStorage.getItem('wasConnected')
  },

  methods: {
    async updateData() {
      await this.$emit('updateData', this.address, this.balance)
    },

    async connect() {
      if (!this.wasConnected) {
        localStorage.setItem('wasConnected', "true")
      }

      await this.$refs.metamask.init()
    },

    async onComplete(data) {
      if (!data) {
        this.address = null
        return
      }

      if (data.type === "NO_LOGIN") {
        localStorage.removeItem('wasConnected')
      }

      if (!data.metaMaskAddress) {
        this.address = null
        return
      }

      this.address = data.metaMaskAddress
    },

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
  <div class="trud-meta-mask-connector">
    <vue-metamask
        ref="metamask"
        :initConnect="wasConnected"
        @onComplete="onComplete"
    />
  </div>
</template>

<style scoped lang="sass">

</style>