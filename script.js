@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

:root {
    --light-bg: #f4f7f6;
    --light-text: #2c3e50;
    --light-primary: #3498db;
    --light-accent: #e74c3c;
    --light-card-bg: #ffffff;
    --light-border: #ecf0f1;

    --dark-bg: #1a202c;
    --dark-text: #e2e8f0;
    --dark-primary: #4299e1;
    --dark-accent: #f56565;
    --dark-card-bg: #2d3748;
    --dark-border: #4a5568;
}

body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    background-color: var(--light-bg);
    color: var(--light-text);
    transition: background-color 0.4s, color 0.4s;
}

body.dark-mode {
    background-color: var(--dark-bg);
    color: var(--dark-text);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header and Navigation */
.header {
    background-color: var(--light-card-bg);
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
}
.dark-mode .header {
    background-color: var(--dark-card-bg);
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.5);
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
}

.logo {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 600;
}
.logo img {
    height: 40px;
    margin-right: 10px;
}

.nav-links {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
}

.nav-link {
    text-decoration: none;
    color: var(--light-text);
    padding: 10px 15px;
    font-weight: 400;
    transition: color 0.3s, background-color 0.3s;
    position: relative;
}
.dark-mode .nav-link {
    color: var(--dark-text);
}

.nav-link:hover {
    color: var(--light-primary);
}
.dark-mode .nav-link:hover {
    color: var(--dark-primary);
}

.navbar-controls {
    display: flex;
    align-items: center;
}

.control-btn, .lang-btn {
    background-color: transparent;
    border: none;
    color: var(--light-text);
    cursor: pointer;
    font-size: 1.2rem;
    padding: 8px 12px;
    border-radius: 5px;
    transition: background-color 0.3s;
}
.dark-mode .control-btn, .dark-mode .lang-btn {
    color: var(--dark-text);
}

.control-btn:hover, .lang-btn:hover {
    background-color: var(--light-border);
}
.dark-mode .control-btn:hover, .dark-mode .lang-btn:hover {
    background-color: var(--dark-border);
}

.lang-switcher {
    margin-left: 15px;
}
.lang-btn.active {
    background-color: var(--light-primary);
    color: white;
}
.dark-mode .lang-btn.active {
    background-color: var(--dark-primary);
}


/* Main Content */
.main-content {
    padding-top: 80px; /* Adjust based on header height */
}

.page-section {
    min-height: 100vh;
    display: none;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    padding: 60px 0;
    background-size: cover;
    background-position: center;
}
.page-section.active {
    display: flex;
}

.page-section .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
}

.dark-mode .page-section .overlay {
    background: rgba(0, 0, 0, 0.8);
}


.page-section .container {
    position: relative;
    z-index: 2;
}

.content-box {
    background-color: rgba(255, 255, 255, 0.9);
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
    max-width: 800px;
}

.dark-mode .content-box {
    background-color: rgba(45, 55, 72, 0.9);
}

.section-title {
    font-size: 2.5rem;
    color: var(--light-primary);
    margin-bottom: 15px;
}
.dark-mode .section-title {
    color: var(--dark-primary);
}

.section-text {
    font-size: 1.1rem;
    line-height: 1.6;
    color: var(--light-text);
}
.dark-mode .section-text {
    color: var(--dark-text);
}

@media (max-width: 768px) {
    .navbar {
        flex-direction: column;
        text-align: center;
    }
    .nav-links {
        margin-top: 15px;
        flex-wrap: wrap;
        justify-content: center;
    }
    .logo {
        margin-bottom: 10px;
    }
    .nav-link {
        padding: 5px 10px;
    }
    .page-section .content-box {
        padding: 20px;
    }
    .section-title {
        font-size: 2rem;
    }
}
