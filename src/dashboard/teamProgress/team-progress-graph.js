import { trainingProgress } from './team-progress-data.js';

const DISPLAY_PROGRESS_STATUS = [
    {
        status: 'COMPLETED',
        statusDisplayName: 'Завершено',
        statusColor: '#00A75C'
    },
    {
        status: 'IN_PROGRESS',
        statusDisplayName: 'В процессе',
        statusColor: '#E9841D'
    },
    {
        status: 'FAILED',
        statusDisplayName: 'Не пройдено',
        statusColor: '#EC133D'
    },
    {
        status: 'NOT_STARTED',
        statusDisplayName: 'Не начато',
        statusColor: '#B6D4ED'
    }
];

const trainingProgressGraph = document.querySelector('.js-training-progress-graph');
const segmentData = DISPLAY_PROGRESS_STATUS.map(status => {
    return {
        count: trainingProgress.courseStatus[status.status] ?? 0,
        percent: (trainingProgress.courseStatus[status.status] ?? 0) * 100 / trainingProgress.courseTotal,
        displayName: status.statusDisplayName,
        name: status.status,
        color: status.statusColor
    };
});

const statusList = trainingProgressGraph.querySelector('.js-training-progress-graph__list');
const templateStatusItem = document.getElementById('statusItem');
fillWarningList(segmentData);

drawdGraph('trainingProgressGraph', segmentData);

trainingProgressGraph.querySelector('.training-progress-graph__result').textContent = `${segmentData.find(status => status.name === 'COMPLETED').percent ?? 0}%`;

function fillWarningList(data) {
    data.forEach(status => {
        const statusItem = document.importNode(templateStatusItem.content, true);
        statusItem.querySelector('.js-training-progress-graph__item-name').textContent = status.displayName;
        statusItem.querySelector('.js-training-progress-graph__item-count').textContent = `(${status.count})`;
        statusItem.querySelector('.js-training-progress-graph__item-percent').textContent = `${status.percent}%`;
        statusItem.querySelector('.js-training-progress-graph__item').style.setProperty('--graph-color', status.color);
        statusList.appendChild(statusItem);
    });
}

function drawdGraph(canvasId, data) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    const radius = Math.min(canvas.width, canvas.height) / 2;
    let startAngle = (2 * Math.PI) * 3 / 4;

    data.forEach(status => {
        const sliceAngle = status.percent * (2 * Math.PI) / 100;
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height / 2);
        ctx.arc(canvas.width / 2, canvas.height / 2, radius, startAngle, startAngle + sliceAngle);
        ctx.closePath();
        ctx.fillStyle = status.color;
        ctx.fill();
        startAngle += sliceAngle;
    });

    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, radius * 0.8, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
}