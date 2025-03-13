"use client"

// shadcn/ui
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// sidebar content
import { sidebarMenu } from "@/assets/staticData"

// components
import { TeamSwitcher } from "@/components/TeamSwitcher"
import { NavMain } from "@/components/NavMain"
import { NavProjects } from "@/components/NavProjects"

// data.
import { teamSwithcerData as data } from "@/assets/staticData"


export function AppSidebar() {
  return (
    <Sidebar>
      {/* content */}
      <SidebarContent>
        {/* group */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <NavMain items={data.navMain} />
              <NavProjects projects={data.projects} />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      {/* footer */}
      <SidebarFooter>
        <TeamSwitcher teams={data.teams} />
      </SidebarFooter>
    </Sidebar>
  )
}
