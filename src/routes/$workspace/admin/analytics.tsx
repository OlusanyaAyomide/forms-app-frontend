import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$workspace/admin/analytics')({
  component: Analytics,
})

function Analytics() {
  return (
    <div className="p-2">
      <h3>Welcome to your Analytics page!</h3>
    </div>
  )
}