
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        setError("");
        setLoading(true);

        try {
            const response = await fetch("/api/admin/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            const result = await response.json();

            if (!response.ok || !result.success) {
                setError(result.message || "Login failed.");
                return;
            }

            router.push("/admin/dashboard");
            router.refresh();

        } catch {
            setError("Unable to connect. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#080d16] flex items-center justify-center px-5 py-10">

            <div className="w-full max-w-md">

                {/* Header */}
                <div className="text-center mb-9">

                    <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
                        <span className="text-3xl text-cyan-400">
                            A
                        </span>
                    </div>

                    <h1 className="text-3xl font-bold text-white">
                        Admin Portal
                    </h1>

                    <p className="text-gray-400 mt-2 text-sm">
                        Sign in to manage your portfolio
                    </p>

                </div>

                {/* Login Card */}
                <div className="bg-[#111827] border border-white/10 rounded-2xl p-7 sm:p-9 shadow-2xl">

                    <div className="mb-7">
                        <h2 className="text-xl font-semibold text-white">
                            Welcome Back
                        </h2>

                        <p className="text-sm text-gray-400 mt-1">
                            Enter your administrator credentials.
                        </p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-5">

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm text-gray-300 mb-2"
                            >
                                Email Address
                            </label>

                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter admin email"
                                required
                                autoComplete="username"
                                className="w-full bg-[#0b1220] border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-400 transition-colors"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm text-gray-300 mb-2"
                            >
                                Password
                            </label>

                            <div className="relative">

                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    required
                                    autoComplete="current-password"
                                    className="w-full bg-[#0b1220] border border-gray-700 rounded-lg px-4 py-3 pr-20 text-white outline-none focus:border-cyan-400 transition-colors"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-cyan-400 hover:text-cyan-300"
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>

                            </div>
                        </div>

                        {/* Error */}
                        {error && (
                            <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-lg p-3">
                                {error}
                            </div>
                        )}

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed text-[#08111c] font-semibold py-3 rounded-lg transition-all"
                        >
                            {loading ? "Signing in..." : "Sign In"}
                        </button>

                    </form>

                </div>

  <p className="text-center text-gray-600 text-xs mt-7">
    © 2026 MD Anas Alam. All rights reserved.
</p>
            </div>

        </main>
    );
}
