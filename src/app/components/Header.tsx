import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-gray-950 via-gray-700 to-gray-950 text-white fixed w-full top-0 z-50 shadow-lg mb-4 border-b border-yellow-500">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo - Clickable image */}
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="/karalogo.png"  // Path to the logo image in the public folder
            alt="Karakoram Logo"
            width={100}  // Reduced width
            height={35}  // Reduced height
            className="hover:opacity-80 transition-opacity"
          />
        </Link>

        {/* Navigation Menu */}
        <nav>
          <ul className="hidden md:flex space-x-6">
            {[
              { name: 'About Us', path: '/about' },
              { name: 'Gallery', path: '/gallery' },
              { name: 'Contact', path: '/contact' },
              { name: 'Mess', path: '/mess' },
              { name: 'Secretaries', path: '/secretaries' },
              { name: 'Cultural', path: '/cultural' },
              { name: 'Sports', path: '/sports' }
            ].map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className="text-white hover:text-yellow-400 transition-colors font-semibold"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-2xl focus:outline-none">
          ☰
        </button>
      </div>
    </header>
  );
}