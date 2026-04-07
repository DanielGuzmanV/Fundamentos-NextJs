import { DashboardShell } from "./_components/DashboardShell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | NextJs Master",
  description: "Gestiona tus proyectos",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardShell>
      {children}
    </DashboardShell>
  );
}