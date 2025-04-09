import { e as createAstro, f as createComponent, i as renderComponent, r as renderTemplate } from '../../chunks/astro/server_ChbleTAy.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_CiFbmPpk.mjs';
import { $ as $$InvitationCard } from '../../chunks/InvitationCard_DoKmiaIi.mjs';
import { t as turso } from '../../chunks/turso__IfyKM78.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://github.com/Alefule/jenniferandalejandro/");
const getStaticPaths = async () => {
  const result = await turso.execute(`SELECT id, code FROM invitations`);
  return result.rows.map((row) => ({
    params: { code: String(row.code) },
    props: {
      invitationId: Number(row.id),
      code: String(row.code)
    }
  }));
};
const $$code = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$code;
  const { invitationId, code } = Astro2.props;
  const guestsResult = await turso.execute(`
  SELECT id, name, status
  FROM guests 
  WHERE invitation_id = '${invitationId}'`);
  const guests = guestsResult.rows;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Jennifer & Alejandro | Invitaciones" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "InvitationCard", $$InvitationCard, { "client:load": true, "invitationId": invitationId, "code": code, "guests": guests, "client:component-hydration": "load", "client:component-path": "@/components/InvitationCard.astro", "client:component-export": "default" })} ` })}`;
}, "/Users/alejandrofuentes/Documents/Proyectos/jenniferandalejandro/src/pages/invitaciones/[code].astro", void 0);

const $$file = "/Users/alejandrofuentes/Documents/Proyectos/jenniferandalejandro/src/pages/invitaciones/[code].astro";
const $$url = "/invitaciones/[code]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$code,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
