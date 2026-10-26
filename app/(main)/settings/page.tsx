import type { Metadata } from "next";
import { SettingsView } from "@/components/main/settings-view";

export const metadata: Metadata = {
  title: "Settings — MyOffice FOSS Office Suite",
  description:
    "Customize your MyOffice FOSS Office Suite experience: change editor theme, language, and plugin preferences.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SettingsPage() {
  return <SettingsView />;
}
