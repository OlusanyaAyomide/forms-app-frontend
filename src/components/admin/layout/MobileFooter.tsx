import { sideBarItems } from "@/static/layoutStatic";
import { Link, useParams, useRouterState } from "@tanstack/react-router";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BookOpenText, ChartNoAxesCombined, Grid2X2, Plus, Rows4 } from "lucide-react";

export default function MobileFooter() {
  const { workspace } = useParams({
    from: "/$workspace",
  });
  const { location } = useRouterState();

  const dashboardLink = `/${workspace}/admin/dashboard`;
  const quizLink = `/${workspace}/admin/quiz`;
  const analyticsLink = `/${workspace}/admin/analytics`;

  const isDashboardActive = location.pathname === dashboardLink;
  const isQuizActive = location.pathname === quizLink;
  const isAnalyticsActive = location.pathname === analyticsLink;

  return (
    <footer className="md:hidden fixed bottom-0 w-full bg-white shadow-t-lg z-50">
      <div className="flex items-center relative h-16">
        <Link to={dashboardLink} className={cn("flex flex-col items-center justify-center w-1/5 h-full", isDashboardActive ? "text-main" : "text-gray-500")}>
          <Grid2X2 className="h-6 w-6" />
          <span className="text-xs">Dashboard</span>
        </Link>

        <Link to={quizLink} className={cn("flex flex-col items-center justify-center w-1/5 h-full", isQuizActive ? "text-main" : "text-gray-500")}>
          <BookOpenText className="h-6 w-6" />
          <span className="text-xs">Quiz</span>
        </Link>

        <div className="w-1/5 flex justify-center">
          <div className="absolute -top-6">
            <Button className="rounded-full bg-main w-16 h-16 shadow-[2px_0px_14px_rgba(0,0,0,0.5)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.35)] transition-shadow duration-300 flex items-center justify-center">
              <Plus size={200} className="text-white h-10 w-10" />
            </Button>
          </div>
        </div>

        <Link to={analyticsLink} className={cn("flex flex-col items-center justify-center w-1/5 h-full", isAnalyticsActive ? "text-main" : "text-gray-500")}>
          <ChartNoAxesCombined className="h-6 w-6" />
          <span className="text-xs">Analytics</span>
        </Link>

        <div className="w-1/5 flex items-center justify-center h-full">
          <Drawer>
            <DrawerTrigger asChild>
              <button className="flex flex-col items-center justify-center text-gray-500">
                <Rows4 className="h-6 w-6" />
                <span className="text-xs">More</span>
              </button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>All Menu</DrawerTitle>
              </DrawerHeader>
              <div className="grid gap-4 py-4 px-4">
                {sideBarItems.map((group) => (
                  <div key={group.title}>
                    <h3 className="text-lg font-semibold mb-2">{group.title}</h3>
                    {group.items.map((item) => {
                      const menuLink = `/${workspace}${item.link}`;
                      const isActive = location.pathname === menuLink;
                      return (
                        <Link to={menuLink} key={item.link} className={cn("flex items-center gap-3 p-2 rounded-lg", isActive ? "bg-main text-white" : "")}>
                          <item.icon className="h-5 w-5" />
                          <span>{item.text}</span>
                        </Link>
                      );
                    })}
                  </div>
                ))}
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </footer>
  );
}
