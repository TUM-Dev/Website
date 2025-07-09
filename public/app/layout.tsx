import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
	description:
		"Wir arbeiten an verschiedenen Open Source Projekten rund um Universitäts-Infrastruktur, organisieren Veranstaltungen und bieten Workshops an.",
	title: "Open Source @ TUM",
};

interface RootLayoutProps {
	children: React.ReactNode;
}
export default async function RootLayout({
	children,
}: Readonly<RootLayoutProps>) {
	return (
		<html lang="de" suppressHydrationWarning>
			<body className="min-h-screen dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800 bg-gradient-to-br from-slate-50 to-gray-100">
				<ThemeProvider attribute="class">
					<Header />
					{children}
					<Footer />
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
