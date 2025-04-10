import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { n as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server_ChbleTAy.mjs';
import 'cookie';
import 'es-module-lexer';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/alejandrofuentes/Documents/Proyectos/jenniferandalejandro/","cacheDir":"file:///Users/alejandrofuentes/Documents/Proyectos/jenniferandalejandro/node_modules/.astro/","outDir":"file:///Users/alejandrofuentes/Documents/Proyectos/jenniferandalejandro/dist/","srcDir":"file:///Users/alejandrofuentes/Documents/Proyectos/jenniferandalejandro/src/","publicDir":"file:///Users/alejandrofuentes/Documents/Proyectos/jenniferandalejandro/public/","buildClientDir":"file:///Users/alejandrofuentes/Documents/Proyectos/jenniferandalejandro/dist/","buildServerDir":"file:///Users/alejandrofuentes/Documents/Proyectos/jenniferandalejandro/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DOEFChyK.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/invitaciones/confirm","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/invitaciones\\/confirm\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"invitaciones","dynamic":false,"spread":false}],[{"content":"confirm","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/invitaciones/confirm.ts","pathname":"/api/invitaciones/confirm","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DOEFChyK.css"}],"routeData":{"route":"/invitaciones/[code]","isIndex":false,"type":"page","pattern":"^\\/invitaciones\\/([^/]+?)\\/?$","segments":[[{"content":"invitaciones","dynamic":false,"spread":false}],[{"content":"code","dynamic":true,"spread":false}]],"params":["code"],"component":"src/pages/invitaciones/[code].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DOEFChyK.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://github.com/Alefule/jenniferandalejandro/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/alejandrofuentes/Documents/Proyectos/jenniferandalejandro/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/alejandrofuentes/Documents/Proyectos/jenniferandalejandro/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/alejandrofuentes/Documents/Proyectos/jenniferandalejandro/src/pages/invitaciones/[code].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/api/invitaciones/confirm@_@ts":"pages/api/invitaciones/confirm.astro.mjs","\u0000@astro-page:src/pages/invitaciones/[code]@_@astro":"pages/invitaciones/_code_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_B5OvyeIb.mjs","/Users/alejandrofuentes/Documents/Proyectos/jenniferandalejandro/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BPIYeHyH.mjs","/Users/alejandrofuentes/Documents/Proyectos/jenniferandalejandro/src/components/InvitationCard.astro?astro&type=script&index=0&lang.ts":"_astro/InvitationCard.astro_astro_type_script_index_0_lang.GIu3l5sL.js","/Users/alejandrofuentes/Documents/Proyectos/jenniferandalejandro/src/components/shared/NavBar.astro?astro&type=script&index=0&lang.ts":"_astro/NavBar.astro_astro_type_script_index_0_lang.BgGiWRcr.js","/Users/alejandrofuentes/Documents/Proyectos/jenniferandalejandro/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.CMTcOisY.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/alejandrofuentes/Documents/Proyectos/jenniferandalejandro/src/components/InvitationCard.astro?astro&type=script&index=0&lang.ts","const e=document.querySelector(\"form\");e?.addEventListener(\"submit\",async o=>{o.preventDefault();const t=new FormData(e);try{const r=await fetch(\"/api/invitaciones/confirm\",{method:\"POST\",body:t});if(r.ok){const a=await r.text();alert(\"🎉 Confirmación enviada con éxito\")}else console.error(\"Error en la respuesta\",r.status),alert(\"❌ Hubo un error al enviar tu confirmación\")}catch(r){console.error(\"Error al enviar la confirmación:\",r),alert(\"❌ Error de red o del servidor\")}});"],["/Users/alejandrofuentes/Documents/Proyectos/jenniferandalejandro/src/components/shared/NavBar.astro?astro&type=script&index=0&lang.ts","const n=()=>{document.querySelector(\"#mobile-menu\")?.classList.toggle(\"hidden\")},o=()=>{const e=document.querySelectorAll(\".button-menu-js\");e&&e.forEach(t=>t.addEventListener(\"click\",n))};o();"]],"assets":["/_astro/jenniandale.DzDDXbbJ.webp","/_astro/favicon.Dvz5P94W.ico","/_astro/index.DOEFChyK.css","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.CMTcOisY.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"nfDehZfkath3jq+EEoXC6HC5ScagbgH/nCib8TZTqhs="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
