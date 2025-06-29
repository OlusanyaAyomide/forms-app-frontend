import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$workspace/admin/forms')({
  component: Forms,
})

function Forms() {
  return (
    <div className="p-2">
      <h3>Welcome to your Forms page!</h3>
    </div>
  )
}