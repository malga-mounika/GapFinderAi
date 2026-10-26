"use client";

import { useState } from "react";
import {
    CalendarDays,
    CheckCircle2,
    Circle,
    Clock,
    RotateCcw,
} from "lucide-react";

import AppLayout from "@/components/layout/AppLayout";
import { revisionTasks } from "@/data/demo-data";

export default function RevisionPlanPage() {
    const [tasks, setTasks] = useState(revisionTasks);

    const completedCount = tasks.filter((task) => task.completed).length;
    const progress = Math.round((completedCount / tasks.length) * 100);

    function toggleTask(id: number) {
        setTasks((previous) =>
            previous.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task,
            ),
        );
    }

    function resetPlan() {
        setTasks((previous) =>
            previous.map((task) => ({ ...task, completed: false })),
        );
    }

    return (
        <AppLayout
            title="Revision Plan"
            description="Your personalized study schedule"
        >
            <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900">
                        Your Revision Plan
                    </h2>

                    <p className="mt-2 text-sm text-slate-500">
                        Work through these sample revision tasks at your own pace.
                    </p>
                </div>

                <button
                    type="button"
                    onClick={resetPlan}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                    <RotateCcw size={16} />
                    Reset progress
                </button>
            </div>

            <section className="mb-8 rounded-2xl bg-gradient-to-r from-violet-700 to-indigo-600 p-7 text-white">
                <div className="flex items-center gap-3">
                    <CalendarDays size={25} />
                    <h3 className="text-lg font-bold">Your weekly study progress</h3>
                </div>

                <div className="mt-6 flex items-end justify-between gap-4">
                    <div>
                        <p className="text-sm text-violet-100">Tasks completed</p>

                        <p className="mt-1 text-3xl font-bold">
                            {completedCount} / {tasks.length}
                        </p>
                    </div>

                    <p className="text-2xl font-bold">{progress}%</p>
                </div>

                <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/20">
                    <div
                        className="h-full rounded-full bg-white transition-all"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-900">Study Schedule</h3>

                <div className="mt-6 space-y-5">
                    {tasks.map((task) => (
                        <div
                            key={task.id}
                            className={`flex items-start gap-4 rounded-xl border p-5 transition ${task.completed
                                    ? "border-emerald-100 bg-emerald-50/50"
                                    : "border-slate-100 bg-white"
                                }`}
                        >
                            <button
                                type="button"
                                aria-label={
                                    task.completed
                                        ? `Mark ${task.title} incomplete`
                                        : `Mark ${task.title} complete`
                                }
                                onClick={() => toggleTask(task.id)}
                                className={`mt-0.5 shrink-0 ${task.completed ? "text-emerald-600" : "text-slate-300"
                                    }`}
                            >
                                {task.completed ? (
                                    <CheckCircle2 size={24} />
                                ) : (
                                    <Circle size={24} />
                                )}
                            </button>

                            <div className="min-w-0 flex-1">
                                <p
                                    className={`font-semibold ${task.completed
                                            ? "text-slate-400 line-through"
                                            : "text-slate-900"
                                        }`}
                                >
                                    {task.title}
                                </p>

                                <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                                    <span className="inline-flex items-center gap-1.5">
                                        <CalendarDays size={14} />
                                        {task.day}
                                    </span>

                                    <span className="inline-flex items-center gap-1.5">
                                        <Clock size={14} />
                                        {task.duration}
                                    </span>
                                </div>
                            </div>

                            <span
                                className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold ${task.priority === "High"
                                        ? "bg-rose-50 text-rose-700"
                                        : "bg-amber-50 text-amber-700"
                                    }`}
                            >
                                {task.priority}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            <div className="mt-6 rounded-2xl border border-violet-100 bg-violet-50 p-5">
                <h3 className="font-semibold text-violet-900">
                    Personalized recommendations
                </h3>

                <p className="mt-2 text-sm leading-6 text-violet-800">
                    This schedule currently uses sample tasks. Once the AI backend is
                    connected, GapFinder AI can prioritize topics using your diagnostic
                    results and uploaded study material.
                </p>
            </div>
        </AppLayout>
    );
}