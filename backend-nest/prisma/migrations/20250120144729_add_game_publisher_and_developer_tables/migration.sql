/*
  Warnings:

  - You are about to drop the column `publisher` on the `Game` table. All the data in the column will be lost.
  - Added the required column `developerId` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `publisherId` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gameId` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Game" DROP COLUMN "publisher",
ADD COLUMN     "developerId" TEXT NOT NULL,
ADD COLUMN     "publisherId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "gameId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Developer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "founded" TIMESTAMP(3) NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "Developer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Publisher" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "founded" TIMESTAMP(3) NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "Publisher_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_developerId_fkey" FOREIGN KEY ("developerId") REFERENCES "Developer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_publisherId_fkey" FOREIGN KEY ("publisherId") REFERENCES "Publisher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
