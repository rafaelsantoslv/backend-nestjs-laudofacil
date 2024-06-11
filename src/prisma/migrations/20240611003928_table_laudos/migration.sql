-- CreateTable
CREATE TABLE `laudo` (
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
ALTER TABLE `laudo` ADD CONSTRAINT `laudo_pacienteId_fkey` FOREIGN KEY (`pacienteId`) REFERENCES `paciente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
