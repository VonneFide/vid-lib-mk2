

import { motion } from "framer-motion"

const experts = [
  {
    name: "Sarah Johnson",
    role: "Award-winning Filmmaker",
    image: "/placeholder.svg?height=200&width=200",
    description:
      "With over 15 years of experience in the film industry, Sarah brings a wealth of knowledge in cinematography and storytelling.",
  },
  {
    name: "Michael Chen",
    role: "Digital Marketing Guru",
    image: "/placeholder.svg?height=200&width=200",
    description:
      "Michael is a renowned expert in creating viral marketing videos and building brand presence through video content.",
  },
  {
    name: "Emily Rodriguez",
    role: "Animation Specialist",
    image: "/placeholder.svg?height=200&width=200",
    description:
      "Emily's innovative approach to 2D and 3D animation has earned her multiple industry awards and a dedicated following.",
  },
  {
    name: "David Kim",
    role: "Sound Design Expert",
    image: "/placeholder.svg?height=200&width=200",
    description:
      "David's expertise in audio engineering and sound design has been featured in numerous blockbuster films and popular video games.",
  },
]

export default function IndustryExperts() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#09122C] mb-4">Learn from Top Industry Experts</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our courses are taught by leading professionals in the video creation industry, bringing you cutting-edge
            knowledge and insider tips.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experts.map((expert, index) => (
            <motion.div
              key={expert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={expert.image || "/placeholder.svg"}
                alt={expert.name}
                width={200}
                height={200}
                className="w-full object-cover h-48"
              />
              <div className="p-4">
                <h3 className="font-semibold text-[#09122C] text-xl mb-1">{expert.name}</h3>
                <p className="text-[#872341] mb-2">{expert.role}</p>
                <p className="text-gray-600 text-sm">{expert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

