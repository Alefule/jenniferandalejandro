import proposalAcepted from '@/assets/proposal_acepted.webp';

const confirmedMessage = "¡Estamos muy felices de saber que asistirás a nuestro evento! Tu presencia hará que este momento sea aún más especial. Si tienes algún comentario o solicitud, no dudes en hacérnoslo saber."
const declinedMessage = "Lamentamos que no puedas asistir. Entendemos que a veces surgen compromisos, y esperamos poder compartir un momento contigo en el futuro. Si en algún momento cambia tu disponibilidad, ¡serás bienvenido!"
const callToAction = `<p>Haz clic para agregar la fecha a tu calendario:</p>
                      <a href="${'https://calendar.app.google/Cet2XRWgvWHPbGMx5'}" class="button">Agregar al Calendario</a>`;

export const getEmailBody = (from: string, confirmed: boolean) => {
    return `
    
    <!DOCTYPE html>
    <html lang="es">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Confirmación de Invitación</title>
        <style>
            body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            color: #333;
            margin: 0;
            padding: 0;
            }
            .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            }
            h1 {
            color: #4CAF50;
            font-size: 24px;
            }
            p {
            font-size: 16px;
            line-height: 1.5;
            }
            .image-container {
            text-align: center;
            margin: 20px 0;
            }
            .button {
            display: inline-block;
            padding: 10px 20px;
            font-size: 16px;
            color: #fff;
            background-color: #4CAF50;
            text-decoration: none;
            border-radius: 4px;
            }
            .rejected {
            background-color: #f44336;
            }
            .footer {
            text-align: center;
            font-size: 12px;
            color: #777;
            margin-top: 30px;
            }
        </style>
        </head>
        <body>

        <div class="container">
            <!-- Imagen tipo Ghibli de la propuesta -->
            <div class="image-container">
                <img src="https://jenniferandalejandro.us/${proposalAcepted}" alt="Propuesta de Matrimonio" style="max-width: 100%; border-radius: 8px;">
            </div>

            <!-- Título y Mensaje -->
            <h1>¡Gracias por tu respuesta a la invitación!</h1>
            <p>

            ${confirmed ? confirmedMessage : declinedMessage}
  
            </p>

            <!-- Botones de acción -->
            
            ${confirmed && callToAction}

            <div class="footer">
                <p>Si tienes alguna pregunta, no dudes en contactar al numero de whatsapp desde el que has recibido la invitacion.</p>
                <p>¡Esperamos verte pronto!</p>
            </div>
        </div>

        </body>
    </html>
    
    `
}
