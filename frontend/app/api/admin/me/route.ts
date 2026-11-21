
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_token")?.value;

    if (!token) {
        return NextResponse.json(
            {
                success: false,
                message: "Unauthorized. Please login."
            },
            { status: 401 }
        );
    }

    try {
        const apiUrl = process.env.API_BASE_URL;

        if (!apiUrl) {
            throw new Error("API_BASE_URL is not configured.");
        }

        const response = await fetch(
            `${apiUrl}/api/admin/me`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                },
                cache: "no-store"
            }
        );

        const result = await response.json();

        return NextResponse.json(result, {
            status: response.status
        });

    } catch (error) {
        console.error("Admin verification error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Unable to verify admin session."
            },
            { status: 500 }
        );
    }
}
