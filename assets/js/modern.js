/* ==================== MODERN PORTFOLIO JS ==================== */

// ===== Navigation Menu Toggle (Mobile) =====
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav__link');

if (navToggle) {
    navToggle.addEventListener('click', () => navMenu.classList.add('show-menu'));
}

if (navClose) {
    navClose.addEventListener('click', () => navMenu.classList.remove('show-menu'));
}

// Close menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => navMenu.classList.remove('show-menu'));
});

// ===== Header Scroll Effect =====
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ===== Active Navigation Link on Scroll =====
const sections = document.querySelectorAll('section[id]');

function updateActiveLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const link = document.querySelector(`.nav__link[href="#${sectionId}"]`);

        if (link) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                link.classList.add('active-link');
            } else {
                link.classList.remove('active-link');
            }
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// ===== Theme Toggle =====
const themeToggle = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    document.body.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') {
        themeToggle.classList.replace('uil-moon', 'uil-sun');
    }
}

themeToggle.addEventListener('click', () => {
    const isDark = document.body.getAttribute('data-theme') === 'dark';

    if (isDark) {
        document.body.removeAttribute('data-theme');
        themeToggle.classList.replace('uil-sun', 'uil-moon');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.setAttribute('data-theme', 'dark');
        themeToggle.classList.replace('uil-moon', 'uil-sun');
        localStorage.setItem('theme', 'dark');
    }
});

// ===== Qualification Tabs =====
const qualTabs = document.querySelectorAll('.qual__tab');
const timelines = document.querySelectorAll('.timeline');

qualTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        qualTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const target = tab.getAttribute('data-tab');
        timelines.forEach(tl => {
            tl.classList.remove('active');
            if (tl.id === target) {
                tl.classList.add('active');
            }
        });
    });
});

// ===== Scroll Reveal Animation =====
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            el.classList.add('visible');
        }
    });
}

// Add reveal class to animatable elements
document.addEventListener('DOMContentLoaded', () => {
    const animatables = document.querySelectorAll(
        '.skills__card, .project__card, .timeline__item, .contact__card, .about__grid, .about__stat'
    );
    animatables.forEach(el => el.classList.add('reveal'));

    // Trigger once on load
    revealOnScroll();
});

window.addEventListener('scroll', revealOnScroll);

// ===== Skill Bar Animation =====
function animateSkillBars() {
    const bars = document.querySelectorAll('.skill__bar span');

    bars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight && !bar.classList.contains('animated')) {
            bar.classList.add('animated');
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        }
    });
}

window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);
