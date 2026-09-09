type IconProps = { className?: string };

const base = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function WebIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M3 8.5h18" />
      <circle cx="6" cy="6.25" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="8" cy="6.25" r="0.6" fill="currentColor" stroke="none" />
      <path d="M7 13l3 2.5-3 2.5M13 17.5h4" />
    </svg>
  );
}

export function AppIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3.5" y="3.5" width="7.5" height="7.5" rx="1.5" />
      <rect x="13" y="3.5" width="7.5" height="7.5" rx="1.5" />
      <rect x="3.5" y="13" width="7.5" height="7.5" rx="1.5" />
      <rect x="13" y="13" width="7.5" height="7.5" rx="1.5" />
    </svg>
  );
}

export function DesignIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3a9 9 0 100 18 1.5 1.5 0 001.5-1.5c0-.4-.15-.76-.4-1.03a1.5 1.5 0 011.1-2.47H16a4 4 0 004-4c0-5-3.6-9-8-9z" />
      <circle cx="7.5" cy="11" r="1" fill="currentColor" stroke="none" />
      <circle cx="10" cy="7.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function DomainIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.2 2.3 3.3 5.3 3.3 8.5s-1.1 6.2-3.3 8.5c-2.2-2.3-3.3-5.3-3.3-8.5S9.8 5.8 12 3.5z" />
    </svg>
  );
}

export function CctvIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="2.5" y="7" width="12" height="10" rx="2.2" />
      <path d="M14.5 10.3l6-3v9.4l-6-3z" strokeLinejoin="round" />
    </svg>
  );
}

export function NetworkIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="9" y="3" width="6" height="4.2" rx="1" />
      <rect x="3" y="17" width="6" height="4.2" rx="1" />
      <rect x="15" y="17" width="6" height="4.2" rx="1" />
      <path d="M12 7.2v4M12 11.2H6v5.8M12 11.2h6v5.8" />
    </svg>
  );
}

export function AmcIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 1024 1024" fill="currentColor" className={className}>
      <path d="M1006.37 215.936c-10.784-4.976-23.582-3.088-32.558 4.848L812.5 365.68 666.868 216.272 811.06 49.744c7.84-9.056 9.745-21.536 4.865-32.512S800.26-.463 788.405-.463h-8.69c-89.12 0-242.976 7.664-311.663 77.343l-13.857 13.76c-73.28 74.768-86.288 197.376-47.68 290.576L37.236 758.112c-49.791 50.48-49.791 132.32 0 182.816l45.073 45.697c24.895 25.232 57.535 37.856 90.175 37.856 32.624 0 65.263-12.624 90.143-37.856l374.72-377.728c35.44 19.152 84 31.664 124.784 31.664 65.376 0 127.344-26.369 174.527-74.256l13.664-13.84c74.609-75.648 73.456-237.297 73.792-308.417.033-12.096-6.927-23.088-17.743-28.112zM905.666 509.008l-11.873 13.871c-35.744 36.273-82.496 53.648-131.664 53.648-24.32 0-57.088-4.576-79.216-13.792-20-8.303-38.576-20.288-55.2-35.423L217.537 940.928c-12.032 12.223-28.032 18.943-45.057 18.943s-33.04-6.72-45.088-18.943l-45.055-45.68c-24.865-25.216-24.865-66.224-.017-91.44l400.784-408.863c-13.44-19.569-22.593-40.897-28.049-62.977h-.015c-15.424-62.384-6.432-148.607 42.016-198.048L510.848 120c41.552-42.16 149.456-54.624 209.2-58.304l-117.36 135.536c-10.496 12.128-9.967 30.4 1.216 41.872L789.44 429.44c11.248 11.584 29.44 12.256 41.553 1.52L961.6 313.328c-3.888 63.36-16.192 155.376-55.935 195.68z" />
    </svg>
  );
}

export function OfficeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="5" y="2.5" width="14" height="19" rx="2" />
      <path d="M5 9.5h14M5 15.5h14" />
      <circle cx="8" cy="6" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="8" cy="12.5" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="8" cy="18.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function CloudIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M7 18h10a4 4 0 000-8 5.5 5.5 0 00-10.5-1.5A4 4 0 007 18z" />
    </svg>
  );
}

export function WifiIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3.5 9a12.5 12.5 0 0117 0" />
      <path d="M6.7 12.8a8 8 0 0110.6 0" />
      <path d="M9.9 16.5a3.5 3.5 0 014.2 0" />
      <circle cx="12" cy="19.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function MonitorIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="4" width="18" height="12.5" rx="1.5" />
      <path d="M9 20.5h6M12 16.5v4" />
    </svg>
  );
}

