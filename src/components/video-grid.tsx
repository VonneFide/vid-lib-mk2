import { motion } from "framer-motion"
import { Heart, Clock, Share2 } from "lucide-react"

// Sample video data - in a real app, this would come from an API
const videos = {
  All: [
    {
      id: 1,
      title: "Advanced Video Editing Masterclass",
      author: "Sarah Johnson",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "42:30",
      views: "8.5K",
      date: "2024-02-14",
    },
    {
      id: 2,
      title: "Professional Lighting Techniques",
      author: "Michael Chen",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "35:45",
      views: "12K",
      date: "2024-02-15",
    },
    // ... more videos from other categories
  ],
  Popular: [
    {
      id: 3,
      title: "Viral Video Creation Secrets",
      author: "Alex Rivera",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "55:20",
      views: "250K",
      date: "2024-02-10",
    },
    {
      id: 4,
      title: "YouTube Algorithm Mastery",
      author: "Emma Wilson",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "48:15",
      views: "180K",
      date: "2024-02-12",
    },
    {
      id: 5,
      title: "Social Media Video Marketing",
      author: "David Kim",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "39:45",
      views: "145K",
      date: "2024-02-13",
    },
    {
      id: 6,
      title: "TikTok Content Strategy",
      author: "Sophie Chen",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "32:20",
      views: "120K",
      date: "2024-02-14",
    },
    {
      id: 7,
      title: "Instagram Reels Masterclass",
      author: "James Wilson",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "45:30",
      views: "98K",
      date: "2024-02-15",
    },
  ],
  "Video Creation": [
    {
      id: 8,
      title: "Professional Lighting Techniques",
      author: "Michael Chen",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "35:45",
      views: "12K",
      date: "2024-02-15",
    },
    {
      id: 9,
      title: "Camera Movement Basics",
      author: "Emma Wilson",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "28:15",
      views: "6.2K",
      date: "2024-02-15",
    },
    {
      id: 10,
      title: "Color Grading Essentials",
      author: "Alex Rivera",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "51:20",
      views: "9.8K",
      date: "2024-02-14",
    },
  ],
  Marketing: [
    {
      id: 11,
      title: "Video Marketing Strategy",
      author: "Lisa Thompson",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "45:10",
      views: "15.3K",
      date: "2024-02-13",
    },
    {
      id: 12,
      title: "Social Media Video Optimization",
      author: "David Kim",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "38:25",
      views: "11.7K",
      date: "2024-02-14",
    },
    {
      id: 13,
      title: "YouTube Growth Tactics",
      author: "Rachel Green",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "42:55",
      views: "18.2K",
      date: "2024-02-15",
    },
  ],
  Animation: [
    {
      id: 14,
      title: "2D Animation Fundamentals",
      author: "Emily Rodriguez",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "56:30",
      views: "8.9K",
      date: "2024-02-14",
    },
    {
      id: 15,
      title: "Character Animation Workshop",
      author: "Marcus Lee",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "62:15",
      views: "7.3K",
      date: "2024-02-15",
    },
    {
      id: 16,
      title: "Motion Graphics Masterclass",
      author: "Sarah Chen",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "48:40",
      views: "9.1K",
      date: "2024-02-13",
    },
  ],
  "Sound Design": [
    {
      id: 17,
      title: "Audio Mixing Basics",
      author: "David Kim",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "41:20",
      views: "6.7K",
      date: "2024-02-15",
    },
    {
      id: 18,
      title: "Sound Effects Creation",
      author: "Lisa Wong",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "35:45",
      views: "5.4K",
      date: "2024-02-14",
    },
    {
      id: 19,
      title: "Music Scoring for Video",
      author: "John Smith",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "52:30",
      views: "7.8K",
      date: "2024-02-13",
    },
  ],
  "Your Videos": [
    {
      id: 20,
      title: "My First Tutorial Video",
      author: "You",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "15:20",
      views: "234",
      date: "2024-02-10",
    },
    {
      id: 21,
      title: "Product Review - Camera Gear",
      author: "You",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "22:45",
      views: "567",
      date: "2024-02-12",
    },
    {
      id: 22,
      title: "Behind the Scenes - Project X",
      author: "You",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "18:30",
      views: "345",
      date: "2024-02-14",
    },
  ],
  Favorites: [
    {
      id: 23,
      title: "Advanced Editing Techniques",
      author: "Sarah Johnson",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "45:15",
      views: "25K",
      date: "2024-02-08",
    },
    {
      id: 24,
      title: "Cinematic Lighting Guide",
      author: "Michael Chen",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "38:20",
      views: "18K",
      date: "2024-02-09",
    },
    {
      id: 25,
      title: "Color Theory for Filmmakers",
      author: "Emma Wilson",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "42:30",
      views: "15K",
      date: "2024-02-10",
    },
  ],
  "Watch Later": [
    {
      id: 26,
      title: "Advanced Camera Techniques",
      author: "James Wilson",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "55:20",
      views: "12.3K",
      date: "2024-02-15",
    },
    {
      id: 27,
      title: "Video Marketing Masterclass",
      author: "Lisa Thompson",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "68:45",
      views: "8.9K",
      date: "2024-02-14",
    },
  ],
}

interface VideoGridProps {
  category: string
  searchQuery: string
}

export default function VideoGrid({ category, searchQuery }: VideoGridProps) {
  const filteredVideos = videos[category as keyof typeof videos] || videos["All"]

  const searchFilteredVideos = filteredVideos.filter(
    (video) =>
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.author.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {searchFilteredVideos.map((video, index) => (
        <motion.div
          key={video.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="relative group">
            <img
              src={video.thumbnail || "/placeholder.svg"}
              alt={video.title}
              width={350}
              height={200}
              className="w-full object-cover"
            />
            <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-white text-sm rounded">
              {video.duration}
            </div>
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <button className="px-4 py-2 bg-[#872341] text-white rounded-lg hover:bg-[#BE3144] transition-colors">
                Watch Now
              </button>
            </div>
          </div>

          <div className="p-4">
            <h3 className="font-semibold text-[#09122C] mb-1 line-clamp-2">{video.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{video.author}</p>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">{video.views} views</span>
                <span className="text-gray-600">{new Date(video.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-1 text-gray-600 hover:text-[#872341]">
                  <Heart className="w-4 h-4" />
                </button>
                <button className="p-1 text-gray-600 hover:text-[#872341]">
                  <Clock className="w-4 h-4" />
                </button>
                <button className="p-1 text-gray-600 hover:text-[#872341]">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

