import React, { useState } from "react";
import { IonPage, IonContent, IonText, IonSpinner } from "@ionic/react";
import { useHistory } from "react-router-dom";
import { loginAPI } from "../services/api";
import { useAuthStore } from "../store/authStore";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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

  const inputStyle: React.CSSProperties = {
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
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    marginBottom: "6px",
    fontSize: "13px",
    fontWeight: "600",
    color: "var(--ion-text-color)",
  };

  return (
    <IonPage>
      <IonContent fullscreen style={{ "--background": "var(--hero-gradient)" } as any}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100%",
          }}
        >
          <div
            style={{
              background: "var(--card-bg)",
              borderRadius: "var(--border-radius-lg)",
              padding: "40px",
              width: "100%",
              maxWidth: "400px",
              boxShadow: "var(--card-shadow-hover)",
              margin: "16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px", justifyContent: "center" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--ion-color-primary)",
                  borderRadius: "var(--border-radius-sm)",
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
              <span style={{ fontWeight: "700", fontSize: "15px", color: "var(--ion-text-color)" }}>adhivasindo</span>
            </div>

            <div style={{ textAlign: "center", marginBottom: "28px" }}>
              <h2 style={{ fontSize: "22px", fontWeight: "700", color: "var(--ion-text-color)", marginBottom: "6px" }}>Welcome!</h2>
              <IonText color="medium">
                <p style={{ fontSize: "13px" }}>Masuk ke akun kamu untuk mulai belajar</p>
              </IonText>
            </div>

            {error && (
              <div
                style={{
                  background: "#fef2f2",
                  border: "1px solid #fecaca",
                  borderRadius: "var(--border-radius-sm)",
                  padding: "10px 14px",
                  marginBottom: "16px",
                }}
              >
                <IonText color="danger">
                  <p style={{ fontSize: "13px" }}>⚠️ {error}</p>
                </IonText>
              </div>
            )}

            <div style={{ marginBottom: "16px" }}>
              <label style={labelStyle}>Email</label>
              <input
                type="email"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={handleKeyDown}
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "var(--ion-color-primary)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border-color)")}
              />
            </div>

            <div style={{ marginBottom: "24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                <label style={labelStyle}>Password</label>
                <IonText color="primary">
                  <span style={{ fontSize: "12px", fontWeight: "600", cursor: "pointer" }}>Lupa password?</span>
                </IonText>
              </div>
              <div style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={handleKeyDown}
                  style={{ ...inputStyle, paddingRight: "44px" }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--ion-color-primary)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border-color)")}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  style={{
                    position: "absolute",
                    right: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "4px",
                    color: "var(--text-muted)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {showPassword ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <button
              disabled={loading}
              onClick={handleLogin}
              style={{
                width: "100%",
                height: "48px",
                background: loading ? "var(--ion-color-primary-shade)" : "var(--ion-color-primary)",
                color: "white",
                border: "none",
                borderRadius: "var(--border-radius-sm)",
                fontSize: "15px",
                fontWeight: "700",
                cursor: loading ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                transition: "background 0.2s",
                opacity: loading ? 0.8 : 1,
                fontFamily: "var(--ion-font-family)",
              }}
            >
              {loading ? <IonSpinner name="crescent" style={{ width: "20px", height: "20px" }} /> : "Masuk"}
            </button>

            <p style={{ textAlign: "center", marginTop: "20px", fontSize: "13px", color: "var(--text-secondary)" }}>
              Belum punya akun?{" "}
              <IonText color="primary">
                <span onClick={() => history.push("/register")} style={{ cursor: "pointer", fontWeight: "700" }}>
                  Daftar Sekarang
                </span>
              </IonText>
            </p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
