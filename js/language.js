// 1. Buat Kamus Bahasa
const translations = {
    'ID': {
        'nav-home': 'Beranda',
        'nav-about': 'Tentang',
        'nav-collab': 'Kolaborasi',
        'btn-login': 'Login',
        'hero-title': 'Kumpulan Artikel'
    },
    'ENG': {
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-collab': 'Collaboration',
        'btn-login': 'Sign In',
        'hero-title': 'Article Collection'
    },
    '中文': {
        'nav-home': '首页',
        'nav-about': '关于',
        'nav-collab': '合作',
        'btn-login': '登录',
        'hero-title': '文章收藏'
    }
};

// 2. Fungsi Global untuk Ganti Bahasa
window.changeLang = function(lang) {
    const currentLangText = document.getElementById('currentLang');
    if (currentLangText) currentLangText.innerText = lang;

    // Ambil data kamus berdasarkan bahasa yang dipilih
    const selectedData = translations[lang];

    // Loop semua elemen yang punya atribut "data-key"
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (selectedData[key]) {
            element.innerText = selectedData[key];
        }
    });

    // Simpan pilihan ke browser
    localStorage.setItem('selectedLang', lang);
};

// Fungsi Inisialisasi (Panggil di fetch navbar)
function initLanguage() {
    const savedLang = localStorage.getItem('selectedLang') || 'ID';
    window.changeLang(savedLang);
}