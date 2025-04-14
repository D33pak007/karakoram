// app/components/SportsSection.tsx
export default function SportsSection() {
    // Sports achievements data
    const achievements = [
      "Inter-Hostel Cricket Tournament 2024 - Champions",
      "University Football Championship 2023 - Runners-up",
      "Table Tennis Individual Gold Medal 2024",
      "Basketball Inter-College Tournament - Winners"
    ];
  
    // Sports offered data
    const sportsOffered = [
      { name: "Cricket", captain: "Rohit Verma", viceCaptain: "Aakash Negi" },
      { name: "Football", captain: "Sanjay Rao", viceCaptain: "Farhan Khan" },
      { name: "Basketball", captain: "Amit Singh", viceCaptain: "Karan Malhotra" },
      { name: "Table Tennis", captain: "Varun Sharma", viceCaptain: "Nikhil Reddy" },
      { name: "Badminton", captain: "Suresh Kumar", viceCaptain: "Ganesh Iyer" },
      { name: "Chess", captain: "Ramesh Patel", viceCaptain: "Abhishek Tiwari" }
    ];
  
    return (
      <section className="py-20 px-8 bg-gradient-to-b from-purple-950 to-blue-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-100 mb-4">Sports <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Excellence</span></h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
            <p className="text-blue-100 mt-6 max-w-2xl mx-auto">
              Karakoram has a strong tradition of sporting excellence. Our residents participate in various
              sports competitions and have brought home numerous trophies and medals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16">
            <div className="bg-blue-900 bg-opacity-30 p-8 rounded-xl border border-blue-800">
              <h3 className="text-2xl font-bold text-white mb-4">Sports Secretary</h3>
              <div className="flex items-center space-x-4 mb-6">
                {/* Placeholder for image */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-700 to-indigo-600 flex-shrink-0 flex items-center justify-center">
                  <p className="text-sm text-blue-100">[Image]</p>
                </div>
                <div>
                  <h4 className="text-xl text-white font-medium">Vikram Mehta</h4>
                  <p className="text-blue-200">Sports Secretary 2024-25</p>
                </div>
              </div>
              <p className="text-blue-100 mb-4">
                Leading Karakoram's sports initiatives with passion and dedication. Under his leadership,
                our sports teams have achieved remarkable success in various tournaments.
              </p>
              <div className="flex space-x-4">
                <a href="https://wa.me/923063456789" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 22.5C6.109 22.5 1.5 17.891 1.5 12S6.109 1.5 12 1.5 22.5 6.109 22.5 12 17.891 22.5 12 22.5zm0-19.5C6.934 3 3 6.934 3 12s3.934 9 9 9 9-3.934 9-9-3.934-9-9-9z"/>
                  </svg>
                </a>
                <a href="mailto:vikram@karakoram.com" className="text-blue-400 hover:text-blue-300">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4.7l-8 4.8-8-4.8V6l8 4.8L20 6v2.7z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="bg-blue-900 bg-opacity-30 p-8 rounded-xl border border-blue-800">
              <h3 className="text-2xl font-bold text-white mb-4">Recent Achievements</h3>
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-center text-blue-100">
                    <svg className="w-5 h-5 text-yellow-400 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    {achievement}
                  </li>
                ))}
              </ul>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                {/* Trophy images (placeholders) */}
                {[1, 2].map((num) => (
                  <div key={num} className="rounded-lg overflow-hidden shadow-lg">
                    <div className="h-32 bg-gradient-to-br from-yellow-600 to-yellow-500 flex items-center justify-center">
                      <p className="text-lg text-yellow-100">
                        [Trophy {num}]
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Our Sports Teams</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sportsOffered.map((sport, index) => (
              <div key={index} className="bg-blue-900 bg-opacity-30 p-6 rounded-xl border border-blue-800">
                <h4 className="text-xl font-bold text-white mb-4">{sport.name}</h4>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-700 to-indigo-600 flex-shrink-0 flex items-center justify-center">
                      <p className="text-xs text-blue-100">[Img]</p>
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm">Captain</p>
                      <p className="text-white">{sport.captain}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-700 to-indigo-600 flex-shrink-0 flex items-center justify-center">
                      <p className="text-xs text-blue-100">[Img]</p>
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm">Vice Captain</p>
                      <p className="text-white">{sport.viceCaptain}</p>
                    </div>
                  </div>
                </div>
                
                {/* Sport image (placeholder) */}
                <div className="h-40 bg-gradient-to-br from-blue-800 to-indigo-800 rounded-lg mt-4 flex items-center justify-center">
                  <p className="text-lg text-blue-100">
                    [{sport.name} Team]
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }