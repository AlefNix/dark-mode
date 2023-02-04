const changThemebtn = document.querySelector('#change-theme');

function toggleDarkMode() {
    document.body.classList.toggle('dark');
};

function loadTheme() {
    const darkMode = localStorage.getItem('theme');

    if(darkMode) {
        toggleDarkMode();
    }
}

loadTheme();

changThemebtn.addEventListener('change', function() {
    toggleDarkMode();

    localStorage.removeItem('theme');

    if(document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    }
});

