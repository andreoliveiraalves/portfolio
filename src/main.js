import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import { createHead } from '@vueuse/head'

import pt from './locales/pt.json'
import en from './locales/en.json'

const i18n = createI18n({
  legacy: false,
  locale: 'pt',
  fallbackLocale: 'en',
  messages: { pt, en }
})

const app = createApp(App)
const head = createHead()

app.use(i18n)
app.use(head)
app.mount('#app')