import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$workspace/admin/settings')({
  component: Settings,
})

function Settings() {
  return (
    <div className="p-2">
      <h3>Welcome to your Settings page!</h3>
    </div>
  )
}