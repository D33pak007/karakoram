import ContactCard from './ContactCard';

export default function ContactSection() {
  const contacts = [
    {
      name: "Alex Mountaineer",
      role: "Lead Expedition Guide",
      whatsapp: "+92 300 1234567",
      email: "alex@karakoram.com",
      imageNumber: 1
    },
    {
      name: "Sarah Walker",
      role: "Mountain Photographer",
      whatsapp: "+92 301 2345678",
      email: "sarah@karakoram.com",
      imageNumber: 2
    },
    {
      name: "Rahul Sharma",
      role: "Local Guide Expert",
      whatsapp: "+92 302 3456789",
      email: "rahul@karakoram.com",
      imageNumber: 3
    },
    {
      name: "Lisa Chen",
      role: "Conservation Specialist",
      whatsapp: "+92 303 4567890",
      email: "lisa@karakoram.com",
      imageNumber: 4
    }
  ];

  return (
    <section className="py-20 px-8 bg-gray-900 text-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">
            Our <span className="text-yellow-400">Main Team</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 max-w-xl mx-auto">
            Connect with our team of experts who are passionate about the Karakoram range.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {contacts.map((contact, index) => (
            <ContactCard
              key={index}
              name={contact.name}
              role={contact.role}
              whatsapp={contact.whatsapp}
              email={contact.email}
              imageNumber={contact.imageNumber}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
