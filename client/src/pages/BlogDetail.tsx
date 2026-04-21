import { useRoute } from 'wouter';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  fullContent: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

export default function BlogDetail() {
  const [match, params] = useRoute('/blog/:id');

  const blogPosts: Record<number, BlogPost> = {
    1: {
      id: 1,
      title: 'Jornada de Vacunación 2024',
      excerpt: 'Participa en nuestra jornada de vacunación gratuita. Protégete a ti y a tu familia.',
      content: 'En DAMOSALUD realizamos jornadas de vacunación periódicas para proteger la salud de nuestra comunidad.',
      fullContent: `
        <h2>Jornada de Vacunación 2024 - DAMOSALUD</h2>
        
        <p>En DAMOSALUD realizamos jornadas de vacunación periódicas para proteger la salud de nuestra comunidad. Contamos con todas las vacunas recomendadas por el Ministerio de Salud. Nuestro equipo de profesionales garantiza una atención segura y de calidad.</p>
        
        <h3>¿Por qué vacunarse?</h3>
        <p>La vacunación es una de las medidas más efectivas para prevenir enfermedades infecciosas. Protege no solo tu salud, sino también la de las personas vulnerables a tu alrededor, como bebés y adultos mayores.</p>
        
        <h3>Vacunas disponibles</h3>
        <ul>
          <li>Influenza (gripe)</li>
          <li>COVID-19</li>
          <li>Neumococo</li>
          <li>Tétanos</li>
          <li>Hepatitis B</li>
          <li>Sarampión, Rubéola y Parotiditis (SRP)</li>
        </ul>
        
        <h3>Fechas y horarios</h3>
        <p>Próxima jornada: 20 de Abril de 2024</p>
        <p>Horario: 8:00 AM - 4:00 PM</p>
        <p>Lugar: Clínica DAMOSALUD, Calle de las Flores Cra 15-15, Cereté</p>
        
        <h3>¿Qué debes llevar?</h3>
        <ul>
          <li>Documento de identidad</li>
          <li>Carné de vacunación (si lo tienes)</li>
          <li>Información sobre alergias o medicamentos que tomas</li>
        </ul>
        
        <p>¡No esperes más! Protégete a ti y a tu familia. Participa en nuestra jornada de vacunación gratuita.</p>
      `,
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663126905658/aEEywgfyW5tZZK7ehytBC7/blog-vaccination-event-QasafDWURwirr7Xy5s2LZP.webp',
      category: 'Eventos',
      author: 'Dr. Carlos López',
      date: '15 de Abril, 2024',
      readTime: '5 min',
    },
    2: {
      id: 2,
      title: 'Charla Educativa: Hipertensión y Prevención',
      excerpt: 'Aprende a controlar tu presión arterial y prevenir complicaciones cardiovasculares.',
      content: 'La hipertensión es una de las enfermedades crónicas más comunes.',
      fullContent: `
        <h2>Charla Educativa: Hipertensión y Prevención</h2>
        
        <p>La hipertensión es una de las enfermedades crónicas más comunes en Colombia. En esta charla educativa, nuestros especialistas te enseñarán cómo identificar los síntomas, controlar tu presión arterial y adoptar hábitos saludables para prevenir complicaciones.</p>
        
        <h3>¿Qué es la hipertensión?</h3>
        <p>La hipertensión o presión arterial alta es cuando la fuerza con la que el corazón bombea sangre es demasiado alta. Una presión normal es menor a 120/80 mmHg. La hipertensión se diagnostica cuando la presión es 130/80 mmHg o mayor.</p>
        
        <h3>Factores de riesgo</h3>
        <ul>
          <li>Edad avanzada</li>
          <li>Antecedentes familiares</li>
          <li>Sobrepeso u obesidad</li>
          <li>Consumo excesivo de sal</li>
          <li>Sedentarismo</li>
          <li>Estrés</li>
          <li>Consumo de alcohol</li>
        </ul>
        
        <h3>Síntomas</h3>
        <p>Muchas personas con hipertensión no presentan síntomas. Por eso se le conoce como "el asesino silencioso". Sin embargo, algunos síntomas pueden incluir:</p>
        <ul>
          <li>Dolores de cabeza</li>
          <li>Falta de aire</li>
          <li>Sangrado nasal</li>
          <li>Mareos</li>
        </ul>
        
        <h3>Prevención y control</h3>
        <ul>
          <li>Reduce el consumo de sal</li>
          <li>Mantén un peso saludable</li>
          <li>Realiza ejercicio regular (30 minutos diarios)</li>
          <li>Reduce el estrés</li>
          <li>Limita el consumo de alcohol</li>
          <li>Monitorea tu presión arterial regularmente</li>
          <li>Sigue el tratamiento prescrito por tu médico</li>
        </ul>
        
        <p>Recuerda que la prevención es mejor que la cura. Cuida tu presión arterial y vive una vida más saludable.</p>
      `,
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663126905658/aEEywgfyW5tZZK7ehytBC7/blog-hypertension-talk-YWyqqLFRhXnQRL5Y6zeeHP.webp',
      category: 'Charlas',
      author: 'Dra. María Rodríguez',
      date: '10 de Abril, 2024',
      readTime: '7 min',
    },
    3: {
      id: 3,
      title: 'Manipulación Segura de Medicamentos',
      excerpt: 'Conoce las mejores prácticas para almacenar y usar correctamente tus medicamentos.',
      content: 'El uso correcto de medicamentos es fundamental para tu salud.',
      fullContent: `
        <h2>Manipulación Segura de Medicamentos</h2>
        
        <p>El uso correcto de medicamentos es fundamental para tu salud. Aprende cómo almacenarlos adecuadamente, identificar fechas de vencimiento, y evitar errores comunes que pueden afectar tu tratamiento.</p>
        
        <h3>Almacenamiento correcto</h3>
        <ul>
          <li>Guarda los medicamentos en su envase original</li>
          <li>Mantén los medicamentos en un lugar fresco y seco</li>
          <li>Evita la luz directa del sol</li>
          <li>No guardes medicamentos en el baño (humedad)</li>
          <li>Mantén los medicamentos fuera del alcance de niños y mascotas</li>
        </ul>
        
        <h3>Identificar medicamentos vencidos</h3>
        <ul>
          <li>Revisa la fecha de vencimiento en el envase</li>
          <li>Observa cambios de color, olor o textura</li>
          <li>Si el medicamento se ve diferente, no lo uses</li>
          <li>Desecha los medicamentos vencidos correctamente</li>
        </ul>
        
        <h3>Errores comunes a evitar</h3>
        <ul>
          <li>No compartas medicamentos con otras personas</li>
          <li>No automedicarse sin consultar a un profesional</li>
          <li>No cambies la dosis sin indicación médica</li>
          <li>No mezcles medicamentos sin consultar</li>
          <li>No interrumpas el tratamiento sin avisar a tu médico</li>
        </ul>
        
        <h3>Cómo desechar medicamentos</h3>
        <p>Los medicamentos no deben tirarse a la basura o al inodoro. Muchas farmacias tienen programas de recolección de medicamentos. Consulta con tu farmacéutico sobre cómo desechar correctamente tus medicamentos.</p>
        
        <p>Recuerda: los medicamentos son herramientas poderosas para tu salud. Úsalos correctamente y siempre bajo supervisión médica.</p>
      `,
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663126905658/aEEywgfyW5tZZK7ehytBC7/blog-medication-safety-AzxbbXJrhGE7vehGFy5Aic.webp',
      category: 'Salud',
      author: 'Farmacéutica Laura García',
      date: '5 de Abril, 2024',
      readTime: '6 min',
    },
    4: {
      id: 4,
      title: 'Consejos para una Vida Saludable',
      excerpt: 'Descubre hábitos simples que pueden transformar tu salud y bienestar.',
      content: 'Una vida saludable no requiere cambios drásticos.',
      fullContent: `
        <h2>Consejos para una Vida Saludable</h2>
        
        <p>Una vida saludable no requiere cambios drásticos. Pequeñas acciones como ejercicio regular, alimentación balanceada, manejo del estrés y chequeos periódicos pueden hacer una gran diferencia en tu calidad de vida.</p>
        
        <h3>1. Ejercicio Regular</h3>
        <p>Realiza al menos 30 minutos de actividad física moderada la mayoría de los días de la semana. Puede ser caminar, nadar, bailar o cualquier actividad que disfrutes.</p>
        
        <h3>2. Alimentación Balanceada</h3>
        <ul>
          <li>Incluye frutas y verduras en cada comida</li>
          <li>Elige proteínas magras</li>
          <li>Reduce el consumo de sal y azúcar</li>
          <li>Bebe suficiente agua (8 vasos diarios)</li>
          <li>Evita alimentos ultraprocesados</li>
        </ul>
        
        <h3>3. Manejo del Estrés</h3>
        <ul>
          <li>Practica meditación o yoga</li>
          <li>Dedica tiempo a actividades que disfrutes</li>
          <li>Duerme 7-8 horas diarias</li>
          <li>Mantén conexiones sociales significativas</li>
          <li>Busca ayuda profesional si lo necesitas</li>
        </ul>
        
        <h3>4. Chequeos Periódicos</h3>
        <p>Realiza chequeos médicos regulares para detectar problemas de salud tempranamente. Esto incluye:</p>
        <ul>
          <li>Examen físico anual</li>
          <li>Pruebas de laboratorio</li>
          <li>Control de presión arterial</li>
          <li>Revisión dental</li>
          <li>Cuidado de la visión</li>
        </ul>
        
        <h3>5. Hábitos Saludables</h3>
        <ul>
          <li>Evita el tabaco</li>
          <li>Limita el consumo de alcohol</li>
          <li>Mantén una buena higiene personal</li>
          <li>Protégete del sol</li>
          <li>Mantén un peso saludable</li>
        </ul>
        
        <p>Recuerda que los cambios pequeños y consistentes son más efectivos que cambios drásticos. ¡Empieza hoy a cuidar tu salud!</p>
      `,
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663126905658/aEEywgfyW5tZZK7ehytBC7/blog-health-tips-UhToipqs4VGC5856nrE7ST.webp',
      category: 'Salud',
      author: 'Dr. Roberto Martínez',
      date: '1 de Abril, 2024',
      readTime: '8 min',
    },
  };

  const postId = params?.id ? parseInt(params.id) : null;
  const post = postId ? blogPosts[postId] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navigation />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Artículo no encontrado</h1>
            <p className="text-gray-600 mb-8">El artículo que buscas no existe.</p>
            <a
              href="/blog"
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver al Blog
            </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container max-w-4xl mx-auto">
            <span className="inline-block bg-blue-700 text-white text-sm font-bold px-3 py-1 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white">{post.title}</h1>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <section className="py-12 md:py-16">
        <div className="container max-w-4xl mx-auto px-4">
          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-5 h-5 text-green-600" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <User className="w-5 h-5 text-green-600" />
              <span>{post.author}</span>
            </div>
            <div className="text-gray-600">{post.readTime} de lectura</div>
            <button className="ml-auto flex items-center gap-2 text-blue-700 hover:text-blue-800 font-semibold">
              <Share2 className="w-5 h-5" />
              Compartir
            </button>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none mb-12">
            <div
              dangerouslySetInnerHTML={{
                __html: post.fullContent
                  .replace(/<h2>/g, '<h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">')
                  .replace(/<h3>/g, '<h3 class="text-2xl font-bold text-gray-900 mt-6 mb-3">')
                  .replace(/<p>/g, '<p class="text-gray-700 mb-4 leading-relaxed">')
                  .replace(/<ul>/g, '<ul class="list-disc list-inside mb-4 text-gray-700 space-y-2">')
                  .replace(/<li>/g, '<li class="ml-4">'),
              }}
            />
          </div>

          {/* Back Button */}
          <div className="pt-8 border-t border-gray-200">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-semibold py-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver al Blog
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-700 to-green-600">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Necesitas más información?
          </h2>
          <p className="text-blue-100 mb-8">
            Contacta con nuestros especialistas para resolver tus dudas
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-blue-700 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Contactar Ahora
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
