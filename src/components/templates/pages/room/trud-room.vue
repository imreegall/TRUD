<script>
import { defineComponent } from 'vue'

import axios from 'axios'

import OpenAI from "openai";
import { RateLimiter } from "limiter";

export default defineComponent({
  name: "trud-room",

  props: {
    address: {
      type: String,
      default() {
        return null
      },
    },

    balance: {
      type: String,
      default() {
        return null
      },
    },

    trudTokenMinValue: {
      type: Number,
      default() {
        return 0
      },
    },

    modalLoaded: {
      type: Boolean,
      default() {
        return false
      },
    },
  },

  data() {
    return {
      userMessages: [],
      botMessages: [
          // "Я предсказываю рост цены нашего токена TRUD в дальнейшем. Если наш проект будет успешно развиваться, а монеты будут популярны и доступны на рынках в Правительстве Закона Прожения Теплого Терраформа (Warmform), то цена нашего токена TRUD очень быстро вырастет. Это будет гарантированное Кредитирование Emission (CE) и Прирост Пространства (GrowSpace), которое гарантирует прибыльность. Думаю, что это будет достойное инвестиционное предложение для любого инвестора! 😉\n",
          // "Я предсказываю рост цены нашего токена TRUD в дальнейшем. Если наш проект будет успешно развиваться, а монеты будут популярны и доступны на рынках в Правительстве Закона Прожения Теплого Терраформа (Warmform), то цена нашего токена TRUD очень быстро вырастет. Это будет гарантированное Кредитирование Emission (CE) и Прирост Пространства (GrowSpace), которое гарантирует прибыльность. Думаю, что это будет достойное инвестиционное предложение для любого инвестора! 😉\n",
          // "Я предсказываю рост цены нашего токена TRUD в дальнейшем. Если наш проект будет успешно развиваться, а монеты будут популярны и доступны на рынках в Правительстве Закона Прожения Теплого Терраформа (Warmform), то цена нашего токена TRUD очень быстро вырастет. Это будет гарантированное Кредитирование Emission (CE) и Прирост Пространства (GrowSpace), которое гарантирует прибыльность. Думаю, что это будет достойное инвестиционное предложение для любого инвестора! 😉\n",
      ],
      maxCountBotMessages: 3,

      axios,
      waitMessage: false,

      openAI: null,

      baltazarLimiter: null,

      botTemperature: null,

      openAIApiKey: null,
      maxTokens: 1024,
      botEngineName: "text-davinci-003",

      tokensPerInterval: 1,
      oldRequests: 3500,
      interval: 60000 / this.oldRequests,

      botPromptEn: null,
      botPromptRu: null,

      lang: 'en',

      waitWalletConnect: true,

      axiosInstance: null,

      proxy: null,
    }
  },

  async beforeMount() {
    this.waitWalletConnect = true

    setTimeout(() => {
      if (this.isProfessorAllow) {
        this.waitWalletConnect = false

        return
      }

      this.$router.push('/')
    }, 7500)
  },

  async mounted() {
    this.openAIApiKey = process.env.VUE_APP_OPENAI_API_KEY

    this.botTemperature = process.env.VUE_APP_BALTAZAR_TEMPERATURE
    this.botPromptEn = process.env.VUE_APP_BALTAZAR_PROMPT_EN
    this.botPromptRu = process.env.VUE_APP_BALTAZAR_PROMPT_RU

    this.proxy = {
      protocol: 'https',
      host: process.env.VUE_APP_PROXY_ADDRESS,
      port: process.env.VUE_APP_PROXY_PORT,
    }

    this.openAI = await new OpenAI({
      apiKey: this.openAIApiKey,
      dangerouslyAllowBrowser: true,
    })

    this.baltazarLimiter = await new RateLimiter({
      tokensPerInterval: this.tokensPerInterval,
      interval: this.interval,
    })

    this.axiosInstance = await this.axios.create({
      proxy: {
        protocol: 'https',
        host: process.env.VUE_APP_PROXY_ADDRESS,
        port: process.env.VUE_APP_PROXY_PORT,
      },
    })
  },

  methods: {
    handleBackButtonClick() {
      this.$router.push('/')
    },

    async handleSendInputButtonClick() {
      if (this.waitMessage) {
        return
      }

      if (this.waitWalletConnect) {
        return
      }

      const text = this.$refs.input.value

      if (!text) {
        return
      }

      await this.sendMessage(text)

      this.$refs.input.value = ""
    },

    async handleSendInputButtonKeyUp(e) {
      if (e.keyCode !== 13) {
        return
      }

      if (this.waitMessage) {
        return
      }

      if (this.waitWalletConnect) {
        return
      }

      const text = this.$refs.input.value

      await this.sendMessage(text)

      this.$refs.input.value = ""
    },

    async handleExampleClick(e) {
      if (this.waitMessage) {
        return
      }

      if (this.waitWalletConnect) {
        return
      }

      const text = e.currentTarget.innerText

      await this.sendMessage(text)
    },

    isEnglish(text) {
      const russianRegex = /[а-яё]/i;
      return !russianRegex.test(text);
    },

    parseDuration(duration) {
      const regex = /(\d+(\.\d+)?)([h|m|s])/g;
      let match;
      let totalMilliseconds = 0;

      while ((match = regex.exec(duration)) !== null) {
        const value = parseFloat(match[1]);
        const unit = match[3];

        if (unit === 's') {
          totalMilliseconds += value * 1000; // 1 секунда = 1000 миллисекунд
        } else if (unit === 'm') {
          totalMilliseconds += value * 60 * 1000; // 1 минута = 60 секунд = 60,000 миллисекунд
        } else if (unit === 'h') {
          totalMilliseconds += value * 60 * 60 * 1000; // 1 час = 60 минут = 3,600,000 миллисекунд
        }
      }

      return totalMilliseconds;
    },

    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },

    async putBaltazar(message) {
      try {
        let isFinish = false
        let chatCompletion

        this.lang = this.isEnglish(message) ? 'en' : 'ru'

        while (!isFinish) {
          try {
            // console.log('Remove token')

            await this.baltazarLimiter.removeTokens(1)

            // const prompt = this.lang === 'en' ?
            //     `${ this.botPromptEn }\nAnswer to my question:\n${ message }` :
            //     `${ this.botPromptRu }\nОтветь на мой вопрос:\n${ message }`

            // console.log('Try to Request axios')

            // chatCompletion = await this.axiosInstance.post(
            //     `https://api.openai.com/v1/engines/${ this.botEngineName }/completions`,
            //
            //     {
            //       prompt,
            //       temperature: this.botTemperature,
            //       max_tokens: this.maxTokens,
            //     },
            //
            //     {
            //       headers: {
            //         'Authorization': `Bearer ${ this.openAIApiKey }`,
            //       },
            //     },
            // )

            chatCompletion = await this.axiosInstance.put(`https://api.roskainc.com/api/store/v1/users/proxy`, { message })

            isFinish = true

            // console.log('res:', chatCompletion)

            return {
              status: true,
              text: chatCompletion.data.text,
            }
          } catch (error) {
            // console.log('error:', error)

            let resetTokensMs = 0;

            if (error.code === 'ECONNRESET') {
              console.error('Proxy/Internet_connection Error:', error);
            } else if (error.response && error.response.status && (error.response.status == 429 || error.response.status >= 500)) {
              console.error('ChatGPT Request Sending Error:', error);

              if (error.response && error.response.headers) {
                const limitRequests = parseInt(error.response.headers['x-ratelimit-limit-requests']);

                if (limitRequests !== this.oldRequests) {
                  this.oldRequests = limitRequests
                  this.baltazarLimiter = await new RateLimiter({
                    tokensPerInterval: this.tokensPerInterval,
                    interval: 60000 / limitRequests,
                  })
                }

                resetTokensMs = this.parseDuration(error.response.headers['x-ratelimit-reset-tokens']);
              }
            } else  {
              console.error('Unknown Error:', error);
            }

            // console.log(`sleep ${ resetTokensMs || 60 }s`)

            await this.sleep(resetTokensMs || 60 * 1000)
          }
        }
      } catch (error) {
        console.error('ChatGPT Request Sending Error:', error);

        return {
          status: false,
          error: error,
        }
      }
    },

    async sendMessage(text) {
      if (!text) {
        return
      }

      this.waitMessage = true

      const response = await this.putBaltazar(text)

      if (!response.status) {
        const errorMessage = this.lang === 'en' ?
            "The service is temporarily unavailable. Try again later." :
            "Сервис временно недоступен. Попробуйте позднее."

        this.botMessages.push(errorMessage)

        this.waitMessage = false

        return
      }

      if (this.maxCountBotMessages) {
        if (this.botMessages.length >= this.maxCountBotMessages) {
          this.botMessages.shift()
        }
      }

      this.botMessages.push(response.text)

      setTimeout(() => {
        const messagesWrapper = this.$refs.botMessagesWrapperDesktop

        if (!messagesWrapper) {
          return
        }

        const messages = this.$refs.botMessagesWrapperDesktop.querySelectorAll(".test-message")

        messages[messages.length - 1].scrollIntoView()
      }, 50)

      this.waitMessage = false
    }
  },

  computed: {
    isProfessorAllow() {
      if (!this.trudTokenMinValue) {
        return true
      }

      if (!this.address) {
        return false
      }

      if (!this.balance) {
        return false
      }

      return this.balance >= this.trudTokenMinValue
    },
  },

  watch: {
    modalLoaded: {
      immediate: true,
      handler(newVal) {
        console.log('modalLoaded:', newVal)

        if (!newVal) {
          return
        }

        if (this.isProfessorAllow) {
          return
        }

        this.$router.push('/')
      },
    },
  },
})
</script>

