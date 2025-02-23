import { router } from "~/lib/trpc/trpc";
import { publicProcedure } from "../middleware";

export const GetRouter = router({
	hello: publicProcedure.query(() => ({ msg: "Hello World GET" }))
});

export const PostRouter = router({
	hello: publicProcedure.mutation(() => ({ msg: "Hello World POST" }))
});
