import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

interface PageLayoutProps {
  children?: React.ReactNode;
  title?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, title }) => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div
          style={{
            minHeight: "100vh",
            background: "var(--ion-background-color)",
          }}
        >
          {/* Navbar — sticky, full width */}
          <div
            style={{
              position: "sticky",
              top: 0,
              zIndex: 50,
            }}
          >
            <Navbar title={title} />
          </div>

          {/* Body — sidebar + content side by side below navbar */}
          <div style={{ display: "flex" }}>
            <Sidebar />
            <div
              style={{
                marginLeft: "var(--sidebar-width)",
                flex: 1,
                padding: "var(--content-padding)",
                minHeight: "calc(100vh - var(--navbar-height))",
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PageLayout;
