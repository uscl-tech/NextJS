import { NextResponse } from "next/server";
import fact from "../math/fact";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const n = searchParams.get("n");

    if (!n || isNaN(n)) {
        return NextResponse.json({ error: "Invalid number" }, { status: 400 });
    }

    const result = fact(parseInt(n));

    return NextResponse.json({
        Number: n,
        Factorial: result,
    });
}
