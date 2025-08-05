document.addEventListener('DOMContentLoaded', () => {

    // 1. EXPANDABLE CARDS LOGIC
    const cards = document.querySelectorAll('.expandable-card');
    const contentArea = document.getElementById('expanded-content-area');
    const expandedImg = document.getElementById('expanded-image');
    const expandedTitle = document.getElementById('expanded-title');
    const expandedDesc = document.getElementById('expanded-description');

    function updateExpandedContent(card) {
        expandedImg.src = card.dataset.image;
        expandedTitle.textContent = card.dataset.title;
        expandedDesc.textContent = card.dataset.description;
        contentArea.classList.add('visible');
    }

    cards.forEach(card => {
        card.addEventListener('click', () => {
            document.querySelector('.expandable-card.active').classList.remove('active');
            card.classList.add('active');
            updateExpandedContent(card);
        });
    });
    // Initial load
    updateExpandedContent(document.querySelector('.expandable-card.active'));

    // 2. CARD SPOTLIGHT LOGIC
    const spotlightCards = document.querySelectorAll('.card-spotlight');
    spotlightCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            requestAnimationFrame(() => {
                card.style.setProperty('--x', `${x}px`);
                card.style.setProperty('--y', `${y}px`);
            });
        });
    });

    // 3. SPARKLES EFFECT
    document.body.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.95) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            document.body.appendChild(sparkle);

            sparkle.style.left = `${e.clientX + window.scrollX}px`;
            sparkle.style.top = `${e.clientY + window.scrollY}px`;

            setTimeout(() => {
                sparkle.remove();
            }, 800);
        }
    });
    
    // 4. FLOATING DOCK ACTIVE STATE ON SCROLL
    const sections = document.querySelectorAll('section[id]');
    const dockItems = document.querySelectorAll('.dock-item');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
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
