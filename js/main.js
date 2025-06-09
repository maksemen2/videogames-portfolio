const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.level > *').forEach(element => {
    element.classList.add('fade-in');
    observer.observe(element);
});

const burgerMenu = document.querySelector('.burger-menu');
const mainMenu = document.querySelector('.main-menu');

if (burgerMenu && mainMenu) {
    burgerMenu.addEventListener('click', () => {
        mainMenu.classList.toggle('active');
        burgerMenu.classList.toggle('active');
    });

    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', () => {
            mainMenu.classList.remove('active');
            burgerMenu.classList.remove('active');
        });
    });
}

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        const targetPage = item.dataset.page;
        navigateToPage(targetPage);
        
        document.querySelectorAll('.menu-item').forEach(menuItem => {
            menuItem.classList.remove('active');
        });
        item.classList.add('active');
    });
});

function navigateToPage(page) {
    const currentLevel = document.querySelector('.level');
    currentLevel.style.opacity = '0';
    
    setTimeout(() => {
        window.location.href = `${page}.html`;
    }, 500);
}

function animateBars() {
    const healthBar = document.querySelector('.health-bar .bar-fill');
    const expBar = document.querySelector('.exp-bar .bar-fill');
    
    let health = 100;
    let exp = 0;
    
    function updateBars() {
        const healthChange = (Math.random() * 2 - 1) * 0.5;
        health = Math.max(0, Math.min(100, health + healthChange));
        healthBar.style.width = `${health}%`;
        
        exp = (exp + 1) % 100;
        expBar.style.width = `${exp}%`;
        
        setTimeout(updateBars, 100);
    }
    
    updateBars();
}

document.addEventListener('DOMContentLoaded', () => {
    animateBars();
});

const menuItems = document.querySelectorAll('.menu-item');

function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

const gameTitle = document.querySelector('.game-title');
if (gameTitle) {
    typeWriter(gameTitle, gameTitle.textContent);
} 