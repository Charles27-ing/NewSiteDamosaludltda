import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import ServiceModal from './ServiceModal';

interface BentoCard {
  id: number;
  title: string;
  description: string;
  image: string;
  span: 'col-span-1' | 'col-span-2' | 'row-span-2';
  rowSpan?: 'row-span-2';
  color: string;
  icon: React.ReactNode;
  details: string[];
}

interface BentoServiceGridProps {
  services: BentoCard[];
}

export default function BentoServiceGrid({ services }: BentoServiceGridProps) {
  const [selectedService, setSelectedService] = useState<BentoCard | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (service: BentoCard) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[300px]">
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => handleServiceClick(service)}
            className={`${service.span} ${service.rowSpan || ''} group relative overflow-hidden rounded-2xl cursor-pointer bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300`}
          >
            {/* Background Image */}
            <img
              src={service.image}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/50 transition-all duration-300"></div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-between p-6 md:p-8">
              {/* Icon and Title */}
              <div>
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${service.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white text-xl">{service.icon}</div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>
              </div>

              {/* Description and CTA */}
              <div className="space-y-4">
                <p className="text-gray-200 text-sm md:text-base line-clamp-2 group-hover:text-white transition-colors">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span className="font-semibold">Ver detalles</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Accent Line */}
              <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-green-500 w-0 group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Service Modal */}
      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={selectedService}
      />
    </>
  );
}
