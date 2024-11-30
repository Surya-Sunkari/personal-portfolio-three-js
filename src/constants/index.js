import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        "title": "Technical Advisor Intern - Gen AI",
        "company_name": "Scale AI",
        "icon": starbucks,
        "iconBg": "#c7e5c3",
        "date": "November 2024 - Present",
        "points": [
            "Oversaw the training and fine-tuning of a code-reasoning model to solve complex, Olympiad-level competitive math problems.",
            "Led the development and optimization of the model to tackle advanced programming challenges with high accuracy and efficiency."
        ]
    },
    {
        "title": "Software Engineering Intern",
        "company_name": "Wayfair",
        "icon": starbucks,
        "iconBg": "#accbe1",
        "date": "May 2024 - August 2024",
        "points": [
            "Designed and implemented an automation microservice capable of consuming over 9,500 Kafka messages per minute from various topics, reducing data processing time by 15% and further decoupling from external APIs.",
            "Expanded backend functionality by developing 20+ new endpoints to interface with carton route creation and logical/physical conveyability, utilizing Java Spring Boot, Kotlin, and PostgreSQL.",
            "Implemented unit, integration, and end-to-end tests to increase overall code coverage from ~70% to over 90%."
        ]
    },
    {
        "title": "Software Engineering Intern, Tech Lead",
        "company_name": "Cacao.tax",
        "icon": starbucks,
        "iconBg": "#fbc3bc",
        "date": "January 2024 - May 2024",
        "points": [
            "Automated data collection of tax-related information from passports, boarding passes, receipts, etc.",
            "Created a pipeline using Expo, React Native, CV, and MySQL to shorten the tax refund process from >25 minutes to ~3 minutes."
        ]
    },
    {
        "title": "Software Engineering Intern, Tech Lead",
        "company_name": "Locol",
        "icon": starbucks,
        "iconBg": "#b7e4c7",
        "date": "August 2023 - December 2023",
        "points": [
            "Built upon existing authentication functionality to create a fully functional onboarding service and file manager for both businesses and student freelancers using AWS Amplify, AWS Cognito, AWS S3, and Next.",
            "Coordinated a team of 4 other software development interns to ensure quality code and timely developments."
        ]
    },
    {
        "title": "Software Engineering Intern",
        "company_name": "Paycom",
        "icon": starbucks,
        "iconBg": "#a2d2ff",
        "date": "May 2023 - August 2023",
        "points": [
            "Developed a full-stack application that combined Paycom’s report builder service with their proprietary encryption API to safely transmit Personally Identifiable Information to over 44,000 clients/employees.",
            "Designed a SQL Query Preview page using React to securely view sensitive data that is expected to roll out to more than 36,000 client companies, using PHP for the backend."
        ]
    }
];


export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Surya-Sunkari/',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/surya-sunkari/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];