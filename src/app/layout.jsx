import { TRPCProvider } from "~/lib/trpc/client-api";
import { Provider } from "@/components/ui/Provider";
import { Box, Container, Flex } from "@chakra-ui/react";

import { Menu } from "@/components/Menu";

export default function RootLayout({ children }) {
	return (
		<TRPCProvider>
			<html lang="ja" suppressHydrationWarning>
				<head>
					<meta charSet="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<title>React Hooks Examples</title>
				</head>
				<body>
					<Provider>
						<Flex>
							<Box h="100vh" w="20%" p={2} style={{ overflowY: "auto" }}>
								<Menu />
							</Box>
							<Box h="100vh" style={{ flex: 1, overflowY: "auto" }}>
								<Container mt={6}>{children}</Container>
							</Box>
						</Flex>
					</Provider>
				</body>
			</html>
		</TRPCProvider>
	);
}
