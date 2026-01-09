import React from 'react';

const Contact = () => {
  return (
    <main className="flex-1">
      <section className="text-white py-16 px-4 md:px-8 text-center relative overflow-hidden min-h-[400px] flex items-center justify-center">
        {/* Blurred Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/hero.jpg)',
            filter: 'blur(2.5px)',
            transform: 'scale(1)'
          }}
        />
        {/* Green Blur Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(22, 163, 74, 0.4), rgba(22, 163, 74, 0.3), rgba(22, 163, 74, 0.5))',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)'
          }}
        />
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-5xl mb-4 drop-shadow-lg">Contact Us</h1>
          <p className="text-lg md:text-xl opacity-95 drop-shadow-md">Get in touch with Dankaur Cricket Academy</p>
        </div>
      </section>

      <section className="py-8 md:py-10 px-4 sm:px-6 md:px-8" style={{ backgroundColor: '#F5F5DC' }}>
        <div className="max-w-7xl mx-auto">
          {/* Contact Info Cards - Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#1e3a8a' }}>Address</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>
                Uday Bhagat Ji Cricket Ground<br />
                Near Eastern Delhi Public School,<br />
                Dhanouri Road, Dankaur,<br />
                G.B. Nagar U.P. 203201
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#1e3a8a' }}>Phone</h3>
              <div className="space-y-1">
                <a href="tel:7505228484" className="block text-sm hover:text-blue-600 transition-colors" style={{ color: '#475569' }}>
                  7505228484
                </a>
                <a href="tel:8766318457" className="block text-sm hover:text-blue-600 transition-colors" style={{ color: '#475569' }}>
                  8766318457
                </a>
                <a href="tel:9410287206" className="block text-sm hover:text-blue-600 transition-colors" style={{ color: '#475569' }}>
                  9410287206
                </a>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">✉️</div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#1e3a8a' }}>Email</h3>
              <a 
                href="mailto:dankaurcricketacademy@gmail.com" 
                className="text-sm hover:text-blue-600 transition-colors break-all"
                style={{ color: '#475569' }}
              >
                dankaurcricketacademy@gmail.com
              </a>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">🕒</div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#1e3a8a' }}>Schedule</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>
                Weekend matches available<br />
                (Outdoor and Indoor facilities)
              </p>
            </div>
          </div>

          {/* Main Content Grid: Contact Form & Location */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Contact Form */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl md:text-3xl mb-6 pb-2 border-b-2 font-bold" style={{ color: '#1e3a8a', borderColor: '#1e3a8a' }}>
                Send us a Message
              </h2>
              <form className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-sm font-semibold mb-1.5" style={{ color: '#0F172A' }}>
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="w-full px-4 py-2.5 border-2 rounded-lg text-base transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    style={{ borderColor: '#E5E7EB' }}
                    placeholder="Your full name"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email" className="text-sm font-semibold mb-1.5" style={{ color: '#0F172A' }}>
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="w-full px-4 py-2.5 border-2 rounded-lg text-base transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    style={{ borderColor: '#E5E7EB' }}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="text-sm font-semibold mb-1.5" style={{ color: '#0F172A' }}>
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      className="w-full px-4 py-2.5 border-2 rounded-lg text-base transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      style={{ borderColor: '#E5E7EB' }}
                      placeholder="10-digit number"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="subject" className="text-sm font-semibold mb-1.5" style={{ color: '#0F172A' }}>
                      Subject
                    </label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      className="w-full px-4 py-2.5 border-2 rounded-lg text-base transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      style={{ borderColor: '#E5E7EB' }}
                      placeholder="Query subject"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="message" className="text-sm font-semibold mb-1.5" style={{ color: '#0F172A' }}>
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    required 
                    className="w-full px-4 py-2.5 border-2 rounded-lg text-base resize-y min-h-[120px] transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    style={{ borderColor: '#E5E7EB' }}
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-blue-700 text-white px-6 py-3 rounded-lg text-base font-semibold cursor-pointer transition-all hover:bg-blue-800 hover:shadow-lg hover:-translate-y-0.5 mt-2"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Location Section */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl md:text-3xl mb-6 pb-2 border-b-2 font-bold" style={{ color: '#1e3a8a', borderColor: '#1e3a8a' }}>
                Location
              </h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-base font-medium" style={{ color: '#0F172A' }}>
                    📍 Uday Bhagat Ji Cricket Ground
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>
                    Near Eastern Delhi Public School<br />
                    Dhanouri Road, Dankaur<br />
                    G.B. Nagar U.P. 203201
                  </p>
                </div>
                
                {/* Google Maps Embed */}
                <div 
                  className="w-full rounded-lg overflow-hidden border-2 shadow-sm"
                  style={{ 
                    borderColor: '#E5E7EB',
                    height: '320px',
                    minHeight: '320px'
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d219.42379669110977!2d77.5343964!3d28.3654776!3m2!1i1024!2i768!4f13.1!2m1!1sUday%20Bhagat%20Ji%20Cricket%20Ground%2C%20Dhanouri%20Road%2C%20Dankaur%2C%20G.B.%20Nagar%20U.P.%20203201!5e0!3m2!1sen!2sin!4v1767953946536!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ 
                      border: 0,
                      display: 'block',
                      width: '100%',
                      height: '100%'
                    }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dankaur Cricket Academy Location - Uday Bhagat Ji Cricket Ground"
                  ></iframe>
                </div>
                
                <div className="pt-2">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Uday+Bhagat+Ji+Cricket+Ground,+Dhanouri+Road,+Dankaur,+G.B.+Nagar+U.P.+203201"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium hover:text-blue-600 transition-colors"
                    style={{ color: '#1e3a8a' }}
                  >
                    <span>📍</span>
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;


