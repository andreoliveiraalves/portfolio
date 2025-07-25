<template>
    <div class="project">
        <a :href="siteLink" target="_blank" rel="noopener">
            <img :src="image" :alt="title" class="project-image" />
        </a>

        <div class="project-content">
            <h3 class="project-title">{{ title }}</h3>
            <p class="project-description mt-3">{{ description }}</p>

            <a :href="github" class="github-link" target="_blank" rel="noopener" aria-label="GitHub">
                <i class="fa fa-github" style="font-size:36px"></i>
            </a>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    description: String,
    github: String,
    image: String,
    siteLink: String
})
</script>

<style scoped>
.project {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.project-image {
    width: 100%;
    max-width: 100%;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    margin-bottom: 20px;
    cursor: pointer;
}

.project-image:hover {
    transform: scale(1.03);
}

.project-content {
    width: 100%;
}

.project-title {
    font-size: 1.3em;
    font-weight: bold;
    margin-bottom: 8px;
    background: linear-gradient(135deg, #2c3e50, #667eea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.project-description {
    font-size: 1em;
    color: #555;
    margin-bottom: 15px;
}

.fa-github {
    color: #2c3e50;
}

.fa-github:hover {
    color: #667eea;
}
</style>
