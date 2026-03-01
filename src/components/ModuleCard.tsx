import React from "react";

type ModulVariant = "pemrograman" | "creative" | "sdm";

interface ModulCardProps {
  variant?: ModulVariant;
  label: string;
  title: string;
  items?: string[];
  onClick?: () => void;
}

const variantColors: Record<ModulVariant, string> = {
  pemrograman: "var(--modul-pemrograman)",
  creative: "var(--modul-creative)",
  sdm: "var(--modul-sdm)",
};

const ModulCard: React.FC<ModulCardProps> = ({
  variant = "pemrograman",
  label,
  title,
  items = [],
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      style={{
        background: variantColors[variant],
        borderRadius: "var(--border-radius-lg)",
        padding: "20px",
        color: "white",
        minHeight: "180px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        cursor: onClick ? "pointer" : "default",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        flex: 1,
      }}
      onMouseEnter={(e) => {
        if (onClick) {
          e.currentTarget.style.transform = "translateY(-4px)";
          e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)";
        }
      }}
      onMouseLeave={(e) => {
        if (onClick) {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "none";
        }
      }}
    >
      {/* Top */}
      <div>
        <div
          style={{
            fontSize: "10px",
            fontWeight: "700",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            opacity: 0.85,
            marginBottom: "8px",
          }}
        >
          MATERI KOMPETENSI
        </div>
        <div
          style={{
            fontSize: "16px",
            fontWeight: "700",
            letterSpacing: "1px",
            marginBottom: "12px",
          }}
        >
          {label}
        </div>
      </div>

      {/* Items */}
      {items.length > 0 && (
        <div style={{ fontSize: "12px", opacity: 0.9, lineHeight: "1.6" }}>
          {items.map((item, i) => (
            <div key={i} style={{ marginBottom: "4px" }}>
              • {item}
            </div>
          ))}
        </div>
      )}

      {/* Bottom title */}
      <div
        style={{
          fontSize: "13px",
          fontWeight: "600",
          marginTop: "12px",
          opacity: 0.95,
        }}
      >
        {title}
      </div>
    </div>
  );
};

export default ModulCard;
