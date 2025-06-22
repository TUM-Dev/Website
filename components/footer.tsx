import { Code, FileText, Github, Mail, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
	return (
		<footer className="dark:bg-slate-900 bg-gray-900 py-12 px-4">
			<div className="container mx-auto max-w-6xl">
				<div className="grid md:grid-cols-3 gap-8">
					<div>
						<div className="flex items-center space-x-3 mb-4">
							<div className="w-8 h-8 dark:bg-gradient-to-br dark:from-blue-600 dark:to-blue-700 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
								<Code className="w-5 h-5 text-white" />
							</div>
							<span
								className={`text-lg font-bold dark:text-gray-300 text-white`}
							>
								Open Source @ TUM e.V.
							</span>
						</div>
						<Link
							className="dark:text-gray-500 text-gray-400"
							href="https://www.sv.tum.de/sv/hochschulgruppen/"
						>
							Hochschulgruppe an der Technischen Universität München
						</Link>
					</div>

					<div>
						<h3 className={`font-semibold mb-4 dark:text-gray-300 text-white`}>
							Kontakt
						</h3>
						<div className={`space-y-2 dark:text-gray-500 text-gray-400`}>
							<div className="flex items-center">
								<Mail className="w-4 h-4 mr-2" />
								app (at) tum.de
							</div>
							<Link className="flex items-center" href="/imprint">
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
							<Link
								className={`dark:text-gray-500 text-gray-400 hover:dark:text-gray-300 flex items-center transition-colors`}
								href="https://github.com/tum-dev"
							>
								<Github className="w-4 h-4 mr-2" />
								GitHub
							</Link>
							<Link
								className={`dark:text-gray-500 text-gray-400 hover:dark:text-gray-300 flex items-center transition-colors`}
								href="/data_protection"
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
