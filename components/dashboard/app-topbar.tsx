"use client"

import { Menu } from "lucide-react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function AppTopbar() {
  return (
    <header className="fixed top-0 z-0 w-full border-b bg-background">
      <div className="flex h-14 items-center gap-2 px-2 md:px-4">
        <div className="flex items-center gap-2">
          <SidebarTrigger>
            <Menu className="size-4" />
          </SidebarTrigger>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Projects</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Overview</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </header>
  )
}
