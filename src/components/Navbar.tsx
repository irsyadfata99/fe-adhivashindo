import React from "react";
import { useAuthStore } from "../store/authStore";

interface NavbarProps {
  title?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  title = "LEARNING MANAGEMENT SYSTEM",
}) => {
  const { user } = useAuthStore();

  return (
    <div
      style={{
        background: "var(--navbar-bg)",
        height: "var(--navbar-height)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        boxShadow: "var(--navbar-shadow)",
        borderRadius: "var(--border-radius-md)",
        marginBottom: "var(--gap-lg)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      {/* Left - Title */}
      <span
        style={{
          fontWeight: "700",
          fontSize: "var(--font-size-sm)",
          color: "var(--text-secondary)",
          letterSpacing: "1px",
        }}
      >
        {title}
      </span>

      {/* Center - Search */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "#f1f5f9",
          borderRadius: "10px",
          padding: "8px 14px",
          gap: "8px",
          width: "280px",
        }}
      >
        <span style={{ color: "var(--text-muted)", fontSize: "14px" }}>🔍</span>
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

      {/* Right - Icons + Profile */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        {/* Notification */}
        <div
          style={{
            width: "36px",
            height: "36px",
            background: "#f1f5f9",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: "16px",
            position: "relative",
          }}
        >
          🔔
          <div
            style={{
              position: "absolute",
              top: "6px",
              right: "6px",
              width: "8px",
              height: "8px",
              background: "var(--ion-color-danger)",
              borderRadius: "50%",
            }}
          />
        </div>

        {/* Message */}
        <div
          style={{
            width: "36px",
            height: "36px",
            background: "#f1f5f9",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          💬
        </div>

        {/* Profile */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              background: "var(--ion-color-primary)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "700",
              fontSize: "14px",
            }}
          >
            {user?.name?.charAt(0).toUpperCase() || "U"}
          </div>
          <div>
            <div
              style={{
                fontSize: "12px",
                fontWeight: "600",
                color: "var(--ion-text-color)",
              }}
            >
              {user?.name || "User"}
            </div>
            <div style={{ fontSize: "10px", color: "var(--text-muted)" }}>
              ⚙️
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
