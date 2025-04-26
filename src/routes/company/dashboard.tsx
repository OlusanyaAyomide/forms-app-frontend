import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/company/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/company/dashboard"!</div>
}
