
import { NextRequest, NextResponse } from "next/server";

const API_URL = process.env.API_BASE_URL;

export async function GET(request: NextRequest) {
    const token = request.cookies.get("admin_token")?.value;

    if (!token) {
        return NextResponse.json(
            { success: false, message: "Unauthorized." },
            { status: 401 }
        );
    }

    try {
        if (!API_URL) {
            throw new Error("API_BASE_URL is missing.");
        }

        const response = await fetch(`${API_URL}/api/contact`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            },
            cache: "no-store"
        });

        const data = await response.json();

        return NextResponse.json(data, {
            status: response.status
        });

    } catch (error) {
        console.error("Fetch messages error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Unable to fetch messages."
            },
            { status: 500 }
        );
    }
}
