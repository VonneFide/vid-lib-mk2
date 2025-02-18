

import { motion } from "framer-motion"
import { Video, Camera, Edit, Music, Users, BarChart, Mic, Lightbulb } from "lucide-react"

const categories = [
  { icon: Video, title: "Video Editing", description: "Master post-production" },
  { icon: Camera, title: "Cinematography", description: "Learn camera techniques" },
  { icon: Edit, title: "Content Creation", description: "Create engaging content" },
  { icon: Music, title: "Sound Design", description: "Perfect your audio" },
  { icon: Users, title: "Collaboration", description: "Work with teams" },
  { icon: BarChart, title: "Analytics", description: "Track performance" },
  { icon: Mic, title: "Voice Over", description: "Professional audio" },
  { icon: Lightbulb, title: "Storytelling", description: "Craft narratives" },
]

export default function Categories() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#09122C] mb-4">Explore Our Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dive into our comprehensive collection of video creation categories and master every aspect of content
            production.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-[#872341]/10 text-[#872341] group-hover:bg-[#872341] group-hover:text-white transition-colors">
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-[#09122C]">{category.title}</h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

