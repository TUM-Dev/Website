import { Apple, Bus, Newspaper, PlayCircle, Smartphone } from "lucide-react";
import { GithubIcon } from "@/components/ui/github-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
} from "@/components/ui/card";

const APP_STORE_URL =
	"https://apps.apple.com/de/app/tum-campus-app/id1557123392";
const PLAY_STORE_URL =
	"https://play.google.com/store/apps/details?id=de.tum.in.tumcampus&hl=de";

export default function AppsPage() {
	return (
		<div>
			<section className="py-20 px-4">
				<div className="container mx-auto text-center max-w-4xl">
					<Badge
						className="mb-6 px-4 py-2 dark:bg-slate-700 dark:text-gray-300"
						variant="secondary"
					>
						<Smartphone className="w-4 h-4 mr-2" />
						Für unterwegs
					</Badge>
					<h1 className="text-5xl md:text-6xl font-bold dark:text-white text-gray-900 mb-6 leading-tight">
						Unsere
						<span className="dark:bg-linear-to-r dark:from-blue-400 dark:to-blue-500 bg-linear-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
							{" "}
							Apps
						</span>
					</h1>
					<p className="text-xl dark:text-gray-300 text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
						Neben unseren Web-Projekten entwickeln wir auch mobile Apps für
						den Alltag an der TUM.
					</p>
				</div>
			</section>

			<section className="py-16 px-4 dark:bg-slate-800 bg-white">
				<div className="container mx-auto max-w-6xl">
					<Card className="border-0 shadow-lg dark:bg-slate-700 dark:border-slate-600 bg-gray-50 overflow-hidden">
						<CardContent className="p-0">
							<div className="grid lg:grid-cols-2 items-center">
								<img
									alt="Screenshot der TUM Campus App"
									className="w-full h-full object-cover max-h-[560px]"
									src="/screenshots/android_1.webp"
								/>
								<div className="p-8 lg:p-12">
									<h2 className="text-3xl font-bold dark:text-white text-gray-900 mb-4">
										TUM Campus App
									</h2>
									<p className="dark:text-gray-300 text-gray-600 mb-6 leading-relaxed">
										Die Campus App begleitet dich durch dein Studium an der
										TUM - von Abfahrtszeiten des öffentlichen Nahverkehrs bis
										zu aktuellen TUM News, gebündelt in einer App.
									</p>

									<div className="flex flex-wrap gap-2 mb-6">
										<Badge
											className="dark:bg-slate-600 dark:text-gray-300"
											variant="secondary"
										>
											Flutter
										</Badge>
										<Badge
											className="dark:bg-slate-600 dark:text-gray-300"
											variant="secondary"
										>
											Go
										</Badge>
										<Badge
											className="dark:bg-slate-600 dark:text-gray-300"
											variant="secondary"
										>
											iOS
										</Badge>
										<Badge
											className="dark:bg-slate-600 dark:text-gray-300"
											variant="secondary"
										>
											Android
										</Badge>
									</div>

									<div className="space-y-3 mb-8">
										<div className="flex items-center dark:text-gray-300 text-gray-600">
											<Bus className="w-5 h-5 mr-3 shrink-0 dark:text-blue-400 text-blue-500" />
											Abfahrtszeiten des öffentlichen Nahverkehrs in Echtzeit
										</div>
										<div className="flex items-center dark:text-gray-300 text-gray-600">
											<Newspaper className="w-5 h-5 mr-3 shrink-0 dark:text-blue-400 text-blue-500" />
											Aktuelle TUM News auf einen Blick
										</div>
									</div>

									<div className="flex flex-wrap gap-4">
										<Button asChild className="dark:bg-blue-600 dark:hover:bg-blue-700 bg-blue-600 hover:bg-blue-700 text-white">
											<a
												href={PLAY_STORE_URL}
												rel="noopener noreferrer"
												target="_blank"
											>
												<PlayCircle className="w-4 h-4 mr-2" />
												Google Play
											</a>
										</Button>
										<Button asChild className="dark:bg-blue-600 dark:hover:bg-blue-700 bg-blue-600 hover:bg-blue-700 text-white">
											<a
												href={APP_STORE_URL}
												rel="noopener noreferrer"
												target="_blank"
											>
												<Apple className="w-4 h-4 mr-2" />
												App Store
											</a>
										</Button>
										<Button
											asChild
											className="dark:border-slate-500 dark:text-gray-200 dark:hover:bg-slate-600 border-gray-300 text-gray-700 hover:bg-gray-100"
											variant="outline"
										>
											<a
												href="https://github.com/tum-dev/campus_flutter"
												rel="noopener noreferrer"
												target="_blank"
											>
												<GithubIcon className="w-4 h-4 mr-2" />
												Quellcode
											</a>
										</Button>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</section>
		</div>
	);
}
