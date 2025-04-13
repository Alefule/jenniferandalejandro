const image = 'https://jenniferandalejandro.us/_astro/proposal_acepted.BFWDeVbu.webp';

const confirmedMessage = "¡Estamos muy felices de saber que asistirás a nuestro evento! Tu presencia hará que este momento sea aún más especial. Si tienes algún comentario o solicitud, no dudes en hacérnoslo saber."
const declinedMessage = "Lamentamos que no puedas asistir. Entendemos que a veces surgen compromisos, y esperamos poder compartir un momento contigo en el futuro. Si en algún momento cambia tu disponibilidad, ¡serás bienvenido!"
const callToAction = `<p>Haz clic para agregar la fecha a tu calendario:</p>
                      <a href="${'https://calendar.app.google/Cet2XRWgvWHPbGMx5'}" class="button"> Agregar al Calendario </a>`;

export const getEmailBody = (from: string, confirmed: boolean) => {
    return `
    
    <!DOCTYPE html>
    <html lang="es">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Confirmación de Invitación</title>
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            color: #777; /* Color gris claro para todo el texto */
            margin: 0;
            padding: 0;
        }
        h1 {
            color: #777; /* Mismo gris que el texto */
            font-size: 18px; /* Tamaño ligeramente mayor para el título */
            text-align: center;
        }
        p {
            font-size: 12px; /* Tamaño pequeño como el footer */
            line-height: 1.5;
            text-align: center;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            font-size: 12px; /* Tamaño pequeño para el botón */
            color: #fff;
            background-color: #d4b78f;
            text-decoration: none;
            border-radius: 4px;
            text-align: center;
        }
        .button-container {
            text-align: center; /* Centra el botón */
            margin: 20px 0;
        }
        .footer {
            text-align: center;
            font-size: 12px;
            color: #777; /* Mantiene el mismo gris */
            margin-top: 30px;
        }
    </style>
        </head>
        <body>

        <div class="container">
            <!-- Imagen tipo Ghibli de la propuesta -->
            <div class="image-container">
                <img src="${image}" alt="Jennifer & Alejandro" style="max-width: 100%; border-radius: 8px;">
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
