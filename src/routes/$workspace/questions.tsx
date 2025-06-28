import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$workspace/questions')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/$workspace/questions"!</div>
}
