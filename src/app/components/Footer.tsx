import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-8 mt-auto bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Mountain Range SVG Silhouette */}
        <div className="w-full h-16 mb-6 overflow-hidden">
          <svg viewBox="0 0 1200 120" className="w-full h-full" preserveAspectRatio="none">
            <path 
              d="M0,80 L100,60 L200,90 L300,40 L400,70 L500,30 L600,80 L700,20 L800,90 L900,50 L1000,70 L1100,30 L1200,80 L1200,120 L0,120 Z" 
              fill="rgba(255,255,255,0.1)"
            />
            <path 
              d="M0,90 L150,70 L300,100 L450,50 L600,80 L750,40 L900,100 L1050,60 L1200,90 L1200,120 L0,120 Z" 
              fill="rgba(255,255,255,0.15)"
            />
          </svg>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-orange-500 text-lg font-bold mb-4">About Karakoram</h3>
            <p className="text-gray-300 text-sm opacity-80">
              A mountain range spanning the borders of Pakistan, India, and China, 
              with some of the world's highest peaks including K2.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-orange-500 text-lg font-bold mb-4">Explore</h3>
            <ul className="space-y-2">
              {["Peaks", "Glaciers", "Expeditions", "Gallery", "Conservation"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-300 text-sm hover:text-yellow-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Connect Section */}
          <div>
            <h3 className="text-orange-500 text-lg font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {["Facebook", "Twitter", "Instagram", "YouTube"].map((social) => (
                <Link 
                  key={social} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 text-gray-900"></div>
                </Link>
              ))}
            </div>
            <p className="mt-4 text-gray-300 text-sm">
              contact@karakoram-mountains.com
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-yellow-400 text-center text-orange-500 text-sm">
          <p>© {new Date().getFullYear()} Karakoram. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
