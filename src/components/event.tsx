import { AddToCalendarButton } from "add-to-calendar-button-react";
import { BookOpen, Calendar, Code, Coffee, Palette, Users } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

export type EventType =
	| "workshop"
	| "meeting"
	| "chat"
	| "coding"
	| "design"
	| "event";

export interface EventProps {
	title: string;
	description: string;
	endTimestamp: number;
	startTimestamp: number;
	location: string;
	type: EventType;
}

export const Event: React.FC<EventProps> = ({
	title,
	description,
	endTimestamp,
	startTimestamp,
	location,
	type,
}) => {
	let color = "blue";
	switch (type) {
		case "workshop":
			color = "blue";
			break;
		case "meeting":
			color = "green";
			break;
		case "chat":
			color = "yellow";
			break;
		case "coding":
			color = "purple";
			break;
		case "design":
			color = "pink";
			break;
		case "event":
			color = "red";
			break;
	}

	const start = new Date(startTimestamp);
	const startTime = start.toLocaleTimeString("de-DE").substring(0, 5);
	const startDate = start.toISOString().split("T")[0];
	const end = new Date(endTimestamp);
	const endTime = end.toLocaleTimeString("de-DE").substring(0, 5);
	const endDate = end.toISOString().split("T")[0];
	const oneDayEvent = start.getDate() === end.getDate() && start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear() ;

	if (startTimestamp > endTimestamp) {
		throw new Error(
			`Start time cannot be after end time for event ${title} on ${startDate}`,
		);
	}

	return (
		<Card
			className={`dark:border-l-${color}-400 border-l-${color}-500 dark:bg-slate-700 border-l-4`}
		>
			<CardContent className="p-6">
				<div className="flex items-start justify-between mb-3">
					<div className="flex items-center">
						<div
							className={`w-10 h-10 dark:bg-${color}-900 bg-${color}-100 rounded-lg flex items-center justify-center mr-3`}
						>
							{type === "coding" && (
								<Code
									className={`w-5 h-5 dark:text-${color}-300 text-${color}-600`}
								/>
							)}
							{type === "design" && (
								<Palette
									className={`w-5 h-5 dark:text-${color}-300 text-${color}-600`}
								/>
							)}
							{type === "workshop" && (
								<BookOpen
									className={`w-5 h-5 dark:text-${color}-300 text-${color}-600`}
								/>
							)}
							{type === "meeting" && (
								<Users
									className={`w-5 h-5 dark:text-${color}-300 text-${color}-600`}
								/>
							)}
							{type === "event" && (
								<Calendar
									className={`w-5 h-5 dark:text-${color}-300 text-${color}-600`}
								/>
							)}
							{type === "chat" && (
								<Coffee
									className={`w-5 h-5 dark:text-${color}-300 text-${color}-600`}
								/>
							)}
						</div>
						<div>
							<h4 className="font-semibold dark:text-white text-gray-900">
								{title}
							</h4>
							<p className="text-sm dark:text-gray-300 text-gray-500">{oneDayEvent ? start.toLocaleDateString("de-DE") : `${start.toLocaleDateString("de-DE")} - ${end.toLocaleDateString("de-DE")}`}</p>
						</div>
					</div>
					<Badge
						className="dark:border-slate-600 dark:text-gray-300"
						variant="outline"
					>
						{type.toLocaleUpperCase()}
					</Badge>
				</div>
				<p className="dark:text-gray-300 text-gray-600 text-sm mb-3">
					{description}
				</p>
				<AddToCalendarButton
					attendee="leads@tum.dev"
					availability="busy"
					buttonStyle="default"
					endDate={endDate}
					endTime={endTime}
					hideBranding={true}
					hideButton={true}
					label={`${startTime} - ${endTime} • ${location}`}
					lightMode="bodyScheme"
					location={location}
					name={title}
					options={["iCal", "Apple", "Google"]}
					organizer="TUM-Dev Leads|leads@tum.dev"
					size="4"
					startDate={startDate}
					startTime={startTime}
					status="CONFIRMED"
					timeZone="Europe/Berlin"
				></AddToCalendarButton>
			</CardContent>
		</Card>
	);
};

export default Event;
