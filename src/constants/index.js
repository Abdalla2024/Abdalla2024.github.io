import {
    mobile,
    backend,
    creator,
    web,
    java,
    python,
    javascript,
    swift,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    sql,
    git,
    leetcode,
    tu,
    portfolio,
    nvolve,
    filmfocus,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "IOS\nDeveloper",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Swift",
      icon: swift,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "SQL",
      icon: sql,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineering Club Leader",
      company_name: "Towson University",
      icon: leetcode,
      iconBg: "#383E56",
      date: "Feb 2024 - Dec 2024",
      points: [
        "Organized and led weekly coding sessions, teaching students programming fundamentals and algorithms through hands-on practice.",
        "Conducted LeetCode problem-solving workshops twice a week to prepare members for technical coding interviews.",
        "Developed engaging lessons to explain complex data structures and algorithmic concepts, fostering a deeper understanding of problem-solving strategies.",
        "Mentored club members, offering career advice and mock interview sessions to boost their confidence and readiness for the job market.",
        "Facilitated a collaborative environment, resulting in improved coding skills and successful interviews for several participants.",
      ],
    },
    {
      title: "Computer Science Teaching Assistant ",
      company_name: "Towson University",
      icon: tu,
      iconBg: "#E6DEDD",
      date: "Sep 2024 - Present",
      points: [
        "Assisted in teaching Intro to Computer Science course.",
        "Conducted weekly office hours to support over 50 students with debugging code and understanding complex programming concepts.",
        "Graded assignments and exams, providing detailed feedback to ensure students grasped fundamental principles.",
        "Designed supplemental learning materials, such as coding exercises and practice problems, to reinforce class lectures.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "3D Portfolio",
      description:
        "A 3D portfolio that is an interactive and visually dynamic showcase, built with React, Three.js, and Tailwind CSS, blending modern design with immersive 3D experiences.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "three.js",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/Abdalla2024/Portfolio",
    },
    {
      name: "nVolve",
      description:
        "IOS application that allows Towson University students to search for events on campus, favorite them, get directions to them, and receive notifications so they don't miss them.",
      tags: [
        {
          name: "swiftui",
          color: "blue-text-gradient",
        },
        {
          name: "mapkit",
          color: "green-text-gradient",
        },
        {
          name: "alamofire",
          color: "pink-text-gradient",
        },
      ],
      image: nvolve,
      source_code_link: "https://github.com/Abdalla2024/nVolve",
    },
    {
      name: "Film Focus",
      description:
        "Film Focus is a web application that allows users to create an account, rate movies that they have watched, save movies for later, and see movies recommended to them by AI based on what they like.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "java",
          color: "green-text-gradient",
        },
        {
          name: "mysql",
          color: "pink-text-gradient",
        },
      ],
      image: filmfocus,
      source_code_link: "https://github.com/Abdalla2024/Movie_Recommender",
    },
  ];
  
  export { services, technologies, experiences, projects };