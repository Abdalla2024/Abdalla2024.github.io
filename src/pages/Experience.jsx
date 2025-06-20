import { motion } from 'framer-motion'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import tuLogo from '../assets/tu.png'
import leetcodeLogo from '../assets/leetcode.png'
import bookdLogo from '../assets/bookd.png'
import { useEffect, useState } from 'react'

const ExperienceCard = ({ experience, isDarkMode }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: isDarkMode ? "#1d1836" : "#ffffff",
        color: isDarkMode ? "#fff" : "#333",
        boxShadow: "0 3px 0 rgba(0, 0, 0, 0.1)",
        border: isDarkMode ? "none" : "1px solid #e5e7eb",
      }}
      contentArrowStyle={{ 
        borderRight: isDarkMode ? "7px solid #1d1836" : "7px solid #ffffff" 
      }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className={`object-contain ${experience.isBookd ? 'w-[75%] h-[75%]' : 'w-[60%] h-[60%]'}`}
          />
        </div>
      }
    >
      <div>
        <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-[24px] font-bold`}>
          {experience.title}
        </h3>
        <p className={`${isDarkMode ? 'text-secondary' : 'text-gray-600'} text-[16px] font-semibold`} style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className={`${isDarkMode ? 'text-white-100' : 'text-gray-700'} text-[14px] pl-1 tracking-wider`}
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    // Check if the user prefers dark mode
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeQuery.matches);
    
    // Listen for changes in the color scheme preference
    const handleChange = (e) => {
      setIsDarkMode(e.matches);
    };
    
    darkModeQuery.addEventListener('change', handleChange);
    return () => darkModeQuery.removeEventListener('change', handleChange);
  }, []);

  const experiences = [
    {
      title: "IOS Developer",
      company_name: "Self-Employed",
      icon: bookdLogo,
      iconBg: "#ffffff",
      date: "January 2025 - Present",
      isBookd: true,
      points: [
        "Design, develop, and maintain multiple iOS applications using Swift and Firebase, focusing on user-friendly interfaces and robust functionality",
        "Published personal projects to the App Store, including Bookd: a reading tracker app with features like timers, annotations, and analytics",
        "Integrate third-party APIs (e.g., Google Books API) and perform rigorous QA testing to reduce crash rates and improve user engagement"
      ],
    },
    {
      title: "Computer Science Tutor",
      company_name: "Towson University",
      icon: tuLogo,
      iconBg: "#E6DEDD",
      date: "September 2024 - May 2025",
      points: [
        "Tutored university students in Object-Oriented Programming and Data Structures & Algorithms, simplifying complex concepts for better understanding",
        "Provided personalized guidance and problem-solving strategies to enhance students' coding proficiency and logical thinking",
        "Assisted students with coding assignments, exam preparation, and debugging, leading to improved academic performance"
      ],
    },
    {
      title: "Software Engineering Club Leader",
      company_name: "Towson University",
      icon: leetcodeLogo,
      iconBg: "#2d2d2d",
      date: "February 2024 - December 2024",
      points: [
        "Organized and led weekly coding sessions, teaching students programming fundamentals and algorithms through hands-on practice",
        "Conducted LeetCode problem-solving workshops twice a week to prepare members for technical coding interviews",
        "Developed engaging lessons to explain complex data structures and algorithmic concepts, fostering a deeper understanding of problem-solving strategies",
        "Facilitated a collaborative environment, resulting in improved coding skills and successful interviews for several participants"
      ],
    },
  ]

  return (
    <div className="relative z-0 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[14px] uppercase tracking-wider text-center text-gray-600 dark:text-gray-400">
          What I have done so far
        </p>
        <h2 className="text-4xl font-black text-center mt-2 mb-16 text-gray-900 dark:text-white">
          Leadership / Experience
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              isDarkMode={isDarkMode}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default Experience 