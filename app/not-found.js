import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import NotFoundIcon from "../public/404_icon.svg";
import { Mail } from "lucide-react";

export default function Custom404() {
    return (
        <div className="container mx-auto text-center max-w-4xl flex items-center flex-col grow gap-4  mb-20">
            <Image priority src={NotFoundIcon} alt="grafik einer 404 vor dem Hauptgebäude der TUM" />
            <h1 className="text-zinc-900 text-xl">Die angeforderte Seite wurde nicht gefunden.</h1>
            <p className="text-zinc-600 text-md">Dies könnte sein, weil wir einen Fehler gemacht haben</p>
            <div className="flex flex-row gap-4">
                <Button
                    size="lg"
                    className="dark:from-blue-600 dark:to-blue-700 dark:hover:from-blue-700 dark:hover:to-blue-800 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                    asChild
                >
                    <Link href="/">Zur Startseite</Link>
                </Button>
                <Button size="lg" variant="secondary" className="bg-white dark:text-blue-800 border-1 text-blue-600 hover:bg-gray-100">
                    <Mail className="w-5 h-5 mr-2" />
                    app (at) tum.de
                </Button>
            </div>
        </div>
    );
}
