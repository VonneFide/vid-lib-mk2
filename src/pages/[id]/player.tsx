import type React from "react";
import { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"; 
import { motion } from "framer-motion";
import {   
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Search,
  Mic,
  ThumbsUp,
  ThumbsDown,
  Heart,
  Flag,
  Share2,
 } from "lucide-react";
import videos from "../../lib/data";
import ScrollToTop from "../../components/scroll-to-top"

export default function VideoPage() {
  const { id } = useParams<{ id: string }>();
  const router = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("")

  const video = videos.find((v) => v.id === Number.parseInt(id || "0"));
  const recommendedVideos = videos
    .filter((v) => v.id !== Number.parseInt(id || "0"))
    .slice(0, 15);

    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.addEventListener("timeupdate", handleTimeUpdate)
        videoRef.current.addEventListener("loadedmetadata", handleLoadedMetadata)
      }
  
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener("timeupdate", handleTimeUpdate)
          videoRef.current.removeEventListener("loadedmetadata", handleLoadedMetadata)
        }
      }
    }, [])
  
    const handleTimeUpdate = () => {
      if (videoRef.current) {
        setCurrentTime(videoRef.current.currentTime)
      }
    }
  
    const handleLoadedMetadata = () => {
      if (videoRef.current) {
        setDuration(videoRef.current.duration)
      }
    }
  
    const togglePlay = () => {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause()
        } else {
          videoRef.current.play()
        }
        setIsPlaying(!isPlaying)
      }
    }
  
    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newVolume = Number.parseFloat(e.target.value)
      setVolume(newVolume)
      if (videoRef.current) {
        videoRef.current.volume = newVolume
      }
      setIsMuted(newVolume === 0)
    }
  
    const toggleMute = () => {
      if (videoRef.current) {
        videoRef.current.muted = !isMuted
        setIsMuted(!isMuted)
      }
    }
  
    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
      const seekTime = Number.parseFloat(e.target.value)
      setCurrentTime(seekTime)
      if (videoRef.current) {
        videoRef.current.currentTime = seekTime
      }
    }
  
    const formatTime = (time: number) => {
      const minutes = Math.floor(time / 60)
      const seconds = Math.floor(time % 60)
      return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
    }
  
    if (!video) {
      return <div>Video not found</div>
    }
  
    return (
      <div className="flex flex-col min-h-screen bg-gray-100">
        {/* Header */}
        <header className="bg-gradient-to-r from-[#872341] to-[#BE3144] shadow-md py-4 px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white cursor-pointer" onClick={() => router("/")}>
              VideoLib
            </h1>
            <div className="flex-1 max-w-3xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-12 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <Mic className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="w-[88px]"></div> {/* Placeholder to balance the layout */}
          </div>
        </header>
  
        <div className="flex flex-col lg:flex-row flex-1 mt-6">
          <div className="lg:w-3/4 p-4">
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
              <video
                ref={videoRef}
                src={video.thumbnail} // Replace with actual video source when available
                className="w-full h-full object-contain"
                onClick={togglePlay}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <div className="flex items-center justify-between text-white mb-2">
                  <button onClick={togglePlay} className="p-2 rounded-full bg-white/20 backdrop-blur-md">
                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                  </button>
                  <div className="flex items-center space-x-2">
                    <button onClick={toggleMute} className="p-2 rounded-full bg-white/20 backdrop-blur-md">
                      {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={volume}
                      onChange={handleVolumeChange}
                      className="w-24 accent-[#872341]"
                    />
                    <button className="p-2 rounded-full bg-white/20 backdrop-blur-md">
                      <Maximize className="w-6 h-6" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <span>{formatTime(currentTime)}</span>
                  <input
                    type="range"
                    min="0"
                    max={duration}
                    value={currentTime}
                    onChange={handleSeek}
                    className="flex-grow accent-[#872341]"
                  />
                  <span>{formatTime(duration)}</span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold text-[#09122C]">{video.title}</h1>
                <p className="text-gray-600">
                  {video.author} • {video.views} views
                </p>
                <p className="mt-2 text-gray-700">{video.description || "No description available."}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-[#872341]">
                  <ThumbsUp className="w-5 h-5" />
                  <span>Like</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-700 hover:text-[#872341]">
                  <ThumbsDown className="w-5 h-5" />
                  <span>Dislike</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-700 hover:text-[#872341]">
                  <Heart className="w-5 h-5" />
                  <span>Favorite</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-700 hover:text-[#872341]">
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-700 hover:text-[#872341]">
                  <Flag className="w-5 h-5" />
                  <span>Report</span>
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-1/4 p-4">
            <h2 className="text-xl font-semibold mb-4 text-[#09122C]">Recommended Videos</h2>
            <div className="space-y-4">
              {recommendedVideos.map((recommendedVideo) => (
                <motion.div
                  key={recommendedVideo.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex space-x-2 cursor-pointer"
                  onClick={() => router(`/Library/videos/${recommendedVideo.id}`)}
                >
                  <img
                    src={recommendedVideo.thumbnail || "/placeholder.svg"}
                    alt={recommendedVideo.title}
                    width={160}
                    height={90}
                    className="rounded-md object-cover"
                  />
                  <div>
                    <h3 className="font-medium text-[#09122C] line-clamp-2">{recommendedVideo.title}</h3>
                    <p className="text-sm text-gray-600">{recommendedVideo.author}</p>
                    <p className="text-sm text-gray-600">{recommendedVideo.views} views</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
  
        <ScrollToTop />
      </div>
    )
  }