import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-start pt-8 ${inter.className}`}
      style={{ backgroundColor: 'f1f4f7' }} // Hintergrundfarbe auf leichtes Grau setzen
    >
      <Image
        src="/images/AN_Red_WhiteBackground.png"
        alt="Animal Network Logo"
        width={550}
        height={550}
        className="mb-4"
      />
      <h1 className="text-4xl font-bold mb-4">Join Animal Network</h1>
      <p className="text-lg text-center max-w-xl mb-8">
        Connect shelters, veterinarians, and helpers for animal care.
      </p>
      <p className="text-lg text-center max-w-xl mb-0">
        Start exploring now!
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <a href="/about" className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold">About Us &rarr;</h2>
          <p>Learn more about the Animal Network platform.</p>
        </a>
        <a href="/services" className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold">Services &rarr;</h2>
          <p>Discover how we help shelters and volunteers.</p>
        </a>
        <a href="/contact" className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold">Contact Us &rarr;</h2>
          <p>Get in touch with us for more information.</p>
        </a>
      </div>
    </main>
  );
}
