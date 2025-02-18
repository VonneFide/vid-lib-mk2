import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send } from "lucide-react"

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")

  const toggleChat = () => setIsOpen(!isOpen)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle message submission here
    console.log("Message sent:", message)
    setMessage("")
  }

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-white rounded-lg shadow-lg w-80 mb-4"
          >
            <div className="bg-[#872341] text-white p-4 rounded-t-lg flex justify-between items-center">
              <h3 className="font-semibold">Chat with Us</h3>
              <button onClick={toggleChat}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="h-64 overflow-y-auto p-4">{/* Chat messages would go here */}</div>
            <form onSubmit={handleSubmit} className="p-4 border-t">
              <div className="flex items-center">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-grow px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#BE3144]"
                />
                <button type="submit" className="bg-[#872341] text-white px-4 py-2 rounded-r-md hover:bg-[#BE3144]">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleChat}
        className="bg-[#872341] text-white p-3 rounded-full shadow-lg"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>
    </div>
  )
}

