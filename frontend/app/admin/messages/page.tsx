
"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
    ArrowLeft,
    Search,
    RefreshCw,
    MessageSquare,
    Mail,
    Trash2,
    Eye,
    X,
    Clock,
    CheckCircle,
    Archive,
    Inbox
} from "lucide-react";

interface ContactMessage {
    id: number;
    name: string;
    email: string;
    subject: string;
    message: string;
    status: string;
    createdAt: string;
    repliedAt?: string | null;
}

type FilterStatus = "All" | "New" | "Read" | "Replied" | "Archived";

export default function AdminMessagesPage() {
    const router = useRouter();

    const [messages, setMessages] = useState<ContactMessage[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState<FilterStatus>("All");
    const [selectedMessage, setSelectedMessage] =
        useState<ContactMessage | null>(null);
    const [deleting, setDeleting] = useState<number | null>(null);
    const [updating, setUpdating] = useState(false);
    const [error, setError] = useState("");

    const fetchMessages = async () => {
        try {
            setLoading(true);
            setError("");

            const response = await fetch("/api/admin/messages", {
                method: "GET",
                cache: "no-store"
            });

            if (response.status === 401) {
                router.replace("/admin/login");
                return;
            }

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(result.message || "Failed to fetch messages.");
            }

            setMessages(result.data || []);

        } catch (err) {
            console.error("Messages fetch error:", err);
            setError(
                err instanceof Error
                    ? err.message
                    : "Unable to load messages."
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMessages();
    }, []);

    const filteredMessages = useMemo(() => {
        return messages.filter((item) => {
            const matchesStatus =
                filter === "All" || item.status === filter;

            const searchText = search.toLowerCase();

            const matchesSearch =
                item.name.toLowerCase().includes(searchText) ||
                item.email.toLowerCase().includes(searchText) ||
                item.subject.toLowerCase().includes(searchText);

            return matchesStatus && matchesSearch;
        });
    }, [messages, filter, search]);

    const updateStatus = async (id: number, status: string) => {
        try {
            setUpdating(true);

            const response = await fetch(`/api/admin/messages/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ status })
            });

            const result = await response.json();

            if (response.status === 401) {
                router.replace("/admin/login");
                return;
            }

            if (!response.ok || !result.success) {
                throw new Error(result.message || "Status update failed.");
            }

            await fetchMessages();

            setSelectedMessage((previous) =>
                previous?.id === id
                    ? { ...previous, status, repliedAt: status === "Replied" ? new Date().toISOString() : null }
                    : previous
            );

        } catch (err) {
            alert(
                err instanceof Error
                    ? err.message
                    : "Unable to update status."
            );
        } finally {
            setUpdating(false);
        }
    };

    const deleteMessage = async (id: number) => {
        const confirmed = window.confirm(
            "Are you sure you want to permanently delete this message?"
        );

        if (!confirmed) return;

        try {
            setDeleting(id);

            const response = await fetch(`/api/admin/messages/${id}`, {
                method: "DELETE"
            });

            const result = await response.json();

            if (response.status === 401) {
                router.replace("/admin/login");
                return;
            }

            if (!response.ok || !result.success) {
                throw new Error(result.message || "Delete failed.");
            }

            setMessages((previous) =>
                previous.filter((item) => item.id !== id)
            );

            if (selectedMessage?.id === id) {
                setSelectedMessage(null);
            }

        } catch (err) {
            alert(
                err instanceof Error
                    ? err.message
                    : "Unable to delete message."
            );
        } finally {
            setDeleting(null);
        }
    };

const replyViaEmail = (message: ContactMessage) => {
    const subject = `Re: ${message.subject}`;

    const mailtoUrl =
        `mailto:${message.email}?subject=${encodeURIComponent(subject)}`;

    window.location.href = mailtoUrl;
};


    const counts = {
        All: messages.length,
        New: messages.filter(m => m.status === "New").length,
        Read: messages.filter(m => m.status === "Read").length,
        Replied: messages.filter(m => m.status === "Replied").length,
        Archived: messages.filter(m => m.status === "Archived").length
    };

    const statusColor = (status: string) => {
        switch (status) {
            case "New":
                return "bg-blue-500/10 text-blue-400 border-blue-500/20";
            case "Read":
                return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
            case "Replied":
                return "bg-green-500/10 text-green-400 border-green-500/20";
            case "Archived":
                return "bg-slate-500/10 text-slate-400 border-slate-500/20";
            default:
                return "bg-slate-500/10 text-slate-400";
        }
    };

    const filters: FilterStatus[] = [
        "All", "New", "Read", "Replied", "Archived"
    ];

    return (
        <main className="min-h-screen bg-slate-950 text-white">

            {/* Header */}
            <header className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 px-6 py-5 md:px-8">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => router.push("/admin/dashboard")}
                        className="rounded-lg border border-slate-700 p-2 hover:bg-slate-800"
                    >
                        <ArrowLeft size={19} />
                    </button>

                    <div>
                        <h1 className="text-xl font-bold">
                            Contact Messages
                        </h1>
                        <p className="text-sm text-slate-400">
                            Manage visitor inquiries
                        </p>
                    </div>
                </div>

                <button
                    onClick={fetchMessages}
                    disabled={loading}
                    className="flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm hover:bg-slate-800 disabled:opacity-50"
                >
                    <RefreshCw size={16} />
                    Refresh
                </button>
            </header>

            <section className="p-6 md:p-8">

                {/* Statistics */}
                <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">

                    {filters.map((item) => (
                        <button
                            key={item}
                            onClick={() => setFilter(item)}
                            className={`rounded-xl border p-5 text-left transition ${
                                filter === item
                                    ? "border-blue-500 bg-blue-500/10"
                                    : "border-slate-800 bg-slate-900 hover:border-slate-600"
                            }`}
                        >
                            <p className="text-sm text-slate-400">
                                {item === "All" ? "Total Messages" : item}
                            </p>

                            <p className="mt-2 text-3xl font-bold">
                                {counts[item]}
                            </p>
                        </button>
                    ))}

                </div>

                {/* Search */}
                <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                    <h2 className="text-xl font-semibold">
                        Inbox
                    </h2>

                    <div className="relative w-full md:max-w-sm">
                        <Search
                            size={18}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                        />

                        <input
                            type="text"
                            placeholder="Search name, email or subject..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full rounded-lg border border-slate-700 bg-slate-900 py-3 pl-10 pr-4 text-sm outline-none focus:border-blue-500"
                        />
                    </div>
                </div>

                {/* Error */}
                {error && (
                    <div className="mt-6 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">
                        {error}
                    </div>
                )}

                {/* Messages Table */}
                <div className="mt-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-900">

                    <table className="w-full min-w-[850px] text-left">

                        <thead className="border-b border-slate-800 bg-slate-800/50">
                            <tr className="text-sm text-slate-400">
                                <th className="px-6 py-4">Name</th>
                                <th className="px-6 py-4">Subject</th>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Actions</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-slate-800">

                            {loading ? (
                                <tr>
                                    <td colSpan={5} className="py-12 text-center text-slate-400">
                                        Loading messages...
                                    </td>
                                </tr>
                            ) : filteredMessages.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="py-16 text-center">
                                        <Inbox size={35} className="mx-auto mb-3 text-slate-600" />
                                        <p className="text-slate-400">
                                            No messages found.
                                        </p>
                                    </td>
                                </tr>
                            ) : (
                                filteredMessages.map((item) => (
                                    <tr
                                        key={item.id}
                                        className="transition hover:bg-slate-800/50"
                                    >
                                        <td className="px-6 py-5">
                                            <p className="font-medium">
                                                {item.name}
                                            </p>
                                            <p className="mt-1 text-xs text-slate-500">
                                                {item.email}
                                            </p>
                                        </td>

                                        <td className="max-w-[250px] truncate px-6 py-5 text-sm text-slate-300">
                                            {item.subject}
                                        </td>

                                        <td className="px-6 py-5 text-sm text-slate-400">
                                            {new Date(item.createdAt).toLocaleDateString("en-IN")}
                                        </td>

                                        <td className="px-6 py-5">
                                            <span className={`rounded-full border px-3 py-1 text-xs ${statusColor(item.status)}`}>
                                                {item.status}
                                            </span>
                                        </td>

                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-3">
                                                <button
                                                    title="View message"
                                                    onClick={() => setSelectedMessage(item)}
                                                    className="text-blue-400 hover:text-blue-300"
                                                >
                                                    <Eye size={18} />
                                                </button>

                                                <button
                                                    title="Delete message"
                                                    disabled={deleting === item.id}
                                                    onClick={() => deleteMessage(item.id)}
                                                    className="text-red-400 hover:text-red-300 disabled:opacity-50"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}

                        </tbody>
                    </table>
                </div>

                <p className="mt-4 text-sm text-slate-500">
                    Showing {filteredMessages.length} of {messages.length} messages
                </p>

            </section>

            {/* Message Details Modal */}
            {selectedMessage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">

                    <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-2xl">

                        <div className="flex items-center justify-between border-b border-slate-800 pb-5">
                            <div>
                                <h2 className="text-xl font-bold">
                                    Message Details
                                </h2>
                                <p className="mt-1 text-sm text-slate-400">
                                    Message ID: #{selectedMessage.id}
                                </p>
                            </div>

                            <button
                                onClick={() => setSelectedMessage(null)}
                                className="rounded-lg p-2 hover:bg-slate-800"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="mt-6 space-y-5">

                            <div>
                                <p className="text-xs text-slate-500">SENDER</p>
                                <p className="mt-1 font-semibold">
                                    {selectedMessage.name}
                                </p>
                            </div>

                            <div>
                                <p className="text-xs text-slate-500">EMAIL</p>
                                <a
                                    href={`mailto:${selectedMessage.email}`}
                                    className="mt-1 flex items-center gap-2 text-blue-400 hover:underline"
                                >
                                    <Mail size={16} />
                                    {selectedMessage.email}
                                </a>
                            </div>

                            <div>
                                <p className="text-xs text-slate-500">SUBJECT</p>
                                <p className="mt-1 font-medium">
                                    {selectedMessage.subject}
                                </p>
                            </div>

                            <div>
                                <p className="text-xs text-slate-500">MESSAGE</p>
                                <div className="mt-2 whitespace-pre-wrap rounded-lg border border-slate-700 bg-slate-950 p-4 text-sm leading-7 text-slate-300">
                                    {selectedMessage.message}
                                </div>
                            </div>

                            <div>
                                <p className="mb-2 text-xs text-slate-500">
                                    UPDATE STATUS
                                </p>

                                <select
                                    value={selectedMessage.status}
                                    disabled={updating}
                                    onChange={(e) =>
                                        updateStatus(
                                            selectedMessage.id,
                                            e.target.value
                                        )
                                    }
                                    className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3 text-sm outline-none focus:border-blue-500 disabled:opacity-50"
                                >
                                    <option value="New">New</option>
                                    <option value="Read">Read</option>
                                    <option value="Replied">Replied</option>
                                    <option value="Archived">Archived</option>
                                </select>
                            </div>

                            <div className="flex flex-wrap gap-3 border-t border-slate-800 pt-5">

                                <button
                                    onClick={() => setSelectedMessage(null)}
                                    className="rounded-lg border border-slate-700 px-5 py-2.5 text-sm hover:bg-slate-800"
                                >
                                    Close
                                </button>
                                <button
    onClick={() => replyViaEmail(selectedMessage)}
    className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm hover:bg-blue-700"
>
    <Mail size={16} />
    Reply via Email
</button>

                                <button
                                    onClick={() => deleteMessage(selectedMessage.id)}
                                    disabled={deleting === selectedMessage.id}
                                    className="flex items-center gap-2 rounded-lg bg-red-600 px-5 py-2.5 text-sm hover:bg-red-700 disabled:opacity-50"
                                >
                                    <Trash2 size={16} />
                                    Delete
                                </button>

                            </div>

                        </div>
                    </div>
                </div>
            )}

        </main>
    );
}
