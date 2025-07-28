import { d as createComponent, m as maybeRenderHead, j as renderScript, r as renderTemplate, c as createAstro, f as addAttribute, i as renderComponent, n as renderHead, o as renderSlot } from './astro/server_CjHCW9Es.mjs';
import 'kleur/colors';
import 'clsx';
import * as contentful from 'contentful';
/* empty css                               */

const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button id="theme-toggle" class="cursor-pointer rounded-full p-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary-500"> <!-- Sun icon (light mode) --> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 hidden dark:block" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path> </svg> <!-- Moon icon (dark mode) --> <svg xmlns="http://www.w3.org/2000/svg" class=" h-5 w-5 block dark:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path> </svg> </button> ${renderScript($$result, "/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/components/ThemeToggle.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/components/ThemeToggle.astro", void 0);

const $$Astro$d = createAstro("https://fundader.org");
const $$UserIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$UserIcon;
  const { class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(` ${className}`, "class")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`;
}, "/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/Icons/UserIcon.astro", void 0);

const $$Astro$c = createAstro("https://fundader.org");
const $$MenuIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$MenuIcon;
  const { class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(` ${className}`, "class")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>`;
}, "/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/Icons/MenuIcon.astro", void 0);

const $$Astro$b = createAstro("https://fundader.org");
const $$XIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$XIcon;
  const { class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(` ${className}`, "class")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>`;
}, "/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/Icons/XIcon.astro", void 0);

const $$Astro$a = createAstro("https://fundader.org");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Header;
  const { currentPath = Astro2.url.pathname } = Astro2.props;
  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/cisco-academy", label: "Cisco Academy" },
    { href: "/cursos", label: "Cursos" }
  ];
  const isActive = (href) => currentPath === href;
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-50 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md shadow-sm border-b border-gray-200/20 dark:border-gray-700/20"> <div class="container mx-auto px-4 py-3"> <div class="flex items-center justify-between"> <!-- Logo Section --> <div class="flex items-center"> <a href="/" class="flex items-center gap-3 group" aria-label="Campus Fundader - Ir al inicio"> <img src="/hubcursos/LogoF_.svg" alt="Campus Fundader Logo" class="h-18 w-auto transition-transform group-hover:scale-105" loading="eager"> <!-- <span class="hidden sm:block text-xl font-heading font-bold text-primary-600 dark:text-white transition-colors">
            Campus Fundader
          </span> --> </a> </div> <!-- Desktop Navigation --> <nav class="hidden md:flex items-center" role="navigation" aria-label="Navegación principal"> <ul class="flex items-center space-x-8"> ${navItems.map(({ href, label }) => renderTemplate`<li> <a${addAttribute(href, "href")}${addAttribute(`relative px-3 py-2 text-sm font-medium transition-all duration-200 hover:text-secondary-500 dark:hover:text-secondary-400 ${isActive(href) ? "text-secondary-600 dark:text-secondary-400" : "text-gray-700 dark:text-gray-200"}`, "class")}${addAttribute(isActive(href) ? "page" : void 0, "aria-current")}> ${label} ${isActive(href) && renderTemplate`<span class="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary-500 rounded-full"></span>`} </a> </li>`)} </ul> </nav> <!-- Actions Section --> <div class="flex items-center gap-4"> <!-- Login Button --> <a href="https://campus.fundader.org/login/index.php?loginredirect=1" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-secondary-600 dark:text-secondary-400 hover:text-secondary-700 dark:hover:text-secondary-300 hover:bg-secondary-50 dark:hover:bg-secondary-900/20 rounded-lg transition-all duration-200" aria-label="Acceder al campus (se abre en nueva ventana)"> <span>Acceder</span> ${renderComponent($$result, "UserIcon", $$UserIcon, { "class": "h-4 w-4" })} </a> <!-- Theme Toggle --> ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, {})} <!-- Mobile Menu Button --> <button id="mobile-menu-toggle" class="md:hidden p-2 text-gray-700 dark:text-gray-200 hover:text-secondary-500 dark:hover:text-secondary-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200" aria-label="Abrir menú de navegación" aria-expanded="false" aria-controls="mobile-menu"> ${renderComponent($$result, "MenuIcon", $$MenuIcon, { "class": "h-5 w-5", "id": "menu-icon" })} ${renderComponent($$result, "XIcon", $$XIcon, { "class": "h-5 w-5 hidden", "id": "close-icon" })} </button> </div> </div> </div> <!-- Mobile Menu --> <div id="mobile-menu" class="hidden md:hidden bg-white dark:bg-slate-800 shadow-lg border-t border-gray-200 dark:border-gray-700" role="navigation" aria-label="Navegación móvil"> <div class="container mx-auto px-4 py-4"> <nav> <ul class="flex flex-col space-y-1"> ${navItems.map(({ href, label }) => renderTemplate`<li> <a${addAttribute(href, "href")}${addAttribute(`block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-700 ${isActive(href) ? "text-secondary-600 dark:text-secondary-400 bg-secondary-50 dark:bg-secondary-900/20" : "text-gray-700 dark:text-gray-200"}`, "class")}${addAttribute(isActive(href) ? "page" : void 0, "aria-current")}> ${label} </a> </li>`)} </ul> </nav> <!-- Mobile Login Button --> <div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"> <a href="https://campus.fundader.org/login/index.php?loginredirect=1" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-medium text-white bg-secondary-600 hover:bg-secondary-700 rounded-lg transition-all duration-200" aria-label="Acceder al campus (se abre en nueva ventana)"> <span>Acceder al Campus</span> ${renderComponent($$result, "User", $$UserIcon, { "class": "h-4 w-4" })} </a> </div> </div> </div> </header> ${renderScript($$result, "/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/components/Header.astro", void 0);

const contentfulClient = contentful.createClient({
  space: "zbfkl9m3pc8l",
  accessToken: "dgbLZ414Iq_LzoitNT52Hm6TOmVgK92alr7S-LaxpwI",
  host: "cdn.contentful.com"
});

const $$Astro$9 = createAstro("https://fundader.org");
const $$FacebookIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$FacebookIcon;
  const { class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(` ${className}`, "class")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>`;
}, "/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/Icons/FacebookIcon.astro", void 0);

