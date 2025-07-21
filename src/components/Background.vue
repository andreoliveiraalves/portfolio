<template>
  <div class="background-wrapper">
    <div v-if="animationsEnabled" class="floating-shapes">
      <!-- Original floating circles -->
      <div class="shape circle"></div>
      <div class="shape circle"></div>
      <div class="shape circle"></div>
      <div class="shape circle"></div>

      <!-- New floating elements -->
      <div class="shape triangle"></div>
      <div class="shape triangle"></div>
      <div class="shape square"></div>
      <div class="shape square"></div>
      <div class="shape hexagon"></div>
      <div class="shape hexagon"></div>

      <!-- Diagonal drifters -->
      <div class="diagonal-drift"></div>
      <div class="diagonal-drift"></div>
      <div class="diagonal-drift"></div>

      <!-- Sparkle effects -->
      <div class="sparkle"></div>
      <div class="sparkle"></div>
      <div class="sparkle"></div>
      <div class="sparkle"></div>
      <div class="sparkle"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animationsEnabled: false,
      reduceMotion: false,
    };
  },
  mounted() {
    // Detect motion preferences
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.reduceMotion = mediaQuery.matches;

    // Lazy-enable effects after a delay if no reduced motion and not on mobile
    if (!this.reduceMotion && window.innerWidth > 768) {
      setTimeout(() => {
        this.animationsEnabled = true;
      }, 1000); // 1-second delay for desktop
    }
  }
};
</script>

<style scoped>
/* Background animation */
.background-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(-45deg, #0b1237, #14294e, #203a6f, #2e4b91);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
  z-index: -1;
  overflow: hidden;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Lazy-load animation on desktop */
.floating-shapes {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

/* Shape animations */
.shape {
  position: absolute;
  opacity: 0;
  transform: translateY(calc(100vh + 150px));
}

.shape.circle {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  animation: float 20s infinite linear;
}

.shape.triangle {
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 45px solid rgba(255, 255, 255, 0.08);
  animation: float 25s infinite linear;
}

.shape.square {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  animation: float 18s infinite linear;
}

.shape.hexagon {
  width: 60px;
  height: 34px;
  background: rgba(255, 255, 255, 0.05);
  position: relative;
  animation: float 22s infinite linear;
}

.shape.hexagon::before,
.shape.hexagon::after {
  content: '';
  position: absolute;
  width: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
}

.shape.hexagon::before {
  bottom: 100%;
  border-bottom: 17px solid rgba(255, 255, 255, 0.05);
}

.shape.hexagon::after {
  top: 100%;
  border-top: 17px solid rgba(255, 255, 255, 0.05);
}

/* Floating shape positions */
.shape.circle:nth-child(1) {
  width: 80px;
  height: 80px;
  left: 10%;
  animation-delay: 0s;
}

.shape.circle:nth-child(2) {
  width: 120px;
  height: 120px;
  left: 20%;
  animation-delay: 2s;
}

.shape.circle:nth-child(3) {
  width: 60px;
  height: 60px;
  left: 70%;
  animation-delay: 4s;
}

.shape.circle:nth-child(4) {
  width: 100px;
  height: 100px;
  left: 80%;
  animation-delay: 6s;
}

.shape.triangle:nth-child(5) {
  left: 15%;
  animation-delay: 1s;
}

.shape.triangle:nth-child(6) {
  left: 85%;
  animation-delay: 7s;
}

.shape.square:nth-child(7) {
  width: 50px;
  height: 50px;
  left: 5%;
  animation-delay: 3s;
}

.shape.square:nth-child(8) {
  width: 70px;
  height: 70px;
  left: 90%;
  animation-delay: 9s;
}

.shape.hexagon:nth-child(9) {
  left: 40%;
  animation-delay: 5s;
}

.shape.hexagon:nth-child(10) {
  left: 60%;
  animation-delay: 11s;
}

.pulse-orb:nth-child(13) {
  left: 50%;
  top: 80%;
  animation-delay: 4s;
}

/* Diagonal drifters */
.diagonal-drift {
  position: absolute;
  width: 40px;
  height: 40px;
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  border-radius: 50%;
  animation: diagonalDrift 15s infinite linear;
  opacity: 0;
}

.diagonal-drift:nth-child(14) {
  left: 0%;
  top: 100%;
  animation-delay: 0s;
}

.diagonal-drift:nth-child(15) {
  left: 10%;
  top: 110%;
  animation-delay: 5s;
}

.diagonal-drift:nth-child(16) {
  left: 20%;
  top: 120%;
  animation-delay: 10s;
}

/* Sparkles */
.sparkle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  animation: sparkle 3s ease-in-out infinite;
  opacity: 0;
}

.sparkle:nth-child(17) {
  left: 20%;
  top: 20%;
  animation-delay: 0s;
}

.sparkle:nth-child(18) {
  left: 80%;
  top: 40%;
  animation-delay: 1s;
}

.sparkle:nth-child(19) {
  left: 60%;
  top: 70%;
  animation-delay: 2s;
}

.sparkle:nth-child(20) {
  left: 30%;
  top: 50%;
  animation-delay: 1.5s;
}

.sparkle:nth-child(21) {
  left: 90%;
  top: 80%;
  animation-delay: 2.5s;
}

/* Animation Keyframes */
@keyframes float {
  0% {
    transform: translateY(calc(100vh + 150px)) rotate(0deg);
    opacity: 0;
  }
  1% {
    opacity: 1;
  }
  99% {
    opacity: 1;
  }
  100% {
    transform: translateY(-150px) rotate(360deg);
    opacity: 0;
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 0;
    transform: scale(0.8);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.2);
  }
}

@keyframes diagonalDrift {
  0% {
    transform: translate(0, 0) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.8;
  }
  90% {
    opacity: 0.8;
  }
  100% {
    transform: translate(100vw, -100vh) rotate(360deg);
    opacity: 0;
  }
}

@keyframes sparkle {
  0%, 100% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .floating-shapes {
    display: none;
  }

  .background-wrapper {
    animation: none !important;
    background: linear-gradient(#667eea, #764ba2);
    background-size: cover;
  }

  .pulse-orb, .diagonal-drift, .sparkle {
    display: none;
  }
}

@media print {
  .background-wrapper {
    background: white;
  }

  .floating-shapes {
    display: none;
  }

  * {
    animation: none !important;
  }
}
</style>
