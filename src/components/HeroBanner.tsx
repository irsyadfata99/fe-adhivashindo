import React from "react";

interface HeroBannerProps {
  badge?: string;
  title: string;
  description?: string;
  author?: string;
  date?: string;
  onAction?: () => void;
  actionLabel?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ badge = "PEMROGRAMAN", title, description, author, date, onAction, actionLabel = "MULAI LEARNING" }) => {
  return (
    <div
      style={{
        background: "var(--hero-gradient)",
        borderRadius: "var(--border-radius-lg)",
        padding: "36px",
        color: "white",
        marginBottom: "var(--gap-lg)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        gap: "24px",
        position: "relative",
        overflow: "hidden",
        minHeight: "260px",
      }}
    >
      <div style={{ flex: 1, zIndex: 1, display: "flex", flexDirection: "column", gap: "14px" }}>
        <span
          style={{
            color: "#fbbf24",
            fontSize: "11px",
            fontWeight: "700",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            display: "inline-block",
          }}
        >
          {badge}
        </span>

        <h1
          style={{
            fontSize: "28px",
            fontWeight: "700",
            lineHeight: "1.3",
            color: "white",
            margin: 0,
          }}
        >
          {title}
        </h1>

        {description && (
          <p
            style={{
              fontSize: "12px",
              opacity: 0.75,
              lineHeight: "1.6",
              margin: 0,
              maxWidth: "360px",
            }}
          >
            {description}
          </p>
        )}

        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "4px" }}>
          {author && (
            <span style={{ fontSize: "12px", opacity: 0.9, display: "flex", alignItems: "center", gap: "6px" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              Pemateri By {author}
            </span>
          )}
          {date && (
            <span style={{ fontSize: "12px", opacity: 0.9, display: "flex", alignItems: "center", gap: "6px" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="17" rx="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="16" y1="2" x2="16" y2="6" />
              </svg>
              {date}
            </span>
          )}
        </div>
      </div>

      {onAction && (
        <div style={{ zIndex: 1, flexShrink: 0 }}>
          <button
            onClick={onAction}
            style={{
              background: "white",
              color: "#1e293b",
              border: "none",
              borderRadius: "var(--border-radius-sm)",
              padding: "16px 32px",
              fontSize: "15px",
              fontWeight: "700",
              letterSpacing: "0.5px",
              cursor: "pointer",
              boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
              fontFamily: "var(--ion-font-family)",
              whiteSpace: "nowrap",
              transition: "box-shadow 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.3)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.2)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {actionLabel}
          </button>
        </div>
      )}
    </div>
  );
};

export default HeroBanner;
