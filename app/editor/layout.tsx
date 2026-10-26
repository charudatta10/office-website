import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import { API_JS, APP_ROOT } from "@/utils/editor/utils";
import { withBasePath } from "@/lib/site";

export const metadata: Metadata = {
  title: "Document Editor — MyOffice FOSS Office Suite",
  description:
    "Edit Word, Excel, and PowerPoint files directly in your browser. No upload, no server — fully private.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <>
      <head>
        <link
          rel="preload"
          href={withBasePath(APP_ROOT + API_JS)}
          as="script"
        />
      </head>
      {children}
    </>
  );
}
