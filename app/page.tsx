"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slideshow } from "@/components/slideshow";
import type { SlideShowItem } from "@/components/slideshow";
import {
  Code,
  Users,
  Calendar,
  Lightbulb,
  Github,
  Mail,
  MapPin,
  Clock,
  CalendarIcon,
  Users2,
  Wrench,
  Trophy,
  Coffee,
} from "lucide-react";
import { Member } from "@/components/member";
import type { MemberProps } from "@/components/member";
import Link from "next/link";
import { Project, ProjectProps } from "@/components/project";

export default function HomePage() {
  const members: readonly MemberProps[] = [
    {
      name: "Tom Fischer",
      role: "Frontend Developer",
      avatar: "/avatars/placeholder.jpg?height=80&width=80",
    },
    {
      name: "Julia Bauer",
      role: "UX Designer",
      avatar: "/avatars/placeholder.jpg?height=80&width=80",
    },
    {
      name: "Max Schneider",
      role: "Backend Developer",
      avatar: "/avatars/placeholder.jpg?height=80&width=80",
      github: "alexmueller",
      linkedin: "alex-mueller-dev",
    },
    {
      name: "Alex Müller",
      role: "Project Lead",
      leads_project: "TUM Live",
      bio: "Leitet die Entwicklung der Live-Streaming Platform und koordiniert das Backend-Team.",
      avatar: "/avatars/placeholder.jpg?height=120&width=120",
      github: "alexmueller",
      linkedin: "alex-mueller-dev",
    },
    {
      name: "Sarah Schmidt",
      role: "Mobile Lead",
      leads_project: "Campus App",
      bio: "Verantwortlich für die mobile Entwicklung und User Experience der Campus App.",
      avatar: "/avatars/placeholder.jpg?height=120&width=120",
      github: "sarahschmidt",
      linkedin: "sarah-schmidt-mobile",
    },
    {
      name: "David Weber",
      role: "Infrastructure Lead",
      leads_project: "DevOps & CI/CD",
      bio: "Kümmert sich um die Infrastruktur und Deployment-Pipelines aller Projekte.",
      avatar: "/avatars/placeholder.jpg?height=120&width=120",
      github: "davidweber",
      linkedin: "david-weber-devops",
    },
    {
      name: "Lisa Chen",
      role: "Frontend Lead",
      leads_project: "Web Development",
      bio: "Leitet die Frontend-Entwicklung und Design-System Implementierung.",
      avatar: "/avatars/placeholder.jpg?height=120&width=120",
      github: "lisachen",
      linkedin: "lisa-chen-frontend",
    },
    {
      name: "Marco Rossi",
      role: "API Lead",
      leads_project: "Backend Services",
      bio: "Entwickelt und maintained die APIs und Backend-Services für alle Projekte.",
      avatar: "/avatars/placeholder.jpg?height=120&width=120",
      github: "marcorossi",
      linkedin: "marco-rossi-backend",
    },
    {
      name: "Anna Kowalski",
      role: "Community Lead",
      leads_project: "Events & Workshops",
      bio: "Organisiert Events, Workshops und koordiniert die Community-Aktivitäten.",
      avatar: "/avatars/placeholder.jpg?height=120&width=120",
      github: "annakowalski",
      linkedin: "anna-kowalski-community",
    },
  ];
  const slideshow: readonly SlideShowItem[] = [
    {
      src: "/events/tunix25.jpg",
      alt: "Monatliches Team Meeting",
      caption:
        "Einmal im monat machen wir ein Team Meeting, wo wir Ideen/Probleme besprechen und unseren Fortschritt präsentieren",
    },
    //{
    //    src: "/events/hackatum.jpg",
    //    alt: "Team bei einem Hackathon",
    //    caption: "48h Hackathon - Intensive Coding-Sessions mit Pizza und viel Kaffee",
    //},
    {
      src: "/events/server-bau24.jpg",
      alt: "Team beim Server-Aufbau",
      caption: "Hands-on: Gemeinsamer Aufbau von neuen Live-Streaming Servern",
    },
    {
      src: "/events/live-stream-baystura24.jpg",
      alt: "Livestreaming setup für eine ",
      caption:
        "Hin und wieder machen wir LiveStreaming für andere Hochschulgruppen - Hier beispielsweise für den BayStuRa",
    },
    {
      src: "/events/fossgis25.png",
      alt: "Team auf einer Konferenz",
      caption:
        "Gemeinsam auf einer Open Source Konferenz - Networking und neue Ideen",
    },
    {
      src: "/events/mc-donalds24.jpg",
      alt: "Team Dinner",
      caption: "Team Dinner - Auch abseits des Codes verstehen wir uns super",
    },
    {
      src: "/events/ipraktikum23.jpg",
      alt: "TUM-Projekt Präsentation",
      caption:
        "TUM-Präsentationen - Hin und wieder präsentieren wir IT-Projekte. Hier beispielsweise mit unserem CIO beim iPraktikum",
    },
    {
      src: "/events/student-club-fair24.jpg",
      alt: "Projekt Präsentation",
      caption:
        "Projekt-Präsentationen - Wir präsentieren regelmäßig unsere projekte bei diversen veranstaltungen. Hier die StudentClub Fair",
    },
    {
      src: "/events/student-club-fair25.jpg",
      alt: "Projekt Präsentation",
      caption:
        "Projekt-Präsentationen - Wir präsentieren regelmäßig unsere projekte bei diversen veranstaltungen. Hier die StudentClub Fair",
    },
    {
      src: "/events/photobox25.jpg",
      alt: "Menschen vor einer Photobox, die sie gebaut haben",
      caption:
        "Neben code machen wir auch Veranstaltungen - hier haben wir beispielsweise die Photobox für die Unity gebaut",
    },
  ];
  const projects: readonly ProjectProps[] = [
    {
      name: "TUM Live",
      description: "Live-Streaming Platform für Vorlesungen",
      tech: ["Go", "React", "Docker"],
    },
    {
      name: "Campus App",
      description: "Mobile App für TUM Studierende",
      tech: ["Flutter", "Dart", "API"],
    },
    {
      name: "Roomfinder",
      description: "Raumsuche und Navigation am Campus",
      tech: ["Python", "Django", "Maps"],
    },
    {
      name: "Eat API",
      description: "API für Mensapläne und Cafeterien",
      tech: ["Node.js", "Express", "REST"],
    },
    {
      name: "TUM Dev Tools",
      description: "Entwicklertools für TUM Services",
      tech: ["TypeScript", "CLI", "Utils"],
    },
    {
      name: "Open Source Starter",
      description: "Template für neue Open Source Projekte",
      tech: ["Templates", "CI/CD", "Docs"],
    },
  ];
  return (
    <div>
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Link href="https://www.sv.tum.de/sv/hochschulgruppen/">
            <Badge
              variant="secondary"
              className="mb-6 px-4 py-2 dark:bg-slate-700 dark:text-gray-300 dark:hover:text-gray-900"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Hochschulgruppe an der Technischen Universität München
            </Badge>
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold font-sans dark:text-white text-gray-900 mb-6 leading-tight">
            Open Source
            <span className="bg-gradient-to-r dark:from-blue-400 dark:to-blue-500 from-blue-500 to-blue-600 bg-clip-text text-transparent">
              {" @ TUM"}
            </span>
          </h1>
          <p className="text-xl dark:text-gray-300 text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Wir arbeiten an verschiedenen Open Source Projekten, organisieren
            Veranstaltungen und bieten Workshops an.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="dark:from-blue-600 dark:to-blue-700 dark:hover:from-blue-700 dark:hover:to-blue-800 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
            >
              <Users className="w-5 h-5 mr-2" />
              Jetzt mitmachen
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="dark:hover:bg-slate-600 dark:hover:text-gray-50 dark:text-gray-100 dark:bg-slate-700"
              asChild
            >
              <Link href="#projects">
                <Github className="w-5 h-5 mr-2" />
                Unsere Projekte
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="wir-machen"
        className="py-16 px-4 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-700 bg-gradient-to-br from-gray-50 to-slate-100"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold dark:text-white text-gray-900 mb-4">
              Was wir machen
            </h2>
            <p className="dark:text-gray-300 text-gray-600 max-w-2xl mx-auto">
              Unsere Projekte sind für alle frei verfügbar und wir freuen uns
              über jede Unterstützung.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow dark:bg-slate-700 dark:border-slate-600 bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="dark:text-white text-gray-900">
                  Software Entwicklung
                </CardTitle>
                <CardDescription className="dark:text-gray-300 text-gray-600">
                  Wir entwickeln innovative Open Source Software und tragen zu
                  bestehenden Projekten bei.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow dark:bg-slate-700 dark:border-slate-600 bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="dark:text-white text-gray-900">
                  Veranstaltungen
                </CardTitle>
                <CardDescription className="dark:text-gray-300 text-gray-600">
                  Wir organisieren regelmäßige Events, Hackathons und Meetups
                  für die Open Source Community.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow dark:bg-slate-700 dark:border-slate-600 bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="dark:text-white text-gray-900">
                  Workshops
                </CardTitle>
                <CardDescription className="dark:text-gray-300 text-gray-600">
                  Wir bieten Workshops zu verschiedenen Technologien und Open
                  Source Tools an.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section
        id="events"
        className="py-16 px-4 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-700 bg-gradient-to-br from-gray-50 to-slate-100"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold dark:text-white text-gray-900 mb-4">
              Kommende Termine
            </h2>
            <p className="dark:text-gray-300 text-gray-600">
              Verpasse keine unserer Veranstaltungen und Treffen
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Regular Meetings */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold dark:text-white text-gray-900 mb-4 flex items-center">
                <Users2 className="w-5 h-5 mr-2 dark:text-blue-400 text-blue-500" />
                Regelmäßige Treffen
              </h3>
              <Card className="dark:border-l-4 dark:border-l-blue-400 dark:bg-slate-700 border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold dark:text-white text-gray-900 mb-2">
                        Wöchentliches Treffen
                      </h4>
                      <p className="dark:text-gray-300 text-gray-600 mb-3">
                        Jeden Donnerstag besprechen wir aktuelle Projekte und
                        planen neue Initiativen.
                      </p>
                      <div className="flex items-center text-sm dark:text-gray-400 text-gray-500 space-x-4">
                        <div className="flex items-center">
                          <CalendarIcon className="w-4 h-4 mr-1" />
                          Jeden Donnerstag
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          18:00 - 20:00
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      Regelmäßig
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Upcoming Events */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold dark:text-white text-gray-900 mb-4 flex items-center">
                <CalendarIcon className="w-5 h-5 mr-2 text-blue-400" />
                Kommende Events
              </h3>

              <Card className="dark:border-l-4 dark:border-l-blue-400 dark:bg-slate-700 border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      <div className="w-10 h-10 dark:bg-blue-800 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                        <Wrench className="w-5 h-5 dark:text-blue-300 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold dark:text-white text-gray-900">
                          Git & GitHub Workshop
                        </h4>
                        <p className="text-sm dark:text-gray-400 text-gray-500">
                          15. Januar 2024
                        </p>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className="dark:border-slate-600 dark:text-gray-300"
                    >
                      Workshop
                    </Badge>
                  </div>
                  <p className="dark:text-gray-300 text-gray-600 text-sm mb-3">
                    Lerne die Grundlagen von Git und GitHub für Open Source
                    Projekte.
                  </p>
                  <div className="flex items-center text-sm dark:text-gray-400 text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    16:00 - 18:00 • Raum MI 00.13.009A
                  </div>
                </CardContent>
              </Card>

              <Card className="dark:border-l-4 dark:border-l-purple-400 dark:bg-slate-700 border-l-4 border-l-purple-500">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      <div className="w-10 h-10 dark:bg-purple-800 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                        <Trophy className="w-5 h-5 dark:text-purple-300 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold dark:text-white text-gray-900">
                          TUM Open Source Hackathon
                        </h4>
                        <p className="text-sm dark:text-gray-400 text-gray-500">
                          22.-23. Januar 2024
                        </p>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className="dark:border-slate-600 dark:text-gray-300"
                    >
                      Hackathon
                    </Badge>
                  </div>
                  <p className="dark:text-gray-300 text-gray-600 text-sm mb-3">
                    48h Hackathon mit Fokus auf studentische Open Source
                    Projekte.
                  </p>
                  <div className="flex items-center text-sm dark:text-gray-400 text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    Freitag 18:00 - Sonntag 18:00 • TUM Garching
                  </div>
                </CardContent>
              </Card>

              <Card className="dark:border-l-4 dark:border-l-green-400 dark:bg-slate-700 border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      <div className="w-10 h-10 dark:bg-green-800 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                        <Coffee className="w-5 h-5 dark:text-green-300 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold dark:text-white text-gray-900">
                          Open Source Coffee Chat
                        </h4>
                        <p className="text-sm dark:text-gray-400 text-gray-500">
                          29. Januar 2024
                        </p>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className="dark:border-slate-600 dark:text-gray-300"
                    >
                      Networking
                    </Badge>
                  </div>
                  <p className="dark:text-gray-300 text-gray-600 text-sm mb-3">
                    Lockeres Treffen zum Austausch über Open Source Trends und
                    Projekte.
                  </p>
                  <div className="flex items-center text-sm dark:text-gray-400 text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    15:00 - 17:00 • TUM Mensa Garching
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action for Events */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r dark:from-blue-900 dark:to-indigo-900 from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold dark:text-white text-gray-900 mb-4">
                Interesse an unseren Events?
              </h3>
              <p className="dark:text-gray-300 text-gray-600 mb-6 max-w-2xl mx-auto">
                Melde dich bei uns, um über kommende Veranstaltungen informiert
                zu werden und keine spannenden Workshops oder Hackathons zu
                verpassen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r dark:from-blue-600 dark:to-blue-700 dark:hover:from-blue-700 dark:hover:to-blue-800 from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                  <Mail className="w-4 h-4 mr-2" />
                  Event-Updates erhalten
                </Button>
                <Button
                  variant="secondary"
                  className="dark:hover:bg-slate-600 dark:hover:text-gray-50 dark:text-gray-100 dark:bg-slate-700"
                >
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  Kalender abonnieren
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 px-4 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-700 bg-gradient-to-br from-gray-50 to-slate-100"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold dark:text-white text-gray-900 mb-4">
              Unsere Projekte
            </h2>
            <p className="dark:text-gray-300 text-gray-600">
              Entdecke einige unserer aktuellen Open Source Projekte
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => <Project key={index} name={project.name} description={project.description} tech={project.tech} />)}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="py-16 px-4 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-700 bg-gradient-to-br from-gray-50 to-slate-100"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold dark:text-white text-gray-900 mb-4">
              Unser Team
            </h2>
            <p className="dark:text-gray-300 text-gray-600">
              Lerne die Menschen kennen, die unsere Open Source Projekte
              vorantreiben
            </p>
          </div>

          {/* Core Team */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold dark:text-white text-gray-900 mb-8 text-center">
              Core Team
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {members
                .filter((m) => m.leads_project)
                .map((member, index) => (
                  <Member
                    key={index}
                    name={member.name}
                    avatar={member.avatar}
                    role={member.role}
                    leads_project={member.leads_project}
                    bio={member.bio}
                    github={member.github}
                    linkedin={member.linkedin}
                  />
                ))}
            </div>
          </div>

          {/* Members */}
          <div>
            <h3 className="text-2xl font-semibold dark:text-white text-gray-900 mb-8 text-center">
              Aktive Mitglieder
            </h3>
            <div
              className={`grid sm:grid-cols-${Math.min(members.filter((m) => !m.leads_project).length, 2)} md:grid-cols-${Math.min(members.filter((m) => !m.leads_project).length, 3)} lg:grid-cols-${Math.min(members.filter((m) => !m.leads_project).length, 4)} xl:grid-cols-${Math.min(members.filter((m) => !m.leads_project).length, 6)} gap-6`}
            >
              {members
                .filter((m) => !m.leads_project)
                .map((member, index) => (
                  <Member
                    key={index}
                    avatar={member.avatar}
                    name={member.name}
                    role={member.role}
                  />
                ))}
            </div>
          </div>

          {/* Join Team CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r dark:from-blue-900 dark:to-indigo-900 from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold dark:text-white text-gray-900 mb-4">
                Werde Teil unseres Teams!
              </h3>
              <p className="dark:text-gray-300 text-gray-600 mb-6 max-w-2xl mx-auto">
                Wir suchen immer nach motivierten Entwicklern, Designern und
                Open Source Enthusiasten. Egal ob Anfänger oder Experte - bei
                uns findest du spannende Projekte und ein tolles Team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r dark:from-blue-600 dark:to-blue-700 dark:hover:from-blue-700 dark:hover:to-blue-800 from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                  <Users className="w-4 h-4 mr-2" />
                  Team beitreten
                </Button>
                <Button
                  variant="secondary"
                    className="dark:hover:bg-slate-600 dark:hover:text-gray-50 dark:text-gray-100 dark:bg-slate-700 bg-black text-white hover:text-gray-50 hover:bg-gray-900"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Projekte ansehen
                </Button>
              </div>
            </div>
          </div>

          {/* Team Activities Slideshow */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold dark:text-white text-gray-900 mb-4">
                Einblicke in unser Team
              </h3>
              <p className="dark:text-gray-300 text-gray-600">
                Von Hackathons bis Server-Aufbau - hier siehst du, was wir
                gemeinsam erleben
              </p>
            </div>

            <Slideshow images={slideshow} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="cta"
        className="py-20 px-4 bg-gradient-to-r dark:from-blue-800 dark:to-blue-900 from-blue-500 to-blue-600"
      >
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl font-bold text-white mb-6">
            Lust mitzumachen?
          </h2>
          <p className="text-xl dark:text-blue-100 text-blue-100 mb-8 leading-relaxed">
            Wenn du Lust hast, bei uns mitzumachen, dann schau doch mal bei
            einem unserer Treffen vorbei. Wende dich dafür einfach an uns - wir
            freuen uns auf dich!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white dark:text-blue-800 text-blue-600 hover:bg-gray-100"
            >
              <Mail className="w-5 h-5 mr-2" />
              app (at) tum.de
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-slate-900 hover:bg-white/10"
            >
              <Users className="w-5 h-5 mr-2" />
              Zu unseren Treffen
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
