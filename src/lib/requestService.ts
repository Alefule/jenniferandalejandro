import { turso } from '@/lib/turso';
import { sendConfirmationMessage } from '@/lib/sendConfirmationMessage';
import { sendEmail } from '@/lib/resend';

export const doPost = async(email: string, comment: string, invitationId: string, guestsConfirmedRaw: any[], attendance: string, response: string) => {
    try {
        await turso.execute(
          `UPDATE invitations SET email = ?, comment = ?, sended = ? WHERE id = ?`,
          [email, comment, true, invitationId]
        );
    
        await turso.execute(
          `UPDATE guests SET status = 'declined' WHERE invitation_id = ?`,
          [invitationId]
        );
    
        if (guestsConfirmedRaw.length > 0 && response == 'confirm' ) {
          const guestIds = guestsConfirmedRaw.map((id: { toString: () => string; }) => parseInt(id.toString()));
          for (const guestId of guestIds) {
            await turso.execute(
              `UPDATE guests SET status = 'confirmed' WHERE id = ? AND invitation_id = ?`,
              [guestId, invitationId]
            );
          }
        } else if (attendance === 'yes') {
          const result = await turso.execute(
            `SELECT id, name FROM guests WHERE invitation_id = ?`,
            [invitationId]
          );
          const guestId = result.rows[0]?.id;
          if (guestId) {
            await turso.execute(
              `UPDATE guests SET status = 'confirmed' WHERE id = ?`,
              [guestId]
            );
          }
        }
    
        await sendConfirmationMessage(invitationId)
        await sendEmail('info@jenniferandalejandro.us', email, 'Confirmación de asistencia', response == 'confirm' || attendance === 'yes');
    
        return new Response('Confirmación guardada con éxito', { status: 200 });
    } catch (error) {
        console.error('Error al guardar confirmación', error);
        return new Response('Error interno del servidor', { status: 500 });
    }
}

export const doGet = async() => {
    try {
        const result = await turso.execute("SELECT * FROM guests");
        return new Response(JSON.stringify(result), { status: 200 });
    } catch (err) {
        return new Response(JSON.stringify({ error: String(err) }), { status: 500 });
    }
}

