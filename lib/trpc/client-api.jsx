"use client";

import { createTRPCReact } from "@trpc/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { useState } from "react";

export const clientApi = createTRPCReact();

export function TRPCProvider({ children }) {
	const [queryClient] = useState(() => new QueryClient());

	const [trpcClient] = useState(() =>
		clientApi.createClient({
			links: [
				httpBatchLink({
					url: "/api/trpc"
				})
			]
		})
	);

	return (
		<clientApi.Provider client={trpcClient} queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</clientApi.Provider>
	);
}
