// Image Modal Functions
function openModal(imageSrc, altText) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    modalImage.src = imageSrc;
    modalImage.alt = altText;
    modal.classList.remove('hidden');
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.add('hidden');
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside the image
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    const closeButton = document.getElementById('closeModal');
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });
});

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenuButton.querySelector('svg:first-child').classList.toggle('hidden');
        mobileMenuButton.querySelector('svg:last-child').classList.toggle('hidden');
    });
}

// Set current year in footer
const yearElement = document.getElementById('year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Global site tag (gtag.js) - Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-SS9DKCMXR3');

// HTTPS redirect
const isLocalHost = location.hostname === "localhost" || location.hostname === "127.0.0.1";
if (location.protocol !== 'https:' && !isLocalHost) {
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
}

// Yandex.Metrika counter
(function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
    m[i].l = 1 * new Date(); k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(51723311, "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true
});