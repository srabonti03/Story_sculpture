import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaBookOpen, FaPaperPlane } from 'react-icons/fa';

function Contactus() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .send('service_dd70hvh', 'template_kbq6xua', {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }, 'Drmrk7l7UnAi8jHZ7')
      .then(
        (response) => {
          console.log('Email sent successfully!', response.status, response.text);
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', subject: '', message: '' });
        },
        (err) => {
          console.error('Failed to send email:', err);
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 my-10 mt-20'>
      <div className='text-center mb-8'>
        <FaBookOpen className='text-5xl text-pink-500 mx-auto animate-slow-bounce' />
      </div>
      <h2 className='text-3xl font-bold text-center mb-8'>
        Reach Out to <span className='text-pink-500'>Us</span>
      </h2>
      <form onSubmit={handleSubmit} className="bg-base-200 p-8 border rounded-lg shadow-md transition-shadow duration-500 hover:shadow-lg">
        <div className='form-control mb-6'>
          <label className='label'>
            <span className='label-text'>Your Name</span>
          </label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Enter your name'
            className='input input-bordered hover:shadow-sm transition duration-300'
            required
          />
        </div>

        <div className='form-control mb-6'>
          <label className='label'>
            <span className='label-text'>Email Address</span>
          </label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter your email'
            className='input input-bordered hover:shadow-sm transition duration-300'
            required
          />
        </div>

        <div className='form-control mb-6'>
          <label className='label'>
            <span className='label-text'>Subject</span>
          </label>
          <input
            type='text'
            name='subject'
            value={formData.subject}
            onChange={handleChange}
            placeholder='What’s this about?'
            className='input input-bordered hover:shadow-sm transition duration-300'
            required
          />
        </div>

        <div className='form-control mb-6'>
          <label className='label'>
            <span className='label-text'>Message</span>
          </label>
          <textarea
            name='message'
            value={formData.message}
            onChange={handleChange}
            placeholder='Write your message'
            className='textarea textarea-bordered hover:shadow-sm transition duration-300'
            rows='4'
            required
          ></textarea>
        </div>

        <button type='submit' className='btn btn-primary w-full flex justify-center items-center space-x-2 transform hover:scale-105 transition duration-500'>
          <FaPaperPlane className='text-lg' />
          <span>Send Message</span>
        </button>
      </form>
    </div>
  );
}

export default Contactus;
