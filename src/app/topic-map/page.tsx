import Link from "next/link";
import { ArrowRight, BrainCircuit, CheckCircle2, Target } from "lucide-react";

import AppLayout from "@/components/layout/AppLayout";
import { topics } from "@/data/demo-data";

const statusStyles = {
    Strong: "bg-emerald-50 text-emerald-700",
    Medium: "bg-amber-50 text-amber-700",
    Weak: "bg-rose-50 text-rose-700",
};

export default function TopicMapPage() {
    const strong = topics.filter((topic) => topic.status === "Strong").length;
    const medium = topics.filter((topic) => topic.status === "Medium").length;
    const weak = topics.filter((topic) => topic.status === "Weak").length;

    return (
        <AppLayout
            title="Topic Map"
            description="Explore your understanding topic by topic"
        >
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900">
                    Your Knowledge Map
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                    Understand which topics you have mastered and which need more
                    practice. Scores below are sample data.
                </p>
            </div>

            <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
                {[
                    {
                        title: "Strong Topics",
                        count: strong,
                        icon: CheckCircle2,
                        style: "bg-emerald-50 text-emerald-700",
                    },
                    {
                        title: "Needs Practice",
                        count: medium,
                        icon: BrainCircuit,
                        style: "bg-amber-50 text-amber-700",
                    },
                    {
                        title: "Knowledge Gaps",
                        count: weak,
                        icon: Target,
                        style: "bg-rose-50 text-rose-700",
                    },
                ].map((item) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.title}
                            className="rounded-2xl border border-slate-200 bg-white p-5"
                        >
                            <div
                                className={`flex h-11 w-11 items-center justify-center rounded-xl ${item.style}`}
                            >
                                <Icon size={22} />
                            </div>

                            <p className="mt-4 text-sm text-slate-500">{item.title}</p>

                            <p className="mt-1 text-3xl font-bold text-slate-900">
                                {item.count}
                            </p>
                        </div>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {topics.map((topic) => (
                    <article
                        key={topic.id}
                        className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/50"
                    >
                        <div className="flex items-start justify-between gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-700">
                                <BrainCircuit size={23} />
                            </div>

                            <span
                                className={`rounded-full px-3 py-1.5 text-xs font-semibold ${statusStyles[topic.status as keyof typeof statusStyles]
                                    }`}
                            >
                                {topic.status}
                            </span>
                        </div>

                        <p className="mt-5 text-xs font-medium uppercase tracking-wider text-slate-400">
                            {topic.subject}
                        </p>

                        <h3 className="mt-2 text-lg font-bold text-slate-900">
                            {topic.name}
                        </h3>

                        <div className="mb-2 mt-5 flex items-center justify-between">
                            <span className="text-sm text-slate-500">Understanding</span>

                            <span className="text-sm font-bold text-slate-800">
                                {topic.score}%
                            </span>
                        </div>

                        <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                            <div
                                className={`h-full rounded-full ${topic.status === "Strong"
                                        ? "bg-emerald-500"
                                        : topic.status === "Medium"
                                            ? "bg-amber-500"
                                            : "bg-rose-500"
                                    }`}
                                style={{ width: `${topic.score}%` }}
                            />
                        </div>

                        <Link
                            href="/diagnostic-quiz"
                            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-violet-700 hover:text-violet-900"
                        >
                            Practice this topic
                            <ArrowRight size={16} />
                        </Link>
                    </article>
                ))}
            </div>
        </AppLayout>
    );
}