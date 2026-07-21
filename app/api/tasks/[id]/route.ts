import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface Params {
  params: Promise<{
    id: string;
  }>;
}

// UPDATE Task
export async function PUT(
  request: Request,
  { params }: Params
) {
  const { id } = await params;
  const body = await request.json();

  const task = await prisma.task.update({
    where: {
      id: Number(id),
    },
    data: {
      title: body.title,
      description: body.description,
      status: body.status,
      deadline: body.deadline
        ? new Date(body.deadline)
        : null,
    },
  });

  return NextResponse.json(task);
}

// DELETE Task
export async function DELETE(
  request: Request,
  { params }: Params
) {
  const { id } = await params;

  await prisma.task.delete({
    where: {
      id: Number(id),
    },
  });

  return NextResponse.json({
    message: "Task berhasil dihapus",
  });
}