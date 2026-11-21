
import { NextRequest, NextResponse } from "next/server";

const API_URL = process.env.API_BASE_URL;

type RouteContext = {
    params: Promise<{ id: string }>;
};

// GET: Fetch individual contact message
export async function GET(
    request: NextRequest,
    { params }: RouteContext
) {
    try {
        const token = request.cookies.get("admin_token")?.value;

        if (!token) {
            return NextResponse.json(
                { success: false, message: "Unauthorized. Please login." },
                { status: 401 }
            );
        }

        if (!API_URL) {
            throw new Error("API_BASE_URL is not configured.");
        }

        const { id } = await params;

        if (!/^[1-9]\d*$/.test(id)) {
            return NextResponse.json(
                { success: false, message: "Invalid message ID." },
                { status: 400 }
            );
        }

        const response = await fetch(
            `${API_URL}/api/contact/${id}`,
            {
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
        console.error("Fetch message error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Unable to fetch contact message."
            },
            { status: 500 }
        );
    }
}

// PUT: Update contact message status
export async function PUT(
    request: NextRequest,
    { params }: RouteContext
) {
    try {
        const token = request.cookies.get("admin_token")?.value;

        if (!token) {
            return NextResponse.json(
                { success: false, message: "Unauthorized. Please login." },
                { status: 401 }
            );
        }

        if (!API_URL) {
            throw new Error("API_BASE_URL is not configured.");
        }

        const { id } = await params;

        if (!/^[1-9]\d*$/.test(id)) {
            return NextResponse.json(
                { success: false, message: "Invalid message ID." },
                { status: 400 }
            );
        }

        const body = await request.json();

        const allowedStatuses = [
            "New",
            "Read",
            "Replied",
            "Archived"
        ];

        if (
            typeof body.status !== "string" ||
            !allowedStatuses.some(
                status => status.toLowerCase() === body.status.trim().toLowerCase()
            )
        ) {
            return NextResponse.json(
                { success: false, message: "Invalid message status." },
                { status: 400 }
            );
        }

        const response = await fetch(
            `${API_URL}/api/contact/${id}/status`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    status: body.status
                }),
                cache: "no-store"
            }
        );

        const result = await response.json();

        return NextResponse.json(result, {
            status: response.status
        });

    } catch (error) {
        console.error("Update message status error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Unable to update contact message status."
            },
            { status: 500 }
        );
    }
}

// DELETE: Delete individual contact message
export async function DELETE(
    request: NextRequest,
    { params }: RouteContext
) {
    try {
        const token = request.cookies.get("admin_token")?.value;

        if (!token) {
            return NextResponse.json(
                { success: false, message: "Unauthorized. Please login." },
                { status: 401 }
            );
        }

        if (!API_URL) {
            throw new Error("API_BASE_URL is not configured.");
        }

        const { id } = await params;

        if (!/^[1-9]\d*$/.test(id)) {
            return NextResponse.json(
                { success: false, message: "Invalid message ID." },
                { status: 400 }
            );
        }

        const response = await fetch(
            `${API_URL}/api/contact/${id}`,
            {
                method: "DELETE",
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
        console.error("Delete message error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Unable to delete contact message."
            },
            { status: 500 }
        );
    }
}
