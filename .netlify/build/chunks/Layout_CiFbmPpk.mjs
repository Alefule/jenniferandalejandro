import { e as createAstro, f as createComponent, h as addAttribute, j as renderScript, r as renderTemplate, m as maybeRenderHead, i as renderComponent, k as renderHead, l as renderSlot } from './astro/server_ChbleTAy.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */

const $$Astro$1 = createAstro("https://github.com/Alefule/jenniferandalejandro/");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/alejandrofuentes/Documents/Proyectos/jenniferandalejandro/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/alejandrofuentes/Documents/Proyectos/jenniferandalejandro/node_modules/astro/components/ClientRouter.astro", void 0);

const siteInfo = {
  title: "Jennifer & Alejandro",
  description: "Comparte la ilusión de nuestra boda."
};

const $$NavBar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "/Users/alejandrofuentes/Documents/Proyectos/jenniferandalejandro/src/components/shared/NavBar.astro?astro&type=script&index=0&lang.ts")} ${maybeRenderHead()}<nav class="p-4 shadow-md bg-white dark:bg-gray-800"> <div class="container mx-auto flex justify-between items-center"> <a href="/" class="font-['Cormorant_Garamond'] text-xl font-bold golden">J&A</a> <button class="button-menu-js p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 lg:hidden"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path> </svg> </button> <div class="hidden lg:flex space-x-4"> <a href="/" class="hover:text-gray-600 dark:hover:text-gray-300 golden">Inicio</a> <a href="/nosotros" class="hover:text-gray-600 dark:hover:text-gray-300 golden">Nosotros</a> <a href="/contacto" class="hover:text-gray-600 dark:hover:text-gray-300 golden">Contacto</a> </div> <!-- Botón de modo oscuro --> <button onclick="toggleDarkMode()" class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 hidden lg:block"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path> </svg> </button> </div> </nav> <div id="mobile-menu" class="lg:hidden fixed inset-0 bg-[rgba(0,0,0,0.36)] bg-opacity-50 z-50 hidden"> <div class="fixed inset-y-0 right-0 w-64 bg-white dark:bg-gray-800 shadow-lg p-4"> <button class="button-menu-js p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 mb-4"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> <div class="flex flex-col space-y-4"> <a href="#" class="hover:text-gray-600 dark:hover:text-gray-300">Inicio</a> <a href="#" class="hover:text-gray-600 dark:hover:text-gray-300">Acerca de</a> <a href="#" class="hover:text-gray-600 dark:hover:text-gray-300">Contacto</a> </div> <button onclick="toggleDarkMode()" class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 mt-4"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path> </svg> </button> </div> </div>`;
}, "/Users/alejandrofuentes/Documents/Proyectos/jenniferandalejandro/src/components/shared/NavBar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-white border-t border-gray-100 py-8"> <div class="max-w-7xl mx-auto px-4 text-center"> <p class="font-['Cormorant_Garamond'] text-xl text-gray-700 mb-2">© Jennifer & Alejandro</p> </div> </footer>`;
}, "/Users/alejandrofuentes/Documents/Proyectos/jenniferandalejandro/src/components/shared/Footer.astro", void 0);

const ico = "/_astro/favicon.Dvz5P94W.ico";

const cardImage = new Proxy({"src":"/_astro/jenniandale.DzDDXbbJ.webp","width":1920,"height":1280,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/alejandrofuentes/Documents/Proyectos/jenniferandalejandro/src/assets/jenniandale.webp";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://github.com/Alefule/jenniferandalejandro/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = siteInfo.title, description = siteInfo.description, image } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml"${addAttribute(ico, "href")}><!-- SEO --><meta name="description"${addAttribute(description, "content")}><!-- OG Metatags --><meta name="og:title"${addAttribute(title, "content")}><meta name="og:description"${addAttribute(description, "content")}><meta name="og:image"${addAttribute(cardImage.src, "content")}><link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Montserrat:wght@300;400;500&display=swap" rel="stylesheet"><title>${title}</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body> ${renderComponent($$result, "NavBar", $$NavBar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/shared/NavBar.astro", "client:component-export": "default" })} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/alejandrofuentes/Documents/Proyectos/jenniferandalejandro/src/layouts/Layout.astro", void 0);

export { $$Layout as $, cardImage as c };
