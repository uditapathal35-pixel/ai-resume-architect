import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "No ID provided" }, { status: 400 });
  }

  // Fake PDF content (for now)
  const pdfContent = `Resume PDF for ID: ${id}`;

  return new Response(pdfContent, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="resume-${id}.pdf"`
    }
  });
}