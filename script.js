document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle (Dark/Light Mode)
    const themeToggleBtn = document.getElementById('theme-toggle');
    const icon = themeToggleBtn.querySelector('i');
    const body = document.body;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark-mode') {
        body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light-mode');
        }
    });

    // Language switcher
    const langButtons = document.querySelectorAll('.lang-btn');
    const changeLanguage = (lang) => {
        const elements = document.querySelectorAll('[data-lang-si]');
        elements.forEach(el => {
            const text = el.getAttribute(`data-lang-${lang}`);
            if (text) {
                el.textContent = text;
            }
        });
        document.documentElement.lang = lang;

        langButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelector(`.lang-btn[data-lang="${lang}"]`).classList.add('active');
    };

    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });

    // Initial language set to Sinhala
    changeLanguage('si');

    // Page navigation
    const navLinks = document.querySelectorAll('.nav-link');
    const pageSections = document.querySelectorAll('.page-section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            
            pageSections.forEach(section => {
                section.classList.remove('active');
            });
            
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });

    // Initial page load
    document.querySelector('.page-section.active').style.display = 'flex';
});
