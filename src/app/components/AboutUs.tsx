"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function AboutUs() {
  const slogan = "A Legacy of Excellence, A Home Away from Home";
  const [animatedText, setAnimatedText] = useState('');
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setAnimatedText(slogan.substring(0, index + 1));
      index++;
      if (index === slogan.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto p-0 bg-gray-900 text-white">
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-[400px]">
        <Image 
          src="/karakoram-banner.jpg" 
          alt="Karakoram Hostel" 
          layout="fill" 
          objectFit="cover" 
          className="opacity-80"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50">
          <h2 className="text-3xl font-bold text-white animate-typing overflow-hidden border-r-2 border-white whitespace-nowrap">{animatedText}</h2>
        </div>
      </div>

      {/* About Karakoram Heading */}
      <div className="text-center my-12">
        <h1 className="text-5xl font-extrabold drop-shadow-lg animate-fade-in">
        <h2 className="text-4xl font-bold text-gray-100 mb-4">
            About <span className="text-yellow-400">Karkoram</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
          {/* <span className="text-cyan-400">koram</span> */}
        </h1>
      </div>
      
      <div className="p-8">
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          Leaving the comfort zone of your home for the first time in life is not an easy task. The Karakoram hostel 
          transforms this challenge into an adventure! Named after the majestic Karakoram Mountain ranges, it stands as one 
          of the oldest and most prestigious hostels of IIT Delhi. Whether in academics, cultural events, or sports, we 
          uphold a tradition of excellence, nurturing talent across various clubs, including dance, drama, debating, 
          photography, design, and literary arts.
        </p>
        
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          Home to over 500 students, Karakoram fosters a close-knit community that supports and inspires. Our residents 
          enjoy top-notch facilities, including a vibrant TV lounge, music and drama rooms, badminton and indoor sports 
          areas, a well-equipped gym, pool tables, and outdoor courts for basketball, volleyball, and cricket. The 
          open-air theatre is a favorite spot for relaxation and entertainment.
        </p>
        
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          Our mess is a culinary delight, widely recognized as the best in IIT Delhi. Featuring themes inspired by popular 
          TV shows, a lively atmosphere, and an exceptional music system, dining here is always an experience. Karakoram's 
          legacy of excellence extends beyond the hostel, securing multiple institute-level trophies, including the 
          prestigious BHM trophy and awards for our lush, beautifully maintained gardens.
        </p>
        
        <h2 className="text-4xl font-bold text-center mt-12 mb-6 text-yellow-400 drop-shadow-lg">Our Vision</h2>
        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          At Karakoram, we strive for the holistic development of every individual, encouraging excellence in both academics 
          and extracurricular activities. Our hostel is a hub of innovation, talent, and camaraderie, where each resident 
          is motivated to push their boundaries while upholding the spirit of teamwork, respect, and integrity.
        </p>
      
        {/* Team Section */}
        <h2 className="text-4xl font-bold text-center mb-6 text-yellow-400 drop-shadow-lg">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 shadow-xl rounded-lg p-6 text-center transform hover:scale-105 transition-transform">
            <Image 
              src="/warden.jpg" 
              alt="Warden" 
              width={150} 
              height={150} 
              className="mx-auto rounded-full mb-4"
            />
            <h3 className="text-2xl font-semibold mt-4 text-orange-400">Dr. [Warden's Name]</h3>
            <p className="text-gray-400">Warden</p>
          </div>
          <div className="bg-gray-800 shadow-xl rounded-lg p-6 text-center transform hover:scale-105 transition-transform">
            {/* <Image 
              src="/caretaker.jpg" 
              alt="Caretaker" 
              width={150} 
              height={150} 
              className="mx-auto rounded-full mb-4"
            /> */}
            <h3 className="text-2xl font-semibold mt-4 text-orange-400">Mr. [Caretaker's Name]</h3>
            <p className="text-gray-400">Caretaker</p>
          </div>
          <div className="bg-gray-800 shadow-xl rounded-lg p-6 text-center transform hover:scale-105 transition-transform">
            {/* <Image 
              src="/mess-manager.jpg" 
              alt="Mess Manager" 
              width={150} 
              height={150} 
              className="mx-auto rounded-full mb-4"
            /> */}
            <h3 className="text-2xl font-semibold mt-4 text-orange-400">Mr. [Mess Manager's Name]</h3>
            <p className="text-gray-400">Mess Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
}