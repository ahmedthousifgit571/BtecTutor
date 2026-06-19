"use client";

import { useRef, useState } from "react";
import { Check, Upload, ExternalLink, Loader2 } from "lucide-react";

export interface KtuSubjectLite {
  id: string;
  code: string | null;
  title: string;
  semester: number | null;
  branch: string | null;
  scheme: string | null;
  notesUrl: string | null;
  questionPaperUrl: string | null;
  syllabusFileUrl: string | null;
}

type DocType = "notes" | "questionPaper" | "syllabus";

function DocUploadCell({
  subjectId,
  docType,
  initialUrl,
}: {
  subjectId: string;
  docType: DocType;
  initialUrl: string | null;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [url, setUrl] = useState<string | null>(initialUrl);
  const [status, setStatus] = useState<"idle" | "uploading" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.type !== "application/pdf") {
      setError("PDF only");
      setStatus("error");
      return;
    }
    setStatus("uploading");
    setError(null);
    try {
      const body = new FormData();
      body.append("file", file);
      body.append("docType", docType);
      const res = await fetch(`/api/admin/ktu-notes/${subjectId}/upload`, {
        method: "POST",
        body,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Upload failed");
      setUrl(data.url);
      setStatus("idle");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
      setStatus("error");
    } finally {
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  return (
    <div className="flex flex-col gap-1">
      <input
        ref={inputRef}
        type="file"
        accept="application/pdf"
        className="hidden"
        onChange={handleFile}
      />
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={status === "uploading"}
          className="inline-flex items-center gap-1 rounded-md border border-gray-200 px-2 py-1 text-xs font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-50"
        >
          {status === "uploading" ? (
            <Loader2 className="h-3 w-3 animate-spin" />
          ) : url ? (
            <Check className="h-3 w-3 text-green-600" />
          ) : (
            <Upload className="h-3 w-3" />
          )}
          {url ? "Replace" : "Upload"}
        </button>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-0.5 text-xs text-brand-orange hover:underline"
          >
            View <ExternalLink className="h-3 w-3" />
          </a>
        )}
      </div>
      {error && <span className="text-[11px] text-red-500">{error}</span>}
    </div>
  );
}

export function KtuNotesRow({ subject }: { subject: KtuSubjectLite }) {
  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50/60">
      <td className="px-3 py-2.5 font-mono text-xs font-semibold text-gray-900">
        {subject.code}
      </td>
      <td className="px-3 py-2.5 text-sm text-gray-700">{subject.title}</td>
      <td className="px-3 py-2.5 text-xs text-gray-500 whitespace-nowrap">
        {subject.branch?.toUpperCase()} · S{subject.semester}
      </td>
      <td className="px-3 py-2.5">
        <DocUploadCell subjectId={subject.id} docType="notes" initialUrl={subject.notesUrl} />
      </td>
      <td className="px-3 py-2.5">
        <DocUploadCell
          subjectId={subject.id}
          docType="questionPaper"
          initialUrl={subject.questionPaperUrl}
        />
      </td>
      <td className="px-3 py-2.5">
        <DocUploadCell
          subjectId={subject.id}
          docType="syllabus"
          initialUrl={subject.syllabusFileUrl}
        />
      </td>
    </tr>
  );
}
