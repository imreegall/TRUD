<!--<script lang="ts" setup>-->
<!--  import { arbitrum, mainnet } from '@wagmi/core/chains'-->
<!--  import {-->
<!--    createWeb3Modal,-->
<!--    defaultWagmiConfig,-->
<!--    useWeb3Modal,-->
<!--    useWeb3ModalEvents,-->
<!--    useWeb3ModalState,-->
<!--    useWeb3ModalTheme-->
<!--  } from '@web3modal/wagmi/vue'-->

<!--  // @ts-expect-error 1. Get projectId-->
<!--  const projectId = '94220bbc13162157cb0a4c2b954f3904'-->

<!--  // 2. Create wagmiConfig-->
<!--  const chains = [mainnet, arbitrum]-->
<!--  const wagmiConfig = defaultWagmiConfig({-->
<!--    chains,-->
<!--    projectId,-->
<!--    metadata: {-->
<!--      name: 'Web3Modal Vue Example'-->
<!--    }-->
<!--  })-->

<!--  // 3. Create modal-->
<!--  createWeb3Modal({-->
<!--    wagmiConfig,-->
<!--    projectId,-->
<!--    chains,-->
<!--    themeMode: 'light',-->
<!--    themeVariables: {-->
<!--      '&#45;&#45;w3m-color-mix': '#00BB7F',-->
<!--      '&#45;&#45;w3m-color-mix-strength': 20-->
<!--    }-->
<!--  })-->

<!--  // 4. Use modal composable-->
<!--  const modal = useWeb3Modal()-->
<!--  const state = useWeb3ModalState()-->
<!--  const { setThemeMode, themeMode, themeVariables } = useWeb3ModalTheme()-->
<!--  const events = useWeb3ModalEvents()-->
<!--</script>-->

<!--<script>-->
<!--import { defineComponent } from 'vue'-->

<!--import {-->
<!--  createWeb3Modal,-->
<!--  defaultWagmiConfig,-->
<!--  useWeb3ModalState,-->
<!--  useWeb3Modal,-->
<!--  useWeb3ModalEvents-->
<!--} from '@web3modal/wagmi/vue'-->
<!--import { mainnet, arbitrum } from 'viem/chains'-->
<!--import axios from "axios";-->

<!--export default defineComponent({-->
<!--  name: "trud-wallet-connect-connector",-->

<!--  props: {-->
<!--    needConnect: {-->
<!--      type: Boolean,-->
<!--      default() {-->
<!--        return false-->
<!--      }-->
<!--    },-->
<!--  },-->

<!--  // data() {-->
<!--  //   return {-->
<!--  //     axios,-->
<!--  //     address: null,-->
<!--  //-->
<!--  //     balance: null,-->
<!--  //-->
<!--  //     wasConnected: false,-->
<!--  //-->
<!--  //     projectId: '94220bbc13162157cb0a4c2b954f3904',-->
<!--  //-->
<!--  //     metadata: {-->
<!--  //       name: 'Test Meta',-->
<!--  //     },-->
<!--  //-->
<!--  //     chains: [mainnet, arbitrum],-->
<!--  //-->
<!--  //     wagmiConfig: null,-->
<!--  //-->
<!--  //     modal: null,-->
<!--  //-->
<!--  //     state: null,-->
<!--  //-->
<!--  //     events: null,-->
<!--  //   }-->
<!--  // },-->

<!--  // async beforeMount() {-->
<!--  //   const wasConnected = localStorage.getItem('wasConnected')-->
<!--  //-->
<!--  //   this.wasConnected = wasConnected === "WalletConnect"-->
<!--  // },-->

<!--  // async mounted() {-->
<!--  //   const projectId = this.projectId-->
<!--  //   const metadata = this.metadata-->
<!--  //   const chains = this.chains-->
<!--  //-->
<!--  //   this.wagmiConfig = await defaultWagmiConfig({-->
<!--  //     projectId,-->
<!--  //     chains,-->
<!--  //     metadata,-->
<!--  //   })-->
<!--  //-->
<!--  //   const wagmiConfig = this.wagmiConfig-->
<!--  //-->
<!--  //   await createWeb3Modal({ wagmiConfig, projectId, chains })-->
<!--  //-->
<!--  //   this.modal = useWeb3Modal()-->
<!--  //-->
<!--  //   this.state = useWeb3ModalState()-->
<!--  //-->
<!--  //   this.events = useWeb3ModalEvents()-->
<!--  // },-->

<!--  methods: {-->
<!--    async updateData() {-->
<!--      await this.$emit('updateData', this.address, this.balance)-->
<!--    },-->

<!--    async connect() {-->
<!--      // if (!this.wasConnected) {-->
<!--      //   localStorage.setItem('wasConnected', "WalletConnect")-->
<!--      // }-->
<!--      //-->
<!--      // await this.modal.open()-->
<!--      //-->
<!--      // console.log('end:', this.state)-->

<!--      this.modal.open()-->
<!--    },-->

<!--    async getBalance(address) {-->
<!--      await this.axios.get(`https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0x2e7729f4e4aa8e68d13830d372f975046d4a498f&address=${ address }&tag=latest&apikey=W8VUZ5281MZV536M4FU1Q3GNMHV6P45PCP`)-->
<!--          .then(response => {-->
<!--            this.balance = response.data.result-->
<!--          })-->
<!--          .catch(error => {-->
<!--            console.log("Getting Balance Error:", error)-->

<!--            this.balance = null-->
<!--          })-->
<!--    },-->
<!--  },-->

<!--  watch: {-->
<!--    needConnect: {-->
<!--      immediate: true,-->
<!--      async handler(newVal) {-->
<!--        if (!newVal) {-->
<!--          return-->
<!--        }-->

<!--        await this.connect()-->
<!--      },-->
<!--    },-->

<!--    address: {-->
<!--      immediate: true,-->
<!--      async handler(newVal) {-->
<!--        await this.updateData()-->

<!--        if (!newVal) {-->
<!--          return-->
<!--        }-->

<!--        await this.getBalance(newVal)-->
<!--      },-->
<!--    },-->

<!--    balance: {-->
<!--      immediate: true,-->
<!--      async handler() {-->
<!--        await this.updateData()-->
<!--      },-->
<!--    },-->

<!--    state: {-->
<!--      immediate: true,-->
<!--      handler(newVal) {-->
<!--        console.log('watch state:', newVal)-->
<!--      },-->
<!--    },-->

<!--    events: {-->
<!--      immediate: true,-->
<!--      handler(newVal) {-->
<!--        console.log('watch events:', newVal)-->
<!--      },-->
<!--    },-->
<!--  },-->
<!--})-->
<!--</script>-->

<!--<template>-->
<!--  <div class="trud-wallet-connect-connector">-->

<!--  </div>-->
<!--</template>-->

<!--<style scoped lang="sass">-->

<!--</style>-->