"use client";

import { Check, Database, Plus, RefreshCw, Save, Trash2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { ContentResource } from "@/lib/content-types";

type ResourceEditorProps = {
  resource: ContentResource;
  token: string;
};

type ApiResponse = {
  databaseConfigured: boolean;
  data: Array<Record<string, unknown>>;
  error?: string;
};

export function ResourceEditor({ resource, token }: ResourceEditorProps) {
  const [items, setItems] = useState<Array<Record<string, unknown>>>([]);
  const [selectedId, setSelectedId] = useState("");
  const [jsonValue, setJsonValue] = useState("{}");
  const [message, setMessage] = useState("Ready");
  const [databaseConfigured, setDatabaseConfigured] = useState(false);

  const selectedItem = useMemo(() => items.find((item) => String(item.id ?? "") === selectedId), [items, selectedId]);

  useEffect(() => {
    void loadItems();
  }, [resource]);

  useEffect(() => {
    if (selectedItem) {
      setJsonValue(JSON.stringify(selectedItem, null, 2));
    }
  }, [selectedItem]);

  async function loadItems() {
    setMessage("Loading");
    const response = await fetch(`/api/content/${resource}`);
    const result = (await response.json()) as ApiResponse;
    setDatabaseConfigured(Boolean(result.databaseConfigured));
    setItems(result.data ?? []);
    setSelectedId(String(result.data?.[0]?.id ?? ""));
    setJsonValue(JSON.stringify(result.data?.[0] ?? {}, null, 2));
    setMessage(result.databaseConfigured ? "Connected to Supabase" : "Using fallback data until Supabase env is configured");
  }

  async function writeItem(method: "POST" | "PATCH") {
    try {
      const parsed = JSON.parse(jsonValue) as Record<string, unknown>;
      const id = String(parsed.id ?? selectedId);
      const target = method === "PATCH" ? `/api/content/${resource}/${id}` : `/api/content/${resource}`;
      const response = await fetch(target, {
        method,
        headers: {
          "Content-Type": "application/json",
          "x-admin-token": token
        },
        body: JSON.stringify(parsed)
      });
      const result = await response.json();
      setMessage(response.ok ? "Saved" : result.error ?? "Save failed");
      if (response.ok) {
        await loadItems();
      }
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Invalid JSON");
    }
  }

  async function deleteItem() {
    const id = selectedId;

    if (!id) {
      setMessage("Select an item with an id before deleting");
      return;
    }

    const response = await fetch(`/api/content/${resource}/${id}`, {
      method: "DELETE",
      headers: {
        "x-admin-token": token
      }
    });
    const result = await response.json();
    setMessage(response.ok ? "Deleted" : result.error ?? "Delete failed");
    if (response.ok) {
      await loadItems();
    }
  }

  return (
    <section className="rounded-[8px] border border-border bg-card p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="font-heading text-xl font-semibold text-foreground">{resource.replace("_", " ")}</h2>
          <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
            {databaseConfigured ? <Check aria-hidden="true" size={16} /> : <Database aria-hidden="true" size={16} />}
            {message}
          </p>
        </div>
        <button type="button" onClick={loadItems} className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold" aria-label={`Refresh ${resource}`}>
          <RefreshCw aria-hidden="true" size={16} />
          Refresh
        </button>
      </div>
      <div className="mt-5 grid gap-4 lg:grid-cols-[240px_1fr]">
        <aside className="space-y-2">
          {items.map((item, index) => {
            const id = String(item.id ?? "");
            const label = String(item.title ?? item.name ?? item.role ?? item.question ?? `${resource} ${index + 1}`);
            return (
              <button
                key={`${label}-${index}`}
                type="button"
                onClick={() => setSelectedId(id)}
                className="w-full rounded-[8px] border border-border px-3 py-2 text-left text-sm text-muted-foreground hover:border-primary hover:text-foreground"
                aria-label={`Select ${label}`}
              >
                {label}
              </button>
            );
          })}
        </aside>
        <div>
          <textarea
            value={jsonValue}
            onChange={(event) => setJsonValue(event.target.value)}
            className="min-h-[360px] w-full rounded-[8px] border border-border bg-background p-4 font-mono text-sm text-foreground outline-none focus:border-primary"
            aria-label={`${resource} JSON editor`}
          />
          <div className="mt-4 flex flex-wrap gap-3">
            <button type="button" onClick={() => writeItem("POST")} className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground" aria-label={`Create ${resource}`}>
              <Plus aria-hidden="true" size={16} />
              Create
            </button>
            <button type="button" onClick={() => writeItem("PATCH")} className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold" aria-label={`Update ${resource}`}>
              <Save aria-hidden="true" size={16} />
              Update
            </button>
            <button type="button" onClick={deleteItem} className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-accent" aria-label={`Delete ${resource}`}>
              <Trash2 aria-hidden="true" size={16} />
              Delete
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
