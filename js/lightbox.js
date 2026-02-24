function openModal(imgSrc, category, title) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const modalCategory = document.getElementById('modalCategory');
    const modalTitle = document.getElementById('modalTitle');

    // Masukkan data ke modal
    modalImg.src = imgSrc;
    modalCategory.innerText = category;
    modalTitle.innerText = title;

    // Tampilkan modal (hapus class hidden)
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    
    // Mencegah scroll pada body saat modal buka
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    
    // Sembunyikan modal
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    
    // Kembalikan scroll body
    document.body.style.overflow = 'auto';
}