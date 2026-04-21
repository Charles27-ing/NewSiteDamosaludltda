import { Stethoscope, Heart, Users } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface TeamMember {
  id: number;
  name: string;
  specialty: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
}

export default function Team() {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Medicos Generales',
      specialty: 'Medicina General',
      description: 'Equipo de profesionales especializados en medicina general con amplia experiencia en diagnostico y tratamiento integral de pacientes.',
      icon: <Stethoscope className="w-8 h-8" />,
      image: 'https://public.boxcloud.com/api/2.0/internal_files/2193055869089/versions/2425104875489/representations/jpg_paged_2048x2048/content/1.jpg?access_token=1!lMiM_JownP_gBsvbejL6Rj68a0dpOYskJgolBVL-nzn8GI_CllXqQ5bIjIfSsq3gTb0xdl97w0TMqw8MpVFj3NMSIFuexWSmo1BLjsWsklXDUTfwBNyuO1aG8wCVlps7tpnqXiZKTmDmolYvw7NxdHgqv2J70jFnLDREZN3Tj67fxn8inQI_T5BKMnkyRPvOxcp3481VHix9a2eJ5_DKQQ1JKyolblsneeR6GEdCOjBrLGHfQ8cuRsCvP_YeBtJYsNeqyA3Nw_SLBXL1UggiuIxRbCCAGxQ-K3VUNTuEZ2hXFyzYIemJabsmlB2G6QBnc4gHvhSF0vNLgE7rD8J_1FGOj0NkurSm5Ox51l7Zdt0mPa5N3YjNtY_fJADf7qeq488QBoXn5Of31MaLYEj2CEfTQ5GZBAQCfEkSkcVmz6tSy0-heQEgYCdH9OaQg-9c684ufiTrNU7V5aBQCWwAEWyUkTK0uHc8gln9QxRd6mJ2jxorxvfYQsDdQvGTVeHzSSAOXjMVtxgj8Ljr_Hcpu2hlFQ7YfhCBM5QbXVya-iw2HM4g56LmUYzyBMM3NB1pivkCidJCbznRW6vJuwSJh1g80CPEQ_SUIFQNOUd2ro49fxM_pRV7cjB09ZLiq-lv0MFybzufPLH6CSBMeK0esDUxcfMncgbqJLgaBAvkprc7W2n91AgS_xow9OANj9zQkE64Gd-qZLuZuomHchM_rplMNt3zLmC5UBwmRd05SJ4yK1wpFx30EY4UTRorWo3VXWFSH7b9xVoOO_h2EaM_-nKwI_Rdp66p-g..&box_client_name=box-content-preview&box_client_version=3.26.0',
    },
    {
      id: 2,
      name: 'Enfermeras',
      specialty: 'Enfermeria',
      description: 'Personal de enfermeria altamente capacitado para brindar cuidados de calidad y atension personalizada a nuestros pacientes.',
      icon: <Heart className="w-8 h-8" />,
      image: 'https://via.placeholder.com/300x350?text=Enfermera',
    },
    {
      id: 3,
      name: 'Bacteriologas',
      specialty: 'Laboratorio Clinico',
      description: 'Profesionales especializados en analisis clinicos y diagnostico de laboratorio con tecnologia de punta.',
      icon: <Users className="w-8 h-8" />,
      image: 'https://via.placeholder.com/300x350?text=Bacteriologa',
    },
    {
      id: 4,
      name: 'Odontologo',
      specialty: 'Odontologia',
      description: 'Especialista en salud bucal con experiencia en tratamientos dentales integrales para toda la familia.',
      icon: <Stethoscope className="w-8 h-8" />,
      image: 'https://via.placeholder.com/300x350?text=Odontologo',
    },
    {
      id: 5,
      name: 'Regente de Farmacia',
      specialty: 'Farmacia',
      description: 'Profesional responsable de la dispensacion de medicamentos y asesoramiento farmaceutico a nuestros pacientes.',
      icon: <Heart className="w-8 h-8" />,
      image: 'https://public.boxcloud.com/api/2.0/internal_files/2193046612657/versions/2425096166257/representations/jpg_paged_2048x2048/content/1.jpg?access_token=1!CVscfiPqwlLFc8SPHNjoZlYNA9szM9bbO4yPkiTh7hRbDGk01pxI1lG-mhuPx-8mLTyswKkJbKt8zqeh7m8Htboq6cX3nuHAxbqDEcJ4MA3vrmshecqaRDdl7zyr1ae9UT0VQOgXRRNV34PvPHqHlLs6TgkspT0Sd-LgpV7X546yiIhAcAXk2vv09W83hmm1Ko6OsRrvCXVhVFf6SHXTK3QG_2FmLhmD7WgKb8KA9CQhT9pDus-9vuCKiGzn2auDeGuj8dbQhuQ5-AnyE9hSnhUAjWf5LEU7I3pdkYiRAUIkosiw8pPTKH38K76TsPRkDJAAFDDlUtBMl4-nT5nGsZ66yQ-9VDbFmc_fLu02qGKcHDTEu_dP7d7uWQNuT3WvExNZGTTtGcjNag6L4FKt0rWp5ihBn9C3xB1SPNxUIauwdYX-Vb7QgWRhZyGj-2X4cuYp9FrVYCNxht9DeXLg5rrVSk4bdlIbc0t8bH6YoKM_gEe13sMcIdW6KqY41Dqhb4dylA02pXrgJ51z5zrGHAA4O5xrcsY7yVwtu2lTnixnBv9G26PNpTrAUEurUTRYqikihgU-Yr_EfQI8uGv3u-exBJoRSPgKMwtHlpi8L-gAADAKt6Y5R6Us--6jm1LFiXESck2UA6UMTer6dD12zLsH7lEmyLcjfSaPEgzp19pyakOyXocQfJAo3YfzGB75-QDRzX8FGRlvNvmBM5r3QhtmAkVWW9fNgjy6LiYKcattsiq5HOW7xXRZhYrnzqsEIk0lI02Je23Vf4YOYs_6vXgwYVRFDU6wuQ..&box_client_name=box-content-preview&box_client_version=3.26.0',
    },
    {
      id: 6,
      name: 'Auxiliares de Enfermeria',
      specialty: 'Apoyo Clinico',
      description: 'Equipo de apoyo capacitado para asistir en procedimientos clinicos y brindar comodidad a los pacientes.',
      icon: <Users className="w-8 h-8" />,
      image: 'https://via.placeholder.com/300x350?text=Auxiliar',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663126905658/aEEywgfyW5tZZK7ehytBC7/team-doctors-Cv2GuSCHF5bAGu3Uqh7zKM.webp"
            alt="Medical team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 to-blue-700/70"></div>
        </div>

        <div className="relative container max-w-7xl mx-auto px-4 py-20 md:py-32">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestro Equipo de Trabajo
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Profesionales comprometidos con tu salud y bienestar
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Talento Humano
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Contamos con un equipo multidisciplinario de profesionales de la salud comprometidos con la excelencia y la calidad en la atencion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl hover:border-green-300 transition-all duration-300 group"
              >
                {/* Image Section */}
                <div className="relative h-64 bg-gray-200 overflow-hidden">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-green-100">
                      <div className="text-blue-700 text-center">
                        <div className="text-4xl mb-2">{member.icon}</div>
                        <p className="text-xs text-gray-600">Agregar imagen</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>

                  <p className="text-green-600 font-semibold text-sm mb-4">
                    {member.specialty}
                  </p>

                  <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                    {member.description}
                  </p>

                  <div className="pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                      Disponible para consultas y procedimientos especializados
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-700 mb-2">20+</div>
              <p className="text-gray-600">Profesionales Especializados</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
              <p className="text-gray-600">Anos de Experiencia</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-700 mb-2">500+</div>
              <p className="text-gray-600">Pacientes Atendidos</p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Nota sobre las Imágenes
            </h3>
            <p className="text-gray-600 mb-4">
              Las imágenes de los miembros del equipo están configuradas con placeholders. Para reemplazarlas con tus propias imágenes, actualiza los URLs en el campo "image" de cada miembro del equipo en el código.
            </p>
            <p className="text-gray-600">
              Puedes usar URLs de tus imágenes alojadas en tu servidor o en servicios como Cloudinary, AWS S3, etc.
            </p>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}
