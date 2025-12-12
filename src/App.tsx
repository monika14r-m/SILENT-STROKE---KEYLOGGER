import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { TopBar } from "./components/TopBar";
import { DashboardView } from "./components/DashboardView";
import { LogsView } from "./components/LogsView";
import { ScreenshotsView } from "./components/ScreenshotsView";
import { ReportsView } from "./components/ReportsView";
import { SettingsView } from "./components/SettingsView";
import { StatusBar } from "./components/StatusBar";

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isCapturing, setIsCapturing] = useState(true);
  const [systemStatus, setSystemStatus] = useState<
    "active" | "inactive"
  >("active");

  const renderView = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardView isCapturing={isCapturing} />;
      case "logs":
        return <LogsView isCapturing={isCapturing} />;
      case "screenshots":
        return <ScreenshotsView />;
      case "reports":
        return <ReportsView />;
      case "settings":
        return <SettingsView />;
      default:
        return <DashboardView isCapturing={isCapturing} />;
    }
  };

  return (
    <div className="flex h-screen bg-white text-zinc-900 overflow-hidden">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="flex flex-col flex-1 min-w-0">
        <TopBar
          isCapturing={isCapturing}
          setIsCapturing={setIsCapturing}
          systemStatus={systemStatus}
          setSystemStatus={setSystemStatus}
        />
        <div className="flex-1 overflow-auto">
          {renderView()}
        </div>
        <StatusBar isCapturing={isCapturing} />
      </div>
    </div>
  );
}