document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Evitem el comportament per defecte

            // Captura de dades
            const nomInput = document.getElementById('nom');
            const emailInput = document.getElementById('email');
            const missatgeInput = document.getElementById('missatge');
            
            // Validació bàsica personalitzada
            if (!nomInput.value || !emailInput.value || !missatgeInput.value) {
                Swal.fire({
                    title: 'Camps incomplets',
                    text: 'Si us plau, omple tots els camps abans d\'enviar.',
                    icon: 'warning',
                    confirmButtonColor: '#764ba2'
                });
                return;
            }

            // Elements del botó per simular càrrega
            const btnSubmit = document.getElementById('btnSubmit');
            const btnText = document.getElementById('btnText');
            const btnIcon = document.getElementById('btnIcon');

            // Estat de càrrega
            btnSubmit.disabled = true;
            btnText.textContent = 'Enviant...';
            btnIcon.className = 'fas fa-circle-notch fa-spin ms-2';

            // Simulem un retard de xarxa (1 segon) per donar realisme
            setTimeout(() => {
                // Alerta d'èxit avançada amb SweetAlert2
                Swal.fire({
                    title: 'Missatge enviat amb èxit!',
                    html: `Gràcies per contactar, <strong>${nomInput.value}</strong>.<br>Hem enviat una còpia al teu correu: <em>${emailInput.value}</em>.`,
                    icon: 'success',
                    confirmButtonColor: '#667eea',
                    confirmButtonText: 'Genial!',
                    backdrop: `rgba(102, 126, 234, 0.4)` // Fons personalitzat
                }).then(() => {
                    // Resetegem el formulari i el botó
                    contactForm.reset();
                    btnSubmit.disabled = false;
                    btnText.textContent = 'Enviar Missatge';
                    btnIcon.className = 'fas fa-paper-plane ms-2';
                });
            }, 1000); 
        });
    }
});