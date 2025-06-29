import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$workspace/admin/dashboard')({
  component: Dashboard,
})

function Dashboard() {
  return (
    <div className="p-2">
      <h3>Welcome to your Dashboard page!</h3>
    </div>
  )
}