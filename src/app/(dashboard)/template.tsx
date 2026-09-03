import { ReactNode } from "react";

export default function DashboardTemplate ({children}: { children: ReactNode}) {
  return (
    <div className="animate-template">
      {children}
    </div>
  );
}