import { getUserInfo } from "@/lib/getUserInfo";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const user = getUserInfo(request);

  return NextResponse.json(user);
}