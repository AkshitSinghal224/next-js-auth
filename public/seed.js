// seed.js

import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function seed() {
  try {
    await prisma.category.deleteMany();

    const categories = Array.from({ length: 100 }).map(() => ({
      name: faker.music.genre(),
    }));

    await prisma.category.createMany({
      data: categories,
    });

    console.log("Categories seeded successfully");
  } catch (error) {
    console.error("Error seeding categories:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
