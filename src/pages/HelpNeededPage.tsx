import { format } from "date-fns";
import { de } from "date-fns/locale";
import { HeartHandshake, Lightbulb, Mail, RefreshCw, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { RepoCard, type RepoProps } from "@/components/repo-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/ui/github-icon";

interface RepoData {
	generatedAt: string;
	repos: RepoProps[];
}

const reposUrl =
	"https://raw.githubusercontent.com/TUM-Dev/Website/refs/heads/github-data/github_repos.json";

export default function HelpNeededPage() {
	const [repos, setRepos] = useState<RepoProps[]>([]);
	const [generatedAt, setGeneratedAt] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchRepos = async () => {
			try {
				const response = await fetch(reposUrl);
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const data: RepoData = await response.json();
				setRepos(data.repos.filter((repo) => repo.stars > 3));
				setGeneratedAt(data.generatedAt);
			} catch (e) {
				if (e instanceof Error) {
					setError(e.message);
				}
			} finally {
				setIsLoading(false);
			}
		};
		fetchRepos();
	}, []);

	return (
		<div>
			<section className="py-20 px-4">
				<div className="container mx-auto text-center max-w-4xl">
					<Badge
						className="mb-6 px-4 py-2 dark:bg-slate-700 dark:text-gray-300"
						variant="secondary"
					>
						<HeartHandshake className="w-4 h-4 mr-2" />
						Open Source lebt von Mitmachern
					</Badge>
					<h1 className="text-5xl md:text-6xl font-bold dark:text-white text-gray-900 mb-6 leading-tight">
						Hilfe
						<span className="dark:bg-linear-to-r dark:from-blue-400 dark:to-blue-500 bg-linear-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
							{" "}
							gesucht
						</span>
					</h1>
					<p className="text-xl dark:text-gray-300 text-gray-600 mb-4 leading-relaxed max-w-3xl mx-auto">
						Alle unsere Projekte sind Open Source und offen für Beiträge. Jede
						Karte unten zeigt eines unserer aktiven Repositories mit der
						Anzahl offener Issues und Pull Requests - ein offenes Issue ist
						meist der einfachste Einstieg.
					</p>
					{generatedAt && (
						<p className="text-sm dark:text-gray-500 text-gray-400 flex items-center justify-center">
							<RefreshCw className="w-3.5 h-3.5 mr-1.5" />
							Zuletzt aktualisiert:{" "}
							{format(new Date(generatedAt), "d. MMMM yyyy", { locale: de })}
						</p>
					)}
				</div>
			</section>

			<section className="py-16 px-4 dark:bg-slate-800 bg-white">
				<div className="container mx-auto max-w-6xl">
					{isLoading && (
						<p className="text-center dark:text-gray-300 text-gray-600">
							Repositories werden geladen...
						</p>
					)}

					{!isLoading && error && (
						<div className="text-center dark:text-gray-300 text-gray-600">
							<p className="mb-4">
								Die Repository-Liste konnte gerade nicht geladen werden.
							</p>
							<Button asChild variant="secondary">
								<a
									href="https://github.com/TUM-Dev"
									target="_blank"
									rel="noopener noreferrer"
								>
									<GithubIcon className="w-4 h-4 mr-2" />
									Zu GitHub
								</a>
							</Button>
						</div>
					)}

					{!isLoading && !error && repos.length === 0 && (
						<p className="text-center dark:text-gray-300 text-gray-600">
							Aktuell sind keine Repositories verfügbar.
						</p>
					)}

					{!isLoading && !error && repos.length > 0 && (
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
							{repos.map((repo) => (
								<RepoCard
									description={repo.description}
									key={repo.name}
									language={repo.language}
									name={repo.name}
									openIssues={repo.openIssues}
									openPullRequests={repo.openPullRequests}
									stars={repo.stars}
									url={repo.url}
								/>
							))}
						</div>
					)}
				</div>
			</section>

			{/* New Ideas CTA Section */}
			<section className="py-20 px-4 dark:bg-blue-900 bg-blue-600">
				<div className="container mx-auto text-center max-w-4xl">
					<Badge
						className="mb-6 px-4 py-2 dark:bg-blue-800 bg-blue-700 text-white border-0"
						variant="secondary"
					>
						<Lightbulb className="w-4 h-4 mr-2" />
						Neue Ideen willkommen
					</Badge>
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
						Eigene Projekt- oder Kooperationsidee?
					</h2>
					<p className="text-xl dark:text-blue-100 text-blue-100 mb-8 leading-relaxed">
						Die Liste oben zeigt nur unsere bestehenden Projekte - wir
						freuen uns aber genauso über komplett neue Ideen
						und Kooperationsanfragen. Egal ob fertiges Konzept oder erste
						Idee, schreib uns einfach. Unser Ziel ist es gemeinsam Open Source zu entwickeln.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button
							asChild
							className="bg-white dark:text-blue-800 text-blue-600 hover:bg-gray-100"
							size="lg"
							variant="secondary"
						>
							<Link to="/contact">
								<Mail className="w-5 h-5 mr-2" />
								Idee einreichen
							</Link>
						</Button>
						<Button
							asChild
							className="border-white text-slate-900 dark:text-slate-50 hover:bg-white/10"
							size="lg"
							variant="outline"
						>
							<a
								href="https://groups.google.com/u/0/a/tum.dev/g/announce/about"
								rel="noopener noreferrer"
								target="_blank"
							>
								<Users className="w-5 h-5 mr-2" />
								Auf dem laufenden bleiben
							</a>
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
