import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

/**
 * Footer Component - Medical Minimalist Design
 * Deep blue background with mint green accents
 */
export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold text-blue-700 mb-4">DAMOSALUD LTDA</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Institución Prestadora de Servicios de Salud comprometida con la calidad y el bienestar de nuestros pacientes.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-600 text-sm">Calle de las Flores Cra 15-15, Cereté</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-green-600 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-gray-600">FOMAG: 311 673 6783</p>
                  <p className="text-gray-600">Nueva EPS: 604 656 4317</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-green-600 flex-shrink-0" />
                <p className="text-gray-600 text-sm">Damosalud@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Horario</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-green-600 flex-shrink-0" />
                <div>
                  <p className="text-gray-600"><span className="font-medium">L-V:</span> 7:00 - 12:00 | 14:00 - 18:00</p>
                  <p className="text-gray-600"><span className="font-medium">Sábado:</span> 8:00 - 12:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Síguenos</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-lg flex items-center justify-center text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-lg flex items-center justify-center text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-lg flex items-center justify-center text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-lg flex items-center justify-center text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} DAMOSALUD LTDA. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-blue-700 transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-700 transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
