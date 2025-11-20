import { Code, FileText, Github, Mail, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<footer className="dark:bg-slate-900 bg-gray-900 py-12 px-4">
			<div className="container mx-auto max-w-6xl">
				<div className="grid md:grid-cols-3 gap-8">
					<div>
						<div className="flex items-center space-x-3 mb-4">
							<div className="w-8 h-8 dark:bg-linear-to-br dark:from-blue-600 dark:to-blue-700 bg-linear-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
								<Code className="w-5 h-5 text-white" />
							</div>
							<span
								className={`text-lg font-bold dark:text-gray-300 text-white`}
							>
								Open Source @ TUM e.V.
							</span>
						</div>
						<a
							className="dark:text-gray-500 text-gray-400"
							href="https://www.sv.tum.de/sv/hochschulgruppen/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Hochschulgruppe an der Technischen Universität München
						</a>
					</div>

					<div>
						<h3 className={`font-semibold mb-4 dark:text-gray-300 text-white`}>
							Kontakt
						</h3>
						<div className={`space-y-2 dark:text-gray-500 text-gray-400`}>
							<a
								className="dark:text-gray-500 text-gray-400 dark:hover:text-gray-300 hover:underline underline-offset-2 flex items-center transition-colors"
								href="mailto:app (at) tum.de"
							>
								<Mail className="w-4 h-4 mr-2" />
								app (at) tum.de
							</a>
							<Link
								className="dark:text-gray-500 text-gray-400 dark:hover:text-gray-300 hover:underline underline-offset-2 flex items-center transition-colors"
								to="/imprint"
							>
								<FileText className="w-4 h-4 mr-2" />
								Impressum
							</Link>
						</div>
					</div>

					<div>
						<h3 className={`font-semibold mb-4 dark:text-gray-300 text-white`}>
							Links
						</h3>
						<div className="space-y-2">
							<a
								className="dark:text-gray-500 text-gray-400 dark:hover:text-gray-300 hover:underline underline-offset-2 flex items-center transition-colors"
								href="https://github.com/tum-dev"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Github className="w-4 h-4 mr-2" />
								GitHub
							</a>
							<Link
								className="dark:text-gray-500 text-gray-400 dark:hover:text-gray-300 hover:underline underline-offset-2 flex items-center transition-colors"
								to="/privacy"
							>
								<ShieldCheck className="w-4 h-4 mr-2" />
								Datenschutz
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
