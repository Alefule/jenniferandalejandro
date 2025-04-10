import { f as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_ChbleTAy.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout, c as cardImage } from '../chunks/Layout_F1KjcpD0.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Jennifer & Alejandro | Home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative h-screen"> <div class="absolute inset-0"> <img${addAttribute(cardImage.src, "src")} alt="Wedding Background" class="w-full h-full object-cover filter"> </div> <div class="relative flex items-center justify-center h-full text-center text-white bg-gradient-to-b from-white/30 to-white/30 px-4"> <div> <h1 class="font-['Cormorant_Garamond'] text-6xl md:text-8xl font-light mb-4 bg-[#13151a59] golden">Jennifer & Alejandro</h1> <p class="text-xl md:text-4xl font-light tracking-wider mb-6 bg-[#13151a59] golden">¡Nos casamos!</p> <p class="text-lg md:text-3xl font-light bg-[#13151a59]">06 De Septiembre, 2025</p> <p class="text-lg md:text-xl font-light bg-[#13151a59] golden">Las Rosas, Galdar. Las Palmas de Gran Canaria.</p> </div> </div> </section> ` })}`;
}, "/Users/alejandrofuentes/Documents/Proyectos/jenniferandalejandro/src/pages/index.astro", void 0);

const $$file = "/Users/alejandrofuentes/Documents/Proyectos/jenniferandalejandro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
