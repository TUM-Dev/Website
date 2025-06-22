"use client";

import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import LogoDarkIcon from "../public/icons/logo-dark.svg";
import LogoLightIcon from "../public/icons/logo-light.svg";
import { ThemeToggle } from "./theme-toggle";

export const Header = () => {
	const { theme } = useTheme();
	return (
		<header className="border-b sticky top-0 z-50 dark:bg-slate-900/90 dark:backdrop-blur-sm dark:border-slate-700 bg-white/80 backdrop-blur-sm">
			<div className="container mx-auto px-4 py-4">
				<div className="flex items-center justify-between">
					<Link className="flex items-center space-x-3" href="/">
						<Image
							alt="Logo von Open Source @ TUM"
							height={50}
							priority
							src={theme === "dark" ? LogoDarkIcon : LogoLightIcon}
							title="Open Source @ TUM"
						/>
					</Link>
					<div className="flex items-center space-x-3">
						<Link href="/about">
							<Button
								className="dark:text-gray-300 text-gray-600"
								size="sm"
								variant="ghost"
							>
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
	);
};
