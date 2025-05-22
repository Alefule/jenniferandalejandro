import React, { useState } from 'react';
import { Upload, Send, TestTube, Eye, X } from 'lucide-react';

const EmailPanel = () => {
  const [subject, setSubject] = useState('');
  const [emailContent, setEmailContent] = useState('');
  const [images, setImages] = useState([]);
  const [testEmail, setTestEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (images.length + files.length > 3) {
      alert('Máximo 3 imágenes permitidas');
      return;
    }

    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImages(prev => [...prev, {
          url: e.target.result,
          name: file.name
        }]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const generateEmailHTML = () => {
    const imageElements = images.map((img, index) => 
      `<div style="text-align: center; margin: 20px 0;">
        <img src="${img.url}" alt="Imagen ${index + 1}" style="max-width: 200px; border-radius: 12px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
      </div>`
    ).join('');

    return `
      <!DOCTYPE html>
      <html lang="es">
        <head>
          <meta charset="UTF-8">
          <title>Email</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap');
          </style>
        </head>
        <body style="font-family: 'Inter', sans-serif; background-color: #faf8f5; margin: 0; padding: 0; color: #444;">
          <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 16px; box-shadow: 0 8px 32px rgba(0,0,0,0.1); overflow: hidden;">
            <tr>
              <td style="padding: 40px;">
                ${imageElements}
                <div style="font-family: 'Inter', sans-serif; font-size: 16px; line-height: 1.6; color: #333; white-space: pre-line; text-align: center;">
                  ${emailContent}
                </div>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;
  };

  const sendTestEmail = async () => {
    if (!testEmail) {
      alert('Por favor, ingresa un email de prueba');
      return;
    }
    
    setIsLoading(true);
    try {
      const response = await fetch('/api/send-test-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: testEmail,
          subject,
          html: generateEmailHTML()
        })
      });
      
      if (response.ok) {
        alert('Email de prueba enviado con éxito');
      } else {
        throw new Error('Error al enviar email');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar email de prueba');
    } finally {
      setIsLoading(false);
    }
  };

  const sendBulkEmail = async () => {
    if (!emailContent || !subject) {
      alert('Por favor, completa el asunto y el contenido del email');
      return;
    }

    if (!confirm('¿Estás seguro de enviar este email a todos los usuarios?')) {
      return;
    }
    
    setIsLoading(true);
    try {
      const response = await fetch('/api/send-bulk-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject,
          html: generateEmailHTML()
        })
      });
      
      if (response.ok) {
        alert('Emails enviados con éxito a todos los usuarios');
      } else {
        throw new Error('Error al enviar emails');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar emails masivos');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#faf8f5', padding: '2rem 1rem' }}>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}>
          <h1 className="text-4xl font-bold mb-2 text-center" style={{ 
            fontFamily: 'Playfair Display, serif',
            color: '#364153',
            marginBottom: '0.5rem'
          }}>
            Panel de Gestión
          </h1>
          <p className="text-center text-gray-600 mb-8" style={{ 
            fontFamily: 'Inter, sans-serif',
            fontSize: '1.1rem',
            marginBottom: '2rem'
          }}>
            Crea y envía emails elegantes a tus invitados
          </p>
          
          {/* Asunto del Email */}
          <div className="mb-8">
            <label className="block text-sm font-medium mb-3" style={{ 
              color: '#364153',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.95rem'
            }}>
              Asunto del Email
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-200"
              style={{ 
                borderColor: '#e5e5e5',
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px'
              }}
              onFocus={(e) => e.target.style.borderColor = '#d4b78f'}
              onBlur={(e) => e.target.style.borderColor = '#e5e5e5'}
              placeholder="Ingresa el asunto del email..."
            />
          </div>

          {/* Contenido del Email */}
          <div className="mb-8">
            <label className="block text-sm font-medium mb-3" style={{ 
              color: '#364153',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.95rem'
            }}>
              Contenido del Email
            </label>
            <textarea
              value={emailContent}
              onChange={(e) => setEmailContent(e.target.value)}
              rows={8}
              className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-200 resize-none"
              style={{ 
                borderColor: '#e5e5e5',
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                lineHeight: '1.6'
              }}
              onFocus={(e) => e.target.style.borderColor = '#d4b78f'}
              onBlur={(e) => e.target.style.borderColor = '#e5e5e5'}
              placeholder="Escribe tu mensaje aquí..."
            />
          </div>

          {/* Subida de Imágenes */}
          <div className="mb-8">
            <label className="block text-sm font-medium mb-3" style={{ 
              color: '#364153',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.95rem'
            }}>
              Imágenes (máximo 3)
            </label>
            <div className="flex flex-wrap gap-4 mb-4">
              {images.map((img, index) => (
                <div key={index} className="relative">
                  <img
                    src={img.url}
                    alt={img.name}
                    className="w-32 h-32 object-cover rounded-xl border-2"
                    style={{ borderColor: '#d4b78f' }}
                  />
                  <button
                    onClick={() => removeImage(index)}
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white transition-all duration-200"
                    style={{ 
                      backgroundColor: '#f87171',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#ef4444'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#f87171'}
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
            
            {images.length < 3 && (
              <div className="border-2 border-dashed rounded-xl p-6 text-center transition-all duration-200 cursor-pointer"
                   style={{ borderColor: '#d4b78f' }}
                   onMouseEnter={(e) => {
                     e.target.style.borderColor = '#c4a77d';
                     e.target.style.backgroundColor = '#fefef9';
                   }}
                   onMouseLeave={(e) => {
                     e.target.style.borderColor = '#d4b78f';
                     e.target.style.backgroundColor = 'transparent';
                   }}>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="cursor-pointer">
                  <Upload className="mx-auto mb-2" size={32} style={{ color: '#d4b78f' }} />
                  <p style={{ 
                    color: '#6b7280',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: '500'
                  }}>
                    Haz click para subir imágenes
                  </p>
                </label>
              </div>
            )}
          </div>

          {/* Email de Prueba */}
          <div className="mb-8">
            <label className="block text-sm font-medium mb-3" style={{ 
              color: '#364153',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.95rem'
            }}>
              Email de Prueba
            </label>
            <div className="flex gap-3">
              <input
                type="email"
                value={testEmail}
                onChange={(e) => setTestEmail(e.target.value)}
                className="flex-1 px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-200"
                style={{ 
                  borderColor: '#e5e5e5',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px'
                }}
                onFocus={(e) => e.target.style.borderColor = '#d4b78f'}
                onBlur={(e) => e.target.style.borderColor = '#e5e5e5'}
                placeholder="tu-email@ejemplo.com"
              />
              <button
                onClick={sendTestEmail}
                disabled={isLoading}
                className="px-6 py-3 text-white rounded-lg font-medium transition-all duration-200 flex items-center gap-2"
                style={{ 
                  backgroundColor: '#6366f1',
                  minWidth: '140px',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#5b5cf3'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#6366f1'}
              >
                <TestTube size={18} />
                Enviar Prueba
              </button>
            </div>
          </div>

          {/* Botones de Acción */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="flex-1 px-6 py-3 text-white rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2"
              style={{ backgroundColor: '#64748b' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#5a6178'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#64748b'}
            >
              <Eye size={18} />
              {showPreview ? 'Ocultar Vista Previa' : 'Vista Previa'}
            </button>
            
            <button
              onClick={sendBulkEmail}
              disabled={isLoading}
              className="flex-1 px-6 py-3 text-white rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2"
              style={{ 
                backgroundColor: '#d4b78f',
                minHeight: '50px'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#c4a77d'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#d4b78f'}
            >
              <Send size={18} />
              {isLoading ? 'Enviando...' : 'Enviar a Todos'}
            </button>
          </div>

          {/* Vista Previa */}
          {showPreview && (
            <div className="mt-8 bg-gray-50 rounded-xl p-6" style={{ backgroundColor: '#fafaf9' }}>
              <h3 className="text-xl font-medium mb-4" style={{ 
                fontFamily: 'Playfair Display, serif',
                color: '#364153'
              }}>
                Vista Previa del Email
              </h3>
              <div className="bg-white rounded-lg p-6" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <h4 className="font-medium mb-4" style={{ 
                  color: '#364153',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '1.1rem'
                }}>
                  Asunto: {subject}
                </h4>
                <div 
                  dangerouslySetInnerHTML={{ __html: generateEmailHTML() }}
                  style={{ maxHeight: '400px', overflow: 'auto' }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailPanel;