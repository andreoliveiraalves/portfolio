<template>
    <div>
        <a :href="link" target="_blank" rel="noopener" class="github-link" aria-label="Ver repositório no GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white"
                class="github-icon">
                <path
                    d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.95c.58.1.79-.25.79-.56v-2.03c-3.2.7-3.87-1.54-3.87-1.54a3.05 3.05 0 0 0-1.28-1.69c-1.05-.72.08-.71.08-.71a2.43 2.43 0 0 1 1.77 1.19 2.46 2.46 0 0 0 3.36.96 2.47 2.47 0 0 1 .73-1.54c-2.55-.29-5.23-1.27-5.23-5.63a4.41 4.41 0 0 1 1.17-3.05 4.1 4.1 0 0 1 .11-3.01s.96-.31 3.14 1.17a10.9 10.9 0 0 1 5.72 0C17.9 5.09 18.86 5.4 18.86 5.4a4.1 4.1 0 0 1 .11 3.01 4.41 4.41 0 0 1 1.17 3.05c0 4.37-2.69 5.34-5.25 5.62a2.77 2.77 0 0 1 .79 2.15v3.18c0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
            </svg>
        </a>
    </div>
</template>

<script>
export default {
    name: 'GithubLink',
    props: {
        link: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.github-link {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    z-index: 999;
    opacity: 0.8;
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.github-link:hover {
    opacity: 1;
    transform: scale(1.1);
}

.github-icon {
    width: 32px;
    height: 32px;
    fill: #ffffff;
    filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.5));
}
</style>
