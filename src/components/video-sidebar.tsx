import {Link} from "react-router-dom"
import { Home, TrendingUp, FolderOpen, PlayCircle, Heart, Clock, Upload } from "lucide-react"

const menuItems = [
  { icon: Home, label: "Home", href: "/videos" },
  { icon: TrendingUp, label: "Popular", href: "/videos/popular" },
  { icon: FolderOpen, label: "Categories", href: "/videos/categories" },
  { icon: PlayCircle, label: "Your Videos", href: "/videos/your-videos" },
  { icon: Heart, label: "Favorites", href: "/videos/favorites" },
  { icon: Clock, label: "Watch Later", href: "/videos/watch-later" },
]

export default function VideoSidebar() {
  return (
    <div className="w-64 bg-[#09122C] text-white flex flex-col h-screen">
      <div className="p-6">
        <Link to="/" className="text-2xl font-bold">
          VideoLib
        </Link>
      </div>

      <nav className="flex-1 px-4">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="p-4">
        <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-[#872341] text-white rounded-lg hover:bg-[#BE3144] transition-colors">
          <Upload className="w-5 h-5" />
          <span>Upload Video</span>
        </button>
      </div>
    </div>
  )
}

