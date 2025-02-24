import { motion } from 'framer-motion'
import pcImage from '../assets/pc.png'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-screen"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Hi, I'm <span className="text-blue-600">Abdalla Abdelmagid</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
          Full Stack Developer | Designer | Creative Thinker
        </p>
      </div>
      <motion.img
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        src={pcImage}
        alt="PC Setup"
        className="w-72 h-72 md:w-[28rem] md:h-[28rem] object-contain"
      />
    </motion.div>
  )
}

export default Home 