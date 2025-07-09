import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		if (theme === "dark") {
			setTheme("light");
		} else {
			setTheme("dark");
		}
	};

	return (
		<Button
			className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-slate-700"
			onClick={toggleTheme}
			size="sm"
			suppressHydrationWarning
			title={
				theme === "dark"
					? "Dunkel - Klicken für Hell"
					: "Hell - Klicken für Dunkel"
			}
			variant="ghost"
		>
			{theme === "dark" ? (
				<Moon className="w-4 h-4" suppressHydrationWarning />
			) : (
				<Sun className="w-4 h-4" suppressHydrationWarning />
			)}
		</Button>
	);
}
