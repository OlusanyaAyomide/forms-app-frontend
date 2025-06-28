import AppSideBar from '@/components/layout/AppSideBar'
import Header from '@/components/layout/Header'
import { SidebarProvider } from '@/components/ui/sidebar'
import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$workspace')({
  component: CompanyLayout,
})

function CompanyLayout() {

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSideBar />
        <main className="grow w-full bg-[#FAFCFE] relative">
          <Header />
          <div className="min-h-[calc(100%-48px)]">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}

