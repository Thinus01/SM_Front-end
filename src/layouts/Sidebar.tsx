import { ArrowLeft, Search } from "lucide-react";
import React, { useState } from "react";
import { Button, buttonStyles } from "../components/Button";
import { twMerge } from "tailwind-merge";

type SmallSidebarItemProps = {
  categories: string[]
	selectedCategory: string
	onSelect: (category: string) => void
}

export function SmallSidebarItem({ categories, selectedCategory, onSelect }: SmallSidebarItemProps) {
  const [showFullWidthSearch, setShowFullWidthSearch] =useState(false)

  return (
		<div className="h-full relative max-w-24">
			<div className={`sticky top-0 py-5 flex flex-col ml-1 gap-8 w-auto pl-3 bg-secondary-border ${showFullWidthSearch ? "rounded-tr-0" : "rounded-tr-lg"} rounded-br-lg rounded-l-lg`}>
      <Search onClick={() => setShowFullWidthSearch(true)} className={twMerge(buttonStyles({ variant:"default", size:"icon"}),"w-auto mr-3 h-14")} />
				{categories.map(category => (
					<Button key= {category} onClick={() => onSelect(category)}
					variant={selectedCategory === category ? "default" : "dark"} size={selectedCategory === category ? "selectSideBar" : "unSelectSideBar"}
					className="flex flex-col items-center gap-1">{category}</Button>
				))}
			</div>
      <form className={`z-10 absolute top-0 left-24 bg-secondary-border/9 rounded-r-full backdrop-blur p-5 gap-4 flex-grow ${showFullWidthSearch ? "flex" : "hidden"}`}>
        {showFullWidthSearch && (
        <Button onClick={() => setShowFullWidthSearch(false)} type="button" size="icon" className="flex-shrink-0 mt-1">
          <ArrowLeft />
        </Button>
        )}
        <div className="flex flex-grow max-w-[600px]">
          <input type="search" placeholder="Search" className="rounded-l-full border-secondary-border shadow-inner shadow-secondary py-1 px-4 w-lvw focus:border-secondary-text outline-none" />
          <Button className="py-2 px-4 rounded-r-full border-decondary-border border border-0">
            <Search />
          </Button>
        </div>
      </form>
	  </div>
  )
}
