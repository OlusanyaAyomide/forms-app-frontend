import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$workspace/admin/questions')({
  component: Questions,
})

function Questions() {
  return (
    <div className="p-2">
      <h3>Welcome to your Questions page!</h3>
    </div>
  )
}