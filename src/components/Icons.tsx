import type { SVGProps } from 'react'

type P = SVGProps<SVGSVGElement>
const base = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export const ArrowUpRight = (p: P) => (
  <svg {...base} {...p}><path d="M7 17 17 7M8 7h9v9" /></svg>
)
export const ArrowDown = (p: P) => (
  <svg {...base} {...p}><path d="M12 4v16M5 13l7 7 7-7" /></svg>
)
export const ArrowRight = (p: P) => (
  <svg {...base} {...p}><path d="M4 12h16M13 5l7 7-7 7" /></svg>
)
export const Download = (p: P) => (
  <svg {...base} {...p}><path d="M12 4v11M7 10l5 5 5-5M4 20h16" /></svg>
)
export const Mail = (p: P) => (
  <svg {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
)
export const Phone = (p: P) => (
  <svg {...base} {...p}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" /></svg>
)
export const LinkedIn = (p: P) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75V21h-4z" />
  </svg>
)
export const Star = (p: P) => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 0c.8 6.4 5.6 11.2 12 12-6.4.8-11.2 5.6-12 12-.8-6.4-5.6-11.2-12-12C6.4 11.2 11.2 6.4 12 0" />
  </svg>
)
export const Menu = (p: P) => (
  <svg {...base} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
)
export const Close = (p: P) => (
  <svg {...base} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>
)
export const Image = (p: P) => (
  <svg {...base} {...p}><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-5-5L5 21" /></svg>
)
export const User = (p: P) => (
  <svg {...base} {...p}><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>
)
export const Award = (p: P) => (
  <svg {...base} {...p}><circle cx="12" cy="9" r="6" /><path d="m8.5 14-1.5 8 5-3 5 3-1.5-8" /></svg>
)

const researchIcons = {
  spark: <path d="M12 3c.6 4.5 3.9 7.8 8.4 8.4-4.5.6-7.8 3.9-8.4 8.4-.6-4.5-3.9-7.8-8.4-8.4C8.1 10.8 11.4 7.5 12 3" fill="currentColor" stroke="none" />,
  shield: <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z" fill="currentColor" stroke="none" />,
  chart: <path d="M4 20V10h4v10zm6 0V4h4v16zm6 0v-7h4v7z" fill="currentColor" stroke="none" />,
  trend: <path d="m3 17 6-6 4 4 8-8M15 7h6v6" />,
}

export const ResearchIcon = ({ name }: { name: string }) => (
  <svg {...base} width={22} height={22}>
    {researchIcons[name as keyof typeof researchIcons]}
  </svg>
)
