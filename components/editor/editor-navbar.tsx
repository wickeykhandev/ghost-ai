"use client";

import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EditorNavbarProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
  rightSection?: React.ReactNode;
}

export function EditorNavbar({ isSidebarOpen, onToggleSidebar, rightSection }: EditorNavbarProps) {
  return (
    <nav className="h-14 border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-full items-center justify-between px-4">
        {/* Left Section */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleSidebar}
            aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
          >
            {isSidebarOpen ? (
              <PanelLeftClose className="h-5 w-5" />
            ) : (
              <PanelLeftOpen className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Center Section */}
        <div className="flex items-center">
          {/* Reserved for future use */}
        </div>

        {/* Right Section */}
        <div className="flex items-center">
          {rightSection}
        </div>
      </div>
    </nav>
  );
}