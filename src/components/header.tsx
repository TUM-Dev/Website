import { Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Logo } from "./logos/logo";
import { ThemeToggle } from "./theme-toggle";

export const Header = () => {
	const location = useLocation();
	return (
		<header className="border-b sticky top-0 z-50 dark:bg-slate-900/90 dark:backdrop-blur-xs dark:border-slate-700 bg-white/80 backdrop-blur-xs">
			<div className="container mx-auto px-4 py-4">
				<div className="flex items-center justify-between">
					<Link className="flex items-center space-x-3" to="/">
						<Logo height={50} />
					</Link>
					<div className="flex items-center space-x-3">
						{location.pathname !== "/about" ? (
							<Button
								asChild
								className="dark:text-gray-300 text-gray-600 hover:underline underline-offset-2"
								size="sm"
								variant="ghost"
							>
								<Link to="/about">Über uns</Link>
							</Button>
						) : (
							<Button
								asChild
								className="dark:text-gray-300 text-gray-600  hover:underline underline-offset-2"
								size="sm"
								variant="ghost"
							>
								<Link to="/">Zurück</Link>
							</Button>
						)}
						<ThemeToggle />
						<Button
							asChild
							className="text-white dark:bg-blue-600 dark:hover:bg-blue-700 bg-blue-600 hover:bg-blue-700 hidden lg:flex"
						>
							<Link to="/contact">
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
