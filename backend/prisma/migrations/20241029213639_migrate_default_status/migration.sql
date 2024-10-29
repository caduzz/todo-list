-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_todo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_todo" ("description", "id", "status") SELECT "description", "id", "status" FROM "todo";
DROP TABLE "todo";
ALTER TABLE "new_todo" RENAME TO "todo";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
