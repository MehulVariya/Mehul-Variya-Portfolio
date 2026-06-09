import { NextRequest, NextResponse } from "next/server";
import { deleteResource, isResource, updateResource } from "@/lib/content-service";

type RouteContext = {
  params: {
    resource: string;
    id: string;
  };
};

function canWrite(request: NextRequest) {
  const adminToken = process.env.ADMIN_API_TOKEN;
  const requestToken = request.headers.get("x-admin-token");
  return Boolean(adminToken && requestToken && adminToken === requestToken);
}

export async function PATCH(request: NextRequest, { params }: RouteContext) {
  if (!isResource(params.resource)) {
    return NextResponse.json({ error: "Unknown content resource." }, { status: 404 });
  }

  if (!canWrite(request)) {
    return NextResponse.json({ error: "Invalid admin token." }, { status: 401 });
  }

  try {
    const payload = await request.json();
    const data = await updateResource(params.resource, params.id, payload);
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unable to update resource." }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: RouteContext) {
  if (!isResource(params.resource)) {
    return NextResponse.json({ error: "Unknown content resource." }, { status: 404 });
  }

  if (!canWrite(request)) {
    return NextResponse.json({ error: "Invalid admin token." }, { status: 401 });
  }

  try {
    await deleteResource(params.resource, params.id);
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unable to delete resource." }, { status: 500 });
  }
}
