import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$workspace/quiz')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/$workspace/quiz"!</div>
}
