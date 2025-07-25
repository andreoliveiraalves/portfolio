<script>
import { useI18n } from 'vue-i18n'
import Project from './Project.vue'

export default {
    components: {
        Project
    },
    setup() {
        const { t } = useI18n()
        return { t }
    }
}
</script>

<template>
    <div>
        <h2 class="section-title">{{ t('projects.title') }}</h2>

        <div class="project-item">
            <Project :title="t('projects.projects[0].title')"
                :description="t('projects.projects[0].description')"
                image="/screenshots/currency-conversor-screenshot.png"
                siteLink="https://minimalist-currency-converter.netlify.app/"
                github="https://github.com/andreoliveiraalves/vue-currency-selector" />
        </div>
    </div>
</template>

<style scoped>
.section-title {
    font-size: 1.5em;
    font-weight: 700;
    color: #2c3e50;
    margin-bottom: 25px;
    padding-bottom: 12px;
    border-bottom: 3px solid transparent;
    background: linear-gradient(135deg, #34345e, #0f3460) bottom;
    background-size: 100% 3px;
    background-repeat: no-repeat;
    position: relative;
    transition: all 0.3s ease;
}

.section-title:hover {
    background-size: 100% 3px;
}

.section-title:hover::after {
    width: 80px;
}

.project-item {
    margin-bottom: 35px;
    padding: 25px;
    background: linear-gradient(135deg, #f8f9fa, #fff);
    border-radius: 15px;
    position: relative;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
    transition: all 0.4s ease;
    animation: slideInRight 0.8s ease-out;
}

.project-item:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.project-item::before {
    content: "";
    position: absolute;
    left: -10px;
    top: 30px;
    width: 12px;
    height: 12px;
    background: linear-gradient(135deg, #34345e, #0f3460) bottom;
    border-radius: 50%;
    box-shadow: 0 0 0 4px white, 0 0 0 6px #667eea;
    animation: pulse 2s infinite;
}

@media (max-width: 768px) {

    .project-item,
    .project-item::before {
        animation: none !important;
        transform: none !important;
    }

    .achievements li {
        transition: none !important;
    }
}
</style>