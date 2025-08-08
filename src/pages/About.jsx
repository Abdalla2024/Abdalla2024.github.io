import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">About Me</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          I'm a versatile Full Stack Developer with a passion for building comprehensive software solutions. 
          My expertise spans across multiple domains of software development, allowing me to tackle projects 
          from various angles and deliver complete, scalable solutions.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="font-bold text-xl mb-4 text-blue-600 dark:text-blue-400">Programming Languages</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>Java</li>
              <li>Python</li>
              <li>C++</li>
              <li>JavaScript/TypeScript</li>
              <li>Swift</li>
              <li>SQL</li>
              <li>HTML/CSS</li>
              <li>LaTeX</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="font-bold text-xl mb-4 text-blue-600 dark:text-blue-400">Frameworks & Libraries</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>React</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>Tailwind CSS</li>
              <li>Firebase</li>
              <li>JUnit</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="font-bold text-xl mb-4 text-blue-600 dark:text-blue-400">Data & Analytics</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>MongoDB</li>
              <li>pandas</li>
              <li>Tableau</li>
              <li>Matplotlib</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="font-bold text-xl mb-4 text-blue-600 dark:text-blue-400">Development Tools</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>Git/GitHub</li>
              <li>SVN</li>
              <li>VS Code</li>
              <li>Xcode</li>
            </ul>
          </div>
        </div>

        <p className="text-lg text-gray-600 dark:text-gray-300 mt-8">
          I'm constantly exploring new technologies and methodologies to enhance my skill set and deliver 
          better solutions. My experience across multiple programming languages and development tools, 
          combined with both frontend and backend expertise, allows me to implement complete software 
          solutions from concept to deployment.
        </p>
      </div>
    </motion.div>
  )
}

export default About 