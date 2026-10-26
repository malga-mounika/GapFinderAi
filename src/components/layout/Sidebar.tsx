"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    BrainCircuit,
    LayoutDashboard,
    Upload,
    Network,
    ClipboardCheck,
    ChartNoAxesCombined,
    CalendarDays,
    ChevronRight,
    Sparkles,
} from "lucide-react";

const navigation = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        name: "Study Materials",
        href: "/upload",
        icon: Upload,
    },
    {
        name: "Topic Map",
        href: "/topic-map",
        icon: Network,
    },
    {
        name: "Diagnostic Quiz",
        href: "/diagnostic-quiz",
        icon: ClipboardCheck,
    },
    {
        name: "Gap Report",
        href: "/gap-report",
        icon: ChartNoAxesCombined,
    },
    {
        name: "Revision Plan",
        href: "/revision-plan",
        icon: CalendarDays,
    },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-slate-200 bg-white">
            <div className="flex h-20 items-center gap-3 border-b border-slate-100 px-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-600 text-white shadow-lg shadow-violet-200">
                    <BrainCircuit size={25} />
                </div>

                <div>
                    <h1 className="text-lg font-bold tracking-tight text-slate-900">
                        GapFinder <span className="text-violet-600">AI</span>
                    </h1>
                    <p className="text-xs text-slate-500">Your learning companion</p>
                </div>
            </div>

            <div className="px-4 pt-7">
                <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
                    Workspace
                </p>

                <nav className="space-y-1">
                    {navigation.map((item) => {
                        const Icon = item.icon;
                        const active = pathname === item.href;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${active
                                        ? "bg-violet-50 text-violet-700"
                                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                    }`}
                            >
                                <Icon size={19} />

                                <span className="flex-1">{item.name}</span>

                                {active && <ChevronRight size={16} />}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            <div className="mt-auto p-4">
                <div className="rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-700 p-4 text-white">
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white/15">
                        <Sparkles size={20} />
                    </div>

                    <h3 className="font-semibold">Find your knowledge gaps</h3>

                    <p className="mt-2 text-xs leading-5 text-violet-100">
                        Discover what you know, what you need to improve, and what to study
                        next.
                    </p>

                    <Link
                        href="/diagnostic-quiz"
                        className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-white px-3 py-2.5 text-sm font-semibold text-violet-700 hover:bg-violet-50"
                    >
                        Start assessment
                    </Link>
                </div>

                <p className="mt-4 text-center text-xs text-slate-400">
                    GapFinder AI · Demo Version
                </p>
            </div>
        </aside>
    );
}