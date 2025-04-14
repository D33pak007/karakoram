// app/components/SecretariesSection.tsx
import Link from 'next/link';

interface SecretaryCardProps {
  name: string;
  position: string;
  department: string;
  contact: string;
  email: string;
  imageNumber: number;
}

function SecretaryCard({ name, position, department, contact, email, imageNumber }: SecretaryCardProps) {
  const whatsappUrl = `https://wa.me/${contact.replace(/\D/g, '')}`;
  const mailtoUrl = `mailto:${email}`;
  
  return (
    <div className="bg-blue-800 bg-opacity-40 border border-blue-700 rounded-lg overflow-hidden shadow-xl group hover:bg-blue-800 hover:bg-opacity-60 transition-all duration-300">
      <div className="p-6">
        <div className="flex items-center space-x-4">
          {/* Avatar */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
            {name.charAt(0)}
          </div>
          
          {/* Info */}
          <div>
            <h3 className="text-xl font-bold text-white">{name}</h3>
            <p className="text-blue-200">{position}</p>
            <p className="text-blue-300 text-sm">{department}</p>
          </div>
        </div>
        
        {/* Contact Buttons */}
        <div className="flex space-x-4 mt-6">
          <Link 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 bg-green-600 hover:bg-green-500 rounded-full transition-colors"
            aria-label={`WhatsApp ${name}`}
          >
            <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            </svg>
          </Link>
          
          <Link 
            href={mailtoUrl}
            className="flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-500 rounded-full transition-colors"
            aria-label={`Email ${name}`}
          >
            <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4.7l-8 4.8-8-4.8V6l8 4.8L20 6v2.7z"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function SecretariesSection() {
  // Secretary data
  const secretaries = [
    {
      name: "Rahul Mehta",
      position: "General Secretary",
      department: "Administration",
      contact: "+92 305 1122334",
      email: "gensec@karakoram.com",
      imageNumber: 1
    },
    {
      name: "Aisha Khan",
      position: "Mess Secretary",
      department: "Food Services",
      contact: "+92 306 2233445",
      email: "mess@karakoram.com",
      imageNumber: 2
    },
    {
      name: "Tariq Ahmed",
      position: "Maintenance Secretary",
      department: "Facilities",
      contact: "+92 307 3344556",
      email: "maintenance@karakoram.com",
      imageNumber: 3
    },
    {
      name: "Priya Sharma",
      position: "Cultural Secretary",
      department: "Events & Activities",
      contact: "+92 308 4455667",
      email: "cultural@karakoram.com",
      imageNumber: 4
    },
    {
      name: "Li Wei",
      position: "Sports Secretary",
      department: "Athletics",
      contact: "+92 309 5566778",
      email: "sports@karakoram.com",
      imageNumber: 5
    },
    {
      name: "James Wilson",
      position: "Academic Secretary",
      department: "Education",
      contact: "+92 310 6677889",
      email: "academic@karakoram.com",
      imageNumber: 6
    }
  ];

  return (
    <section className="py-20 px-8 bg-gradient-to-b from-blue-900 to-blue-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-100 mb-4">Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Secretaries</span></h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
          <p className="text-blue-100 mt-4 max-w-xl mx-auto">
            Our dedicated team of secretaries who work tirelessly to make Karakoram a better place.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {secretaries.map((secretary, index) => (
            <SecretaryCard
              key={index}
              name={secretary.name}
              position={secretary.position}
              department={secretary.department}
              contact={secretary.contact}
              email={secretary.email}
              imageNumber={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}