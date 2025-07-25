<script setup>
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import { watch } from 'vue'
import Background from './components/Background.vue'
import LangToggle from './components/LangToggle.vue'
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import Summary from './components/Summary.vue'
import Experience from './components/Experience.vue'
import Education from './components/Education.vue'
import GithubLink from './components/GithubLink.vue'
import Projects from './components/Projects.vue'

const { t, locale } = useI18n()

// Função para atualizar head
function updateHead() {
  useHead({
    title: t('meta.title'),
    meta: [
      { name: 'description', content: t('meta.description') },
      { name: 'keywords', content: t('meta.keywords') },
      { property: 'og:title', content: t('meta.title') },
      { property: 'og:description', content: t('meta.description') },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://andreoliveiraalves.dev/' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: t('meta.title') },
      { name: 'twitter:description', content: t('meta.description') }
    ]
  })
}

// Chamada inicial
updateHead()

// Atualiza head sempre que o idioma muda
watch(locale, () => {
  updateHead()
})
</script>

<template>
  <div>
    <Background />
    <LangToggle />
    <div class="cv-container">
      <Header />
      <div class="main-content">
        <Sidebar />
        <div class="content">
          <Summary />
          <div class="section">
            <Experience />
          </div>
          <div class="section">
            <Education />
          </div>
          <div class="section">
            <Projects />
          </div>
        </div>
      </div>
    </div>
    <GithubLink link="https://github.com/andreoliveiraalves/portfolio" />
  </div>
</template>

<style scoped>
.cv-container {
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 4vh;
  margin-bottom: 4vh;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 0;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: relative;
  z-index: 10;
  animation: slideUp 1s ease-out;
}

.cv-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(90deg, #667eea, #764ba2, #5b5eb1, #f5576c);
  background-size: 400% 400%;
  animation: gradientShift 3s ease infinite;
}

.main-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 0;
  min-height: 700px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.content {
  padding: 50px 40px;
  padding-bottom: 10px;
}

.section {
  margin-bottom: 40px;
  animation: fadeInLeft 0.8s ease-out;
}

@media (max-width: 768px) {
  .cv-container {
    animation: none !important;
    margin-top: 12vh;
    max-width: 93%;
  }

  .main-content {
    grid-template-columns: 1fr;
  }

  .content {
    padding: 30px 25px;
  }

  .section {
    animation: none !important;
    transform: none !important;
  }
}
</style>