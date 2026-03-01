import React, { useState } from "react";

const DAYS = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
const MONTHS = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

const CalendarWidget: React.FC = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1),
  );

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const isToday = (d: number) =>
    d === today.getDate() &&
    month === today.getMonth() &&
    year === today.getFullYear();

  return (
    <div
      style={{
        background: "var(--card-bg)",
        borderRadius: "var(--card-border-radius)",
        padding: "16px",
        boxShadow: "var(--card-shadow)",
        marginBottom: "var(--gap-md)",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "14px",
        }}
      >
        <button
          onClick={prevMonth}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            color: "var(--text-secondary)",
            padding: "4px",
          }}
        >
          ‹
        </button>
        <span
          style={{
            fontWeight: "700",
            fontSize: "var(--font-size-sm)",
            color: "var(--ion-text-color)",
          }}
        >
          {MONTHS[month]} {year}
        </span>
        <button
          onClick={nextMonth}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            color: "var(--text-secondary)",
            padding: "4px",
          }}
        >
          ›
        </button>
      </div>

      {/* Day headers */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "2px",
          marginBottom: "6px",
        }}
      >
        {DAYS.map((d) => (
          <div
            key={d}
            style={{
              textAlign: "center",
              fontSize: "10px",
              fontWeight: "700",
              color: "var(--text-muted)",
              padding: "4px 0",
            }}
          >
            {d}
          </div>
        ))}
      </div>

      {/* Days grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "2px",
        }}
      >
        {cells.map((d, i) => (
          <div
            key={i}
            style={{
              textAlign: "center",
              padding: "6px 0",
              fontSize: "12px",
              borderRadius: "50%",
              fontWeight: isToday(d!) ? "700" : "400",
              background: isToday(d!)
                ? "var(--ion-color-primary)"
                : "transparent",
              color: isToday(d!)
                ? "white"
                : d
                  ? "var(--ion-text-color)"
                  : "transparent",
              cursor: d ? "pointer" : "default",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => {
              if (d && !isToday(d))
                e.currentTarget.style.background = "#f1f5f9";
            }}
            onMouseLeave={(e) => {
              if (d && !isToday(d))
                e.currentTarget.style.background = "transparent";
            }}
          >
            {d || ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarWidget;
