import {Link} from "react-router-dom"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#09122C] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-base md:text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <Link to="/about" className="hover:text-[#E17564]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-[#E17564]">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/press" className="hover:text-[#E17564]">
                  Press
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#E17564]">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-base md:text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <Link to="/courses" className="hover:text-[#E17564]">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/tutorials" className="hover:text-[#E17564]">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link to="/guides" className="hover:text-[#E17564]">
                  Guides
                </Link>
              </li>
              <li>
                <Link to="/documentation" className="hover:text-[#E17564]">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-base md:text-lg mb-4">Community</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <Link to="/forums" className="hover:text-[#E17564]">
                  Forums
                </Link>
              </li>
              <li>
                <Link to="/discord" className="hover:text-[#E17564]">
                  Discord
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-[#E17564]">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/help" className="hover:text-[#E17564]">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-base md:text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link to="#" className="hover:text-[#E17564]">
                <Facebook className="w-5 h-5 md:w-6 md:h-6" />
              </Link>
              <Link to="#" className="hover:text-[#E17564]">
                <Twitter className="w-5 h-5 md:w-6 md:h-6" />
              </Link>
              <Link to="#" className="hover:text-[#E17564]">
                <Instagram className="w-5 h-5 md:w-6 md:h-6" />
              </Link>
              <Link to="#" className="hover:text-[#E17564]">
                <Youtube className="w-5 h-5 md:w-6 md:h-6" />
              </Link>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold text-sm md:text-base mb-2">Subscribe to our newsletter</h4>
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-3 py-2 text-xs md:text-sm rounded-md sm:rounded-r-none bg-white/10 text-white placeholder-gray-400 focus:outline-none w-full"
                />
                <button className="px-3 py-2 text-xs md:text-sm bg-[#872341] rounded-md sm:rounded-l-none hover:bg-[#BE3144] whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs md:text-sm text-gray-400">
            © {new Date().getFullYear()} VideoLib. All rights reserved by @VonneFide.
          </p>
          <div className="flex space-x-4 md:space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="text-xs md:text-sm text-gray-400 hover:text-[#E17564]">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-xs md:text-sm text-gray-400 hover:text-[#E17564]">
              Privacy Policy
            </Link>
            <Link to="/cookies" className="text-xs md:text-sm text-gray-400 hover:text-[#E17564]">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

