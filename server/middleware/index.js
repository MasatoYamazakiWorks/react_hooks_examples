import { t } from "~/lib/trpc/trpc";

export const publicProcedure = t.procedure.use(async ({ path, next, ctx }) => {
	return next({ ctx });
});
