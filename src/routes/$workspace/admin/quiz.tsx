import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$workspace/admin/quiz')({
  component: Quiz,
})

function Quiz() {
  return (
    <div className="p-2">
      <h3>Welcome to your Quiz page!</h3>
    </div>
  )
}