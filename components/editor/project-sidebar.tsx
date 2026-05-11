"use client";

import { X, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ProjectSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-50 flex h-full w-72 flex-col border-r border-border bg-background shadow-lg animate-in slide-in-from-left duration-300">
        {/* Header */}
        <div className="flex h-14 items-center justify-between border-b border-border/50 px-4">
          <h2 className="text-sm font-medium">Projects</h2>
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close sidebar">
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col overflow-hidden">
          <Tabs defaultValue="my-projects" className="flex h-full flex-col">
            <TabsList className="w-full justify-start rounded-none border-b border-border/50 px-2">
              <TabsTrigger value="my-projects">My Project</TabsTrigger>
              <TabsTrigger value="shared">Shared</TabsTrigger>
            </TabsList>

            <ScrollArea className="flex-1">
              <TabsContent value="my-projects" className="mt-4 px-4">
                <p className="text-sm text-muted-foreground">No projects yet</p>
              </TabsContent>

              <TabsContent value="shared" className="mt-4 px-4">
                <p className="text-sm text-muted-foreground">No shared projects</p>
              </TabsContent>
            </ScrollArea>
          </Tabs>
        </div>

        {/* Footer */}
        <div className="border-t border-border/50 p-4">
          <Button className="w-full" variant="default">
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Button>
        </div>
      </aside>
    </>
  );
}