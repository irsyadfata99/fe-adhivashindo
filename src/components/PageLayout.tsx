import React from "react";
import { IonPage } from "@ionic/react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import ProfilePanel from "./ProfilePanel";

interface PageLayoutProps {
  children?: React.ReactNode;
  title?: string;
  showProfilePanel?: boolean;
}

const PROFILE_WIDTH = 304;

const PageLayout: React.FC<PageLayoutProps> = ({ children, title, showProfilePanel = true }) => {
  return (
    <IonPage>
      <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
        <div
          style={{
            flex: 1,
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              flexShrink: 0,
              background: "var(--navbar-bg)",
              borderBottom: "1px solid var(--border-color)",
              zIndex: 100,
            }}
          >
            <Navbar title={title} />
          </div>

          <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
            <div
              style={{
                width: "var(--sidebar-width)",
                flexShrink: 0,
                overflowY: "auto",
                overflowX: "hidden",
                background: "var(--sidebar-bg)",
                borderTopRightRadius: "24px",
              }}
            >
              <Sidebar />
            </div>

            <div
              style={{
                flex: 1,
                minWidth: 0,
                overflowY: "auto",
                padding: "var(--content-padding)",
                background: "var(--ion-background-color)",
              }}
            >
              {children}
            </div>
          </div>
        </div>

        {showProfilePanel && (
          <div
            style={{
              width: `${PROFILE_WIDTH}px`,
              flexShrink: 0,
              height: "100vh",
              overflowY: "auto",
              overflowX: "hidden",
              background: "var(--ion-background-color)",
              borderLeft: "1px solid var(--border-color)",
              padding: "20px 16px",
              scrollbarWidth: "none",
              boxSizing: "border-box",
            }}
          >
            <ProfilePanel />
          </div>
        )}
      </div>
    </IonPage>
  );
};

export default PageLayout;
