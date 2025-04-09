import type { APIRoute } from 'astro';
import { turso } from '@/turso'

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();

  const email = data.get('email')?.toString() ?? '';
  const comment = data.get('comment')?.toString() ?? '';
  const invitationId = data.get('invitationId')?.toString();
  const guestsConfirmedRaw = data.getAll('guests[]'); // para múltiples invitados
  const attendance = data.get('attendance')?.toString(); // para un solo invitado

  console.log('AQUI',data)

  if (!invitationId) {
    return new Response('Invitación no válida', { status: 400 });
  }

  try {
    // 1. Guardar email y comentarios
    await turso.execute(
      `UPDATE invitations SET email = ?, comment = ? WHERE id = ?`,
      [email, comment, invitationId]
    );

    // 2. Declinar a todos por defecto (serán sobrescritos luego si aplican)
    await turso.execute(
      `UPDATE guests SET status = 'declined' WHERE invitation_id = ?`,
      [invitationId]
    );

    if (guestsConfirmedRaw.length > 0) {
      // Caso: varios invitados (checkbox)
      const guestIds = guestsConfirmedRaw.map((id) => parseInt(id.toString()));
      for (const guestId of guestIds) {
        await turso.execute(
          `UPDATE guests SET status = 'confirmed' WHERE id = ? AND invitation_id = ?`,
          [guestId, invitationId]
        );
      }
    } else if (attendance === 'yes') {
      // Caso: un solo invitado que confirmó
      const result = await turso.execute(
        `SELECT id FROM guests WHERE invitation_id = ?`,
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
    // Si attendance === "no", ya está en "declined" por default.

    return new Response('Confirmación guardada con éxito', { status: 200 });
  } catch (error) {
    console.error('Error al guardar confirmación', error);
    return new Response('Error interno del servidor', { status: 500 });
  }
}
