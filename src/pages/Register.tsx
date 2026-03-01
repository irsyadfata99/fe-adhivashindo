import React, { useState } from "react";
import { IonPage, IonContent } from "@ionic/react";
import { useHistory } from "react-router-dom";
import { registerAPI } from "../services/api";
import { useAuthStore } from "../store/authStore";
import Button from "../components/Button";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { setAuth } = useAuthStore();
  const history = useHistory();

  const handleRegister = async () => {
    if (!name || !email || !password) {
      setError("Semua field wajib diisi!");
      return;
    }
    if (password.length < 6) {
      setError("Password minimal 6 karakter!");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await registerAPI({ name, email, password });
      setAuth(res.data.data.user, res.data.data.token);
      history.push("/dashboard");
    } catch (err: any) {
      const msg = err.response?.data?.message;
      if (msg === "Email already registered.") {
        setError("Email sudah terdaftar!");
      } else {
        setError("Registrasi gagal. Coba lagi.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleRegister();
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
              background: "var(--card-bg)",
              borderRadius: "var(--border-radius-lg)",
              padding: "40px",
              width: "100%",
              maxWidth: "400px",
              boxShadow: "var(--card-shadow-hover)",
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
                Buat Akun
              </h2>
              <p style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
                Daftar sekarang dan mulai belajar
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
                  color: "var(--ion-color-danger)",
                  fontSize: "13px",
                }}
              >
                ⚠️ {error}
              </div>
            )}

            {/* Name */}
            <div style={{ marginBottom: "16px" }}>
              <label style={labelStyle}>Nama Lengkap</label>
              <input
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={handleKeyDown}
                style={inputStyle}
                onFocus={(e) =>
                  (e.target.style.borderColor = "var(--ion-color-primary)")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "var(--border-color)")
                }
              />
            </div>

            {/* Email */}
            <div style={{ marginBottom: "16px" }}>
              <label style={labelStyle}>Email</label>
              <input
                type="email"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={handleKeyDown}
                style={inputStyle}
                onFocus={(e) =>
                  (e.target.style.borderColor = "var(--ion-color-primary)")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "var(--border-color)")
                }
              />
            </div>

            {/* Password */}
            <div style={{ marginBottom: "24px" }}>
              <label style={labelStyle}>Password</label>
              <div style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Min. 8 karakter"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={handleKeyDown}
                  style={{ ...inputStyle, paddingRight: "44px" }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "var(--ion-color-primary)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "var(--border-color)")
                  }
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
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  ) : (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Button */}
            <Button
              fullWidth
              size="lg"
              loading={loading}
              onClick={handleRegister}
            >
              Daftar Sekarang
            </Button>

            {/* Login link */}
            <p
              style={{
                textAlign: "center",
                marginTop: "20px",
                fontSize: "13px",
                color: "var(--text-secondary)",
              }}
            >
              Sudah punya akun?{" "}
              <span
                onClick={() => history.push("/login")}
                style={{
                  color: "var(--ion-color-primary)",
                  cursor: "pointer",
                  fontWeight: "700",
                }}
              >
                Masuk
              </span>
            </p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;
