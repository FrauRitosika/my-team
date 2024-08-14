const teamTrainingInfo = {
    employeeTrainingProgress: [
        {
            employee: 'employee1',
            assignedСourses: [
                {
                    courseName: 'course1',
                    progressStatus: 'COMPLETED'
                },
                {
                    courseName: 'course2',
                    progressStatus: 'COMPLETED'
                },
            ]
        },
        {
            employee: 'employee2',
            assignedСourses: [
                {
                    courseName: 'course1',
                    progressStatus: 'COMPLETED'
                },
                {
                    courseName: 'course2',
                    progressStatus: 'COMPLETED'
                },
            ]
        },
        {
            employee: 'employee3',
            assignedСourses: [
                {
                    courseName: 'course1',
                    progressStatus: 'COMPLETED'
                },
                {
                    courseName: 'course2',
                    progressStatus: 'NOT_STARTED'
                },
            ]
        },
        {
            employee: 'employee4',
            assignedСourses: [
                {
                    courseName: 'course1',
                    progressStatus: 'COMPLETED'
                },
                {
                    courseName: 'course2',
                    progressStatus: 'IN_PROGRESS'
                },
            ]
        },
        {
            employee: 'employee5',
            assignedСourses: [
                {
                    courseName: 'course1',
                    progressStatus: 'FAILED'
                },
                {
                    courseName: 'course2',
                    progressStatus: 'COMPLETED'
                },
            ]
        }
    ],
    warningInfo: [
        {
            warningType: 'failedTrainingWarning',
            employees: ['employee5']
        },
        {
            warningType: 'notLoginWarning',
            employees: ['employee3']
        },
        {
            warningType: 'notLoginTwoWeeksWarning',
            employees: ['employee3']
        }
    ]
};

export { teamTrainingInfo };