import React from "react";
import NavBar from '@/components/dashlayout/navbar'
import Sidebar from '@/components/dashlayout/sidebar'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <NavBar />

      {/* Main content container */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Body */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto  p-4">
        
          {children}

        </main>
      </div>
    </div>
  );
}
