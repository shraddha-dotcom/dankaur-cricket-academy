import React from 'react';

const Contact = () => {
  return (
    <main className="flex-1">
      <section className="text-white py-16 px-4 md:px-8 text-center" style={{ background: 'linear-gradient(to bottom right, var(--primary), #1e3a8a)' }}>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-5xl mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl opacity-95">Get in touch with Dankaur Cricket Academy</p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12">
            <div>
              <h2 className="text-primary text-2xl md:text-3xl mb-8 pb-2 border-b-4 font-semibold" style={{ color: 'var(--primary)', borderColor: 'var(--primary)' }}>Contact Information</h2>
              
              <div className="flex gap-6 mb-8 bg-card p-6 rounded-lg shadow-md" style={{ backgroundColor: 'var(--card)' }}>
                <div className="text-3xl flex-shrink-0">📍</div>
                <div>
                  <h3 className="text-text-primary mb-2 text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>Address</h3>
                  <p className="text-text-secondary leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Uday Bhagat Ji Cricket Ground<br />
                    Near Eastern Delhi Public School,<br />
                    Dhanouri Road, Dankaur,<br />
                    G.B. Nagar U.P. 203201
                  </p>
                </div>
              </div>

              <div className="flex gap-6 mb-8 bg-card p-6 rounded-lg shadow-md" style={{ backgroundColor: 'var(--card)' }}>
                <div className="text-3xl flex-shrink-0">📞</div>
                <div>
                  <h3 className="text-text-primary mb-2 text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>Phone Numbers</h3>
                  <p className="text-text-secondary" style={{ color: 'var(--text-secondary)' }}>
                    <a href="tel:7505228484" className="text-primary no-underline transition-colors hover:opacity-80 hover:underline" style={{ color: 'var(--primary)' }}>7505228484</a><br />
                    <a href="tel:8766318457" className="text-primary no-underline transition-colors hover:opacity-80 hover:underline" style={{ color: 'var(--primary)' }}>8766318457</a><br />
                    <a href="tel:9410287206" className="text-primary no-underline transition-colors hover:opacity-80 hover:underline" style={{ color: 'var(--primary)' }}>9410287206</a>
                  </p>
                </div>
              </div>

              <div className="flex gap-6 mb-8 bg-card p-6 rounded-lg shadow-md" style={{ backgroundColor: 'var(--card)' }}>
                <div className="text-3xl flex-shrink-0">✉️</div>
                <div>
                  <h3 className="text-text-primary mb-2 text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>Email</h3>
                  <p className="text-text-secondary" style={{ color: 'var(--text-secondary)' }}>
                    <a href="mailto:dankaurcricketacademy@gmail.com" className="text-primary no-underline transition-colors hover:opacity-80 hover:underline" style={{ color: 'var(--primary)' }}>
                      dankaurcricketacademy@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-6 mb-8 bg-card p-6 rounded-lg shadow-md" style={{ backgroundColor: 'var(--card)' }}>
                <div className="text-3xl flex-shrink-0">🕒</div>
                <div>
                  <h3 className="text-text-primary mb-2 text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>Training Schedule</h3>
                  <p className="text-text-secondary leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Weekend matches available<br />
                    (Outdoor and Indoor facilities)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-lg shadow-md" style={{ backgroundColor: 'var(--card)' }}>
              <h2 className="text-primary text-2xl md:text-3xl mb-8 pb-2 border-b-4 font-semibold" style={{ color: 'var(--primary)', borderColor: 'var(--primary)' }}>Send us a Message</h2>
              <form className="flex flex-col gap-6">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-text-primary font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Name *</label>
                  <input type="text" id="name" name="name" required className="p-3 border-2 rounded text-base transition-colors focus:outline-none" style={{ borderColor: 'var(--border)' }} onFocus={(e) => e.target.style.borderColor = 'var(--primary)'} onBlur={(e) => e.target.style.borderColor = 'var(--border)'} />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email" className="text-text-primary font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Email *</label>
                  <input type="email" id="email" name="email" required className="p-3 border-2 rounded text-base transition-colors focus:outline-none" style={{ borderColor: 'var(--border)' }} onFocus={(e) => e.target.style.borderColor = 'var(--primary)'} onBlur={(e) => e.target.style.borderColor = 'var(--border)'} />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-text-primary font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Phone Number</label>
                  <input type="tel" id="phone" name="phone" className="p-3 border-2 rounded text-base transition-colors focus:outline-none" style={{ borderColor: 'var(--border)' }} onFocus={(e) => e.target.style.borderColor = 'var(--primary)'} onBlur={(e) => e.target.style.borderColor = 'var(--border)'} />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="subject" className="text-text-primary font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Subject</label>
                  <input type="text" id="subject" name="subject" className="p-3 border-2 rounded text-base transition-colors focus:outline-none" style={{ borderColor: 'var(--border)' }} onFocus={(e) => e.target.style.borderColor = 'var(--primary)'} onBlur={(e) => e.target.style.borderColor = 'var(--border)'} />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="message" className="text-text-primary font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Message *</label>
                  <textarea id="message" name="message" rows="5" required className="p-3 border-2 rounded text-base resize-y min-h-[120px] transition-colors focus:outline-none" style={{ borderColor: 'var(--border)' }} onFocus={(e) => e.target.style.borderColor = 'var(--primary)'} onBlur={(e) => e.target.style.borderColor = 'var(--border)'}></textarea>
                </div>

                <button type="submit" className="bg-primary text-white px-8 py-4 rounded text-lg font-semibold cursor-pointer transition-all hover:opacity-90 hover:-translate-y-0.5" style={{ backgroundColor: 'var(--primary)' }}>Send Message</button>
              </form>
            </div>
          </div>

          <div className="bg-card p-6 md:p-8 rounded-lg shadow-md" style={{ backgroundColor: 'var(--card)' }}>
            <h2 className="text-primary text-2xl md:text-3xl mb-6 pb-2 border-b-4 font-semibold" style={{ color: 'var(--primary)', borderColor: 'var(--primary)' }}>Location</h2>
            <div className="p-12 rounded-lg text-center border-2 border-dashed" style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)' }}>
              <p className="text-text-primary text-lg mb-2" style={{ color: 'var(--text-primary)' }}>📍 Uday Bhagat Ji Cricket Ground</p>
              <p className="text-text-primary text-lg mb-2" style={{ color: 'var(--text-primary)' }}>Near Eastern Delhi Public School, Dhanouri Road, Dankaur</p>
              <p className="text-text-primary text-lg mb-2" style={{ color: 'var(--text-primary)' }}>G.B. Nagar U.P. 203201</p>
              <p className="text-text-secondary text-sm italic mt-4" style={{ color: 'var(--text-secondary)' }}>Map integration can be added here</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;


