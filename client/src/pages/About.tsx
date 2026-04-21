import { CheckCircle, Target, Heart } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'wouter';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <section className="py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Quienes Somos
              </h1>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Nos hemos constituido en una empresa prestadora de servicios de salud en forma integral. Trabajamos con calidad total a la comunidad del departamento de Cordoba y Colombia en general.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Brindamos permanente atencion personalizada con calidez, oportunidad y eficiencia a nuestros usuarios, procurando el bienestar de nuestros clientes internos, satisfaccion del cliente externo, contribuyendo al desarrollo de nuestra comunidad.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                  Contactanos
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663126905658/aEEywgfyW5tZZK7ehytBC7/hero-medical-3G5uK7KKLQwZpPrVSjH37j.webp"
                alt="About us"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-700 rounded-lg mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Mision</h3>
              <p className="text-blue-800 text-sm leading-relaxed">
                Ofrecer servicios de salud con calidad, calidez y oportunidad, contribuyendo al bienestar integral de nuestros pacientes y la comunidad.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-8">
              <div className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-lg mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-3">Vision</h3>
              <p className="text-green-800 text-sm leading-relaxed">
                Ser reconocidos como una institucion prestadora de servicios de salud de excelencia en la region, comprometida con la innovacion y el cuidado integral.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-8">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-500 rounded-lg mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-orange-900 mb-3">Valores</h3>
              <p className="text-orange-800 text-sm leading-relaxed">
                Integridad, responsabilidad, respeto, humanismo y excelencia en cada aspecto de nuestro trabajo diario.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Nuestro Compromiso</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Seguridad del Paciente</h4>
                  <p className="text-gray-600 text-sm">Implementamos protocolos rigurosos para garantizar la seguridad y proteccion de nuestros pacientes en todo momento.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Mejora Continua</h4>
                  <p className="text-gray-600 text-sm">Nos comprometemos con la mejora continua en todos nuestros procesos y servicios para ofrecer excelencia.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Atencion Integral</h4>
                  <p className="text-gray-600 text-sm">Ofrecemos servicios integrales que atienden todas las necesidades de salud de nuestros pacientes.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Accesibilidad</h4>
                  <p className="text-gray-600 text-sm">Garantizamos acceso a servicios de salud de calidad para toda la comunidad sin discriminacion.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
