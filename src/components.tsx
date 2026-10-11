import type * as React from "react";

export function Icon({ name, size = 20 }: { name: string; size?: number }) {
  const paths: Record<string, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </>
    ),
    external: (
      <>
        <path d="M8 5H5v14h14v-3M12 5h7v7M19 5l-9 9" />
      </>
    ),
    close: <path d="m6 6 12 12M6 18 18 6" />,
    copy: (
      <>
        <rect x="8" y="8" width="12" height="12" rx="2" />
        <path d="M15 8V4H4v11h4" />
      </>
    ),
    check: <path d="m5 12 4 4 10-10" />,
    window: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 10 5-10 5L2 8l10-5ZM2 12l10 5 10-5M2 16l10 5 10-5" />
      </>
    ),
    bag: (
      <>
        <path d="M5 7h14l2 14H3L5 7ZM9 8V6a3 3 0 0 1 6 0v2" />
      </>
    ),
    adjust: (
      <>
        <path d="M5 3v8m0 4v6M12 3v2m0 4v12M19 3v11m0 4v3" />
        <circle cx="5" cy="13" r="2" />
        <circle cx="12" cy="7" r="2" />
        <circle cx="19" cy="16" r="2" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 6 9 7 9-7" />
      </>
    ),
    telegram: (
      <>
        <path d="m3 11 18-7-4 17-6-6-4 3v-6l10-5-8 7" />
      </>
    ),
    up: <path d="M12 19V5m-6 6 6-6 6 6" />,
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || paths.arrow}
    </svg>
  );
}

export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a
      className={`brand ${footer ? "brand-footer" : ""}`}
      href="#top"
      aria-label="ShevDevWorks"
    >
      <svg
        className="brand-symbol"
        viewBox="-365 -403 730 806"
        aria-hidden="true"
      >
        <g fill="currentColor">
          <path d="M148.18,-231.18L229.27,-312.27A18,18 0 0 0 216.54,-343H-81.36A45,45 0 0 0 -113.18,-329.82L-287.57,-155.43A60,60 0 0 0 -287.57,-70.57L-138.18,78.82A45,45 0 0 0 -106.36,92H-3.46A18,18 0 0 0 9.27,61.27L-117.57,-65.57A60,60 0 0 1 -117.57,-150.43L-63.18,-204.82A45,45 0 0 1 -31.36,-218H116.36A45,45 0 0 0 148.18,-231.18Z" />
          <path d="M-148.18,231.18L-229.27,312.27A18,18 0 0 0 -216.54,343H81.36A45,45 0 0 0 113.18,329.82L287.57,155.43A60,60 0 0 0 287.57,70.57L138.18,-78.82A45,45 0 0 0 106.36,-92H3.46A18,18 0 0 0 -9.27,-61.27L117.57,65.57A60,60 0 0 1 117.57,150.43L63.18,204.82A45,45 0 0 1 31.36,218H-116.36A45,45 0 0 0 -148.18,231.18Z" />
        </g>
      </svg>
      <span>
        ShevDevWorks<span className="brand-dot">.</span>
      </span>
    </a>
  );
}
