import React from "react";

interface JadwalItemProps {
  title: string;
  time: string;
  color?: string;
  onClick?: () => void;
}

const JadwalItem: React.FC<JadwalItemProps> = ({
  title,
  time,
  color = "var(--badge-blue)",
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "10px 0",
        borderBottom: "1px solid var(--border-color)",
        cursor: onClick ? "pointer" : "default",
        transition: "opacity 0.2s",
      }}
      onMouseEnter={(e) => {
        if (onClick) e.currentTarget.style.opacity = "0.75";
      }}
      onMouseLeave={(e) => {
        if (onClick) e.currentTarget.style.opacity = "1";
      }}
    >
      {/* Color dot */}
      <div
        style={{
          width: "12px",
          height: "36px",
          background: color,
          borderRadius: "4px",
          flexShrink: 0,
        }}
      />

      {/* Content */}
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontSize: "var(--font-size-sm)",
            fontWeight: "600",
            color: "var(--ion-text-color)",
            marginBottom: "3px",
            lineHeight: "1.3",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: "var(--font-size-xs)",
            color: "var(--text-muted)",
          }}
        >
          {time}
        </div>
      </div>

      {/* Arrow */}
      <span style={{ color: "var(--text-muted)", fontSize: "16px" }}>›</span>
    </div>
  );
};

export default JadwalItem;
