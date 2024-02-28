import { Search } from "lucide-react";
import React from "react";
import { buttonStyles } from "../components/Button";
import { twMerge } from "tailwind-merge";

export function Sidebar() {
  return <aside className="sticky top-0 overflow-y-auto scrollbar-hidden py-3 flex flex-col ml-1 gap-10 w-auto pl-3 bg-secondary-border rounded-tr-lg">
    <Search className={twMerge(buttonStyles({ variant:"default"}),"w-auto h-14 rounded-l-xl rounded-r-none")} />
    <SmallSidebarItem title="Sweet" url="/sweet" />
    <SmallSidebarItem title="Salt" url="/salt" />
    <SmallSidebarItem title="Cool drinks" url="/drink" />
    <SmallSidebarItem title="Chips" url="/chips" />
    <SmallSidebarItem title="Coffee" url="/coffee" />
    <SmallSidebarItem title="Tea" url="/tea" />
    <SmallSidebarItem title="Vapes" url="/vapes" />
  </aside>
}

type SmallSidebarItemProps = {
  title: string
  url: string
}

function SmallSidebarItem({ title, url}: SmallSidebarItemProps) {
  return (
    <a href={url} className={twMerge(buttonStyles({ variant:"default"}),
    "py-4 px-4 flex flex-col items-center rounded-l-xl rounded-r-none gap-1")}>
      <div className="text-xl">{title}</div>
    </a>
  )
}