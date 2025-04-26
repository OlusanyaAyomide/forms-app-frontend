import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import TanstackQueryLayout from '../integrations/tanstack-query/layout'

import type { QueryClient } from '@tanstack/react-query'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <div className='max-w-[1600px] mx-auto bg-amber-50 min-h-screen'>
      <Outlet />
      <TanStackRouterDevtools />
      <TanstackQueryLayout />
    </div>
  ),
})
