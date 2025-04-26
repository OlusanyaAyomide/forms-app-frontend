'use client';

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
import { BadgeInfo } from "lucide-react";
import type { ToasterProps } from "sonner";
import SvgIcons from "@/icons/SvgIcons";

import { TOAST_DURATION_IN_MS } from "@/static/Constants";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      position="top-center"
      duration={TOAST_DURATION_IN_MS}
      className="toaster group sonner-toast-custom"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      toastOptions={{
        unstyled: false,
        className: "rounded-2xl pointer-events-auto",
        descriptionClassName: "text-muted-foreground",
        classNames: {
          success: "bg-[#F9F2FC] border-2 border-[#690896]", // purple success
          error: "bg-[#FCF5F6] border-2 border-[#D62D2D]",   // red error
          info: "bg-white border-2 border-[#ccc]",          // info neutral
        },
      }}
      icons={{
        success: <SvgIcons.PurpleSuccessCheck />,
        error: <SvgIcons.ErrorIcon />,
        info: <BadgeInfo className="mr-1 scale-75 opacity-75" />,
      }}
      {...props}
    />
  );
};

export default Toaster;
