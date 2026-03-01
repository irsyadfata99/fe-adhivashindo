import React from "react";
import Button from "./Button";

interface ContentCardProps {
  id: number;
  title: string;
  body: string;
  status: "draft" | "published";
  authorName?: string;
  createdAt?: string;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
  onClick?: (id: number) => void;
}

const ContentCard: React.FC<ContentCardProps> = ({
  id,
  title,
  body,
  status,
  authorName,
  createdAt,
  onEdit,
  onDelete,
  onClick,
}) => {
  const truncate = (text: string, max: number) =>
    text.length > max ? text.substring(0, max) + "..." : text;

  return (
    <div
      style={{
        background: "var(--card-bg)",
        borderRadius: "var(--card-border-radius)",
        boxShadow: "var(--card-shadow)",
        padding: "20px",
        cursor: onClick ? "pointer" : "default",
        transition: "transform 0.2s, box-shadow 0.2s",
        border: "1px solid var(--border-color)",
      }}
      onMouseEnter={(e) => {
        if (onClick) {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow =
            "var(--card-shadow-hover, 0 6px 20px rgba(0,0,0,0.1))";
        }
      }}
      onMouseLeave={(e) => {
        if (onClick) {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "var(--card-shadow)";
        }
      }}
      onClick={() => onClick?.(id)}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "10px",
        }}
      >
        <h3
          style={{
            fontSize: "var(--font-size-md)",
            fontWeight: "700",
            color: "var(--ion-text-color)",
            flex: 1,
            marginRight: "12px",
          }}
        >
          {title}
        </h3>
        {/* Status badge */}
        <span
          style={{
            background: status === "published" ? "#dcfce7" : "#fef9c3",
            color: status === "published" ? "#166534" : "#854d0e",
            fontSize: "11px",
            fontWeight: "700",
            padding: "3px 10px",
            borderRadius: "20px",
            flexShrink: 0,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          {status}
        </span>
      </div>

      {/* Body preview */}
      <p
        style={{
          fontSize: "var(--font-size-sm)",
          color: "var(--text-secondary)",
          lineHeight: "1.6",
          marginBottom: "16px",
        }}
      >
        {truncate(body, 120)}
      </p>

      {/* Meta */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        <div
          style={{
            fontSize: "var(--font-size-xs)",
            color: "var(--text-muted)",
          }}
        >
          {authorName && <span>👤 {authorName}</span>}
          {createdAt && (
            <span style={{ marginLeft: authorName ? "12px" : 0 }}>
              📅{" "}
              {new Date(createdAt).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
          )}
        </div>

        {/* Actions */}
        {(onEdit || onDelete) && (
          <div
            style={{ display: "flex", gap: "8px" }}
            onClick={(e) => e.stopPropagation()}
          >
            {onEdit && (
              <Button variant="secondary" size="sm" onClick={() => onEdit(id)}>
                ✏️ Edit
              </Button>
            )}
            {onDelete && (
              <Button variant="danger" size="sm" onClick={() => onDelete(id)}>
                🗑️ Hapus
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentCard;
