"use client"

import Link from "next/link"

import { Icons } from "@/components/icons"


import React from 'react'

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import { ModeToggle } from '@/components/mode-toggle'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import { NavigationMenuDemo } from "./navbar"
  
import { Toggle } from "@/components/ui/toggle"
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"

export default function Header() {

  return (
    <div className='flex flex-row justify-between my-3 mx-4'>
        {/* <Toggle>Nandan</Toggle> */}
        {/* <Link href="/login" className={buttonVariants({ variant: "outline" })}>Click here</Link> */}
        <Menubar>
      <MenubarMenu>
        {/* <MenubarTrigger> */}
            <p className="px-3">Nandan</p>

        {/* </MenubarTrigger> */}
      </MenubarMenu>
      </Menubar>

        <NavigationMenuDemo/>


        <ModeToggle/>

    </div>
  )
}
