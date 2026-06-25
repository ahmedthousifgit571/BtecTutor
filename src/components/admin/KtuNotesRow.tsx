"use client";

import { useRef, useState } from "react";
import { Check, Upload, ExternalLink, Loader2, Trash2, Plus, Link2, X } from "lucide-react";
import type { NotesFile } from "@/lib/ktu-types";

export interface KtuSubjectLite {
  id: string;
  code: string | null;
  title: string;
  semester: number | null;
  branch: string | null;
  scheme: string | null;
  notesFiles: NotesFile[];
  questionPaperUrl: string | null;
  syllabusFileUrl: string | null;
  courseLink: string | null;
}

function CourseLinkCell({
  subjectId,
  initialUrl,
}: {
  subjectId: string;
  initialUrl: string | null;
}) {
  const [url, setUrl] = useState<string | null>(initialUrl);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(initialUrl || "");
  const [status, setStatus] = useState<"idle" | "saving">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSave() {
    setStatus("saving");
    setError(null);
    try {
      const res = await fetch(`/api/admin/ktu-notes/${subjectId}/course-link`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: draft }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Save failed");
      setUrl(data.courseLink);
      setEditing(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Save failed");
    } finally {
      setStatus("idle");
    }
  }

  async function handleClear() {
    setDraft("");
    setStatus("saving");
    setError(null);
    try {
      const res = await fetch(`/api/admin/ktu-notes/${subjectId}/course-link`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: "" }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Clear failed");
      setUrl(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Clear failed");
    } finally {
      setStatus("idle");
    }
  }

  if (editing) {
    return (
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <input
            autoFocus
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="https://…"
            className="w-40 rounded-md border border-gray-200 px-2 py-1 text-xs focus:border-brand-orange focus:outline-none"
          />
          <button
            type="button"
            onClick={handleSave}
            disabled={status === "saving"}
            title="Save"
            className="inline-flex items-center text-gray-400 hover:text-green-600 disabled:opacity-50"
          >
            {status === "saving" ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <Check className="h-3.5 w-3.5" />
            )}
          </button>
          <button
            type="button"
            onClick={() => {
              setEditing(false);
              setDraft(url || "");
              setError(null);
            }}
            title="Cancel"
            className="inline-flex items-center text-gray-400 hover:text-red-500"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
        {error && <span className="text-[11px] text-red-500">{error}</span>}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setEditing(true)}
          className="inline-flex items-center gap-1 rounded-md border border-gray-200 px-2 py-1 text-xs font-medium text-gray-600 hover:bg-gray-50"
        >
          {url ? <Check className="h-3 w-3 text-green-600" /> : <Link2 className="h-3 w-3" />}
          {url ? "Edit" : "Add link"}
        </button>
        {url && (
          <>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 text-xs text-brand-orange hover:underline"
            >
              View <ExternalLink className="h-3 w-3" />
            </a>
            <button
              type="button"
              onClick={handleClear}
              disabled={status === "saving"}
              title="Remove"
              className="inline-flex items-center text-gray-400 hover:text-red-500 disabled:opacity-50"
            >
              {status === "saving" ? (
                <Loader2 className="h-3 w-3 animate-spin" />
              ) : (
                <Trash2 className="h-3 w-3" />
              )}
            </button>
          </>
        )}
      </div>
      {error && <span className="text-[11px] text-red-500">{error}</span>}
    </div>
  );
}

type SingleDocType = "questionPaper" | "syllabus";

function SingleDocCell({
  subjectId,
  docType,
  initialUrl,
}: {
  subjectId: string;
  docType: SingleDocType;
  initialUrl: string | null;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [url, setUrl] = useState<string | null>(initialUrl);
  const [status, setStatus] = useState<"idle" | "uploading" | "deleting" | "error">("idle");
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

  async function handleDelete() {
    setStatus("deleting");
    setError(null);
    try {
      const res = await fetch(`/api/admin/ktu-notes/${subjectId}/upload`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ docType }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Delete failed");
      setUrl(null);
      setStatus("idle");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Delete failed");
      setStatus("error");
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
          disabled={status === "uploading" || status === "deleting"}
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
          <>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 text-xs text-brand-orange hover:underline"
            >
              View <ExternalLink className="h-3 w-3" />
            </a>
            <button
              type="button"
              onClick={handleDelete}
              disabled={status === "deleting"}
              title="Delete"
              className="inline-flex items-center text-gray-400 hover:text-red-500 disabled:opacity-50"
            >
              {status === "deleting" ? (
                <Loader2 className="h-3 w-3 animate-spin" />
              ) : (
                <Trash2 className="h-3 w-3" />
              )}
            </button>
          </>
        )}
      </div>
      {error && <span className="text-[11px] text-red-500">{error}</span>}
    </div>
  );
}

function NotesCell({
  subjectId,
  initialFiles,
}: {
  subjectId: string;
  initialFiles: NotesFile[];
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<NotesFile[]>(initialFiles);
  const [status, setStatus] = useState<"idle" | "uploading">("idle");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.type !== "application/pdf") {
      setError("PDF only");
      return;
    }
    setStatus("uploading");
    setError(null);
    try {
      const body = new FormData();
      body.append("file", file);
      body.append("docType", "notes");
      const res = await fetch(`/api/admin/ktu-notes/${subjectId}/upload`, {
        method: "POST",
        body,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Upload failed");
      setFiles(data.notesFiles);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setStatus("idle");
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  async function handleDelete(fileId: string) {
    setDeletingId(fileId);
    setError(null);
    try {
      const res = await fetch(`/api/admin/ktu-notes/${subjectId}/upload`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ docType: "notes", fileId }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Delete failed");
      setFiles(data.notesFiles);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Delete failed");
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div className="flex flex-col gap-1.5">
      <input
        ref={inputRef}
        type="file"
        accept="application/pdf"
        className="hidden"
        onChange={handleFile}
      />
      {files.map((f) => (
        <div key={f.id} className="flex items-center gap-2">
          <a
            href={f.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex max-w-[140px] items-center gap-0.5 truncate text-xs text-brand-orange hover:underline"
            title={f.name}
          >
            {f.name} <ExternalLink className="h-3 w-3 shrink-0" />
          </a>
          <button
            type="button"
            onClick={() => handleDelete(f.id)}
            disabled={deletingId === f.id}
            title="Delete"
            className="inline-flex items-center text-gray-400 hover:text-red-500 disabled:opacity-50"
          >
            {deletingId === f.id ? (
              <Loader2 className="h-3 w-3 animate-spin" />
            ) : (
              <Trash2 className="h-3 w-3" />
            )}
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        disabled={status === "uploading"}
        className="inline-flex items-center gap-1 rounded-md border border-gray-200 px-2 py-1 text-xs font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-50 w-fit"
      >
        {status === "uploading" ? (
          <Loader2 className="h-3 w-3 animate-spin" />
        ) : (
          <Plus className="h-3 w-3" />
        )}
        Add
      </button>
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
        <NotesCell subjectId={subject.id} initialFiles={subject.notesFiles} />
      </td>
      <td className="px-3 py-2.5">
        <SingleDocCell
          subjectId={subject.id}
          docType="questionPaper"
          initialUrl={subject.questionPaperUrl}
        />
      </td>
      <td className="px-3 py-2.5">
        <SingleDocCell
          subjectId={subject.id}
          docType="syllabus"
          initialUrl={subject.syllabusFileUrl}
        />
      </td>
      <td className="px-3 py-2.5">
        <CourseLinkCell subjectId={subject.id} initialUrl={subject.courseLink} />
      </td>
    </tr>
  );
}
