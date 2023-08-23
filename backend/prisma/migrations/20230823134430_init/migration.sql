-- CreateTable
CREATE TABLE "accounts" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "master" BOOLEAN NOT NULL,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);
