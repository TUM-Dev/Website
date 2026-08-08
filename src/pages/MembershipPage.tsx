import { Calendar, HandCoins, Heart, Users, Vote } from "lucide-react";
import { Link } from "react-router-dom";
import { GithubIcon } from "@/components/ui/github-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const MEMBERSHIP_APPLICATION_URL =
	"https://web.meinverein.de/profile/94918/member-request-application";
const MAILING_LIST_URL =
	"https://groups.google.com/u/0/a/tum.dev/g/announce/about";

export default function MembershipPage() {
	return (
		<div>
			<section className="py-20 px-4">
				<div className="container mx-auto text-center max-w-4xl">
					<Badge
						className="mb-6 px-4 py-2 dark:bg-slate-700 dark:text-gray-300"
						variant="secondary"
					>
						<Heart className="w-4 h-4 mr-2" />
						Aktiv unterstützen
					</Badge>
					<h1 className="text-5xl md:text-6xl font-bold dark:text-white text-gray-900 mb-6 leading-tight">
						Verein
						<span className="dark:bg-linear-to-r dark:from-blue-400 dark:to-blue-500 bg-linear-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
							{" "}
							beitreten
						</span>
					</h1>
					<p className="text-xl dark:text-gray-300 text-gray-600 mb-4 leading-relaxed max-w-3xl mx-auto">
						Open Source @ TUM ist als eingetragener Verein organisiert. Unsere
						Treffen, Events und Projekte stehen allen offen - unabhängig von
						einer Mitgliedschaft. Wer uns darüber hinaus dauerhaft und aktiv
						unterstützen möchte, kann zusätzlich Vereinsmitglied werden.
					</p>
				</div>
			</section>

			{/* No membership required */}
			<section className="py-16 px-4 dark:bg-slate-800 bg-gray-50">
				<div className="container mx-auto max-w-4xl">
					<div className="dark:bg-slate-700 bg-white rounded-lg shadow-lg p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
						<div className="w-14 h-14 shrink-0 bg-green-600 rounded-lg flex items-center justify-center">
							<Calendar className="w-7 h-7 text-white" />
						</div>
						<div>
							<h2 className="text-2xl font-bold dark:text-white text-gray-900 mb-2">
								Mitmachen geht auch ohne Mitgliedschaft
							</h2>
							<p className="dark:text-gray-300 text-gray-600 leading-relaxed">
								Du kannst jederzeit unverbindlich bei unseren Team-Meetings und
								Events vorbeischauen, in unserer Mailingliste mitlesen oder auf
								GitHub zu unseren Projekten beitragen - ganz ohne Mitglied zu
								werden. Eine Vereinsmitgliedschaft ist ein zusätzliches Angebot
								für alle, die uns darüber hinaus fest unterstützen möchten.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Benefits */}
			<section className="py-16 px-4 dark:bg-slate-800 bg-white">
				<div className="container mx-auto max-w-6xl">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold dark:text-white text-gray-900 mb-4">
							Warum Mitglied werden?
						</h2>
						<p className="dark:text-gray-300 text-gray-600 max-w-2xl mx-auto">
							Als Vereinsmitglied stehst du hinter unserer Arbeit und hilfst
							uns, sie langfristig abzusichern
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						<Card className="border-0 shadow-lg dark:bg-slate-700 dark:border-slate-600 bg-gray-50">
							<CardHeader>
								<div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
									<Vote className="w-6 h-6 text-white" />
								</div>
								<CardTitle className="dark:text-white text-gray-900">
									Mitbestimmen
								</CardTitle>
								<CardDescription className="dark:text-gray-300 text-gray-600">
									Als Mitglied hast du Stimmrecht bei der Mitgliederversammlung
									und kannst mitentscheiden, wie sich der Verein entwickelt.
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="border-0 shadow-lg dark:bg-slate-700 dark:border-slate-600 bg-gray-50">
							<CardHeader>
								<div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
									<HandCoins className="w-6 h-6 text-white" />
								</div>
								<CardTitle className="dark:text-white text-gray-900">
									Vereinsarbeit finanzieren
								</CardTitle>
								<CardDescription className="dark:text-gray-300 text-gray-600">
									Dein Mitgliedsbeitrag hilft dabei, Server, Hardware und
									Veranstaltungen für unsere Open Source Projekte zu finanzieren.
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="border-0 shadow-lg dark:bg-slate-700 dark:border-slate-600 bg-gray-50">
							<CardHeader>
								<div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
									<Users className="w-6 h-6 text-white" />
								</div>
								<CardTitle className="dark:text-white text-gray-900">
									Community stärken
								</CardTitle>
								<CardDescription className="dark:text-gray-300 text-gray-600">
									Du wirst offizieller Teil der Hochschulgruppe und stärkst die
									Gemeinschaft, die sich langfristig für Open Source an der TUM
									einsetzt.
								</CardDescription>
							</CardHeader>
						</Card>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-20 px-4 dark:bg-blue-900 bg-blue-600">
				<div className="container mx-auto text-center max-w-4xl">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
						Bereit, Mitglied zu werden?
					</h2>
					<p className="text-xl dark:text-blue-100 text-blue-100 mb-8 leading-relaxed">
						Der Mitgliedsantrag ist in wenigen Minuten ausgefüllt. Du bist dir
						noch unsicher? Schau doch erstmal unverbindlich bei einem unserer
						Treffen vorbei.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button
							asChild
							className="bg-white dark:text-blue-800 text-blue-600 hover:bg-gray-100"
							size="lg"
							variant="secondary"
						>
							<a
								href={MEMBERSHIP_APPLICATION_URL}
								rel="noopener noreferrer"
								target="_blank"
							>
								<Heart className="w-5 h-5 mr-2" />
								Jetzt Mitglied werden
							</a>
						</Button>
						<Button
							asChild
							className="border-white text-slate-900 dark:text-slate-50 hover:bg-white/10"
							size="lg"
							variant="outline"
						>
							<a
								href={MAILING_LIST_URL}
								rel="noopener noreferrer"
								target="_blank"
							>
								<Users className="w-5 h-5 mr-2" />
								Auf dem laufenden bleiben
							</a>
						</Button>
					</div>
					<p className="mt-6 text-blue-100">
						Oder wirf einen Blick auf{" "}
						<Link className="underline underline-offset-2 hover:text-white" to="/mitmachen">
							unsere Projekte
						</Link>{" "}
						auf{" "}
						<a
							className="underline underline-offset-2 hover:text-white inline-flex items-center"
							href="https://github.com/TUM-Dev"
							rel="noopener noreferrer"
							target="_blank"
						>
							<GithubIcon className="w-4 h-4 mx-1" />
							GitHub
						</a>
						.
					</p>
				</div>
			</section>
		</div>
	);
}
