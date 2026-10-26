"use client";

import type { ReactNode } from "react";
import { Bell, Search, UserRound } from "lucide-react";
import Sidebar from "./Sidebar";

interface AppLayoutProps {
    children: ReactNode;
    title: string;
    description: string;
}

export default function AppLayout({
    children,
    title,
    description,
}: AppLayoutProps) {
    return (
        <div className="min-h-screen bg-slate-50">
            <Sidebar />

            <div className="min-h-screen pl-64">
                <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/90 px-8 backdrop-blur-xl">
                    <div>
                        <h2 className="text-xl font-bold text-slate-900">{title}</h2>
                        <p className="mt-1 text-xs text-slate-500">{description}</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 md:flex">
                            <Search size={17} className="text-slate-400" />

                            <input
                                aria-label="Search"
                                placeholder="Search workspace..."
                                className="w-40 bg-transparent text-sm outline-none placeholder:text-slate-400"
                            />
                        </div>

                        <button
                            type="button"
                            aria-label="Notifications"
                            className="relative rounded-xl border border-slate-200 p-2.5 text-slate-600 hover:bg-slate-50"
                        >
                            <Bell size={19} />

                            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-violet-500" />
                        </button>

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                            <UserRound size={21} />
                        </div>
                    </div>
                </header>

                <main className="mx-auto max-w-[1600px] p-8">{children}</main>
            </div>
        </div>
    );
}