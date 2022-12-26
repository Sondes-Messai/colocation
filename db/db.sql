-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 26 déc. 2022 à 23:58
-- Version du serveur : 10.4.24-MariaDB
-- Version de PHP : 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `colocataires`
--

-- --------------------------------------------------------

--
-- Structure de la table `colocataires`
--
DROP TABLE IF EXISTS `payments`;
DROP TABLE IF EXISTS `colocataires`;
DROP TABLE IF EXISTS `depenses`;
DROP TABLE IF EXISTS `depense_groupes`;
DROP TABLE IF EXISTS `utilisateurs`;
DROP TABLE IF EXISTS `colocations`;
CREATE TABLE `colocataires` (
  `id` int(10) NOT NULL,
  `title` varchar(4) DEFAULT NULL,
  `nom` varchar(100) NOT NULL,
  `prenom` varchar(100) NOT NULL,
  `date_naissance` date DEFAULT NULL,
  `telephone` varchar(50) DEFAULT NULL,
  `email` varchar(150) DEFAULT NULL,
  `id_colocation` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `colocations`
--
CREATE TABLE `colocations` (
  `id` int(10) NOT NULL,
  `nom` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `colocations`
--

-- --------------------------------------------------------

--
-- Structure de la table `depenses`
--

CREATE TABLE `depenses` (
  `id` int(10) NOT NULL,
  `id_categorie` int(10) NOT NULL,
  `title` varchar(250) NOT NULL,
  `montant` float NOT NULL,
  `date` date NOT NULL,
  `frequence` tinyint(1) NOT NULL DEFAULT 0,
  `date_creation` date NOT NULL,
  `id_colocation` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `depense_groupes`
--

CREATE TABLE `depense_groupes` (
  `id` int(10) NOT NULL,
  `nom` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


-- --------------------------------------------------------

--
-- Structure de la table `payments`
--

CREATE TABLE `payments` (
  `id` int(10) NOT NULL,
  `id_depense` int(10) NOT NULL,
  `title` varchar(250) NOT NULL,
  `montant` float NOT NULL,
  `date` date NOT NULL,
  `id_colocataire` int(10) NOT NULL,
  `est_paye` tinyint(1) NOT NULL,
  `date_creation` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

CREATE TABLE `utilisateurs` (
  `id` int(10) NOT NULL,
  `email` varchar(150) NOT NULL,
  `mdp` varchar(100) NOT NULL,
  `id_colocation` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `colocataires`
--
ALTER TABLE `colocataires`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `colocations`
--
ALTER TABLE `colocations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `depenses`
--
ALTER TABLE `depenses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `depenses_colocations_ibfk_1` (`id_colocation`),
  ADD KEY `depenses_groupes_ibfk_1` (`id_categorie`);

--
-- Index pour la table `depense_groupes`
--
ALTER TABLE `depense_groupes`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `payments_depenses_ibfk_1` (`id_depense`),
  ADD KEY `payments_colocataires_ibfk_1` (`id_colocataire`);

--
-- Index pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `colocations`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

ALTER TABLE `depense_groupes`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour la table `colocataires`
--
ALTER TABLE `colocataires`
  ADD CONSTRAINT `colocataires_colocations_ibfk_1` FOREIGN KEY (`id_colocation`) REFERENCES `colocations` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `depenses`
--
ALTER TABLE `depenses`
  ADD CONSTRAINT `depenses_colocations_ibfk_1` FOREIGN KEY (`id_colocation`) REFERENCES `colocations` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `depenses_groupes_ibfk_1` FOREIGN KEY (`id_categorie`) REFERENCES `depense_groupes` (`id`);

--
-- Contraintes pour la table `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `payments_colocataires_ibfk_1` FOREIGN KEY (`id_colocataire`) REFERENCES `colocataires` (`id`),
  ADD CONSTRAINT `payments_depenses_ibfk_1` FOREIGN KEY (`id_depense`) REFERENCES `depenses` (`id`);

--
-- Contraintes pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD CONSTRAINT `utilisateurs_colocations_ibfk_1` FOREIGN KEY (`id_colocation`) REFERENCES `colocations` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

--
-- Déchargement des données de la table `depense_groupes`
--


INSERT INTO `colocations` (`nom`) VALUES
('MaColocation');

INSERT INTO `depense_groupes` (`nom`) VALUES
('Maison'),
('Alimentation'),
('Utilitaire'),
('Transport'),
('Achat'),
('Entretien'),
('Assurances'),
('Loyer'),
('Autres');