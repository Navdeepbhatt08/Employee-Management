// localStorage.clear()

const employees = [
    {
        "id": 1,
        "email": "e@e.com",
        "password": "123",
        "firstName": "Aarav",  // Added Indian first name
        "taskCount": 2,  // Added task count
        "taskBreakdown": {  // Breakdown of task statuses
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Project Report",
                "taskDescription": "Prepare the monthly project report",
                "taskDate": "20-March-2025",
                "category": "Reporting",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Client Meeting",
                "taskDescription": "Discuss project updates with the client",
                "taskDate": "21-March-2025",
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
        "email": "e@e2.com",
        "password": "123",
        "firstName": "Ishaan",  // Added Indian first name
        "taskCount": 3,  // Added task count
        "taskBreakdown": {  // Breakdown of task statuses
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Code Review",
                "taskDescription": "Review the latest code changes",
                "taskDate": "11-March-2025",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Bug Fixing",
                "taskDescription": "Fix critical bugs reported by QA",
                "taskDate": "18-March-2025",
                "category": "Development",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Feature Testing",
                "taskDescription": "Test new features before release",
                "taskDate": "27-March-2025",
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
        "email": "e@e3.com",
        "password": "123",
        "firstName": "Aditi",  // Added Indian first name
        "taskCount": 3,  // Added task count
        "taskBreakdown": {  // Breakdown of task statuses
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Marketing Plan",
                "taskDescription": "Draft a marketing plan for Q2",
                "taskDate": "21-March-2025",
                "category": "Marketing",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "SEO Optimization",
                "taskDescription": "Improve SEO for company website",
                "taskDate": "21-March-2025",
                "category": "SEO",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Ad Campaign",
                "taskDescription": "Launch a new ad campaign",
                "taskDate": "21-March-2025",
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
        "email": "e@e4.com",
        "password": "123",
        "firstName": "Sanvi",  // Added Indian first name
        "taskCount": 3,  // Added task count
        "taskBreakdown": {  // Breakdown of task statuses
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "HR Policy Review",
                "taskDescription": "Update company HR policies",
                "taskDate": "02-March-2025",
                "category": "HR",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Training Session",
                "taskDescription": "Conduct training for new employees",
                "taskDate": "01-March-2025",
                "category": "Training",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Payroll Processing",
                "taskDescription": "Ensure timely salary disbursement",
                "taskDate": "11-March-2025",
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
        "email": "e@e5.com",
        "password": "123",
        "firstName": "Vivaan",  // Added Indian first name
        "taskCount": 3,  // Added task count
        "taskBreakdown": {  // Breakdown of task statuses
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Customer Support",
                "taskDescription": "Handle customer complaints",
                "taskDate": "13-March-2025",
                "category": "Support",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Ticket Resolution",
                "taskDescription": "Resolve pending support tickets",
                "taskDate": "12-March-2025",
                "category": "Support",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Product Demo",
                "taskDescription": "Give a demo of the product to a new client",
                "taskDate": "23-March-2025",
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
    "email": "admin@me.com",
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