
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
    LogOut,
    LayoutDashboard,
    MessageSquare,
    ArrowRight
} from "lucide-react";

export default function AdminDashboard() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(true);
    const [loggingOut, setLoggingOut] = useState(false);

    useEffect(() => {
        let active = true;

        const verifyAdmin = async () => {
            try {
                const response = await fetch("/api/admin/me", {
                    method: "GET",
                    cache: "no-store"
                });

                if (!response.ok) {
                    router.replace("/admin/login");
                    return;
                }

                const result = await response.json();

                if (!result.success || !result.data?.email) {
                    router.replace("/admin/login");
                    return;
                }

                if (active) {
                    setEmail(result.data.email);
                    setLoading(false);
                }

            } catch (error) {
                console.error("Admin verification failed:", error);
                router.replace("/admin/login");
            }
        };

        verifyAdmin();

        return () => {
            active = false;
        };
    }, [router]);

    const logout = async () => {
        try {
            setLoggingOut(true);

            await fetch("/api/admin/logout", {
                method: "POST"
            });

            router.replace("/admin/login");
            router.refresh();

        } catch (error) {
            console.error("Logout failed:", error);
            setLoggingOut(false);
        }
    };

    if (loading) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
                <p className="text-slate-400">
                    Verifying admin session...
                </p>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-slate-950 text-white">

            <header className="flex items-center justify-between border-b border-slate-800 px-8 py-5">
                <div>
                    <h1 className="text-xl font-bold">
                        Anas Portfolio Admin
                    </h1>

                    <p className="text-sm text-slate-400">
                        Administration Panel
                    </p>
                </div>

                <button
                    onClick={logout}
                    disabled={loggingOut}
                    className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 hover:bg-red-700 disabled:opacity-50"
                >
                    <LogOut size={17} />
                    {loggingOut ? "Logging out..." : "Logout"}
                </button>
            </header>

            <section className="p-8">

                <h2 className="text-3xl font-bold">
                    Dashboard
                </h2>

                <p className="mt-2 text-slate-400">
                    Welcome back, {email}
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-3">

                    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
                        <LayoutDashboard className="mb-4 text-blue-400" />

                        <h3 className="text-lg font-semibold">
                            Overview
                        </h3>

                        <p className="mt-2 text-sm text-slate-400">
                            Portfolio administration overview.
                        </p>
                    </div>

                    <button
                        onClick={() => router.push("/admin/messages")}
                        className="group rounded-xl border border-slate-800 bg-slate-900 p-6 text-left transition hover:border-green-500/50 hover:bg-slate-800"
                    >
                        <MessageSquare className="mb-4 text-green-400" />

                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold">
                                Contact Messages
                            </h3>

                            <ArrowRight
                                size={18}
                                className="text-slate-500 transition group-hover:translate-x-1 group-hover:text-green-400"
                            />
                        </div>

                        <p className="mt-2 text-sm text-slate-400">
                            View and manage messages received from visitors.
                        </p>
                    </button>

                </div>
            </section>
        </main>
    );
}
