import '@/styles/globals.css';

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-xl">Animal Network</h1>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-10">
      <p>&copy; 2025 Animal Network. All rights reserved.</p>
    </footer>
  );
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
