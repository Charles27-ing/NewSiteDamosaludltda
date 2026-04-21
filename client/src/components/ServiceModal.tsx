import { X } from 'lucide-react';
import { useEffect } from 'react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    id: number;
    title: string;
    description: string;
    image: string;
    icon: React.ReactNode;
    details: string[];
  } | null;
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <div className="sticky top-0 flex items-center justify-between p-6 bg-white border-b border-gray-200 z-10">
          <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Image */}
          <div className="mb-8 rounded-xl overflow-hidden h-64 md:h-80">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Descripción</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              {service.description}
            </p>
          </div>

          {/* Details */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Servicios Incluidos</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {service.details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                    <svg
                      className="w-4 h-4 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex gap-4">
            <a
              href="/contact"
              className="flex-1 bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-colors text-center"
            >
              Agendar Cita
            </a>
            <button
              onClick={onClose}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
