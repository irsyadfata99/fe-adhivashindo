import React from "react";
import Button from "./Button";

interface HeroBannerProps {
  badge?: string;
  title: string;
  description?: string;
  author?: string;
  date?: string;
  onAction?: () => void;
  actionLabel?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  badge = "PEMROGRAMAN",
  title,
  description,
  author,
  date,
  onAction,
  actionLabel = "MULAI LEARNING",
}) => {
  return (
    <div
      style={{
        background: "var(--hero-gradient)",
        borderRadius: "var(--border-radius-lg)",
        padding: "32px",
        color: "white",
        marginBottom: "var(--gap-lg)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          right: "-40px",
          top: "-40px",
          width: "200px",
          height: "200px",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: "60px",
          bottom: "-60px",
          width: "150px",
          height: "150px",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "50%",
        }}
      />

      {/* Left content */}
      <div style={{ flex: 1, zIndex: 1 }}>
        {/* Badge */}
        <span
          style={{
            background: "rgba(255,255,255,0.2)",
            color: "white",
            fontSize: "10px",
            fontWeight: "700",
            padding: "4px 12px",
            borderRadius: "20px",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            display: "inline-block",
            marginBottom: "12px",
          }}
        >
          {badge}
        </span>

        {/* Title */}
        <h1
          style={{
            fontSize: "22px",
            fontWeight: "700",
            lineHeight: "1.3",
            marginBottom: "10px",
            color: "white",
          }}
        >
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p
            style={{
              fontSize: "13px",
              opacity: 0.85,
              lineHeight: "1.6",
              marginBottom: "20px",
              maxWidth: "480px",
            }}
          >
            {description}
          </p>
        )}

        {/* Meta info */}
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {author && (
            <span
              style={{
                fontSize: "12px",
                opacity: 0.9,
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              👤 Pemateri By {author}
            </span>
          )}
          {date && (
            <span
              style={{
                fontSize: "12px",
                opacity: 0.9,
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              📅 {date}
            </span>
          )}
        </div>
      </div>

      {/* Action button */}
      {onAction && (
        <div style={{ zIndex: 1, flexShrink: 0 }}>
          <Button
            variant="ghost"
            size="lg"
            onClick={onAction}
            style={{
              background: "white",
              color: "var(--ion-color-primary)",
              border: "none",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              fontWeight: "700",
              letterSpacing: "0.5px",
            }}
          >
            {actionLabel}
          </Button>
        </div>
      )}
    </div>
  );
};

export default HeroBanner;
