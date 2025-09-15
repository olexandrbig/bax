import type { ReactNode } from "react"

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/dashboard/app-sidebar"
import { AppTopbar } from "@/components/dashboard/app-topbar"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset
        className="
          md:pl-[16rem]
          group-data-[collapsible=icon]/sidebar-wrapper:md:pl-[3rem]
        "
      >
        <AppTopbar />
        <div className="p-4 md:p-6">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}
