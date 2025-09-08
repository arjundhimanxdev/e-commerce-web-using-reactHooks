

const AboutMePage = () => {
  return (
    <>
        <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-orange-500">About Us</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Welcome to <span className="font-semibold text-orange-500">BuyNow</span>,  
            your trusted destination for quality products at unbeatable prices.  
            Our mission is to make online shopping easier, faster, and more reliable for everyone.
          </p>
        </div>

        {/* Image + Text Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <img
            src="https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg"
            alt="Our Store"
            className="rounded-2xl max-h-140 shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed">
              At <span className="font-semibold">BuyNow</span>, we believe shopping should be more than just a transaction.  
              It's about trust, experience, and satisfaction.  
              Since our launch, we’ve been committed to delivering top-quality products, fast shipping, and exceptional customer support.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Whether you’re looking for fashion, electronics, or everyday essentials,  
              our store is built to serve your needs with variety and quality.
            </p>
          </div>
        </div>

        {/* Values / Highlights Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-orange-500 mb-2">Quality Products</h3>
            <p className="text-gray-600 text-sm">
              We source only the best products to ensure top-notch quality for our customers.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-orange-500 mb-2">Fast Delivery</h3>
            <p className="text-gray-600 text-sm">
              With a reliable delivery network, we ensure your products reach you on time.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-orange-500 mb-2">Customer Support</h3>
            <p className="text-gray-600 text-sm">
              Our support team is available 24/7 to assist you with your shopping experience.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default AboutMePage