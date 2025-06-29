import {
  Archive, BookOpenText, ChartNoAxesCombined, ClipboardList, Grid2X2,
  Settings
} from "lucide-react";

export const sideBarItems = [
  {
    title: "Overview",
    items: [
      {
        link: "/admin/dashboard",
        icon: Grid2X2,
        text: "Dashboard"
      },
    ]
  },
  {
    title: "Products",
    items: [
      {
        link: "/admin/quiz",
        icon: BookOpenText,
        text: "Quiz"
      },
      {
        link: "/admin/forms",
        icon: ClipboardList,
        text: "Forms "
      },
      {
        link: "/admin/questions",
        icon: Archive,
        text: "Question Bank"
      },
    ]
  },
  {
    title: "Management",
    items: [
      {
        link: "/admin/analytics",
        icon: ChartNoAxesCombined,
        text: "Analytics"
      },
      {
        link: "/admin/settings",
        icon: Settings,
        text: "Settings"
      },

    ]
  }
]