<template>
  <div class="trud-room">
    <div class="image"></div>

    <div class="opacity"></div>

    <main>
      <header>
        <div class="logo-wrapper only-ds">
          <div class="logo"></div>

          <h1 class="title">TRUD</h1>
        </div>

        <div class="button" @click="handleBackButtonClick">
          <h4 class="title">BACK</h4>
        </div>
      </header>

      <div class="content">
        <div
            class="bot"
            :class="{
              active: botMessages.length || waitMessage
            }"
            ref="botMessagesWrapperMobile"
        >
          <div class="npc only-ds"></div>

          <div
              class="welcome-message only-ds"
              v-if="!botMessages.length && !waitMessage"
          >
            <h3 class="title">Hello and welcome to my digital office! What do you want to know?</h3>
          </div>

          <div
              class="bot-messages-wrapper"
              v-else
              ref="botMessagesWrapperDesktop"
          >
            <div
                class="test-message"
                v-for="(text, index) in botMessages"
                :key="`trud-room-bot-message-${ index }`"
            >
              <h3 v-html="text"></h3>
            </div>
          </div>

          <div
              class="welcome-bot only-mb"
              v-if="!botMessages.length && !waitMessage"
          >
            <div class="welcome-message">
              <h3 class="title">Hello and welcome to my digital office! What do you want to know?</h3>
            </div>

            <div class="npc"></div>
          </div>
        </div>

        <div
            class="user"
            :class="{
              active: (botMessages.length || waitMessage)
            }"
        >
          <div class="user-messages-wrapper">
            <div class="message" @click="handleExampleClick">
              <h4>Tell me about the project!</h4>
            </div>

            <div class="message" @click="handleExampleClick">
              <h4>What will happen to the price of TRUD?</h4>
            </div>
          </div>

          <div
              class="input"
              :class="{
                disabled: waitMessage || waitWalletConnect,
              }"
          >
            <template v-if="waitMessage || waitWalletConnect">
              <svg class="loader" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path fill="none" d="M0 0h24v24H0z"/>
                  <path d="M12 3a9 9 0 0 1 9 9h-2a7 7 0 0 0-7-7V3z" fill="#31E7A7"/>
                </g>
              </svg>

              <svg class="loader" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path fill="none" d="M0 0h24v24H0z"/>
                  <path d="M12 3a9 9 0 0 1 9 9h-2a7 7 0 0 0-7-7V3z" fill="#31E7A7"/>
                </g>
              </svg>

              <svg class="loader" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path fill="none" d="M0 0h24v24H0z"/>
                  <path d="M12 3a9 9 0 0 1 9 9h-2a7 7 0 0 0-7-7V3z" fill="#31E7A7"/>
                </g>
              </svg>
            </template>

            <input
                type="text"
                placeholder="Or write your question...."
                ref="input"
                :disabled="waitMessage || waitWalletConnect"
                @submit="handleSendInputButtonClick"
                @keyup="handleSendInputButtonKeyUp"
            >

            <svg class="button" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" @click="handleSendInputButtonClick">
              <path d="M15.0004 21.343C14.8746 21.3429 14.7519 21.3032 14.6498 21.2296C14.5477 21.1559 14.4714 21.052 14.4316 20.9326L11.5204 12.211L3.31723 9.30818C3.19839 9.26599 3.09587 9.18744 3.02422 9.08367C2.95258 8.9799 2.91545 8.85619 2.9181 8.73012C2.92076 8.60405 2.96307 8.48202 3.03903 8.38136C3.11498 8.2807 3.22072 8.20653 3.34123 8.16938L20.3068 2.94338C20.4116 2.91125 20.5231 2.9084 20.6293 2.93515C20.7355 2.96189 20.8324 3.01721 20.9095 3.0951C20.9865 3.173 21.0407 3.27049 21.0663 3.37701C21.0918 3.48354 21.0877 3.59502 21.0544 3.69938L15.5716 20.9242C15.5334 21.045 15.4578 21.1506 15.3559 21.2258C15.2539 21.301 15.1307 21.3421 15.004 21.343H15.0004ZM5.42803 8.78258L12.2008 11.1826C12.2867 11.2131 12.3646 11.2628 12.4284 11.3279C12.4922 11.3929 12.5404 11.4717 12.5692 11.5582L14.9872 18.811L19.5604 4.42778L5.42803 8.78258Z" fill="#EFF9F5"/>

              <path d="M11.9984 12.341C11.918 12.3414 11.8383 12.3254 11.7643 12.294C11.6902 12.2627 11.6233 12.2166 11.5676 12.1586C11.4569 12.0443 11.396 11.8907 11.3985 11.7316C11.401 11.5725 11.4666 11.4209 11.5808 11.3102L15.8216 7.20015C15.8782 7.145 15.9451 7.10152 16.0184 7.07222C16.0918 7.04291 16.1702 7.02834 16.2493 7.02935C16.3283 7.03035 16.4063 7.0469 16.4789 7.07806C16.5515 7.10922 16.6173 7.15438 16.6724 7.21095C16.7276 7.26753 16.771 7.33441 16.8003 7.40778C16.8297 7.48116 16.8442 7.55958 16.8432 7.63859C16.8422 7.71759 16.8257 7.79563 16.7945 7.86823C16.7633 7.94084 16.7182 8.0066 16.6616 8.06175L12.4196 12.173C12.3066 12.2819 12.1554 12.3422 11.9984 12.341Z" fill="#EFF9F5"/>

              <path d="M8.99841 21.0833C8.87497 21.0833 8.75453 21.0452 8.65352 20.9742C8.55251 20.9032 8.47585 20.8028 8.43399 20.6867C8.39213 20.5706 8.38711 20.4444 8.41961 20.3253C8.45211 20.2062 8.52056 20.1 8.61561 20.0213L11.6156 17.5385C11.7383 17.4383 11.8956 17.3908 12.0532 17.4062C12.2108 17.4215 12.3559 17.4986 12.457 17.6205C12.558 17.7424 12.6067 17.8994 12.5925 18.0571C12.5783 18.2148 12.5024 18.3605 12.3812 18.4625L9.38121 20.9453C9.27358 21.0344 9.13819 21.0832 8.99841 21.0833Z" fill="#EFF9F5"/>

              <path d="M3.51784 21.083C3.39912 21.0829 3.28307 21.0477 3.18439 20.9817C3.08571 20.9157 3.00882 20.8219 2.96347 20.7122C2.91812 20.6025 2.90634 20.4817 2.92962 20.3653C2.95289 20.2489 3.01019 20.142 3.09424 20.0582L8.57584 14.5754C8.6885 14.4627 8.84131 14.3994 9.00064 14.3994C9.15997 14.3994 9.31278 14.4627 9.42544 14.5754C9.53811 14.688 9.6014 14.8408 9.6014 15.0002C9.6014 15.1595 9.53811 15.3123 9.42544 15.425L3.94264 20.9066C3.88692 20.9625 3.82071 21.0068 3.74782 21.0371C3.67492 21.0674 3.59677 21.083 3.51784 21.083Z" fill="#EFF9F5"/>

              <path d="M3.51795 15.5999C3.40405 15.5999 3.29251 15.5674 3.19636 15.5064C3.10021 15.4453 3.02343 15.3582 2.97497 15.2551C2.92652 15.152 2.9084 15.0373 2.92274 14.9243C2.93708 14.8113 2.98328 14.7048 3.05595 14.6171L5.53875 11.6171C5.64069 11.4959 5.7864 11.4199 5.94411 11.4057C6.10183 11.3915 6.25876 11.4403 6.38069 11.5413C6.50263 11.6423 6.57968 11.7875 6.59505 11.9451C6.61042 12.1027 6.56286 12.26 6.46275 12.3827L3.97995 15.3827C3.92365 15.4506 3.85306 15.5053 3.7732 15.5429C3.69334 15.5804 3.60619 15.5999 3.51795 15.5999Z" fill="#EFF9F5"/>
            </svg>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped lang="sass">
