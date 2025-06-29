export const flowPages = (workspace: string) => {

  const pagesToHide = [
    '/admin/forms'
  ]
  return pagesToHide.map((path => `/${workspace}${path}`))
}