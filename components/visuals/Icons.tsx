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

export function HeadsetIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd" className={className}>
      <path d="M11.41 1.2 9.09 1.75 7.4 2.72 6.3 3.73 5.25 5.25 4.45 7.91 2.76 8.12 1.71 8.92 1.2 10.1 1.2 14.15 1.71 15.38 2.76 16.18 3.39 16.35 5.76 16.18 6.05 15.71 6.09 7.95 6.56 6.35 7.15 5.33 8.92 3.69 10.9 2.93 13.05 2.93 15.04 3.69 16.81 5.33 17.78 7.49 17.91 15.8 17.36 17.1 16.56 17.78 15.63 18.08 14.36 18.08 13.52 16.89 12.55 16.43 11.41 16.43 10.44 16.89 9.51 18.33 9.64 19.85 10.69 21.07 12.3 21.41 13.52 20.9 14.36 19.72 16.09 19.68 17.61 19.09 18.83 17.91 19.51 16.35 21.2 16.18 22.25 15.38 22.76 14.15 22.76 10.14 22.42 9.17 21.62 8.33 20.82 7.99 19.51 7.91 18.71 5.25 17.65 3.73 16.56 2.72 14.02 1.45Z M3.56 9.6 4.36 9.6 4.41 9.64 4.41 14.66 4.36 14.7 3.56 14.7 3.52 14.66 3.44 14.66 3.27 14.57 3.06 14.4 2.85 13.98 2.85 10.31 3.06 9.89 3.27 9.72 3.44 9.64 3.52 9.64Z M19.59 9.6 20.4 9.6 20.44 9.64 20.52 9.64 20.69 9.72 20.9 9.89 21.11 10.31 21.11 13.98 20.9 14.4 20.69 14.57 20.52 14.66 20.44 14.66 20.4 14.7 19.59 14.7 19.55 14.66 19.55 9.64Z M11.83 18.03 12.13 18.03 12.17 18.08 12.25 18.08 12.3 18.12 12.34 18.12 12.38 18.16 12.42 18.16 12.51 18.24 12.55 18.24 12.63 18.33 12.63 18.37 12.72 18.45 12.72 18.5 12.76 18.54 12.76 18.58 12.8 18.62 12.8 18.71 12.84 18.75 12.84 19.05 12.8 19.09 12.8 19.17 12.76 19.21 12.76 19.26 12.72 19.3 12.72 19.34 12.63 19.42 12.63 19.47 12.55 19.55 12.51 19.55 12.42 19.64 12.38 19.64 12.34 19.68 12.3 19.68 12.25 19.72 12.17 19.72 12.13 19.76 11.83 19.76 11.79 19.72 11.7 19.72 11.66 19.68 11.62 19.68 11.58 19.64 11.54 19.64 11.45 19.55 11.41 19.55 11.32 19.47 11.32 19.42 11.24 19.34 11.24 19.3 11.2 19.26 11.2 19.21 11.16 19.17 11.16 19.09 11.11 19.05 11.11 18.75 11.16 18.71 11.16 18.62 11.2 18.58 11.2 18.54 11.24 18.5 11.24 18.45 11.32 18.37 11.32 18.33 11.41 18.24 11.45 18.24 11.54 18.16 11.58 18.16 11.62 18.12 11.66 18.12 11.7 18.08 11.79 18.08Z" />
    </svg>
  );
}

