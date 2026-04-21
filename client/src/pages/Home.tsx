import { Users, Beaker, Smile, Pill, Activity, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

/**
 * Home Page - Medical Minimalist Design
 * Hero section with professional medical imagery
 * Services showcase with minimalist icons
 */
export default function Home() {
  const services = [
    {
      icon: Users,
      title: 'Consulta General',
      description: 'Atención médica integral con profesionales especializados',
      color: 'text-blue-700',
    },
    {
      icon: Beaker,
      title: 'Laboratorio Clínico',
      description: 'Análisis y pruebas diagnósticas de alta precisión',
      color: 'text-green-600',
    },
    {
      icon: Smile,
      title: 'Odontología',
      description: 'Servicios dentales completos para toda la familia',
      color: 'text-blue-700',
    },
    {
      icon: Pill,
      title: 'Farmacia',
      description: 'Medicamentos y productos farmacéuticos de calidad',
      color: 'text-orange-500',
    },
    {
      icon: Activity,
      title: 'Electrocardiograma',
      description: 'Diagnóstico cardiovascular con tecnología moderna',
      color: 'text-green-600',
    },
    {
      icon: Heart,
      title: 'Promoción de Salud',
      description: 'Programas de prevención y bienestar integral',
      color: 'text-blue-700',
    },
  ];

  const stats = [
    { number: '15+', label: 'Años de experiencia' },
    { number: '500+', label: 'Pacientes atendidos' },
    { number: '20+', label: 'Profesionales' },
    { number: '24/7', label: 'Disponibilidad' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663126905658/aEEywgfyW5tZZK7ehytBC7/hero-medical-3G5uK7KKLQwZpPrVSjH37j.webp"
            alt="Professional healthcare"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#4b88e4a2] to-[#2E5C8A]-900/72 "></div>
        </div>

        <div className="relative container max-w-7xl mx-auto px-4 py-20 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              DAMOSALUD LTDA
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Dando Salud a los Colombianos
            </h2>
            <p className="text-lg md:text-xl text-blue-50 mb-8 leading-relaxed">
              Institución Prestadora de Servicios de Salud comprometida con la calidad, calidez y excelencia en la atención médica integral.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#4793eb] to-[#23da60] hover:from-[#3A7FD1] hover:to-[#25B860] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                  Conocer Servicios
                  <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-blue-700 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                  Contactanos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-50 to-green-50 py-12">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">{stat.number}</p>
                <p className="text-gray-600 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Quiénes Somos
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                En el año 2001 nos reunimos tres amigos personales profesionales del área de la salud y decidimos constituirnos en sociedad limitada, con el objeto de fundar una empresa prestadora de servicios de salud de primer nivel con alto sentido social y calidad en sus servicios.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Brindamos permanente atención personalizada con calidez, oportunidad y eficiencia a nuestros usuarios, procurando el bienestar de nuestros clientes internos y la satisfacción del cliente externo, contribuyendo al desarrollo de nuestra comunidad.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Profesionalismo y Calidad Humana</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Respeto y Excelente Atención</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Compromiso con la Comunidad</span>
                </div>
              </div>
              <Link href="/about" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#4793eb] to-[#23da60] hover:from-[#3A7FD1] hover:to-[#25B860] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                  Ver Más
                  <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663126905658/aEEywgfyW5tZZK7ehytBC7/team-doctors-Cv2GuSCHF5bAGu3Uqh7zKM.webp"
                alt="Medical team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Contamos con una gama completa de servicios de salud para atender todas tus necesidades médicas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg hover:border-green-200 transition-all duration-300 group flex flex-col"
                >
                  <div className={`${service.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center mt-12">
            <Link href="/services" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#4793eb] to-[#23da60] hover:from-[#3A7FD1] hover:to-[#25B860] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                Ver Todos los Servicios
                <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-700 to-blue-900">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Necesitas Atención Médica?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Contáctanos hoy y agenda tu cita con nuestros profesionales especializados
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Agendar Cita
              <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
