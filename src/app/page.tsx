import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col bg-[url('/karakoram.jpg')] bg-cover bg-center bg-no-repeat relative bg-custom-100 "
    >
      {/* Overlay for blur effect */}
      <div className="absolute inset-0  opacity-100 backdrop-blur-xs"></div>

      <main className="flex-grow flex items-center justify-center text-center h-screen relative">
        <div>
          <h1 className="text-7xl md:text-9xl font-bold tracking-wider">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-100 drop-shadow-lg">
              KARAKORAM
            </span>
          </h1>
          <div className="mt-6 max-w-lg mx-auto">
            <p className="text-blue text-lg">
              Home to some of the world's highest peaks
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

