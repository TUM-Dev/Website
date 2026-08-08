import { CircleDot, GitPullRequest, Star } from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

export interface RepoProps {
	name: string;
	description: string | null;
	url: string;
	language: string | null;
	stars: number;
	openIssues: number;
	openPullRequests: number;
}

export const RepoCard: React.FC<RepoProps> = ({
	name,
	description,
	url,
	language,
	stars,
	openIssues,
	openPullRequests,
}) => {
	return (
		<Card className="border-0 shadow-md hover:shadow-lg transition-shadow dark:bg-slate-700 dark:border-slate-600 bg-white">
			<CardHeader>
				<CardTitle className="flex items-center justify-between dark:text-white text-gray-900">
					<a
						className="hover:underline underline-offset-2 truncate"
						href={url}
						target="_blank"
						rel="noopener noreferrer"
					>
						{name}
					</a>
					<span className="flex items-center shrink-0 ml-2 text-sm font-normal dark:text-gray-400 text-gray-500">
						<Star className="w-4 h-4 mr-1" />
						{stars}
					</span>
				</CardTitle>
				{description && (
					<CardDescription className="dark:text-gray-300 text-gray-600 line-clamp-2">
						{description}
					</CardDescription>
				)}
			</CardHeader>
			<CardContent>
				{language && (
					<Badge
						className="text-xs dark:bg-slate-600 dark:text-gray-300 mb-4"
						variant="secondary"
					>
						{language}
					</Badge>
				)}
				<div className="flex flex-wrap items-center gap-4 text-sm dark:text-gray-300 text-gray-600">
					<a
						className="flex items-center hover:underline underline-offset-2"
						href={`${url}/issues`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<CircleDot className="w-4 h-4 mr-1.5 text-green-500" />
						{openIssues} offene Issues
					</a>
					<a
						className="flex items-center hover:underline underline-offset-2"
						href={`${url}/pulls`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<GitPullRequest className="w-4 h-4 mr-1.5 text-blue-400" />
						{openPullRequests} offene PRs
					</a>
				</div>
			</CardContent>
		</Card>
	);
};
