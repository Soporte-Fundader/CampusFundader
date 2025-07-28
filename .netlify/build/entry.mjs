import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_BeLAHVei.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image/index.astro.mjs');
const _page1 = () => import('./pages/cisco-academy.astro.mjs');
const _page2 = () => import('./pages/cisco-academy/_slugcisco_.astro.mjs');
const _page3 = () => import('./pages/cursos/_cursoslug_.astro.mjs');
const _page4 = () => import('./pages/cursos.astro.mjs');
const _page5 = () => import('./pages/programas/_slug_.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/cisco-academy.astro", _page1],
    ["src/pages/Cisco-Academy/[slugcisco].astro", _page2],
    ["src/pages/cursos/[cursoslug].astro", _page3],
    ["src/pages/cursos.astro", _page4],
    ["src/pages/programas/[slug].astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "5a08332f-5d73-4c67-806f-9b5ba1be5c18"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
