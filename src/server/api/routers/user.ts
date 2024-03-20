import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  addUser: publicProcedure
    .input(z.object({ username:z.string(),  email: z.string(), password: z.string()}))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.user.create({
        data: {
          username: input.username,
          email: input.email,
          password: input.password,
        },
      });
    }),
});
