import Link from 'next/link';

interface ContactCardProps {
  name: string;
  role: string;
  whatsapp: string;
  email: string;
  imageNumber: number;
}

export default function ContactCard({ name, role, whatsapp, email, imageNumber }: ContactCardProps) {
  const whatsappUrl = `https://wa.me/${whatsapp.replace(/\D/g, '')}`;
  const mailtoUrl = `mailto:${email}`;

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-xl border border-gray-300 hover:transform hover:scale-105 transition-all duration-300">
      {/* Contact Image */}
      <div className="h-64 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
        <p className="text-lg text-gray-700">
          [Profile Image {imageNumber}]
        </p>
      </div>

      {/* Contact Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-black mb-1">{name}</h3>
        <p className="text-gray-700 mb-4">{role}</p>

        {/* Contact Buttons */}
        <div className="flex space-x-4 mt-4">
          <Link 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-green-600 hover:bg-green-500 rounded-full transition-colors"
            aria-label={`WhatsApp ${name}`}
          >
            <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 22.5C6.109 22.5 1.5 17.891 1.5 12S6.109 1.5 12 1.5 22.5 6.109 22.5 12 17.891 22.5 12 22.5zm0-19.5C6.934 3 3 6.934 3 12s3.934 9 9 9 9-3.934 9-9-3.934-9-9-9z"/>
            </svg>
          </Link>

          <Link 
            href={mailtoUrl}
            className="flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-500 rounded-full transition-colors"
            aria-label={`Email ${name}`}
          >
            <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4.7l-8 4.8-8-4.8V6l8 4.8L20 6v2.7z"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
