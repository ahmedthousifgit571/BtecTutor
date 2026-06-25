"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { KtuNotesRow, type KtuSubjectLite } from "./KtuNotesRow";

export function KtuNotesManager({ subjects }: { subjects: KtuSubjectLite[] }) {
  const [query, setQuery] = useState("");
  const [branch, setBranch] = useState("all");

  const branches = useMemo(
    () =>
      Array.from(new Set(subjects.map((s) => s.branch).filter(Boolean))) as string[],
    [subjects]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return subjects.filter((s) => {
      if (branch !== "all" && s.branch !== branch) return false;
      if (!q) return true;
      return (
        s.code?.toLowerCase().includes(q) ||
        s.title.toLowerCase().includes(q)
      );
    });
  }, [subjects, query, branch]);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <div className="relative flex-1 min-w-[220px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by code or subject name…"
            className="w-full rounded-lg border border-gray-300 bg-white pl-9 pr-4 py-2.5 text-sm focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
          />
        </div>
        <select
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
          className="rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm focus:border-brand-orange focus:outline-none"
        >
          <option value="all">All branches</option>
          {branches.map((b) => (
            <option key={b} value={b}>
              {b.toUpperCase()}
            </option>
          ))}
        </select>
        <span className="text-xs text-gray-500">{filtered.length} subjects</span>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50 text-xs font-semibold uppercase tracking-wide text-gray-500">
              <th className="px-3 py-2.5">Code</th>
              <th className="px-3 py-2.5">Subject</th>
              <th className="px-3 py-2.5">Branch · Sem</th>
              <th className="px-3 py-2.5">Notes</th>
              <th className="px-3 py-2.5">Question Papers</th>
              <th className="px-3 py-2.5">Syllabus</th>
              <th className="px-3 py-2.5">Course Link</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((s) => (
              <KtuNotesRow key={s.id} subject={s} />
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={7} className="px-3 py-8 text-center text-sm text-gray-400">
                  No subjects match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
