import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$workspace')({
  component: CompanyLayout,
})

function CompanyLayout() {

  return (
    <div className="flex">
      <aside className="w-20 bg-gray-100 p-4">
        Sidebar
      </aside>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}

