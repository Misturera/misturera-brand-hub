import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
