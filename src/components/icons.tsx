import type { SVGProps } from "react";

/* Ícones portados dos protótipos. Outline usa stroke="currentColor" (a cor
   final pode vir do CSS pai); sólidos usam fill="currentColor". Nenhum ícone
   fica invisível por falta de stroke/fill. */

type P = SVGProps<SVGSVGElement>;
const out = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7 } as const;
const sol = { viewBox: "0 0 24 24", fill: "currentColor" } as const;

export const IcEstrela = (p: P) => (
  <svg {...sol} {...p}><path d="M12 2l2.9 6.2 6.6.8-4.9 4.6 1.3 6.6L12 16.9 6.1 20.2l1.3-6.6L2.5 9l6.6-.8z" /></svg>
);
export const IcFolha = (p: P) => (
  <svg {...out} {...p}><path d="M11 3C7 3 4 6 4 10c0 5 4 9 9 11 0-7 4-11 8-13-3 0-5 .5-7 1.5" /></svg>
);
export const IcCheck = (p: P) => (
  <svg {...out} {...p}><path d="M5 12l5 5L20 7" /></svg>
);
export const IcSeta = (p: P) => (
  <svg {...out} strokeWidth={1.8} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const IcWpp = (p: P) => (
  <svg {...out} {...p}><path d="M21 11.5a8.5 8.5 0 0 1-12.5 7.5L3 21l2-5.5A8.5 8.5 0 1 1 21 11.5z" /></svg>
);
export const IcWppFab = (p: P) => (
  <svg viewBox="0 0 32 32" fill="currentColor" {...p}><path d="M16 3C9 3 3.5 8.5 3.5 15.5c0 2.4.7 4.7 1.9 6.7L3 29l7-1.8c1.9 1 4 1.6 6 1.6 7 0 12.5-5.5 12.5-12.5S23 3 16 3zm0 22.8c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-4.2 1.1 1.1-4.1-.3-.4a10.3 10.3 0 0 1-1.6-5.6c0-5.7 4.7-10.4 10.4-10.4S26.4 9.8 26.4 15.5 21.7 25.8 16 25.8zm5.7-7.8c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-.9 1.2-.3.2-.6.1c-1.7-.8-2.8-1.5-3.9-3.4-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5l-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.2 3.4 5.4 4.7 2 .9 2.8.9 3.8.8.6-.1 1.8-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.2-.6-.4z" /></svg>
);
export const IcPin = (p: P) => (
  <svg {...out} {...p}><path d="M12 21s-7-5.7-7-11a7 7 0 0 1 14 0c0 5.3-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
);
export const IcTelefone = (p: P) => (
  <svg {...out} {...p}><path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></svg>
);
export const IcRelogio = (p: P) => (
  <svg {...out} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);
export const IcMenu = (p: P) => (
  <svg {...out} strokeWidth={1.8} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const IcInstagram = (p: P) => (
  <svg {...out} {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
);
export const IcCoracao = (p: P) => (
  <svg {...out} strokeWidth={1.6} {...p}><path d="M12 20s-7-4.6-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.4-7 10-7 10z" /></svg>
);
export const IcEscudo = (p: P) => (
  <svg {...out} strokeWidth={1.6} {...p}><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" /><path d="M9 12l2 2 4-4" /></svg>
);
export const IcPessoas = (p: P) => (
  <svg {...out} strokeWidth={1.6} {...p}><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0M16 6a3 3 0 0 1 0 6M21 20a5 5 0 0 0-4-5" /></svg>
);
export const IcSparkles = (p: P) => (
  <svg {...out} strokeWidth={1.6} {...p}><path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z" /><path d="M18 14l.8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8z" /></svg>
);
export const IcMedalha = (p: P) => (
  <svg {...out} strokeWidth={1.6} {...p}><circle cx="12" cy="9" r="5" /><path d="M9 13l-1 8 4-2 4 2-1-8" /></svg>
);
export const IcCopo = (p: P) => (
  <svg {...out} strokeWidth={1.6} {...p}><path d="M6 8h12l-1.2 11a2 2 0 0 1-2 1.8H9.2a2 2 0 0 1-2-1.8z" /><path d="M6 8l-.5-3h13l-.5 3" /></svg>
);
export const IcCasquinha = (p: P) => (
  <svg {...out} strokeWidth={1.6} {...p}><path d="M8 9a4 4 0 0 1 8 0" /><path d="M7 9h10l-4.2 11a.9.9 0 0 1-1.6 0z" /></svg>
);
export const IcBalanca = (p: P) => (
  <svg {...out} strokeWidth={1.6} {...p}><path d="M12 3v3M5 7h14l-2 5H7zM5 7l-2 5a4 4 0 0 0 8 0M19 7l2 5a4 4 0 0 1-8 0M9 21h6M12 12v9" /></svg>
);
