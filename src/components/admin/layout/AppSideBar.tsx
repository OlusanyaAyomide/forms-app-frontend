import { ChevronFirst, ChevronLast } from "lucide-react";
import Logo from "../../global/Logo";
import {
  Sidebar,
  SidebarContent,
  SidebarGroupLabel,
  SidebarHeader, SidebarMenuButton,
  SidebarMenuItem, useSidebar
} from "@/components/ui/sidebar";
import { sideBarItems } from "@/static/layoutStatic";
import { Link, useParams, useRouterState } from "@tanstack/react-router";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function AppSideBar() {
  const { workspace } = useParams({
    from: "/$workspace",
  });
  const { open, setOpen } = useSidebar();
  const { location } = useRouterState();

  return (
    <Sidebar className="bg-white px-2" collapsible="icon">
      <SidebarHeader className="flex items-center flex-row py-2 justify-between">
        {open && <Logo />}
        <button onClick={() => setOpen(!open)} className="p-0 mt-3 hover:bg-accent rounded-sm">
          <span className="shrink-0 text-3xl">
            {open ? <ChevronFirst /> : <ChevronLast />}
          </span>
        </button>
      </SidebarHeader>
      <SidebarContent className="flex flex-col gap-5">
        {sideBarItems.map((item, index) => (
          <div key={(index + 1).toString()}>
            <SidebarGroupLabel className="text-asc-gray">{item.title}</SidebarGroupLabel>
            <ul className="mt-2">
              <Separator className={`${index === 0 && "hidden"} shadow-xs mb-2`} />
              {item.items.map((menuItem, idx) => {
                const menuLink = `/${workspace}${menuItem.link}`;
                const isActive = location.pathname === menuLink;
                return (
                  <SidebarMenuItem key={`${index + 1}-${idx + 1}`.toString()} className="mb-1 py-2 relative">
                    {isActive && <div className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-main" />}
                    <SidebarMenuButton className={`${open ? "h-12" : "h-20"}`}>
                      {open ? (
                        <Link to={menuLink} className={`flex items-center gap-2 ${isActive ? "text-main" : "text-black"}`}>
                          <span><menuItem.icon className="text-[22px] font-semibold" /></span>
                          <span>{menuItem.text}</span>
                        </Link>
                      ) : (
                        <Tooltip key={menuLink}>
                          <TooltipTrigger asChild>
                            <Link to={menuLink} className={`flex items-center gap-2 ${isActive ? "text-main" : "text-black"}`}>
                              <span><menuItem.icon className="text-[22px] font-semibold" /></span>
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent side="right" sideOffset={15}>
                            <p>{menuItem.text}</p>
                          </TooltipContent>
                        </Tooltip>
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </ul>
          </div>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
