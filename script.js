function playSound(e) {
    const keyCode = e.keyCode || parseInt(this.getAttribute('data-key'));
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.drum[data-key="${keyCode}"]`);

    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.drum');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
keys.forEach(key => key.addEventListener('click', playSound)); // Added click support

window.addEventListener('keydown', playSound);

// Theme Switcher
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('neon-theme');
    const isNeon = body.classList.contains('neon-theme');
    themeToggle.textContent = isNeon ? 'Theme: Neon' : 'Theme: Dark';
});