export function DocumentCheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd" className={className}>
      <path d="M2.17 1.71 1.54 2.42 1.2 3.39 1.2 20.56 1.71 21.79 2.42 22.42 3.39 22.76 16.09 22.76 17.32 22.25 17.95 21.53 18.29 20.52 18.29 7.19 12.3 1.2 3.39 1.2Z M3.14 3.06 3.56 2.85 11.07 2.85 11.11 6.22 11.37 7.02 11.79 7.61 12.46 8.12 13.27 8.37 16.64 8.41 16.64 20.35 16.22 20.99 15.92 21.11 3.56 21.11 3.06 20.82 2.85 20.4 2.85 3.56Z M14.87 11.49 13.77 10.48 13.6 10.4 8.67 15.84 5.88 13.22 4.7 14.4 8.75 18.2Z M12.76 4.11 12.8 4.07 15.42 6.68 15.38 6.73 13.48 6.73 13.43 6.68 13.31 6.68 13.27 6.64 13.22 6.64 13.14 6.56 13.1 6.56 12.93 6.39 12.93 6.35 12.84 6.26 12.84 6.22 12.8 6.18 12.8 6.05 12.76 6.01Z" />
    </svg>
  );
}

export function ShieldCheckFilledIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd" className={className}>
      <path d="M10.16 1.2 1.59 4.09 1.24 4.35 1.2 12.66 1.55 14.71 2.21 16.5 3.26 18.3 4.35 19.61 5.31 20.48 6.93 21.58 8.33 22.23 10.47 22.76 12.83 22.01 15.32 20.48 17.12 18.65 18.43 16.5 19.08 14.71 19.43 12.66 19.43 4.44 19.04 4.09Z M10.25 2.25 18.43 5.0 18.43 12.48 18.12 14.36 17.51 16.07 16.2 18.17 14.45 19.87 12.39 21.09 10.34 21.75 9.03 21.4 7.45 20.7 5.97 19.7 4.7 18.47 3.69 17.12 2.95 15.67 2.42 14.01 2.21 12.48 2.21 5.0Z M15.72 8.81 15.45 8.5 15.15 8.46 14.93 8.55 9.38 13.88 9.16 13.75 6.32 11.13 6.18 11.08 5.83 11.13 5.57 11.43 5.57 11.74 5.83 12.09 8.98 14.97 9.2 15.1 9.51 15.1 9.77 14.93 15.67 9.25Z" />
    </svg>
  );
}

export function ShieldCheckOutlineIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd" className={className}>
      <path d="M 10.1 1.2 L 7.91 2.85 L 6.26 3.65 L 4.62 4.11 L 1.92 4.32 L 1.5 4.49 L 1.24 4.91 L 1.2 10.1 L 1.45 12.76 L 1.96 15.0 L 2.55 16.51 L 3.56 18.24 L 5.21 20.06 L 6.47 21.03 L 8.37 22.08 L 9.93 22.72 L 10.4 22.76 L 12.89 21.7 L 14.78 20.48 L 16.56 18.75 L 17.65 17.1 L 18.54 15.0 L 19.13 12.21 L 19.3 10.1 L 19.26 4.91 L 18.88 4.41 L 16.39 4.2 L 14.24 3.65 L 12.59 2.85 L 10.69 1.33 Z M 10.23 2.97 L 11.87 4.15 L 13.6 5.0 L 15.71 5.59 L 17.74 5.8 L 17.82 6.52 L 17.82 10.14 L 17.61 12.46 L 17.19 14.4 L 16.3 16.51 L 15.33 17.91 L 13.94 19.26 L 12.42 20.27 L 10.27 21.24 L 9.17 20.82 L 7.06 19.64 L 5.93 18.71 L 4.7 17.32 L 3.77 15.67 L 3.23 14.11 L 2.8 11.87 L 2.68 10.14 L 2.76 5.8 L 4.79 5.59 L 6.9 5.0 L 8.62 4.15 Z M 14.11 9.68 L 13.98 9.43 L 13.73 9.22 L 13.35 9.13 L 12.97 9.26 L 9.22 13.01 L 7.65 11.45 L 7.28 11.24 L 6.81 11.28 L 6.47 11.58 L 6.39 11.79 L 6.39 12.17 L 6.47 12.38 L 8.79 14.7 L 9.17 14.83 L 9.43 14.78 L 9.72 14.62 L 13.94 10.4 L 14.11 10.1 Z" />
    </svg>
  );
}
