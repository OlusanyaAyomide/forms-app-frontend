import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/company')({
  component: RouteComponent,
  loader: () => {
    console.log("here")
  }
})

function RouteComponent() {
  return (
    <div>
      <span>Auth Header</span>
      <Outlet />
    </div>
  )
}
