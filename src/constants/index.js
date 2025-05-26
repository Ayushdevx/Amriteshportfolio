import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  crmnext,
  nickelfox,
  newgen,
  skillrisers,
  proximus,
  aptihealthWeb,
  aptihealthApp,
  zealWeb,
  zealApp,
  rollWeb,
  rollApp,
  linkedIn,
  github,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "AI & ML Developer",
    icon: web,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Computer Vision Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: javascript, // Using JavaScript icon as placeholder for Python
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "C++",
    icon: typescript, // Using TypeScript icon as placeholder for C++
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
];

const experiences = [
  {
    title: "B.Tech Computer Science (AI & ML)",
    company_name: "Vellore Institute of Technology - Chennai",
    company_website: "https://vit.ac.in/",
    icon: skillrisers, // Using as placeholder for VIT
    iconBg: "#E6DEDD",
    date: "2023 - Expected 2027",
    points: [
      "Pursuing Bachelor of Technology in Computer Science with specialization in Artificial Intelligence and Machine Learning.",
      "Current CGPA: 9.10 - Maintaining excellent academic performance.",
      "Focus areas include Machine Learning, Deep Learning, Natural Language Processing, and Computer Vision.",
      "Engaged in research projects involving AI model optimization and computer vision applications.",
    ],
  },
  {
    title: "CBSE 12th - Computer Science with Math",
    company_name: "Bhavan's Vidya Mandir, Girinagar",
    company_website: "#",
    icon: proximus, // Using as placeholder for school
    iconBg: "#E6DEDD",
    date: "Completed 2023",
    points: [
      "Completed Higher Secondary Education with Computer Science and Mathematics as core subjects.",
      "Strong foundation in programming concepts, data structures, and mathematical problem-solving.",
      "Developed early interest in software development and artificial intelligence applications.",
      "Participated in various coding competitions and technical events during school years.",
    ],
  },
  {
    title: "Software Development Projects",
    company_name: "Personal Projects & Learning",
    company_website: "#",
    icon: newgen,
    iconBg: "#E6DEDD",
    date: "2022 - Present",
    points: [
      "Developing machine learning models for object detection and image processing using YOLO and OpenCV.",
      "Building web applications using React.js, Node.js, and integrating AI/ML capabilities.",
      "Working on mobile app development using Flutter and React Native with backend integration.",
      "Implementing NLP projects using BERT and TensorFlow for text analysis and processing.",
    ],
  },
  {
    title: "Technical Skills Development",
    company_name: "Continuous Learning",
    company_website: "#",
    icon: crmnext,
    iconBg: "#E6DEDD",
    date: "2021 - Present",
    points: [
      "Mastering programming languages: Python, Java, JavaScript, C++, C, Swift, Kotlin.",
      "Expertise in AI/ML frameworks: TensorFlow, PyTorch, OpenCV for computer vision applications.",
      "Database management with SQL and NoSQL technologies including MongoDB and MySQL.",
      "Cloud technologies and deployment using AWS, Firebase for scalable application development.",
    ],
  },
];

const projects = [
  {
    name: "Computer Vision Lane Detection",
    description:
      "Advanced lane tracking system using OpenCV and YOLO for real-time object detection. Implements computer vision algorithms for autonomous driving applications with high accuracy lane detection.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "opencv",
        color: "green-text-gradient",
      },
      {
        name: "yolo",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthWeb, // Using existing image as placeholder
    hosted_link: "#",
  },
  {
    name: "NLP Text Analysis Platform",
    description:
      "Natural Language Processing application using BERT and TensorFlow for sentiment analysis, text classification, and language understanding with advanced NLP techniques.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "bert",
        color: "pink-text-gradient",
      },
    ],
    image: zealWeb, // Using existing image as placeholder
    hosted_link: "#",
  },
  {
    name: "Machine Learning Model Optimizer",
    description:
      "Comprehensive ML model optimization platform featuring automated hyperparameter tuning, model comparison, and performance analysis using PyTorch and TensorFlow frameworks.",
    tags: [
      {
        name: "pytorch",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "pink-text-gradient",
      },
    ],
    image: rollWeb, // Using existing image as placeholder
    hosted_link: "#",
  },
  {
    name: "Flutter Mobile App",
    description:
      "Cross-platform mobile application built with Flutter featuring real-time data synchronization, Firebase integration, and responsive UI design for both iOS and Android platforms.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "dart",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthApp, // Using existing image as placeholder
    hosted_link: "#",
  },
  {
    name: "React.js Web Application",
    description:
      "Modern web application built with React.js featuring responsive design, API integration, and state management. Includes user authentication and real-time data updates.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: zealApp, // Using existing image as placeholder
    hosted_link: "#",
  },
  {
    name: "Spring Boot API Backend",
    description:
      "Scalable REST API backend built with Spring Boot featuring microservices architecture, database integration, and comprehensive API documentation for enterprise applications.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "spring-boot",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: rollApp, // Using existing image as placeholder
    hosted_link: "#",
  },
];

const personalInfo = {
  name: "Amrithesh",
  fullName: "Amrithesh S Menon",
  email: "amrithesh@example.com",
  role: "Software Developer",
  about: `Passionate software developer with expertise in Machine Learning, Deep Learning, and NLP. Skilled in Python, C, C++, Java with experience in web and app development. Strong analytical and problem-solving skills with a focus on efficiency and scalability. Proactive, detail-oriented, and an excellent communicator with experience in AI & ML, Computer Vision, and scalable software development.`,
  projectsIntro: `Following projects showcases my skills and experience through
  real-world examples of my work. Each project is briefly described with
  live demos. It reflects my ability to solve complex problems, work
  with different technologies, and manage projects effectively.`,
};

const publicUrls = {
  resume:
    "/resume amrithesh.pdf",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/amrithesh-s-menon-1a2b86277/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/im-Amrith",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
