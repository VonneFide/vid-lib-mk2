import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Filter, Home, TrendingUp, FolderOpen, PlayCircle, Heart, Clock, LogOut, Share2 } from "lucide-react"
import { useNavigate, Outlet  } from "react-router-dom"
import videos from "../lib/data"
import ManProfImg from '../assets/man.png' 

const categories = [
  "All",
  "Popular",
  "Video Creation",
  "Marketing",
  "Animation",
  "Sound Design",
  "Your Videos",
  "Favorites",
  "Watch Later",
]

const sidebarItems = [
  { icon: Home, label: "Home" },
  { icon: TrendingUp, label: "Popular" },
  { icon: FolderOpen, label: "Categories" },
  { icon: PlayCircle, label: "Your Videos" },
  { icon: Heart, label: "Favorites" },
  { icon: Clock, label: "Watch Later" },
]

export default function VideosPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [activeSidebarItem, setActiveSidebarItem] = useState("Home")
  const router = useNavigate()

  const filteredVideos =
    selectedCategory === "All" ? videos : videos.filter((video) => video.categories.includes(selectedCategory))

  const searchFilteredVideos = filteredVideos.filter(
    (video) =>
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.author.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleLogout = () => {
    // Add any logout logic here (e.g., clearing session, etc.)
    router("/") // Redirect to homepage
  }

  const handleSidebarItemClick = (label: string) => {
    setActiveSidebarItem(label)
    if (label !== "Home" && label !== "Categories") {
      setSelectedCategory(label)
    } else if (label === "Home") {
      setSelectedCategory("All")
    }
  }

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category)
    if (activeSidebarItem === "Categories") {
      setActiveSidebarItem("Home")
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-[#09122C] text-white flex flex-col h-screen">
        <div className="p-6">
          <h1 className="text-2xl font-bold cursor-pointer" onClick={() => router("/")}>
            VideoLib
          </h1>
        </div>

        <nav className="flex-1 px-4">
          {sidebarItems.map((item) => (
            <button
              key={item.label}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors w-full text-left ${
                activeSidebarItem === item.label ? "bg-white/10 text-white" : ""
              }`}
              onClick={() => handleSidebarItemClick(item.label)}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center space-x-3 mb-4">
            <img
              src= {ManProfImg}
              alt="User profile"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-medium">John Doe</span>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-[#872341] text-white rounded-lg hover:bg-[#BE3144] transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Video Player */}
      <Outlet/>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
      
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center space-x-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search videos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#BE3144]"
              />
            </div>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center"
            >
              <Filter className="w-5 h-5 mr-2" />
              Filter
            </button>
            <button className="px-4 py-2 bg-[#872341] text-white rounded-lg hover:bg-[#BE3144] transition-colors">
              Upload Video
            </button>
          </div>
          {activeSidebarItem !== "Categories" && (
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`px-4 py-1.5 rounded-full whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? "bg-[#872341] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="p-6">
          {isFilterOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white p-4 rounded-lg shadow-md mb-6"
            >
              <h3 className="text-lg font-semibold mb-4">Filter Options</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Any</option>
                    <option>Short (&lt; 5 min)</option>
                    <option>Medium (5-20 min)</option>
                    <option>Long (&gt; 20 min)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Upload Date</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Any time</option>
                    <option>Today</option>
                    <option>This week</option>
                    <option>This month</option>
                    <option>This year</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}

          {activeSidebarItem === "Categories" ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {categories
                .filter((category) => category !== "All")
                .map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
                  >
                    <h3 className="font-semibold text-lg mb-2">{category}</h3>
                    <p className="text-sm text-gray-600">
                      {videos.filter((video) => video.categories.includes(category)).length} videos
                    </p>
                  </button>
                ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {searchFilteredVideos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => router(`/Library/video/play/${video.id}`, {replace : true})}
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
                        <button className="p-1 text-gray-600 hover:text-[#872341]" onClick={(e) => e.stopPropagation()}>
                          <Heart className="w-4 h-4" />
                        </button>
                        <button className="p-1 text-gray-600 hover:text-[#872341]" onClick={(e) => e.stopPropagation()}>
                          <Clock className="w-4 h-4" />
                        </button>
                        <button className="p-1 text-gray-600 hover:text-[#872341]" onClick={(e) => e.stopPropagation()}>
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

