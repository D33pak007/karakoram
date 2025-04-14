import Link from 'next/link';

interface MessCardProps {
  name: string;
  description: string;
  contact: string;
  email: string;
  imageNumber: number;
}

function MessCard({ name, description, contact, email, imageNumber }: MessCardProps) {
  const whatsappUrl = `https://wa.me/${contact.replace(/\D/g, '')}`;
  const mailtoUrl = `mailto:${email}`;
  
  return (
    <div className="relative rounded-lg overflow-hidden shadow-xl h-96 group bg-[#333533]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-[#333533] flex items-center justify-center">
        <p className="text-lg text-white">[Mess Image {imageNumber}]</p>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-60 hover:bg-opacity-40 transition-all duration-300"></div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-6 z-10">
        <div>
          <h3 className="text-2xl font-bold text-[#ffea00] mb-2">{name}</h3>
          <p className="text-white">{description}</p>
        </div>
        
        {/* Contact Buttons */}
        <div className="flex space-x-4 mt-4">
          <Link 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-[#ff7b00] hover:bg-opacity-80 rounded-full transition-colors shadow-lg"
            aria-label={`WhatsApp ${name}`}
          >
            <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            </svg>
          </Link>
          
          <Link 
            href={mailtoUrl}
            className="flex items-center justify-center w-12 h-12 bg-[#ffea00] hover:bg-opacity-80 rounded-full transition-colors shadow-lg"
            aria-label={`Email ${name}`}
          >
            <svg className="w-6 h-6 text-[#333533]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 4l-8 -4v10h16V8z"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function MessSection() {
  const messes = [
    {
      name: "North Wing Mess",
      description: "Serving authentic regional cuisine with a focus on high-altitude nutrition.",
      contact: "+92 3001122334",
      email: "north@karakoram-mess.com",
      imageNumber: 1
    },
    {
      name: "South Wing Mess",
      description: "Known for international cuisine and fusion dishes.",
      contact: "+92 3012233445",
      email: "south@karakoram-mess.com",
      imageNumber: 2
    },
    {
      name: "Central Dining Hall",
      description: "Our largest facility with buffet-style meals.",
      contact: "+923023344556",
      email: "central@karakoram-mess.com",
      imageNumber: 3
    }
  ];

  return (
    <section className="relative py-20 px-8 bg-[#333533]">
      <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Mess <span className="text-[#ff7b00]">Groups</span></h2>
          <div className="w-24 h-1 bg-[#ffea00] mx-auto rounded-full"></div>
          <p className="text-white mt-4 max-w-xl mx-auto">
            Discover our dining facilities that serve delicious meals in beautiful mountain settings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {messes.map((mess, index) => (
            <MessCard
              key={index}
              name={mess.name}
              description={mess.description}
              contact={mess.contact}
              email={mess.email}
              imageNumber={mess.imageNumber}
            />
          ))}
        </div>

        {/* Google Form */}
        <div className="mt-12 text-center">
          <h2 className="text-4xl text-white mb-4 text-yellow-400 font-bold my-20 ">Feedback Form</h2>
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLScOh8-lFyrGr1JqRxqGVIYWsJgNKXRP9R5_81jCPxeTPl0uWQ/viewform?usp=sharing" 
            width="100%" 
            height="600px" 
            className="border-none rounded-lg shadow-lg py-8"
          ></iframe>
        </div>

        {/* Mess Portal Button */}
        <div className="mt-8 text-center">
          <Link href="/mess-portal">
            <button className="px-6 py-3 bg-[#ff7b00] text-white text-lg font-bold rounded-lg shadow-lg hover:bg-opacity-80 transition">
              Go to Mess Portal
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}