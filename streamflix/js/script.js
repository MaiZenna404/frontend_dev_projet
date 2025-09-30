// Exo 1 Afficher/Masquer des sections de films
document.addEventListener('DOMContentLoaded', () => {
    const toggleGroups = document.querySelectorAll('.section-toggle');

    toggleGroups.forEach((group) => {
        const toggleButton = group.querySelector('.toggle-visibility-btn');
        const filmsContainer = group.nextElementSibling;

        if (!toggleButton || !filmsContainer) {
            return;
        }

        const setVisibility = (isVisible) => {
            filmsContainer.classList.toggle('show', isVisible);
            toggleButton.textContent = isVisible ? 'Masquer' : 'Afficher';
            toggleButton.setAttribute('aria-expanded', String(isVisible));
            filmsContainer.setAttribute('aria-hidden', String(!isVisible));
        };

        // Initialize state based on current classes
        setVisibility(filmsContainer.classList.contains('show'));

        toggleButton.addEventListener('click', () => {
            const shouldShow = !filmsContainer.classList.contains('show');
            setVisibility(shouldShow);
        });
    });
});