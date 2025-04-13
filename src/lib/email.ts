const image = 'https://postimg.cc/Sjg9G0y4';

const confirmedMessage = "¡Estamos muy felices de saber que asistirás a nuestro evento! Tu presencia hará que este momento sea aún más especial. Si tienes algún comentario o solicitud, no dudes en hacérnoslo saber."
const declinedMessage = "Lamentamos que no puedas asistir. Entendemos que a veces surgen compromisos, y esperamos poder compartir un momento contigo en el futuro. Si en algún momento cambia tu disponibilidad, ¡serás bienvenido!"
const cta = `<div class="button-container"><a href="https://calendar.app.google/Cet2XRWgvWHPbGMx5" class="button"> Agregar al Calendario </a></div>`


export const getEmailBody = (from: string, confirmed: boolean) => {
    return `
  <!DOCTYPE html>
  <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Confirmación</title>
    </head>
    <body style="font-family: Arial, sans-serif; background-color: #f5f5f5; margin: 0; padding: 0; color: #444;">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px;">
        <tr>
          <td align="center">
            <img src="${image}" alt="Jennifer & Alejandro" style="max-width: 100%; border-radius: 8px;">
          </td>
        </tr>
        <tr>
          <td>
            <h1 style="text-align: center; color: #364153;">¡Gracias por tu respuesta a la invitación!</h1>
            <p style="font-size: 16px; line-height: 1.5;">
              ${confirmed ? confirmedMessage : declinedMessage}
            </p>
            ${
              confirmed
                ? `<div style="text-align: center; margin-top: 20px;">
                    <a href="https://calendar.app.google/Cet2XRWgvWHPbGMx5" style="display: inline-block; padding: 10px 20px; background-color: #d4b78f; color: #fff; text-decoration: none; border-radius: 4px;">
                      Agregar al Calendario
                    </a>
                  </div>`
                : ''
            }
            <div style="font-size: 12px; color: #777; text-align: center; margin-top: 30px;">
              <p>Si tienes alguna pregunta, no dudes en contactar al número de WhatsApp desde el que has recibido la invitación.</p>
              <p>¡Esperamos verte pronto!</p>
            </div>
          </td>
        </tr>
      </table>
    </body>
  </html>
    `;
  };