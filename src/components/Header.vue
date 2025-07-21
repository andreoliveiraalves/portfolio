<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
    <header class="header text-white text-center py-5 px-4 position-relative overflow-hidden">
        <div class="name-wrapper">
            <h1 class="name">{{ t('header.name') }}</h1>
        </div>
        <p class="title">{{ t('header.title') }}</p>

        <div class="contact-info d-flex justify-content-center flex-wrap gap-3 mt-5">
            <div class="contact-item">
                <span class="icon">📍</span>
                <span>{{ t('header.contacts.location') }}</span>
            </div>
            <div class="contact-item">
                <span class="icon">📧</span>
                <a href="mailto:andreoliveiraalves1996vc@gmail.com" :aria-label="t('header.contacts.email')">
                    {{ t('header.contacts.email') }}
                </a>
            </div>
            <div class="contact-item">
                <span class="icon">📱</span>
                <a href="tel:+351918072504" :aria-label="t('header.contacts.call')">
                    {{ t('header.contacts.call') }}
                </a>
            </div>
        </div>

        <div class="social-links d-flex justify-content-center flex-wrap gap-3 mt-4">
            <a href="https://www.linkedin.com/in/andre-alves-web-dev/" class="social-link" target="_blank" rel="noopener noreferrer">
                <span class="icon">💼</span>
                <span>{{ t('header.social.linkedin') }}</span>
            </a>
            <a href="https://github.com/andreoliveiraalves" class="social-link" target="_blank" rel="noopener noreferrer">
                <span class="icon">💻</span>
                <span>{{ t('header.social.github') }}</span>
            </a>
            <a href="https://www.codewars.com/users/andreoliveiraalves" class="social-link" target="_blank" rel="noopener noreferrer">
                <span class="icon">⚔️</span>
                <span>{{ t('header.social.codewars') }}</span>
            </a>
        </div>
    </header>
</template>

<style scoped>
.header {
    background: linear-gradient(135deg, #1a1a2e, #0f3460);
}

/* Nome com cor sólida, sem brilho, sem gradiente, sem reticências, não quebra linha */
.name {
    font-size: 3rem;
    font-weight: 800;
    color: #f8f9fa;
    /* branco quase puro, acessível */
    white-space: nowrap;
    /* sem quebra */
    overflow: visible;
    /* deixa transbordar se for preciso, sem cortar */
    text-shadow: none;
    animation: fadeInUp 1s ease-out;
}

/* Título mantém igual */
.title {
    font-size: 1.35rem;
    font-weight: 300;
    line-height: 1.4;
    margin-top: 0.5rem;
    animation: fadeInUp 1s ease-out 0.2s both;
    color: #e0e0e0;
    font-style: italic;
    letter-spacing: 0.5px;
}

.title::after {
    content: '';
    display: block;
    width: 60px;
    height: 2px;
    background: #fff;
    margin: 0.5rem auto 0;
    animation: slideIn 1s ease-out;
}

/* Contact items e social links: tamanhos iguais no desktop */

.contact-item,
.social-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    /* MESMO GAP em ambos */
    padding: 12px 20px;
    /* MESMO padding */
    border-radius: 25px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    font-size: 1rem;
    color: white;
    transition: transform 0.3s ease, background-color 0.3s ease;
    min-width: 200px;
    /* MESMO min/max width */
    max-width: 200px;
    justify-content: center;
    /* MESMO justify */
    background: rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    /* incluir padding na largura */
}

.contact-item:hover,
.social-link:hover {
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 0.25);
    cursor: pointer;
}

/* Contact item links */
.contact-item a {
    color: white;
    text-decoration: none;
    cursor: pointer;
    word-break: break-word;

}

.contact-item.email {
    font-size: 0.85rem;
}

/* Social link específicos */
.social-link {
    font-weight: 600;
    justify-content: center;
    /* centro os itens no botão */
    text-decoration: none;
}

.social-link .icon,
.contact-item .icon {
    font-size: 1.3em;
    min-width: 1.3em;
    display: inline-block;
    text-align: center;
}

/* Desktop: container flex sem wrap e com espaçamento */
@media (min-width: 769px) {

    .contact-info,
    .social-links {
        flex-wrap: nowrap;
        justify-content: center;
        gap: 2rem;
        width: auto;
    }
}

/* Mobile */
@media (max-width: 768px) {
    .name {
        font-size: 2.2rem;
        white-space: nowrap;
        overflow: visible;
    }

    .title {
        font-size: 1.1rem;
    }


    .contact-info,
    .social-links {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        width: 100%;
    }

    .contact-item,
    .social-link {
        width: 100%;
        max-width: 280px;
        justify-content: center;
    }
}

/* Animações */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideIn {
    from {
        width: 0;
    }

    to {
        width: 60px;
    }
}
</style>
