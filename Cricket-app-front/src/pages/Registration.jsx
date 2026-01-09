import React, { useState } from "react";

const Registration = () => {
  const [formData, setFormData] = useState({
    // Student Details
    name: "",
    dob: "",
    gender: "",

    // Contact
    studentMobile: "",
    parentMobile: "",
    email: "",

    // Address
    address: "",
    city: "",
    pincode: "",

    // Cricket Profile
    category: "",
    role: "",
    battingStyle: "",
    bowlingStyle: "",
    trainedBefore: "",
    trainingSlot: "",

    // Medical
    medicalIssue: "",
    emergencyName: "",
    emergencyMobile: "",

    // Terms
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Registration submitted successfully!");
  };

  return (
    <main className="flex-1">
      {/* Hero Section with Blurred Background */}
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-2 drop-shadow-lg font-bold">
            Student Registration
          </h1>
          <p className="text-lg md:text-xl opacity-95 drop-shadow-md">
            Dankaur Cricket Academy
          </p>
        </div>
      </section>

      <form
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12"
        style={{ backgroundColor: '#F5F5DC' }}
      >
        {/* Single Column Form Layout */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 lg:p-10 space-y-6">
          
          {/* Personal Information Section (Merged Student + Contact) */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold pb-2 border-b-2" style={{ color: '#1e3a8a', borderColor: '#1e3a8a' }}>
              Personal Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Input
                label="Full Name *"
                name="name"
                required
                onChange={handleChange}
              />
              <Input
                type="date"
                label="Date of Birth *"
                name="dob"
                required
                onChange={handleChange}
              />
              <RadioGroup
                label="Gender *"
                name="gender"
                options={["Male", "Female", "Other"]}
                onChange={handleChange}
              />
              <Input
                label="Student Mobile *"
                name="studentMobile"
                required
                onChange={handleChange}
              />
              <Input
                label="Parent Mobile *"
                name="parentMobile"
                required
                onChange={handleChange}
              />
              <Input
                label="Email"
                name="email"
                type="email"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200"></div>

          {/* Address Section */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold pb-2 border-b-2" style={{ color: '#1e3a8a', borderColor: '#1e3a8a' }}>
              Address
            </h2>
            <div className="space-y-4">
              <Textarea
                label="Full Address *"
                name="address"
                required
                onChange={handleChange}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="City *"
                  name="city"
                  required
                  onChange={handleChange}
                />
                <Input
                  label="Pincode *"
                  name="pincode"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200"></div>

          {/* Cricket Profile Section */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold pb-2 border-b-2" style={{ color: '#1e3a8a', borderColor: '#1e3a8a' }}>
              Cricket Profile 🏏
            </h2>
            <div className="space-y-4">
              {/* First Row - 3 columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Select
                  label="Category *"
                  name="category"
                  options={["U10", "U12", "U14", "U16", "Open"]}
                  onChange={handleChange}
                />
                <Select
                  label="Role *"
                  name="role"
                  options={["Batsman", "Bowler", "All-rounder", "Wicketkeeper"]}
                  onChange={handleChange}
                />
                <Select
                  label="Batting Style"
                  name="battingStyle"
                  options={["Right-hand", "Left-hand"]}
                  onChange={handleChange}
                />
              </div>
              {/* Second Row - 3 columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Select
                  label="Bowling Style"
                  name="bowlingStyle"
                  options={["Fast", "Medium", "Spin"]}
                  onChange={handleChange}
                />
                <Select
                  label="Trained Before?"
                  name="trainedBefore"
                  options={["Yes", "No"]}
                  onChange={handleChange}
                />
                <Select
                  label="Training Slot"
                  name="trainingSlot"
                  options={["Morning", "Evening"]}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200"></div>

          {/* Medical & Emergency Section */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold pb-2 border-b-2" style={{ color: '#1e3a8a', borderColor: '#1e3a8a' }}>
              Medical & Emergency
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Select
                label="Medical Condition?"
                name="medicalIssue"
                options={["No", "Yes"]}
                onChange={handleChange}
              />
              <Input
                label="Emergency Name *"
                name="emergencyName"
                required
                onChange={handleChange}
              />
              <Input
                label="Emergency Mobile *"
                name="emergencyMobile"
                required
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200"></div>

          {/* Terms & Submit */}
          <div className="space-y-6">
            <label className="flex gap-3 items-start">
              <input
                type="checkbox"
                name="termsAccepted"
                required
                onChange={handleChange}
                className="mt-1 w-5 h-5"
                style={{ accentColor: '#1e3a8a' }}
              />
              <span className="text-sm md:text-base" style={{ color: '#475569' }}>
                I confirm the information is correct and agree to academy rules. *
              </span>
            </label>
            <div className="text-center pt-2">
              <button
                type="submit"
                className="px-10 md:px-16 py-3.5 md:py-4 text-white rounded-lg text-base md:text-lg font-semibold transition-all hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
                style={{ backgroundColor: '#1e3a8a' }}
              >
                Submit Registration
              </button>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

/* ---------- Reusable Components ---------- */

const Input = ({ label, ...props }) => (
  <div>
    <label className="block text-xs md:text-sm font-semibold mb-1" style={{ color: '#0F172A' }}>
      {label}
    </label>
    <input
      {...props}
      className="w-full px-3 py-2 border-2 rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      style={{ borderColor: '#E5E7EB' }}
    />
  </div>
);

const Textarea = ({ label, ...props }) => (
  <div>
    <label className="block text-xs md:text-sm font-semibold mb-1" style={{ color: '#0F172A' }}>
      {label}
    </label>
    <textarea
      {...props}
      rows="2"
      className="w-full px-3 py-2 border-2 rounded-lg text-sm resize-y transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      style={{ borderColor: '#E5E7EB' }}
    />
  </div>
);

const Select = ({ label, name, options, onChange }) => (
  <div>
    <label className="block text-xs md:text-sm font-semibold mb-1" style={{ color: '#0F172A' }}>
      {label}
    </label>
    <select
      name={name}
      onChange={onChange}
      className="w-full px-3 py-2 border-2 rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      style={{ borderColor: '#E5E7EB' }}
    >
      <option value="">Select</option>
      {options.map((o) => (
        <option key={o} value={o}>{o}</option>
      ))}
    </select>
  </div>
);

const RadioGroup = ({ label, name, options, onChange }) => (
  <div>
    <p className="text-xs md:text-sm font-semibold mb-2" style={{ color: '#0F172A' }}>{label}</p>
    <div className="flex gap-3 flex-wrap">
      {options.map((o) => (
        <label key={o} className="flex gap-2 items-center text-xs md:text-sm cursor-pointer" style={{ color: '#475569' }}>
          <input 
            type="radio" 
            name={name} 
            value={o} 
            onChange={onChange}
            className="w-4 h-4"
            style={{ accentColor: '#1e3a8a' }}
          />
          {o}
        </label>
      ))}
    </div>
  </div>
);

export default Registration;
