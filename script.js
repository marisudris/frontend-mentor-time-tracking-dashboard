'use strict';

(async () => {
    const response = await fetch('/data.json');
    const data = await response.json();

    const toggleButtons = document.querySelectorAll('.js-toggle');
    const gridItems = document.querySelectorAll('.js-grid-item');

    toggleButtons.forEach((button) => {
        button.addEventListener('click', () => {
            markAsActive(button);
            toggleView(button.dataset.timeframe);
        });
    });

    function markAsActive(button) {
        toggleButtons.forEach((button) => {
            button.classList.remove('button--toggled');
        });
        button.classList.add('button--toggled');
    }

    function toggleView(timeframe) {
        gridItems.forEach((gridItem) => {
            const dataItem = data.find(
                (obj) => obj.title == gridItem.dataset.activity
            );
            const current = gridItem.querySelector('.js-current');
            const previous = gridItem.querySelector('.js-previous');

            const currentText = dataItem.timeframes[timeframe].current;
            const previousText = dataItem.timeframes[timeframe].previous;
            const timeframeText = generateTimeframeText(timeframe);

            current.textContent = `${currentText}${
                currentText === 1 ? 'hr' : 'hrs'
            }`;
            previous.textContent = `Last ${timeframeText} - ${previousText}${
                previousText === 1 ? 'hr' : 'hrs'
            }`;
        });
    }

    function generateTimeframeText(timeframe) {
        switch (timeframe) {
            case 'daily':
                return 'Day';
                break;
            case 'weekly':
                return 'Week';
                break;
            case 'monthly':
                return 'Month';
                break;

            default:
                '';
        }
    }
})();
