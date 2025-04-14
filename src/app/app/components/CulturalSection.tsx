// app/components/CulturalSection.tsx
'use client';

import { useState } from 'react';

// Sample cultural achievements data
const culturalData = {
  secretary: {
    name: "Priya Sharma",
    quote: "Our cultural heritage is our strength. Through art and performances, we keep our traditions alive while embracing global perspectives.",
    contact: "cultural@karakoram.com"
  },
  achievements: [
    {
      title: "Inter-Hostel Dance Competition",
      year: "2024",
      position: "1st Place",
      description: "Showcased a fusion of traditional mountain dances with contemporary styles."
    },
    {
      title: "National Folk Music Festival",
      year: "2023",
      position: "Gold Medal",
      description: "Performed original compositions inspired by Karakoram valley sounds."
    },
    {
      title: "Annual Drama Contest",
      year: "2023",
      position: "Best Production",
      description: "Original play 'Echoes of the Mountains' depicted life in high-altitude communities."
    },
    {
      title: "Art Exhibition",
      year: "2024",
      position: "Critics' Choice",
      description: "Collection of paintings and sculptures representing the biodiversity of Karakoram."
    }
  ],
  galleries: [1, 2, 3, 4, 5, 6] // Image numbers for gallery
};

export default function CulturalSection() {
  const [activeTab, setActiveTab] = useState('achievements');
  
  return (
    <section className="py-20 px-8 bg-blue-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-100 mb-4">Cultural <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Heritage</span></h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
          <p className="text-blue-100 mt-4 max-w-xl mx-auto">
            Celebrating our traditions through performances, art, and cultural events.
          </p>
        </div>
        
        {/* Current Secretary */}
        <div className="mb-12 bg-blue-900 bg-opacity-30 rounded-lg p-6 border-l-4 border-blue-400">
          <h3 className="text-xl text-white font-bold mb-2">Current Cultural Secretary</h3>
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xl mb-4 md:mb-0 md:mr-6">
              {culturalData.secretary.name.charAt(0)}
            </div>
            <div>
              <p className="text-xl font-semibold text-blue-100">{culturalData.secretary.name}</p>
              <p className="text-blue-200 italic mt-2">"{culturalData.secretary.quote}"</p>
              <p className="text-blue-300 mt-2">Contact: {culturalData.secretary.contact}</p>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="mb-8 flex border-b border-blue-800">
          <button 
            className={`px-6 py-3 font-medium ${activeTab === 'achievements' ? 'text-blue-200 border-b-2 border-blue-400' : 'text-blue-400 hover:text-blue-200'}`}
            onClick={() => setActiveTab('achievements')}
          >
            Achievements
          </button>
          <button 
            className={`px-6 py-3 font-medium ${activeTab === 'gallery' ? 'text-blue-200 border-b-2 border-blue-400' : 'text-blue-400 hover:text-blue-200'}`}
            onClick={() => setActiveTab('gallery')}
          >
            Gallery
          </button>
        </div>
        
        {/* Achievements Tab */}
        {activeTab === 'achievements' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {culturalData.achievements.map((achievement, index) => (
              <div key={index} className="bg-blue-900 bg-opacity-30 p-6 rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                  <span className="bg-blue-700 text-blue-100 px-3 py-1 rounded-full text-sm">{achievement.year}</span>
                </div>
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-blue-100 font-medium">{achievement.position}</span>
                </div>
                <p className="text-blue-200">{achievement.description}</p>
              </div>
            ))}
          </div>
        )}
        
        {/* Gallery Tab */}
        {activeTab === 'gallery' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {culturalData.galleries.map((num) => (
              <div key={num} className="bg-blue-900 bg-opacity-30 rounded-lg overflow-hidden h-64 relative group">
                {/* This is a placeholder for the image */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-indigo-600 flex items-center justify-center">
                  <p className="text-lg text-blue-100">
                    [Cultural Image {num}]
                  </p>
                </div>
                <div className="absolute inset-0 bg-blue-900 bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors">
                    View Full Size
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}