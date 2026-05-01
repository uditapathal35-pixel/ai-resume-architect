import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  if (!id) {
    return NextResponse.json({ error: "No ID" }, { status: 400 });
  }

  // For now just simulate delete
  console.log("Deleting resume:", id);

  return NextResponse.json({
    message: `Resume ${id} deleted successfully`
  });
}