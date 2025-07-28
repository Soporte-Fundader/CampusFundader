import 'kleur/colors';
import { p as NOOP_MIDDLEWARE_HEADER, q as decodeKey } from './chunks/astro/server_CjHCW9Es.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
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

const manifest = deserializeManifest({"hrefRoot":"file:///Users/fundader5/Desktop/ProyectoCampus/Hubcursos/","cacheDir":"file:///Users/fundader5/Desktop/ProyectoCampus/Hubcursos/node_modules/.astro/","outDir":"file:///Users/fundader5/Desktop/ProyectoCampus/Hubcursos/dist/","srcDir":"file:///Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/","publicDir":"file:///Users/fundader5/Desktop/ProyectoCampus/Hubcursos/public/","buildClientDir":"file:///Users/fundader5/Desktop/ProyectoCampus/Hubcursos/dist/","buildServerDir":"file:///Users/fundader5/Desktop/ProyectoCampus/Hubcursos/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"always"}}},{"file":"cisco-academy/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/cisco-academy","isIndex":false,"type":"page","pattern":"^\\/cisco-academy\\/$","segments":[[{"content":"cisco-academy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cisco-academy.astro","pathname":"/cisco-academy","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image/","pattern":"^\\/_image\\/$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image/","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/hubcursos/_astro/_slugcisco_.BCXaCbLq.css"}],"routeData":{"route":"/cisco-academy/[slugcisco]","isIndex":false,"type":"page","pattern":"^\\/Cisco-Academy\\/([^/]+?)\\/$","segments":[[{"content":"Cisco-Academy","dynamic":false,"spread":false}],[{"content":"slugcisco","dynamic":true,"spread":false}]],"params":["slugcisco"],"component":"src/pages/Cisco-Academy/[slugcisco].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/hubcursos/_astro/_slugcisco_.BCXaCbLq.css"}],"routeData":{"route":"/cursos/[cursoslug]","isIndex":false,"type":"page","pattern":"^\\/cursos\\/([^/]+?)\\/$","segments":[[{"content":"cursos","dynamic":false,"spread":false}],[{"content":"cursoslug","dynamic":true,"spread":false}]],"params":["cursoslug"],"component":"src/pages/cursos/[cursoslug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/hubcursos/_astro/_slugcisco_.BCXaCbLq.css"},{"type":"inline","content":".line-clamp-2[data-astro-cid-p3nzpgb7]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.line-clamp-3[data-astro-cid-p3nzpgb7]{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}\n"}],"routeData":{"route":"/cursos","isIndex":false,"type":"page","pattern":"^\\/cursos\\/$","segments":[[{"content":"cursos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cursos.astro","pathname":"/cursos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/hubcursos/_astro/_slugcisco_.BCXaCbLq.css"}],"routeData":{"route":"/programas/[slug]","isIndex":false,"type":"page","pattern":"^\\/programas\\/([^/]+?)\\/$","segments":[[{"content":"programas","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/programas/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/hubcursos/_astro/_slugcisco_.BCXaCbLq.css"},{"type":"inline","content":"@keyframes scaleX{to{transform:scaleX(1)}}.line-clamp-3[data-astro-cid-hpsi4s5u]{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}.line-clamp-2[data-astro-cid-xgzpnzj7]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.line-clamp-3[data-astro-cid-xgzpnzj7]{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}#partners-track[data-astro-cid-yn77ussa]{scrollbar-width:none;-ms-overflow-style:none}#partners-track[data-astro-cid-yn77ussa]::-webkit-scrollbar{display:none}@media (prefers-reduced-motion: reduce){#partners-track[data-astro-cid-yn77ussa],.group[data-astro-cid-yn77ussa]{transition:none}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}}],"site":"https://fundader.org","base":"/hubcursos/","trailingSlash":"always","compressHTML":true,"componentMetadata":[["/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/pages/Cisco-Academy/[slugcisco].astro",{"propagation":"none","containsHead":true}],["/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/pages/cisco-academy.astro",{"propagation":"none","containsHead":true}],["/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/pages/cursos.astro",{"propagation":"none","containsHead":true}],["/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/pages/cursos/[cursoslug].astro",{"propagation":"none","containsHead":true}],["/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/pages/programas/[slug].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image/index.astro.mjs","\u0000@astro-page:src/pages/cisco-academy@_@astro":"pages/cisco-academy.astro.mjs","\u0000@astro-page:src/pages/Cisco-Academy/[slugcisco]@_@astro":"pages/cisco-academy/_slugcisco_.astro.mjs","\u0000@astro-page:src/pages/cursos/[cursoslug]@_@astro":"pages/cursos/_cursoslug_.astro.mjs","\u0000@astro-page:src/pages/cursos@_@astro":"pages/cursos.astro.mjs","\u0000@astro-page:src/pages/programas/[slug]@_@astro":"pages/programas/_slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BeLAHVei.mjs","/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/node_modules/unstorage/drivers/netlify-blobs.mjs":"chunks/netlify-blobs_DM36vZAS.mjs","/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/pages/cisco-academy.astro?astro&type=script&index=0&lang.ts":"_astro/cisco-academy.astro_astro_type_script_index_0_lang.CjlKnqou.js","/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/pages/cursos/[cursoslug].astro?astro&type=script&index=0&lang.ts":"_astro/_cursoslug_.astro_astro_type_script_index_0_lang.BPbD8Brs.js","/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/pages/programas/[slug].astro?astro&type=script&index=0&lang.ts":"_astro/_slug_.astro_astro_type_script_index_0_lang.BPbD8Brs.js","/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/pages/Cisco-Academy/[slugcisco].astro?astro&type=script&index=0&lang.ts":"_astro/_slugcisco_.astro_astro_type_script_index_0_lang.BPbD8Brs.js","/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/pages/cursos.astro?astro&type=script&index=0&lang.ts":"_astro/cursos.astro_astro_type_script_index_0_lang.DWUtZkRP.js","/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.B4xx8tjq.js","/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/components/Aliados.astro?astro&type=script&index=0&lang.ts":"_astro/Aliados.astro_astro_type_script_index_0_lang.B3j0Y8Fu.js","/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.BZb9zCh6.js","/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/components/Footer.astro?astro&type=script&index=0&lang.ts":"_astro/Footer.astro_astro_type_script_index_0_lang.DCwBz4rO.js","/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/components/ThemeToggle.astro?astro&type=script&index=0&lang.ts":"_astro/ThemeToggle.astro_astro_type_script_index_0_lang.MLcHmjns.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/pages/cisco-academy.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const c=document.getElementById(\"search\"),n=document.getElementById(\"category\"),s=document.getElementById(\"difficulty\"),i=document.querySelectorAll(\".course-card\");function t(){const l=c.value.toLowerCase(),o=n.value,a=s.value;i.forEach(e=>{const d=e.getAttribute(\"data-title\")||\"\",r=e.getAttribute(\"data-category\")||\"\",u=e.getAttribute(\"data-difficulty\")||\"\";d.includes(l)&&(!o||r===o)&&(!a||u===a)?e.style.display=\"block\":e.style.display=\"none\"})}c.addEventListener(\"input\",t),n.addEventListener(\"change\",t),s.addEventListener(\"change\",t)});"],["/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/pages/cursos/[cursoslug].astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const t=document.getElementById(\"email-fundader\"),e=t.textContent;t.addEventListener(\"click\",()=>{navigator.clipboard.writeText(t.textContent),t.textContent=\"¡Email Copiado!\",setTimeout(()=>{t.textContent=e},1500)})});"],["/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/pages/programas/[slug].astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const t=document.getElementById(\"email-fundader\"),e=t.textContent;t.addEventListener(\"click\",()=>{navigator.clipboard.writeText(t.textContent),t.textContent=\"¡Email Copiado!\",setTimeout(()=>{t.textContent=e},1500)})});"],["/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/pages/Cisco-Academy/[slugcisco].astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const t=document.getElementById(\"email-fundader\"),e=t.textContent;t.addEventListener(\"click\",()=>{navigator.clipboard.writeText(t.textContent),t.textContent=\"¡Email Copiado!\",setTimeout(()=>{t.textContent=e},1500)})});"],["/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/pages/cursos.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const c=document.getElementById(\"search\"),n=document.getElementById(\"category\"),o=document.getElementById(\"difficulty\"),m=document.querySelectorAll(\".course-card\"),i=document.getElementById(\"results-count\"),l=document.getElementById(\"no-results\"),d=document.getElementById(\"courses-grid\"),f=document.getElementById(\"clear-filters\"),g=document.getElementById(\"reset-search\");function t(){const r=c.value.toLowerCase().trim(),u=n.value,y=o.value;let s=0;m.forEach(e=>{const h=e.getAttribute(\"data-title\")||\"\",E=e.getAttribute(\"data-category\")||\"\",v=e.getAttribute(\"data-difficulty\")||\"\";(!r||h.includes(r))&&(!u||E===u)&&(!y||v===y)?(e.style.display=\"block\",s++):e.style.display=\"none\"}),i&&(i.textContent=`Mostrando ${s} curso${s!==1?\"s\":\"\"}`),l&&d&&(s===0?(l.classList.remove(\"hidden\"),d.style.display=\"none\"):(l.classList.add(\"hidden\"),d.style.display=\"grid\"))}function a(){c.value=\"\",n.value=\"\",o.value=\"\",t()}c.addEventListener(\"input\",t),n.addEventListener(\"change\",t),o.addEventListener(\"change\",t),f?.addEventListener(\"click\",a),g?.addEventListener(\"click\",a)});"],["/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","localStorage.getItem(\"theme\")===\"dark\"||!localStorage.getItem(\"theme\")&&window.matchMedia(\"(prefers-color-scheme: dark)\").matches?document.documentElement.classList.add(\"dark\"):document.documentElement.classList.remove(\"dark\");"],["/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/components/Aliados.astro?astro&type=script&index=0&lang.ts","class a{track;prevBtn;nextBtn;playPauseBtn;indicators;pauseIcon;playIcon;playPauseText;currentSlide=0;totalSlides;slideWidth=200;isPlaying=!0;autoplayInterval=null;touchStartX=0;touchEndX=0;constructor(){this.track=document.getElementById(\"partners-track\"),this.prevBtn=document.getElementById(\"prev-btn\"),this.nextBtn=document.getElementById(\"next-btn\"),this.playPauseBtn=document.getElementById(\"play-pause-btn\"),this.indicators=document.querySelectorAll(\"[data-slide]\"),this.pauseIcon=document.getElementById(\"pause-icon\"),this.playIcon=document.getElementById(\"play-icon\"),this.playPauseText=document.getElementById(\"play-pause-text\"),this.totalSlides=this.indicators.length,this.init()}init(){this.track&&(this.prevBtn?.addEventListener(\"click\",()=>this.prevSlide()),this.nextBtn?.addEventListener(\"click\",()=>this.nextSlide()),this.playPauseBtn?.addEventListener(\"click\",()=>this.toggleAutoplay()),this.indicators.forEach((t,e)=>{t.addEventListener(\"click\",()=>this.goToSlide(e))}),this.track.addEventListener(\"touchstart\",t=>this.handleTouchStart(t),{passive:!0}),this.track.addEventListener(\"touchend\",t=>this.handleTouchEnd(t),{passive:!0}),this.track.addEventListener(\"mousedown\",t=>this.handleMouseDown(t)),this.track.addEventListener(\"mouseenter\",()=>this.pauseAutoplay()),this.track.addEventListener(\"mouseleave\",()=>this.resumeAutoplay()),window.addEventListener(\"resize\",()=>this.handleResize()),this.startAutoplay(),this.updateSlideWidth())}updateSlideWidth(){const t=this.track?.parentElement;if(!t)return;const e=t.offsetWidth,s=Math.floor(e/200);this.slideWidth=e/Math.max(s,1)}goToSlide(t){this.currentSlide=t,this.updateCarousel()}nextSlide(){this.currentSlide=(this.currentSlide+1)%this.totalSlides,this.updateCarousel()}prevSlide(){this.currentSlide=(this.currentSlide-1+this.totalSlides)%this.totalSlides,this.updateCarousel()}updateCarousel(){if(!this.track)return;const t=-this.currentSlide*(this.slideWidth+32);this.track.style.transform=`translateX(${t}px)`,this.updateIndicators()}updateIndicators(){this.indicators.forEach((t,e)=>{e===this.currentSlide?t.className=\"w-8 h-2 rounded-full bg-primary-600 transition-all duration-300\":t.className=\"w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 hover:bg-primary-400 transition-all duration-300\"})}startAutoplay(){this.autoplayInterval=window.setInterval(()=>{this.isPlaying&&this.nextSlide()},4e3)}stopAutoplay(){this.autoplayInterval&&(clearInterval(this.autoplayInterval),this.autoplayInterval=null)}toggleAutoplay(){this.isPlaying=!this.isPlaying,this.isPlaying?(this.pauseIcon?.classList.remove(\"hidden\"),this.playIcon?.classList.add(\"hidden\"),this.playPauseText&&(this.playPauseText.textContent=\"Pausar\")):(this.pauseIcon?.classList.add(\"hidden\"),this.playIcon?.classList.remove(\"hidden\"),this.playPauseText&&(this.playPauseText.textContent=\"Reproducir\"))}pauseAutoplay(){this.isPlaying=!1}resumeAutoplay(){this.isPlaying=!0}handleTouchStart(t){this.touchStartX=t.changedTouches[0].screenX}handleTouchEnd(t){this.touchEndX=t.changedTouches[0].screenX,this.handleSwipe()}handleMouseDown(t){this.touchStartX=t.screenX;const e=i=>{this.touchEndX=i.screenX},s=()=>{this.handleSwipe(),document.removeEventListener(\"mousemove\",e),document.removeEventListener(\"mouseup\",s)};document.addEventListener(\"mousemove\",e),document.addEventListener(\"mouseup\",s)}handleSwipe(){const e=this.touchStartX-this.touchEndX;Math.abs(e)>50&&(e>0?this.nextSlide():this.prevSlide())}handleResize(){this.updateSlideWidth(),this.updateCarousel()}}document.addEventListener(\"DOMContentLoaded\",()=>{new a});"],["/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/components/Header.astro?astro&type=script&index=0&lang.ts","class t{toggle;menu;menuIcon;closeIcon;isOpen=!1;constructor(){this.toggle=document.getElementById(\"mobile-menu-toggle\"),this.menu=document.getElementById(\"mobile-menu\"),this.menuIcon=document.getElementById(\"menu-icon\"),this.closeIcon=document.getElementById(\"close-icon\"),this.init()}init(){this.toggle&&this.menu&&(this.toggle.addEventListener(\"click\",()=>this.toggleMobileMenu()),document.addEventListener(\"click\",e=>{this.isOpen&&!this.toggle?.contains(e.target)&&!this.menu?.contains(e.target)&&this.closeMobileMenu()}),document.addEventListener(\"keydown\",e=>{e.key===\"Escape\"&&this.isOpen&&this.closeMobileMenu()}),window.addEventListener(\"resize\",()=>{window.innerWidth>=768&&this.isOpen&&this.closeMobileMenu()}))}toggleMobileMenu(){this.isOpen?this.closeMobileMenu():this.openMobileMenu()}openMobileMenu(){this.menu?.classList.remove(\"hidden\"),this.menuIcon?.classList.add(\"hidden\"),this.closeIcon?.classList.remove(\"hidden\"),this.toggle?.setAttribute(\"aria-expanded\",\"true\"),this.toggle?.setAttribute(\"aria-label\",\"Cerrar menú de navegación\"),this.isOpen=!0,document.body.style.overflow=\"hidden\"}closeMobileMenu(){this.menu?.classList.add(\"hidden\"),this.menuIcon?.classList.remove(\"hidden\"),this.closeIcon?.classList.add(\"hidden\"),this.toggle?.setAttribute(\"aria-expanded\",\"false\"),this.toggle?.setAttribute(\"aria-label\",\"Abrir menú de navegación\"),this.isOpen=!1,document.body.style.overflow=\"\"}}document.addEventListener(\"DOMContentLoaded\",()=>{new t});"],["/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/components/Footer.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const t=document.getElementById(\"email-supp\"),o=t?.textContent;function i(){!t||!o||navigator.clipboard.writeText(o).then(()=>{t.textContent=\"¡Email Copiado!\",setTimeout(()=>{t.textContent=o},1500)}).catch(()=>{window.prompt(\"Copia el correo:\",o)})}t?.addEventListener(\"click\",i),t?.addEventListener(\"touchend\",i);const e=document.getElementById(\"scroll-to-top\");function n(){window.scrollY>300?(e?.classList.remove(\"opacity-0\",\"invisible\"),e?.classList.add(\"opacity-100\",\"visible\")):(e?.classList.add(\"opacity-0\",\"invisible\"),e?.classList.remove(\"opacity-100\",\"visible\"))}function l(){window.scrollTo({top:0,behavior:\"smooth\"})}window.addEventListener(\"scroll\",n),e?.addEventListener(\"click\",l)});"],["/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/components/ThemeToggle.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"theme-toggle\");e?.addEventListener(\"click\",()=>{document.documentElement.classList.contains(\"dark\")?(document.documentElement.classList.remove(\"dark\"),localStorage.setItem(\"theme\",\"light\")):(document.documentElement.classList.add(\"dark\"),localStorage.setItem(\"theme\",\"dark\"))});"]],"assets":["/hubcursos/_astro/_slugcisco_.BCXaCbLq.css","/hubcursos/LogoF_.png","/hubcursos/LogoF_.svg","/hubcursos/images/favicon-32x32.png","/hubcursos/cisco-academy/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"nCAYa9s+5Gky+beT9wTvhQlLnRwdUhEVQ6ObrzuKF+g=","sessionConfig":{"driver":"netlify-blobs","options":{"name":"astro-sessions","consistency":"strong"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/netlify-blobs_DM36vZAS.mjs');

export { manifest };
