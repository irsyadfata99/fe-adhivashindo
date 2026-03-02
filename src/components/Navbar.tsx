import React from "react";

interface NavbarProps {
  title?: string;
}

const IconBell = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const IconMessage = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const Navbar: React.FC<NavbarProps> = ({ title = "LEARNING MANAGEMENT SYSTEM" }) => {
  return (
    <div
      style={{
        background: "var(--navbar-bg)",
        height: "var(--navbar-height)",
        display: "flex",
        alignItems: "center",
        padding: "0 28px",
        gap: "16px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontWeight: "800",
            fontSize: "16px",
            letterSpacing: "0.2px",
          }}
        >
          <span style={{ color: "#1e293b" }}>adhivas</span>
          <span style={{ color: "var(--ion-color-primary)" }}>indo</span>
        </span>
      </div>

      <div
        style={{
          width: "1px",
          height: "24px",
          background: "var(--border-color)",
          flexShrink: 0,
        }}
      />

      <span
        style={{
          fontWeight: "700",
          fontSize: "var(--font-size-sm)",
          color: "var(--text-secondary)",
          letterSpacing: "1.5px",
          flexShrink: 0,
        }}
      >
        {title}
      </span>

      <div style={{ flex: 1 }} />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "var(--ion-background-color)",
          borderRadius: "10px",
          padding: "8px 14px",
          gap: "8px",
          width: "220px",
          flexShrink: 0,
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          placeholder="Search class..."
          style={{
            border: "none",
            background: "transparent",
            outline: "none",
            fontSize: "13px",
            color: "var(--ion-text-color)",
            fontFamily: "var(--ion-font-family)",
            width: "100%",
          }}
        />
      </div>

      <div
        style={{
          position: "relative",
          cursor: "pointer",
          width: "36px",
          height: "36px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
          transition: "background 0.15s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "var(--ion-background-color)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
      >
        <IconBell />
        <div
          style={{
            position: "absolute",
            top: "6px",
            right: "6px",
            width: "7px",
            height: "7px",
            background: "var(--ion-color-danger)",
            borderRadius: "50%",
            border: "1.5px solid white",
          }}
        />
      </div>

      <div
        style={{
          position: "relative",
          cursor: "pointer",
          width: "36px",
          height: "36px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
          transition: "background 0.15s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "var(--ion-background-color)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
      >
        <IconMessage />
        <div
          style={{
            position: "absolute",
            top: "6px",
            right: "6px",
            width: "7px",
            height: "7px",
            background: "var(--ion-color-danger)",
            borderRadius: "50%",
            border: "1.5px solid white",
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
