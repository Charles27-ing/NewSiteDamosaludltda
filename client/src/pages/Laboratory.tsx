import { useState } from 'react';
import { Search, Download, FileText, Lock, User, Calendar, ShieldCheck } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface LabResult {
  id: string;
  patientId: string;
  testName: string;
  date: string;
  fileUrl: string;
}

export default function Laboratory() {
  const [patientId, setPatientId] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<LabResult[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    setError(null);

    // Simulación de búsqueda - En producción esto consultaría a Supabase/Backend
    setTimeout(() => {
      if (patientId === '12345' && accessCode === '2024') {
        setResults([
          {
            id: '1',
            patientId: '12345',
            testName: 'Cuadro Hemático Completo',
            date: '2024-04-15',
            fileUrl: '#',
          },
          {
            id: '2',
            patientId: '12345',
            testName: 'Perfil Lipídico',
            date: '2024-04-15',
            fileUrl: '#',
          },
          {
            id: '3',
            patientId: '12345',
            testName: 'Glicemia Pre y Post',
            date: '2024-03-10',
            fileUrl: '#',
          },
        ]);
      } else {
        setError('No se encontraron resultados para los datos ingresados. Verifique su documento y código de acceso.');
        setResults(null);
      }
      setIsSearching(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />

      <main className="flex-grow container max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Portal de Resultados de Laboratorio
          </h1>
          <p className="text-gray-600">
            Consulte y descargue sus resultados de exámenes desde la comodidad de su hogar.
          </p>
        </div>

        {!results ? (
          <Card className="max-w-md mx-auto shadow-lg border-t-4 border-t-blue-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldCheck className="text-blue-600 w-6 h-6" />
                Acceso Seguro
              </CardTitle>
              <CardDescription>
                Ingrese sus datos para consultar sus exámenes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSearch} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <User className="w-4 h-4" /> Número de Documento
                  </label>
                  <Input
                    placeholder="Ej: 12345678"
                    value={patientId}
                    onChange={(e) => setPatientId(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Lock className="w-4 h-4" /> Código de Acceso
                  </label>
                  <Input
                    type="password"
                    placeholder="Código entregado en el laboratorio"
                    value={accessCode}
                    onChange={(e) => setAccessCode(e.target.value)}
                    required
                  />
                  <p className="text-xs text-gray-500 italic">
                    * El código se encuentra en su recibo de pago o atención.
                  </p>
                </div>
                {error && (
                  <div className="p-3 bg-red-50 text-red-700 text-sm rounded-md border border-red-100">
                    {error}
                  </div>
                )}
                <Button 
                  type="submit" 
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3"
                  disabled={isSearching}
                >
                  {isSearching ? 'Buscando...' : 'Consultar Resultados'}
                </Button>
              </form>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div>
                <p className="text-sm text-gray-500">Paciente:</p>
                <p className="font-bold text-gray-900">Documento: {patientId}</p>
              </div>
              <Button 
                variant="outline" 
                onClick={() => setResults(null)}
                className="text-blue-700 border-blue-200 hover:bg-blue-50"
              >
                Nueva Consulta
              </Button>
            </div>

            <div className="grid gap-4">
              {results.map((result) => (
                <Card key={result.id} className="hover:shadow-md transition-shadow duration-200 border-l-4 border-l-green-500">
                  <CardContent className="flex items-center justify-between p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-green-50 rounded-full">
                        <FileText className="text-green-600 w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{result.testName}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>Fecha: {result.date}</span>
                        </div>
                      </div>
                    </div>
                    <Button 
                      className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2"
                      onClick={() => window.open(result.fileUrl, '_blank')}
                    >
                      <Download className="w-4 h-4" />
                      Descargar PDF
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mt-8">
              <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" /> Información Importante
              </h4>
              <ul className="text-sm text-blue-800 space-y-2 list-disc list-inside">
                <li>Los resultados estarán disponibles por un periodo de 3 meses.</li>
                <li>Si tiene problemas para descargar su resultado, por favor comuníquese con nuestra línea de atención.</li>
                <li>Recuerde que estos resultados deben ser interpretados por su médico tratante.</li>
              </ul>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
