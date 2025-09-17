"use client"

import {
  ChevronsUpDown,
  LayoutDashboard,
  LifeBuoy,
  Waypoints,
  Settings,
  Search,
  Database,
  ChartNoAxesColumnIcon,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent, DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";
import Link from "next/link";
import type {Route} from "next";

export function AppSidebar() {
  const pathname = usePathname();
  const isActive = (href:string) =>{
    return pathname === href || pathname.startsWith(href + "/")
  };
  return (
    <Sidebar
      collapsible="offcanvas"
      variant="sidebar"
      className="z-40 overflow-x-hidden w-[16rem]"
    >
      <SidebarHeader className="px-2 py-3">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded bg-black dark:bg-white" />
          <span className="font-semibold truncate">Tredor Bank Ltd.</span>
        </div>
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent className="overflow-x-hidden">
        <SidebarGroup>
          <SidebarGroupLabel>Home</SidebarGroupLabel>
          <SidebarGroupContent className="min-w-0">
            <SidebarMenu className="min-w-0">
              <SidebarMenuItem className="min-w-0">
                <SidebarMenuButton asChild isActive={isActive("/app/overview")} className="min-w-0">
                  <Link href="/app/overview" className="flex items-center gap-2 min-w-0">
                    <LayoutDashboard className="shrink-0" />
                    <span className="truncate">Overview</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem className="min-w-0">
                <SidebarMenuButton asChild isActive={isActive("/app/data-control")} className="min-w-0">
                  <Link href="/app/data-control" className="flex items-center gap-2 min-w-0">
                    <Database className="shrink-0" />
                    <span className="truncate">Data Control</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem className="min-w-0">
                <SidebarMenuButton asChild isActive={isActive("/app/analytics")} className="min-w-0">
                  <Link href="/app/analytics" className="flex items-center gap-2 min-w-0">
                    <ChartNoAxesColumnIcon className="shrink-0" />
                    <span className="truncate">Analytics</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem className="min-w-0">
                <SidebarMenuButton asChild isActive={isActive("/app/sources")} className="min-w-0">
                  <Link href="/app/sources" className="flex items-center gap-2 min-w-0">
                    <Waypoints className="shrink-0" />
                    <span className="truncate">Sources</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem className="min-w-0">
                <SidebarMenuButton asChild isActive={isActive("/app/settings")} className="min-w-0">
                  <Link href="/app/settings" className="flex items-center gap-2 min-w-0">
                    <Settings className="shrink-0" />
                    <span className="truncate">Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
          <SidebarGroupContent className="min-w-0 mb-4">
            <SidebarMenu className="min-w-0">
              <SidebarMenuItem className="min-w-0">
                <SidebarMenuButton asChild isActive={isActive("/app/help")} className="min-w-0">
                  <Link href={'/app/help' as Route} className="flex items-center gap-2 min-w-0">
                    <LifeBuoy className="shrink-0" />
                    <span className="truncate">Get Help</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem className="min-w-0">
                <SidebarMenuButton asChild isActive={isActive("/app/search")} className="min-w-0">
                  <Link href={'/app/search' as Route} className="flex items-center gap-2 min-w-0">
                    <Search className="shrink-0" />
                    <span className="truncate">Search</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-9 w-full justify-between cursor-pointer pl-0!">
              <div className="flex min-w-0 flex-1 items-center gap-2 text-left">
                <Avatar className="size-8 shrink-0">
                  <AvatarImage alt="User" src="/avatar.png" />
                  <AvatarFallback>US</AvatarFallback>
                </Avatar>
                <div className="min-w-0 leading-tight">
                  <span className="block text-sm font-medium truncate">Username</span>
                  <span className="block text-xs text-muted-foreground truncate">Role</span>
                </div>
              </div>
              <ChevronsUpDown className="hidden md:inline-block size-4 opacity-60 shrink-0" />
            </Button>

          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" sideOffset={8}>
            <DropdownMenuItem asChild>
              <Link href="/" className="flex items-center gap-2 min-w-0 cursor-pointer">
                <span className="truncate">Sign out</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
