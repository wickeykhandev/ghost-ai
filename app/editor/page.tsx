"use client";

import { useState } from "react";
import { EditorNavbar } from "@/components/editor/editor-navbar";
import { ProjectSidebar } from "@/components/editor/project-sidebar";
import { UserButton } from "@clerk/nextjs";

export default function EditorPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <EditorNavbar
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        rightSection={<UserButton />}
      />

      <div className="flex flex-1 overflow-hidden">
        <ProjectSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        <main className="flex-1 overflow-auto p-4">
          <p className="text-muted-foreground">Editor canvas area - coming soon</p>
        </main>
      </div>
    </div>
  );
}