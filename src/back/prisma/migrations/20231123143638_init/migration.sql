-- CreateTable
CREATE TABLE `Membre` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `prenom` VARCHAR(191) NULL,
    `date` DATETIME(3) NOT NULL,
    `mdp` VARCHAR(191) NOT NULL,
    `type` INTEGER NOT NULL,
    `idArt` INTEGER NOT NULL,

    UNIQUE INDEX `Membre_nom_key`(`nom`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Article` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titre` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `contenu` VARCHAR(191) NOT NULL,
    `idMembre` INTEGER NOT NULL,
    `idRubriques` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Categorie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reponse` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dateRep` DATETIME(3) NOT NULL,
    `contenueRep` VARCHAR(191) NOT NULL,
    `idMemb` INTEGER NOT NULL,
    `idArticle` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Rubrique` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomRub` VARCHAR(191) NOT NULL,
    `descRub` VARCHAR(191) NOT NULL,
    `idCategories` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Article` ADD CONSTRAINT `Article_idMembre_fkey` FOREIGN KEY (`idMembre`) REFERENCES `Membre`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Article` ADD CONSTRAINT `Article_idRubriques_fkey` FOREIGN KEY (`idRubriques`) REFERENCES `Rubrique`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reponse` ADD CONSTRAINT `Reponse_idMemb_fkey` FOREIGN KEY (`idMemb`) REFERENCES `Membre`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reponse` ADD CONSTRAINT `Reponse_idArticle_fkey` FOREIGN KEY (`idArticle`) REFERENCES `Article`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rubrique` ADD CONSTRAINT `Rubrique_idCategories_fkey` FOREIGN KEY (`idCategories`) REFERENCES `Categorie`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
