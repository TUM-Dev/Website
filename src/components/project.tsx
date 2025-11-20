import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";

export interface ProjectProps {
	name: string;
	description: string;
	link?: string;
	tech: string[];
}

export const Project: React.FC<ProjectProps> = ({
	name,
	description,
	link,
	tech,
}) => {
	const isExternal = link && (link.startsWith('http') || link.startsWith('https'));

	const CardComponent = (
		<Card className="border-0 shadow-md group-hover:shadow-lg transition-shadow dark:bg-slate-700 dark:border-slate-600 bg-white group-hover:bg-slate-50 dark:group-hover:bg-slate-800">
			<CardHeader>
				<CardTitle className="flex items-center justify-between dark:text-white text-gray-900">
					{name}
					{link && (
						<ExternalLink className="w-4 h-4 dark:text-gray-400 text-gray-500" />
					)}
				</CardTitle>
				<CardDescription className="dark:text-gray-300 text-gray-600">
					{description}
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="flex flex-wrap gap-2">
					{tech.map((tech) => (
						<Badge
							className="text-xs dark:bg-slate-600 dark:text-gray-300"
							key={tech}
							variant="secondary"
						>
							{tech}
						</Badge>
					))}
				</div>
			</CardContent>
		</Card>
	);

	if (isExternal) {
		return (
			<a
				className="group cursor-pointer"
				href={link}
				target="_blank"
				rel="noopener noreferrer"
			>
				{CardComponent}
			</a>
		);
	}

	return (
		<Link className="group cursor-pointer" to={link || "#"}>
			{CardComponent}
		</Link>
	);
};
