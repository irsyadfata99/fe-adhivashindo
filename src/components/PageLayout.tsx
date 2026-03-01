import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, title }) => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div
          style={{
            display: "flex",
            minHeight: "100vh",
            background: "var(--ion-background-color)",
          }}
        >
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <div
            style={{
              marginLeft: "var(--sidebar-width)",
              flex: 1,
              padding: "var(--content-padding)",
              minHeight: "100vh",
            }}
          >
            {/* Navbar */}
            <Navbar title={title} />

            {/* Page Content */}
            {children}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PageLayout;
