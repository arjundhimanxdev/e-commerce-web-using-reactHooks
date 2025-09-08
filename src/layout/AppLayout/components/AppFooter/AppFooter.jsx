

const AppFooter = () => {
  return (
    <>
        <footer className="bg-gray-900 text-gray-300 py-10 mt-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Logo / App Info */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500">BuyNow</h2>
          <p className="mt-3 text-sm text-gray-400">
            A simple and modern React app with Tailwind CSS.  
            Built with ❤️ and creativity.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-orange-400">About Me</a></li>
            <li><a href="/contact" className="hover:text-orange-400">Contact Us</a></li>
            <li><a href="#" className="hover:text-orange-400">Services</a></li>
            <li><a href="#" className="hover:text-orange-400">Blog</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-5">
            <a href="#" className="hover:text-orange-400">Facebook </a>
            <a href="#" className="hover:text-orange-400">Instagram </a>
            <a href="#" className="hover:text-orange-400">Github </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © 2025 MyApp. All Rights Reserved.
      </div>
    </footer>
    </>
  )
}

export default AppFooter