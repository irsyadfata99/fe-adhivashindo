import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

// SVG Icons — sesuai design
const IconDashboard = ({ active }: { active: boolean }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect
      x="3"
      y="3"
      width="7"
      height="7"
      rx="1.5"
      fill={active ? "#4f46e5" : "#94a3b8"}
    />
    <rect
      x="14"
      y="3"
      width="7"
      height="7"
      rx="1.5"
      fill={active ? "#4f46e5" : "#94a3b8"}
    />
    <rect
      x="3"
      y="14"
      width="7"
      height="7"
      rx="1.5"
      fill={active ? "#4f46e5" : "#94a3b8"}
    />
    <rect
      x="14"
      y="14"
      width="7"
      height="7"
      rx="1.5"
      fill={active ? "#4f46e5" : "#94a3b8"}
    />
  </svg>
);

const IconModul = ({ active }: { active: boolean }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke={active ? "#4f46e5" : "#94a3b8"}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="17" rx="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="16" y1="2" x2="16" y2="6" />
  </svg>
);

const IconPeserta = ({ active }: { active: boolean }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke={active ? "#4f46e5" : "#94a3b8"}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconGroupChat = ({ active }: { active: boolean }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke={active ? "#4f46e5" : "#94a3b8"}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const IconPemateri = ({ active }: { active: boolean }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke={active ? "#4f46e5" : "#94a3b8"}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const IconSettings = ({ active }: { active: boolean }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke={active ? "#4f46e5" : "#94a3b8"}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const IconKalender = ({ active }: { active: boolean }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke={active ? "#4f46e5" : "#94a3b8"}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="17" rx="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="16" y1="2" x2="16" y2="6" />
  </svg>
);

const IconLogout = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#f87171"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
    <line x1="12" y1="2" x2="12" y2="12" />
  </svg>
);

const menuItems = [
  {
    label: "Dashboard",
    icon: (a: boolean) => <IconDashboard active={a} />,
    path: "/dashboard",
  },
  {
    label: "Modul",
    icon: (a: boolean) => <IconModul active={a} />,
    path: "/modul",
  },
  {
    label: "Peserta",
    icon: (a: boolean) => <IconPeserta active={a} />,
    path: "/peserta",
  },
  {
    label: "Group Chat",
    icon: (a: boolean) => <IconGroupChat active={a} />,
    path: "/chat",
  },
  {
    label: "Pemateri",
    icon: (a: boolean) => <IconPemateri active={a} />,
    path: "/pemateri",
  },
];

const profileItems = [
  {
    label: "Settings",
    icon: (a: boolean) => <IconSettings active={a} />,
    path: "/settings",
  },
  {
    label: "Kalender",
    icon: (a: boolean) => <IconKalender active={a} />,
    path: "/kalender",
  },
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

  const renderMenuItem = (item: (typeof menuItems)[0], showStar = false) => {
    const active = isActive(item.path);
    return (
      <div
        key={item.path}
        onClick={() => history.push(item.path)}
        onMouseEnter={(e) => {
          if (!active) {
            e.currentTarget.style.background = "var(--sidebar-item-hover-bg)";
          }
        }}
        onMouseLeave={(e) => {
          if (!active) {
            e.currentTarget.style.background = "transparent";
          }
        }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "10px 16px",
          margin: "2px 12px",
          borderRadius: "var(--border-radius-sm)",
          cursor: "pointer",
          fontSize: "var(--font-size-sm)",
          fontWeight: active ? "600" : "400",
          color: active ? "var(--ion-text-color)" : "var(--sidebar-text)",
          background: active ? "white" : "transparent",
          transition: "all 0.2s ease",
          boxShadow: active ? "0 2px 8px rgba(0,0,0,0.1)" : "none",
        }}
      >
        <span
          style={{
            width: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {item.icon(active)}
        </span>
        <span style={{ flex: 1 }}>{item.label}</span>
        {active && showStar && <span style={{ fontSize: "14px" }}>⭐</span>}
      </div>
    );
  };

  return (
    <div
      style={{
        width: "100%",
        background: "var(--sidebar-bg)",
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        paddingTop: "8px",
        borderTopRightRadius: "24px",
      }}
    >
      {/* Main Menu */}
      <div style={{ padding: "8px 0", flex: 1 }}>
        {menuItems.map((item) => renderMenuItem(item, true))}

        {/* Profile Section label */}
        <div
          style={{
            fontSize: "10px",
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            color: "var(--text-muted)",
            padding: "20px 28px 8px",
            fontWeight: "700",
          }}
        >
          Profile
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.08)",
            margin: "0 20px 8px",
          }}
        />

        {profileItems.map((item) => renderMenuItem(item, false))}

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.08)",
            margin: "16px 20px 8px",
          }}
        />

        {/* Logout — inside menu flow, not pinned to bottom */}
        <div
          onClick={handleLogout}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(239,68,68,0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "10px 16px",
            margin: "2px 12px",
            borderRadius: "var(--border-radius-sm)",
            cursor: "pointer",
            color: "#f87171",
            fontSize: "var(--font-size-sm)",
            transition: "all 0.2s ease",
          }}
        >
          <span
            style={{
              width: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconLogout />
          </span>
          <span>Log Out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
