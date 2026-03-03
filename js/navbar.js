window.initNavbar = function() {
    const btn = document.getElementById('mobileMenuBtn');
    const overlay = document.getElementById('mobileMenuOverlay');
    const drawer = document.getElementById('mobileMenuDrawer');
    const close = document.getElementById('closeMobileMenu');
    
    if (btn && overlay && drawer && close) {
        btn.onclick = function() {
            overlay.classList.remove('hidden');
            setTimeout(() => {
                overlay.classList.remove('opacity-0');
                drawer.classList.remove('translate-x-full');
            }, 10);
        };
        
        overlay.onclick = close.onclick = function() {
            drawer.classList.add('translate-x-full');
            overlay.classList.add('opacity-0');
            setTimeout(() => {
                overlay.classList.add('hidden');
            }, 300);
        };
    }

    window.toggleSubmenu = function(id) {
        const submenu = document.getElementById(id);
        const arrow = document.getElementById('arrow-' + id.split('-')[1]);
        if (submenu) {
            const isHidden = submenu.classList.contains('hidden');
            submenu.classList.toggle('hidden', !isHidden);
            if (arrow) arrow.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
        }
    };
};
