import {
  Archive, BookOpenText, ChartNoAxesCombined, ClipboardList, Grid2X2,
  Settings
} from "lucide-react";

export const sideBarItems = [
  {
    title: "Overview",
    items: [
      {
        link: "/dashboard",
        icon: Grid2X2,
        text: "Dashboard"
      },
    ]
  },
  {
    title: "Products",
    items: [
      {
        link: "/quiz",
        icon: BookOpenText,
        text: "Quiz"
      },
      {
        link: "/forms",
        icon: ClipboardList,
        text: "ClipboardList "
      },
      {
        link: "/questions",
        icon: Archive,
        text: "Question Bank"
      },
    ]
  },
  {
    title: "Management",
    items: [
      {
        link: "/analytics",
        icon: ChartNoAxesCombined,
        text: "Analytics"
      },
      {
        link: "/settings",
        icon: Settings,
        text: "Settings"
      },

    ]
  }
]