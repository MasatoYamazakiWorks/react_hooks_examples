import { GetRouter, PostRouter } from "~/server/router";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { NextResponse } from "next/server";

const createHandler = (router) => {
	return async (req) => {
		const response = await fetchRequestHandler({
			method: req.method,
			endpoint: "/api/trpc",
			req,
			router: router
		});

		const nextResponse = new NextResponse(response.body, {
			status: response.status,
			headers: response.headers
		});

		return nextResponse;
	};
};

export const GET = createHandler(GetRouter);
export const POST = createHandler(PostRouter);
