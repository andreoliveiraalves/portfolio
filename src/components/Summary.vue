<template>
    <div class="summary">{{ t('summary.summary') }}</div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.summary {
    background: linear-gradient(135deg, #34345e, #0f3460);
    color: white;
    padding: 20px;
    border-radius: 20px;
    margin-bottom: 35px;
    box-shadow: 0 2px 5px rgba(102, 126, 234, 0.3);
    position: relative;
    overflow: hidden;
    animation: slideInRight 1s ease-out;
    font-size: 0.95rem
}

.summary::before {
    content: "";
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;   
    animation: rotate 20s linear infinite;
}

.summary p {
    font-size: 1.15em;
    line-height: 1.8;
    text-align: center;
    z-index: 1;
    position: relative;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {

    .summary,
    .summary::before {
        animation: none !important;
        transform: none !important;
    }
}
</style>