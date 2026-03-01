import React, { useState } from "react";
import { IonPage, IonContent } from "@ionic/react";
import { useHistory } from "react-router-dom";
import { loginAPI } from "../services/api";
import { useAuthStore } from "../store/authStore";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { setAuth } = useAuthStore();
  const history = useHistory();

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Email dan password wajib diisi!");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await loginAPI({ email, password });
      setAuth(res.data.data.user, res.data.data.token);
      history.push("/dashboard");
    } catch {
      setError("Email atau password salah!");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            background: "var(--hero-gradient)",
          }}
        >
          {/* CARD */}
          <div
            style={{
              background: "white",
              borderRadius: "var(--border-radius-lg)",
              padding: "40px",
              width: "100%",
              maxWidth: "400px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
              margin: "16px",
            }}
          >
            {/* Logo */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "28px",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--ion-color-primary)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "800",
                  fontSize: "18px",
                  color: "white",
                }}
              >
                A
              </div>
              <span
                style={{
                  fontWeight: "700",
                  fontSize: "15px",
                  color: "var(--ion-text-color)",
                }}
              >
                adhivasindo
              </span>
            </div>

            {/* Title */}
            <div style={{ textAlign: "center", marginBottom: "28px" }}>
              <h2
                style={{
                  fontSize: "22px",
                  fontWeight: "700",
                  color: "var(--ion-text-color)",
                  marginBottom: "6px",
                }}
              >
                Welcome!
              </h2>
              <p style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
                Masuk ke akun kamu untuk mulai belajar
              </p>
            </div>

            {/* Error */}
            {error && (
              <div
                style={{
                  background: "#fef2f2",
                  border: "1px solid #fecaca",
                  borderRadius: "var(--border-radius-sm)",
                  padding: "10px 14px",
                  marginBottom: "16px",
                  color: "#dc2626",
                  fontSize: "13px",
                }}
              >
                ⚠️ {error}
              </div>
            )}

            {/* Email */}
            <div style={{ marginBottom: "16px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "6px",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "var(--ion-text-color)",
                }}
              >
                Email
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={handleKeyDown}
                style={{
                  width: "100%",
                  padding: "11px 14px",
                  borderRadius: "var(--border-radius-sm)",
                  border: "1.5px solid var(--border-color)",
                  fontSize: "14px",
                  outline: "none",
                  boxSizing: "border-box",
                  fontFamily: "var(--ion-font-family)",
                  color: "var(--ion-text-color)",
                  background: "white",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#4f46e5")}
                onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
              />
            </div>

            {/* Password */}
            <div style={{ marginBottom: "24px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "6px",
                }}
              >
                <label
                  style={{
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "var(--ion-text-color)",
                  }}
                >
                  Password
                </label>
                <span
                  style={{
                    fontSize: "12px",
                    color: "var(--ion-color-primary)",
                    cursor: "pointer",
                    fontWeight: "600",
                  }}
                >
                  Lupa password?
                </span>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
                style={{
                  width: "100%",
                  padding: "11px 14px",
                  borderRadius: "var(--border-radius-sm)",
                  border: "1.5px solid var(--border-color)",
                  fontSize: "14px",
                  outline: "none",
                  boxSizing: "border-box",
                  fontFamily: "var(--ion-font-family)",
                  color: "var(--ion-text-color)",
                  background: "white",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#4f46e5")}
                onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
              />
            </div>

            {/* Button */}
            <button
              onClick={handleLogin}
              disabled={loading}
              style={{
                width: "100%",
                padding: "13px",
                borderRadius: "var(--border-radius-sm)",
                background: loading ? "#a5b4fc" : "var(--ion-color-primary)",
                color: "white",
                border: "none",
                fontSize: "15px",
                fontWeight: "700",
                cursor: loading ? "not-allowed" : "pointer",
                fontFamily: "var(--ion-font-family)",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => {
                if (!loading)
                  (e.target as HTMLButtonElement).style.background = "#4338ca";
              }}
              onMouseLeave={(e) => {
                if (!loading)
                  (e.target as HTMLButtonElement).style.background = "#4f46e5";
              }}
            >
              {loading ? "Memproses..." : "Masuk"}
            </button>

            {/* Register link */}
            <p
              style={{
                textAlign: "center",
                marginTop: "20px",
                fontSize: "13px",
                color: "var(--text-secondary)",
              }}
            >
              Belum punya akun?{" "}
              <span
                onClick={() => history.push("/register")}
                style={{
                  color: "var(--ion-color-primary)",
                  cursor: "pointer",
                  fontWeight: "700",
                }}
              >
                Daftar Sekarang
              </span>
            </p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
