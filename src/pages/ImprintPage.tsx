import {
	FileText,
	GraduationCap,
	Mail,
	MapPin,
	MessageSquare,
	Smartphone,
	Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

export default function Imprint() {
	return (
		<div>
			<section className="py-20 px-4">
				<div className="container mx-auto text-center max-w-4xl">
					<Badge
						className="mb-6 px-4 py-2 dark:bg-slate-700 dark:text-gray-300"
						variant="secondary"
					>
						<FileText className="w-4 h-4 mr-2" />
						Rechtliche Informationen
					</Badge>
					<h1 className="text-5xl md:text-6xl font-bold dark:text-white text-gray-900 mb-6 leading-tight">
						Impres
						<span className="dark:bg-gradient-to-r dark:from-blue-400 dark:to-blue-500 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
							sum
						</span>
					</h1>
					<p className="text-xl dark:text-gray-300 text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
						Rechtliche Angaben gemäß §5 TMG sowie Informationen zu unserer
						Organisation und den verantwortlichen Personen.
					</p>
				</div>
			</section>

			<div className="dark:bg-slate-800 bg-white py-16 px-4">
				<div className="max-w-4xl mx-auto">
					<div className="space-y-12">
						{/* Verein Section */}
						<section className="bg-blue-50 p-6 rounded-lg">
							<h2 className="text-2xl font-semibold text-blue-900 mb-4 flex items-center">
								<span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
									<Users className="w-4 h-4" />
								</span>
								Verein
							</h2>
							<div className="ml-11">
								<p className="text-xl font-semibold text-blue-800 mb-3">
									Open Source @ TUM e.V.
								</p>
								<div className="text-gray-700">
									<p className="mb-2">Vertreten durch:</p>
									<ul className="list-disc list-inside space-y-1 ml-4">
										<li>Frank Elsinga (1. Vorsitzender)</li>
										<li>Joscha Henningsen (2. Vorsitzender)</li>
									</ul>
								</div>
							</div>
						</section>

						{/* Campus App Section */}
						<section className="bg-green-50 p-6 rounded-lg">
							<h2 className="text-2xl font-semibold text-green-900 mb-4 flex items-center">
								<span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
									<Smartphone className="w-4 h-4" />
								</span>
								Campus App
							</h2>
							<div className="ml-11 text-gray-700 space-y-3">
								<p>
									Die Campus App wurde von Studierenden in Kooperation und unter
									Leitung des Lehrstuhls für Betriebssysteme erstellt.
								</p>
								<p>
									Für alle Anliegen erreichen Sie den Support unter:
									<a href="mailto:app at tum.de">app at tum dot de</a>
								</p>
								<p>
									Aktuelle Projektleitung erfolgt durch Jakob Körber. Die
									Entwicklung erfolgt primär durch Freiwillige und wird
									öffentlich auf
									<a
										className="text-blue-600 hover:text-blue-800 font-medium mx-1 underline"
										href="https://github.com/TUM-Dev"
										rel="noopener noreferrer"
										target="_blank"
									>
										GitHub
									</a>
									durchgeführt, wo auch der Quelltext für alle Projekte zur
									Einsicht bereit liegt.
								</p>
							</div>
						</section>

						{/* Schirmherr Section */}
						<section className="bg-purple-50 p-6 rounded-lg">
							<h2 className="text-2xl font-semibold text-purple-900 mb-4 flex items-center">
								<span className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
									<GraduationCap className="w-4 h-4" />
								</span>
								Schirmherr
							</h2>
							<div className="ml-11 text-gray-700">
								<p className="mb-1">Senior Vice President Digitalization and IT Systems</p>
								<ul className="list-disc list-inside space-y-1 ml-4">
									<li>Dr.-Ing. Alexander Braun</li>
								</ul>
							</div>
							<div className="ml-11 text-gray-700">
								<p className="font-semibold text-purple-800 mb-2">
									TUM Informatik F13
								</p>
								<p className="mb-1">Lehrstuhl/Fachgebiet für Betriebssysteme</p>
								<ul className="list-disc list-inside space-y-1 ml-4">
									<li>Prof. Dr. Uwe Baumgarten (Emeritus)</li>
									<li>Prof. Dr. Peter Paul Spies (Emeritus)</li>
								</ul>
							</div>
						</section>

						{/* Contact Section */}
						<section className="bg-indigo-50 p-6 rounded-lg">
							<h2 className="text-2xl font-semibold text-indigo-900 mb-4 flex items-center">
								<span className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
									<MessageSquare className="w-4 h-4" />
								</span>
								Kontakt aufnehmen
							</h2>
							<div className="ml-11 text-gray-700 space-y-4">
								<p>
									Falls Sie mit uns in Verbindung treten möchten, können Sie das
									Kontaktformular verwenden oder eine E-Mail an <a href="mailto:leads@tum.dev">leads@tum.dev</a>.
								</p>

								<div className="bg-white p-4 rounded-lg border-l-4 border-indigo-600">
									<p className="font-semibold text-indigo-800 mb-2">
										Open Source @ TUM e.V.<br />
										c/o Florian Schmidt<br />
										Richard Wagner Straße 1<br />
										80333 München<br />
										Deutschland
									</p>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
}
