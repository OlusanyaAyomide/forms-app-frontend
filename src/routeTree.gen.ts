/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as CompanyRouteImport } from './routes/company/route'
import { Route as PathlessLayoutRouteImport } from './routes/_pathlessLayout/route'
import { Route as WorkspaceRouteImport } from './routes/$workspace/route'
import { Route as IndexImport } from './routes/index'
import { Route as DemoTanstackQueryImport } from './routes/demo.tanstack-query'
import { Route as CompanyDashboardImport } from './routes/company/dashboard'
import { Route as PathlessLayoutSignUpImport } from './routes/_pathlessLayout/sign-up'
import { Route as PathlessLayoutLogInImport } from './routes/_pathlessLayout/log-in'
import { Route as WorkspaceAdminSettingsImport } from './routes/$workspace/admin/settings'
import { Route as WorkspaceAdminQuizImport } from './routes/$workspace/admin/quiz'
import { Route as WorkspaceAdminQuestionsImport } from './routes/$workspace/admin/questions'
import { Route as WorkspaceAdminFormsImport } from './routes/$workspace/admin/forms'
import { Route as WorkspaceAdminDashboardImport } from './routes/$workspace/admin/dashboard'
import { Route as WorkspaceAdminAnalyticsImport } from './routes/$workspace/admin/analytics'

// Create/Update Routes

const CompanyRouteRoute = CompanyRouteImport.update({
  id: '/company',
  path: '/company',
  getParentRoute: () => rootRoute,
} as any)

const PathlessLayoutRouteRoute = PathlessLayoutRouteImport.update({
  id: '/_pathlessLayout',
  getParentRoute: () => rootRoute,
} as any)

const WorkspaceRouteRoute = WorkspaceRouteImport.update({
  id: '/$workspace',
  path: '/$workspace',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const DemoTanstackQueryRoute = DemoTanstackQueryImport.update({
  id: '/demo/tanstack-query',
  path: '/demo/tanstack-query',
  getParentRoute: () => rootRoute,
} as any)

const CompanyDashboardRoute = CompanyDashboardImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => CompanyRouteRoute,
} as any)

const PathlessLayoutSignUpRoute = PathlessLayoutSignUpImport.update({
  id: '/sign-up',
  path: '/sign-up',
  getParentRoute: () => PathlessLayoutRouteRoute,
} as any)

const PathlessLayoutLogInRoute = PathlessLayoutLogInImport.update({
  id: '/log-in',
  path: '/log-in',
  getParentRoute: () => PathlessLayoutRouteRoute,
} as any)

const WorkspaceAdminSettingsRoute = WorkspaceAdminSettingsImport.update({
  id: '/admin/settings',
  path: '/admin/settings',
  getParentRoute: () => WorkspaceRouteRoute,
} as any)

const WorkspaceAdminQuizRoute = WorkspaceAdminQuizImport.update({
  id: '/admin/quiz',
  path: '/admin/quiz',
  getParentRoute: () => WorkspaceRouteRoute,
} as any)

const WorkspaceAdminQuestionsRoute = WorkspaceAdminQuestionsImport.update({
  id: '/admin/questions',
  path: '/admin/questions',
  getParentRoute: () => WorkspaceRouteRoute,
} as any)

const WorkspaceAdminFormsRoute = WorkspaceAdminFormsImport.update({
  id: '/admin/forms',
  path: '/admin/forms',
  getParentRoute: () => WorkspaceRouteRoute,
} as any)

const WorkspaceAdminDashboardRoute = WorkspaceAdminDashboardImport.update({
  id: '/admin/dashboard',
  path: '/admin/dashboard',
  getParentRoute: () => WorkspaceRouteRoute,
} as any)

