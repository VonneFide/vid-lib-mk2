

import { motion } from "framer-motion"
import { Play, Star } from "lucide-react"

const videos = [
  {
    title: "Advanced Video Editing Masterclass",
    author: "Sarah Johnson",
    price: "$99",
    rating: 4.9,
    reviews: 245,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Cinematic Filmmaking Techniques",
    author: "Michael Chen",
    price: "$129",
    rating: 4.8,
    reviews: 189,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "YouTube Content Creation",
    author: "Alex Rivera",
    price: "$79",
    rating: 4.7,
    reviews: 312,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Professional Sound Design",
    author: "Emma Wilson",
    price: "$89",
    rating: 4.9,
    reviews: 156,
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function Marketplace() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#09122C] mb-4">In-Demand Video Courses</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our most popular courses and start learning from industry experts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative group">
                <img
                  src={video.image || "/placeholder.svg"}
                  alt={video.title}
                  width={300}
                  height={200}
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-[#09122C]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Play className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-[#09122C] mb-1">{video.title}</h3>
                <p className="text-sm text-gray-600 mb-2">by {video.author}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{video.rating}</span>
                    <span className="text-sm text-gray-500">({video.reviews})</span>
                  </div>
                  <span className="font-bold text-[#872341]">{video.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

