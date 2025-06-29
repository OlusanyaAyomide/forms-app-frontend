import { Bell } from "lucide-react";
import { Button } from "../../ui/button";
import Logo from "../../global/Logo";
import { Avatar, AvatarFallback } from "../../ui/avatar";
import { useRouterState } from "@tanstack/react-router";

export default function Header() {
  const { location } = useRouterState();
  const pageName = location.pathname.split("/").pop()?.replace(/-/g, " ");

  return (
    <header className="sticky top-0 z-40 w-full border-b px-3 bg-background">
      <div className="flex h-16 items-center justify-between w-full">
        <Logo className="md:hidden" />
        <div className="hidden md:block">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize">{pageName}</h1>
        </div>
        <div className="flex flex-1 items-center justify-end gap-2">
          <Button variant="ghost" size="icon">
            <Bell className="h-10 w-10 scale-125" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Avatar className="h-10 w-10">
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
