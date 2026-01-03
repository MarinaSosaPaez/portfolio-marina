document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. AÑO ACTUAL AUTOMÁTICO ---
    // Busca el elemento con id="year" y le pone el año actual (ej. 2026)
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- 2. NAVEGACIÓN SUAVE (SMOOTH SCROLL) ---
    // Esto evita que el menú tape el título de la sección al bajar
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Evita el salto brusco estándar

            const targetId = this.getAttribute('href');
            if (targetId === '#') return; // Si es solo #, no hace nada

            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calcula la altura del header (80px según tu CSS)
                const headerOffset = 80; 
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                // Realiza el desplazamiento suave
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // --- 3. EFECTO SOMBRA EN HEADER AL SCROLLEAR ---
    // Agrega una pequeña sombra al menú cuando bajas para separarlo del fondo
    const header = document.getElementById('main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)";
        } else {
            header.style.boxShadow = "none";
        }
    });

    console.log("Sitio de Marina Sosa Páez cargado correctamente.");
});