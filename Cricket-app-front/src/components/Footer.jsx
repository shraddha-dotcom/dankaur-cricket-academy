import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-white py-12 mt-auto" style={{ backgroundColor: 'var(--text-primary)' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo.png" alt="Dankaur Cricket Academy Logo" className="h-12 w-12 object-contain" />
            <h3 className="text-primary text-2xl font-bold" style={{ color: 'var(--primary)' }}>Dankaur Cricket Academy</h3>
          </div>
          <p className="mb-2 leading-relaxed">हर शॉट में आत्मविश्वास, हर खिलाड़ी में भविष्य</p>
          <p className="italic text-text-secondary text-sm" style={{ color: 'var(--text-secondary)' }}>(Confidence in every shot, future in every player)</p>
        </div>

        <div>
          <h4 className="text-white mb-4 text-xl font-semibold">Quick Links</h4>
          <Link to="/" className="block text-text-secondary mb-2 no-underline transition-colors hover:text-primary" style={{ color: 'var(--text-secondary)' }}>Home</Link>
          <Link to="/about" className="block text-text-secondary mb-2 no-underline transition-colors hover:text-primary" style={{ color: 'var(--text-secondary)' }}>About Us</Link>
          <Link to="/contact" className="block text-text-secondary mb-2 no-underline transition-colors hover:text-primary" style={{ color: 'var(--text-secondary)' }}>Contact Us</Link>
          <Link to="/registration" className="block text-text-secondary mb-2 no-underline transition-colors hover:text-primary" style={{ color: 'var(--text-secondary)' }}>Registration</Link>
        </div>

        <div>
          <h4 className="text-white mb-4 text-xl font-semibold">Contact Info</h4>
          <p className="mb-2 leading-relaxed">
            <span className="mr-2 text-xl">📍</span>
            Uday Bhagat Ji Cricket Ground<br />
            Near Eastern Delhi Public School,<br />
            Dhanouri Road, Dankaur,<br />
            G.B. Nagar U.P. 203201
          </p>
          <p className="mb-2">
            <span className="mr-2 text-xl">📞</span>
            <a href="tel:7505228484" className="text-text-secondary hover:text-primary transition-colors" style={{ color: 'var(--text-secondary)' }}>7505228484</a>, 
            <a href="tel:8766318457" className="text-text-secondary hover:text-primary transition-colors" style={{ color: 'var(--text-secondary)' }}> 8766318457</a>, 
            <a href="tel:9410287206" className="text-text-secondary hover:text-primary transition-colors" style={{ color: 'var(--text-secondary)' }}> 9410287206</a>
          </p>
          <p>
            <span className="mr-2 text-xl">✉️</span>
            <a href="mailto:dankaurcricketacademy@gmail.com" className="text-text-secondary hover:text-primary transition-colors" style={{ color: 'var(--text-secondary)' }}>dankaurcricketacademy@gmail.com</a>
          </p>
        </div>

        <div>
          <h4 className="text-white mb-4 text-xl font-semibold">Follow Us</h4>
          <div className="flex gap-4 flex-wrap">
            <a href="#" aria-label="Facebook" className="px-4 py-2 rounded transition-colors hover:bg-primary text-white" style={{ backgroundColor: 'var(--text-secondary)' }}>Facebook</a>
            <a href="#" aria-label="Instagram" className="px-4 py-2 rounded transition-colors hover:bg-primary text-white" style={{ backgroundColor: 'var(--text-secondary)' }}>Instagram</a>
            <a href="#" aria-label="YouTube" className="px-4 py-2 rounded transition-colors hover:bg-primary text-white" style={{ backgroundColor: 'var(--text-secondary)' }}>YouTube</a>
          </div>
        </div>
      </div>

      <div className="border-t mt-8 pt-4 text-center text-text-secondary" style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>
        <p>&copy; 2025 Dankaur Cricket Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;


