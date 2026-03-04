import type { ReactNode } from "react";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#ffc928]">
      <TopBar />
      <div className="min-h-[calc(100vh-200px)]">{children}</div>
      <Footer />
    </div>
  );
}

