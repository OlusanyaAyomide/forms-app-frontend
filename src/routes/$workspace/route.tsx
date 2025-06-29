import AppSideBar from '@/components/admin/layout/AppSideBar'
import Header from '@/components/admin/layout/Header'
import MobileFooter from '@/components/admin/layout/MobileFooter';
import { SidebarProvider } from '@/components/ui/sidebar'
import { flowPages } from '@/services/layout.services';
import { Outlet, createFileRoute, useParams, useRouterState } from '@tanstack/react-router'
import Cookies from 'js-cookie';

export const Route = createFileRoute('/$workspace')({
  component: CompanyLayout,
});

function CompanyLayout() {

  const cookieValue = Cookies.get("sidebar_state")

  const { workspace } = useParams({
    from: "/$workspace",
  });


  const offPathName = flowPages(workspace)

  console.log(offPathName)
  const { location } = useRouterState();
  const hideMobileNav = offPathName.includes(location.pathname);

  return (
    <SidebarProvider defaultOpen={cookieValue !== "false"}>
      <div className="hidden md:block">
        <AppSideBar />
      </div>
      <main className="grow w-full bg-[#FAFCFE] relative">
        <Header />
        <div className="min-h-[calc(100%-48px)]">
          <Outlet />
        </div>
        {!hideMobileNav && <MobileFooter />}
      </main>
    </SidebarProvider>
  );
}