export function PeopleIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="9" cy="8" r="3" />
      <circle cx="16.3" cy="9.2" r="2.3" />
      <path d="M4 20v-1.3A4.7 4.7 0 018.7 14h.6A4.7 4.7 0 0114 18.7V20" />
      <path d="M15.7 14.6A3.9 3.9 0 0119.5 18.5V20" />
    </svg>
  );
}

export function ShieldLockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2.5l8 3v6c0 5.2-3.4 8.7-8 10-4.6-1.3-8-4.8-8-10v-6l8-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <rect x="9" y="11" width="6" height="5" rx="1" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9.8 11V9.3a2.2 2.2 0 014.4 0V11" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export const ServiceIcon: Record<string, (p: IconProps) => JSX.Element> = {
  web: WebIcon,
  app: AppIcon,
  design: DesignIcon,
  domain: DomainIcon,
  cctv: CctvIcon,
  network: NetworkIcon,
  amc: AmcIcon,
  office: OfficeIcon,
};

export function SchoolIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 4L2 9l10 5 10-5-10-5z" />
      <path d="M6 11.5v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
      <path d="M22 9v6" />
    </svg>
  );
}

export function ClinicIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M7 3v6a3 3 0 006 0V3" />
      <path d="M10 12v2a6 6 0 0012 0v-2" />
      <circle cx="19" cy="14" r="2" />
    </svg>
  );
}

export function BriefcaseIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="8" width="18" height="12" rx="2" />
      <path d="M8 8V6a2 2 0 012-2h4a2 2 0 012 2v2M3 13h18" />
    </svg>
  );
}

export function BuildingIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="4" y="3" width="10" height="18" rx="1" />
      <rect x="14" y="9" width="6" height="12" rx="1" />
      <path d="M7 7h.01M11 7h.01M7 11h.01M11 11h.01M7 15h.01M11 15h.01M17 13h.01M17 17h.01" />
    </svg>
  );
}

export function HardHatIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4.5 14.5a7.5 7.5 0 0115 0" />
      <path d="M2 14.5h20a1 1 0 011 1v1a1 1 0 01-1 1H2a1 1 0 01-1-1v-1a1 1 0 011-1z" />
      <path d="M12 8.5V5.5" />
    </svg>
  );
}

export const IndustryIcon: Record<string, (p: IconProps) => JSX.Element> = {
  school: SchoolIcon,
  clinic: ClinicIcon,
  office: BuildingIcon,
  building: HardHatIcon,
};

export function CheckIcon({ className }: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
      <circle cx="8" cy="8" r="7" stroke="rgb(var(--color-green))" />
      <path d="M5 8l2 2 4-4" stroke="rgb(var(--color-green))" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd" className={className}>
      <path d="M19.16 3.94 17.54 2.73 15.56 1.78 13.26 1.24 11.06 1.2 9.08 1.56 7.59 2.1 5.97 3.0 4.26 4.44 2.6 6.69 1.83 8.4 1.29 10.96 1.42 13.8 1.92 15.6 2.68 17.36 1.2 22.76 6.74 21.27 8.31 21.94 9.98 22.4 11.55 22.58 13.71 22.44 15.6 21.94 17.08 21.27 18.35 20.46 19.92 19.02 21.09 17.44 21.99 15.6 22.58 13.22 22.62 10.92 22.31 9.12 21.63 7.28 20.64 5.61Z M17.94 5.25 19.29 6.78 20.19 8.4 20.68 9.98 20.86 11.24 20.82 12.99 20.46 14.61 19.7 16.32 18.66 17.76 17.58 18.8 16.19 19.74 15.1 20.24 13.44 20.68 11.14 20.78 10.02 20.6 8.26 20.01 7.14 19.38 3.77 20.24 4.62 16.95 3.72 15.33 3.23 13.76 3.04 12.5 3.09 10.78 3.32 9.62 3.81 8.22 4.66 6.74 5.52 5.7 6.83 4.58 8.22 3.77 9.7 3.23 11.42 2.96 13.35 3.04 15.06 3.5 16.77 4.35Z M7.28 7.46 6.74 8.31 6.56 8.99 6.56 9.98 6.78 10.78 7.37 11.91 8.67 13.62 9.75 14.7 11.42 15.92 12.68 16.5 14.07 16.95 15.47 16.95 16.46 16.5 17.04 15.96 17.31 15.28 17.36 14.43 17.04 14.2 15.06 13.26 14.74 13.17 14.57 13.22 13.66 14.34 13.31 14.61 12.04 14.07 11.01 13.35 10.11 12.45 9.26 11.19 9.3 10.92 10.11 9.88 10.16 9.52 9.17 7.18 8.9 6.96 7.95 6.96 7.59 7.14Z" />
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
      <path d="M3.5 8h9M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WarningIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3.5 21.5 20h-19L12 3.5z" strokeLinejoin="round" />
      <path d="M12 10v4" />
      <circle cx="12" cy="17" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PuzzleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd" className={className}>
      <path d="M11.75 1.2 11.16 1.45 7.7 5.04 7.65 5.59 7.87 6.01 8.84 6.56 9.34 7.32 9.38 8.08 9.05 8.79 8.25 9.34 7.32 9.34 6.56 8.84 6.01 7.87 5.59 7.65 5.04 7.7 1.45 11.16 1.2 12.21 1.45 12.8 4.36 15.71 3.27 16.77 2.85 18.03 3.14 19.55 3.9 20.48 4.83 20.99 6.22 21.07 7.44 20.52 8.25 19.59 11.16 22.5 12.21 22.76 12.8 22.5 16.26 18.92 16.3 18.37 16.09 17.95 15.12 17.4 14.62 16.64 14.57 15.88 14.87 15.21 15.59 14.66 16.64 14.62 17.4 15.12 17.95 16.09 18.33 16.3 18.92 16.26 22.5 12.8 22.76 11.75 22.5 11.16 19.59 8.25 20.69 7.19 21.11 5.93 20.94 4.7 20.02 3.44 18.79 2.89 17.74 2.89 16.51 3.44 15.71 4.36 12.8 1.45Z M11.96 2.42 15.54 5.8 16.01 5.84 16.47 5.63 17.02 4.66 17.65 4.2 18.62 4.11 19.34 4.49 19.85 5.33 19.85 6.05 19.3 6.94 18.33 7.49 18.12 7.95 18.16 8.41 21.53 11.96 18.71 14.83 17.78 13.81 16.64 13.35 15.21 13.48 14.07 14.24 13.39 15.5 13.35 16.6 13.81 17.78 14.83 18.75 12 21.53 8.41 18.16 7.95 18.12 7.49 18.33 6.94 19.3 6.3 19.76 5.33 19.85 4.62 19.47 4.11 18.62 4.11 17.91 4.66 17.02 5.63 16.47 5.84 16.01 5.8 15.54 2.42 12 5.25 9.13 6.18 10.14 7.36 10.61 8.84 10.44 9.89 9.72 10.57 8.46 10.61 7.36 10.14 6.18 9.13 5.25Z" />
    </svg>
  );
}

