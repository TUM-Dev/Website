import { AddToCalendarButton } from "add-to-calendar-button-react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { BookOpen, Calendar, Code, Coffee, Palette, Users, Wrench } from "lucide-react";

export type EventType = "workshop" | "meeting" | "chat" | "coding" | "design" | "event";

export interface EventProps {
    title: string;
    description: string;
    startTime: string;
    endTime: string;
    date: string;
    location: string;
    type: EventType;
}

export const Event: React.FC<EventProps> = ({ title, description, startTime, endTime, date, location, type }) => {
    let color;
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

    return (
        <Card className={`dark:border-l-${color}-400 border-l-${color}-500 dark:bg-slate-700 border-l-4`}>
            <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                        <div className={`w-10 h-10 dark:bg-${color}-900 bg-${color}-100 rounded-lg flex items-center justify-center mr-3`}>
                            {type === "coding" && <Code className={`w-5 h-5 dark:text-${color}-300 text-${color}-600`} />}
                            {type === "design" && <Palette className={`w-5 h-5 dark:text-${color}-300 text-${color}-600`} />}
                            {type === "workshop" && <BookOpen className={`w-5 h-5 dark:text-${color}-300 text-${color}-600`} />}
                            {type === "meeting" && <Users className={`w-5 h-5 dark:text-${color}-300 text-${color}-600`} />}
                            {type === "event" && <Calendar className={`w-5 h-5 dark:text-${color}-300 text-${color}-600`} />}
                            {type === "chat" && <Coffee className={`w-5 h-5 dark:text-${color}-300 text-${color}-600`} />}
                        </div>
                        <div>
                            <h4 className="font-semibold dark:text-white text-gray-900">{title}</h4>
                            <p className="text-sm dark:text-gray-400 text-gray-500">{date}</p>
                        </div>
                    </div>
                    <Badge className="dark:border-slate-600 dark:text-gray-300" variant="outline">
                        {type.toLocaleUpperCase()}
                    </Badge>
                </div>
                <p className="dark:text-gray-300 text-gray-600 text-sm mb-3">{description}</p>
                <AddToCalendarButton
                    name={title}
                    options={["iCal", "Apple", "Google"]}
                    location={location}
                    startDate={date}
                    endDate={date}
                    startTime={startTime}
                    endTime={endTime}
                    size="4"
                    label={`${startTime} - ${endTime} • ${location}`}
                    lightMode="bodyScheme"
                    buttonStyle="default"
                    hideButton={true}
                    attendee="leads@tum.dev"
                    organizer="TUM-Dev Leads|leads@tum.dev"
                    availability="busy"
                    status="CONFIRMED"
                    hideBranding={true}
                    timeZone="Europe/Berlin"
                ></AddToCalendarButton>
            </CardContent>
        </Card>
    );
};

export default Event;
