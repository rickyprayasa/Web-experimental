// Konfigurasi untuk Tailwind CSS
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'brand-orange': '#FF6B35',
                'brand-gray': '#6B7280',
                'brand-dark': '#1F2937'
            }
        }
    }
};

// Menjalankan script setelah seluruh halaman dimuat untuk memastikan semua elemen ada
document.addEventListener('DOMContentLoaded', (event) => {
    
    // Smooth scrolling untuk link navigasi
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Menambahkan efek blur pada navigasi saat di-scroll
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) { // diubah ke 50 agar efek lebih cepat terlihat
            nav.style.background = 'rgba(29, 38, 52, 0.5)'; // warna lebih gelap agar kontras
            nav.style.backdropFilter = 'blur(20px)';
        } else {
            nav.style.background = 'rgba(255, 255, 255, 0.1)';
            nav.style.backdropFilter = 'blur(10px)';
        }
    });

    // Menambahkan event listener pada semua tombol
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function() {
            // Menambahkan efek klik yang halus
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // Menampilkan alert untuk tujuan demo
            const buttonText = this.textContent.trim();
            if (buttonText.includes('Get Started') || buttonText.includes('Browse Templates') || buttonText.includes('View All Templates')) {
                alert('🚀 Keren! Di situs asli, ini akan membawa Anda ke galeri template!');
            } else if (buttonText.includes('Preview')) {
                alert('👀 Pratinjau template akan terbuka di sini! Template ini terlihat luar biasa!');
            } else if (buttonText.includes('Bundle') || buttonText.includes('Access')) {
                alert('💳 Proses checkout akan dimulai di sini! Pilihan yang bagus!');
            }
        });
    });

});
                current = section.getAttribute('id');
            }
        });

        dockItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').includes(current)) {
                item.classList.add('active');
            }
        });
    });

});
