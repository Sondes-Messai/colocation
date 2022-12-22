-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 22 déc. 2022 à 19:49
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
CREATE DATABASE IF NOT EXISTS `colocataires` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `colocataires`;

-- --------------------------------------------------------

--
-- Structure de la table `colocataires`
--

CREATE TABLE IF NOT EXISTS `colocataires` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) NOT NULL,
  `prenom` varchar(100) NOT NULL,
  `id_colocation` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `colocataires`
--

INSERT INTO `colocataires` (`id`, `nom`, `prenom`, `id_colocation`) VALUES
(1, 'messai', 'sondes', 1),
(2, 'test', 'alison', 1),
(9, 'Anis', 'Ellouzi', 1);

-- --------------------------------------------------------

--
-- Structure de la table `colocations`
--

CREATE TABLE IF NOT EXISTS `colocations` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `nom` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `colocations`
--

INSERT INTO `colocations` (`id`, `nom`) VALUES
(1, 'MaColocation');

-- --------------------------------------------------------

--
-- Structure de la table `depenses`
--

CREATE TABLE IF NOT EXISTS `depenses` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `id_categorie` int(10) NOT NULL,
  `title` varchar(250) NOT NULL,
  `montant` float NOT NULL,
  `date` date NOT NULL,
  `frequence` tinyint(1) NOT NULL DEFAULT 0,
  `date_creation` date NOT NULL,
  `id_colocation` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `depenses_colocations_ibfk_1` (`id_colocation`),
  KEY `depenses_groupes_ibfk_1` (`id_categorie`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `depenses`
--

INSERT INTO `depenses` (`id`, `id_categorie`, `title`, `montant`, `date`, `frequence`, `date_creation`, `id_colocation`) VALUES
(1, 1, 'EDF', 80, '2022-12-01', 1, '2022-12-14', 1);

-- --------------------------------------------------------

--
-- Structure de la table `depense_groupes`
--

CREATE TABLE IF NOT EXISTS `depense_groupes` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `nom` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `depense_groupes`
--

INSERT INTO `depense_groupes` (`id`, `nom`) VALUES
(1, 'Loyer'),
(2, 'Assurances');

-- --------------------------------------------------------

--
-- Structure de la table `payments`
--

CREATE TABLE IF NOT EXISTS `payments` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `id_depense` int(10) NOT NULL,
  `title` varchar(250) NOT NULL,
  `montant` float NOT NULL,
  `date` date NOT NULL,
  `id_colocataire` int(10) NOT NULL,
  `date_creation` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `payments_depenses_ibfk_1` (`id_depense`),
  KEY `payments_colocataires_ibfk_1` (`id_colocataire`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `payments`
--

INSERT INTO `payments` (`id`, `id_depense`, `title`, `montant`, `date`, `id_colocataire`, `date_creation`) VALUES
(1, 1, 'test', 40, '2022-12-01', 1, '2022-12-11');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

CREATE TABLE IF NOT EXISTS `utilisateurs` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `login` varchar(25) NOT NULL,
  `mdp` varchar(100) NOT NULL,
  `mail` varchar(30) NOT NULL,
  `id_colocation` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `utilisateurs`
--

INSERT INTO `utilisateurs` (`id`, `login`, `mdp`, `mail`, `id_colocation`) VALUES
(2, 'anis', 'anis', 'anis.ellouzi@live.fr', 1);

--
-- Contraintes pour les tables déchargées
--

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
