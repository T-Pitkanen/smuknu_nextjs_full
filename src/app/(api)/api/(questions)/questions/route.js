import { getQuestions } from "@/lib/data.service";
import { NextResponse } from "next/server"

export async function GET() {

    let reviews = await getQuestions();
    return NextResponse.json(reviews);

}
