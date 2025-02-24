import { motion } from 'framer-motion'
import filmfocus from '../assets/filmfocus.png'
import nvolve from '../assets/nvolve.png'
import marketplace from '../assets/marketplace.png'

const Projects = () => {
  const projects = [
    {
      title: 'University Marketplace',
      description: '(In Progress) Online marketplace for students only. Students login with their university email and have a safe and convenient place to buy and sell items.',
      technologies: ['MERN Stack', 'Tailwind CSS', 'Firebase'],
      image: marketplace,
      link: 'https://github.com/Abdalla2024/COSC484_Project'
    },
    {
      title: 'nVolve',
      description: 'IOS application that allows Towson University students to search for events on campus, favorite them, get directions to them, and receive notifications so they don\'t miss them.',
      technologies: ['SwiftUI', 'Mapkit', 'Alamofire'],
      image: nvolve,
      link: 'https://github.com/Abdalla2024/nVolve'
    },
    {
      title: 'Film Focus',
      description: 'Film Focus is a web application that allows users to create an account, rate movies that they have watched, save movies for later, and see movies recommended to them by AI based on what they like.',
      technologies: ['HTML', 'Java', 'MySQL'],
      image: filmfocus,
      link: 'https://github.com/Abdalla2024/Movie_Recommender'
    },
  ]

  return (
    <div className="w-full mb-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black mt-2">
          Projects
        </h2>
        <p className="mt-4 text-secondary text-[17px] max-w-3xl mx-auto leading-[30px]">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories. It reflects my ability to solve complex problems,
          work with different technologies, and manage projects effectively.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#151030] rounded-2xl p-5 h-full"
          >
            <div className="relative w-full h-[260px] mb-5">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            <h3 className="text-[24px] font-bold">
              {project.title}
            </h3>
            <p className="mt-2 text-secondary text-[14px]">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4 mt-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects 