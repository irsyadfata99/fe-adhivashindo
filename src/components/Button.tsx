import React from "react";
import { IonButton, IonSpinner } from "@ionic/react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
}

const variantToIonColor: Record<string, string> = {
  primary: "primary",
  secondary: "primary",
  danger: "danger",
  ghost: "medium",
};

const variantToFill: Record<string, "solid" | "outline" | "clear"> = {
  primary: "solid",
  secondary: "outline",
  danger: "solid",
  ghost: "outline",
};

const sizeToIon: Record<string, "small" | "default" | "large"> = {
  sm: "small",
  md: "default",
  lg: "large",
};

const Button: React.FC<ButtonProps> = ({ children, variant = "primary", size = "md", loading = false, disabled = false, fullWidth = false, onClick, type = "button", style }) => {
  return (
    <IonButton expand={fullWidth ? "block" : undefined} color={variantToIonColor[variant]} fill={variantToFill[variant]} size={sizeToIon[size]} disabled={disabled || loading} onClick={onClick} type={type} style={style}>
      {loading ? (
        <>
          <IonSpinner name="crescent" style={{ width: "16px", height: "16px", marginRight: "8px" }} />
          Processing...
        </>
      ) : (
        children
      )}
    </IonButton>
  );
};

export default Button;
