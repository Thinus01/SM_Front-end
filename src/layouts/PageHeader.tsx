import React, { useState } from "react";
import { ArrowLeft, Bell, LayoutGrid, Menu, Mic, Search, ShoppingCart, Upload, User } from "lucide-react"
import logo  from '../assets/OIG1.png';
import { Button } from "../components/Button";

export function PageHeader () {
  const [showFullWidthSearch, setShowFullWidthSearch] =useState(false)

    return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <div className={`gap-4 items-center flex-shrink-0 ${showFullWidthSearch ? "hidden" : "flex"}`}>
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
        <a href="/">
          <img src={logo} className="h-12" alt="React Logo" />
        </a>
      </div>
      <form className={`gap-4 flex-grow justify-center ${showFullWidthSearch ? "flex" : "hidden md:flex"}`}>
        {showFullWidthSearch && (
        <Button onClick={() => setShowFullWidthSearch(false)} type="button" size="icon" variant="ghost" className="flex-shrink-0">
          <ArrowLeft />
        </Button>
        )}
        <div className="flex flex-grow max-w-[600px]">
          <input type="search" placeholder="Search" className="rounded-l-full border-secondary-border shadow-inner shadow-secondary py-1 px-4 w-full focus:border-secondary-text outline-none" />
          <Button className="py-2 px-4 rounded-r-full border-decondary-border border border-0">
            <Search />
          </Button>
        </div>
      </form>
      <div className={`flex-shrink-0 md:gap-2 ${showFullWidthSearch ? "hidden" : "flex"}`}>
        <Button onClick={() => setShowFullWidthSearch(true)} size="icon" variant="ghost" className="md:hidden">
          <Search />
        </Button>
        <Button size="icon" variant="ghost">
          <User />
        </Button>
        <Button size="icon" variant="ghost">
          <LayoutGrid />
        </Button>
        <Button size="icon">
          <ShoppingCart />
        </Button>
      </div>
    </div>
    )
}