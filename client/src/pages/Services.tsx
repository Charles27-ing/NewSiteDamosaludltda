import { Users, Beaker, Smile, Pill, Activity, Heart } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CategorizedImageGallery from '@/components/CategorizedImageGallery';
import BentoServiceGrid from '@/components/BentoServiceGrid';
import PypImg from '@/img/img-2.jpg';
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

export default function Services() {
  const bentoServices: BentoCard[] = [
    {
      id: 2,
      title: 'Laboratorio Clínico',
      description: 'Análisis y pruebas diagnósticas de alta precisión con equipos de última generación',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663126905658/aEEywgfyW5tZZK7ehytBC7/service-laboratory-cTcJ8a9MdNBDK3KmpcCqmT.webp',
      span: 'col-span-1',
      rowSpan: 'row-span-2',
      color: 'bg-green-600',
      icon: <Beaker className="w-6 h-6" />,
      details: [
        'Análisis de sangre completo',
        'Pruebas bioquímicas avanzadas',
        'Exámenes de orina y heces',
        'Cultivos microbiológicos',
        'Pruebas de COVID-19',
        'Perfiles lipídicos y glucosa',
      ],
    },
    {
      id: 1,
      title: 'Consulta General',
      description: 'Atención médica integral con profesionales especializados en diagnóstico y tratamiento',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663126905658/aEEywgfyW5tZZK7ehytBC7/service-consultation-3G9zXwonWqdHRazqdUEBpH.webp',
      span: 'col-span-1',
      color: 'bg-blue-600',
      icon: <Users className="w-6 h-6" />,
      details: [
        'Evaluación clínica completa',
        'Diagnóstico y tratamiento',
        'Seguimiento de pacientes',
        'Atención de urgencias',
        'Prescripción de medicamentos',
        'Referencia a especialistas',
      ],
    },
    {
      id: 3,
      title: 'Odontología',
      description: 'Servicios dentales completos con tecnología moderna para toda la familia',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663126905658/aEEywgfyW5tZZK7ehytBC7/service-dental-6ewZpjFFCSCZevGbhA3nKt.webp',
      span: 'col-span-1',
      color: 'bg-cyan-600',
      icon: <Smile className="w-6 h-6" />,
      details: [
        'Limpiezas dentales profesionales',
        'Tratamientos de caries',
        'Extracciones dentales',
        'Consulta odontológica',
        'Blanqueamiento dental',
        'Ortodoncia y alineación',
      ],
    },
    {
      id: 4,
      title: 'Farmacia',
      description: 'Medicamentos de calidad con asesoramiento farmacéutico profesional',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663126905658/aEEywgfyW5tZZK7ehytBC7/service-pharmacy-cCthNeeLo4DS9LPj4zQhGe.webp',
      span: 'col-span-1',
      color: 'bg-purple-600',
      icon: <Pill className="w-6 h-6" />,
      details: [
        'Medicamentos genéricos y de marca',
        'Asesoramiento farmacéutico',
        'Dispensación controlada',
        'Consulta sobre interacciones',
        'Medicinas naturales',
        'Productos de salud',
      ],
    },
    {
      id: 5,
      title: 'Promocion y Mantenimiento de la Salud',
      description: 'Servicio de emergencias disponible 24/7 con equipo médico especializado',
      image: PypImg,
      span: 'col-span-2',
      color: 'bg-red-600',
      icon: <Activity className="w-6 h-6" />,
      details: [
        'Atención sin interrupciones',
        'Equipo médico especializado',
        'Toma de Presión Arterial',
        'Pogramas de salud',
      ],
    },
  ];

  const galleryImages = [
    {
      id: 1,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663126905658/aEEywgfyW5tZZK7ehytBC7/facility-reception-Q5tCLpAqsAxxDv9VriCxUN.webp',
      alt: 'Recepcion de la clinica',
      title: 'Area de Recepcion',
      description: 'Recepcion moderna y acogedora con atencion personalizada para nuestros pacientes',
      category: 'Consulta General',
    },
    {
      id: 2,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663126905658/aEEywgfyW5tZZK7ehytBC7/facility-consultation-room-4EqAEXByetmifVreDVR2Nq.webp',
      alt: 'Sala de consulta',
      title: 'Sala de Consulta',
      description: 'Consultorio equipado con tecnologia moderna para diagnostico y tratamiento',
      category: 'Consulta General',
    },
    {
      id: 3,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663126905658/aEEywgfyW5tZZK7ehytBC7/facility-laboratory-cidcdJAmvPWNijJr5zjoeL.webp',
      alt: 'Laboratorio clinico',
      title: 'Laboratorio Clinico',
      description: 'Laboratorio con equipos de ultima generacion para analisis de precision',
      category: 'Laboratorio Clinico',
    },
    {
      id: 4,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663126905658/aEEywgfyW5tZZK7ehytBC7/facility-dental-office-2ZY4NNYzcbCf6sb5jvbrvs.webp',
      alt: 'Consultorio dental',
      title: 'Consultorio Dental',
      description: 'Odontologia moderna con equipos especializados y ambiente confortable',
      category: 'Odontologia',
    },
    {
      id: 5,
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663126905658/aEEywgfyW5tZZK7ehytBC7/facility-pharmacy-av7zLM892Y7xxE2zEetzj9.webp',
      alt: 'Farmacia',
      title: 'Farmacia',
      description: 'Farmacia con medicamentos de calidad y asesoramiento profesional',
      category: 'Farmacia',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://public.boxcloud.com/api/2.0/internal_files/2193051683307/versions/2425100257707/representations/png_paged_2048x2048/content/1.png?access_token=1!eGVBDRp7ZzoW5awUPndQ3d3DIaW1VMewgvU0HXAqM79lZNNtbkbvFs9kulfk-EZOUdVe78caMbemKjAzlsxzpqOeEtm5SS4wU2v7tn2axzDsrH0AkKGRS6Dbcp1XnnqNvbvDcz0GfCJv3sxK0ommCSyjTROTSOS3YyfZZ_hoWzSdrkeKvqooWDM5P3B1G62X-vmNW--M0voz3eA-sdeLPHoDsEK4XzrempqSNno2W5D9YIFeHNiL0nuDVNUWHVAtkd9B2u2eSWFEI-znq_LciGGlyD6512Y7RpWyq8VcjJAczhNvKPrePoRVc-xtBi0lu8lrM-_QIuuExowqoFfc1OHr0inNMPNZ6lHEy048TG1nuehYWeT_42QqmVtbzjN3qxVxhRubLLPkRD7CEEWfm_r0iHnqRCsk9NZZuBETaxDn2JbmE0M9T1T3bDSp9sb4a5Q8zx5Qotg9ba85VBViVdN16eyS_q1yBQ-YJxSqw8M74xZW8P_UssoEBG83svREoSKVAyYYISgofSbwJ8RgaoUJYG_QkWZMMgasJOKbHw-p6c-yUGu0Hga8sDHlBSWc4dusFE9B24g0AIfKHykzR9SKaDgY0FAI3UReoNmZzd1XkLo8WUZy39K3RVxc30yYpK4tTadJjzUGnbl3JyhBm7q0Lb57xyPRLG4UvdEKgg1SaUAGfL8R-OHj157hsnzBmgW0stdv94OyFTCTp6v4BwbvNDia8hosh-s5GXKmna6TZQnrd7xuJVeACI1b0-RkPknmMqLIkA-yroc7cE0z4jy0cJvFROLJbQ..&box_client_name=box-content-preview&box_client_version=3.26.0"
            alt="Medical services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 to-blue-700/70"></div>
        </div>

        <div className="relative container max-w-7xl mx-auto px-4 py-20 md:py-32">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestros Servicios
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Servicios médicos integrales con profesionales especializados y tecnología de punta
          </p>
        </div>
      </section>

      {/* Bento Grid Services */}
      <section className="py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Servicios Destacados
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Haz clic en cualquier servicio para conocer más detalles y agendar tu cita.
            </p>
          </div>

          <BentoServiceGrid services={bentoServices} />
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por Qué Elegir Damos Salud?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nos comprometemos con la excelencia en cada aspecto de nuestros servicios
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Equipo Profesional</h3>
              <p className="text-gray-600">
                Médicos y especialistas con amplia experiencia y certificaciones internacionales
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tecnología Moderna</h3>
              <p className="text-gray-600">
                Equipos de última generación para diagnósticos precisos y tratamientos efectivos
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Atención Personalizada</h3>
              <p className="text-gray-600">
                Cuidado integral y humanizado para cada paciente con seguimiento continuo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <CategorizedImageGallery
            images={galleryImages}
            title="Conoce Nuestras Instalaciones"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-700 to-green-600">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Necesitas Atención Médica?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Contáctanos hoy para agendar tu cita con nuestros especialistas
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-blue-700 font-bold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Agendar Cita
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
