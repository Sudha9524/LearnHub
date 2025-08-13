import React, { ReactNode } from "react";
import Sidebar from "./_components/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-full">
    <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
      <Sidebar />
      </div>
      {children}
    </div>
  );
}