const WorkspaceAdminAnalyticsRoute = WorkspaceAdminAnalyticsImport.update({
  id: '/admin/analytics',
  path: '/admin/analytics',
  getParentRoute: () => WorkspaceRouteRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/$workspace': {
      id: '/$workspace'
      path: '/$workspace'
      fullPath: '/$workspace'
      preLoaderRoute: typeof WorkspaceRouteImport
      parentRoute: typeof rootRoute
    }
    '/_pathlessLayout': {
      id: '/_pathlessLayout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof PathlessLayoutRouteImport
      parentRoute: typeof rootRoute
    }
    '/company': {
      id: '/company'
      path: '/company'
      fullPath: '/company'
      preLoaderRoute: typeof CompanyRouteImport
      parentRoute: typeof rootRoute
    }
    '/_pathlessLayout/log-in': {
      id: '/_pathlessLayout/log-in'
      path: '/log-in'
      fullPath: '/log-in'
      preLoaderRoute: typeof PathlessLayoutLogInImport
      parentRoute: typeof PathlessLayoutRouteImport
    }
    '/_pathlessLayout/sign-up': {
      id: '/_pathlessLayout/sign-up'
      path: '/sign-up'
      fullPath: '/sign-up'
      preLoaderRoute: typeof PathlessLayoutSignUpImport
      parentRoute: typeof PathlessLayoutRouteImport
    }
    '/company/dashboard': {
      id: '/company/dashboard'
      path: '/dashboard'
      fullPath: '/company/dashboard'
      preLoaderRoute: typeof CompanyDashboardImport
      parentRoute: typeof CompanyRouteImport
    }
    '/demo/tanstack-query': {
      id: '/demo/tanstack-query'
      path: '/demo/tanstack-query'
      fullPath: '/demo/tanstack-query'
      preLoaderRoute: typeof DemoTanstackQueryImport
      parentRoute: typeof rootRoute
    }
    '/$workspace/admin/analytics': {
      id: '/$workspace/admin/analytics'
      path: '/admin/analytics'
      fullPath: '/$workspace/admin/analytics'
      preLoaderRoute: typeof WorkspaceAdminAnalyticsImport
      parentRoute: typeof WorkspaceRouteImport
    }
    '/$workspace/admin/dashboard': {
      id: '/$workspace/admin/dashboard'
      path: '/admin/dashboard'
      fullPath: '/$workspace/admin/dashboard'
      preLoaderRoute: typeof WorkspaceAdminDashboardImport
      parentRoute: typeof WorkspaceRouteImport
    }
    '/$workspace/admin/forms': {
      id: '/$workspace/admin/forms'
      path: '/admin/forms'
      fullPath: '/$workspace/admin/forms'
      preLoaderRoute: typeof WorkspaceAdminFormsImport
      parentRoute: typeof WorkspaceRouteImport
    }
    '/$workspace/admin/questions': {
      id: '/$workspace/admin/questions'
      path: '/admin/questions'
      fullPath: '/$workspace/admin/questions'
      preLoaderRoute: typeof WorkspaceAdminQuestionsImport
      parentRoute: typeof WorkspaceRouteImport
    }
    '/$workspace/admin/quiz': {
      id: '/$workspace/admin/quiz'
      path: '/admin/quiz'
      fullPath: '/$workspace/admin/quiz'
      preLoaderRoute: typeof WorkspaceAdminQuizImport
      parentRoute: typeof WorkspaceRouteImport
    }
    '/$workspace/admin/settings': {
      id: '/$workspace/admin/settings'
      path: '/admin/settings'
      fullPath: '/$workspace/admin/settings'
      preLoaderRoute: typeof WorkspaceAdminSettingsImport
      parentRoute: typeof WorkspaceRouteImport
    }
  }
}

// Create and export the route tree

interface WorkspaceRouteRouteChildren {
  WorkspaceAdminAnalyticsRoute: typeof WorkspaceAdminAnalyticsRoute
  WorkspaceAdminDashboardRoute: typeof WorkspaceAdminDashboardRoute
  WorkspaceAdminFormsRoute: typeof WorkspaceAdminFormsRoute
  WorkspaceAdminQuestionsRoute: typeof WorkspaceAdminQuestionsRoute
  WorkspaceAdminQuizRoute: typeof WorkspaceAdminQuizRoute
  WorkspaceAdminSettingsRoute: typeof WorkspaceAdminSettingsRoute
}

const WorkspaceRouteRouteChildren: WorkspaceRouteRouteChildren = {
  WorkspaceAdminAnalyticsRoute: WorkspaceAdminAnalyticsRoute,
  WorkspaceAdminDashboardRoute: WorkspaceAdminDashboardRoute,
  WorkspaceAdminFormsRoute: WorkspaceAdminFormsRoute,
  WorkspaceAdminQuestionsRoute: WorkspaceAdminQuestionsRoute,
  WorkspaceAdminQuizRoute: WorkspaceAdminQuizRoute,
  WorkspaceAdminSettingsRoute: WorkspaceAdminSettingsRoute,
}

