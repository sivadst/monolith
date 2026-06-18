// ============================================
// MONOLITH — BRUTALIST INTERACTIONS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // Form submission handler
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const btn = form.querySelector('.btn-primary');
            const originalText = btn.innerHTML;
            
            // Brutalist feedback — instant state change, no animation
            btn.innerHTML = '<span class="btn-bracket">[</span>SENT<span class="btn-bracket">]</span>';
            btn.style.borderColor = '#00FF00';
            btn.style.color = '#00FF00';
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.borderColor = '';
                btn.style.color = '';
                form.reset();
            }, 2000);
        });
    }

    // Intersection Observer for section reveals
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe work cards
    document.querySelectorAll('.work-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.3s ease ${index * 0.1}s, transform 0.3s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Keyboard shortcut: G to toggle grid overlay
    document.addEventListener('keydown', (e) => {
        if (e.key === 'g' || e.key === 'G') {
            const overlay = document.querySelector('.grid-overlay');
            if (overlay) {
                overlay.classList.toggle('active');
            }
        }
    });

    // Console easter egg
    console.log('%c[MONOLITH]', 'color: #00FFFF; font-family: monospace; font-size: 14px;');
    console.log('%cRAW MATERIAL TRUTH', 'color: #888; font-family: monospace; font-size: 10px;');
    console.log('%cBuild No. 001.000', 'color: #444; font-family: monospace; font-size: 10px;');
});