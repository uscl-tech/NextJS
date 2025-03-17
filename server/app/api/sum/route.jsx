import { NextResponse } from "next/server";
import add from "../math/sum";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const a = searchParams.get("a");

    if (!a || isNaN(a)) {
        return NextResponse.json({ error: "Invalid number" }, { status: 400 });
    }

    const ans = add(parseInt(a));

    return NextResponse.json({
        Number: a,
        Sum: ans,
    });
}
