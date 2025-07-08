"use client";

import { Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Logo } from "./logos/logo";
import { ThemeToggle } from "./theme-toggle";

export const Header = () => {
	const pathName = usePathname();
	return (
		<header className="border-b sticky top-0 z-50 dark:bg-slate-900/90 dark:backdrop-blur-sm dark:border-slate-700 bg-white/80 backdrop-blur-sm">
			<div className="container mx-auto px-4 py-4">
				<div className="flex items-center justify-between">
					<Link className="flex items-center space-x-3" href="/">
						<Logo height={50} />
					</Link>
					<div className="flex items-center space-x-3">
						{pathName !== "/about" ? (
							<Button
								asChild
								className="dark:text-gray-300 text-gray-600 hover:underline underline-offset-2"
								size="sm"
								variant="ghost"
							>
								<Link href="/about">Über uns</Link>
							</Button>
						) : (
							<Button
								asChild
								className="dark:text-gray-300 text-gray-600  hover:underline underline-offset-2"
								size="sm"
								variant="ghost"
							>
								<Link href="/">Zurück</Link>
							</Button>
						)}
						<ThemeToggle />
						<Button
							asChild
							className="bg-gradient-to-r text-white dark:from-blue-600 dark:to-blue-700 dark:hover:from-blue-700 dark:hover:to-blue-800 from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 hidden lg:flex"
						>
							<Link href="/contact">
								<Mail className="w-4 h-4 mr-2" />
								Kontakt
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</header>
	);
};
