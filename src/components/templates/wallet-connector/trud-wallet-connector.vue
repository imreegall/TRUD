<script>
import { defineComponent, watch } from 'vue'

import {
  createWeb3Modal,
  defaultWagmiConfig,
  useWeb3Modal,
  useWeb3ModalEvents,
} from '@web3modal/wagmi/vue'

import { getAccount } from "@wagmi/core";

import { arbitrum, mainnet } from '@wagmi/core/chains'

export default defineComponent({
  name: "trud-wallet-connector",

  setup(props, { emit }) {
    const chains = [mainnet, arbitrum]

    const projectId = '94220bbc13162157cb0a4c2b954f3904'

    const metadata = {
      name: 'TRUD',
      description: 'TRUD family.',
      url: 'https://trud.family',
      icons: ['https://trud.family/img/trud.d0eb6c11.png']
    }

    const wagmiConfig = defaultWagmiConfig({
      projectId,
      chains,
      metadata
    })

    createWeb3Modal({
      wagmiConfig,
      projectId,
      chains,
      featuredWalletIds: [
        'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96',
        '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0',
        'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa',
      ],
      tokens: {
        1: {
          address: '0x2e7729f4e4aa8e68d13830d372f975046d4a498f',
        },
        2: {
          address: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
        },
      }
    })

    const modal = useWeb3Modal()
    const events = useWeb3ModalEvents()

    let address = null

    watch(events, async (event) => {
      console.log('event:', event.data.event)

      const account = await getAccount()

      console.log('account:', account)

      const newAddress = account.address || null

      if (address === newAddress) {
        if (event.data.event === "MODAL_LOADED") {
          await emit('onLoadModal', true)
        }

        return
      }

      address = newAddress

      await emit('updateData', address)

      if (event.data.event === "MODAL_LOADED") {
        await emit('onLoadModal', true)
      }
    }, {
      deep: true,
    })

    async function openModal() {
      await modal.open()
    }

    return {
      openModal
    }
  },
})
</script>

<template>
  <div class="trud-wallet-connector">

  </div>
</template>

<style scoped lang="sass">

</style>