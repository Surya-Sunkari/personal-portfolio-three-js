import { scale, wayfair, locol, cacao, paycom } from "../assets/images";
import {
    css,
    express,
    git,
    github,
    html,
    javascript,
    mongodb,
    nextjs,
    nodejs,
    react,
    tailwindcss,
    typescript,
    aws,
    c,
    clojure,
    cpp,
    django,
    docker,
    flask,
    gcp,
    hadoop,
    java,
    kafka,
    kotlin,
    php,
    python,
    spark,
    spring,

    linkedin,
    contact,

    brain,
    dobby,
    messenger,
    money,
    music,
    snake,
} from "../assets/icons";

import semantic_mapping from "/semantic_mapping.pdf";
import dobby_pdf from "/dobby.pdf";


export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend"
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend"
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control"
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control"
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend"
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend"
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database"
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend"
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend"
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend"
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend"
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend"
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend"
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend"
    },
    {
        imageUrl: php,
        name: "PHP",
        type: "Backend"
    },
    {
        imageUrl: c,
        name: "C",
        type: "Backend"
    },
    {
        imageUrl: cpp,
        name: "C++",
        type: "Backend"
    },
    {
        imageUrl: kotlin,
        name: "Kotlin",
        type: "Backend"
    },
    {
        imageUrl: clojure,
        name: "Clojure",
        type: "Backend"
    },
    {
        imageUrl: flask,
        name: "Flask",
        type: "Backend"
    },
    {
        imageUrl: django,
        name: "Django",
        type: "Backend"
    },
    {
        imageUrl: spring,
        name: "Java Spring",
        type: "Backend"
    },
    {
        imageUrl: aws,
        name: "AWS",
        type: "DevOps/Cloud"
    },
    {
        imageUrl: gcp,
        name: "GCP",
        type: "DevOps/Cloud"
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "DevOps/Cloud"
    },
    {
        imageUrl: kafka,
        name: "Kafka",
        type: "Big Data/Streaming"
    },
    {
        imageUrl: spark,
        name: "Spark",
        type: "Big Data/Streaming"
    },
    {
        imageUrl: hadoop,
        name: "Hadoop",
        type: "Big Data/Streaming"
    },
];


