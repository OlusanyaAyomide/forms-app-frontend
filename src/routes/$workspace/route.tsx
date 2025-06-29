import AppSideBar from '@/components/admin/layout/AppSideBar'
import Header from '@/components/admin/layout/Header'
import { SidebarProvider } from '@/components/ui/sidebar'
import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$workspace')({
  component: CompanyLayout,
})

function CompanyLayout() {
  return (
    <SidebarProvider>
      <AppSideBar />
      <main className="grow w-full bg-[#FAFCFE] relative">
        <Header />
        <div className="min-h-[calc(100%-48px)]">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
}

