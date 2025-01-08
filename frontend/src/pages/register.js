import { useState } from 'react';
import Image from 'next/image';

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    profileType: '',
    password: '',
    birthdate: '',
    gender: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setMessage(data.message);

      if (response.ok) {
        console.log('Success:', data);
      } else {
        console.error('Error:', data);
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: '#f0f0f0' }}
    >
      <main className="flex flex-col items-center justify-start p-4">
        {/* Logo */}
        <Image
          src="/images/AN_Red_WhiteBackground.png"
          alt="Animal Network Logo"
          width={550}
          height={550}
          className="mb-4"
        />

        {/* Titel und Beschreibung */}
        <h1 className="text-4xl font-bold mb-4 text-center">Register on Animal Network</h1>
        <p className="text-lg text-center max-w-xl mb-8">
          Join shelters, veterinarians, and helpers to support animal care.
        </p>

        {/* Formular */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 p-6 rounded shadow-md max-w-md w-full"
        >
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="profileType" className="block text-sm font-medium">
              Profile Type
            </label>
            <select
              id="profileType"
              name="profileType"
              value={formData.profileType}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option value="" disabled>
                Select Profile Type
              </option>
              <option value="shelter">Shelter</option>
              <option value="veterinarian">Veterinarian</option>
              <option value="helper">Helper</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="birthdate" className="block text-sm font-medium">
              Date of Birth
            </label>
            <input
              type="date"
              id="birthdate"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="gender" className="block text-sm font-medium">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="diverse">Diverse</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Register
          </button>
        </form>
        {message && <p className="mt-4 text-green-500">{message}</p>}
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-250 py-6">
        <div className="text-center space-y-4">
          {/* Links für Impressum, AGBs und Datenschutz */}
          <div className="text-sm">
            <a href="/imprint" className="text-blue-500 hover:underline mx-2">
              Imprint
            </a>
            |
            <a href="/terms" className="text-blue-500 hover:underline mx-2">
              Terms of Service
            </a>
            |
            <a href="/privacy" className="text-blue-500 hover:underline mx-2">
              Privacy Policy
            </a>
          </div>

          {/* Links zu sozialen Medien */}
          <div className="text-sm">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mx-2"
            >
              Instagram
            </a>
            |
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mx-2"
            >
              Facebook
            </a>
            |
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mx-2"
            >
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
