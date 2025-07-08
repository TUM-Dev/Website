"use client";

import {
	Calendar,
	CalendarIcon,
	Code,
	Github,
	Lightbulb,
	Mail,
	MapPin,
	Users,
	Users2,
} from "lucide-react";
import Link from "next/link";
import { Event } from "@/components/event";
import type { MemberProps } from "@/components/member";
import { Member } from "@/components/member";
import { Project, type ProjectProps } from "@/components/project";
import type { SlideShowItem } from "@/components/slideshow";
import { Slideshow } from "@/components/slideshow";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function HomePage() {
	const members: readonly MemberProps[] = [
		{
			avatar: "/avatars/jakob.webp",
			github: "jakobkoerber",
			leads_project: "Campus App",
			linkedin: "jakobkoerber",
			name: "Jakob Körber",
			role: "Mobile Lead",
		},
		{
			avatar: "/avatars/joscha.webp",
			github: "joschahenningsen",
			leads_project: "Tum.live & tum.sexy",
			linkedin: "joscha-henningsen-27728417b",
			name: "Joscha Henningsen",
			role: "Backend Developer",
		},
		{
			avatar: "/avatars/frank.webp",
			github: "CommanderStorm",
			leads_project: "NavigaTUM",
			linkedin: "frankelsinga",
			name: "Frank Elsinga",
			role: "GeoInformatics Lead",
		},
		{
			avatar: "/avatars/florian.webp",
			leads_project: "Vorstand",
			name: "Florian Schmidt",
			role: "Communication Lead",
		},
		{
			avatar: "/avatars/fabian.webp",
			github: "com8",
			leads_project: "Thesis template",
			name: "Fabian Sauter",
			role: "Latex Expert",
		},
		{
			avatar: "/avatars/placeholder.webp",
			name: "Rischab Garg",
			role: "Backend Developer",
		},
		{
			avatar: "/avatars/kordian.webp",
			github: "kordianbruck",
			linkedin: "kordianbruck",
			name: "Kordian Bruck",
			role: "Lead & Sponsor",
		},
		{
			avatar: "/avatars/benjamin.webp",
			github: "Bentipa",
			linkedin: "benjamin-pabst",
			name: "Benjamin Pabst",
			role: "Campus App",
		},
		{
			avatar: "/avatars/gabriel.webp",
			github: "Friendly-Banana",
			leads_project: "Eat-api",
			name: "Gabriel",
			role: "Backend Developer",
		},
	];
	const slideshow: readonly SlideShowItem[] = [
		{
			alt: "Monatliches Team Meeting",
			caption:
				"Einmal im monat machen wir ein Team Meeting, wo wir Ideen/Probleme besprechen und unseren Fortschritt präsentieren",
			src: "/events/tunix25.webp",
		},
		{
			alt: "Team Events",
			caption:
				"Hin und wieder treffen wir uns für gemeinsame Aktivitäten - hier beispielsweise beim GarNix",
			src: "/events/garnix25.webp",
		},
		//{
		//    src: "/events/hackatum.webp",
		//    alt: "Team bei einem Hackathon",
		//    caption: "48h Hackathon - Intensive Coding-Sessions mit Pizza und viel Kaffee",
		//},
		{
			alt: "Team beim Server-Aufbau",
			caption: "Hands-on: Gemeinsamer Aufbau von neuen Live-Streaming Servern",
			src: "/events/server-bau24.webp",
		},
		{
			alt: "Livestreaming setup für eine ",
			caption:
				"Hin und wieder machen wir LiveStreaming für andere Hochschulgruppen - Hier beispielsweise für den BayStuRa",
			src: "/events/live-stream-baystura24.webp",
		},
		{
			alt: "Team auf einer Konferenz",
			caption:
				"Gemeinsam auf einer Open Source Konferenz - Networking und neue Ideen",
			src: "/events/fossgis25.webp",
		},
		{
			alt: "Team Dinner",
			caption: "Team Dinner - Auch abseits des Codes verstehen wir uns super",
			src: "/events/mc-donalds24.webp",
		},
		{
			alt: "TUM-Projekt Präsentation",
			caption:
				"TUM-Präsentationen - Hin und wieder präsentieren wir IT-Projekte. Hier beispielsweise mit unserem CIO beim iPraktikum",
			src: "/events/ipraktikum23.webp",
		},
		{
			alt: "Projekt Präsentation",
			caption:
				"Projekt-Präsentationen - Wir präsentieren regelmäßig unsere projekte bei diversen veranstaltungen. Hier die StudentClub Fair",
			src: "/events/student-club-fair24.webp",
		},
		{
			alt: "Projekt Präsentation",
			caption:
				"Projekt-Präsentationen - Wir präsentieren regelmäßig unsere projekte bei diversen veranstaltungen. Hier die StudentClub Fair",
			src: "/events/student-club-fair25.webp",
		},
		{
			alt: "Menschen vor einer Photobox, die sie gebaut haben",
			caption:
				"Neben code machen wir auch Veranstaltungen - hier haben wir beispielsweise die Photobox für die Unity gebaut",
			src: "/events/photobox25.webp",
		},
		{
			alt: "Sticker die wir haben",
			caption: "Und natürlich auch Sticker",
			src: "/events/stickers2.webp",
		},
		{
			alt: "Sticker die wir haben",
			caption: "Und mehr Sticker",
			src: "/events/sticker.webp",
		},
	];
	const projects: readonly ProjectProps[] = [
		{
			description: "Live-Streaming Platform für Vorlesungen",
			link: "https://github.com/tum-dev/gocast",
			name: "TUM Live",
			tech: ["Go", "TypeScript", "Docker"],
		},
		{
			description: "Mobile App für TUM Studierende",
			link: "https://github.com/tum-dev/campus_flutter",
			name: "Campus App",
			tech: ["Flutter", "Go"],
		},
		{
			description: "Raumsuche und Navigation am Campus",
			link: "https://github.com/tum-dev/NavigaTUM",
			name: "NavigaTUM",
			tech: ["Rust", "Python", "Vue", "OpenStreetMap"],
		},
		{
			description: "API für Mensapläne und Cafeterien",
			link: "https://github.com/tum-dev/eat-api",
			name: "Eat API",
			tech: ["Python", "Github Actions"],
		},
		{
			description: "Shortlinks",
			link: "https://github.com/tum-dev/TUM.sexy",
			name: "TUM.sexy",
			tech: ["Php"],
		},
		{
			description: "Templates für LaTeX-Abschlussarbeiten",
			link: "https://github.com/tum-dev/tum-thesis-latex",
			name: "tum-thesis-latex",
			tech: ["LaTeX"],
		},
		{
			description:
				"A simple website allowing anonymous reports about security issues, harassment, illegal activities, safety concerns, whistleblowing and whatnot",
			link: "https://github.com/tum-dev/Meldeplattform",
			name: "Meldeplattform",
			tech: ["Go"],
		},
		{
			description:
				"open-source live-streaming stack for recording and streaming lectures",
			link: "https://github.com/tum-dev/LectureMix",
			name: "LectureMix",
			tech: ["Go"],
		},
		{
			description: "",
			link: "#join",
			name: "And many more",
			tech: ["To", "Be", "Decided"],
		},
	];
	return (
		<div>
			<section className="py-20 px-4">
				<div className="container mx-auto text-center max-w-4xl">
					<Link href="https://www.sv.tum.de/sv/hochschulgruppen/">
						<Badge
							className="mb-6 px-4 py-2 dark:bg-slate-700 dark:text-gray-300 dark:hover:text-gray-900"
							variant="secondary"
						>
							<MapPin className="w-4 h-4 mr-2" />
							Hochschulgruppe an der Technischen Universität München
						</Badge>
					</Link>
					<h1 className="text-5xl md:text-6xl font-bold font-sans dark:text-white text-gray-900 mb-6 leading-tight">
						Open Source
						<span className="bg-gradient-to-r dark:from-blue-400 dark:to-blue-500 from-blue-500 to-blue-600 bg-clip-text text-transparent">
							{" @ TUM"}
						</span>
					</h1>
					<p className="text-xl dark:text-gray-300 text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
						Wir arbeiten an verschiedenen Open Source Projekten, organisieren
						Veranstaltungen und bieten Workshops an.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button
							asChild
							className="dark:from-blue-600 dark:to-blue-700 text-white dark:hover:from-blue-700 dark:hover:to-blue-800 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
							size="lg"
						>
							<Link href="https://groups.google.com/u/0/a/tum.dev/g/announce/about">
								<Users className="w-5 h-5 mr-2" />
								Jetzt mitmachen
							</Link>
						</Button>
						<Button
							asChild
							className="dark:hover:bg-slate-600 dark:hover:text-gray-50 dark:text-gray-100 dark:bg-slate-700"
							size="lg"
							variant="outline"
						>
							<Link href="#projects">
								<Github className="w-5 h-5 mr-2" />
								Unsere Projekte
							</Link>
						</Button>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section
				className="py-16 px-4 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-700 bg-gradient-to-br from-gray-50 to-slate-100"
				id="wir-machen"
			>
				<div className="container mx-auto max-w-6xl">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold dark:text-white text-gray-900 mb-4">
							Was wir machen
						</h2>
						<p className="dark:text-gray-300 text-gray-600 max-w-2xl mx-auto">
							Unsere Projekte sind für alle frei verfügbar und wir freuen uns
							über jede Unterstützung.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						<Card className="border-0 shadow-lg hover:shadow-xl transition-shadow dark:bg-slate-700 dark:border-slate-600 bg-white">
							<CardHeader>
								<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
									<Code className="w-6 h-6 text-white" />
								</div>
								<CardTitle className="dark:text-white text-gray-900">
									Software Entwicklung
								</CardTitle>
								<CardDescription className="dark:text-gray-300 text-gray-600">
									Wir entwickeln innovative Open Source Software und tragen zu
									bestehenden Projekten bei.
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="border-0 shadow-lg hover:shadow-xl transition-shadow dark:bg-slate-700 dark:border-slate-600 bg-white">
							<CardHeader>
								<div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
									<Calendar className="w-6 h-6 text-white" />
								</div>
								<CardTitle className="dark:text-white text-gray-900">
									Veranstaltungen
								</CardTitle>
								<CardDescription className="dark:text-gray-300 text-gray-600">
									Wir organisieren regelmäßige Events, Hackathons und Meetups
									für die Open Source Community.
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="border-0 shadow-lg hover:shadow-xl transition-shadow dark:bg-slate-700 dark:border-slate-600 bg-white">
							<CardHeader>
								<div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
									<Lightbulb className="w-6 h-6 text-white" />
								</div>
								<CardTitle className="dark:text-white text-gray-900">
									Workshops
								</CardTitle>
								<CardDescription className="dark:text-gray-300 text-gray-600">
									Wir bieten Workshops zu verschiedenen Technologien und Open
									Source Tools an.
								</CardDescription>
							</CardHeader>
						</Card>
					</div>
				</div>
			</section>

			{/* Upcoming Events Section */}
			<section
				className="py-16 px-4 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-700 bg-gradient-to-br from-gray-50 to-slate-100"
				id="events"
			>
				<div className="container mx-auto max-w-6xl">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold dark:text-white text-gray-900 mb-4">Termine</h2>
						<p className="dark:text-gray-300 text-gray-600">
							Verpasse keine unserer Veranstaltungen und Treffen
						</p>
					</div>

					<div className="grid lg:grid-cols-2 gap-8">
						{/* Regular Meetings */}
						<div className="space-y-4">
							<h3 className="text-xl font-semibold dark:text-white text-gray-900 mb-4 flex items-center">
								<Users2 className="w-5 h-5 mr-2 dark:text-blue-400 text-blue-500" />
								Vergangene Treffen
							</h3>
							<Event
								date="2024-01-01"
								description="Jeden Donnerstag besprechen wir aktuelle Projekte und planen neue Initiativen."
								endTime="16:00"
								location="Raum MI 00.13.009A"
								startTime="14:00"
								title="Git & GitHub Workshop"
								type="meeting"
							></Event>
						</div>

						{/* Upcoming Events */}
						<div className="space-y-4">
							<h3 className="text-xl font-semibold dark:text-white text-gray-900 mb-4 flex items-center">
								<CalendarIcon className="w-5 h-5 mr-2 text-blue-400" />
								Kommende Events
							</h3>
							<Event
								date="2024-01-01"
								description="Lerne die Grundlagen von Git und GitHub für Open Source Projekte."
								endTime="16:00"
								location="Raum MI 00.13.009A"
								startTime="14:00"
								title="Git & GitHub Workshop"
								type="workshop"
							></Event>
							<Event
								date="2024-01-01"
								description="48h Hackathon mit Fokus auf studentische Open Source Projekte."
								endTime="16:00"
								location="TUM Garching"
								startTime="14:00"
								title="TUM Open Source Hackathon"
								type="coding"
							></Event>
							<Event
								date="2024-01-01"
								description="Lockeres Treffen zum Austausch über Open Source Trends und Projekte."
								endTime="16:00"
								location="Mensa Garching"
								startTime="14:00"
								title="Open Source Coffee Chat"
								type="chat"
							></Event>
						</div>
					</div>

					{/* Call to Action for Events */}
					<div className="mt-12 text-center">
						<div className="bg-gradient-to-r dark:from-blue-900 dark:to-indigo-900 from-blue-50 to-indigo-50 rounded-2xl p-8">
							<h3 className="text-2xl font-bold dark:text-white text-gray-900 mb-4">
								Interesse an unseren Events?
							</h3>
							<p className="dark:text-gray-300 text-gray-600 mb-6 max-w-2xl mx-auto">
								Melde dich bei uns, um über kommende Veranstaltungen informiert
								zu werden und keine spannenden Workshops oder Hackathons zu
								verpassen.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Button
									asChild
									className="bg-gradient-to-r text-white dark:from-blue-600 dark:to-blue-700 dark:hover:from-blue-700 dark:hover:to-blue-800 from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
								>
									<Link href="https://groups.google.com/u/0/a/tum.dev/g/announce/about">
										<Mail className="w-4 h-4 mr-2" />
										Event-Updates erhalten
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Projects Section */}
			<section
				className="py-16 px-4 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-700 bg-gradient-to-br from-gray-50 to-slate-100"
				id="projects"
			>
				<div className="container mx-auto max-w-6xl">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold dark:text-white text-gray-900 mb-4">
							Unsere Projekte
						</h2>
						<p className="dark:text-gray-300 text-gray-600">
							Entdecke einige unserer aktuellen Open Source Projekte
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{projects.map((project) => (
							<Project
								description={project.description}
								key={project.name}
								link={project.link}
								name={project.name}
								tech={project.tech}
							/>
						))}
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section
				className="py-16 px-4 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-700 bg-gradient-to-br from-gray-50 to-slate-100"
				id="team"
			>
				<div className="container mx-auto max-w-6xl">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold dark:text-white text-gray-900 mb-4">
							Unser Team
						</h2>
						<p className="dark:text-gray-300 text-gray-600">
							Lerne die Menschen kennen, die unsere Open Source Projekte
							vorantreiben
						</p>
					</div>

					{/* Core Team */}
					<div className="mb-16">
						<h3 className="text-2xl font-semibold dark:text-white text-gray-900 mb-8 text-center">
							Core Team
						</h3>
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{members
								.filter((m) => m.leads_project)
								.map((member) => (
									<Member
										avatar={member.avatar}
										github={member.github}
										key={member.name + member.avatar}
										leads_project={member.leads_project}
										linkedin={member.linkedin}
										name={member.name}
										role={member.role}
									/>
								))}
						</div>
					</div>

					{/* Members */}
					<div>
						<h3 className="text-2xl font-semibold dark:text-white text-gray-900 mb-8 text-center">
							Aktive Mitglieder
						</h3>
						<div
							className={`grid sm:grid-cols-${Math.min(members.filter((m) => !m.leads_project).length, 2)} md:grid-cols-${Math.min(members.filter((m) => !m.leads_project).length, 3)} lg:grid-cols-${Math.min(members.filter((m) => !m.leads_project).length, 4)} xl:grid-cols-${Math.min(members.filter((m) => !m.leads_project).length, 6)} gap-6`}
						>
							{members
								.filter((m) => !m.leads_project)
								.map((member) => (
									<Member
										avatar={member.avatar}
										key={member.name + member.avatar}
										name={member.name}
										role={member.role}
									/>
								))}
						</div>
					</div>
					{/* Join Team CTA */}
					<div className="mt-16 text-center" id="join">
						<div className="bg-gradient-to-r dark:from-blue-900 dark:to-indigo-900 from-blue-50 to-indigo-50 rounded-2xl p-8">
							<h3 className="text-2xl font-bold dark:text-white text-gray-900 mb-4">
								Werde Teil unseres Teams!
							</h3>
							<p className="dark:text-gray-300 text-gray-600 mb-6 max-w-2xl mx-auto">
								Wir suchen immer nach motivierten Entwicklern, Designern und
								Open Source Enthusiasten. Egal ob Anfänger oder Experte - bei
								uns findest du spannende Projekte und ein tolles Team.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Button
									asChild
									className="bg-gradient-to-r dark:from-blue-600 dark:to-blue-700 dark:hover:from-blue-700 dark:hover:to-blue-800 from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
								>
									<Link href="https://groups.google.com/u/0/a/tum.dev/g/announce/about">
										<Users className="w-4 h-4 mr-2" />
										Team beitreten
									</Link>
								</Button>

								<Button
									asChild
									className="dark:hover:bg-slate-600 dark:hover:text-gray-50 dark:text-gray-100 dark:bg-slate-700 bg-black text-white hover:text-gray-50 hover:bg-gray-900"
									variant="secondary"
								>
									<Link href="#projects">
										<Github className="w-4 h-4 mr-2" />
										Projekte ansehen
									</Link>
								</Button>
							</div>
						</div>
					</div>

					{/* Team Activities Slideshow */}
					<div className="mt-16">
						<div className="text-center mb-8">
							<h3 className="text-2xl font-bold dark:text-white text-gray-900 mb-4">
								Einblicke in unser Team
							</h3>
							<p className="dark:text-gray-300 text-gray-600">
								Von Hackathons bis Server-Aufbau - hier siehst du, was wir
								gemeinsam erleben
							</p>
						</div>

						<Slideshow images={slideshow} />
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section
				className="py-20 px-4 bg-gradient-to-r dark:from-blue-800 dark:to-blue-900 from-blue-500 to-blue-600"
				id="cta"
			>
				<div className="container mx-auto text-center max-w-4xl">
					<h2 className="text-4xl font-bold text-white mb-6">
						Lust mitzumachen?
					</h2>
					<p className="text-xl dark:text-blue-100 text-blue-100 mb-8 leading-relaxed">
						Wenn du Lust hast, bei uns mitzumachen, dann schau doch mal bei
						einem unserer Treffen vorbei. <br />
						Wende dich dafür einfach an uns - wir freuen uns auf dich!
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button
							className="bg-white dark:text-blue-800 text-blue-600 hover:bg-gray-100"
							size="lg"
							variant="secondary"
						>
							<Mail className="w-5 h-5 mr-2" />
							app (at) tum.de
						</Button>
						<Button
							className="border-white text-slate-900 dark:text-slate-50 hover:bg-white/10"
							size="lg"
							variant="outline"
						>
							<Users className="w-5 h-5 mr-2" />
							Zu unseren Treffen
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
