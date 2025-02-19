

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import SarahImg from '../assets/sarah williams.jpg'
import Michaelmg from '../assets/michael brown.jpg'
import DavidImg from '../assets/david chen.png'

const testimonials = [
  {
    name: "David Chen",
    role: "Content Creator",
    text: "This platform transformed my video creation skills. The courses are comprehensive and the instructors are amazing.",
    image: DavidImg,
  },
  {
    name: "Sarah Williams",
    role: "YouTuber",
    text: "I learned more in 3 months here than I did in a year of trying to learn on my own. Highly recommended!",
    image: SarahImg,
  },
  {
    name: "Michael Brown",
    role: "Filmmaker",
    text: "The quality of instruction and community support here is unmatched. Worth every penny.",
    image: Michaelmg,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#09122C] mb-4">What Our Students Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied students who have transformed their video creation skills.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <Quote className="w-12 h-12 text-[#E17564] mb-6" />
              <p className="text-xl text-gray-600 mb-6">{testimonials[current].text}</p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={testimonials[current].image || "/placeholder.svg"}
                    alt={testimonials[current].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-[#09122C]">{testimonials[current].name}</h4>
                  <p className="text-sm text-gray-600">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-white shadow-md text-[#09122C] hover:text-[#872341]"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-white shadow-md text-[#09122C] hover:text-[#872341]"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

