"use client"

import { Menu } from "lucide-react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { AppBreadcrumb } from "@/components/app/app-breadcrumb";

export function AppTopbar() {
  return (
    <header className="fixed top-0 w-full z-1 border-b bg-background">
      <div className="flex h-14 items-center gap-2 px-2 md:px-4">
        <div className="flex items-center gap-2">
          <SidebarTrigger>
            <Menu className="size-4" />
          </SidebarTrigger>
          <AppBreadcrumb
            base="/app"
            dict={{
              "/app": "Dashboard",
            }}
          />
        </div>
      </div>
    </header>
  )
}
