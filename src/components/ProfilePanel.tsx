import React, { useState } from "react";
import { useAuthStore } from "../store/authStore";
import JadwalItem from "./ScheduleItem";

const IconSettings = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--text-muted)"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const DAYS_SHORT = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

// Horizontal calendar — shows 7 days centered around today
const HorizontalCalendar: React.FC = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  // Get all days in current month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Build week that contains today (or first week if different month)
  const isCurrentMonth =
    currentMonth === today.getMonth() && currentYear === today.getFullYear();
  const anchorDay = isCurrentMonth ? today.getDate() : 1;
  const anchorDow = new Date(currentYear, currentMonth, anchorDay).getDay();

  // 7 days starting from Sunday of the anchor week
  const weekStart = anchorDay - anchorDow;
  const weekDays = Array.from({ length: 7 }, (_, i) => weekStart + i);

  const isToday = (d: number) => d === today.getDate() && isCurrentMonth;

  return (
    <div
      style={{
        background: "var(--sidebar-bg)",
        borderRadius: "var(--card-border-radius)",
        padding: "16px 20px",
      }}
    >
      {/* Month header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <button
          onClick={() => {
            if (currentMonth === 0) {
              setCurrentMonth(11);
              setCurrentYear((y) => y - 1);
            } else setCurrentMonth((m) => m - 1);
          }}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "rgba(255,255,255,0.7)",
            fontSize: "18px",
            padding: "0 4px",
          }}
        >
          ‹
        </button>
        <span style={{ color: "white", fontWeight: "700", fontSize: "13px" }}>
          {MONTHS[currentMonth]} {currentYear}
        </span>
        <button
          onClick={() => {
            if (currentMonth === 11) {
              setCurrentMonth(0);
              setCurrentYear((y) => y + 1);
            } else setCurrentMonth((m) => m + 1);
          }}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "rgba(255,255,255,0.7)",
            fontSize: "18px",
            padding: "0 4px",
          }}
        >
          ›
        </button>
      </div>

      {/* 7 day columns */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "4px",
        }}
      >
        {weekDays.map((d, i) => {
          const valid = d >= 1 && d <= daysInMonth;
          const active = isToday(d) && valid;
          return (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span
                style={{
                  fontSize: "10px",
                  color: "rgba(255,255,255,0.45)",
                  fontWeight: "600",
                }}
              >
                {DAYS_SHORT[i]}
              </span>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  fontWeight: active ? "700" : "400",
                  background: active
                    ? "var(--ion-color-primary)"
                    : "transparent",
                  color: valid
                    ? active
                      ? "white"
                      : "rgba(255,255,255,0.75)"
                    : "transparent",
                  cursor: valid ? "pointer" : "default",
                }}
              >
                {valid ? d : ""}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const scheduleData = [
  {
    title: "Storytelling dalam Pemasaran",
    time: "09:00 - 11:00 With mr. Jam",
    color: "#3b82f6",
  },
  {
    title: "Pemrograman Frontend Modern",
    time: "12:00 - 14:00 With mr. Firman",
    color: "#f97316",
  },
  {
    title: "Pengembangan API",
    time: "14:30 - 15:30 With mr. Faris",
    color: "#eab308",
  },
];

const ProfilePanel: React.FC = () => {
  const { user } = useAuthStore();

  const initials = user?.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "U";

  return (
    <div
      style={{ display: "flex", flexDirection: "column", gap: "var(--gap-md)" }}
    >
      {/* ── Profile Card ── */}
      <div
        style={{
          background: "var(--card-bg)",
          borderRadius: "var(--card-border-radius)",
          boxShadow: "var(--card-shadow)",
          padding: "24px 20px 20px",
          position: "relative",
          textAlign: "center",
        }}
      >
        {/* Settings icon */}
        <div
          style={{
            position: "absolute",
            top: "14px",
            right: "14px",
            cursor: "pointer",
            padding: "6px",
            borderRadius: "8px",
            transition: "background 0.15s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "var(--ion-background-color)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "transparent")
          }
        >
          <IconSettings />
        </div>

        {/* Avatar */}
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: "var(--ion-color-primary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 16px",
            fontSize: "28px",
            fontWeight: "700",
            color: "white",
            boxShadow: "0 4px 16px rgba(79,70,229,0.35)",
          }}
        >
          {initials}
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "15px",
            fontWeight: "700",
            color: "var(--ion-text-color)",
            letterSpacing: "0.3px",
            marginBottom: "4px",
            lineHeight: "1.4",
          }}
        >
          SELAMAT DATANG,{" "}
          <span style={{ display: "block" }}>
            {user?.name?.toUpperCase() ?? "USER"}
          </span>
        </div>
        <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>
          Di LMS by Adhivasindo
        </div>
      </div>

      {/* ── Horizontal Calendar ── */}
      <HorizontalCalendar />

      {/* ── Jadwal Pemateri ── */}
      <div
        style={{
          background: "var(--card-bg)",
          borderRadius: "var(--card-border-radius)",
          boxShadow: "var(--card-shadow)",
          padding: "16px 20px",
        }}
      >
        <div
          style={{
            fontSize: "12px",
            fontWeight: "700",
            color: "var(--ion-text-color)",
            letterSpacing: "1px",
            marginBottom: "8px",
          }}
        >
          JADWAL PEMATERI
        </div>
        {scheduleData.map((s, i) => (
          <JadwalItem key={i} title={s.title} time={s.time} color={s.color} />
        ))}
      </div>

      {/* ── Promo Banner Image ── */}
      <div
        style={{
          borderRadius: "var(--card-border-radius)",
          overflow: "hidden",
          height: "140px",
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0891b2 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          boxShadow: "var(--card-shadow)",
        }}
      >
        {/* decorative circles */}
        <div
          style={{
            position: "absolute",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            background: "rgba(8,145,178,0.3)",
            top: "-20px",
            right: "-20px",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            background: "rgba(8,145,178,0.2)",
            bottom: "-10px",
            left: "20px",
          }}
        />
        {/* Tech icon */}
        <div style={{ textAlign: "center", zIndex: 1 }}>
          <div style={{ fontSize: "36px", marginBottom: "4px" }}>💻</div>
          <div
            style={{
              fontSize: "11px",
              color: "rgba(255,255,255,0.7)",
              fontWeight: "600",
              letterSpacing: "0.5px",
            }}
          >
            TECHNOLOGY
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePanel;
