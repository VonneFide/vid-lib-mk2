

import { useState, useEffect } from "react"
import {Link} from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Menu, X } from "lucide-react"

interface NavbarProps {
  onLoginClick: () => void
  onSignupClick: () => void
}

const menuItems = {
  "Video Creation": [
    { title: "Basics", href: "/video/basics" },
    { title: "Advanced Techniques", href: "/video/advanced" },
    { title: "Post Production", href: "/video/post-production" },
  ],
  Marketing: [
    { title: "Strategy", href: "/marketing/strategy" },
    { title: "Analytics", href: "/marketing/analytics" },
    { title: "Growth", href: "/marketing/growth" },
  ],
  Resources: [
    { title: "Blog", href: "/resources/blog" },
    { title: "Tutorials", href: "/resources/tutorials" },
    { title: "Community", href: "/resources/community" },
  ],
}

export default function Navbar({ onLoginClick, onSignupClick }: NavbarProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200"
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link to="/" className="text-2xl font-bold text-[#09122C]">
                VideoLib
              </Link>

              <nav className="hidden md:flex space-x-8">
                {Object.keys(menuItems).map((item) => (
                  <div
                    key={item}
                    className="relative"
                    onMouseEnter={() => setActiveMenu(item)}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    <button className="flex items-center space-x-1 text-[#09122C] hover:text-[#BE3144]">
                      <span>{item}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>

                    <AnimatePresence>
                      {activeMenu === item && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-4 mt-2"
                        >
                          {menuItems[item as keyof typeof menuItems].map((subItem) => (
                            <Link
                              key={subItem.title}
                              to={subItem.href}
                              className="block px-4 py-2 text-[#09122C] hover:bg-gray-50 hover:text-[#BE3144]"
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>

              <div className="hidden md:flex items-center space-x-4">
                <button onClick={onLoginClick} className="text-[#09122C] hover:text-[#BE3144]">
                  Login
                </button>
                <button
                  onClick={onSignupClick}
                  className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#872341] text-white hover:bg-[#BE3144] transition-colors"
                >
                  Sign Up
                </button>
              </div>

              <button className="md:hidden" onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#09122C]" />
                ) : (
                  <Menu className="w-6 h-6 text-[#09122C]" />
                )}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-white"
              >
                <div className="container mx-auto px-4 py-4">
                  {Object.keys(menuItems).map((item) => (
                    <div key={item} className="mb-4">
                      <h3 className="font-semibold text-[#09122C] mb-2">{item}</h3>
                      {menuItems[item as keyof typeof menuItems].map((subItem) => (
                        <Link
                          key={subItem.title}
                          to={subItem.href}
                          className="block py-2 text-[#09122C] hover:text-[#BE3144]"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  ))}
                  <div className="flex flex-col space-y-4 mt-6">
                    <button onClick={onLoginClick} className="text-[#09122C] hover:text-[#BE3144]">
                      Login
                    </button>
                    <button
                      onClick={onSignupClick}
                      className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#872341] text-white hover:bg-[#BE3144] transition-colors"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  )
}

