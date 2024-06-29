import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <><Navbar /><div className="flex items-center justify-center min-h-screen mt-10 bg-gray-100 dark:bg-slate-900 dark:text-black">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">About Us</h2>
        <p className="text-gray-700 mb-4">
          Welcome to our company! We are dedicated to providing the best services to our customers.
        </p>
        <p className="text-gray-700 mb-4">
          Our mission is to deliver high-quality products that bring value to our clients. With years of experience in the industry, we have established a reputation for excellence and customer satisfaction.
        </p>
        <p className="text-gray-700 mb-4">
          Our team of professionals is committed to continuous improvement and innovation. We believe in fostering a collaborative environment where everyone can contribute to the company's success.
        </p>
        <p className="text-gray-700 mb-4">
          Thank you for choosing us. We look forward to serving you and meeting your needs with the utmost professionalism and dedication.
        </p>
        <div className="flex items-center justify-between">
          <Link
            to={'/'}
            className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
          >
            Back
          </Link>
        </div>
      </div>
    </div></>
  );
};

export default AboutUs;
