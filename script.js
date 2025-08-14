document.addEventListener('DOMContentLoaded', () => {
    // Dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        darkModeToggle.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
    });

    // Language switcher
    window.changeLanguage = (lang) => {
        const contents = document.querySelectorAll('.content');
        contents.forEach(content => {
            const text = content.getAttribute(`data-lang-${lang}`);
            if (text) {
                content.textContent = text;
            }
        });
        document.documentElement.setAttribute('lang', lang);
    };

    // Initial language set to Sinhala
    changeLanguage('si');

    // Page navigation
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            document.querySelectorAll('main section').forEach(section => {
                section.classList.remove('active');
            });
            
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });

    // Set initial page as home
    document.getElementById('home').classList.add('active');
});
