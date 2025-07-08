"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Heart, Mail, MessageSquare, Send, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
	attachment: z.any().optional(),
	fromEmail: z.string().email("Bitte gib eine gültige E-Mail-Adresse ein"),
	fromName: z.string().min(1, "Name ist erforderlich"),
	message: z
		.string()
		.min(10, "Die Nachricht muss mindestens 10 Zeichen lang sein"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [selectedFile, setSelectedFile] = useState<File | null>(null);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ContactFormData>({
		resolver: zodResolver(contactSchema),
	});

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			// Check file size (4MB limit)
			if (file.size > 4 * 1024 * 1024) {
				toast.error("Datei ist zu groß. Maximale Größe: 4MB");
				e.target.value = ""; // Clear the input
				return;
			}

			// Check file type
			const allowedTypes = [
				"image/jpeg",
				"image/jpg",
				"image/png",
				"image/webp",
				"text/markdown",
				"text/plain",
				"application/pdf",
			];
			if (!allowedTypes.includes(file.type)) {
				toast.error(
					"Dateityp nicht unterstützt. Erlaubt: JPEG, PNG, WebP, MD, TXT, PDF",
				);
				e.target.value = ""; // Clear the input
				return;
			}

			setSelectedFile(file);
			toast.success(`Datei "${file.name}" wurde ausgewählt.`);
		} else {
			setSelectedFile(null);
		}
	};

	const fileToBase64 = (file: File): Promise<string> => {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => {
				const result = reader.result as string;
				// Remove the data:mime/type;base64, prefix
				const base64 = result.split(",")[1];
				resolve(base64);
			};
			reader.onerror = (error) => reject(error);
		});
	};

	const onSubmit = async (data: ContactFormData) => {
		setIsSubmitting(true);

		try {
			let attachmentBase64 = "";
			if (selectedFile) {
				attachmentBase64 = await fileToBase64(selectedFile);
			}

			// Construct URL with query parameters
			const url = new URL("https://api.tum.app/feedback");
			url.searchParams.append("fromName", data.fromName);
			url.searchParams.append("fromEmail", data.fromEmail);
			url.searchParams.append("message", data.message);

			const response = await fetch(url.toString(), {
				body: attachmentBase64,
				headers: {
					"Content-Type": "application/octet-stream",
				},
				method: "POST",
			});

			if (response.ok) {
				toast.success(
					"Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns in der Regel innerhalb von 2-3 Werktagen bei Ihnen zurück.",
					{ duration: 6000 },
				);
				reset();
				setSelectedFile(null);
				// Reset file input
				const fileInput = document.getElementById(
					"attachment",
				) as HTMLInputElement;
				if (fileInput) {
					fileInput.value = "";
				}
			} else {
				const statusText =
					response.status === 429
						? "Zu viele Anfragen. Bitte warte einen Moment und versuche es erneut."
						: response.status >= 500
							? "Serverfehler. Bitte versuche es später erneut."
							: response.status === 413
								? "Die Datei ist zu groß. Bitte verwende eine kleinere Datei."
								: "Fehler beim Senden der Nachricht. Bitte überprüfe deine Eingaben.";

				throw new Error(`${response.status}: ${statusText}`);
			}
		} catch (error) {
			console.error("Error submitting form:", error);

			if (error instanceof TypeError && error.message.includes("fetch")) {
				toast.error(
					"Netzwerkfehler: Bitte überprüfe deine Internetverbindung und versuche es erneut.",
				);
			} else {
				toast.error(
					"Es ist ein Fehler aufgetreten. Bitte versuche es später erneut oder kontaktiere uns direkt per E-Mail.",
				);
			}
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div>
			<section className="py-20 px-4">
				<div className="container mx-auto text-center max-w-4xl">
					<Badge
						className="mb-6 px-4 py-2 dark:bg-slate-700 dark:text-gray-300"
						variant="secondary"
					>
						<Heart className="w-4 h-4 mr-2" />
						Wir freuen uns auf Ihr Feedback
					</Badge>
					<h1 className="text-5xl md:text-6xl font-bold dark:text-white text-gray-900 mb-6 leading-tight">
						Kontakt
						<span className="dark:bg-gradient-to-r dark:from-blue-400 dark:to-blue-500 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
							ieren
						</span>
					</h1>
					<p className="text-xl dark:text-gray-300 text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
						Hast du Fragen, Anregungen oder Feedback zu unseren Projekten? Wir
						freuen uns über jede Nachricht und helfen gerne weiter!
					</p>
				</div>
			</section>

			<div className="dark:bg-slate-800 bg-white py-16 px-4">
				<div className="max-w-4xl mx-auto">
					<div className="space-y-12">
						{/* Welcome Section */}
						<section className="bg-blue-50 p-6 rounded-lg">
							<h2 className="text-2xl font-semibold text-blue-900 mb-4 flex items-center">
								<span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
									<MessageSquare className="w-4 h-4" />
								</span>
								Lassen uns sprechen
							</h2>
							<div className="ml-11 text-gray-700 space-y-3">
								<p>
									Ob du Probleme mit der Campus App hast,
									Verbesserungsvorschläge einreichen möchtest oder einfach Hallo
									sagen willst – wir sind für dich da!
								</p>
								<p>
									Als studentisches Projekt leben wir von der Community und
									freuen uns über jeden Beitrag, der uns dabei hilft, bessere
									Tools für Studierende zu entwickeln.
								</p>
							</div>
						</section>

						{/* Contact Form */}
						<section className="bg-green-50 p-6 rounded-lg">
							<h2 className="text-2xl font-semibold text-green-900 mb-4 flex items-center">
								<span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
									<Send className="w-4 h-4" />
								</span>
								Nachricht senden
							</h2>
							<div className="ml-11">
								<form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
									<div className="grid md:grid-cols-2 gap-4">
										<div>
											<Label
												className="text-gray-700 font-medium"
												htmlFor="fromName"
											>
												Ihr Name *
											</Label>
											<Input
												disabled={isSubmitting}
												id="fromName"
												type="text"
												{...register("fromName")}
												className="mt-1"
												placeholder="Erika Musterfrau"
											/>
											{errors.fromName && (
												<p className="text-red-600 text-sm mt-1">
													{errors.fromName.message}
												</p>
											)}
										</div>
										<div>
											<Label
												className="text-gray-700 font-medium"
												htmlFor="fromEmail"
											>
												E-Mail-Adresse *
											</Label>
											<Input
												id="fromEmail"
												type="email"
												{...register("fromEmail")}
												className="mt-1"
												disabled={isSubmitting}
												placeholder="erika@example.com"
											/>
											{errors.fromEmail && (
												<p className="text-red-600 text-sm mt-1">
													{errors.fromEmail.message}
												</p>
											)}
										</div>
									</div>

									<div>
										<Label
											className="text-gray-700 font-medium"
											htmlFor="message"
										>
											Ihre Nachricht *
										</Label>
										<Textarea
											id="message"
											{...register("message")}
											className="mt-1 min-h-[120px]"
											disabled={isSubmitting}
											placeholder="Beschreiben dein Anliegen..."
										/>
										{errors.message && (
											<p className="text-red-600 text-sm mt-1">
												{errors.message.message}
											</p>
										)}
									</div>

									<div>
										<Label
											className="text-gray-700 font-medium"
											htmlFor="attachment"
										>
											Datei anhängen (optional)
										</Label>
										<Input
											accept=".jpg,.jpeg,.png,.webp,.md,.txt,.pdf"
											className="h-16 file:mr-4 file:py-3 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
											disabled={isSubmitting}
											id="attachment"
											onChange={handleFileChange}
											type="file"
										/>
										{selectedFile && (
											<p className="text-sm text-gray-600 mt-1">
												Ausgewählt: {selectedFile.name} (
												{(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
											</p>
										)}
										<p className="text-xs text-gray-500 mt-1">
											Unterstützte Formate: JPEG, PNG, WebP, MD, TXT, PDF (max.
											4MB)
										</p>
									</div>

									<Button
										className="w-full bg-green-600 hover:bg-green-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
										disabled={isSubmitting}
										type="submit"
									>
										{isSubmitting ? (
											<>
												<div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
												Wird gesendet...
											</>
										) : (
											<>
												<Send className="w-4 h-4 mr-2" />
												Nachricht senden
											</>
										)}
									</Button>
								</form>
							</div>
						</section>

						{/* Alternative Contact Methods */}
						<div className="grid md:grid-cols-2 gap-8">
							<section className="bg-purple-50 p-6 rounded-lg">
								<h2 className="text-2xl font-semibold text-purple-900 mb-4 flex items-center">
									<span className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
										<Mail className="w-4 h-4" />
									</span>
									Direkte E-Mail
								</h2>
								<div className="ml-11 text-gray-700 space-y-3">
									<p>Du können uns auch direkt eine E-Mail schreiben:</p>
									<Link className="group" href="mailto:app at tum.de">
										<div className="bg-white p-4 rounded-lg border-l-4 border-purple-600 group-hover:shadow-lg group-hover:bg-purple-50">
											<p className="font-semibold text-purple-800">
												app at tum dot de
											</p>
										</div>
									</Link>
								</div>
							</section>

							<section className="bg-orange-50 p-6 rounded-lg">
								<h2 className="text-2xl font-semibold text-orange-900 mb-4 flex items-center">
									<span className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
										<User className="w-4 h-4" />
									</span>
									Werde Teil unserer Community
								</h2>
								<div className="ml-11 text-gray-700 space-y-2 grid gap-y-1">
									<Link className="group" href="https://github.com/TUM-Dev">
										<div className="bg-white p-3 rounded-lg group-hover:shadow-lg group-hover:bg-gray-100">
											<p className="font-medium">GitHub</p>
											<p className="text-sm text-gray-600">
												Schaue dir sich unseren Code an und hilf mit ihn zu
												verbessern
											</p>
										</div>
									</Link>
									<Link className="group" href="/about">
										<div className="bg-white p-3 rounded-lg group-hover:shadow-lg group-hover:bg-gray-100">
											<p className="font-medium">Open Source @ TUM e.V.</p>
											<p className="text-sm text-gray-600">
												Unser Verein für alle TUM-Studierenden
											</p>
										</div>
									</Link>
								</div>
							</section>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
