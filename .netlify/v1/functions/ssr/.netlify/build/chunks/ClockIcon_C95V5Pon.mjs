import { c as createAstro, d as createComponent, m as maybeRenderHead, f as addAttribute, r as renderTemplate } from './astro/server_CjHCW9Es.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://fundader.org");
const $$ClockIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ClockIcon;
  const { class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(` ${className}`, "class")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock-icon lucide-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`;
}, "/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/Icons/ClockIcon.astro", void 0);

export { $$ClockIcon as $ };
