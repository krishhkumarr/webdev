const themeToggle = document.getElementById('theme-toggle');
let isDark = true; 

themeToggle.addEventListener('click', () => {
    
    document.body.classList.toggle('light-mode');
    isDark = !isDark;

    themeToggle.textContent = isDark ? '🌞' : '🌙';
});