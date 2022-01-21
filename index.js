import { markAsActive, toggleView } from './js/ui.js';

const toggleButtons = document.querySelectorAll('.js-toggle');

(async () => {
    const data = await fetch('data.json').then((response) => response.json());

    toggleButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('button--toggled')) {
                return; // Don't re-render the same view
            }
            markAsActive(button);
            toggleView(button.dataset.timeframe, data);
        });
    });
    toggleButtons[1].click(); // Trigger initial view
})();
