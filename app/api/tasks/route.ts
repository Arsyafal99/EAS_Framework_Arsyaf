import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET semua task
export async function GET() {
  const tasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(tasks);
}

// POST tambah task
export async function POST(request: Request) {
  const body = await request.json();

  const task = await prisma.task.create({
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