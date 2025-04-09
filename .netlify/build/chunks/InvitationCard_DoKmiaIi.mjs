import { e as createAstro, f as createComponent, j as renderScript, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_ChbleTAy.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { c as cardImage } from './Layout_CiFbmPpk.mjs';

const $$Astro = createAstro("https://github.com/Alefule/jenniferandalejandro/");
const $$InvitationCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$InvitationCard;
  const { code, guests, invitationId } = Astro2.props;
  const invitationTitle = code?.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ") || "Familia P\xE9rez";
  return renderTemplate`${renderScript($$result, "/Users/alejandrofuentes/Documents/Proyectos/jenniferandalejandro/src/components/InvitationCard.astro?astro&type=script&index=0&lang.ts")} ${maybeRenderHead()}<div class="mx-4"> <div class="m-auto mt-10 mb-10 max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden"> <div class="flex flex-col md:flex-row"> <div class="relative overflow-hidden h-[300px] md:h-auto md:w-1/2 lg:h-auto xl:h-auto"> <div class="absolute inset-0 bg-gradient-to-b from-white/30 to-white/30 z-10"></div> <img${addAttribute(cardImage.src, "src")} alt="Jennifer & Alejandro" class="absolute inset-0 w-full h-full object-cover"> <div class="absolute inset-0 z-20 flex flex-col items-center justify-center text-white"> <p class="text-lg md:text-xl mb-2 font-light">¡Nos casamos!</p> <h1 class="text-4xl md:text-6xl font-serif mb-6 text-center">Jennifer & Alejandro</h1> <p class="text-lg md:text-xl">06 de Septiembre de 2025</p> </div> </div> <div class="md:w-1/2 p-6 md:p-10"> <h1 class="text-4xl md:text-6xl font-serif mb-6 text-center">
¡Hola ${invitationTitle}!
</h1> <div class="text-2xl text-gray-700 font-medium text-center">Gracias por formar parte de nuestra vida. Nos encantaría compartir un dia importante para nosotros...</div> <form data-endpoint="/api/invitaciones/confirm" action="/api/invitaciones/confirm" method="POST" class="space-y-6"> <input type="hidden" name="invitationId"${addAttribute(invitationId, "value")}> <!-- Email --> <div> <label class="block text-sm font-medium text-gray-700 mb-2">Email para futuras noticias</label> <input name="email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d4b78f]" placeholder="tu@email.com"> </div> ${guests.length === 1 ? renderTemplate`<div> <label class="block text-sm font-medium text-gray-700 mb-2">
¿Asistirás a nuestra boda?
</label> <div class="space-y-2"> <label class="flex items-center"> <input type="radio" name="attendance" value="yes" class="form-radio h-4 w-4 text-[rgb(212,183,143)] focus:ring-[#d4b78f]"> <span class="ml-2 text-gray-700">Sí, asistiré</span> </label> <label class="flex items-center"> <input type="radio" name="attendance" value="no" class="form-radio h-4 w-4 text-[#d4b78f] focus:ring-[#d4b78f]"> <span class="ml-2 text-gray-700">No podré asistir</span> </label> </div> </div>` : renderTemplate`<div> <label class="block text-sm font-medium text-gray-700 mb-2">
Indica quiénes asistirán a nuestra boda:
</label> <div class="space-y-2"> ${guests.map((guest, index) => renderTemplate`<label class="flex items-center"> <input type="checkbox" name="guests[]"${addAttribute(guest.id, "value")} class="form-checkbox h-4 w-4 text-[rgb(212,183,143)] focus:ring-[#d4b78f]"> <span class="ml-2 text-gray-700">${guest.name}</span> </label>`)} </div> </div>`} <div> <label class="block text-sm font-medium text-gray-700 mb-2">Comentarios, dudas o sugerencias</label> <textarea name="comment" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d4b78f]" placeholder="Vegetariano, vegano, alergias, etc." rows="3"></textarea> </div> <button type="submit" class="w-full bg-[#d4b78f] hover:bg-[#c4a77f] text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4b78f]">
Confirmar asistencia
</button> </form> </div> </div> </div> </div>`;
}, "/Users/alejandrofuentes/Documents/Proyectos/jenniferandalejandro/src/components/InvitationCard.astro", void 0);

export { $$InvitationCard as $ };
