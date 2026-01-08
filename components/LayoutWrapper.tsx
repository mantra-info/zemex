"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Define which paths should NOT have the Navbar/Footer
  const isHomepage = pathname === "/";

  return (
    <>
      {!isHomepage && <Navbar />}
      <main className={!isHomepage ? "min-h-screen" : ""}>
        {children}
      </main>
      {!isHomepage && <Footer />}
    </>
  );
}