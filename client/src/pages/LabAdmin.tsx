import { useState } from 'react';
import { Upload, FileText, User, Hash, Calendar, CheckCircle2, AlertCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

export default function LabAdmin() {
  const [patientId, setPatientId] = useState('');
  const [testName, setTestName] = useState('');
  const [testDate, setTestDate] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      toast.error('Por favor seleccione un archivo PDF');
      return;
    }

    setIsUploading(true);

    // Simulación de carga - En producción esto subiría a Supabase Storage
    setTimeout(() => {
      setIsUploading(false);
      toast.success('Resultado cargado exitosamente', {
        description: `Examen "${testName}" para el paciente ${patientId} ha sido registrado.`,
      });
      // Limpiar formulario
      setPatientId('');
      setTestName('');
      setTestDate('');
      setFile(null);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />

      <main className="flex-grow container max-w-2xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Panel Administrativo</h1>
          <p className="text-gray-600">Carga de Resultados de Laboratorio</p>
        </div>

        <Card className="shadow-lg border-t-4 border-t-green-600">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="text-green-600 w-6 h-6" />
              Cargar Nuevo Resultado
            </CardTitle>
            <CardDescription>
              Complete los datos del paciente y adjunte el archivo PDF del resultado.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleUpload} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <User className="w-4 h-4" /> Documento del Paciente
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
                    <Hash className="w-4 h-4" /> Nombre del Examen
                  </label>
                  <Input
                    placeholder="Ej: Cuadro Hemático"
                    value={testName}
                    onChange={(e) => setTestName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Fecha del Examen
                </label>
                <Input
                  type="date"
                  value={testDate}
                  onChange={(e) => setTestDate(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <FileText className="w-4 h-4" /> Archivo PDF del Resultado
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-500 transition-colors duration-200 bg-gray-50">
                  <input
                    type="file"
                    accept=".pdf"
                    className="hidden"
                    id="file-upload"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                  />
                  <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center gap-2">
                    {file ? (
                      <>
                        <CheckCircle2 className="w-10 h-10 text-green-500" />
                        <span className="text-sm font-medium text-gray-900">{file.name}</span>
                        <span className="text-xs text-gray-500">Haga clic para cambiar el archivo</span>
                      </>
                    ) : (
                      <>
                        <Upload className="w-10 h-10 text-gray-400" />
                        <span className="text-sm font-medium text-gray-600">Haga clic para adjuntar PDF</span>
                        <span className="text-xs text-gray-400">Tamaño máximo: 5MB</span>
                      </>
                    )}
                  </label>
                </div>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 flex gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-amber-800">
                  Al cargar este archivo, el paciente podrá consultarlo inmediatamente usando su número de documento y el código de acceso generado por el sistema.
                </p>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3"
                disabled={isUploading}
              >
                {isUploading ? 'Procesando Carga...' : 'Cargar y Notificar'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
