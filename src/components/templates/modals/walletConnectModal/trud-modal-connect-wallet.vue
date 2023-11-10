<script setup>
import { arbitrum, mainnet } from '@wagmi/core/chains'
import {
  createWeb3Modal,
  defaultWagmiConfig,
  useWeb3Modal,
  useWeb3ModalEvents,
} from '@web3modal/wagmi/vue'
import { getAccount } from "@wagmi/core";

// @ts-expect-error 1. Get projectId
const projectId = '94220bbc13162157cb0a4c2b954f3904'

// 2. Create wagmiConfig
const chains = [mainnet, arbitrum]
const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata: {
    name: 'TRUD',
    description: 'TRUD family.',
    url: 'https://trud.family',
    icons: ['https://trud.family/img/trud.d0eb6c11.png']
  },
})

// 3. Create modal
createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  themeMode: 'light',
  themeVariables: {
    '--w3m-color-mix': '#00BB7F',
    '--w3m-color-mix-strength': 20
  },
  featuredWalletIds: [
    'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96',
  ],
})

// 4. Use modal composable
const modal = useWeb3Modal()
const events = useWeb3ModalEvents()

import { watch, defineEmits } from "vue";

const emit = defineEmits(['updateData'])

let balance = null

import axios from "axios";

async function getBalance(address) {
  await axios.get(`https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0x2e7729f4e4aa8e68d13830d372f975046d4a498f&address=${ address }&tag=latest&apikey=W8VUZ5281MZV536M4FU1Q3GNMHV6P45PCP`)
      .then(response => {
        balance = response.data.result
      })
      .catch(error => {
        console.log("Getting Balance Error:", error)

        balance = null
      })
}

watch(events, async events => {
  const currentEvent = events.data.event

  const targetEvents = ["CONNECT_SUCCESS", "MODAL_LOADED", "MODAL_CLOSE"]

  if (!targetEvents.includes(currentEvent)) {
    return
  }

  if (currentEvent === "MODAL_CLOSE") {
    if (balance !== null) {
      return
    }
  }

  const account = getAccount()

  if (!account) {
    return
  }

  if (!account.address) {
    return
  }

  await getBalance(account.address)

  emit('updateData', account.address, balance)
})
</script>

<script>
import { defineComponent } from 'vue'

import trudButton from "@/components/UI-kit/button/trud-button.vue";

import trudMetaMaskConnector from "@/components/templates/metaMaskConnector/trud-meta-mask-connector.vue";

export default defineComponent({
  name: "trud-modal-connect-wallet",

  components: {
    trudButton,

    trudMetaMaskConnector,
  },

  props: {
    isModalOpened: {
      type: Boolean,
      default() {
        return false
      },
    },
  },

  data() {
    return {
      metaMaskConnection: false,
      trustWalletConnection: false,
      walletConnectConnection: false,
    }
  },

  methods: {
    closeModal(e) {
      if (e.currentTarget !== e.target) {
        return
      }

      this.$emit('close-modal')
    },

    metaMaskConnect() {
      this.metaMaskConnection = false
      this.metaMaskConnection = true

      this.$emit('close-modal')
    },

    updateData(address, balance) {
      this.$emit('updateData', address, balance)
    }
  },

  watch: {
    isModalOpened: {
      immediate: true,
      handler(newVal) {
        console.log('watch isModalOpened:', newVal)
      },
    },
  },
})
</script>

<template>
  <div
      class="trud-modal-connect-wallet"
      :class="{
        active: isModalOpened ? isModalOpened : false
      }"
      @click="closeModal"
  >
    <trud-meta-mask-connector
        :need-connect="metaMaskConnection"
        @updateData="updateData"
    />

    <div class="connectors-wrapper">
      <trud-button
          title="MetaMask"
          type="green"
          class="button meta-mask"
          :show-soon="false"
          @click="metaMaskConnect"
      />

      <trud-button
          title="WalletConnect"
          type="green"
          class="button"
          :show-soon="false"
          @click="() => {
            emit('close-modal')

            modal.open()
          }"
      />
    </div>
  </div>
</template>

<style scoped lang="sass">
.trud-modal-connect-wallet
  position: fixed
  left: 0
  top: 0
  width: 100%
  height: 100%
  background-color: rgba(0, 0, 0, 0.5)
  display: none
  z-index: 999999
  align-items: center
  justify-content: center

  &.active
    display: flex

  .connectors-wrapper
    background-color: $green4
    border: 1px solid $green3
    +border-radius(20px)
    padding: 40px
    display: flex
    flex-direction: column
    align-items: center
    gap: 30px

    .button
      padding: 10px 40px
      font-size: 24px
      line-height: 120%
      +border-radius(999px)

      &.meta-mask
        @media (min-width: $desktopScreenMinWidth)

        @media (max-width: $mobileScreenMaxWidth)
          display: none
</style>