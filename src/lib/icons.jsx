/* Lightweight inline SVG icons (stroke = currentColor) */
const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const IconSun = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
  </svg>
);

export const IconAnchor = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="5" r="2.5" />
    <path d="M12 7.5V22M5 12H3a9 9 0 0 0 18 0h-2M12 22a9 9 0 0 1-7-3.5M12 22a9 9 0 0 0 7-3.5" />
  </svg>
);

export const IconBolt = (p) => (
  <svg {...base} {...p}>
    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
  </svg>
);

export const IconClock = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const IconLeaf = (p) => (
  <svg {...base} {...p}>
    <path d="M11 20A7 7 0 0 1 4 13c0-5 5-9 16-9 0 11-4 16-9 16z" />
    <path d="M4 21c4-7 9-9 13-10" />
  </svg>
);

export const IconShield = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const IconGauge = (p) => (
  <svg {...base} {...p}>
    <path d="M12 14 16 9" />
    <circle cx="12" cy="14" r="0.6" fill="currentColor" />
    <path d="M4 18a8 8 0 1 1 16 0" />
  </svg>
);

export const IconDrill = (p) => (
  <svg {...base} {...p}>
    <path d="M4 4h9v5H4zM13 6h3l2 2v2h-7M9 9v3a3 3 0 0 1-3 3H6M11 15v6" />
  </svg>
);

export const IconRuler = (p) => (
  <svg {...base} {...p}>
    <path d="M3 7l4-4 14 14-4 4z" />
    <path d="M7 7l2 2M10 4l2 2M13 7l2 2M16 10l2 2" />
  </svg>
);

export const IconBuilding = (p) => (
  <svg {...base} {...p}>
    <path d="M5 21V5l8-3v19M13 21V9l6 2v10M3 21h18" />
    <path d="M8 7v.01M8 11v.01M8 15v.01" />
  </svg>
);

export const IconFence = (p) => (
  <svg {...base} {...p}>
    <path d="M4 9l2-2 2 2v12H4zM12 9l2-2 2 2v12h-4zM2 13h20M2 17h20" />
  </svg>
);

export const IconFactory = (p) => (
  <svg {...base} {...p}>
    <path d="M3 21V10l6 4V10l6 4V7l3-2v16z" />
    <path d="M3 21h18" />
  </svg>
);

export const IconArrowRight = (p) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconCheck = (p) => (
  <svg {...base} {...p}>
    <path d="m5 12 5 5 9-11" />
  </svg>
);

export const IconPhone = (p) => (
  <svg {...base} {...p}>
    <path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
);

export const IconMail = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const IconMapPin = (p) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const IconQuote = (p) => (
  <svg {...base} {...p}>
    <path d="M14 4h6v6M20 4l-8 8M10 8H4v12h12v-6" />
  </svg>
);
