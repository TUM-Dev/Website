"use client";

import {
	Award,
	Heart,
	History,
	Lightbulb,
	Mail,
	Target,
	TrendingUp,
	Users,
	Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import NavigaTUMLogo from "@/public/icons/navigatum.svg";
import TUMLiveLogo from "@/public/icons/tum-live.svg";

export default function AboutPage() {
	const { theme } = useTheme();

	return (
		<div>
			<section className="py-20 px-4">
				<div className="container mx-auto text-center max-w-4xl">
					<Badge
						className="mb-6 px-4 py-2 dark:bg-slate-700 dark:text-gray-300"
						variant="secondary"
					>
						<History className="w-4 h-4 mr-2" />
						Unsere Geschichte
					</Badge>
					<h1 className="text-5xl md:text-6xl font-bold dark:text-white text-gray-900 mb-6 leading-tight">
						Über
						<span className="dark:bg-gradient-to-r dark:from-blue-400 dark:to-blue-500 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
							{" "}
							uns{" "}
						</span>
					</h1>
					<p className="text-xl dark:text-gray-300 text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
						Von einer einfachen App-Idee im Jahr 2011 zu einer der
						erfolgreichsten Universitäts-Apps Deutschlands - erfahre mehr über
						unsere Reise und Vision.
					</p>
				</div>
			</section>

			{/* Origin Story Section */}
			<section className="py-16 px-4 dark:bg-slate-800 bg-white">
				<div className="container mx-auto max-w-6xl">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<div className="flex items-center mb-6">
								<div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
									<Target className="w-6 h-6 text-white" />
								</div>
								<h2 className="text-3xl font-bold dark:text-white text-gray-900">
									Ursprung
								</h2>
							</div>
							<div className="space-y-4 dark:text-gray-300 text-gray-600 text-lg leading-relaxed">
								<p>
									Das Open Source @ TUM Developer Team (TUM-Dev) setzt sich
									zusammen aus Freiwilligen, Studierenden und Mitarbeitenden. In
									unserer Freizeit arbeiten wir an diesen verschiedenen
									Projekten, welche teilweise schon seit 2011 bestehen.
								</p>
								<p>
									Damals initiiert durch ein App Projekt im Rahmen des{" "}
									<b className="font-semibold dark:text-blue-400 text-blue-600">
										Android Praktikums
									</b>
									, unter der Betreuung von Nils Kannengießer, entstand die
									erste Idee eine App für den Campus zu entwickeln, die den
									TUM-Mitgliedern den Alltag an einer Universität mit über
									40.000 Studierenden und 10.000 Mitarbeitenden erleichtert.
								</p>
							</div>
						</div>
						<div className="relative">
							<div className="bg-gradient-to-r dark:from-blue-900 dark:to-indigo-900 from-blue-50 to-indigo-50 rounded-2xl p-8">
								<div className="grid grid-cols-2 gap-6">
									<div className="text-center">
										<div className="text-3xl font-bold dark:text-white text-gray-900 mb-2">
											2011
										</div>
										<div className="text-sm dark:text-gray-300 text-gray-500">
											Projektstart
										</div>
									</div>
									<div className="text-center">
										<div className="text-3xl font-bold dark:text-white text-gray-900 mb-2">
											40k+
										</div>
										<div className="text-sm dark:text-gray-300 text-gray-500">
											Studierende
										</div>
									</div>
									<div className="text-center">
										<div className="text-3xl font-bold dark:text-white text-gray-900 mb-2">
											10k+
										</div>
										<div className="text-sm dark:text-gray-300 text-gray-500">
											Mitarbeitende
										</div>
									</div>
									<div className="text-center">
										<div className="text-3xl font-bold dark:text-white text-gray-900 mb-2">
											20k+
										</div>
										<div className="text-sm dark:text-gray-300 text-gray-500">
											Aktive Nutzer
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Success Story Section */}
			<section className="py-16 px-4 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-700 bg-gradient-to-br from-gray-50 to-slate-100">
				<div className="container mx-auto max-w-6xl">
					<div className="text-center mb-12">
						<div className="flex items-center justify-center mb-6">
							<div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mr-4">
								<Award className="w-6 h-6 text-white" />
							</div>
							<h2 className="text-3xl font-bold dark:text-white text-gray-900">
								Erfolgsgeschichte
							</h2>
						</div>
					</div>

					<div className="grid md:grid-cols-3 gap-8 mb-12">
						<Card className="border-0 shadow-lg dark:bg-slate-700 dark:border-slate-600 bg-white">
							<CardHeader className="text-center">
								<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
									<TrendingUp className="w-8 h-8 text-white" />
								</div>
								<CardTitle className="dark:text-white text-gray-900">
									20.000+ Nutzer
								</CardTitle>
								<CardDescription className="dark:text-gray-300 text-gray-600">
									Eine der erfolgreichsten Apps an deutschen Universitäten
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="border-0 shadow-lg dark:bg-slate-700 dark:border-slate-600 bg-white">
							<CardHeader className="text-center">
								<div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
									<Zap className="w-8 h-8 text-white" />
								</div>
								<CardTitle className="dark:text-white text-gray-900">
									Kontinuierliche Innovation
								</CardTitle>
								<CardDescription className="dark:text-gray-300 text-gray-600">
									Ständige Weiterentwicklung für die digitale Universität der
									Zukunft
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="border-0 shadow-lg dark:bg-slate-700 dark:border-slate-600 bg-white">
							<CardHeader className="text-center">
								<div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
									<Heart className="w-8 h-8 text-white" />
								</div>
								<CardTitle className="dark:text-white text-gray-900">
									Community-getrieben
								</CardTitle>
								<CardDescription className="dark:text-gray-300 text-gray-600">
									Entwickelt von Studierenden für Studierende in ehrenamtlicher
									Arbeit
								</CardDescription>
							</CardHeader>
						</Card>
					</div>

					<div className="bg-gradient-to-r dark:from-blue-900 dark:to-indigo-900 from-blue-50 to-indigo-50 rounded-2xl p-8">
						<p className="text-lg dark:text-gray-200 text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
							Heute ist die App mit über 20.000 aktiven Nutzern eine der
							<b>
								{" "}
								erfolgreichsten Apps, die an deutschen Universitäten angeboten
								werden
							</b>
							. Viele weitere Ideen sind mittlerweile ein Teil von{" "}
							<b className="font-semibold dark:text-blue-400 text-blue-600">
								OpenSource @ TUM
							</b>
							. Im regen Austausch entwickeln wir neue Features für die{" "}
							<b>digitale Universität der Zukunft</b>.
						</p>
					</div>
				</div>
			</section>

			{/* App Evolution Section */}
			<section className="py-16 px-4 dark:bg-slate-800 bg-white">
				<div className="container mx-auto max-w-6xl">
					<div className="flex items-center justify-center mb-12">
						<Image
							alt="TUM Campus App Logo"
							className="rounded-lg flex items-center justify-center mr-4"
							height={60}
							src="/icons/tca.webp"
							width={60}
						/>
						<h2 className="text-4xl font-bold dark:text-white text-gray-900">
							Campus App
						</h2>
					</div>

					<div className="grid lg:grid-cols-2 gap-12">
						<div>
							<h3 className="text-2xl font-semibold dark:text-white text-gray-900 mb-6">
								Evolution über die Jahre
							</h3>
							<div className="space-y-4 dark:text-gray-300 text-gray-600 text-lg leading-relaxed">
								<p>
									Die App hat über die Jahre immer mehr Funktionen aufgenommen.
									Wir mussten aber auch mit der Zeit manche Funktionalitäten
									wieder entfernen. Über die Jahre hat sich sowohl die Android
									App als auch die iOS App mehrmals neu erfunden.
								</p>
								<p>
									Neue Richtlinien für das bestmögliche Aussehen einer App oder
									eine verbesserte Usability haben unsere Entwickler*innen dazu
									bewegt, das Konzept, wie die Campus App funktionieren soll,
									immer wieder zu modifizieren.
								</p>
							</div>
							<div className="mt-6">
								<p className="text-sm dark:text-gray-300 text-gray-500">
									Questions or technical support? Contact us at{" "}
									<Link
										className="dark:text-blue-400 text-blue-600 hover:underline"
										href="mailto:app (at) tum.de"
									>
										app (at) tum.de
									</Link>
								</p>
							</div>
						</div>

						<div className="space-y-6">
							<div className="border-l-4 dark:border-l-blue-400 border-l-blue-500 pl-6">
								<h4 className="font-semibold dark:text-white text-gray-900 mb-2">
									Früher: Reine Informationsplattform
								</h4>
								<p className="dark:text-gray-300 text-gray-600">
									Ursprünglich als einfache Informationsquelle für Campus-Daten
									konzipiert
								</p>
							</div>

							<div className="border-l-4 dark:border-l-green-400 border-l-green-500 pl-6">
								<h4 className="font-semibold dark:text-white text-gray-900 mb-2">
									Heute: Umfassende Campus-Plattform
								</h4>
								<ul className="dark:text-gray-300 text-gray-600 space-y-2 list-disc ms-5">
									<li>
										<strong>Digital Student Card:</strong> Zugang zu services
										wie der Bibelothek, Mensa oder StudiTUM
									</li>
									<li>
										<strong>Mensa:</strong> Wissen was es in der mensa gibt ohne
										hin zu gehen
									</li>
									<li>
										<strong>News &amp; Campus:</strong> News über Student Clubs,
										Fachschaften oder die Uni bekommen
									</li>
									<li>
										<strong>Lernräume, Noten, Vorlesungen:</strong>{" "}
										Kollaborative Zusammenarbeit ab dem ersten Semester
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* NavigaTUM Section */}
			<section className="py-16 px-4 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-700 bg-gradient-to-br from-gray-50 to-slate-100">
				<div className="container mx-auto max-w-6xl">
					<div className="text-center mb-12">
						<div className="flex items-center justify-center mb-6">
							<Image alt="NavigaTUM Logo" height={60} src={NavigaTUMLogo} />
						</div>
						<p className="text-xl dark:text-gray-300 text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
							2021 wurde NavigaTUM ins Leben gerufen, um den in die Jahre
							gekommenen Roomfinder durch eine moderne Lösung zu ersetzen. Das
							von Studierenden für Studierende entwickelte Tool hilft dabei,
							sich an der{" "}
							<Link
								className="dark:text-blue-400 text-blue-600 hover:underline"
								href="https://tum.de"
							>
								TUM
							</Link>{" "}
							zurechtzufinden.
						</p>
					</div>

					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<h3 className="text-2xl font-semibold dark:text-white text-gray-900 mb-6">
								Was NavigaTUM bietet
							</h3>
							<div className="space-y-4 dark:text-gray-300 text-gray-600 text-lg leading-relaxed">
								<p>
									NavigaTUM bietet interaktive Campus-Karten mit einer
									schnellen, tippfehlertoleranten Raumsuche, unterstützt
									verschiedene Raumcode-Formate sowie generische Bezeichnungen
									und stellt sämtliche Funktionen über eine offene API zur
									Verfügung. Die Plattform ermöglicht präzise
									End-zu-End-Navigation mit Turn-by-Turn-Anweisungen und
									verfolgt das Ziel, die Orientierung auf dem Campus für
									Studierende und Mitarbeitende zu verbessern.
								</p>
								<p>
									Aktuell arbeiten wir an einem einfacheren Weg für Feedback und
									Datenkorrekturen sowie an der automatischen Kartenerstellung
									aus CAD-Daten.
								</p>
							</div>
							<div className="mt-6">
								<p className="text-sm dark:text-gray-300 text-gray-500">
									Questions or technical support? Contact us at{" "}
									<Link
										className="dark:text-blue-400 text-blue-600 hover:underline"
										href="mailto:navigatum (at) tum.de"
									>
										navigatum (at) tum.de
									</Link>
								</p>
							</div>
						</div>

						<div className="relative">
							<div className="bg-gradient-to-r dark:from-blue-900 dark:to-indigo-900 from-blue-50 to-indigo-50 rounded-2xl p-8">
								<div className="relative mb-4">
									<Image
										alt="NavigaTUM Navigation Screenshot"
										className="w-full rounded-lg shadow-lg"
										height={400}
										src={`/screenshots/navigatum-nav-${theme}.webp`}
										width={600}
									/>
								</div>
								<div className="text-center">
									<h4 className="font-semibold dark:text-white text-gray-900 mb-2">
										Intuitive Navigation
									</h4>
									<p className="text-sm dark:text-gray-300 text-gray-600">
										Moderne Benutzeroberfläche für schnelle Orientierung auf dem
										Campus
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* TUM.live Section */}
			<section className="py-16 px-4 dark:bg-slate-800 bg-white">
				<div className="container mx-auto max-w-6xl">
					<div className="text-center mb-12">
						<div className="flex items-center justify-center mb-6">
							<Image alt="TUM.live Logo" height={90} src={TUMLiveLogo} />
						</div>
						<p className="text-xl dark:text-gray-300 text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
							Our livestreaming and video-on-demand service for lectures at the
							School of Computation, Information and Technology. Watch your
							lectures live or as recordings from the comfort of your home.
						</p>
					</div>

					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<h3 className="text-2xl font-semibold dark:text-white text-gray-900 mb-6">
								Features & Coverage
							</h3>
							<div className="space-y-4 dark:text-gray-300 text-gray-600 text-lg leading-relaxed">
								<p>
									TUM.live automatically records and streams lectures in
									equipped rooms across campus, including MW0001, MW2001, MI HS
									1-3, Audimax, and various seminar rooms. Lecturers receive
									notifications before each semester to configure streaming
									preferences and the rest works automatically.
								</p>
								<p>
									For events in other locations, instructors can stream directly
									using software like OBS or Zoom. All content is available both
									live and on-demand, making lectures accessible anytime,
									anywhere.
								</p>
							</div>
							<div className="mt-6">
								<p className="text-sm dark:text-gray-300 text-gray-500">
									Questions or technical support? Contact us at{" "}
									<Link
										className="dark:text-blue-400 text-blue-600 hover:underline"
										href="mailto:live (at) rbg.tum.de"
									>
										live (at) rbg.tum.de
									</Link>
								</p>
							</div>
						</div>

						<div className="relative">
							<div className="bg-gradient-to-r dark:from-red-900 dark:to-pink-900 from-red-50 to-pink-50 rounded-2xl p-8">
								<div className="relative mb-4">
									<Image
										alt="TUM.live Landing Page Screenshot"
										className="w-full rounded-lg shadow-lg"
										height={400}
										src={`/screenshots/tum-live-landing-page-${theme}.webp`}
										width={600}
									/>
								</div>
								<div className="text-center">
									<h4 className="font-semibold dark:text-white text-gray-900 mb-2">
										Lecture Streaming Platform
									</h4>
									<p className="text-sm dark:text-gray-300 text-gray-600">
										Access live and recorded lectures from anywhere
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Acknowledgments Section */}
			<section className="py-16 px-4 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-700 bg-gradient-to-br from-gray-50 to-slate-100">
				<div className="container mx-auto max-w-6xl">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold dark:text-white text-gray-900 mb-4">
							Dankesworte
						</h2>
						<p className="dark:text-gray-300 text-gray-600 max-w-2xl mx-auto">
							Unser Erfolg wäre ohne die Unterstützung wichtiger
							Persönlichkeiten nicht möglich gewesen
						</p>
					</div>

					<div className="grid gap-8">
						<Card
							className="border-0 shadow-lg dark:bg-slate-700 dark:border-slate-600 bg-white"
							style={{ margin: "0 auto", width: "50%" }}
						>
							<CardContent className="p-8 text-center">
								<div className="relative mb-4">
									<Image
										alt="Bild von Dr.-Ing. Alexander Braun"
										className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-blue-500"
										height={96}
										src="/avatars/braun.webp"
										width={96}
									/>
								</div>
								<h3 className="text-xl font-semibold dark:text-white text-gray-900 mb-3">
									CIO Dr.-Ing. Alexander Braun
								</h3>
								<p className="dark:text-gray-300 text-gray-600 leading-relaxed">
									Leistet finanzielle und organisatorische Unterstützung, die es
									uns ermöglicht, unsere Projekte kontinuierlich
									weiterzuentwickeln und zu verbessern.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Future Vision Section */}
			<section className="py-16 px-4 dark:bg-slate-800 bg-white">
				<div className="container mx-auto max-w-6xl text-center">
					<div className="bg-gradient-to-r dark:from-blue-900 dark:to-indigo-900 from-blue-50 to-indigo-50 rounded-2xl p-12">
						<div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
							<Lightbulb className="w-8 h-8 text-white" />
						</div>
						<h2 className="text-3xl font-bold dark:text-white text-gray-900 mb-6">
							Unsere Zukunft
						</h2>
						<p className="text-xl dark:text-gray-300 text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
							Wir freuen uns, auch in Zukunft weiter an der App arbeiten zu
							dürfen und die digitale Transformation der Universität
							mitzugestalten.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								asChild
								className="font-semibold text-white bg-gradient-to-r dark:from-blue-600 dark:to-blue-700 dark:hover:from-blue-700 dark:hover:to-blue-800 from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
								size="lg"
							>
								<Link href="https://groups.google.com/u/0/a/tum.dev/g/announce/about">
									<Users className="w-5 h-5 mr-2" />
									Jetzt mitmachen
								</Link>
							</Button>
							<Button
								asChild
								className=" font-semibold *:dark:border-slate-600 dark:text-gray-300 dark:hover:bg-slate-700"
								size="lg"
								variant="outline"
							>
								<Link href="/contact">
									{" "}
									<Mail className="w-5 h-5 mr-2" />
									Kontakt aufnehmen
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
