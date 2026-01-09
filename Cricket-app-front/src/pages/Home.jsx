import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="flex-1">
      {/* Hero Section with Blurred Background */}
      <section className="text-white py-24 px-4 md:px-8 text-center relative overflow-hidden min-h-screen flex items-center justify-center">
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
        
        {/* Content - Above Navbar */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 pt-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 md:mb-8 drop-shadow-lg font-bold leading-tight tracking-tight">
            Dankaur Cricket Academy
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-3 md:mb-4 font-medium drop-shadow-md leading-relaxed">
            हमारा सपना हर घर में होगा एक क्रिकेटर अपना
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 md:mb-10 opacity-90 italic drop-shadow-md leading-relaxed">
            (Our dream: Every home will have its own cricketer)
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/registration" 
              className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base md:text-lg font-semibold transition-all hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg w-full sm:w-auto text-center" 
              style={{ backgroundColor: '#1e3a8a' }}
            >
              Registration Open
            </Link>
            <Link 
              to="/about" 
              className="bg-transparent text-white border-2 border-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base md:text-lg font-semibold transition-all hover:bg-white hover:text-primary w-full sm:w-auto text-center" 
              style={{ '--hover-text-color': '#1e3a8a' }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8" style={{ backgroundColor: '#F5F5DC' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8 sm:mb-10 md:mb-12 text-text-primary relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary font-bold leading-tight tracking-tight" style={{ color: '#1e3a8a' }}>
            Our Training Components
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl">
              <div className="h-48 sm:h-56 overflow-hidden">
                <img 
                  src="/img1.jpg" 
                  alt="Net Practice" 
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                />
              </div>
              <div className="p-5 sm:p-6 text-center">
                <h3 className="text-primary mb-2 text-lg sm:text-xl md:text-2xl font-semibold leading-tight" style={{ color: '#1e3a8a' }}>
                  Net Practice
                </h3>
                <p className="mb-3 text-sm sm:text-base text-gray-600 font-medium">नेट प्रैक्टिस</p>
                <p className="text-text-secondary leading-relaxed text-sm sm:text-base" style={{ color: '#475569', lineHeight: '1.6' }}>
                  Regular net practice sessions with professional equipment and facilities.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl">
              <div className="h-48 sm:h-56 overflow-hidden">
                <img 
                  src="/img2.jpg" 
                  alt="Fitness Training" 
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                />
              </div>
              <div className="p-5 sm:p-6 text-center">
                <h3 className="text-primary mb-2 text-lg sm:text-xl md:text-2xl font-semibold leading-tight" style={{ color: '#1e3a8a' }}>
                  Fitness Training
                </h3>
                <p className="mb-3 text-sm sm:text-base text-gray-600 font-medium">फिटनेस ट्रेनिंग</p>
                <p className="text-text-secondary leading-relaxed text-sm sm:text-base" style={{ color: '#475569', lineHeight: '1.6' }}>
                  Comprehensive fitness programs to build strength, agility, and endurance.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl">
              <div className="h-48 sm:h-56 overflow-hidden">
                <img 
                  src="/img3.jpg" 
                  alt="Match Simulation" 
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                />
              </div>
              <div className="p-5 sm:p-6 text-center">
                <h3 className="text-primary mb-2 text-lg sm:text-xl md:text-2xl font-semibold leading-tight" style={{ color: '#1e3a8a' }}>
                  Match Simulation
                </h3>
                <p className="mb-3 text-sm sm:text-base text-gray-600 font-medium">मैच सिम्युलेशन</p>
                <p className="text-text-secondary leading-relaxed text-sm sm:text-base" style={{ color: '#475569', lineHeight: '1.6' }}>
                  Real match scenarios every weekend - both outdoor and indoor facilities.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl">
              <div className="h-48 sm:h-56 overflow-hidden">
                <img 
                  src="/img4.jpg" 
                  alt="Experienced Coaches" 
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                />
              </div>
              <div className="p-5 sm:p-6 text-center">
                <h3 className="text-primary mb-2 text-lg sm:text-xl md:text-2xl font-semibold leading-tight" style={{ color: '#1e3a8a' }}>
                  Experienced Coaches
                </h3>
                <p className="mb-3 text-sm sm:text-base text-gray-600 font-medium">अनुभवी कोचों द्वारा प्रशिक्षण</p>
                <p className="text-text-secondary leading-relaxed text-sm sm:text-base" style={{ color: '#475569', lineHeight: '1.6' }}>
                  Training by experienced and qualified cricket coaches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
     
<section className="relative overflow-hidden min-h-[500px] sm:min-h-[550px] md:min-h-[600px] mb-16 sm:mb-20 md:mb-24"
  style={{
    background: 'linear-gradient(to right, #f5f9f8 0%, #e8f2ef 25%, #d4e8e3 50%, #C8DED8 75%, #CDE3DD 100%)'
  }}
>

{/* CONTENT */}
<div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-16 sm:pb-20 md:pb-24 lg:pb-28">
  <div className="max-w-[580px] lg:max-w-[600px] pr-0 lg:pr-8 xl:pr-12">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4rem] font-extrabold text-slate-900 leading-[1.1] tracking-[-0.02em] mb-6 sm:mb-8">
      Take Your Game
      <span className="block text-blue-800 mt-2 sm:mt-3">To The Next Level</span>
    </h1>

    <p className="text-base sm:text-lg md:text-xl lg:text-[1.25rem] text-slate-700 leading-[1.75] font-normal mb-5 sm:mb-6 max-w-[540px]">
      At Dankaur Cricket Academy, we shape discipline, passion,
      and performance using modern training systems.
    </p>

    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 leading-[1.65] font-medium mb-8 sm:mb-10 md:mb-12 max-w-[520px]">
      जहाँ जुनून और प्रोफेशनल ट्रेनिंग का मेल है।
    </p>

    <div className="mt-10 sm:mt-12 md:mt-14">
      <Link
        to="/about"
        className="inline-flex items-center gap-3 px-7 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-4.5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 font-semibold text-sm sm:text-base md:text-lg border border-slate-200 hover:border-slate-300 hover:-translate-y-0.5"
      >
        <span className="w-6 h-6 sm:w-7 sm:h-7 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
          ✓
        </span>
        <span className="text-slate-800">About Us</span>
      </Link>
    </div>
  </div>
</div>

{/* DIAGONAL IMAGE (CONNECTED) */}
<div
  className="absolute top-0 right-0 h-full w-[50%] lg:w-[48%] xl:w-[45%] hidden md:block
             bg-cover bg-center"
  style={{
    backgroundImage: "url('/img5.jpg')",
    clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0 100%)",
    WebkitClipPath: "polygon(18% 0, 100% 0, 100% 100%, 0 100%)"
  }}
/>

</section>


      {/* CTA Section */}
      <section className="text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 text-center" style={{ background: 'linear-gradient(to bottom right, #1e3a8a, #1e40af)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 md:mb-8 font-bold leading-tight tracking-tight">
            Ready to Start Your Cricket Journey?
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 opacity-95 leading-relaxed max-w-3xl mx-auto" style={{ lineHeight: '1.7' }}>
            Join Dankaur Cricket Academy today and take the first step towards your cricket career.
          </p>
          <Link 
            to="/registration" 
            className="bg-secondary text-white px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 rounded-lg text-sm sm:text-base md:text-lg lg:text-xl font-semibold transition-all hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg inline-block" 
            style={{ backgroundColor: 'var(--secondary)' }}
          >
            Register Now
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;


