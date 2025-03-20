const employees = [
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Project Report",
                "taskDescription": "Prepare the monthly project report",
                "taskDate": "2025-03-20",
                "category": "Reporting",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Client Meeting",
                "taskDescription": "Discuss project updates with the client",
                "taskDate": "2025-03-21",
                "category": "Meetings",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Code Review",
                "taskDescription": "Review the latest code changes",
                "taskDate": "2025-03-19",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Bug Fixing",
                "taskDescription": "Fix critical bugs reported by QA",
                "taskDate": "2025-03-18",
                "category": "Development",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Feature Testing",
                "taskDescription": "Test new features before release",
                "taskDate": "2025-03-22",
                "category": "Testing",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Marketing Plan",
                "taskDescription": "Draft a marketing plan for Q2",
                "taskDate": "2025-03-25",
                "category": "Marketing",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "SEO Optimization",
                "taskDescription": "Improve SEO for company website",
                "taskDate": "2025-03-27",
                "category": "SEO",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Ad Campaign",
                "taskDescription": "Launch a new ad campaign",
                "taskDate": "2025-03-29",
                "category": "Advertising",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "HR Policy Review",
                "taskDescription": "Update company HR policies",
                "taskDate": "2025-03-30",
                "category": "HR",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Training Session",
                "taskDescription": "Conduct training for new employees",
                "taskDate": "2025-04-01",
                "category": "Training",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Payroll Processing",
                "taskDescription": "Ensure timely salary disbursement",
                "taskDate": "2025-04-02",
                "category": "Finance",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Customer Support",
                "taskDescription": "Handle customer complaints",
                "taskDate": "2025-03-19",
                "category": "Support",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Ticket Resolution",
                "taskDescription": "Resolve pending support tickets",
                "taskDate": "2025-03-20",
                "category": "Support",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Product Demo",
                "taskDescription": "Give a demo of the product to a new client",
                "taskDate": "2025-03-23",
                "category": "Sales",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ]
    }
];

const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
}];


export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {
        employees, admin

    }

}