const $$Astro$8 = createAstro("https://fundader.org");
const $$InstagramIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$InstagramIcon;
  const { class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(` ${className}`, "class")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>`;
}, "/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/Icons/InstagramIcon.astro", void 0);

const $$Astro$7 = createAstro("https://fundader.org");
const $$LinkedinIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$LinkedinIcon;
  const { class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(` ${className}`, "class")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>`;
}, "/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/Icons/LinkedinIcon.astro", void 0);

const $$Astro$6 = createAstro("https://fundader.org");
const $$MailIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$MailIcon;
  const { class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(` ${className}`, "class")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>`;
}, "/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/Icons/MailIcon.astro", void 0);

const $$Astro$5 = createAstro("https://fundader.org");
const $$PhoneCallIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$PhoneCallIcon;
  const { class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(` ${className}`, "class")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-call-icon lucide-phone-call"><path d="M13 2a9 9 0 0 1 9 9"></path><path d="M13 6a5 5 0 0 1 5 5"></path><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>`;
}, "/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/Icons/PhoneCallIcon.astro", void 0);

const $$Astro$4 = createAstro("https://fundader.org");
const $$MapPinIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$MapPinIcon;
  const { class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(` ${className}`, "class")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>`;
}, "/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/Icons/MapPinIcon.astro", void 0);

const $$Astro$3 = createAstro("https://fundader.org");
const $$HeartIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$HeartIcon;
  const { class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(` ${className}`, "class")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>`;
}, "/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/Icons/HeartIcon.astro", void 0);

const $$Astro$2 = createAstro("https://fundader.org");
const $$ArrowUpIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ArrowUpIcon;
  const { class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(` ${className}`, "class")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-icon lucide-arrow-up"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>`;
}, "/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/Icons/ArrowUpIcon.astro", void 0);

