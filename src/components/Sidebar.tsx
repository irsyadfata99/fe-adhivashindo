import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

interface MenuItem {
  label: string;
  icon: string;
  path: string;
}

const menuItems: MenuItem[] = [
  { label: "Dashboard", icon: "⊞", path: "/dashboard" },
  { label: "Modul", icon: "📚", path: "/modul" },
  { label: "Peserta", icon: "👥", path: "/peserta" },
  { label: "Group Chat", icon: "💬", path: "/chat" },
  { label: "Pemateri", icon: "👤", path: "/pemateri" },
];

const profileItems: MenuItem[] = [
  { label: "Settings", icon: "⚙️", path: "/settings" },
  { label: "Kalender", icon: "📅", path: "/kalender" },
];

const Sidebar: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const { logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    history.push("/login");
  };

  const isActive = (path: string) => location.pathname === path;

  const menuItemStyle = (active: boolean): React.CSSProperties => ({
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "10px 16px",
    margin: "2px 12px",
    borderRadius: "var(--border-radius-sm)",
    cursor: "pointer",
    fontSize: "var(--font-size-sm)",
    fontWeight: active ? "600" : "400",
    color: active ? "var(--sidebar-text-active)" : "var(--sidebar-text)",
    background: active ? "var(--sidebar-item-active-bg)" : "transparent",
    transition: "all 0.2s ease",
  });

  return (
    <div
      style={{
        width: "var(--sidebar-width)",
        background: "var(--sidebar-bg)",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        display: "flex",
        flexDirection: "column",
        zIndex: 100,
        overflowY: "auto",
      }}
    >
      {/* Logo */}
      <div
        style={{
          padding: "24px 20px 20px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "32px",
              height: "32px",
              background: "var(--ion-color-primary)",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "800",
              fontSize: "16px",
              color: "white",
            }}
          >
            A
          </div>
          <div>
            <div
              style={{ color: "white", fontWeight: "700", fontSize: "13px" }}
            >
              adhivasindo
            </div>
            <div
              style={{
                color: "var(--sidebar-text)",
                fontSize: "10px",
                opacity: 0.7,
              }}
            >
              LEARNING MANAGEMENT SYSTEM
            </div>
          </div>
        </div>
      </div>

      {/* Main Menu */}
      <div style={{ padding: "16px 0", flex: 1 }}>
        {menuItems.map((item) => (
          <div
            key={item.path}
            style={menuItemStyle(isActive(item.path))}
            onClick={() => history.push(item.path)}
            onMouseEnter={(e) => {
              if (!isActive(item.path)) {
                e.currentTarget.style.background =
                  "var(--sidebar-item-hover-bg)";
                e.currentTarget.style.color = "white";
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive(item.path)) {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--sidebar-text)";
              }
            }}
          >
            <span
              style={{ fontSize: "16px", width: "20px", textAlign: "center" }}
            >
              {item.icon}
            </span>
            <span>{item.label}</span>
          </div>
        ))}

        {/* Profile Section */}
        <div
          style={{
            fontSize: "10px",
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            color: "var(--text-muted)",
            padding: "20px 20px 8px",
            fontWeight: "600",
          }}
        >
          Profile
        </div>

        {profileItems.map((item) => (
          <div
            key={item.path}
            style={menuItemStyle(isActive(item.path))}
            onClick={() => history.push(item.path)}
            onMouseEnter={(e) => {
              if (!isActive(item.path)) {
                e.currentTarget.style.background =
                  "var(--sidebar-item-hover-bg)";
                e.currentTarget.style.color = "white";
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive(item.path)) {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--sidebar-text)";
              }
            }}
          >
            <span
              style={{ fontSize: "16px", width: "20px", textAlign: "center" }}
            >
              {item.icon}
            </span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      {/* Logout */}
      <div
        style={{
          padding: "12px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          onClick={handleLogout}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "10px 16px",
            borderRadius: "var(--border-radius-sm)",
            cursor: "pointer",
            color: "#f87171",
            fontSize: "var(--font-size-sm)",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(239,68,68,0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
          }}
        >
          <span style={{ fontSize: "16px" }}>🚪</span>
          <span>Log Out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
