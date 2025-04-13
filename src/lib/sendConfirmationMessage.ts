import { turso } from '@/lib/turso';
import { sendTelegramMessage } from '@/lib/telegram';

export async function sendConfirmationMessage(invitationId: string) {
  // 1. Obtener info de la invitación + invitados asociados
  const result = await turso.execute(
    `SELECT 
      i.code, 
      i.email, 
      i.comment, 
      g.name, 
      g.status
     FROM invitations i
     JOIN guests g ON i.id = g.invitation_id
     WHERE i.id = ?`,
    [invitationId]
  );

  if (result.rows.length === 0) return;

  const { code, email, comment } = result.rows[0];
  const guests = result.rows.map((row: any) => ({ name: row.name, status: row.status }));

  // 2. Clasificar invitados
  const confirmed = guests.filter((g: { status: string; }) => g.status === 'confirmed');
  const declined = guests.filter((g: { status: string; }) => g.status === 'declined');
  const pending = guests.filter((g: { status: string; }) => g.status === 'pending');

  const confirmedLine = confirmed.length
    ? confirmed.map((g: { name: any; }) => g.name).join(', ')
    : '—';

  const declinedLine = declined.length
    ? declined.map((g: { name: any; }) => g.name).join(', ')
    : '—';

  // 3. Obtener estado general del evento
  const totals = await turso.execute(`
    SELECT 
      COUNT(*) AS total,
      SUM(CASE WHEN status = 'confirmed' THEN 1 ELSE 0 END) AS confirmed,
      SUM(CASE WHEN status = 'pending' THEN 1 ELSE 0 END) AS pending,
      SUM(CASE WHEN status = 'declined' THEN 1 ELSE 0 END) AS declined
    FROM guests;
  `);

  const global = totals.rows[0];

  // 4. Construir mensaje final
  const message = `
💌 *Nueva confirmación de asistencia*

🔑 Invitación: *${code}*
✅ Asisten: ${confirmedLine}
❌ No asisten: ${declinedLine}

📧 Email: ${email || '—'}
📝 Comentario: ${comment || '—'}

*Asistentes confirmados:*
${confirmed.length ? confirmed.map((g: { name: any; }) => `✅ ${g.name}`).join('\n') : '—'}

*Rechazaron la invitación:*
${declined.length ? declined.map((g: { name: any; }) => `❌ ${g.name}`).join('\n') : '—'}

*Pendientes:*
${pending.length ? pending.map((g: { name: any; }) => `🕐 ${g.name}`).join('\n') : '—'}

📋 *Estado general:*
✅ Confirmados: ${global.confirmed}
🕐 Pendientes: ${global.pending}
❌ Rechazados: ${global.declined}
👥 Total: ${global.total}
  `;

  await sendTelegramMessage(message);
}
