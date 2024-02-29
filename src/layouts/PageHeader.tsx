import React, { useState } from "react";
import { ArrowLeft, Bell, LayoutGrid, Menu, Mic, Search, ShoppingCart, Upload, User } from "lucide-react"
import logo  from '../assets/OIG1.png';
import { Button } from "../components/Button";

export function PageHeader () {
  const [showFullWidthSearch, setShowFullWidthSearch] =useState(false)

    return (
    <div className="flex gap-10 lg:gap-20 justify-between bg-secondary-dark/70 py-2">
      <div className={`gap-4 items-center flex-shrink-0 ${showFullWidthSearch ? "hidden" : "flex"}`}>
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
        <a href="/">
          <img src={logo} className="h-12" alt="React Logo" />
        </a>
      </div>
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