document.addEventListener('DOMContentLoaded', () => {

    // 1. EFEK KETIK (TEXT GENERATE EFFECT)
    const headline = document.getElementById('hero-headline');
    const textToType = "Visualisasikan Data, Ungkapkan Cerita.";
    let charIndex = 0;

    function typeEffect() {
        if (charIndex < textToType.length) {
            headline.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, 60); // Kecepatan ketik
        } else {
            // Tambahkan kursor berkedip setelah selesai
            headline.style.borderRight = '3px solid var(--primary-color)';
            setInterval(() => {
                headline.style.borderRightColor = headline.style.borderRightColor === 'transparent' ? 'var(--primary-color)' : 'transparent';
            }, 500);
        }
    }
    // Mulai animasi setelah jeda singkat
    setTimeout(typeEffect, 500);


    // 2. EFEK 3D CARD
    const cards = document.querySelectorAll('.card-3d-container');

    cards.forEach(cardContainer => {
        const card = cardContainer.querySelector('.card-3d');
        const glare = document.createElement('div'); // Opsi untuk efek kilau
        glare.className = 'card-glare';
        // card.appendChild(glare); // Uncomment jika ingin menambahkan efek kilau

        cardContainer.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const width = rect.width;
            const height = rect.height;

            const rotateY = ((x / width) - 0.5) * -20; // Max rotasi 10 derajat
            const rotateX = ((y / height) - 0.5) * 20;  // Max rotasi 10 derajat

            requestAnimationFrame(() => {
                card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.05)`;
            });
        });

        cardContainer.addEventListener('mouseleave', () => {
             requestAnimationFrame(() => {
                card.style.transform = 'rotateY(0) rotateX(0) scale(1)';
            });
        });
    });
    
    // 3. Animasi fade-in untuk section saat di-scroll (opsional, tapi bagus)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.features-section, .templates-section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });

});
