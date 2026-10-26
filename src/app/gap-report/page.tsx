import Link from "next/link";
import {
    AlertTriangle,
    ArrowRight,
    CheckCircle2,
    Target,
    TrendingUp,
} from "lucide-react";

import AppLayout from "@/components/layout/AppLayout";
import { topics } from "@/data/demo-data";

export default function GapReportPage() {
    const weakTopics = topics.filter((topic) => topic.status === "Weak");
    const mediumTopics = topics.filter((topic) => topic.status === "Medium");
    const strongTopics = topics.filter((topic) => topic.status === "Strong");

    return (
        <AppLayout
            title="Gap Report"
            description="Identify what you need to learn next"
        >
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900">
                    Your Knowledge Gap Report
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                    A sample analysis of topics that need attention.
                </p>
            </div>

            <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
                <div className="rounded-2xl border border-rose-100 bg-rose-50 p-5">
                    <AlertTriangle className="text-rose-600" size={24} />
                    <p className="mt-4 text-sm text-rose-700">High Priority</p>
                    <p className="mt-1 text-3xl font-bold text-rose-800">
                        {weakTopics.length}
                    </p>
                    <p className="mt-2 text-xs text-rose-700">
                        Topics needing focused study
                    </p>
                </div>

                <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5">
                    <Target className="text-amber-600" size={24} />
                    <p className="mt-4 text-sm text-amber-700">Needs Practice</p>
                    <p className="mt-1 text-3xl font-bold text-amber-800">
                        {mediumTopics.length}
                    </p>
                    <p className="mt-2 text-xs text-amber-700">
                        Topics to strengthen
                    </p>
                </div>

                <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                    <CheckCircle2 className="text-emerald-600" size={24} />
                    <p className="mt-4 text-sm text-emerald-700">Strong Topics</p>
                    <p className="mt-1 text-3xl font-bold text-emerald-800">
                        {strongTopics.length}
                    </p>
                    <p className="mt-2 text-xs text-emerald-700">
                        Topics to maintain
                    </p>
                </div>
            </div>

            <section className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-900">Detailed Topic Analysis</h3>

                <p className="mt-1 text-sm text-slate-500">
                    Start with the topics that have the lowest scores.
                </p>

                <div className="mt-6 space-y-4">
                    {[...topics].sort((a, b) => a.score - b.score).map((topic) => (
                        <div
                            key={topic.id}
                            className="rounded-xl border border-slate-100 p-5"
                        >
                            <div className="flex flex-wrap items-start justify-between gap-3">
                                <div>
                                    <h4 className="font-semibold text-slate-900">
                                        {topic.name}
                                    </h4>
                                    <p className="mt-1 text-xs text-slate-500">
                                        {topic.subject}
                                    </p>
                                </div>

                                <span
                                    className={`rounded-full px-3 py-1.5 text-xs font-semibold ${topic.status === "Weak"
                                            ? "bg-rose-50 text-rose-700"
                                            : topic.status === "Medium"
                                                ? "bg-amber-50 text-amber-700"
                                                : "bg-emerald-50 text-emerald-700"
                                        }`}
                                >
                                    {topic.status}
                                </span>
                            </div>

                            <div className="mt-4 flex items-center gap-4">
                                <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-slate-100">
                                    <div
                                        className={`h-full rounded-full ${topic.status === "Weak"
                                                ? "bg-rose-500"
                                                : topic.status === "Medium"
                                                    ? "bg-amber-500"
                                                    : "bg-emerald-500"
                                            }`}
                                        style={{ width: `${topic.score}%` }}
                                    />
                                </div>

                                <span className="w-12 text-right text-sm font-bold text-slate-700">
                                    {topic.score}%
                                </span>
                            </div>

                            <p className="mt-3 text-xs leading-5 text-slate-500">
                                {topic.status === "Weak"
                                    ? "Recommended action: review fundamental concepts and practice more questions."
                                    : topic.status === "Medium"
                                        ? "Recommended action: revise important concepts and solve practice questions."
                                        : "Recommended action: continue periodic revision to maintain your understanding."}
                            </p>
                        </div>
                    ))}
                </div>

                <Link
                    href="/revision-plan"
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white hover:bg-violet-700"
                >
                    Build revision plan
                    <ArrowRight size={17} />
                </Link>
            </section>

            <section className="mt-6 flex items-start gap-4 rounded-2xl border border-violet-100 bg-violet-50 p-5">
                <TrendingUp className="mt-1 shrink-0 text-violet-600" size={23} />

                <div>
                    <h3 className="font-semibold text-violet-900">
                        How GapFinder AI will improve this report
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-violet-800">
                        Once the backend is connected, the report can use quiz answers,
                        document content, and topic-level performance to produce a more
                        personalized analysis. The scores on this page currently come from
                        demo data.
                    </p>
                </div>
            </section>
        </AppLayout>
    );
}