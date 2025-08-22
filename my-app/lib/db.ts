// lib/db.ts
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["error", "warn"], // you can add "query" if you want debugging
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}
