/*
  Warnings:

  - Added the required column `over` to the `Call` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Call" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "over" BOOLEAN NOT NULL
);
INSERT INTO "new_Call" ("id") SELECT "id" FROM "Call";
DROP TABLE "Call";
ALTER TABLE "new_Call" RENAME TO "Call";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
