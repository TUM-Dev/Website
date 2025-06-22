import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export interface ProjectProps {
    name: string;
    description: string;
    tech: string[];
}

export const Project: React.FC<ProjectProps> = ({ name, description, tech }) => (
    <Card className="border-0 shadow-md hover:shadow-lg transition-shadow dark:bg-slate-700 dark:border-slate-600 bg-white">
        <CardHeader>
            <CardTitle className="flex items-center justify-between dark:text-white text-gray-900">
                {name}
                <ExternalLink className="w-4 h-4 dark:text-gray-400 text-gray-500" />
            </CardTitle>
            <CardDescription className="dark:text-gray-300 text-gray-600">{description}</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex flex-wrap gap-2">
                {tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs dark:bg-slate-600 dark:text-gray-300">
                        {tech}
                    </Badge>
                ))}
            </div>
        </CardContent>
    </Card>
);
