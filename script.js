const toggleSwitch = document.getElementById('modeToggle');
const bodyElement = document.body;
const modeLabel = document.getElementById('modeLabel');

// Check if the user has a saved preference
const savedMode = localStorage.getItem('mode');
if (savedMode) {
    bodyElement.className = savedMode;
    toggleSwitch.checked = savedMode === 'dark-mode';
}

toggleSwitch.addEventListener('change', function() {
    if (this.checked) {
        bodyElement.className = 'dark-mode';
        localStorage.setItem('mode', 'dark-mode');
    } else {
        bodyElement.className = 'light-mode';
        localStorage.setItem('mode', 'light-mode');
    }
});

const svgIcon = document.querySelector('.svg-icon');

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  svgIcon.classList.add('dark-mode');
} else {
  svgIcon.classList.remove('dark-mode');
}
