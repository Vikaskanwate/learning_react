const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Design Homepage",
          "description": "Create the initial layout for the homepage.",
          "date": "2025-06-24",
          "category": "Design"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Fix Login Bug",
          "description": "Resolve issue with user login validation.",
          "date": "2025-06-22",
          "category": "Bug Fix"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Deploy to Production",
          "description": "Deployment failed due to server error.",
          "date": "2025-06-21",
          "category": "Deployment"
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Write Unit Tests",
          "description": "Add unit tests for the user module.",
          "date": "2025-06-24",
          "category": "Testing"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Optimize DB Queries",
          "description": "Improve performance of SQL queries.",
          "date": "2025-06-23",
          "category": "Database"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Update ReadMe",
          "description": "Document all API endpoints.",
          "date": "2025-06-22",
          "category": "Documentation"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Refactor Authentication",
          "description": "Code failed review; refactoring required.",
          "date": "2025-06-20",
          "category": "Refactoring"
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Add Dark Mode",
          "description": "Implement dark theme across UI.",
          "date": "2025-06-24",
          "category": "Frontend"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Configure CI/CD",
          "description": "Error during GitHub Actions setup.",
          "date": "2025-06-23",
          "category": "DevOps"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Implement Search",
          "description": "Search bar with live filtering.",
          "date": "2025-06-22",
          "category": "Feature"
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Build Notification Service",
          "description": "Microservice for real-time notifications.",
          "date": "2025-06-24",
          "category": "Backend"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Code Review",
          "description": "Reviewed pull requests from team.",
          "date": "2025-06-23",
          "category": "Collaboration"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Fix Routing Issue",
          "description": "Resolved redirect loop on login page.",
          "date": "2025-06-22",
          "category": "Bug Fix"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Integrate Chatbot",
          "description": "Failed API connection to AI service.",
          "date": "2025-06-21",
          "category": "AI"
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Add Localization",
          "description": "Support multiple languages.",
          "date": "2025-06-24",
          "category": "Frontend"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Migrate Database",
          "description": "Migration failed due to schema mismatch.",
          "date": "2025-06-23",
          "category": "Database"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Setup Docker",
          "description": "Containerized app with Docker.",
          "date": "2025-06-22",
          "category": "DevOps"
        }
      ]
    }
  ]
  
  
const admin =  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
}
  
export const setLocalStorage = () =>{
    localStorage.setItem('employee',JSON.stringify(employees));
    localStorage.setItem('admin',JSON.stringify(admin));
}

export const getLocalStroage = () =>{
    const employees = JSON.parse(localStorage.getItem('employee'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    console.log(employees,admin);
    
}