const $$Astro$1 = createAstro("https://fundader.org");
const $$CopyIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CopyIcon;
  const { class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(` ${className}`, "class")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy-icon lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>`;
}, "/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/Icons/CopyIcon.astro", void 0);

const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const { items: entries } = await contentfulClient.getEntries({
    content_type: "programa"
  });
  const { items: cursos } = await contentfulClient.getEntries({
    content_type: "cursos"
  });
  return renderTemplate`${maybeRenderHead()}<footer class="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"> <!-- Elementos decorativos de fondo --> <div class="absolute inset-0 opacity-5"> <div class="absolute top-0 left-0 w-96 h-96 bg-secondary-500 rounded-full blur-3xl"></div> <div class="absolute bottom-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div> </div> <!-- Contenido principal --> <div class="relative z-10"> <!-- Sección principal del footer --> <div class="container-responsive section-padding border-b border-gray-700/50"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"> <!-- Información de la empresa --> <div class="lg:col-span-1"> <div class="flex items-center gap-3 mb-6"> <img src="/hubcursos/LogoF_.svg" alt="Campus Fundader Logo" class="h-24 w-auto"> <!-- <h3 class="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Campus Fundader
            </h3> --> </div> <p class="text-gray-300 mb-6 leading-relaxed">
Plataforma educativa líder en el desarrollo de habilidades blandas y STEAM, 
            transformando vidas a través de la educación de calidad.
</p> <!-- Redes sociales mejoradas --> <div class="flex gap-4"> <a target="_blank" href="https://www.facebook.com/fundader/" class="group w-12 h-12 bg-gray-800/50 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25" aria-label="Síguenos en Facebook"> ${renderComponent($$result, "FacebookIcon", $$FacebookIcon, { "class": "h-5 w-5 text-gray-400 group-hover:text-white transition-colors" })} </a> <a target="_blank" href="https://www.instagram.com/fundaderarraijan/" class="group w-12 h-12 bg-gray-800/50 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25" aria-label="Síguenos en Instagram"> ${renderComponent($$result, "InstagramIcon", $$InstagramIcon, { "class": "h-5 w-5 text-gray-400 group-hover:text-white transition-colors" })} </a> <a target="_blank" href="https://pa.linkedin.com/company/fundader" class="group w-12 h-12 bg-gray-800/50 hover:bg-blue-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25" aria-label="Síguenos en LinkedIn"> ${renderComponent($$result, "LinkedinIcon", $$LinkedinIcon, { "class": "h-5 w-5 text-gray-400 group-hover:text-white transition-colors" })} </a> </div> </div> <!-- Programas --> <div> <h3 class="text-xl font-bold mb-6 text-white">Programas</h3> <ul class="space-y-3"> ${entries.slice(0, 6).map((p) => renderTemplate`<li> <a${addAttribute(`/programas/${p.fields.slug ?? "programa"}`, "href")} class="text-gray-300 hover:text-secondary-400 transition-colors duration-200 flex items-center group"> <span class="w-1 h-1 bg-secondary-500 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span> ${p.fields.title} </a> </li>`)} </ul> </div> <!-- Cursos Destacados --> <div> <h3 class="text-xl font-bold mb-6 text-white">Cursos Destacados</h3> <ul class="space-y-3"> ${cursos.filter((c) => c.fields.cursoDestacado).slice(0, 6).map((c) => renderTemplate`<li> <a${addAttribute(`/cursos/${c.fields.cursoslug ?? "cursos"}`, "href")} class="text-gray-300 hover:text-secondary-400 transition-colors duration-200 flex items-center group"> <span class="w-1 h-1 bg-secondary-500 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span> ${c.fields.cursosT} </a> </li>`)} </ul> </div> <!-- Contacto --> <div> <h3 class="text-xl font-bold mb-6 text-white">Contacto</h3> <ul class="space-y-4"> <li class="flex items-start group"> <div class="w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center mr-3 group-hover:bg-secondary-600/20 transition-colors"> ${renderComponent($$result, "MailIcon", $$MailIcon, { "class": "h-5 w-5 text-gray-400 group-hover:text-secondary-400 transition-colors" })} </div> <div class="flex-1"> <div class="flex items-center gap-2 cursor-pointer"> <span id="email-supp" class="text-gray-300 hover:text-secondary-400 cursor-pointer transition-colors duration-200 block">
soporte@fundader.org
</span> ${renderComponent($$result, "CopyIcon", $$CopyIcon, { "class": "size-4 text-gray-500 " })} </div> <span class="text-xs text-gray-500">Haz clic para copiar</span> </div> </li> <li class="flex items-start group"> <div class="w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center mr-3 group-hover:bg-secondary-600/20 transition-colors"> ${renderComponent($$result, "PhoneCallIcon", $$PhoneCallIcon, { "class": "h-5 w-5 text-gray-400 group-hover:text-secondary-400 transition-colors" })} </div> <div> <span class="text-gray-300">255-3924</span> <span class="text-xs text-gray-500 block">Lunes a Viernes, 8AM - 5PM</span> </div> </li> <li class="flex items-start group"> <div class="w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center mr-3 group-hover:bg-secondary-600/20 transition-colors"> ${renderComponent($$result, "MapPinIcon", $$MapPinIcon, { "class": "h-5 w-5 text-gray-400 group-hover:text-secondary-400 transition-colors" })} </div> <div> <span class="text-gray-300">El Tecal, Panamá Oeste</span> <span class="text-xs text-gray-500 block">Arraiján</span> </div> </li> </ul> </div> </div> </div> <!-- Sección inferior --> <div class="container-responsive py-8"> <div class="flex flex-col md:flex-row items-center justify-between gap-4"> <div class="flex items-center gap-2 text-gray-400"> <span>© ${(/* @__PURE__ */ new Date()).getFullYear()} FUNDADER. Hecho con</span> ${renderComponent($$result, "HeartIcon", $$HeartIcon, { "class": "h-4 w-4 text-red-500 animate-pulse" })} <span>en Panamá</span> </div> <!-- Enlaces legales --> <div class="flex items-center gap-6 text-sm"> <a href="/privacidad" class="text-gray-400 hover:text-white transition-colors">
Política de Privacidad
</a> <a href="/terminos" class="text-gray-400 hover:text-white transition-colors">
Términos de Uso
</a> </div> </div> </div> </div> <!-- Botón de scroll to top --> <button id="scroll-to-top" class="fixed bottom-8 right-8 w-12 h-12 bg-secondary-600 hover:bg-secondary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 invisible hover:scale-110 z-50" aria-label="Volver arriba"> ${renderComponent($$result, "ArrowUpIcon", $$ArrowUpIcon, { "class": "h-5 w-5 mx-auto" })} </button> </footer> ${renderScript($$result, "/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/components/Footer.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://fundader.org");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es" class="dark"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" href="/hubcursos/images/favicon-32x32.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@500;600;700&display=swap" rel="stylesheet">${renderHead()}</head> <body class="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col"> ${renderComponent($$result, "Header", $$Header, {})} <main class="flex-grow"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderScript($$result, "/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Users/fundader5/Desktop/ProyectoCampus/Hubcursos/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$CopyIcon as a, contentfulClient as c };
