"use client";

import { useState } from "react";
import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    CheckCircle2,
    RotateCcw,
    Trophy,
} from "lucide-react";

import AppLayout from "@/components/layout/AppLayout";
import { quizQuestions } from "@/data/demo-data";

export default function DiagnosticQuizPage() {
    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState<Record<number, number>>({});
    const [submitted, setSubmitted] = useState(false);

    const question = quizQuestions[current];

    const correctCount = quizQuestions.filter(
        (item) => answers[item.id] === item.correctAnswer,
    ).length;

    const score = Math.round((correctCount / quizQuestions.length) * 100);

    function resetQuiz() {
        setCurrent(0);
        setAnswers({});
        setSubmitted(false);
    }

    return (
        <AppLayout
            title="Diagnostic Quiz"
            description="Test your understanding and discover learning gaps"
        >
            {!submitted ? (
                <div className="mx-auto max-w-3xl">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900">
                            Knowledge Assessment
                        </h2>

                        <p className="mt-2 text-sm text-slate-500">
                            Answer each question to assess your current understanding.
                        </p>
                    </div>

                    <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-9">
                        <div className="flex items-center justify-between gap-4">
                            <span className="rounded-lg bg-violet-50 px-3 py-2 text-xs font-semibold text-violet-700">
                                Question {current + 1} of {quizQuestions.length}
                            </span>

                            <span className="text-sm text-slate-500">
                                {Object.keys(answers).length} answered
                            </span>
                        </div>

                        <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
                            <div
                                className="h-full rounded-full bg-violet-600 transition-all"
                                style={{
                                    width: `${((current + 1) / quizQuestions.length) * 100}%`,
                                }}
                            />
                        </div>

                        <p className="mt-8 text-xs font-semibold uppercase tracking-wider text-violet-600">
                            {question.topic}
                        </p>

                        <h3 className="mt-3 text-xl font-bold leading-8 text-slate-900">
                            {question.question}
                        </h3>

                        <div className="mt-7 space-y-3">
                            {question.options.map((option, index) => {
                                const selected = answers[question.id] === index;

                                return (
                                    <button
                                        key={option}
                                        type="button"
                                        onClick={() =>
                                            setAnswers((previous) => ({
                                                ...previous,
                                                [question.id]: index,
                                            }))
                                        }
                                        className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition ${selected
                                                ? "border-violet-500 bg-violet-50 text-violet-800"
                                                : "border-slate-200 text-slate-700 hover:border-violet-300 hover:bg-slate-50"
                                            }`}
                                    >
                                        <span
                                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-semibold ${selected
                                                    ? "bg-violet-600 text-white"
                                                    : "bg-slate-100 text-slate-600"
                                                }`}
                                        >
                                            {String.fromCharCode(65 + index)}
                                        </span>

                                        <span className="text-sm font-medium">{option}</span>
                                    </button>
                                );
                            })}
                        </div>

                        <div className="mt-9 flex items-center justify-between gap-3">
                            <button
                                type="button"
                                disabled={current === 0}
                                onClick={() => setCurrent((previous) => previous - 1)}
                                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                            >
                                <ArrowLeft size={16} />
                                Previous
                            </button>

                            {current < quizQuestions.length - 1 ? (
                                <button
                                    type="button"
                                    onClick={() => setCurrent((previous) => previous + 1)}
                                    className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white hover:bg-violet-700"
                                >
                                    Next question
                                    <ArrowRight size={16} />
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    disabled={Object.keys(answers).length !== quizQuestions.length}
                                    onClick={() => setSubmitted(true)}
                                    className="rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    Submit assessment
                                </button>
                            )}
                        </div>

                        {Object.keys(answers).length !== quizQuestions.length && (
                            <p className="mt-4 text-right text-xs text-slate-400">
                                Answer all questions before submitting.
                            </p>
                        )}
                    </section>
                </div>
            ) : (
                <div className="mx-auto max-w-3xl">
                    <section className="rounded-3xl border border-slate-200 bg-white p-8 text-center sm:p-12">
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-violet-50 text-violet-600">
                            <Trophy size={38} />
                        </div>

                        <h2 className="mt-6 text-2xl font-bold text-slate-900">
                            Assessment Completed!
                        </h2>

                        <p className="mt-2 text-sm text-slate-500">
                            Here is your result for this sample diagnostic quiz.
                        </p>

                        <p className="mt-8 text-6xl font-bold text-violet-700">
                            {score}%
                        </p>

                        <p className="mt-3 text-sm text-slate-600">
                            {correctCount} correct out of {quizQuestions.length} questions
                        </p>

                        <div className="mx-auto mt-8 max-w-md space-y-3 text-left">
                            {quizQuestions.map((item) => {
                                const correct = answers[item.id] === item.correctAnswer;

                                return (
                                    <div
                                        key={item.id}
                                        className="flex items-start gap-3 rounded-xl bg-slate-50 p-4"
                                    >
                                        {correct ? (
                                            <CheckCircle2
                                                size={19}
                                                className="mt-0.5 text-emerald-600"
                                            />
                                        ) : (
                                            <span className="mt-0.5 text-rose-600">✕</span>
                                        )}

                                        <div>
                                            <p className="text-sm font-semibold text-slate-800">
                                                {item.topic}
                                            </p>

                                            <p className="mt-1 text-xs leading-5 text-slate-500">
                                                {item.explanation}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-8 flex flex-wrap justify-center gap-3">
                            <button
                                type="button"
                                onClick={resetQuiz}
                                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                            >
                                <RotateCcw size={16} />
                                Try again
                            </button>

                            <Link
                                href="/gap-report"
                                className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white hover:bg-violet-700"
                            >
                                View gap report
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    </section>
                </div>
            )}
        </AppLayout>
    );
}