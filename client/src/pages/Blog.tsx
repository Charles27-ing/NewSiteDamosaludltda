import { useState } from 'react';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Jornada de Vacunación 2024',
      excerpt: 'Participa en nuestra jornada de vacunación gratuita. Protégete a ti y a tu familia.',
      content: 'En DAMOSALUD realizamos jornadas de vacunación periódicas para proteger la salud de nuestra comunidad. Contamos con todas las vacunas recomendadas por el Ministerio de Salud. Nuestro equipo de profesionales garantiza una atención segura y de calidad.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663126905658/aEEywgfyW5tZZK7ehytBC7/blog-vaccination-event-QasafDWURwirr7Xy5s2LZP.webp',
      category: 'Eventos',
      author: 'Dr. Carlos López',
      date: '15 de Abril, 2024',
      readTime: '5 min',
    },
    {
      id: 2,
      title: 'Charla Educativa: Hipertensión y Prevención',
      excerpt: 'Aprende a controlar tu presión arterial y prevenir complicaciones cardiovasculares.',
      content: 'La hipertensión es una de las enfermedades crónicas más comunes. En esta charla educativa, nuestros especialistas te enseñarán cómo identificar los síntomas, controlar tu presión arterial y adoptar hábitos saludables para prevenir complicaciones.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663126905658/aEEywgfyW5tZZK7ehytBC7/blog-hypertension-talk-YWyqqLFRhXnQRL5Y6zeeHP.webp',
      category: 'Charlas',
      author: 'Dra. María Rodríguez',
      date: '10 de Abril, 2024',
      readTime: '7 min',
    },
    {
      id: 3,
      title: 'Manipulación Segura de Medicamentos',
      excerpt: 'Conoce las mejores prácticas para almacenar y usar correctamente tus medicamentos.',
      content: 'El uso correcto de medicamentos es fundamental para tu salud. Aprende cómo almacenarlos adecuadamente, identificar fechas de vencimiento, y evitar errores comunes que pueden afectar tu tratamiento.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663126905658/aEEywgfyW5tZZK7ehytBC7/blog-medication-safety-AzxbbXJrhGE7vehGFy5Aic.webp',
      category: 'Salud',
      author: 'Farmacéutica Laura García',
      date: '5 de Abril, 2024',
      readTime: '6 min',
    },
    {
      id: 4,
      title: 'Consejos para una Vida Saludable',
      excerpt: 'Descubre hábitos simples que pueden transformar tu salud y bienestar.',
      content: 'Una vida saludable no requiere cambios drásticos. Pequeñas acciones como ejercicio regular, alimentación balanceada, manejo del estrés y chequeos periódicos pueden hacer una gran diferencia en tu calidad de vida.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663126905658/aEEywgfyW5tZZK7ehytBC7/blog-health-tips-UhToipqs4VGC5856nrE7ST.webp',
      category: 'Salud',
      author: 'Dr. Roberto Martínez',
      date: '1 de Abril, 2024',
      readTime: '8 min',
    },
    {
      id: 5,
      title: 'Diabetes: Prevención y Control',
      excerpt: 'Estrategias efectivas para prevenir y manejar la diabetes tipo 2.',
      content: 'La diabetes es una enfermedad prevenible en muchos casos. Conoce los factores de riesgo, cómo mantener un peso saludable, la importancia del ejercicio y la alimentación balanceada para prevenir o controlar esta enfermedad.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663126905658/aEEywgfyW5tZZK7ehytBC7/blog-health-tips-UhToipqs4VGC5856nrE7ST.webp',
      category: 'Salud',
      author: 'Dra. Patricia Sánchez',
      date: '28 de Marzo, 2024',
      readTime: '7 min',
    },
    {
      id: 6,
      title: 'Jornada de Atención Preventiva',
      excerpt: 'Acceso a chequeos médicos completos y asesoramiento de salud preventiva.',
      content: 'Realizamos jornadas de atención preventiva donde puedes acceder a chequeos médicos completos, pruebas de laboratorio y asesoramiento personalizado de nuestros especialistas, todo con tarifas especiales.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663126905658/aEEywgfyW5tZZK7ehytBC7/blog-vaccination-event-QasafDWURwirr7Xy5s2LZP.webp',
      category: 'Eventos',
      author: 'Dr. Fernando Díaz',
      date: '25 de Marzo, 2024',
      readTime: '5 min',
    },
  ];

  const categories = ['Todos', 'Eventos', 'Charlas', 'Salud'];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-r from-blue-700 to-green-600">
        <div className="container max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Blog de Salud y Eventos
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Mantente informado sobre eventos, charlas educativas y consejos de salud de nuestros especialistas
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container max-w-7xl mx-auto px-4">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar artículos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-700 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <a
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-blue-300 transition-all duration-300 group flex flex-col h-full"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>

                    {/* Meta Information */}
                    <div className="space-y-3 pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4 text-green-600" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <User className="w-4 h-4 text-green-600" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-sm text-gray-500">{post.readTime} de lectura</span>
                        <ArrowRight className="w-5 h-5 text-blue-700 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No se encontraron artículos que coincidan con tu búsqueda.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-green-600 to-blue-700">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Tienes Preguntas sobre tu Salud?
          </h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Nuestros especialistas están disponibles para atenderte y resolver todas tus dudas
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-blue-700 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Contactar Ahora
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
