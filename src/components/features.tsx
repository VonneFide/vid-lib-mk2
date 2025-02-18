

import { motion } from "framer-motion"
import { Shield, Zap, Users, Trophy } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "High-Quality Content",
    description: "Access premium courses created by industry professionals with years of experience.",
  },
  {
    icon: Zap,
    title: "Learn at Your Pace",
    description: "Flexible learning schedule with lifetime access to all purchased courses.",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Join a thriving community of creators and get feedback on your work.",
  },
  {
    icon: Trophy,
    title: "Industry Recognition",
    description: "Earn certificates recognized by leading companies in the industry.",
  },
]

export default function Features() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#09122C] mb-4">Why Choose Our Platform</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide the tools and knowledge you need to succeed in video creation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <motion.div
                className="inline-flex p-4 rounded-full bg-[#E17564]/10 text-[#872341] mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon className="w-6 h-6" />
              </motion.div>
              <h3 className="text-xl font-semibold text-[#09122C] mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

