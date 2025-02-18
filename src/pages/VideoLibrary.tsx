import { motion } from "framer-motion"
import { Search, Upload, Home, Bookmark, Clock, Heart, Play } from "lucide-react"
import { useState } from "react"

const categories = ["All", "Healthcare", "Education", "Sports", "Nature", "Cooking", "Fashion"]

const videos = [
  {
    id: 1,
    title: "Morning Training: Relaxation and Consciousness",
    author: "John Doe",
    views: "12K",
    duration: "25:16",
    thumbnail: "/placeholder.svg?height=200&width=300",
    date: "2/15/2024",
  },
  // Add more video data as needed
]

export default function VideoLibrary() {
  const [activeCategory, setActiveCategory] = useState("All")

  return (
    <div className="min-h-screen bg-[#09122C] text-white flex">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-64 bg-[#872341]/20 p-6 hidden md:block"
      >
        <h1 className="text-2xl font-bold mb-8">VideoLib</h1>
        <nav className="space-y-4">
          {[
            { icon: <Home className="w-5 h-5" />, label: "Home" },
            { icon: <Play className="w-5 h-5" />, label: "Your Videos" },
            { icon: <Heart className="w-5 h-5" />, label: "Favorites" },
            { icon: <Clock className="w-5 h-5" />, label: "Watch Later" },
            { icon: <Bookmark className="w-5 h-5" />, label: "Categories" },
          ].map((item, index) => (
            <button
              key={index}
              className="flex items-center gap-3 text-white/80 hover:text-white w-full p-2 rounded-lg hover:bg-[#872341]/20 transition-colors"
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Search and Upload */}
        <div className="flex justify-between items-center mb-8">
          <div className="relative flex-1 max-w-xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" />
            <input
              type="search"
              placeholder="Search videos..."
              className="w-full bg-[#872341]/20 rounded-lg pl-10 pr-4 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#E17564]"
            />
          </div>
          <button className="ml-4 px-4 py-2 bg-[#E17564] rounded-lg hover:bg-[#BE3144] transition-colors flex items-center gap-2">
            <Upload className="w-4 h-4" />
            Upload
          </button>
        </div>

        {/* Categories */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                activeCategory === category
                  ? "bg-[#BE3144] text-white"
                  : "bg-[#872341]/20 text-white/80 hover:bg-[#872341]/40"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-[#872341]/20 rounded-lg overflow-hidden hover:bg-[#872341]/30 transition-colors"
            >
              <div className="relative">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full aspect-video object-cover"
                />
                <span className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-sm">
                  {video.duration}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">{video.title}</h3>
                <div className="flex justify-between text-sm text-white/60">
                  <span>{video.author}</span>
                  <span>{video.views} views</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}

