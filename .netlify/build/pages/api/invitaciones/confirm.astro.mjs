import { t as turso } from '../../../chunks/turso__IfyKM78.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  const data = await request.formData();
  const email = data.get("email")?.toString() ?? "";
  const comment = data.get("comment")?.toString() ?? "";
  const invitationId = data.get("invitationId")?.toString();
  const guestsConfirmedRaw = data.getAll("guests[]");
  const attendance = data.get("attendance")?.toString();
  console.log("AQUI", data);
  if (!invitationId) {
    return new Response("Invitación no válida", { status: 400 });
  }
  try {
    await turso.execute(
      `UPDATE invitations SET email = ?, comment = ? WHERE id = ?`,
      [email, comment, invitationId]
    );
    await turso.execute(
      `UPDATE guests SET status = 'declined' WHERE invitation_id = ?`,
      [invitationId]
    );
    if (guestsConfirmedRaw.length > 0) {
      const guestIds = guestsConfirmedRaw.map((id) => parseInt(id.toString()));
      for (const guestId of guestIds) {
        await turso.execute(
          `UPDATE guests SET status = 'confirmed' WHERE id = ? AND invitation_id = ?`,
          [guestId, invitationId]
        );
      }
    } else if (attendance === "yes") {
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
    return new Response("Confirmación guardada con éxito", { status: 200 });
  } catch (error) {
    console.error("Error al guardar confirmación", error);
    return new Response("Error interno del servidor", { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
