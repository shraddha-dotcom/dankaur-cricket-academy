import React from "react";

const About = () => {
  return (
    <main className="flex-1">
      <section
        className="text-white py-16 px-4 md:px-8 text-center"
        style={{
          background:
            "linear-gradient(to bottom right, var(--primary), #1e3a8a)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-5xl mb-4">
            About Dankaur Cricket Academy
          </h1>
          <p className="text-xl md:text-2xl mb-2 font-medium">
            हर शॉट में आत्मविश्वास, हर खिलाड़ी में भविष्य
          </p>
          <p className="text-base md:text-lg opacity-90 italic">
            (Confidence in every shot, future in every player)
          </p>
        </div>
      </section>

      <section
        className="py-16 px-4 md:px-8"
        style={{ backgroundColor: "var(--bg)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div
            className="bg-card p-6 md:p-10 rounded-lg mb-8 shadow-md"
            style={{ backgroundColor: "var(--card)" }}
          >
            <h2
              className="text-primary text-2xl md:text-3xl mb-6 pb-2 border-b-4 font-semibold"
              style={{ color: "var(--primary)", borderColor: "var(--primary)" }}
            >
              Who We Are
            </h2>
            <p
              className="text-lg leading-relaxed text-text-secondary mb-4"
              style={{ color: "var(--text-secondary)" }}
            >
              Dankaur Cricket Academy is a premier cricket training institution
              dedicated to nurturing young talent and developing future cricket
              stars. Located at the Uday Bhagat Ji Cricket Ground, we provide
              world-class training facilities and professional coaching to
              aspiring cricketers.
            </p>
          </div>

          <div
            className="bg-card p-6 md:p-10 rounded-lg mb-8 shadow-md"
            style={{ backgroundColor: "var(--card)" }}
          >
            <h2
              className="text-primary text-2xl md:text-3xl mb-6 pb-2 border-b-4 font-semibold"
              style={{ color: "var(--primary)", borderColor: "var(--primary)" }}
            >
              Our Mission
            </h2>
            <p
              className="text-lg leading-relaxed text-text-secondary mb-4"
              style={{ color: "var(--text-secondary)" }}
            >
              हमारा सपना हर घर में होगा एक क्रिकेटर अपना
            </p>
            <p
              className="text-lg leading-relaxed text-text-secondary"
              style={{ color: "var(--text-secondary)" }}
            >
              Our dream is that every home will have its own cricketer. We
              believe in identifying, nurturing, and developing cricket talent
              at the grassroots level, providing opportunities for young players
              to excel in the sport they love.
            </p>
          </div>

          <div
            className="bg-card p-6 md:p-10 rounded-lg mb-8 shadow-md"
            style={{ backgroundColor: "var(--card)" }}
          >
            <h2
              className="text-primary text-2xl md:text-3xl mb-6 pb-2 border-b-4 font-semibold"
              style={{ color: "var(--primary)", borderColor: "var(--primary)" }}
            >
              What We Do
            </h2>
            <p
              className="text-lg leading-relaxed text-text-secondary mb-4"
              style={{ color: "var(--text-secondary)" }}
            >
              At Dankaur Cricket Academy, we create talent, nurture them with
              progressive training sessions, and help them stand out as leaders.
              Our comprehensive training program includes:
            </p>
            <ul className="list-none pl-0 my-6">
              <li
                className="py-3 pl-10 relative text-text-secondary text-lg leading-relaxed before:content-['🏏'] before:absolute before:left-0 before:text-xl"
                style={{ color: "var(--text-secondary)" }}
              >
                <strong>Net Practice:</strong> Regular practice sessions with
                professional equipment
              </li>
              <li
                className="py-3 pl-10 relative text-text-secondary text-lg leading-relaxed before:content-['🏏'] before:absolute before:left-0 before:text-xl"
                style={{ color: "var(--text-secondary)" }}
              >
                <strong>Fitness Training:</strong> Comprehensive physical
                conditioning programs
              </li>
              <li
                className="py-3 pl-10 relative text-text-secondary text-lg leading-relaxed before:content-['🏏'] before:absolute before:left-0 before:text-xl"
                style={{ color: "var(--text-secondary)" }}
              >
                <strong>Match Simulation:</strong> Weekend matches (outdoor and
                indoor) to develop match skills
              </li>
              <li
                className="py-3 pl-10 relative text-text-secondary text-lg leading-relaxed before:content-['🏏'] before:absolute before:left-0 before:text-xl"
                style={{ color: "var(--text-secondary)" }}
              >
                <strong>Professional Coaching:</strong> Training by experienced
                and qualified coaches
              </li>
            </ul>
          </div>

          <div
            className="bg-card p-6 md:p-10 rounded-lg mb-8 shadow-md"
            style={{ backgroundColor: "var(--card)" }}
          >
            <h2
              className="text-primary text-2xl md:text-3xl mb-6 pb-2 border-b-4 font-semibold"
              style={{ color: "var(--primary)", borderColor: "var(--primary)" }}
            >
              Our Philosophy
            </h2>
            <p
              className="text-lg leading-relaxed text-text-secondary mb-4"
              style={{ color: "var(--text-secondary)" }}
            >
              जहाँ जुनून और प्रोफेशनल ट्रेनिंग का मेल है।
            </p>
            <p
              className="text-lg leading-relaxed text-text-secondary mb-4"
              style={{ color: "var(--text-secondary)" }}
            >
              Where passion and professional training meet. We combine the love
              for cricket with systematic, professional training methods to help
              players reach their full potential. Our approach focuses on:
            </p>
            <ul className="list-none pl-0 my-6">
              <li
                className="py-3 pl-10 relative text-text-secondary text-lg leading-relaxed before:content-['🏏'] before:absolute before:left-0 before:text-xl"
                style={{ color: "var(--text-secondary)" }}
              >
                Building confidence in every shot
              </li>
              <li
                className="py-3 pl-10 relative text-text-secondary text-lg leading-relaxed before:content-['🏏'] before:absolute before:left-0 before:text-xl"
                style={{ color: "var(--text-secondary)" }}
              >
                Developing future-ready players
              </li>
              <li
                className="py-3 pl-10 relative text-text-secondary text-lg leading-relaxed before:content-['🏏'] before:absolute before:left-0 before:text-xl"
                style={{ color: "var(--text-secondary)" }}
              >
                Creating career opportunities in cricket
              </li>
              <li
                className="py-3 pl-10 relative text-text-secondary text-lg leading-relaxed before:content-['🏏'] before:absolute before:left-0 before:text-xl"
                style={{ color: "var(--text-secondary)" }}
              >
                Making cricket accessible in Dankaur
              </li>
            </ul>
          </div>

          <div
            className="bg-card p-6 md:p-10 rounded-lg mb-8 shadow-md"
            style={{ backgroundColor: "var(--card)" }}
          >
            <h2
              className="text-primary text-2xl md:text-3xl mb-6 pb-2 border-b-4 font-semibold"
              style={{ color: "var(--primary)", borderColor: "var(--primary)" }}
            >
              Our Facilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div
                className="p-6 rounded-lg border-l-4"
                style={{
                  backgroundColor: "var(--bg)",
                  borderColor: "var(--primary)",
                }}
              >
                <h3
                  className="text-primary mb-2 text-xl font-semibold"
                  style={{ color: "var(--primary)" }}
                >
                  🏏 Cricket Ground
                </h3>
                <p
                  className="text-text-secondary text-base"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Uday Bhagat Ji Cricket Ground with professional pitch and
                  outfield
                </p>
              </div>
              <div
                className="p-6 rounded-lg border-l-4"
                style={{
                  backgroundColor: "var(--bg)",
                  borderColor: "var(--primary)",
                }}
              >
                <h3
                  className="text-primary mb-2 text-xl font-semibold"
                  style={{ color: "var(--primary)" }}
                >
                  🏟️ Indoor Facilities
                </h3>
                <p
                  className="text-text-secondary text-base"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Indoor practice facilities for year-round training
                </p>
              </div>
              <div
                className="p-6 rounded-lg border-l-4"
                style={{
                  backgroundColor: "var(--bg)",
                  borderColor: "var(--primary)",
                }}
              >
                <h3
                  className="text-primary mb-2 text-xl font-semibold"
                  style={{ color: "var(--primary)" }}
                >
                  🏋️ Fitness Center
                </h3>
                <p
                  className="text-text-secondary text-base"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Dedicated fitness training area with modern equipment
                </p>
              </div>
              <div
                className="p-6 rounded-lg border-l-4"
                style={{
                  backgroundColor: "var(--bg)",
                  borderColor: "var(--primary)",
                }}
              >
                <h3
                  className="text-primary mb-2 text-xl font-semibold"
                  style={{ color: "var(--primary)" }}
                >
                  🎯 Practice Nets
                </h3>
                <p
                  className="text-text-secondary text-base"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Multiple practice nets for batting and bowling practice
                </p>
              </div>
            </div>
          </div>

          <div
            className="bg-card p-6 md:p-10 rounded-lg shadow-md"
            style={{ backgroundColor: "var(--card)" }}
          >
            <h2
              className="text-primary text-2xl md:text-3xl mb-6 pb-2 border-b-4 font-semibold"
              style={{ color: "var(--primary)", borderColor: "var(--primary)" }}
            >
              Join Us
            </h2>
            <p
              className="text-lg leading-relaxed text-text-secondary mb-4"
              style={{ color: "var(--text-secondary)" }}
            >
              अब क्रिकेट को बनाओ अपना कैरियर आपके अपने दनकौर में
            </p>
            <p
              className="text-lg leading-relaxed text-text-secondary"
              style={{ color: "var(--text-secondary)" }}
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
