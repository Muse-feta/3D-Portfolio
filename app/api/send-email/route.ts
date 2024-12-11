import { mailer } from "../../../helpers/mailer";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
    try {
        const body = await req.json();
        mailer(body);
        return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 });
    }
}