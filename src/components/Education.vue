<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
    <div>
        <h2 class="section-title">{{ t('education.title') }}</h2>

        <div class="education-item">
            <h3 class="job-title">{{ t('education.degree') }}</h3>
            <p class="company-period"><a href="https://www.esmad.ipp.pt/" class="company-link" target="_blank">ESMAD</a>
                {{ t('education.institution') }}</p>
            <ul class="achievements">
                <li>{{ t('education.projects') }}</li>
                <li>{{ t('education.apiDev') }}</li>
                <li>{{ t('education.internship') }}</li>
            </ul>
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

.education-item {
    margin-bottom: 35px;
    padding: 25px;
    background: linear-gradient(135deg, #f8f9fa, #fff);
    border-radius: 15px;
    position: relative;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
    transition: all 0.4s ease;
    animation: slideInRight 0.8s ease-out;
}

.education-item:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.education-item::before {
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

.job-title {
    font-size: 1.3em;
    font-weight: 700;
    color: #2c3e50;
    margin-bottom: 8px;
    background: linear-gradient(135deg, #2c3e50, #667eea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.company-period {
    color: #666;
    font-size: 1em;
    margin-bottom: 15px;
    font-style: italic;
    font-weight: 500;
}

.achievements li {
    margin-bottom: 12px;
    position: relative;
    color: #555;
    line-height: 1.6;
    transition: all 0.3s ease;
}

.achievements li:hover {
    color: #333;
    transform: translateX(5px);
}

.achievements li::before {
    position: absolute;
    left: 0;
    color: #2c3e50;
    font-weight: bold;
    font-size: 0.8em;
    transition: all 0.3s ease;
}

.achievements li:hover::before {
    color: #2c3e50;
    transform: scale(1.2);
}

.company-link {
    color: #2c3e50;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    position: relative;
}

.company-link::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    color: #2c3e50;
    transition: width 0.3s ease;
    text-decoration: none;
}

.company-link:hover::after {
    width: 100%;
    text-decoration: none;
}

.company-link:hover {
    color: #764ba2;
    transform: translateY(-1px);
    text-decoration: none;
}

@media (max-width: 768px) {

    .education-item,
    .education-item::before {
        animation: none !important;
        transform: none !important;
    }

    .achievements li {
        transition: none !important;
    }
}
</style>