/*
  Warnings:

  - Added the required column `username` to the `Usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `usuarios` ADD COLUMN `username` VARCHAR(191) NOT NULL;
