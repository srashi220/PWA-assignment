import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setSubmitted(Object.keys(validationErrors).length === 0);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
    setSubmitted(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className={`form-input w-full px-4 py-2 border rounded focus:outline-none ring-4 placeholder-gray-400 ${
            errors.name
              ? 'border-red-500 ring-red-200'
              : submitted
              ? 'border-green-500 ring-green-200'
              : 'border-gray-300 ring-gray-100'
          }`}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className={`form-input w-full px-4 py-2 border rounded focus:outline-none ring-1 placeholder-gray-400 ${
            errors.email
              ? 'border-red-500 ring-red-200'
              : submitted
              ? 'border-green-500 ring-green-200'
              : 'border-gray-300 ring-gray-100'
          }`}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className={`form-textarea w-full px-4 py-2 border rounded focus:outline-none ring-1 placeholder-gray-400 ${
            errors.message
              ? 'border-red-500 ring-red-200'
              : submitted
              ? 'border-green-500 ring-green-200'
              : 'border-gray-300 ring-gray-100'
          }`}
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>

        {submitted && Object.keys(errors).length === 0 && (
          <p className="text-green-600 text-center mt-2">Message sent successfully!</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;