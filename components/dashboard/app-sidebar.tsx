"use client"

import {
  ChevronsUpDown,
  FolderGit2,
  House,
  LayoutDashboard,
  LifeBuoy,
  LineChart,
  Settings,
  Users,
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
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

export function AppSidebar() {
  return (
    <Sidebar
      collapsible="icon"
      variant="inset"
      className="z-40 overflow-x-hidden w-[16rem]"
    >
      <SidebarHeader className="px-2 py-3">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded bg-black dark:bg-white" />
          <span className="font-semibold truncate">BAX</span>
        </div>
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent className="overflow-x-hidden">
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent className="min-w-0">
            <SidebarMenu className="min-w-0">
              <SidebarMenuItem className="min-w-0">
                <SidebarMenuButton asChild isActive className="min-w-0">
                  <a href="#" className="flex items-center gap-2 min-w-0">
                    <LayoutDashboard className="shrink-0" />
                    <span className="truncate">Overview</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem className="min-w-0">
                <SidebarMenuButton asChild className="min-w-0">
                  <a href="#" className="flex items-center gap-2 min-w-0">
                    <House className="shrink-0" />
                    <span className="truncate">Home</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem className="min-w-0">
                <SidebarMenuButton className="min-w-0">
                  <Users className="shrink-0" />
                  <span className="truncate">Team</span>
                </SidebarMenuButton>
                <SidebarMenuAction title="Add" className="shrink-0">
                  +
                </SidebarMenuAction>
                <SidebarMenuSub className="min-w-0">
                  <SidebarMenuSubItem className="min-w-0">
                    <SidebarMenuSubButton asChild className="min-w-0">
                      <a href="#" className="min-w-0">
                        <span className="truncate">Members</span>
                      </a>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem className="min-w-0">
                    <SidebarMenuSubButton asChild className="min-w-0">
                      <a href="#" className="min-w-0">
                        <span className="truncate">Invitations</span>
                      </a>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>

              <SidebarMenuItem className="min-w-0">
                <SidebarMenuButton asChild className="min-w-0">
                  <a href="#" className="flex items-center gap-2 min-w-0">
                    <FolderGit2 className="shrink-0" />
                    <span className="truncate">Repos</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem className="min-w-0">
                <SidebarMenuButton asChild className="min-w-0">
                  <a href="#" className="flex items-center gap-2 min-w-0">
                    <LineChart className="shrink-0" />
                    <span className="truncate">Analytics</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel>Support</SidebarGroupLabel>
          <SidebarGroupContent className="min-w-0">
            <SidebarMenu className="min-w-0">
              <SidebarMenuItem className="min-w-0">
                <SidebarMenuButton asChild className="min-w-0">
                  <a href="#" className="flex items-center gap-2 min-w-0">
                    <LifeBuoy className="shrink-0" />
                    <span className="truncate">Help Center</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem className="min-w-0">
                <SidebarMenuButton asChild className="min-w-0">
                  <a href="#" className="flex items-center gap-2 min-w-0">
                    <Settings className="shrink-0" />
                    <span className="truncate">Settings</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
          <SidebarGroupContent className="min-w-0">
            <SidebarMenu className="min-w-0">
              <SidebarMenuItem className="min-w-0">
                <SidebarMenuButton asChild className="min-w-0">
                  <a href="#" className="flex items-center gap-2 min-w-0">
                    <LifeBuoy className="shrink-0" />
                    <span className="truncate">Help Center</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem className="min-w-0">
                <SidebarMenuButton asChild className="min-w-0">
                  <a href="#" className="flex items-center gap-2 min-w-0">
                    <Settings className="shrink-0" />
                    <span className="truncate">Settings</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="h-9 gap-2 px-2">
              <div className="flex items-start gap-2 min-w-0">
                <Avatar className="size-8 shrink-0">
                  <AvatarImage alt="User" src="/avatar.png" />
                  <AvatarFallback>OX</AvatarFallback>
                </Avatar>
                <div className="grid leading-tight min-w-0">
                  <span className="text-sm font-medium truncate">Olex</span>
                  <span className="text-xs text-muted-foreground truncate">Admin</span>
                </div>
              </div>
              <ChevronsUpDown className="hidden md:inline-block size-4 opacity-60" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" sideOffset={8}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
