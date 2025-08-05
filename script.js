document.addEventListener('DOMContentLoaded', () => {

    // 1. Efek Sparkle (Kilau) yang mengikuti mouse
    document.addEventListener('mousemove', (e) => {
        // Hanya buat sparkle sesekali, tidak setiap pixel pergerakan
        if (Math.random() > 0.9) { 
            createSparkle(e.clientX, e.clientY);
        }
    });

    function createSparkle(x, y) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        document.body.appendChild(sparkle);

        sparkle.style.left = `${x + window.scrollX}px`;
        sparkle.style.top = `${y + window.scrollY}px`;
        
        // Atur arah animasi secara acak
        const randomX = (Math.random() - 0.5) * 50;
        const randomY = (Math.random() - 0.5) * 50;
        sparkle.style.setProperty('--x', `${randomX}px`);
        sparkle.style.setProperty('--y', `${randomY}px`);

        // Hapus elemen sparkle setelah animasi selesai untuk menjaga performa
        setTimeout(() => {
            sparkle.remove();
        }, 800);
    }
    
    // Sesuaikan keyframe animasi sparkle di CSS jika Anda mengubah script ini
    // Contoh: @keyframes sparkle-anim { 100% { transform: scale(2.5) translate(var(--x), var(--y)); opacity: 0; } }
    // Untuk saat ini, animasi default di CSS sudah cukup baik.

    // 2. Efek Navbar berubah warna saat scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Animasi elemen saat masuk ke viewport (muncul dari bawah)
    const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the item is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Hentikan observasi setelah animasi berjalan
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });

});
