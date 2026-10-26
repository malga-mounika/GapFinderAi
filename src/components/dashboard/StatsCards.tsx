import {
    BookOpen,
    Brain,
    Target,
    TrendingUp,
} from "lucide-react";

const stats = [
    {
        title: "Topics Analyzed",
        value: "24",
        detail: "Across 4 subjects",
        icon: BookOpen,
        color: "bg-blue-50 text-blue-600",
    },
    {
        title: "Strong Topics",
        value: "12",
        detail: "Ready for revision",
        icon: Brain,
        color: "bg-emerald-50 text-emerald-600",
    },
    {
        title: "Knowledge Gaps",
        value: "5",
        detail: "Need more attention",
        icon: Target,
        color: "bg-rose-50 text-rose-600",
    },
    {
        title: "Learning Progress",
        value: "72%",
        detail: "+8% this week",
        icon: TrendingUp,
        color: "bg-violet-50 text-violet-600",
    },
];

export default function StatsCards() {
    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                    <div
                        key={stat.title}
                        className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/50"
                    >
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-sm font-medium text-slate-500">
                                    {stat.title}
                                </p>

                                <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                                    {stat.value}
                                </h3>
                            </div>

                            <div
                                className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat.color}`}
                            >
                                <Icon size={22} />
                            </div>
                        </div>

                        <p className="mt-4 text-xs text-slate-500">{stat.detail}</p>
                    </div>
                );
            })}
        </div>
    );
}