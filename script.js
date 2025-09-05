// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Cibler le formulaire
    const contactForm = document.querySelector('.contact-form');
    
    // Si le formulaire existe, on ajoute un événement
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            // Empêcher l'envoi par défaut
            event.preventDefault();

            // Validation simple
            const name = contactForm.querySelector('input[name="name"]').value;
            const email = contactForm.querySelector('input[name="email"]').value;
            const message = contactForm.querySelector('textarea[name="message"]').value;

            if (name === '' || email === '' || message === '') {
                alert('Veuillez remplir tous les champs !');
            } else {
                alert('Merci ! Votre message a été envoyé.');
                // Ici, vous ajouteriez le code pour envoyer les données au serveur
            }
        });
    }

    // Effet de transition lors du clic sur les liens de navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Observer l'intersection pour les animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Optionnel : ne l'anime qu'une seule fois
        }
    });
}, {
    threshold: 0.5 // Déclenche l'animation quand 50% de l'élément est visible
});

// Cible les éléments à animer
document.querySelectorAll('.card').forEach(card => {
    card.classList.add('fade-in-up');
    observer.observe(card);
});
// script.js
document.addEventListener('DOMContentLoaded', () => {

    // Observer l'intersection pour les animations (code déjà existant)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    document.querySelectorAll('.fade-in-up').forEach(element => {
        observer.observe(element);
    });

    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            // Empêche l'envoi du formulaire par défaut
            event.preventDefault();

            // Validation simple des champs
            const name = contactForm.querySelector('[name="name"]').value.trim();
            const email = contactForm.querySelector('[name="email"]').value.trim();
            const message = contactForm.querySelector('[name="message"]').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Veuillez remplir tous les champs du formulaire !');
            } else {
                // Vous pouvez ajouter ici une requête AJAX pour envoyer les données
                // Par exemple : fetch('votre-api.php', { method: 'POST', body: new FormData(contactForm) });
                alert('Merci ! Votre message a été envoyé avec succès.');
                contactForm.reset(); // Réinitialise les champs du formulaire après envoi
            }
        });
    }

});
document.addEventListener('DOMContentLoaded', () => {

    // (Votre code existant pour l'observateur d'intersection)

    // Gestion de l'animation des compteurs
    const statsSection = document.getElementById('stats');
    if (statsSection) {
        const observerStats = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counters = document.querySelectorAll('.stats-section [data-target]');
                    counters.forEach(counter => {
                        const target = +counter.getAttribute('data-target');
                        const speed = 200; // La vitesse du compteur (plus le nombre est petit, plus c'est rapide)
                        const increment = target / speed;

                        const updateCounter = () => {
                            const value = +counter.innerText;
                            if (value < target) {
                                counter.innerText = Math.ceil(value + increment);
                                setTimeout(updateCounter, 1);
                            } else {
                                counter.innerText = target;
                            }
                        };
                        updateCounter();
                    });
                    observerStats.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5
        });

        observerStats.observe(statsSection);
    }
});