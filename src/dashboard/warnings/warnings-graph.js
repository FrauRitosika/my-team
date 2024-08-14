import { warningList } from './warnings-data.js';

const DISPLAY_WARNING_TYPES = [
    {
        type: 'failedTrainingWarning',
        displayMessage: 'Не прошли обучение'
    },
    {
        type: 'notLoginWarning',
        displayMessage: 'Не заходили на портал'
    },
    {
        type: 'notLoginTwoWeeksWarning',
        displayMessage: 'Не были более 2 недель'
    }
];

const warningGraph = document.querySelector('.js-warnings-graph');
const warningListElement = warningGraph.querySelector('.js-warnings-graph__list');
const warningTemplate = document.getElementById('warningItem');

let isEptyGraph = true;

DISPLAY_WARNING_TYPES.forEach(warningType => {
    const count = warningList[warningType.type] ?? 0;

    if (count) {
        const warningElement = document.importNode(warningTemplate.content, true);
        warningElement.querySelector('.js-warnings-item-text').textContent = `${warningType.displayMessage}: ${count}`;
        warningListElement.appendChild(warningElement);
        isEptyGraph = false;
    }
});

if (isEptyGraph) {
    const messageElement = document.createElement('p');
    messageElement.textContent = 'Проблем не обнаружено';
    messageElement.classList.add('text-info');
    warningGraph.appendChild(messageElement);
}
