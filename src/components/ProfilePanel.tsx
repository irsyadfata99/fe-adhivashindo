import React, { useState } from "react";
import { useAuthStore } from "../store/authStore";

const IconSettings = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DAYS_SHORT = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const HorizontalCalendar: React.FC = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const isCurrentMonth = currentMonth === today.getMonth() && currentYear === today.getFullYear();
  const anchorDay = isCurrentMonth ? today.getDate() : 1;
  const anchorDow = new Date(currentYear, currentMonth, anchorDay).getDay();
  const weekStart = anchorDay - anchorDow;
  const weekDays = Array.from({ length: 7 }, (_, i) => weekStart + i);
  const isToday = (d: number) => d === today.getDate() && isCurrentMonth;

  return (
    <div style={{ background: "var(--sidebar-bg)", borderRadius: "var(--card-border-radius)", padding: "14px 10px" }}>
      {/* Month header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
        <button
          onClick={() => {
            if (currentMonth === 0) {
              setCurrentMonth(11);
              setCurrentYear((y) => y - 1);
            } else setCurrentMonth((m) => m - 1);
          }}
          style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.6)", fontSize: "20px", padding: "0 4px", lineHeight: "1" }}
        >
          &#8249;
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
          style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.6)", fontSize: "20px", padding: "0 4px", lineHeight: "1" }}
        >
          &#8250;
        </button>
      </div>

      {/* 7 day columns */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "4px" }}>
        {weekDays.map((d, i) => {
          const valid = d >= 1 && d <= daysInMonth;
          const active = isToday(d) && valid;
          return (
            <div
              key={i}
              style={{
                // OUTER BOX — solid white background
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
                borderRadius: "10px",
                padding: "7px 3px",
                minHeight: "56px",
                background: "rgba(255,255,255,0.92)",
                cursor: valid ? "pointer" : "default",
                transition: "all 0.15s",
                opacity: valid ? 1 : 0.3,
              }}
            >
              {/* Day label — primary color */}
              <span
                style={{
                  fontSize: "9px",
                  fontWeight: "600",
                  color: active ? "var(--ion-color-primary)" : "var(--text-secondary)",
                  letterSpacing: "0.2px",
                }}
              >
                {DAYS_SHORT[i]}
              </span>

              {/* INNER BOX — number */}
              <div
                style={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  // active = primary bg + white text; inactive = transparent + primary text
                  background: active ? "var(--ion-color-primary)" : "transparent",
                  transition: "background 0.15s",
                }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: active ? "700" : "500",
                    color: active ? "white" : "var(--ion-color-primary)",
                  }}
                >
                  {valid ? d : ""}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const scheduleData = [
  { title: "Storytelling dalam Pemasaran", time: "09:00 - 11:00 With mr. Jam", color: "#3b82f6" },
  { title: "Pemrograman Frontend Modern", time: "12:00 - 14:00 With mr. Firman", color: "#f97316" },
  { title: "Pengembangan API", time: "14:30 - 15:30 With mr. Faris", color: "#eab308" },
];

const ScheduleItem: React.FC<{ title: string; time: string; color: string }> = ({ title, time, color }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: "10px 0",
      borderBottom: "1px solid var(--border-color)",
    }}
  >
    <div style={{ width: "40px", height: "40px", borderRadius: "8px", background: color, flexShrink: 0 }} />
    <div style={{ flex: 1 }}>
      <div style={{ fontSize: "13px", fontWeight: "600", color: "var(--ion-text-color)", marginBottom: "2px", lineHeight: "1.3" }}>{title}</div>
      <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>{time}</div>
    </div>
    <span style={{ color: "var(--text-muted)", fontSize: "16px" }}>›</span>
  </div>
);

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

  const displayName = user?.name ?? "User";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {/* ── Profile — flat ── */}
      <div style={{ paddingTop: "8px", position: "relative", textAlign: "center" }}>
        {/* Settings */}
        <div
          style={{ position: "absolute", top: "0", right: "0", cursor: "pointer", padding: "5px", borderRadius: "8px", transition: "background 0.15s" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "var(--ion-background-color)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
          <IconSettings />
        </div>

        {/* Avatar */}
        <div
          style={{
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 14px",
            fontSize: "24px",
            fontWeight: "700",
            color: "white",
            boxShadow: "0 4px 16px rgba(99,102,241,0.35)",
            border: "3px solid white",
          }}
        >
          {initials}
        </div>

        {/* Single line: SELAMAT DATANG, [NAME] */}
        <div
          style={{
            fontSize: "13px",
            fontWeight: "700",
            color: "var(--ion-text-color)",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            marginBottom: "4px",
            letterSpacing: "0.3px",
          }}
        >
          SELAMAT DATANG, {displayName.toUpperCase()}
        </div>
        <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>Di LMS by Adhivasindo</div>
      </div>

      {/* ── Calendar ── */}
      <HorizontalCalendar />

      {/* ── Jadwal Pemateri ── */}
      <div style={{ padding: "0 2px" }}>
        <div style={{ fontSize: "11px", fontWeight: "700", color: "var(--ion-text-color)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "4px" }}>JADWAL PEMATERI</div>
        {scheduleData.map((s, i) => (
          <ScheduleItem key={i} title={s.title} time={s.time} color={s.color} />
        ))}
      </div>

      {/* ── Promo Banner ── */}
      <div style={{ borderRadius: "var(--card-border-radius)", overflow: "hidden", lineHeight: "0" }}>
        <img
          src="https://placehold.co/272x140/0f172a/22d3ee?text=TECHNOLOGY"
          alt="Technology Banner"
          style={{ width: "100%", height: "140px", objectFit: "cover", display: "block" }}
          onError={(e) => {
            const parent = e.currentTarget.parentElement!;
            e.currentTarget.style.display = "none";
            parent.style.cssText += "background:linear-gradient(135deg,#0f172a,#1e3a5f,#0891b2);height:140px;display:flex;align-items:center;justify-content:center;";
            parent.innerHTML = `<div style="text-align:center"><div style="font-size:32px">💻</div><div style="font-size:11px;color:rgba(255,255,255,0.7);font-weight:600;letter-spacing:0.5px;margin-top:6px">TECHNOLOGY</div></div>`;
          }}
        />
      </div>
    </div>
  );
};

export default ProfilePanel;
