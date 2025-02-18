

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useState } from "react"
import ExpertContactForm from "./expert-contact-form"

export default function CTASection() {
  const [isExpertFormOpen, setIsExpertFormOpen] = useState(false)

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#09122C] to-[#872341]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative container mx-auto px-4 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Video Journey?</h2>
        <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
          Join thousands of creators who are already making professional-quality videos. Get started today with our
          comprehensive courses.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/signup"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-white text-[#09122C] hover:bg-gray-100 transition-colors text-lg font-medium"
          >
            Start Learning Now
          </Link>
          <button
            onClick={() => setIsExpertFormOpen(true)}
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-white text-white hover:bg-white/10 transition-colors text-lg font-medium"
          >
            Talk to an Expert
          </button>
        </div>
      </motion.div>

      <ExpertContactForm isOpen={isExpertFormOpen} onClose={() => setIsExpertFormOpen(false)} />
    </section>
  )
}

