import React from "react";
import { PageLayout, HeroBanner, ModuleCard, RankTable } from "../components/Index";

const modulData = [
  {
    variant: "pemrograman" as const,
    label: "PEMROGRAMAN",
    items: ["Pemrograman Frontend Modern dengan React dan angular", "Pengembangan API Berstandar Industri dengan GraphQL dan REST", "Menerapkan Clean Code dengan Design Pattern dalam Pengembangan Software"],
  },
  {
    variant: "creative" as const,
    label: "CREATIVE MARKETING",
    items: ["Storytelling dalam Pemasaran: Mengubah Data menjadi Cerita yang Menginspirasi", "Pemasaran Viral: Bagaimana Menciptakan Konten yang Cepat Menyebar", "Memaksimalkan User-Generated: Content dalam Strategi Pemasaran Kreatif"],
  },
  {
    variant: "sdm" as const,
    label: "MANAGEMENT SDM",
    items: ["Storytelling dalam Pemasaran: Mengubah Data menjadi Cerita yang Menginspirasi", "Pemasaran Viral: Bagaimana Menciptakan Konten yang Cepat Menyebar", "Memaksimalkan User-Generated: Content dalam Strategi Pemasaran Kreatif"],
  },
];

const rankData = [{ rank: 1, name: "Parijo faiza", class: "L1", modul: "PEMROGRAMAN", point: 1234 }];

const Dashboard: React.FC = () => {
  return (
    <PageLayout title="LEARNING MANAGEMENT SYSTEM">
      <HeroBanner
        badge="PEMROGRAMAN"
        title="Pemrograman Frontend Modern dengan React dan Angular"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        author="Josep"
        date="14-06-2025"
        actionLabel="MULAI LEARNING"
        onAction={() => {}}
      />

      <div style={{ marginBottom: "var(--gap-lg)" }}>
        <h2
          style={{
            fontSize: "var(--font-size-md)",
            fontWeight: "700",
            color: "var(--ion-text-color)",
            marginBottom: "16px",
            letterSpacing: "0.3px",
          }}
        >
          MODUL KOMPETENSI
        </h2>

        <div style={{ display: "flex", gap: "16px" }}>
          {modulData.map((m, i) => (
            <ModuleCard key={i} variant={m.variant} label={m.label} items={m.items} highlightIndex={m.variant === "pemrograman" ? 1 : -1} onClick={() => {}} />
          ))}
        </div>
      </div>

      <RankTable data={rankData} title="Nilai Peserta" />
    </PageLayout>
  );
};

export default Dashboard;
