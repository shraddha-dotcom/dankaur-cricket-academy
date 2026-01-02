import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="text-white py-24 px-4 md:px-8 text-center relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right, var(--primary), #1e3a8a)' }}>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl mb-4 drop-shadow-lg">Dankaur Cricket Academy</h1>
          <p className="text-xl md:text-3xl mb-2 font-medium">हमारा सपना हर घर में होगा एक क्रिकेटर अपना</p>
          <p className="text-base md:text-xl mb-8 opacity-90 italic">(Our dream: Every home will have its own cricketer)</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/registration" className="bg-primary text-white px-8 py-4 rounded font-semibold transition-all hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg" style={{ backgroundColor: 'var(--primary)' }}>Registration Open</Link>
            <Link to="/about" className="bg-transparent text-white border-2 border-white px-8 py-4 rounded font-semibold transition-all hover:bg-white hover:text-primary" style={{ '--hover-text-color': 'var(--primary)' }}>Learn More</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 md:px-8" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-text-primary relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary" style={{ color: 'var(--text-primary)' }}>Our Training Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card p-8 rounded-lg text-center shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl" style={{ backgroundColor: 'var(--card)' }}>
              <div className="text-5xl mb-4">🏏</div>
              <h3 className="text-primary mb-2 text-2xl font-semibold" style={{ color: 'var(--primary)' }}>Net Practice</h3>
              <p className="mb-2">नेट प्रैक्टिस</p>
              <p className="text-text-secondary leading-relaxed" style={{ color: 'var(--text-secondary)' }}>Regular net practice sessions with professional equipment and facilities.</p>
            </div>
            <div className="bg-card p-8 rounded-lg text-center shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl" style={{ backgroundColor: 'var(--card)' }}>
              <div className="text-5xl mb-4">💪</div>
              <h3 className="text-primary mb-2 text-2xl font-semibold" style={{ color: 'var(--primary)' }}>Fitness Training</h3>
              <p className="mb-2">फिटनेस ट्रेनिंग</p>
              <p className="text-text-secondary leading-relaxed" style={{ color: 'var(--text-secondary)' }}>Comprehensive fitness programs to build strength, agility, and endurance.</p>
            </div>
            <div className="bg-card p-8 rounded-lg text-center shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl" style={{ backgroundColor: 'var(--card)' }}>
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-primary mb-2 text-2xl font-semibold" style={{ color: 'var(--primary)' }}>Match Simulation</h3>
              <p className="mb-2">मैच सिम्युलेशन</p>
              <p className="text-text-secondary leading-relaxed" style={{ color: 'var(--text-secondary)' }}>Real match scenarios every weekend - both outdoor and indoor facilities.</p>
            </div>
            <div className="bg-card p-8 rounded-lg text-center shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl" style={{ backgroundColor: 'var(--card)' }}>
              <div className="text-5xl mb-4">👨‍🏫</div>
              <h3 className="text-primary mb-2 text-2xl font-semibold" style={{ color: 'var(--primary)' }}>Experienced Coaches</h3>
              <p className="mb-2">अनुभवी कोचों द्वारा प्रशिक्षण</p>
              <p className="text-text-secondary leading-relaxed" style={{ color: 'var(--text-secondary)' }}>Training by experienced and qualified cricket coaches.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 px-4 md:px-8" style={{ backgroundColor: 'var(--card)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-text-primary relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary" style={{ color: 'var(--text-primary)' }}>Why Choose Us?</h2>
          <div className="max-w-4xl mx-auto">
            <div>
              <h3 className="text-primary text-2xl md:text-3xl mb-4 font-semibold" style={{ color: 'var(--primary)' }}>Where Passion and Professional Training Meet</h3>
              <p className="text-lg leading-relaxed mb-4 text-text-secondary" style={{ color: 'var(--text-secondary)' }}>जहाँ जुनून और प्रोफेशनल ट्रेनिंग का मेल है।</p>
              <p className="text-lg leading-relaxed mb-4 text-text-secondary" style={{ color: 'var(--text-secondary)' }}>At Dankaur Cricket Academy, we believe in nurturing talent with passion and professional training. Our academy provides:</p>
              <ul className="list-none pl-0 my-6">
                <li className="py-2 pl-8 relative text-text-secondary before:content-['✓'] before:absolute before:left-0 before:text-primary before:font-bold before:text-xl" style={{ color: 'var(--text-secondary)' }}>Professional cricket coaching</li>
                <li className="py-2 pl-8 relative text-text-secondary before:content-['✓'] before:absolute before:left-0 before:text-primary before:font-bold before:text-xl" style={{ color: 'var(--text-secondary)' }}>State-of-the-art facilities</li>
                <li className="py-2 pl-8 relative text-text-secondary before:content-['✓'] before:absolute before:left-0 before:text-primary before:font-bold before:text-xl" style={{ color: 'var(--text-secondary)' }}>Weekend match facilities (outdoor and indoor)</li>
                <li className="py-2 pl-8 relative text-text-secondary before:content-['✓'] before:absolute before:left-0 before:text-primary before:font-bold before:text-xl" style={{ color: 'var(--text-secondary)' }}>Career development opportunities</li>
                <li className="py-2 pl-8 relative text-text-secondary before:content-['✓'] before:absolute before:left-0 before:text-primary before:font-bold before:text-xl" style={{ color: 'var(--text-secondary)' }}>Make cricket your career in your own Dankaur</li>
              </ul>
              <p className="text-xl font-semibold text-primary mt-8 text-center" style={{ color: 'var(--primary)' }}>"हर शॉट में आत्मविश्वास, हर खिलाड़ी में भविष्य"</p>
              <p className="text-base text-text-secondary text-center italic mt-2" style={{ color: 'var(--text-secondary)' }}>(Confidence in every shot, future in every player)</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-white py-20 px-4 md:px-8 text-center" style={{ background: 'linear-gradient(to bottom right, var(--primary), #1e3a8a)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-4">Ready to Start Your Cricket Journey?</h2>
          <p className="text-lg md:text-xl mb-8 opacity-95">Join Dankaur Cricket Academy today and take the first step towards your cricket career.</p>
          <Link to="/registration" className="bg-secondary text-white px-12 py-5 rounded text-lg md:text-xl font-semibold transition-all hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg inline-block" style={{ backgroundColor: 'var(--secondary)' }}>Register Now</Link>
        </div>
      </section>
    </main>
  );
};

export default Home;


