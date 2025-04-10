import { f as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_ChbleTAy.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_F1KjcpD0.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Jennifer & Alejandro | 404" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="h-screen relative flex items-center justify-center text-center"> <h1 class="text-4xl text-gray-700"> 404. Aqui no es mi niño...</h1> </div> ` })}`;
}, "/Users/alejandrofuentes/Documents/Proyectos/jenniferandalejandro/src/pages/404.astro", void 0);

const $$file = "/Users/alejandrofuentes/Documents/Proyectos/jenniferandalejandro/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
