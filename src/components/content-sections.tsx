

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import BusinessCoachImg from '../assets/business-coach.jpg'
import DigitalMarketImg from '../assets/digital-market.jpg'
import MasterContentmg from '../assets/master-content.jpg'

const sections = [
  {
    title: "Sales and Business Strategies",
    description:
      "Learn how to effectively market and sell your video content, grow your audience, and monetize your skills.",
    image: BusinessCoachImg,
    link: "/Library",
  },
  {
    title: "Cutting-edge Marketing Videos",
    description:
      "Master the latest techniques in creating compelling marketing videos that drive engagement and conversions.",
    image: DigitalMarketImg,
    link: "/Library",
  },
  {
    title: "Maximize Creativity for Content Creation",
    description:
      "Unlock your creative potential and learn how to consistently produce innovative and engaging video content.",
    image: MasterContentmg,
    link: "/Library",
  },
]

export default function ContentSections() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center mb-20 last:mb-0`}
          >
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src={section.image || "/placeholder.svg"}
                alt={section.title}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:px-8">
              <h2 className="text-3xl font-bold text-[#09122C] mb-4">{section.title}</h2>
              <p className="text-gray-600 mb-6">{section.description}</p>
              <Link
                to={section.link}
                className="inline-block bg-[#872341] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#BE3144] transition-colors"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

