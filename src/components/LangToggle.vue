<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

function toggleLang() {
    locale.value = locale.value === 'pt' ? 'en' : 'pt'
}
</script>

<template>
    <button @click="toggleLang" class="btn lang-toggle fw-bold position-fixed top-0 end-0 m-3"
        aria-label="Toggle language">
        {{ locale === 'pt' ? 'EN' : 'PT' }}
    </button>
</template>

<style scoped>
.lang-toggle {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 100;
    padding: 10px 15px;
    font-weight: 700;
    font-size: 0.9em;
    color: #fff;
    background: linear-gradient(135deg, #1a1a2e, #0f3460);
    border-radius: 8px;
    cursor: pointer;
    backdrop-filter: blur(8px);
    transition: all 0.3s ease;
}

.lang-toggle:hover {
    background: linear-gradient(135deg, #1a1a2e, #0f3460);
    transform: scale(1.05);
}
</style>