import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "./ui/card";

export interface MemberProps {
	name: string;
	avatar: string;
	role: string;
	leads_project?: string;
	github?: string;
	linkedin?: string;
}

export const Member: React.FC<MemberProps> = ({
	name,
	avatar,
	role,
	leads_project,
	github,
	linkedin,
}) => {
	if (leads_project) {
		return (
			<Card className="dark:bg-slate-700 dark:border-slate-600 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
				<CardContent className="p-6 text-center">
					<div className="relative mb-4">
						<Image
							alt={name}
							className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-blue-500"
							height={96}
							src={avatar || "/avatars/placeholder.jpg"}
							width={96}
						/>
					</div>
					<h4 className="font-semibold text-lg dark:text-white text-gray-900 mb-1">
						{name}
					</h4>
					<p className="text-sm font-medium dark:text-blue-400 text-blue-600 mb-1">
						{role}
					</p>
					<p className="text-xs dark:text-gray-400 text-gray-500 mb-3">
						{leads_project}
					</p>
					<div className="flex justify-center space-x-3">
						<Link
							aria-label={`GitHub profile of ${name}`}
							className="dark:text-gray-400 text-gray-500 hover:dark:text-blue-400 transition-colors"
							href={`https://github.com/${github}`}
						>
							<Github className="w-4 h-4" />
						</Link>
						<Link
							aria-label={`LinkedIn profile of ${name}`}
							className="dark:text-gray-400 text-gray-500 hover:dark:text-blue-400 transition-colors"
							href={`https://linkedin.com/in/${linkedin}`}
						>
							<svg
								aria-hidden={true}
								className="w-4 h-4"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
							</svg>
						</Link>
					</div>
				</CardContent>
			</Card>
		);
	}

	return (
		<div className="text-center group">
			<div className="relative mb-3">
				<Image
					alt={name}
					className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-gray-200 group-hover:border-blue-500 transition-colors"
					height={80}
					src={avatar || "/avatars/placeholder.jpg"}
					width={80}
				/>
			</div>
			<h4 className="font-medium text-sm dark:text-white text-gray-900 mb-1">
				{name}
			</h4>
			<p className="text-xs dark:text-gray-400 text-gray-500">{role}</p>
		</div>
	);
};
