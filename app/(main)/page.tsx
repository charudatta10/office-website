import type { Metadata } from "next";
import { OpenView } from "@/components/main/open-view";
import { getRecommendedTemplates } from "@/utils/templates";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Free Online Office Editor — Open & Edit Word, Excel, PowerPoint | MyOffice",
  description:
    "MyOffice FOSS Office Suite opens, views, and edits DOCX, XLSX, PPTX files directly in your browser for free. No upload, no login — your documents stay private. Drag & drop with the browser extension.",
  keywords: [
    "online office editor",
    "free Word editor online",
    "free Excel editor online",
    "free PowerPoint editor online",
    "open docx online",
    "edit xlsx in browser",
    "edit pptx in browser",
    "no upload document editor",
    "privacy first office",
    "MyOffice FOSS Office Suite",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Free Online Office Editor — Word, Excel, PowerPoint | MyOffice",
    description:
      "Edit Office documents in your browser for free. No upload, no login — fully private.",
    url: SITE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Office Editor — Word, Excel, PowerPoint | MyOffice",
    description:
      "Edit Office documents in your browser for free. No upload, no login — fully private.",
  },
};

export default function HomePage() {
  const templates = getRecommendedTemplates();
  return <OpenView recommendedTemplates={templates} />;
}
