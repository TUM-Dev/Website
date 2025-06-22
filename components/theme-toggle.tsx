import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        if (theme == "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    };

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            title={theme == "dark" ? "Dunkel - Klicken für Hell" : "Hell - Klicken für Dunkel"}
            className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-slate-700"
        >
            {theme == "dark" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
        </Button>
    );
}
