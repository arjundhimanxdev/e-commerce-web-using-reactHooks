

const ContactUsPage = () => {
  return (
    <>
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-orange-500">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or need support? Our team is here to help you with anything related to{" "}
            <span className="font-semibold text-orange-500">MyShop</span>.  
            Reach out via the form below or contact us directly.
          </p>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h2>
            <form className="space-y-5">
              <div>
                <label className="block text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h2>
            <p className="text-gray-600 mb-4">
              Feel free to reach us directly through the details below.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li><span className="font-semibold text-orange-500">📍 Address:</span> 123 Market Street, New Delhi, India</li>
              <li><span className="font-semibold text-orange-500">📞 Phone:</span> +91 98765 43210</li>
              <li><span className="font-semibold text-orange-500">✉️ Email:</span> support@myshop.com</li>
            </ul>
            <div className="mt-6">
              <img 
                src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg" 
                alt="Map"
                className="rounded-xl shadow-md"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default ContactUsPage