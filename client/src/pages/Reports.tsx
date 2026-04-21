import { useState } from 'react';
import { Download, FileText } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface Report {
  id: number;
  title: string;
  description: string;
  date: string;
  url: string;
}

export default function Reports() {
  const [selectedYear, setSelectedYear] = useState(2024);
  const [showOtherReports, setShowOtherReports] = useState(false);

  const otherReports: Report[] = [
    {
      id: 101,
      title: 'Informe de Gestion 2024',
      description: 'Resumen ejecutivo de las actividades y logros del ano 2024',
      date: 'Diciembre 2024',
      url: '#',
    },
    {
      id: 102,
      title: 'Reporte de Auditorias Internas',
      description: 'Resultados de las auditorias internas realizadas durante el ano',
      date: 'Diciembre 2024',
      url: '#',
    },
    {
      id: 103,
      title: 'Informe de Cumplimiento Normativo',
      description: 'Verificacion del cumplimiento de normas y regulaciones vigentes',
      date: 'Diciembre 2024',
      url: '#',
    },
    {
      id: 104,
      title: 'Reporte de Sostenibilidad',
      description: 'Iniciativas de responsabilidad social y ambiental',
      date: 'Diciembre 2024',
      url: '#',
    },
  ];

  const reportsData: Record<number, Report[]> = {
    2024: [
      {
        id: 1,
        title: 'Estado de Situacion Financiera 2024',
        description: 'Balance general y estado financiero del ano 2024',
        date: 'Diciembre 2024',
        url: '#',
      },
      {
        id: 2,
        title: 'Estado Integral de Resultados 2024',
        description: 'Ingresos, gastos y resultados del ejercicio 2024',
        date: 'Diciembre 2024',
        url: '#',
      },
      {
        id: 3,
        title: 'Flujo de Efectivo 2024',
        description: 'Analisis de movimiento de efectivo durante 2024',
        date: 'Diciembre 2024',
        url: '#',
      },
    ],
    2023: [
      {
        id: 4,
        title: 'Estado de Situacion Financiera 2023',
        description: 'Balance general y estado financiero del ano 2023',
        date: 'Diciembre 2023',
        url: '#',
      },
      {
        id: 5,
        title: 'Estado Integral de Resultados 2023',
        description: 'Ingresos, gastos y resultados del ejercicio 2023',
        date: 'Diciembre 2023',
        url: '#',
      },
    ],
    2022: [
      {
        id: 6,
        title: 'Estado de Situacion Financiera 2022',
        description: 'Balance general y estado financiero del ano 2022',
        date: 'Diciembre 2022',
        url: '#',
      },
    ],
    2021: [
      {
        id: 7,
        title: 'Estado Integral De Resultados 2021',
        description: 'Ingresos, gastos y resultados del ejercicio 2021',
        date: 'Diciembre 2021',
        url: '#',
      },
    ],
  };

  const availableYears = Object.keys(reportsData)
    .map(Number)
    .sort((a, b) => b - a);

  const currentReports = reportsData[selectedYear] || [];

  const getButtonClass = (year: number) => {
    if (selectedYear === year) {
      return 'bg-blue-700 text-white shadow-lg scale-105';
    }
    return 'bg-gray-200 text-gray-700 hover:bg-gray-300';
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663126905658/aEEywgfyW5tZZK7ehytBC7/reports-financial-CRKm8KTS2SBNzQxLZzRpXZ.webp"
            alt="Financial reports"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 to-blue-700/70"></div>
        </div>

        <div className="relative container max-w-7xl mx-auto px-4 py-20 md:py-32">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Reportes Financieros
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Acceso a los reportes financieros auditados de DAMOSALUD LTDA
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Selecciona el Año</h2>
            <div className="flex flex-wrap gap-3">
              {availableYears.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${getButtonClass(year)}`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Reportes {selectedYear}
            </h2>

            {currentReports.length > 0 ? (
              <div className="grid md:grid-cols-3 gap-6">
                {currentReports.map((report) => (
                  <div
                    key={report.id}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-green-300 transition-all duration-300 group flex flex-col"
                  >
                    <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-green-50 transition-colors mb-4 w-fit">
                      <FileText className="w-6 h-6 text-blue-700" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {report.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">{report.description}</p>
                    <p className="text-sm text-gray-500 mb-6">{report.date}</p>
                    <a
                      href={report.url}
                      download
                      className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 w-full"
                    >
                      <Download className="w-5 h-5" />
                      <span>Descargar</span>
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No hay reportes disponibles para el ano {selectedYear}</p>
              </div>
            )}
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-bold text-blue-900 mb-2">Informacion Importante</h3>
            <p className="text-blue-800 text-sm">
              Los reportes financieros han sido auditados y verificados segun los estandares contables colombianos. Para mas informacion sobre nuestros reportes, contactanos a traves de nuestro correo institucional.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <button
              onClick={() => setShowOtherReports(!showOtherReports)}
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              <span>{showOtherReports ? 'Ocultar' : 'Ver'} Otros Reportes</span>
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${showOtherReports ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>

          {showOtherReports && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Otros Reportes</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {otherReports.map((report) => (
                  <div
                    key={report.id}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-green-300 transition-all duration-300 group flex flex-col"
                  >
                    <div className="p-3 bg-green-50 rounded-lg group-hover:bg-blue-50 transition-colors mb-4 w-fit">
                      <FileText className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {report.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">{report.description}</p>
                    <p className="text-sm text-gray-500 mb-6">{report.date}</p>
                    <a
                      href={report.url}
                      download
                      className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 w-full"
                    >
                      <Download className="w-5 h-5" />
                      <span>Descargar</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