@keyframes background1
  0%
    +opacity(0)

  100%
    +opacity(75)

@keyframes background2
  0%
    +opacity(0)

  82%
    +opacity(0)

  100%
    +opacity(100)

@keyframes background3
  0%
    +opacity(0)

  94%
    +opacity(0)

  100%
    +opacity(100)

@keyframes background4
  0%
    +opacity(0)

  94%
    +opacity(0)

  100%
    +opacity(100)

@keyframes loader
  0%
    transform: rotate(0)

  100%
    transform: rotate(360deg)

.trud-room
  width: 100%
  height: 100%
  position: fixed

  .image
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    +background-image-settings()
    background-image: url("/public/assets/images/templates/room/background.png")
    z-index: -10

  .opacity
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-color: black
    +opacity(0)
    animation: background1 1.5s ease-in forwards
    z-index: -5

  main
    width: 100%
    height: 100%
    z-index: 5
    display: flex
    flex-direction: column
    +opacity(0)
    animation: background2 3s ease-in forwards

    header
      width: 100%
      display: flex
      align-items: center
      justify-content: space-between

      @media (min-width: $desktopScreenMinWidth), (max-width: $mobileScreenMaxWidth) and (orientation: landscape)
        padding: 20px 100px

      @media (max-width: $mobileScreenMaxWidth) and (orientation: portrait), (max-width: $mobileScreenMaxWidth) and (orientation: landscape)
        padding: 20px
        justify-content: flex-end

      .logo-wrapper
        display: flex
        align-items: center
        gap: 10px

        .logo
          +background-image-settings()
          background-image: url("/public/assets/images/logos/trud.png")
          height: 50px
          width: 50px

        > .title
          color: $white1
          font-size: 30px
          line-height: 33px

      > .button
        border: 1px solid $green9
        +border-radius(999px)
        +user-select(none)

        @media (min-width: $desktopScreenMinWidth), (max-width: $mobileScreenMaxWidth) and (orientation: landscape)
          padding: 9px 15px

        @media (max-width: $mobileScreenMaxWidth) and (orientation: portrait)
          padding: 5px 9px

        &:hover
          cursor: pointer

        > .title
          color: $green9

          @media (min-width: $desktopScreenMinWidth), (max-width: $mobileScreenMaxWidth) and (orientation: landscape)
            font-size: 17px
            line-height: 12px

          @media (max-width: $mobileScreenMaxWidth) and (orientation: portrait)
            font-size: 15px
            line-height: 11px

    .content
      height: 100%
      display: flex
      justify-content: space-between

      @media (min-width: $desktopScreenMinWidth), (max-width: $mobileScreenMaxWidth) and (orientation: landscape)
        padding-right: calc(100% / 1920 * 177)
        padding-left: calc(100% / 1920 * 144)
        padding-bottom: calc(100% / 1920 * 81)
        gap: calc(100% / 1920 * 77)
        max-height: calc(100% - 90px)

      @media (max-width: $mobileScreenMaxWidth) and (orientation: portrait)
        padding: 4px 20px 32px
        gap: 13px
        flex-direction: column
        max-height: calc(100% - 63px)

      .bot
        @media (min-width: $desktopScreenMinWidth), (max-width: $mobileScreenMaxWidth) and (orientation: landscape)
          width: calc(100% / (1920 - 177 - 144) * (364 + 30 + 566))
          display: flex
          gap: calc(100% / (1920 - 177 - 144) * 30)
          position: relative

        @media (max-width: $mobileScreenMaxWidth) and (orientation: portrait)
          height: calc(100% / (539 + 100) * 327)
          overflow-y: auto

          &.active
            height: 100%
            flex: 1

        > .npc
          +background-image-settings()
          background-image: url("/public/assets/images/templates/main/roadmap/npc.png")
          width: calc(100% / (364 + 30 + 566) * 364)
          aspect-ratio: calc(364 / 448)
          align-self: flex-end
          pointer-events: none

        > .welcome-message
          animation: background3 5s ease-in forwards
          background-image: url("/public/assets/images/templates/room/Union-ds.png")
          background-size: 100% 100%
          padding: 25px 30px 60px
          align-self: center
          position: absolute
          width: 566px
          right: 0
          top: 0

          > .title
            font-size: 20px
            line-height: 140%
            color: $green4

        > .welcome-bot
          width: 100%
          height: 100%
          display: flex
          flex-direction: column
          align-items: flex-end
          padding: 4px
          gap: 20px

          > .welcome-message
            background-image: url("/public/assets/images/templates/room/Union-mb.png")
            background-size: 100% 100%
            padding: 16px 20px 50px
            align-self: center
            animation: background3 5s ease-in forwards

            > .title
              font-size: 17px
              line-height: 140%
              color: $green4

          > .npc
            +background-image-settings()
            background-size: contain
            background-image: url("/public/assets/images/templates/main/roadmap/npc.png")
            //width: calc(100% / (360 - 24 * 2) * 170)
            //max-width: 440px
            height: 100%
            aspect-ratio: calc(170 / 210)
            transform: scale(-1, 1)
            pointer-events: none
            margin-right: calc(100% / 312 * 36)

        .bot-messages-wrapper
          display: flex
          flex-direction: column
          width: 100%
          flex: 1
          z-index: 100
          +opacity(0)
          animation: background3 5s ease-in forwards
          gap: 30px

          @media (min-width: $desktopScreenMinWidth), (max-width: $mobileScreenMaxWidth) and (orientation: landscape)
            overflow: scroll

          @media (max-width: $mobileScreenMaxWidth) and (orientation: portrait)
            max-height: 100%

          &::-webkit-scrollbar
            width: 0

          .test-message
            width: 100%
            background: linear-gradient(-215deg, #DDD2BF 0%, #C2A876 100%)
            +border-radius(6px)
            position: relative
            padding: 25px 30px
            font-size: 20px
            line-height: 140%
            color: $green4

            .triangle
              position: absolute
              bottom: -34px
              left: 30px
              z-index: -100000

      .user
        width: 100%
        flex: 1
        align-self: center
        display: flex
        flex-direction: column
        +opacity(0)
        animation: background4 7s ease-in forwards

        @media (min-width: $desktopScreenMinWidth), (max-width: $mobileScreenMaxWidth) and (orientation: landscape)
          gap: 50px

        @media (max-width: $mobileScreenMaxWidth) and (orientation: portrait)
          gap: 30px
          justify-content: flex-end
          height: calc(100% / (539 + 100) * 200)

          &.active
            height: unset
            flex: unset

        .user-messages-wrapper
          display: flex
          flex-direction: column
          align-items: flex-start

          @media (min-width: $desktopScreenMinWidth), (max-width: $mobileScreenMaxWidth) and (orientation: landscape)
            gap: 30px

          @media (max-width: $mobileScreenMaxWidth) and (orientation: portrait)
            gap: 16px

          .message
            padding: 20px
            background-color: $green3
            +border-radius(6px)
            font-size: 17px
            line-height: 130%
            color: $green4

            @media (max-width: $mobileScreenMaxWidth) and (orientation: landscape)
              font-size: 13px
              line-height: 110%
              padding: 16px

            &:hover
              cursor: pointer
              +opacity(80)

        .input
          background-color: $green6
          padding: 20px
          +border-radius(6px)
          border: 1px solid $green3
          display: flex
          gap: 30px
          position: relative
          overflow: hidden

          @media (max-width: $mobileScreenMaxWidth) and (orientation: landscape)
            padding: 10px

          .loader
            width: 50px
            height: 50px
            position: absolute
            justify-self: center
            align-self: center
            left: calc(50% - 25px)
            transform: rotate(0)

            @media (max-width: $mobileScreenMaxWidth) and (orientation: landscape)
              width: 24px
              height: 24px

            &:nth-of-type(1)
              animation: loader 1.5s linear infinite

            &:nth-of-type(2)
              animation: loader 1s linear infinite

            &:nth-of-type(3)
              animation: loader 1.8s linear infinite

          &.disabled
            border: 1px solid $green5

            &::after
              position: absolute
              top: 0
              left: 0
              width: 100%
              height: 100%
              display: block
              content: ""
              background-color: rgba(0, 0, 0, 0.53)

          input
            background-color: transparent
            width: 100%
            flex: 1
            color: $green3
            font-family: Raleway, "Calibri Light", sans-serif
            font-weight: 600
            font-size: 24px
            display: flex

            @media (max-width: $mobileScreenMaxWidth) and (orientation: landscape)
              font-size: 16px

            &::placeholder
              color: $green9
              font-family: Raleway, "Calibri Light", sans-serif
              font-weight: 400
              font-size: 20px
              +user-select(none)

              @media (max-width: $mobileScreenMaxWidth) and (orientation: landscape)
                font-size: 10px

          > .button
            @media (max-width: $mobileScreenMaxWidth) and (orientation: landscape)
              width: 16px
              height: 16px

            &:hover
              cursor: pointer

  &.test
    *
      animation-duration: .01s !important
</style>