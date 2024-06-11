/*
  Warnings:

  - You are about to drop the `laudo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `paciente` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `paciente_endereco` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `laudo` DROP FOREIGN KEY `laudo_pacienteId_fkey`;

-- DropForeignKey
ALTER TABLE `paciente_endereco` DROP FOREIGN KEY `paciente_endereco_pacienteId_fkey`;

-- DropTable
DROP TABLE `laudo`;

-- DropTable
DROP TABLE `paciente`;

-- DropTable
DROP TABLE `paciente_endereco`;

-- CreateTable
CREATE TABLE `pacientes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `sobrenome` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `dataNascimento` VARCHAR(191) NOT NULL,
    `sexo` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `pacientes_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pacientes_enderecos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rua` VARCHAR(191) NOT NULL,
    `numero` VARCHAR(191) NOT NULL,
    `complemento` VARCHAR(191) NULL,
    `bairro` VARCHAR(191) NOT NULL,
    `cidade` VARCHAR(191) NOT NULL,
    `estado` VARCHAR(191) NOT NULL,
    `cep` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `pacienteId` INTEGER NOT NULL,

    UNIQUE INDEX `pacientes_enderecos_pacienteId_key`(`pacienteId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `laudos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao` VARCHAR(191) NOT NULL,
    `diagnostico` VARCHAR(191) NOT NULL,
    `recomendacoes` VARCHAR(191) NOT NULL,
    `anexos` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `pacienteId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `pacientes_enderecos` ADD CONSTRAINT `pacientes_enderecos_pacienteId_fkey` FOREIGN KEY (`pacienteId`) REFERENCES `pacientes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `laudos` ADD CONSTRAINT `laudos_pacienteId_fkey` FOREIGN KEY (`pacienteId`) REFERENCES `pacientes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
