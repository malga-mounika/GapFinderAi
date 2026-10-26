export const topics = [
    {
        id: 1,
        name: "Python Fundamentals",
        subject: "Programming",
        score: 92,
        status: "Strong",
        color: "green",
    },
    {
        id: 2,
        name: "Data Structures",
        subject: "Computer Science",
        score: 74,
        status: "Medium",
        color: "yellow",
    },
    {
        id: 3,
        name: "Database Management",
        subject: "Computer Science",
        score: 48,
        status: "Weak",
        color: "red",
    },
    {
        id: 4,
        name: "Machine Learning",
        subject: "Artificial Intelligence",
        score: 61,
        status: "Medium",
        color: "yellow",
    },
    {
        id: 5,
        name: "Operating Systems",
        subject: "Computer Science",
        score: 38,
        status: "Weak",
        color: "red",
    },
    {
        id: 6,
        name: "Web Development",
        subject: "Development",
        score: 88,
        status: "Strong",
        color: "green",
    },
];

export const weeklyProgress = [
    { day: "Mon", score: 35 },
    { day: "Tue", score: 45 },
    { day: "Wed", score: 40 },
    { day: "Thu", score: 58 },
    { day: "Fri", score: 65 },
    { day: "Sat", score: 72 },
    { day: "Sun", score: 82 },
];

export const studyMaterials = [
    {
        id: 1,
        name: "Database Management Notes.pdf",
        size: "2.4 MB",
        status: "Processed",
        topics: 8,
    },
    {
        id: 2,
        name: "Machine Learning Unit 1.pdf",
        size: "3.1 MB",
        status: "Processed",
        topics: 6,
    },
    {
        id: 3,
        name: "Operating Systems Notes.pdf",
        size: "1.8 MB",
        status: "Pending",
        topics: 0,
    },
];

export const quizQuestions = [
    {
        id: 1,
        question: "Which data structure follows the LIFO principle?",
        options: ["Queue", "Stack", "Linked List", "Graph"],
        correctAnswer: 1,
        topic: "Data Structures",
        explanation:
            "A stack follows Last In, First Out (LIFO). The last element added is the first element removed.",
    },
    {
        id: 2,
        question: "Which SQL command retrieves data from a table?",
        options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
        correctAnswer: 2,
        topic: "Database Management",
        explanation:
            "SELECT retrieves data from one or more database tables.",
    },
    {
        id: 3,
        question: "Which Python keyword defines a function?",
        options: ["function", "define", "fun", "def"],
        correctAnswer: 3,
        topic: "Python Fundamentals",
        explanation:
            "The def keyword is used to define a function in Python.",
    },
    {
        id: 4,
        question: "Which algorithm is commonly used for classification?",
        options: [
            "Binary Search",
            "Logistic Regression",
            "Merge Sort",
            "Depth-First Search",
        ],
        correctAnswer: 1,
        topic: "Machine Learning",
        explanation:
            "Logistic Regression is a commonly used classification algorithm.",
    },
    {
        id: 5,
        question: "Which component manages process scheduling in an operating system?",
        options: ["Compiler", "Scheduler", "Database", "Browser"],
        correctAnswer: 1,
        topic: "Operating Systems",
        explanation:
            "The operating system scheduler selects processes for CPU execution.",
    },
];

export const revisionTasks = [
    {
        id: 1,
        day: "Day 1",
        title: "Database Normalization",
        duration: "30 minutes",
        priority: "High",
        completed: false,
    },
    {
        id: 2,
        day: "Day 1",
        title: "SQL Joins Practice",
        duration: "25 minutes",
        priority: "High",
        completed: false,
    },
    {
        id: 3,
        day: "Day 2",
        title: "Operating System Scheduling",
        duration: "40 minutes",
        priority: "High",
        completed: false,
    },
    {
        id: 4,
        day: "Day 3",
        title: "Machine Learning Basics",
        duration: "35 minutes",
        priority: "Medium",
        completed: false,
    },
    {
        id: 5,
        day: "Day 4",
        title: "Stack and Queue Problems",
        duration: "30 minutes",
        priority: "Medium",
        completed: false,
    },
];