import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
}

const styles: Record<string, React.CSSProperties> = {
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    border: "none",
    borderRadius: "var(--border-radius-sm)",
    fontFamily: "var(--ion-font-family)",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.2s ease",
    letterSpacing: "0.3px",
  },
  primary: {
    background: "var(--ion-color-primary)",
    color: "white",
    border: "none",
  },
  secondary: {
    background: "transparent",
    color: "var(--ion-color-primary)",
    border: "1.5px solid var(--ion-color-primary)",
  },
  danger: {
    background: "var(--ion-color-danger)",
    color: "white",
    border: "none",
  },
  ghost: {
    background: "transparent",
    color: "var(--text-secondary)",
    border: "1.5px solid var(--border-color)",
  },
  sm: { padding: "6px 14px", fontSize: "12px" },
  md: { padding: "10px 20px", fontSize: "14px" },
  lg: { padding: "13px 28px", fontSize: "15px" },
  disabled: { opacity: 0.5, cursor: "not-allowed" },
  fullWidth: { width: "100%" },
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  fullWidth = false,
  onClick,
  type = "button",
  style,
}) => {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      style={{
        ...styles.base,
        ...styles[variant],
        ...styles[size],
        ...(isDisabled ? styles.disabled : {}),
        ...(fullWidth ? styles.fullWidth : {}),
        ...style,
      }}
      onMouseEnter={(e) => {
        if (!isDisabled) {
          const el = e.currentTarget;
          if (variant === "primary")
            el.style.background = "var(--ion-color-primary-shade)";
          if (variant === "danger")
            el.style.background = "var(--ion-color-danger-shade, #dc2626)";
          if (variant === "secondary" || variant === "ghost")
            el.style.background = "var(--ion-background-color)";
        }
      }}
      onMouseLeave={(e) => {
        if (!isDisabled) {
          const el = e.currentTarget;
          if (style?.background) {
            el.style.background = style.background as string;
          } else {
            if (variant === "primary")
              el.style.background = "var(--ion-color-primary)";
            if (variant === "danger")
              el.style.background = "var(--ion-color-danger)";
            if (variant === "secondary" || variant === "ghost")
              el.style.background = "transparent";
          }
        }
      }}
    >
      {loading ? (
        <>
          <span
            style={{
              width: "14px",
              height: "14px",
              border: "2px solid rgba(255,255,255,0.4)",
              borderTopColor: "white",
              borderRadius: "50%",
              display: "inline-block",
              animation: "spin 0.8s linear infinite",
            }}
          />
          Memproses...
        </>
      ) : (
        children
      )}
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </button>
  );
};

export default Button;
