import { teamTrainingInfo } from '../../team-data.js';

const employeeProgress = {
    total: 0,
    completed: 0
};

employeeProgress.total = teamTrainingInfo.employeeTrainingProgress.length ?? 0;
employeeProgress.completed = teamTrainingInfo.employeeTrainingProgress.filter((employee => 
    (employee.assignedСourses.filter(course => course.progressStatus === 'COMPLETED').length === employee.assignedСourses.length)
)).length;

export { employeeProgress };