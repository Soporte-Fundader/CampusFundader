import { c as createAstro, d as createComponent, m as maybeRenderHead, f as addAttribute, r as renderTemplate } from './astro/server_CjHCW9Es.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro$1 = createAstro("https://fundader.org");
const $$AwardIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AwardIcon;
  const { class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(` ${className}`, "class")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award-icon lucide-award"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>`;
}, "/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/Icons/AwardIcon.astro", void 0);

const $$Astro = createAstro("https://fundader.org");
const $$SearchIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SearchIcon;
  const { class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(` ${className}`, "class")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>`;
}, "/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/Icons/SearchIcon.astro", void 0);

export { $$AwardIcon as $, $$SearchIcon as a };
