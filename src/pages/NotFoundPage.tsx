import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { NotFoundIcon } from "@/components/logos/404";
import { Button } from "@/components/ui/button";

export default function Custom404() {
	return (
		<div className="container mx-auto text-center max-w-4xl flex items-center flex-col grow gap-4  mb-20">
			<NotFoundIcon height={300} />
			<h1 className="text-zinc-900 dark:text-zinc-100 text-xl">
				Die angeforderte Seite wurde nicht gefunden.
			</h1>
			<p className="text-zinc-600 dark:text-zinc-200 text-md">
				Dies könnte sein, weil wir einen Fehler gemacht haben
			</p>
			<div className="flex flex-row gap-4">
				<Button
					asChild
					className="dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700 bg-blue-600 hover:bg-blue-700 text-white"
					size="lg"
				>
					<Link to="/">Zur Startseite</Link>
				</Button>
				<Button
					className="bg-white dark:text-blue-800 border text-blue-600 hover:bg-gray-100"
					size="lg"
					variant="secondary"
				>
					<Mail className="w-5 h-5 mr-2" />
					app (at) tum.de
				</Button>
			</div>
		</div>
	);
}
