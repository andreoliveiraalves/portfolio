<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
    <aside class="sidebar">
        <div class="section">
            <h2 class="section-title">{{ t('skills.title') }}</h2>
            <div class="skills-grid">
                <div class="skill-category">
                    <h4>{{ t('skills.frontend') }}</h4>
                    <div class="skill-tags">
                        <span class="skill-tag">JavaScript</span>
                        <span class="skill-tag">TypeScript</span>
                        <span class="skill-tag">Vue.js</span>
                        <span class="skill-tag">React</span>
                        <span class="skill-tag">HTML5</span>
                        <span class="skill-tag">CSS3</span>
                        <span class="skill-tag">Bootstrap</span>
                        <span class="skill-tag">SEO</span>
                    </div>
                </div>

                <div class="skill-category">
                    <h4>{{ t('skills.backend') }}</h4>
                    <div class="skill-tags">
                        <span class="skill-tag">Node.js</span>
                        <span class="skill-tag">Express.js</span>
                        <span class="skill-tag">REST APIs</span>
                        <span class="skill-tag">Rust</span>
                    </div>
                </div>

                <div class="skill-category">
                    <h4>{{ t('skills.databases') }}</h4>
                    <div class="skill-tags">
                        <span class="skill-tag">PostgreSQL</span>
                        <span class="skill-tag">MariaDB</span>
                        <span class="skill-tag">MySQL</span>
                    </div>
                </div>

                <div class="skill-category">
                    <h4>{{ t('skills.tools') }}</h4>
                    <div class="skill-tags">
                        <span class="skill-tag">Git</span>
                        <span class="skill-tag">NPM</span>
                        <span class="skill-tag">Postman</span>
                        <span class="skill-tag">Swagger</span>
                        <span class="skill-tag">Jest</span>
                        <span class="skill-tag">ESLint</span>
                        <span class="skill-tag">Prettier</span>
                    </div>
                </div>

                <div class="skill-category">
                    <h4>{{ t('skills.design') }}</h4>
                    <div class="skill-tags">
                        <span class="skill-tag">Figma</span>
                        <span class="skill-tag">Adobe XD</span>
                        <span class="skill-tag">Adobe Illustrator</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">{{ t('languages.title') }}</h2>
            <div class="languages">
                <p>
                    <strong><span class="icon me-2">🌐</span>{{ t('languages.portuguese.label') }}</strong>
                    <span class="icon ms-2">{{ t('languages.portuguese.level') }}</span>
                </p>
                <p>
                    <strong><span class="icon me-2">🌐</span>{{ t('languages.english.label') }}</strong>
                    <span class="icon ms-2">{{ t('languages.english.level') }}</span>
                </p>
            </div>
        </div>
    </aside>
</template>

<style scoped>
.sidebar {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    padding: 50px 35px;
    border-right: 1.5px solid #2e4b91;
    position: relative;
}

.sidebar::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(135deg, #34345e, #0f3460);
    opacity: 0.7;
}

.section {
    margin-bottom: 40px;
    animation: fadeInLeft 0.8s ease-out;
}

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

.skills-grid {
    display: grid;
    gap: 20px;
}

.skill-category {
    background: white;
    padding: 20px;
    border-radius: 15px;
    border-left: 5px solid linear-gradient(135deg, #34345e, #0f3460);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.skill-category::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    transition: transform 0.5s ease;
}

.skill-category:hover::before {
    transform: translateX(0);
}

.skill-category:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    border-left-color: linear-gradient(135deg, #34345e, #0f3460);
}

.skill-category h4 {
    color: #2c3e50;
    margin-bottom: 12px;
    font-size: 1.1em;
    font-weight: 600;
    z-index: 1;
    position: relative;
}

.skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    z-index: 1;
    position: relative;
}

.skill-tag {
   background: linear-gradient(135deg, #34345e, #0f3460);
    color: white;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 0.85em;
    font-weight: 600;
    transition: all 0.3s ease;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(102, 126, 234, 0.3);
}

.skill-tag:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
    cursor: pointer;
    background: linear-gradient(135deg, #34345e, #667eea);
}

.languages {
  background: white;
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 25px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(102, 126, 234, 0.2);
}

.languages:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.languages p {
  margin-bottom: 8px;
  font-size: 1em;
  position: relative;
}

@media (max-width: 768px) {

    .sidebar,
    .content {
        padding: 30px 25px;
    }

    .section {
        animation: none !important;
        transform: none !important;
    }

    .skill-category, .languages {
        transition: none !important;
    }

    .sidebar::before{
        background: none
    }
}
</style>