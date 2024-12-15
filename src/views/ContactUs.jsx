import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success('Thank you for contacting us! We will get back to you soon.'); 
    setFormData({ name: '', phone: '', email: ''}); 
  };

  return (
    <div className="container mt-4">
      <h2>Contact Us</h2>
      <p className="mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac erat eu justo pharetra
        malesuada. Sed sit amet enim purus. Cras in turpis ut dui fermentum varius ac vel leo. Duis tempor nulla eget nunc maximus, non vestibulum ipsum suscipit. Quisque sodales neque
        nec turpis tempor, a condimentum lorem ultricies. Nulla interdum neque at dui efficitur,
        sit amet tempus urna egestas. 
      </p>

      {/* Form with left alignment */}
      <form onSubmit={handleSubmit} className="mt-4 col-md-6" style={{ paddingLeft: '0' }}>
        {/* Name Input */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Phone Input */}
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input
            type="tel"
            className="form-control form-control-sm"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email Input */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control form-control-sm"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

      

        <button type="submit" className="btn btn-primary btn-sm">Submit</button>
      </form>

      <ToastContainer />
    </div>
  );
}
