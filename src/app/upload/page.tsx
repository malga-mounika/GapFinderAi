"use client";

import { useRef, useState } from "react";
import {
    Upload,
    FileText,
    Trash2,
    CheckCircle2,
    Clock3,
} from "lucide-react";

import AppLayout from "@/components/layout/AppLayout";
import { studyMaterials } from "@/data/demo-data";

interface Material {
    id: number;
    name: string;
    size: string;
    status: string;
    topics: number;
}

export default function UploadPage() {
    const [materials, setMaterials] = useState<Material[]>(studyMaterials);
    const [message, setMessage] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    function handleFiles(files: FileList | null) {
        if (!files || files.length === 0) return;


        const selectedFiles = Array.from(files);

        const invalidFiles = selectedFiles.filter(
            (file) =>
                !file.name.toLowerCase().endsWith(".pdf") || file.size === 0,
        );

        if (invalidFiles.length > 0) {
            setMessage("Please select non-empty PDF files only.");
            return;
        }

        const newMaterials: Material[] = selectedFiles.map((file, index) => ({
            id: Date.now() + index,
            name: file.name,
            size:
                file.size >= 1024 * 1024
                    ? `${(file.size / (1024 * 1024)).toFixed(1)} MB`
                    : `${Math.max(1, Math.round(file.size / 1024))} KB`,
            status: "Pending",
            topics: 0,
        }));

        setMaterials((previous) => [...newMaterials, ...previous]);

        setMessage(
            `${newMaterials.length} file(s) added to the demo interface.AI processing is not connected yet.`,
        );

        if (inputRef.current) {
            inputRef.current.value = "";
        }


    }

    function removeMaterial(id: number) {
        setMaterials((previous) =>
            previous.filter((material) => material.id !== id),
        );
    }

    return (<AppLayout
        title="Study Materials"
        description="Upload and organize your learning resources"
    > <div className="mb-7"> <h2 className="text-2xl font-bold text-slate-900">
        Upload Study Material </h2>


            <p className="mt-2 text-sm text-slate-500">
                Add your study PDFs to prepare for knowledge-gap analysis.
            </p>
        </div>

        <section className="rounded-2xl border border-dashed border-violet-300 bg-white p-8 text-center sm:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
                <Upload size={30} />
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-900">
                Upload your study documents
            </h3>

            <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
                Select PDF notes, lecture materials, or study guides from your
                computer.
            </p>

            <input
                ref={inputRef}
                type="file"
                accept=".pdf,application/pdf"
                multiple
                className="hidden"
                onChange={(event) => handleFiles(event.target.files)}
            />

            <button
                type="button"
                onClick={() => inputRef.current?.click()}
                className="mt-6 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
            >
                Choose PDF files
            </button>

            <p className="mt-3 text-xs text-slate-400">
                Demo mode: files are listed in the interface but are not uploaded to
                a server.
            </p>

            {message && (
                <p
                    role="status"
                    className="mx-auto mt-5 max-w-xl rounded-xl bg-violet-50 p-3 text-sm text-violet-700"
                >
                    {message}
                </p>
            )}
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
            <div className="mb-5 flex items-center justify-between">
                <div>
                    <h3 className="font-bold text-slate-900">Your Documents</h3>

                    <p className="mt-1 text-sm text-slate-500">
                        {materials.length} document(s) in this demo
                    </p>
                </div>

                <FileText className="text-violet-600" size={22} />
            </div>

            {materials.length === 0 ? (
                <div className="rounded-xl border border-dashed border-slate-200 p-8 text-center">
                    <FileText className="mx-auto text-slate-300" size={32} />

                    <p className="mt-3 text-sm font-medium text-slate-600">
                        No documents added yet
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                        Choose PDF files to see them listed here.
                    </p>
                </div>
            ) : (
                <div className="space-y-3">
                    {materials.map((material) => (
                        <div
                            key={material.id}
                            className="flex flex-wrap items-center gap-4 rounded-xl border border-slate-100 p-4"
                        >
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                                <FileText size={23} />
                            </div>

                            <div className="min-w-0 flex-1">
                                <p className="break-words text-sm font-semibold text-slate-800">
                                    {material.name}
                                </p>

                                <p className="mt-1 text-xs text-slate-500">
                                    {material.size}
                                </p>
                            </div>

                            <span
                                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ${material.status === "Processed"
                                    ? "bg-emerald-50 text-emerald-700"
                                    : "bg-amber-50 text-amber-700"
                                    }`}
                            >
                                {material.status === "Processed" ? (
                                    <CheckCircle2 size={14} />
                                ) : (
                                    <Clock3 size={14} />
                                )}

                                {material.status}
                            </span>

                            <button
                                type="button"
                                aria-label={`Remove ${material.name}`}
                                onClick={() => removeMaterial(material.id)}
                                className="rounded-lg p-2 text-slate-400 hover:bg-rose-50 hover:text-rose-600"
                            >
                                <Trash2 size={17} />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </section>
    </AppLayout>
    );
}


