import React from "react";

interface Peserta {
  rank: number;
  name: string;
  class: string;
  modul: string;
  point: number;
}

interface RankTableProps {
  data: Peserta[];
  title?: string;
}

const rankStyle = (rank: number): React.CSSProperties => {
  if (rank === 1) return { background: "#fef9c3", color: "#854d0e" };
  if (rank === 2) return { background: "#f1f5f9", color: "#475569" };
  if (rank === 3) return { background: "#fff7ed", color: "#9a3412" };
  return { background: "transparent", color: "var(--text-secondary)" };
};

const rankEmoji = (rank: number) => {
  if (rank === 1) return "🥇";
  if (rank === 2) return "🥈";
  if (rank === 3) return "🥉";
  return rank;
};

const RankTable: React.FC<RankTableProps> = ({ data, title = "Nilai Peserta" }) => {
  return (
    <div
      style={{
        background: "var(--card-bg)",
        borderRadius: "var(--card-border-radius)",
        boxShadow: "var(--card-shadow)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: "16px 20px",
          borderBottom: "1px solid var(--border-color)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3 style={{ fontWeight: "700", fontSize: "var(--font-size-md)", color: "var(--ion-text-color)" }}>{title}</h3>
        <span style={{ fontSize: "var(--font-size-xs)", color: "var(--ion-color-primary)", fontWeight: "600", cursor: "pointer" }}>Lihat Semua →</span>
      </div>

      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "var(--font-size-sm)" }}>
          <thead>
            <tr style={{ background: "var(--ion-background-color)" }}>
              {["Rank", "Name", "Class", "Modul", "Point"].map((h) => (
                <th
                  key={h}
                  style={{
                    padding: "10px 16px",
                    textAlign: "left",
                    color: "var(--text-secondary)",
                    fontWeight: "600",
                    fontSize: "var(--font-size-xs)",
                    borderBottom: "1px solid var(--border-color)",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((p) => (
              <tr
                key={p.rank}
                style={{ borderBottom: "1px solid var(--border-color)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--ion-background-color)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <td style={{ padding: "12px 16px" }}>
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: p.rank <= 3 ? "16px" : "12px",
                      fontWeight: "700",
                      ...rankStyle(p.rank),
                    }}
                  >
                    {rankEmoji(p.rank)}
                  </div>
                </td>
                <td style={{ padding: "12px 16px", fontWeight: "600", color: "var(--ion-text-color)" }}>{p.name}</td>
                <td style={{ padding: "12px 16px", color: "var(--text-secondary)" }}>{p.modul}</td>
                <td style={{ padding: "12px 16px" }}>
                  <span
                    style={{
                      background: "#ede9fe",
                      color: "#5b21b6",
                      padding: "3px 10px",
                      borderRadius: "20px",
                      fontSize: "11px",
                      fontWeight: "600",
                    }}
                  >
                    {p.class}
                  </span>
                </td>
                <td style={{ padding: "12px 16px", fontWeight: "700", color: "var(--ion-color-primary)" }}>{p.point.toLocaleString()} Point</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RankTable;
