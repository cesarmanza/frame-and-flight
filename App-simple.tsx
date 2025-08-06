import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="h-screen bg-navy flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-6xl font-montserrat-bold mb-4">
            Frame & Flight
          </h1>
          <p className="text-xl font-montserrat-regular">
            Elevating Real Estate. Capturing the Future.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-montserrat-bold text-navy text-center mb-16">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <h3 className="text-xl font-montserrat-semibold text-navy mb-4">
                Aerial Videography
              </h3>
              <p className="font-montserrat-regular text-navy/80">
                Stunning aerial footage that showcases properties from breathtaking perspectives.
              </p>
            </div>
            <div className="text-center p-8">
              <h3 className="text-xl font-montserrat-semibold text-navy mb-4">
                Architectural Photography
              </h3>
              <p className="font-montserrat-regular text-navy/80">
                Professional photography that highlights unique design elements.
              </p>
            </div>
            <div className="text-center p-8">
              <h3 className="text-xl font-montserrat-semibold text-navy mb-4">
                3D Mapping
              </h3>
              <p className="font-montserrat-regular text-navy/80">
                Advanced 3D mapping and modeling services for detailed insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-montserrat-bold text-white text-center mb-16">
            Get in Touch
          </h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-montserrat-semibold mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-white/60 focus:border-white/50 focus:outline-none"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-white font-montserrat-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-white/60 focus:border-white/50 focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white font-montserrat-semibold mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-white/60 focus:border-white/50 focus:outline-none resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-navy font-montserrat-semibold py-3 rounded-lg hover:bg-white/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}