export const experiences = [
    {
        "title": "Technical Advisor Intern - Gen AI",
        "company_name": "Scale AI",
        "icon": scale,
        "iconBg": "#c7e5c3",
        "date": "Nov 2024 - Present",
        "points": [
            "Oversaw the training and fine-tuning of a code-reasoning model to solve complex, Olympiad-level competitive math problems.",
            "Led the development and optimization of the model to tackle advanced programming challenges with high accuracy and efficiency."
        ],
        "scale": "70%"
    },
    {
        "title": "Software Engineering Intern",
        "company_name": "Wayfair",
        "icon": wayfair,
        "iconBg": "#accbe1",
        "date": "May 2024 - Aug 2024",
        "points": [
            "Designed and implemented an automation microservice capable of consuming over 9,500 Kafka messages per minute from various topics, reducing data processing time by 15% and further decoupling from external APIs.",
            "Expanded backend functionality by developing 20+ new endpoints to interface with carton route creation and logical/physical conveyability, utilizing Java Spring Boot, Kotlin, and PostgreSQL.",
            "Implemented unit, integration, and end-to-end tests to increase overall code coverage from ~70% to over 90%."
        ],
        "scale": "75%"
    },
    {
        "title": "Software Engineering Intern",
        "company_name": "Cacao.tax",
        "icon": cacao,
        "iconBg": "#fbc3bc",
        "date": "Jan 2024 - May 2024",
        "points": [
            "Automated data collection of tax-related information from passports, boarding passes, receipts, etc.",
            "Created a pipeline using Expo, React Native, CV, and MySQL to shorten the tax refund process from >25 minutes to ~3 minutes."
        ],
        "scale": "75%"
    },
    {
        "title": "Software Engineering Intern",
        "company_name": "Locol",
        "icon": locol,
        "iconBg": "#b7e4c7",
        "date": "Aug 2023 - Dec 2023",
        "points": [
            "Built upon existing authentication functionality to create a fully functional onboarding service and file manager for both businesses and student freelancers using AWS Amplify, AWS Cognito, AWS S3, and Next.",
            "Coordinated a team of 4 other software development interns to ensure quality code and timely developments."
        ],
        "scale": "65%"
    },
    {
        "title": "Software Engineering Intern",
        "company_name": "Paycom",
        "icon": paycom,
        "iconBg": "#a2d2ff",
        "date": "May 2023 - Aug 2023",
        "points": [
            "Developed a full-stack application that combined Paycom’s report builder service with their proprietary encryption API to safely transmit Personally Identifiable Information to over 44,000 clients/employees.",
            "Designed a SQL Query Preview page using React to securely view sensitive data that is expected to roll out to more than 36,000 client companies, using PHP for the backend."
        ],
        "scale": "75%"
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
        iconUrl: brain,
        theme: 'btn-back-red',
        name: 'Regularized Logistic Regression Algorithm',
        description: 'Developed a regularized, logistic regression algorithm using Apache Spark to classify text documents based on their content (accuracy: 0.9989, f-score: 0.9729), deployed and tested on a GKE cluster.',
        links: [
            {title: "Repository", link: 'https://github.com/Surya-Sunkari/logistic-regression-cloud'}
        ]
    },
    {
        iconUrl: dobby,
        theme: 'btn-back-green',
        name: 'Dobby, a Conversational Service Robot Driven by GPT-4',
        description: 'Developed advanced robotics platforms (published at IEEE RO-MAN 2024) integrating GPT-4-powered conversational AI for adaptive task execution, natural language understanding, and user interaction, alongside a flexible semantic mapping system utilizing state-of-the-art vision-language models like SAM, CLIP, and BLIP to enable zero-shot object classification and dynamic environment mapping.',
        links: [
            {title: "Dobby Paper", link: dobby_pdf}, 
            {title: "Mapping Paper", link: semantic_mapping},
            {title: "Dobby Presentation", link: "https://www.youtube.com/watch?v=nxtfpiUrPUc&ab_channel=TexasRobotics"},
            {title: "Mapping Video", link: "https://drive.google.com/file/d/15C5Rdcnh-VcVJTlXmScBHQJ36yvPtoyx/view?resourcekey"}
        ]
    },
    {
        iconUrl: money,
        theme: 'btn-back-blue',
        name: 'Swoosh, a Decentralized Payment System',
        description: 'Designed and built full-stack, decentralized payment and bill-splitting app with in-app wallets, gasless transaction, and secure, peer-to-peer payments, reducing payment finality from days to minutes.',
        links: [
            {title: "Demo", link: "https://devfolio.co/projects/swoosh-d164"},
            {title: "Repository", link: "https://github.com/sreeduggirala/swoosh"},
        ]
    },
    {
        iconUrl: snake,
        theme: 'btn-back-pink',
        name: 'AI-Powered Snake Game with Q-Learning',
        description: 'Developed an AI-driven Snake game using Q-learning, enabling efficient gameplay through reinforcement learning and state preservation in a Q-table.',
        links: [
            {title: "Repository", link: 'https://github.com/Surya-Sunkari/Snake-Q-Learning'}
        ]
    },
    {
        iconUrl: messenger,
        theme: 'btn-back-black',
        name: 'Messaging Application',
        description: 'Built a complete clone of Messenger, allowing users to send text messages and images in a familiar user interface.',
        links: [
            {title: "Live Link", link: 'https://messenger-clone-seven-tau.vercel.app/'},
            {title: "Repository", link: 'https://github.com/Surya-Sunkari/messenger-clone'}
        ]
    },
    {
        iconUrl: music,
        theme: 'btn-back-yellow',
        name: 'Music Player Application',
        description: 'Built a comprehensive music streaming application emulating Spotify\'s features, allowing for file/image upload, user authentication, music playback, and more.',
        links: [
            {title: "Live Link", link: 'https://spotify-clone-surya-sunkari.vercel.app/'},
            {title: "Repository", link: 'https://github.com/Surya-Sunkari/spotify-clone'}
        ]
    }
];