import type { APIRoute } from 'astro';
import { doPost, doGet } from '@/lib/requestService';


export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();

  const email = data.get('email')?.toString() ?? '';
  const comment = data.get('comment')?.toString() ?? '';
  const invitationId = data.get('invitationId')?.toString();
  const guestsConfirmedRaw = data.getAll('guests[]'); 
  const attendance = data.get('attendance')?.toString() ?? '';

  
  if (!invitationId) {
    return new Response('Invitación no válida', { status: 400 });
  }

  return doPost(email, comment, invitationId, guestsConfirmedRaw, attendance);
  
}

export async function GET() {
  doGet()
}
