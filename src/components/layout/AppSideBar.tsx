import { ChevronFirst, ChevronLast } from "lucide-react";
import Logo from "../global/Logo";
import { Button } from "../ui/button";
import { Sidebar, SidebarContent, SidebarGroupLabel, SidebarHeader, SidebarMenuButton, SidebarMenuItem, SidebarTrigger, useSidebar } from "../ui/sidebar";
import { sideBarItems } from "@/static/layoutStatic";
import { Link, useParams } from "@tanstack/react-router";


export default function AppSideBar() {

  const { workspace } = useParams({
    from: "/$workspace/dashboard",
  })
  console.log("here")

  const { open, setOpen } = useSidebar()

  return (
    <Sidebar className="bg-white px-2" collapsible="icon">
      <SidebarHeader className="flex items-center flex-row py-2 justify-between">
        {
          open && (
            <Logo />
          )
        }
        <button onClick={() => { (setOpen(!open)) }} className="p-0 mt-3 hover:bg-accent rounded-sm">
          <span className="shrink-0 text-3xl">
            {
              open ? <ChevronFirst /> : <ChevronLast />
            }
          </span>
        </button>
      </SidebarHeader>
      <SidebarContent className="flex flex-col gap-3">
        {
          sideBarItems.map((item, index) => (
            <div key={(index + 1).toString()}>
              <SidebarGroupLabel className="text-asc-gray">{item.title}</SidebarGroupLabel>
              <ul className="mt-2">
                {
                  item.items.map((menuItem, idx) => {
                    const menuLink = `/${workspace}${menuItem.link}`
                    // const isActive = 
                    return (
                      <SidebarMenuItem key={`${index + 1}-${idx + 1}`.toString()}>
                        <SidebarMenuButton>
                          <span><menuItem.icon className="text-[22px] font-semibold" /></span>
                          <Link to={menuLink} className="flex items-center gap-2">
                            {open && (
                              <span>{menuItem.text}</span>
                            )}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    )
                  })
                }
              </ul>
            </div>
          ))
        }
      </SidebarContent>
    </Sidebar>
  )
}