export function LockIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="5" y="11" width="14" height="9.5" rx="2" />
      <path d="M7.5 11V7.5a4.5 4.5 0 019 0V11" />
      <circle cx="12" cy="15.3" r="1.1" fill="currentColor" stroke="none" />
      <path d="M12 16.5v1.8" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd" className={className}>
      <path d="M1.5 2.04 1.2 2.85 1.2 14.7 1.5 15.5 2.04 16.05 2.85 16.35 21.11 16.35 21.91 16.05 22.46 15.5 22.76 14.7 22.76 2.85 22.46 2.04 21.91 1.5 21.11 1.2 2.85 1.2 2.04 1.5Z M3.35 2.47 20.61 2.47 13.18 9.85 12.68 10.14 12.21 10.27 11.54 10.23 10.78 9.85Z M3.35 15.08 8.79 9.68 10.35 11.07 10.78 11.28 11.58 11.49 12.63 11.45 13.6 11.07 15.16 9.68 20.61 15.08Z M2.47 3.35 7.91 8.75 2.47 14.19 2.42 14.15 2.42 3.39Z M21.49 3.35 21.53 3.39 21.53 14.15 21.49 14.19 16.05 8.79Z" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
      <path
        d="M4 2.5h2l1 3-1.5 1.3a8 8 0 004.7 4.7L11.5 10l3 1v2c0 .8-.7 1.4-1.5 1.3A11.5 11.5 0 013 5.5C2.9 4.7 3.2 4 4 2.5z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={className}>
      <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.4" />
      <path d="M9 5v4l3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MapPinIcon({ className }: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={className}>
      <path
        d="M9 16.5S3.75 11.25 3.75 7.5a5.25 5.25 0 0110.5 0c0 3.75-5.25 9-5.25 9z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="7.5" r="1.8" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function DocumentIcon({ className }: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={className}>
      <path
        d="M5 2.5h5l3 3v10a1 1 0 01-1 1H5a1 1 0 01-1-1v-12a1 1 0 011-1z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M10 2.5V6h3M6.5 10h5M6.5 12.5h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function SunIcon({ className }: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
      <circle cx="8" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M8 1v1.4M8 13.6V15M15 8h-1.4M2.4 8H1M12.9 3.1l-1 1M4.1 11.9l-1 1M12.9 12.9l-1-1M4.1 4.1l-1-1"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MoonIcon({ className }: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
      <path
        d="M14 8.53A6 6 0 117.47 2a4.67 4.67 0 006.53 6.53z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
