"use client";

import Image from "next/image";
import { Award, Heart, History, Lightbulb, Mail, Smartphone, Target, TrendingUp, Users, Wrench, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
    return (
        <div>
            <section className="py-20 px-4">
                <div className="container mx-auto text-center max-w-4xl">
                    <Badge className="mb-6 px-4 py-2 dark:bg-slate-700 dark:text-gray-300" variant="secondary">
                        <History className="w-4 h-4 mr-2" />
                        Unsere Geschichte
                    </Badge>
                    <h1 className="text-5xl md:text-6xl font-bold dark:text-white text-gray-900 mb-6 leading-tight">
                        Über
                        <span className="dark:bg-gradient-to-r dark:from-blue-400 dark:to-blue-500 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                            {" "}
                            uns{" "}
                        </span>
                    </h1>
                    <p className="text-xl dark:text-gray-300 text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                        Von einer einfachen App-Idee im Jahr 2011 zu einer der erfolgreichsten Universitäts-Apps Deutschlands - erfahre mehr über unsere Reise
                        und Vision.
                    </p>
                </div>
            </section>

            {/* Origin Story Section */}
            <section className="py-16 px-4 dark:bg-slate-800 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                                    <Target className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-3xl font-bold dark:text-white text-gray-900">Ursprung</h2>
                            </div>
                            <div className="space-y-4 dark:text-gray-300 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    Das Open Source @ TUM Developer Team (TUM-Dev) setzt sich zusammen aus Freiwilligen, Studierenden und Mitarbeitenden. In
                                    unserer Freizeit arbeiten wir an diesen verschiedenen Projekten, welche teilweise schon seit 2011 bestehen.
                                </p>
                                <p>
                                    Damals initiiert durch ein App Projekt im Rahmen des{" "}
                                    <b className="font-semibold dark:text-blue-400 text-blue-600">Android Praktikums</b>, unter der Betreuung von Nils
                                    Kannengießer, entstand die erste Idee eine App für den Campus zu entwickeln, die den TUM-Mitgliedern den Alltag an einer
                                    Universität mit über 40.000 Studierenden und 10.000 Mitarbeitenden erleichtert.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-r dark:from-blue-900 dark:to-indigo-900 from-blue-50 to-indigo-50 rounded-2xl p-8">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold dark:text-white text-gray-900 mb-2">2011</div>
                                        <div className="text-sm dark:text-gray-400 text-gray-500">Projektstart</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold dark:text-white text-gray-900 mb-2">40k+</div>
                                        <div className="text-sm dark:text-gray-400 text-gray-500">Studierende</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold dark:text-white text-gray-900 mb-2">10k+</div>
                                        <div className="text-sm dark:text-gray-400 text-gray-500">Mitarbeitende</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold dark:text-white text-gray-900 mb-2">20k+</div>
                                        <div className="text-sm dark:text-gray-400 text-gray-500">Aktive Nutzer</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Story Section */}
            <section className="py-16 px-4 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-700 bg-gradient-to-br from-gray-50 to-slate-100">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                                <Award className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold dark:text-white text-gray-900">Erfolgsgeschichte</h2>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <Card className="border-0 shadow-lg dark:bg-slate-700 dark:border-slate-600 bg-white">
                            <CardHeader className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <TrendingUp className="w-8 h-8 text-white" />
                                </div>
                                <CardTitle className="dark:text-white text-gray-900">20.000+ Nutzer</CardTitle>
                                <CardDescription className="dark:text-gray-300 text-gray-600">
                                    Eine der erfolgreichsten Apps an deutschen Universitäten
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="border-0 shadow-lg dark:bg-slate-700 dark:border-slate-600 bg-white">
                            <CardHeader className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Zap className="w-8 h-8 text-white" />
                                </div>
                                <CardTitle className="dark:text-white text-gray-900">Kontinuierliche Innovation</CardTitle>
                                <CardDescription className="dark:text-gray-300 text-gray-600">
                                    Ständige Weiterentwicklung für die digitale Universität der Zukunft
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="border-0 shadow-lg dark:bg-slate-700 dark:border-slate-600 bg-white">
                            <CardHeader className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Heart className="w-8 h-8 text-white" />
                                </div>
                                <CardTitle className="dark:text-white text-gray-900">Community-getrieben</CardTitle>
                                <CardDescription className="dark:text-gray-300 text-gray-600">
                                    Entwickelt von Studierenden für Studierende in ehrenamtlicher Arbeit
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>

                    <div className="bg-gradient-to-r dark:from-blue-900 dark:to-indigo-900 from-blue-50 to-indigo-50 rounded-2xl p-8">
                        <p className="text-lg dark:text-gray-300 text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
                            Heute ist die App mit über 20.000 aktiven Nutzern eine der
                            <b> erfolgreichsten Apps, die an deutschen Universitäten angeboten werden</b>. Viele weitere Ideen sind mittlerweile ein Teil von{" "}
                            <b className="font-semibold dark:text-blue-400 text-blue-600">OpenSource @ TUM</b>. Im regen Austausch entwickeln wir neue
                            Features für die <b>digitale Universität der Zukunft</b>.
                        </p>
                    </div>
                </div>
            </section>

            {/* App Evolution Section */}
            <section className="py-16 px-4 dark:bg-slate-800 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex items-center justify-center mb-12">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                            <Smartphone className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold dark:text-white text-gray-900">Die App</h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-semibold dark:text-white text-gray-900 mb-6">Evolution über die Jahre</h3>
                            <div className="space-y-4 dark:text-gray-300 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    Die App hat über die Jahre immer mehr Funktionen aufgenommen. Wir mussten aber auch mit der Zeit manche Funktionalitäten
                                    wieder entfernen. Über die Jahre hat sich sowohl die Android App als auch die iOS App mehrmals neu erfunden.
                                </p>
                                <p>
                                    Neue Richtlinien für das bestmögliche Aussehen einer App oder eine verbesserte Usability haben unsere Entwickler*innen dazu
                                    bewegt, das Konzept, wie die Campus App funktionieren soll, immer wieder zu modifizieren.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="border-l-4 dark:border-l-blue-400 border-l-blue-500 pl-6">
                                <h4 className="font-semibold dark:text-white text-gray-900 mb-2">Früher: Reine Informationsplattform</h4>
                                <p className="dark:text-gray-300 text-gray-600">Ursprünglich als einfache Informationsquelle für Campus-Daten konzipiert</p>
                            </div>

                            <div className="border-l-4 dark:border-l-green-400 border-l-green-500 pl-6">
                                <h4 className="font-semibold dark:text-white text-gray-900 mb-2">Heute: Umfassende Campus-Plattform</h4>
                                <ul className="dark:text-gray-300 text-gray-600 space-y-2 list-disc ms-5">
                                    <li>
                                        <strong>Digital Student Card:</strong> Zugang zu services wie der Bibelothek, Mensa oder StudiTUM
                                    </li>
                                    <li>
                                        <strong>Mensa:</strong> Wissen was es in der mensa gibt ohne hin zu gehen
                                    </li>
                                    <li>
                                        <strong>News &amp; Campus:</strong> News über Student Clubs, Fachschaften oder die Uni bekommen
                                    </li>
                                    <li>
                                        <strong>Lernräume, Noten, Vorlesungen:</strong> Kollaborative Zusammenarbeit ab dem ersten Semester
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Acknowledgments Section */}
            <section className="py-16 px-4 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-700 bg-gradient-to-br from-gray-50 to-slate-100">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold dark:text-white text-gray-900 mb-4">Dankesworte</h2>
                        <p className="dark:text-gray-300 text-gray-600 max-w-2xl mx-auto">
                            Unser Erfolg wäre ohne die Unterstützung wichtiger Persönlichkeiten nicht möglich gewesen
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="border-0 shadow-lg dark:bg-slate-700 dark:border-slate-600 bg-white">
                            <CardContent className="p-8 text-center">
                                <div className="relative mb-4">
                                    <Image
                                        alt="bild von Professor Dr. Uwe Baumgarten"
                                        className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-blue-500"
                                        height={96}
                                        width={96}
                                        src="/avatars/baumgarten.jpg"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold dark:text-white text-gray-900 mb-3">Professor Dr. Uwe Baumgarten</h3>
                                <p className="dark:text-gray-300 text-gray-600 leading-relaxed">
                                    Hat das Projekt maßgeblich vorangetrieben und unterstützt. Ohne seine Vision und Förderung wäre TUM-Dev nicht zu dem
                                    geworden, was es heute ist.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-lg dark:bg-slate-700 dark:border-slate-600 bg-white">
                            <CardContent className="p-8 text-center">
                                <div className="relative mb-4">
                                    <Image
                                        alt="Bild von Dr.-Ing. Alexander Braun"
                                        className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-blue-500"
                                        height={96}
                                        width={96}
                                        src="/avatars/braun.webp"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold dark:text-white text-gray-900 mb-3">CIO Dr.-Ing. Alexander Braun</h3>
                                <p className="dark:text-gray-300 text-gray-600 leading-relaxed">
                                    Leistet finanzielle und organisatorische Unterstützung, die es uns ermöglicht, unsere Projekte kontinuierlich
                                    weiterzuentwickeln und zu verbessern.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Future Vision Section */}
            <section className="py-16 px-4 dark:bg-slate-800 bg-white">
                <div className="container mx-auto max-w-6xl text-center">
                    <div className="bg-gradient-to-r dark:from-blue-900 dark:to-indigo-900 from-blue-50 to-indigo-50 rounded-2xl p-12">
                        <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Lightbulb className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold dark:text-white text-gray-900 mb-6">Unsere Zukunft</h2>
                        <p className="text-xl dark:text-gray-300 text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                            Wir freuen uns, auch in Zukunft weiter an der App arbeiten zu dürfen und die digitale Transformation der Universität mitzugestalten.
                            Wenn du auch dabei sein willst, dann schreib uns doch über das Kontaktformular.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                className="bg-gradient-to-r dark:from-blue-600 dark:to-blue-700 dark:hover:from-blue-700 dark:hover:to-blue-800 from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                                size="lg"
                            >
                                <Users className="w-5 h-5 mr-2" />
                                Jetzt mitmachen
                            </Button>
                            <Button className="dark:border-slate-600 dark:text-gray-300 dark:hover:bg-slate-700" size="lg" variant="outline">
                                <Mail className="w-5 h-5 mr-2" />
                                Kontakt aufnehmen
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
