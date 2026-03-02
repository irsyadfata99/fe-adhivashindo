import React from "react";

type ModulVariant = "pemrograman" | "creative" | "sdm";

interface ModulCardProps {
  variant?: ModulVariant;
  label: string;
  items?: string[];
  highlightIndex?: number;
  onClick?: () => void;
}

const variantColors: Record<ModulVariant, string> = {
  pemrograman: "#1e1b4b",
  creative: "#f87171",
  sdm: "#fbbf24",
};

const ModuleCard: React.FC<ModulCardProps> = ({ variant = "pemrograman", label, items = [], highlightIndex = 1, onClick }) => {
  const bgColor = variantColors[variant];
  const isDark = variant === "pemrograman";

  return (
    <div
      onClick={onClick}
      style={{
        flex: 1,
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        cursor: onClick ? "pointer" : "default",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        display: "flex",
        flexDirection: "column",
        background: "white",
      }}
      onMouseEnter={(e) => {
        if (onClick) {
          e.currentTarget.style.transform = "translateY(-3px)";
          e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.13)";
        }
      }}
      onMouseLeave={(e) => {
        if (onClick) {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.08)";
        }
      }}
    >
      {/* ── Top: inner rounded card with margin ── */}
      <div style={{ padding: "12px 12px 0 12px" }}>
        <div
          style={{
            background: bgColor,
            borderRadius: "12px",
            height: "160px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Label */}
          <span
            style={{
              fontSize: "16px",
              fontWeight: "800",
              color: "white",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              textAlign: "center",
              padding: "0 16px",
              position: "relative",
              zIndex: 1,
              textShadow: isDark ? "0 1px 4px rgba(0,0,0,0.4)" : "none",
            }}
          >
            {label}
          </span>
        </div>
      </div>

      {/* ── Bottom: white content ── */}
      <div style={{ padding: "16px 16px 20px", flex: 1 }}>
        <div
          style={{
            fontSize: "10px",
            fontWeight: "700",
            letterSpacing: "1px",
            textTransform: "uppercase",
            color: "var(--ion-text-color)",
            marginBottom: "12px",
          }}
        >
          MATERI KOMPETENSI
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                fontSize: "12px",
                lineHeight: "1.5",
                padding: i === highlightIndex ? "6px 10px" : "5px 0",
                borderRadius: i === highlightIndex ? "6px" : "0",
                color: i === highlightIndex ? "#78350f" : "var(--text-secondary)",
                background: i === highlightIndex ? "#fef08a" : "transparent",
                fontWeight: i === highlightIndex ? "600" : "400",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;
