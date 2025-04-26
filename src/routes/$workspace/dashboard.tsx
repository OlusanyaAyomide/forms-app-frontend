import { createFileRoute, useParams } from '@tanstack/react-router'

export const Route = createFileRoute('/$workspace/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {

  const { workspace } = useParams({
    from: "/$workspace/dashboard",

  })
  return <div>Hello {workspace} /dashboard"!</div>
}
