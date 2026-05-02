/**
 * FAITHBASE - Main Application Module
 * Handles routing, page navigation, and global state
 */

const App = (function() {
    // Private state
    let currentPage = 'quiz';
    let eventListeners = [];

    // DOM Elements
    let pageContainer;
    let navLinks;

    // Initialize application
    function init() {
        pageContainer = document.getElementById('page-container');
        navLinks = document.querySelectorAll('.nav-link');
        
        bindEvents();
        loadPage(currentPage);
    }

    // Bind all event listeners
    function bindEvents() {
        navLinks.forEach(link => {
            const handler = () => {
                const page = link.dataset.page;
                if (page) navigateTo(page);
            };
            link.addEventListener('click', handler);
            eventListeners.push({ element: link, event: 'click', handler });
        });

        // Footer navigation
        document.querySelectorAll('footer a[data-page]').forEach(link => {
            const handler = (e) => {
                e.preventDefault();
                const page = link.dataset.page;
                if (page) navigateTo(page);
            };
            link.addEventListener('click', handler);
            eventListeners.push({ element: link, event: 'click', handler });
        });

        // Reset all data button
        const resetBtn = document.getElementById('resetAllData');
        if (resetBtn) {
            const handler = () => resetAllData();
            resetBtn.addEventListener('click', handler);
            eventListeners.push({ element: resetBtn, event: 'click', handler });
        }

        // Mobile menu
        const mobileBtn = document.getElementById('mobileMenuBtn');
        const mainNav = document.querySelector('.main-nav');
        if (mobileBtn && mainNav) {
            const handler = () => {
                mainNav.classList.toggle('show');
            };
            mobileBtn.addEventListener('click', handler);
            eventListeners.push({ element: mobileBtn, event: 'click', handler });
        }
    }

    // Navigate to a specific page
    function navigateTo(page) {
        currentPage = page;
        updateActiveNav(page);
        loadPage(page);
    }

    // Update active navigation state
    function updateActiveNav(page) {
        navLinks.forEach(link => {
            if (link.dataset.page === page) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Load the requested page module
    async function loadPage(page) {
        if (!pageContainer) return;

        // Show loading state
        pageContainer.innerHTML = '<div class="text-center" style="padding: 60px;">Loading...</div>';

        // Dispatch page load event
        const event = new CustomEvent('page:beforeload', { detail: { page } });
        document.dispatchEvent(event);

        // Load appropriate module based on page
        switch(page) {
            case 'quiz':
                if (typeof QuizModule !== 'undefined') {
                    pageContainer.innerHTML = await QuizModule.render();
                    QuizModule.init();
                }
                break;
            case 'courses':
                if (typeof CoursesModule !== 'undefined') {
                    pageContainer.innerHTML = await CoursesModule.render();
                    CoursesModule.init();
                }
                break;
            case 'churches':
                if (typeof ChurchesModule !== 'undefined') {
                    pageContainer.innerHTML = await ChurchesModule.render();
                    ChurchesModule.init();
                }
                break;
            case 'reading':
                if (typeof ReadingModule !== 'undefined') {
                    pageContainer.innerHTML = await ReadingModule.render();
                    ReadingModule.init();
                }
                break;
            case 'men':
                if (typeof MenModule !== 'undefined') {
                    pageContainer.innerHTML = await MenModule.render();
                    MenModule.init();
                }
                break;
            default:
                pageContainer.innerHTML = '<div class="card"><h2>Page not found</h2></div>';
        }

        // Dispatch page loaded event
        const loadedEvent = new CustomEvent('page:loaded', { detail: { page } });
        document.dispatchEvent(loadedEvent);
    }

    // Reset all user data
    function resetAllData() {
        if (confirm('⚠️ This will reset all your quiz progress, reading plan, and rewards. Are you sure?')) {
            localStorage.clear();
            if (typeof QuizModule !== 'undefined' && QuizModule.reset) QuizModule.reset();
            if (typeof ReadingModule !== 'undefined' && ReadingModule.reset) ReadingModule.reset();
            showToast('All data has been reset', 'info');
            loadPage(currentPage);
        }
    }

    // Show toast notification
    function showToast(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }

    // Public API
    return {
        init,
        navigateTo,
        showToast,
        getCurrentPage: () => currentPage
    };
})();

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
