import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import CarouselImg1 from '../assets/car-item1.jpg'
import CarouselImg2 from '../assets/car-item2.jpg'
import CarouselImg3 from '../assets/car-item3.jpg'
import CarouselImg4 from '../assets/car-item4.jpg'
import CarouselImg5 from '../assets/car-item5.jpg'
import CarouselImg6 from '../assets/car-item6.jpg'

interface HeroProps {
  onLoginClick: () => void
}

const slides = [
  {
    title: "Master the Art of Video Creation",
    description: "Learn professional techniques from industry experts and elevate your content.",
    image: CarouselImg1,
    cta: "Start Learning",
    link: "/courses",
  },
  {
    title: "Unlock Your Creative Potential",
    description: "Discover new tools and techniques to bring your vision to life.",
    image: CarouselImg2,
    cta: "Explore Courses",
    link: "/explore",
  },
  {
    title: "Join a Community of Creators",
    description: "Connect, collaborate, and grow with fellow video enthusiasts.",
    image: CarouselImg3,
    cta: "Join Now",
    link: "/community",
  },
  {
    title: "Sound Design",
    description: "Craft immersive audio experiences",
    image: CarouselImg4,
    cta: "Join Now",
    link: "/community",
  },
  {
    title: "Visual Effects",
    description: "Create stunning visual effects",
    image: CarouselImg5,
    cta: "Join Now",
    link: "/community",
  },
  {
    title: "Scriptwriting",
    description: "Write compelling screenplays",
    image: CarouselImg6,
    cta: "Join Now",
    link: "/community",
  },
]

export default function Hero({ onLoginClick }: HeroProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const next = () => setCurrent((current + 1) % slides.length)
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length)

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            exit={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          <div className="absolute inset-0 bg-black opacity-50" />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-4">
          <motion.h1
            key={`title-${current}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            {slides[current].title}
          </motion.h1>
          <motion.p
            key={`description-${current}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl mb-8"
          >
            {slides[current].description}
          </motion.p>
          <motion.div
            key={`cta-${current}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <button
              onClick={() => onLoginClick()}
              className="inline-block bg-[#872341] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#BE3144] transition-colors"
            >
              {slides[current].cta}
            </button>
          </motion.div>
        </div>
      </div>
      <motion.button
        whileHover={{ opacity: 1 }}
        initial={{ opacity: 0.3 }}
        onClick={prev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 p-2 rounded-full text-white transition-opacity duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </motion.button>
      <motion.button
        whileHover={{ opacity: 1 }}
        initial={{ opacity: 0.3 }}
        onClick={next}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 p-2 rounded-full text-white transition-opacity duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </motion.button>
    </section>
  )
}

