import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'wouter';

/**
 * Navigation Component - Damos Salud Brand Design
 * Blue, Green, Yellow brand colors with interactive hover effects
 * Responsive mobile menu
 */
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Inicio', href: '/', color: '#171d02ff', bgColor: '#e8f1ff' },
    { label: 'Quienes Somos', href: '/about', color: '#171d02ff', bgColor: '#e8f8f0' },
    { label: 'Servicios', href: '/services', color: '#171d02ff', bgColor: '#fffbf0' },
    { label: 'Blog', href: '/blog', color: '#171d02ff', bgColor: '#e8f1ff' },
    { label: 'Laboratorio', href: '/laboratory', color: '#171d02ff', bgColor: '#fef3c7' },
    { label: 'Equipo', href: '/team', color: '#171d02ff', bgColor: '#e8f8f0' },
    { label: 'Reportes', href: '/reports', color: '#171d02ff', bgColor: '#fffbf0' },
    { label: 'Contacto', href: '/contact', color: '#171d02ff', bgColor: '#e8f1ff' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <img
              src="src/img/logoDamosalud.jpeg"
              alt="DAMOSALUD Logo"
              className="h-12 w-auto group-hover:opacity-80 transition-opacity duration-300"
            />
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-gray-900">DAMOSALUD</p>
              <p className="text-sm text-gray-600">IPS Cerete</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-lg font-medium text-sm transition-all duration-300 relative group"
                style={{
                  color: '#1f2937',
                }}
              >
                <span
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  style={{
                    backgroundColor: item.bgColor,
                  }}
                ></span>
                <span
                  className="absolute bottom-0 left-0 w-0 h-1 group-hover:w-full transition-all duration-300 rounded-full"
                  style={{
                    backgroundColor: item.color,
                  }}
                ></span>
                <span className="relative z-10 group-hover:font-bold transition-all duration-300" style={{
                  color: item.color,
                }}>
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 rounded-lg transition-all duration-200 font-medium text-sm block"
                  style={{
                    backgroundColor: item.bgColor,
                    color: item.color,
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
