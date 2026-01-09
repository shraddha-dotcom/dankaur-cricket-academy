import React from "react";

const About = () => {
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
          <h1 className="text-3xl md:text-5xl mb-4 drop-shadow-lg">
            About Dankaur Cricket Academy
          </h1>
          <p className="text-xl md:text-2xl mb-2 font-medium drop-shadow-md">
            हर शॉट में आत्मविश्वास, हर खिलाड़ी में भविष्य
          </p>
          <p className="text-base md:text-lg opacity-90 italic drop-shadow-md">
            (Confidence in every shot, future in every player)
          </p>
        </div>
      </section>

      <section
        className="py-8 md:py-10 px-4 sm:px-6 md:px-8"
        style={{ backgroundColor: "#F5F5DC" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Top Section: Who We Are & Mission - Two Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <h2
                className="text-2xl md:text-3xl mb-4 pb-2 border-b-2 font-bold"
                style={{ color: "#1e3a8a", borderColor: "#1e3a8a" }}
              >
                Who We Are
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#475569" }}
              >
                Dankaur Cricket Academy is a premier cricket training institution
                dedicated to nurturing young talent and developing future cricket
                stars. Located at the Uday Bhagat Ji Cricket Ground, we provide
                world-class training facilities and professional coaching to
                aspiring cricketers.
              </p>
            </div>

            <div
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <h2
                className="text-2xl md:text-3xl mb-4 pb-2 border-b-2 font-bold"
                style={{ color: "#1e3a8a", borderColor: "#1e3a8a" }}
              >
                Our Mission
              </h2>
              <p
                className="text-base leading-relaxed mb-2 font-medium"
                style={{ color: "#475569" }}
              >
                हमारा सपना हर घर में होगा एक क्रिकेटर अपना
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#475569" }}
              >
                Our dream is that every home will have its own cricketer. We
                believe in identifying, nurturing, and developing cricket talent
                at the grassroots level, providing opportunities for young players
                to excel in the sport they love.
              </p>
            </div>
          </div>

          {/* What We Do & Philosophy - Two Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <h2
                className="text-2xl md:text-3xl mb-4 pb-2 border-b-2 font-bold"
                style={{ color: "#1e3a8a", borderColor: "#1e3a8a" }}
              >
                What We Do
              </h2>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "#475569" }}
              >
                At Dankaur Cricket Academy, we create talent, nurture them with
                progressive training sessions, and help them stand out as leaders.
                Our comprehensive training program includes:
              </p>
              <ul className="list-none pl-0 space-y-2">
                <li
                  className="py-2 pl-8 relative text-sm leading-relaxed before:content-['🏏'] before:absolute before:left-0"
                  style={{ color: "#475569" }}
                >
                  <strong>Net Practice:</strong> Regular practice sessions with
                  professional equipment
                </li>
                <li
                  className="py-2 pl-8 relative text-sm leading-relaxed before:content-['💪'] before:absolute before:left-0"
                  style={{ color: "#475569" }}
                >
                  <strong>Fitness Training:</strong> Comprehensive physical
                  conditioning programs
                </li>
                <li
                  className="py-2 pl-8 relative text-sm leading-relaxed before:content-['🎯'] before:absolute before:left-0"
                  style={{ color: "#475569" }}
                >
                  <strong>Match Simulation:</strong> Weekend matches (outdoor and
                  indoor) to develop match skills
                </li>
                <li
                  className="py-2 pl-8 relative text-sm leading-relaxed before:content-['👨‍🏫'] before:absolute before:left-0"
                  style={{ color: "#475569" }}
                >
                  <strong>Professional Coaching:</strong> Training by experienced
                  and qualified coaches
                </li>
              </ul>
            </div>

            <div
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <h2
                className="text-2xl md:text-3xl mb-4 pb-2 border-b-2 font-bold"
                style={{ color: "#1e3a8a", borderColor: "#1e3a8a" }}
              >
                Our Philosophy
              </h2>
              <p
                className="text-base leading-relaxed mb-2 font-medium"
                style={{ color: "#475569" }}
              >
                जहाँ जुनून और प्रोफेशनल ट्रेनिंग का मेल है।
              </p>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "#475569" }}
              >
                Where passion and professional training meet. We combine the love
                for cricket with systematic, professional training methods to help
                players reach their full potential. Our approach focuses on:
              </p>
              <ul className="list-none pl-0 space-y-2">
                <li
                  className="py-2 pl-8 relative text-sm leading-relaxed before:content-['✓'] before:absolute before:left-0 before:text-green-600 before:font-bold"
                  style={{ color: "#475569" }}
                >
                  Building confidence in every shot
                </li>
                <li
                  className="py-2 pl-8 relative text-sm leading-relaxed before:content-['✓'] before:absolute before:left-0 before:text-green-600 before:font-bold"
                  style={{ color: "#475569" }}
                >
                  Developing future-ready players
                </li>
                <li
                  className="py-2 pl-8 relative text-sm leading-relaxed before:content-['✓'] before:absolute before:left-0 before:text-green-600 before:font-bold"
                  style={{ color: "#475569" }}
                >
                  Creating career opportunities in cricket
                </li>
                <li
                  className="py-2 pl-8 relative text-sm leading-relaxed before:content-['✓'] before:absolute before:left-0 before:text-green-600 before:font-bold"
                  style={{ color: "#475569" }}
                >
                  Making cricket accessible in Dankaur
                </li>
              </ul>
            </div>
          </div>

          {/* Facilities Section */}
          <div
            className="bg-white p-6 rounded-xl shadow-sm mb-6"
          >
            <h2
              className="text-2xl md:text-3xl mb-4 pb-2 border-b-2 font-bold"
              style={{ color: "#1e3a8a", borderColor: "#1e3a8a" }}
            >
              Our Facilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div
                className="p-4 rounded-lg border-l-4 bg-gray-50"
                style={{
                  borderColor: "#1e3a8a",
                }}
              >
                <h3
                  className="mb-2 text-lg font-semibold"
                  style={{ color: "#1e3a8a" }}
                >
                  🏏 Cricket Ground
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#475569" }}
                >
                  Uday Bhagat Ji Cricket Ground with professional pitch and
                  outfield
                </p>
              </div>
              <div
                className="p-4 rounded-lg border-l-4 bg-gray-50"
                style={{
                  borderColor: "#1e3a8a",
                }}
              >
                <h3
                  className="mb-2 text-lg font-semibold"
                  style={{ color: "#1e3a8a" }}
                >
                  🏟️ Indoor Facilities
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#475569" }}
                >
                  Indoor practice facilities for year-round training
                </p>
              </div>
              <div
                className="p-4 rounded-lg border-l-4 bg-gray-50"
                style={{
                  borderColor: "#1e3a8a",
                }}
              >
                <h3
                  className="mb-2 text-lg font-semibold"
                  style={{ color: "#1e3a8a" }}
                >
                  🏋️ Fitness Center
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#475569" }}
                >
                  Dedicated fitness training area with modern equipment
                </p>
              </div>
              <div
                className="p-4 rounded-lg border-l-4 bg-gray-50"
                style={{
                  borderColor: "#1e3a8a",
                }}
              >
                <h3
                  className="mb-2 text-lg font-semibold"
                  style={{ color: "#1e3a8a" }}
                >
                  🎯 Practice Nets
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#475569" }}
                >
                  Multiple practice nets for batting and bowling practice
                </p>
              </div>
            </div>
          </div>

          {/* Join Us Section */}
          <div
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <h2
              className="text-2xl md:text-3xl mb-4 pb-2 border-b-2 font-bold"
              style={{ color: "#1e3a8a", borderColor: "#1e3a8a" }}
            >
              Join Us
            </h2>
            <p
              className="text-base leading-relaxed mb-2 font-medium"
              style={{ color: "#475569" }}
            >
              अब क्रिकेट को बनाओ अपना कैरियर आपके अपने दनकौर में
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "#475569" }}
            >
              Now make cricket your career in your own Dankaur. Whether you're a
              beginner or an experienced player, Dankaur Cricket Academy
              provides the platform to develop your skills and pursue your
              passion for cricket.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
