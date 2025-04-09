import { f as createComponent, i as renderComponent, r as renderTemplate } from '../chunks/astro/server_ChbleTAy.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_CiFbmPpk.mjs';
import { $ as $$InvitationCard } from '../chunks/InvitationCard_DoKmiaIi.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Jennifer & Alejandro | Invitaciones" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "InvitationCard", $$InvitationCard, { "code": null, "guests": null })} ` })}`;
}, "/Users/alejandrofuentes/Documents/Proyectos/jenniferandalejandro/src/pages/invitaciones/index.astro", void 0);

const $$file = "/Users/alejandrofuentes/Documents/Proyectos/jenniferandalejandro/src/pages/invitaciones/index.astro";
const $$url = "/invitaciones";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
