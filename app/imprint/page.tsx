"use client";

import { Users, Smartphone, GraduationCap, Mail, MapPin, MessageSquare } from "lucide-react";

export default function Imprint() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="px-8 py-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center border-b-2 border-blue-600 pb-6">Impressum</h1>

                        <div className="space-y-12">
                            {/* Verein Section */}
                            <section className="bg-blue-50 p-6 rounded-lg">
                                <h2 className="text-2xl font-semibold text-blue-900 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                                        <Users className="w-4 h-4" />
                                    </span>
                                    Verein
                                </h2>
                                <div className="ml-11">
                                    <p className="text-xl font-semibold text-blue-800 mb-3">Open Source @ TUM e.V.</p>
                                    <div className="text-gray-700">
                                        <p className="mb-2">Vertreten durch:</p>
                                        <ul className="list-disc list-inside space-y-1 ml-4">
                                            <li>Frank Elsinga (1. Vorsitzender)</li>
                                            <li>Joscha Henningsen (2. Vorsitzender)</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Campus App Section */}
                            <section className="bg-green-50 p-6 rounded-lg">
                                <h2 className="text-2xl font-semibold text-green-900 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                                        <Smartphone className="w-4 h-4" />
                                    </span>
                                    Campus App
                                </h2>
                                <div className="ml-11 text-gray-700 space-y-3">
                                    <p>Die Campus App wurde von Studierenden in Kooperation und unter Leitung des Lehrstuhls für Betriebssysteme erstellt.</p>
                                    <p>
                                        Für alle Anliegen erreichen Sie den Support unter:
                                        <a href="mailto:app@tum.de" className="text-blue-600 hover:text-blue-800 font-medium ml-1 underline">
                                            app@tum.de
                                        </a>
                                    </p>
                                    <p>
                                        Aktuelle Projektleitung erfolgt durch Jakob Körber. Die Entwicklung erfolgt primär durch Freiwillige und wird öffentlich
                                        auf
                                        <a
                                            href="https://github.com/TUM-Dev"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-800 font-medium mx-1 underline"
                                        >
                                            GitHub
                                        </a>
                                        durchgeführt, wo auch der Quelltext für alle Projekte zur Einsicht bereit liegt.
                                    </p>
                                </div>
                            </section>

                            {/* Schirmherr Section */}
                            <section className="bg-purple-50 p-6 rounded-lg">
                                <h2 className="text-2xl font-semibold text-purple-900 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                                        <GraduationCap className="w-4 h-4" />
                                    </span>
                                    Schirmherr
                                </h2>
                                <div className="ml-11 text-gray-700">
                                    <p className="font-semibold text-purple-800 mb-2">TUM Informatik F13</p>
                                    <p className="mb-1">Lehrstuhl/Fachgebiet für Betriebssysteme</p>
                                    <ul className="list-disc list-inside space-y-1 ml-4">
                                        <li>Prof. Dr. Uwe Baumgarten (Emeritus)</li>
                                        <li>Prof. Dr. Peter Paul Spies (Emeritus)</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Addresses Section */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <section className="bg-orange-50 p-6 rounded-lg">
                                    <h2 className="text-2xl font-semibold text-orange-900 mb-4 flex items-center">
                                        <span className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                                            <Mail className="w-4 h-4" />
                                        </span>
                                        Postadresse
                                    </h2>
                                    <address className="ml-11 text-gray-700 not-italic">
                                        <div className="space-y-1">
                                            <p>Boltzmannstr. 3</p>
                                            <p>85748 Garching</p>
                                            <p>Deutschland</p>
                                        </div>
                                    </address>
                                </section>

                                <section className="bg-red-50 p-6 rounded-lg">
                                    <h2 className="text-2xl font-semibold text-red-900 mb-4 flex items-center">
                                        <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                                            <MapPin className="w-4 h-4" />
                                        </span>
                                        Besucheradresse
                                    </h2>
                                    <address className="ml-11 text-gray-700 not-italic">
                                        <div className="space-y-1">
                                            <p>Parkring 37</p>
                                            <p>85748 Garching</p>
                                            <p>Deutschland</p>
                                        </div>
                                    </address>
                                </section>
                            </div>

                            {/* Contact Section */}
                            <section className="bg-indigo-50 p-6 rounded-lg">
                                <h2 className="text-2xl font-semibold text-indigo-900 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                                        <MessageSquare className="w-4 h-4" />
                                    </span>
                                    Kontakt aufnehmen
                                </h2>
                                <div className="ml-11 text-gray-700 space-y-4">
                                    <p>
                                        Falls Sie mit uns in Verbindung treten möchten, können Sie das Kontaktformular verwenden oder eine E-Mail an die unten
                                        stehende Adresse schicken.
                                    </p>

                                    <div className="bg-white p-4 rounded-lg border-l-4 border-indigo-600">
                                        <p className="font-semibold text-indigo-800 mb-2">Open Source @ TUM e.V.</p>
                                        <address className="text-gray-700 not-italic">
                                            <div className="space-y-1">
                                                <p>
                                                    <span className="font-medium">Adresse:</span> Arcisstraße 21
                                                </p>
                                                <p>80333 München</p>
                                                <p>
                                                    <span className="font-medium">E-Mail:</span> app at tum dot de
                                                </p>
                                            </div>
                                        </address>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
