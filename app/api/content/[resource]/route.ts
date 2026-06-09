import { NextRequest, NextResponse } from "next/server";
import { createResource, getResource, hasDatabaseConfig, isResource } from "@/lib/content-service";

type RouteContext = {
  params: {
    resource: string;
  };
};

function canWrite(request: NextRequest) {
  const adminToken = process.env.ADMIN_API_TOKEN;
  const requestToken = request.headers.get("x-admin-token");
  return Boolean(adminToken && requestToken && adminToken === requestToken);
}

export async function GET(_request: NextRequest, { params }: RouteContext) {
  if (!isResource(params.resource)) {
    return NextResponse.json({ error: "Unknown content resource." }, { status: 404 });
  }

  const data = await getResource(params.resource);

  return NextResponse.json({
    resource: params.resource,
    databaseConfigured: hasDatabaseConfig(),
    data
  });
}

export async function POST(request: NextRequest, { params }: RouteContext) {
  if (!isResource(params.resource)) {
    return NextResponse.json({ error: "Unknown content resource." }, { status: 404 });
  }

  if (!canWrite(request)) {
    return NextResponse.json({ error: "Invalid admin token." }, { status: 401 });
  }

  try {
    const payload = await request.json();
    const data = await createResource(params.resource, payload);
    return NextResponse.json({ data }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unable to create resource." }, { status: 500 });
  }
}
