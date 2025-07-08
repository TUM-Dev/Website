"use client";

import {
	AlertCircle,
	Database,
	FileText,
	Settings,
	Shield,
	User,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function DataProtection() {
	return (
		<div>
			<section className="py-20 px-4">
				<div className="container mx-auto text-center max-w-4xl">
					<Badge
						className="mb-6 px-4 py-2 dark:bg-slate-700 dark:text-gray-300"
						variant="secondary"
					>
						<Shield className="w-4 h-4 mr-2" />
						Datenschutz
					</Badge>
					<h1 className="text-5xl md:text-6xl font-bold dark:text-white text-gray-900 mb-6 leading-tight">
						Datenschutz
						<span className="dark:bg-gradient-to-r dark:from-blue-400 dark:to-blue-500 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
							erklärung
						</span>
					</h1>
					<p className="text-xl dark:text-gray-300 text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
						Erfahren Sie, wie wir Ihre persönlichen Daten erfassen, verwenden
						und schützen. Transparenz und Datenschutz haben für uns höchste
						Priorität.
					</p>
				</div>
			</section>

			<div className="dark:bg-slate-800 bg-white py-16 px-4">
				<div className="max-w-4xl mx-auto">
					<div className="space-y-12">
						{/* Verantwortlicher Section */}
						<section
							className="bg-blue-50 p-6 rounded-lg"
							id="verantwortlicher"
						>
							<h2 className="text-2xl font-semibold text-blue-900 mb-4 flex items-center">
								<span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
									<User className="w-4 h-4" />
								</span>
								Verantwortlicher
							</h2>
							<div className="ml-11 space-y-3">
								<p className="text-gray-700">
									Verantwortlich für die Datenverarbeitung im Sinne der
									Datenschutz-Grundverordnung (DSGVO) ist:
								</p>
								<div className="bg-white p-4 rounded-lg border-l-4 border-blue-600">
									<address className="text-gray-700 not-italic">
										<div className="space-y-1">
											<p className="font-semibold text-blue-800">
												OpenSource @ TUM e.V.
											</p>
											<p>
												<span className="font-medium">E-Mail:</span> app at tum
												dot de
											</p>
											<p>
												<span className="font-medium">Hosting:</span> Die Server
												werden vom <strong>Leibniz-Rechenzentrum (LRZ)</strong>{" "}
												in Deutschland betrieben.
											</p>
										</div>
									</address>
								</div>
							</div>
						</section>

						{/* Erhobene Daten Section */}
						<section className="bg-green-50 p-6 rounded-lg" id="daten">
							<h2 className="text-2xl font-semibold text-green-900 mb-6 flex items-center">
								<span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
									<Database className="w-4 h-4" />
								</span>
								Erhobene Daten
							</h2>

							<div className="ml-11 space-y-8">
								<article className="bg-white p-6 rounded-lg border-l-4 border-green-600">
									<h3 className="text-xl font-semibold text-green-800 mb-4">
										a) Technische Basisinformationen
									</h3>
									<div className="space-y-4">
										<p className="text-gray-700">
											Beim Start und während der Nutzung der App werden folgende
											technische Informationen erhoben:
										</p>
										<ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
											<li>Betriebssystem-Version (z. B. Android-Version)</li>
											<li>App-Version</li>
											<li>API-Zugriffe und App-Funktionalitäten</li>
											<li>Geräteinformationen (z. B. Hersteller, Modell)</li>
											<li>Verbindung zu Internet/Server</li>
										</ul>
										<p className="text-gray-700">
											Diese Daten dienen ausschließlich zur Sicherstellung des
											technischen Betriebs, zur Fehleranalyse und zur
											Verbesserung der App.
										</p>
										<div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
											<div className="flex">
												<AlertCircle className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm text-yellow-800">
														<strong>Hinweis:</strong> Auch Google (als Betreiber
														des Play Store) kann unabhängig von uns Daten im
														Rahmen der App-Installation und -Nutzung erheben.
														Bitte beachten Sie hierzu die{" "}
														<Link
															className="text-yellow-900 hover:text-yellow-700 underline font-medium"
															href="https://policies.google.com/privacy?hl=de"
														>
															Datenschutzbestimmungen von Google
														</Link>
														.
													</p>
												</div>
											</div>
										</div>
									</div>
								</article>

								<article className="bg-white p-6 rounded-lg border-l-4 border-green-600">
									<h3 className="text-xl font-semibold text-green-800 mb-4">
										b) Anonyme Nutzungsdaten
									</h3>
									<p className="text-gray-700">
										Zur Optimierung der App erfassen wir anonymisierte
										Informationen über die Nutzung einzelner Funktionen.
										Beispielsweise wird registriert, wie häufig bestimmte
										Bereiche oder Schnittstellen der App verwendet werden. Eine
										Identifizierung einzelner Nutzer ist dabei nicht möglich.
									</p>
								</article>

								<article className="bg-white p-6 rounded-lg border-l-4 border-green-600">
									<h3 className="text-xl font-semibold text-green-800 mb-4">
										c) Fehler- und Absturzberichte (Firebase Crashlytics)
									</h3>
									<div className="space-y-4">
										<p className="text-gray-700">
											Zur Analyse von App-Abstürzen verwenden wir{" "}
											<strong>Firebase Crashlytics</strong>, einen Dienst von:
										</p>
										<div className="bg-gray-50 p-3 rounded border">
											<address className="text-gray-700 not-italic text-sm">
												<div className="space-y-1">
													<p className="font-medium">Google Ireland Ltd.</p>
													<p>
														Google Building Gordon House, Barrow Street, Dublin
														4, Irland
													</p>
												</div>
											</address>
										</div>
										<p className="text-gray-700">
											Im Falle eines Absturzes werden folgende anonymisierte
											Daten an Firebase übermittelt:
										</p>
										<ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
											<li>Zeitpunkt des Absturzes</li>
											<li>App-Status</li>
											<li>Stacktraces (Fehlerberichte)</li>
											<li>Betriebssystem-Version und Gerätehersteller</li>
											<li>Letzte Logmeldungen vor dem Absturz</li>
										</ul>
										<p className="text-gray-700">
											Es werden <strong>keine personenbezogenen Daten</strong>{" "}
											an Google übermittelt. Weitere Informationen zur
											Datenverarbeitung durch Google finden Sie unter:
											<a
												className="text-blue-600 hover:text-blue-800 font-medium ml-1 underline"
												href="https://firebase.google.com/support/privacy"
												rel="noopener noreferrer"
												target="_blank"
											>
												https://firebase.google.com/support/privacy
											</a>
										</p>
										<p className="text-gray-700">
											Rechtsgrundlage der Datenverarbeitung ist Art. 6 Abs. 1
											lit. f DSGVO (berechtigtes Interesse an der Fehleranalyse
											und App-Verbesserung).
										</p>
									</div>
								</article>
							</div>
						</section>

						{/* Personenbezogene Daten Section */}
						<section
							className="bg-purple-50 p-6 rounded-lg"
							id="personenbezogene-daten"
						>
							<h2 className="text-2xl font-semibold text-purple-900 mb-4 flex items-center">
								<span className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
									<Shield className="w-4 h-4" />
								</span>
								Verarbeitung personenbezogener Daten (TUMonline-Login)
							</h2>
							<div className="ml-11 space-y-4">
								<p className="text-gray-700">
									Bei Login über TUMonline mittels eines autorisierten Tokens
									erheben und verarbeiten wir die folgenden personenbezogenen
									Informationen, die mit Ihrem Gerät verknüpft werden:
								</p>
								<ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
									<li>Ihr vollständiger Name</li>
									<li>Ihre TUM-Kennung (z. B. „go42tum")</li>
								</ul>
								<div className="bg-white p-4 rounded-lg border-l-4 border-purple-600">
									<p className="text-gray-700">
										Es werden{" "}
										<strong>keine weiteren personenbezogenen Daten</strong> (z.
										B. Vorlesungen, Noten, Studienbeitragsstatus) auf unseren
										Servern gespeichert. Alle studienbezogenen Informationen
										werden <strong>ausschließlich direkt von TUMonline</strong>{" "}
										abgerufen und verbleiben auf dem Gerät. Der Zugriff erfolgt
										nur, wenn Sie vorher die entsprechende Berechtigung erteilt
										haben.
									</p>
								</div>
							</div>
						</section>

						{/* Rechte Section */}
						<section className="bg-orange-50 p-6 rounded-lg" id="rechte">
							<h2 className="text-2xl font-semibold text-orange-900 mb-4 flex items-center">
								<span className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
									<FileText className="w-4 h-4" />
								</span>
								Ihre Rechte
							</h2>
							<div className="ml-11 space-y-4">
								<p className="text-gray-700">
									Als betroffene Person haben Sie folgende Rechte gemäß Art. 15
									ff. DSGVO:
								</p>
								<ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
									<li>Auskunft über die zu Ihrer Person gespeicherten Daten</li>
									<li>Berichtigung unrichtiger Daten</li>
									<li>
										Löschung Ihrer Daten (sofern keine gesetzliche
										Aufbewahrungspflicht besteht)
									</li>
									<li>Einschränkung der Verarbeitung</li>
									<li>Widerspruch gegen die Verarbeitung</li>
									<li>Datenübertragbarkeit</li>
								</ul>
								<div className="bg-white p-4 rounded-lg border-l-4 border-orange-600">
									<p className="text-gray-700">
										Zur Ausübung dieser Rechte wenden Sie sich bitte an uns über
										die oben angegebene Kontaktadresse.
									</p>
								</div>
							</div>
						</section>

						{/* Änderungen Section */}
						<section className="bg-indigo-50 p-6 rounded-lg" id="aenderungen">
							<h2 className="text-2xl font-semibold text-indigo-900 mb-4 flex items-center">
								<span className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
									<Settings className="w-4 h-4" />
								</span>
								Änderungen der Datenschutzerklärung
							</h2>
							<p className="ml-11">
								Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf zu
								aktualisieren.
							</p>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
}
