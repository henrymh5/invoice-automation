export function BillflowLogo({ className = "h-14 w-auto text-[#0B745B]" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 220 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Billflow logo"
      role="img"
    >
      {/* Icon */}
      <rect x="8" y="10" width="36" height="36" rx="8" stroke="currentColor" strokeWidth="2" />
      <path d="M16 22H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 29H26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M28 34H36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M33 34L30.5 31.5M33 34L30.5 36.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Wordmark */}
      <text
        x="56"
        y="36"
        fill="currentColor"
        fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial"
        fontSize="24"
        fontWeight="600"
        letterSpacing="-0.4"
      >
        Billflow
      </text>
    </svg>
  );
}