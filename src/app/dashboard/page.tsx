import Link from "next/link";
import {
    ArrowRight,
    BookOpen,
    ClipboardCheck,
    FileText,
    Sparkles,
} from "lucide-react";

import AppLayout from "@/components/layout/AppLayout";
import StatsCards from "@/components/dashboard/StatsCards";
import ProgressChart from "@/components/dashboard/ProgressChart";
import { topics, revisionTasks } from "@/data/demo-data";

export default function DashboardPage() {
    const weakTopics = topics.filter((topic) => topic.status === "Weak");
    const pendingTasks = revisionTasks.filter((task) => !task.completed);

    return (
        <AppLayout
            title="Dashboard"
            description="Your personal learning overview"
        >
            <div className="mb-8 overflow-hidden rounded-3xl bg-gradient-to-r from-violet-700 via-violet-600 to-indigo-600 p-8 text-white">
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                    <div className="max-w-2xl">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium">
                            <Sparkles size={14} />
                            AI-powered learning assistant
                        </div>

                        <h2 className="text-3xl font-bold tracking-tight">
                            Find your gaps. Build your strengths.
                        </h2>

                        <p className="mt-3 max-w-xl text-sm leading-6 text-violet-100">
                            Understand what you know, identify topics that need improvement,
                            and follow a personalized revision plan.
                        </p>

                        <Link
                            href="/diagnostic-quiz"
                            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-violet-700 transition hover:bg-violet-50"
                        >
                            Start diagnostic quiz
                            <ArrowRight size={17} />
                        </Link>
                    </div>

                    <div className="hidden h-36 w-36 items-center justify-center rounded-full border border-white/20 bg-white/10 md:flex">
                        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/10">
                            <Sparkles size={45} />
                        </div>
                    </div>
                </div>
            </div>

            <StatsCards />

            <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-3">
                <div className="xl:col-span-2">
                    <ProgressChart />
                </div>

                <section className="rounded-2xl border border-slate-200 bg-white p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="font-bold text-slate-900">
                                Priority Topics
                            </h3>
                            <p className="mt-1 text-sm text-slate-500">
                                Focus on these first
                            </p>
                        </div>

                        <span className="rounded-lg bg-rose-50 px-3 py-1.5 text-xs font-semibold text-rose-600">
                            {weakTopics.length} weak
                        </span>
                    </div>

                    <div className="mt-5 space-y-5">
                        {weakTopics.map((topic) => (
                            <div key={topic.id}>
                                <div className="mb-2 flex justify-between gap-3">
                                    <span className="text-sm font-medium text-slate-700">
                                        {topic.name}
                                    </span>

                                    <span className="text-sm font-semibold text-rose-600">
                                        {topic.score}%
                                    </span>
                                </div>

                                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                                    <div
                                        className="h-full rounded-full bg-rose-400"
                                        style={{ width: `${topic.score}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <Link
                        href="/gap-report"
                        className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                    >
                        View gap report
                        <ArrowRight size={16} />
                    </Link>
                </section>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
                <section className="rounded-2xl border border-slate-200 bg-white p-6">
                    <div className="flex items-center justify-between">
                        <h3 className="font-bold text-slate-900">Upcoming Revision</h3>

                        <BookOpen size={20} className="text-violet-600" />
                    </div>

                    <div className="mt-5 space-y-4">
                        {pendingTasks.slice(0, 3).map((task) => (
                            <div
                                key={task.id}
                                className="flex items-center gap-3 rounded-xl bg-slate-50 p-4"
                            >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                                    <FileText size={19} />
                                </div>

                                <div className="min-w-0 flex-1">
                                    <p className="text-sm font-semibold text-slate-800">
                                        {task.title}
                                    </p>

                                    <p className="mt-1 text-xs text-slate-500">
                                        {task.day} · {task.duration}
                                    </p>
                                </div>

                                <span className="text-xs font-semibold text-rose-600">
                                    {task.priority}
                                </span>
                            </div>
                        ))}
                    </div>

                    <Link
                        href="/revision-plan"
                        className="mt-5 flex items-center gap-2 text-sm font-semibold text-violet-700 hover:text-violet-900"
                    >
                        Open revision plan
                        <ArrowRight size={16} />
                    </Link>
                </section>

                <section className="rounded-2xl border border-slate-200 bg-white p-6">
                    <div className="flex items-center justify-between">
                        <h3 className="font-bold text-slate-900">Quick Actions</h3>

                        <ClipboardCheck size={20} className="text-violet-600" />
                    </div>

                    <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <Link
                            href="/upload"
                            className="rounded-xl border border-slate-200 p-4 transition hover:border-violet-300 hover:bg-violet-50"
                        >
                            <BookOpen className="mb-3 text-violet-600" size={23} />
                            <p className="text-sm font-semibold text-slate-800">
                                Upload Material
                            </p>
                            <p className="mt-1 text-xs text-slate-500">
                                Add study documents
                            </p>
                        </Link>

                        <Link
                            href="/topic-map"
                            className="rounded-xl border border-slate-200 p-4 transition hover:border-violet-300 hover:bg-violet-50"
                        >
                            <Sparkles className="mb-3 text-violet-600" size={23} />
                            <p className="text-sm font-semibold text-slate-800">
                                Explore Topics
                            </p>
                            <p className="mt-1 text-xs text-slate-500">
                                Check topic strengths
                            </p>
                        </Link>
                    </div>
                </section>
            </div>
        </AppLayout>
    );
}