const WorkspaceRouteRouteWithChildren = WorkspaceRouteRoute._addFileChildren(
  WorkspaceRouteRouteChildren,
)

interface PathlessLayoutRouteRouteChildren {
  PathlessLayoutLogInRoute: typeof PathlessLayoutLogInRoute
  PathlessLayoutSignUpRoute: typeof PathlessLayoutSignUpRoute
}

const PathlessLayoutRouteRouteChildren: PathlessLayoutRouteRouteChildren = {
  PathlessLayoutLogInRoute: PathlessLayoutLogInRoute,
  PathlessLayoutSignUpRoute: PathlessLayoutSignUpRoute,
}

const PathlessLayoutRouteRouteWithChildren =
  PathlessLayoutRouteRoute._addFileChildren(PathlessLayoutRouteRouteChildren)

interface CompanyRouteRouteChildren {
  CompanyDashboardRoute: typeof CompanyDashboardRoute
}

const CompanyRouteRouteChildren: CompanyRouteRouteChildren = {
  CompanyDashboardRoute: CompanyDashboardRoute,
}

const CompanyRouteRouteWithChildren = CompanyRouteRoute._addFileChildren(
  CompanyRouteRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/$workspace': typeof WorkspaceRouteRouteWithChildren
  '': typeof PathlessLayoutRouteRouteWithChildren
  '/company': typeof CompanyRouteRouteWithChildren
  '/log-in': typeof PathlessLayoutLogInRoute
  '/sign-up': typeof PathlessLayoutSignUpRoute
  '/company/dashboard': typeof CompanyDashboardRoute
  '/demo/tanstack-query': typeof DemoTanstackQueryRoute
  '/$workspace/admin/analytics': typeof WorkspaceAdminAnalyticsRoute
  '/$workspace/admin/dashboard': typeof WorkspaceAdminDashboardRoute
  '/$workspace/admin/forms': typeof WorkspaceAdminFormsRoute
  '/$workspace/admin/questions': typeof WorkspaceAdminQuestionsRoute
  '/$workspace/admin/quiz': typeof WorkspaceAdminQuizRoute
  '/$workspace/admin/settings': typeof WorkspaceAdminSettingsRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/$workspace': typeof WorkspaceRouteRouteWithChildren
  '': typeof PathlessLayoutRouteRouteWithChildren
  '/company': typeof CompanyRouteRouteWithChildren
  '/log-in': typeof PathlessLayoutLogInRoute
  '/sign-up': typeof PathlessLayoutSignUpRoute
  '/company/dashboard': typeof CompanyDashboardRoute
  '/demo/tanstack-query': typeof DemoTanstackQueryRoute
  '/$workspace/admin/analytics': typeof WorkspaceAdminAnalyticsRoute
  '/$workspace/admin/dashboard': typeof WorkspaceAdminDashboardRoute
  '/$workspace/admin/forms': typeof WorkspaceAdminFormsRoute
  '/$workspace/admin/questions': typeof WorkspaceAdminQuestionsRoute
  '/$workspace/admin/quiz': typeof WorkspaceAdminQuizRoute
  '/$workspace/admin/settings': typeof WorkspaceAdminSettingsRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/$workspace': typeof WorkspaceRouteRouteWithChildren
  '/_pathlessLayout': typeof PathlessLayoutRouteRouteWithChildren
  '/company': typeof CompanyRouteRouteWithChildren
  '/_pathlessLayout/log-in': typeof PathlessLayoutLogInRoute
  '/_pathlessLayout/sign-up': typeof PathlessLayoutSignUpRoute
  '/company/dashboard': typeof CompanyDashboardRoute
  '/demo/tanstack-query': typeof DemoTanstackQueryRoute
  '/$workspace/admin/analytics': typeof WorkspaceAdminAnalyticsRoute
  '/$workspace/admin/dashboard': typeof WorkspaceAdminDashboardRoute
  '/$workspace/admin/forms': typeof WorkspaceAdminFormsRoute
  '/$workspace/admin/questions': typeof WorkspaceAdminQuestionsRoute
  '/$workspace/admin/quiz': typeof WorkspaceAdminQuizRoute
  '/$workspace/admin/settings': typeof WorkspaceAdminSettingsRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/$workspace'
    | ''
    | '/company'
    | '/log-in'
    | '/sign-up'
    | '/company/dashboard'
    | '/demo/tanstack-query'
    | '/$workspace/admin/analytics'
    | '/$workspace/admin/dashboard'
    | '/$workspace/admin/forms'
    | '/$workspace/admin/questions'
    | '/$workspace/admin/quiz'
    | '/$workspace/admin/settings'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/$workspace'
    | ''
    | '/company'
    | '/log-in'
    | '/sign-up'
    | '/company/dashboard'
    | '/demo/tanstack-query'
    | '/$workspace/admin/analytics'
    | '/$workspace/admin/dashboard'
    | '/$workspace/admin/forms'
    | '/$workspace/admin/questions'
    | '/$workspace/admin/quiz'
    | '/$workspace/admin/settings'
  id:
    | '__root__'
    | '/'
    | '/$workspace'
    | '/_pathlessLayout'
    | '/company'
    | '/_pathlessLayout/log-in'
    | '/_pathlessLayout/sign-up'
    | '/company/dashboard'
    | '/demo/tanstack-query'
    | '/$workspace/admin/analytics'
    | '/$workspace/admin/dashboard'
    | '/$workspace/admin/forms'
    | '/$workspace/admin/questions'
    | '/$workspace/admin/quiz'
    | '/$workspace/admin/settings'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  WorkspaceRouteRoute: typeof WorkspaceRouteRouteWithChildren
  PathlessLayoutRouteRoute: typeof PathlessLayoutRouteRouteWithChildren
  CompanyRouteRoute: typeof CompanyRouteRouteWithChildren
  DemoTanstackQueryRoute: typeof DemoTanstackQueryRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  WorkspaceRouteRoute: WorkspaceRouteRouteWithChildren,
  PathlessLayoutRouteRoute: PathlessLayoutRouteRouteWithChildren,
  CompanyRouteRoute: CompanyRouteRouteWithChildren,
  DemoTanstackQueryRoute: DemoTanstackQueryRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/$workspace",
        "/_pathlessLayout",
        "/company",
        "/demo/tanstack-query"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/$workspace": {
      "filePath": "$workspace/route.tsx",
      "children": [
        "/$workspace/admin/analytics",
        "/$workspace/admin/dashboard",
        "/$workspace/admin/forms",
        "/$workspace/admin/questions",
        "/$workspace/admin/quiz",
        "/$workspace/admin/settings"
      ]
    },
    "/_pathlessLayout": {
      "filePath": "_pathlessLayout/route.tsx",
      "children": [
        "/_pathlessLayout/log-in",
        "/_pathlessLayout/sign-up"
      ]
    },
    "/company": {
      "filePath": "company/route.tsx",
      "children": [
        "/company/dashboard"
      ]
    },
    "/_pathlessLayout/log-in": {
      "filePath": "_pathlessLayout/log-in.tsx",
      "parent": "/_pathlessLayout"
    },
    "/_pathlessLayout/sign-up": {
      "filePath": "_pathlessLayout/sign-up.tsx",
      "parent": "/_pathlessLayout"
    },
    "/company/dashboard": {
      "filePath": "company/dashboard.tsx",
      "parent": "/company"
    },
    "/demo/tanstack-query": {
      "filePath": "demo.tanstack-query.tsx"
    },
    "/$workspace/admin/analytics": {
      "filePath": "$workspace/admin/analytics.tsx",
      "parent": "/$workspace"
    },
    "/$workspace/admin/dashboard": {
      "filePath": "$workspace/admin/dashboard.tsx",
      "parent": "/$workspace"
    },
    "/$workspace/admin/forms": {
      "filePath": "$workspace/admin/forms.tsx",
      "parent": "/$workspace"
    },
    "/$workspace/admin/questions": {
      "filePath": "$workspace/admin/questions.tsx",
      "parent": "/$workspace"
    },
    "/$workspace/admin/quiz": {
      "filePath": "$workspace/admin/quiz.tsx",
      "parent": "/$workspace"
    },
    "/$workspace/admin/settings": {
      "filePath": "$workspace/admin/settings.tsx",
      "parent": "/$workspace"
    }
  }
}
ROUTE_MANIFEST_END */
