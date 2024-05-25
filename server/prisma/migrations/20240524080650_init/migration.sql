-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "gmail" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_gmail_key" ON "User"("gmail");
