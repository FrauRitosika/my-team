import { teamTrainingInfo } from '../../team-data.js';

const trainingProgress = {
    courseTotal: 0,
    courseStatus: {}
};

teamTrainingInfo.employeeTrainingProgress.forEach(employee => {
    employee.assignedСourses.forEach(course => {
        trainingProgress.courseTotal = trainingProgress.courseTotal + 1;
        trainingProgress.courseStatus[course.progressStatus] = (trainingProgress.courseStatus[course?.progressStatus] ?? 0) + 1;
    });
});

export { trainingProgress };