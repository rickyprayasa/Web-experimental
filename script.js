document.addEventListener('DOMContentLoaded', () => {

    // 1. Efek Sparkle (Kilau) yang mengikuti mouse
    document.addEventListener('mousemove', (e) => {
        // PERBAIKAN: Sparkle dibuat lebih sering muncul
        if (Math.random() > 0.75) { 
            createSparkle(e.clientX, e.clientY);
        }
    });

    function createSparkle(x, y) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        document.body.appendChild(sparkle);

        sparkle.style.left = `${x + window.scrollX}px`;
        sparkle.style.top = `${y + window.scrollY}px`;
        
        // PERBAIKAN: Menentukan arah pergerakan sparkle secara acak
        // dan menyimpannya di variabel CSS (--x dan --y)
        const randomX = (Math.random() - 0.5) * 80; // pergerakan horizontal
        const randomY = (Math.random() - 0.5) * 80; // pergerakan vertikal
        sparkle.style.setProperty('--x', `${randomX}px`);
        sparkle.style.setProperty('--y', `${randomY}px`);

        // Hapus elemen sparkle setelah animasi selesai untuk menjaga performa
        setTimeout(() => {
            sparkle.remove();
        }, 800);
    }
    
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
        root: null, 
        rootMargin: '0px',
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });

});
