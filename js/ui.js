import { toggleButtons, gridItems } from './elements.js';
import { generateTimeframeText } from './utils.js';

function markAsActive(button) {
    toggleButtons.forEach((button) => {
        button.classList.remove('button--toggled');
    });
    button.classList.add('button--toggled');
}

function toggleView(timeframe, data) {
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

export { markAsActive, toggleView };
