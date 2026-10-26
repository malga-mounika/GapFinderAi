"use client";

import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

import { weeklyProgress } from "@/data/demo-data";

export default function ProgressChart() {
    return (
        <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h3 className="font-bold text-slate-900">Learning Progress</h3>
                    <p className="mt-1 text-sm text-slate-500">
                        Your weekly learning performance
                    </p>
                </div>

                <span className="rounded-lg bg-violet-50 px-3 py-2 text-xs font-semibold text-violet-700">
                    This week
                </span>
            </div>

            <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={weeklyProgress}
                        margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient id="progressFill" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.25} />
                                <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0.01} />
                            </linearGradient>
                        </defs>

                        <CartesianGrid
                            strokeDasharray="3 3"
                            vertical={false}
                            stroke="#e2e8f0"
                        />

                        <XAxis
                            dataKey="day"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#94a3b8", fontSize: 12 }}
                            dy={10}
                        />

                        <YAxis
                            domain={[0, 100]}
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#94a3b8", fontSize: 12 }}
                        />

                        <Tooltip
                            contentStyle={{
                                borderRadius: 12,
                                border: "1px solid #e2e8f0",
                                fontSize: 12,
                            }}
                            formatter={(value) => [`${value}%`, "Progress"]}
                        />

                        <Area
                            type="monotone"
                            dataKey="score"
                            stroke="#7c3aed"
                            strokeWidth={3}
                            fill="url(#progressFill)"
                            activeDot={{ r: 6 }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </section>
    );
}