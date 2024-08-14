import { employeeProgress } from './employee-progress-data.js';

const employeeProgressGraph = document.querySelector('.js-employee-progress-graph');
employeeProgressGraph.querySelector('.js-employee-progress__result-text').textContent = `${employeeProgress.completed}/${employeeProgress.total}`;

const completedPersent = employeeProgress.total && employeeProgress.completed ? employeeProgress.completed * 100 / employeeProgress.total : 0;

drawdGraph('employeeProgressGraph', completedPersent);

function drawdGraph(canvasId, completedPercent) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    const radius = Math.min(canvas.width / 2, canvas.height);
    let startAngle = Math.PI;


    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height);
    ctx.arc(canvas.width / 2, canvas.height, radius, startAngle, startAngle + Math.PI);
    ctx.closePath();
    ctx.fillStyle = '#E7F1F9';
    ctx.fill();


    const sliceAngle = completedPercent * Math.PI / 100;
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height);
    ctx.arc(canvas.width / 2, canvas.height, radius, startAngle, startAngle + sliceAngle);
    ctx.closePath();
    ctx.fillStyle = '#E9841D';
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height);
    ctx.arc(canvas.width / 2, canvas.height, radius*0.8, startAngle, startAngle + Math.PI);
    ctx.closePath();
    ctx.fillStyle = 'white';
    ctx.fill();
}