import { PrismaClient, Developer } from "@prisma/client";
import { randomUUID } from "crypto";
const prisma = new PrismaClient();
async function main() {
  const developerId = randomUUID();
  const developerId2 = randomUUID();
  const publisherId = randomUUID();
  const publisherId2 = randomUUID();
  const publisherId3 = randomUUID();

  await prisma.developer.createMany({
    data: [
      {
        id: developerId,
        name: "Naughty Dog",
        founded: new Date("1984-09-30"),
        country: "United States",
      },
      {
        id: developerId2,
        name: "CD Projekt Red",
        founded: new Date("2002-05-01"),
        country: "Poland",
      },
    ],
  });

  await prisma.publisher.createMany({
    data: [
      {
        id: publisherId,
        name: "Sony Interactive Entertainment",
        founded: new Date("1993-11-16"),
        country: "Japan",
      },
      {
        id: publisherId2,
        name: "Bandai Namco Entertainment",
        founded: new Date("2005-03-31"),
        country: "Japan",
      },
      {
        id: publisherId3,
        name: "CD Projekt Red",
        founded: new Date("2002-05-01"),
        country: "Poland",
      },
    ],
  });

  await prisma.game.create({
    data: {
      title: "Cyberpunk 2077",
      releaseDate: new Date("2020-12-10"),
      synopsis:
        "In Night City, you play as V, a mercenary with cybernetic enhancements...",
      developer: {
        connect: {
          id: developerId2,
        },
      },
      publisher: {
        connect: {
          id: publisherId3,
        },
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
