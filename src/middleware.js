import { NextResponse } from "next/server";

export const config = {
	matcher: ["/"]
};

export async function middleware(req) {
	return NextResponse.next();
}
