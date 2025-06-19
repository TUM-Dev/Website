"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { useTheme } from "next-themes"
import LogoLightIcon from "../public/icons/logo-light.svg"
import LogoDarkIcon from "../public/icons/logo-dark.svg"

export const Header = () => {
  const { theme } = useTheme();
  return (
    <header className="border-b sticky top-0 z-50 dark:bg-slate-900/90 dark:backdrop-blur-sm dark:border-slate-700 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              height={50}
              priority  
              src={theme==="dark"? LogoDarkIcon : LogoLightIcon}
              alt="Logo von Open Source @ TUM"
              title="Open Source @ TUM"
            />
          </Link>
          <div className="flex items-center space-x-3">
            <Link href="/about">
              <Button variant="ghost" size="sm" className="dark:text-gray-300 text-gray-600">
                Über uns
              </Button>
            </Link>
            <ThemeToggle />
            <Button className="bg-gradient-to-r dark:from-blue-600 dark:to-blue-700 dark:hover:from-blue-700 dark:hover:to-blue-800 from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 hidden lg:flex">
              <Mail className="w-4 h-4 mr-2" />
              Kontakt
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
