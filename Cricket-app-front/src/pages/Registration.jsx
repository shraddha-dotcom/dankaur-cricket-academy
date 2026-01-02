import React, { useState } from "react";

const Registration = () => {
  const [formData, setFormData] = useState({
    // Student Details
    name: "",
    dob: "",
    gender: "",
    photo: null,

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
    <main className="bg-[var(--bg)]">
      {/* Header */}
      <section
        className="py-12 text-center text-white"
        style={{ background: "var(--primary)" }}
      >
        <h1 className="text-3xl font-bold">Student Registration</h1>
        <p className="opacity-90 mt-1">Dankaur Cricket Academy</p>
      </section>

      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto px-4 py-10 space-y-8"
      >
        {/* Student Details */}
        <Section title="Student Details">
          <Input
            label="Full Name *"
            name="name"
            required
            onChange={handleChange}
          />
          <div className="grid md:grid-cols-3 gap-4">
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
              type="file"
              label="Photo (JPG/PNG, max 2MB)"
              name="photo"
              onChange={handleChange}
            />
          </div>
        </Section>

        {/* Contact */}
        <Section title="Contact Details">
          <div className="grid md:grid-cols-2 gap-4">
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
          </div>
          <Input
            label="Email (optional)"
            name="email"
            onChange={handleChange}
          />
        </Section>

        {/* Address */}
        <Section title="Address">
          <Textarea
            label="Full Address *"
            name="address"
            required
            onChange={handleChange}
          />
          <div className="grid md:grid-cols-2 gap-4">
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
        </Section>

        {/* Cricket Profile */}
        <Section title="Cricket Profile 🏏">
          <div className="grid md:grid-cols-2 gap-4">
            <Select
              label="Playing Category *"
              name="category"
              options={["U10", "U12", "U14", "U16", "Open"]}
              onChange={handleChange}
            />
            <Select
              label="Primary Role *"
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
              label="Preferred Training Slot"
              name="trainingSlot"
              options={["Morning", "Evening"]}
              onChange={handleChange}
            />
          </div>
        </Section>

        {/* Medical */}
        <Section title="Medical & Emergency">
          <Select
            label="Any medical condition?"
            name="medicalIssue"
            options={["No", "Yes"]}
            onChange={handleChange}
          />
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              label="Emergency Contact Name *"
              name="emergencyName"
              required
              onChange={handleChange}
            />
            <Input
              label="Emergency Contact Number *"
              name="emergencyMobile"
              required
              onChange={handleChange}
            />
          </div>
        </Section>

        {/* Terms */}
        <div className="bg-white p-6 rounded-xl shadow">
          <label className="flex gap-3 items-start">
            <input
              type="checkbox"
              name="termsAccepted"
              required
              onChange={handleChange}
            />
            <span>
              I confirm the information is correct and agree to academy rules.
            </span>
          </label>
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            className="px-10 py-3 text-white rounded-lg text-lg font-semibold"
            style={{ backgroundColor: "var(--primary)" }}
          >
            Submit Registration
          </button>
        </div>
      </form>
    </main>
  );
};

/* ---------- Reusable Components ---------- */

const Section = ({ title, children }) => (
  <div className="bg-white p-6 rounded-xl shadow space-y-4">
    <h2 className="text-xl font-bold text-[var(--primary)]">{title}</h2>
    {children}
  </div>
);

const Input = ({ label, ...props }) => (
  <div>
    <label className="block font-medium mb-1">{label}</label>
    <input
      {...props}
      className="w-full p-3 border rounded-lg focus:border-[var(--primary)] outline-none"
    />
  </div>
);

const Textarea = ({ label, ...props }) => (
  <div>
    <label className="block font-medium mb-1">{label}</label>
    <textarea
      {...props}
      rows="3"
      className="w-full p-3 border rounded-lg focus:border-[var(--primary)] outline-none"
    />
  </div>
);

const Select = ({ label, name, options, onChange }) => (
  <div>
    <label className="block font-medium mb-1">{label}</label>
    <select
      name={name}
      onChange={onChange}
      className="w-full p-3 border rounded-lg"
    >
      <option value="">Select</option>
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
  </div>
);

const RadioGroup = ({ label, name, options, onChange }) => (
  <div>
    <p className="font-medium mb-1">{label}</p>
    <div className="flex gap-4">
      {options.map((o) => (
        <label key={o} className="flex gap-2 items-center">
          <input type="radio" name={name} value={o} onChange={onChange} />
          {o}
        </label>
      ))}
    </div>
  </div>
);

export default Registration;
