
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { email, password } = await request.json();

        if (!email || !password) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Email and password are required."
                },
                { status: 400 }
            );
        }

        const apiUrl = process.env.API_BASE_URL;

        if (!apiUrl) {
            throw new Error("API_BASE_URL is not configured.");
        }

        const response = await fetch(
            `${apiUrl}/api/admin/login`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                }),
                cache: "no-store"
            }
        );

        const result = await response.json();

        if (!response.ok || !result.success) {
            return NextResponse.json(
                {
                    success: false,
                    message: result.message || "Invalid credentials."
                },
                { status: response.status }
            );
        }

        const { token, email: adminEmail, expiresAt } = result.data;

        const cookieExpiry = new Date(expiresAt);

        const cookieStore = NextResponse.json({
            success: true,
            message: "Login successful.",
            email: adminEmail
        });

        cookieStore.cookies.set("admin_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            expires: cookieExpiry,
            path: "/"
        });

        return cookieStore;

    } catch (error) {
        console.error("Admin login error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Unable to connect to authentication server."
            },
            { status: 500 }
        );
    }
}
