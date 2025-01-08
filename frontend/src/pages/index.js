import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div
      className={`flex flex-col min-h-screen ${inter.className}`}
      style={{ backgroundColor: '#f0f0f0' }}
    >
      <main className="flex flex-col items-center justify-start p-2">
        <Image
          src="/images/AN_Red_WhiteBackground.png"
          alt="Animal Network Logo"
          width={550}
          height={550}
          className="mb-4"
        />
        <h1 className="text-4xl font-bold mb-4 text-center">Join Animal Network</h1>
        <p className="text-lg text-center max-w-xl mb-8">
          Connect shelters, veterinarians, and helpers for animal care.
        </p>

        <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition max-w-md w-full text-center">
          <h2 className="text-xl font-semibold mb-4">Login to Animal Network</h2>
          <form>
            <div className="mb-4 text-left">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4 text-left">
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center text-sm">
            Don't have an account?{' '}
            <a href="/register" className="text-blue-500 hover:underline">
              Register here
            </a>
          </p>
        </div>
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
