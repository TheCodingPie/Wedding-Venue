-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 15, 2019 at 04:13 PM
-- Server version: 10.1.40-MariaDB
-- PHP Version: 7.1.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `projekat`
--

-- --------------------------------------------------------

--
-- Table structure for table `brideandgroom`
--

CREATE TABLE `brideandgroom` (
  `idBrideAndGroom` int(11) NOT NULL,
  `nameBride` varchar(20) DEFAULT NULL,
  `nameGroom` varchar(20) DEFAULT NULL,
  `lastname` varchar(30) DEFAULT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `brideandgroom`
--

INSERT INTO `brideandgroom` (`idBrideAndGroom`, `nameBride`, `nameGroom`, `lastname`, `email`, `password`) VALUES
(1, 'Ana', 'Petar', 'Pavlovic', 'nnnevenica99', 'lalala'),
(4, 'Petra', 'Slavko', 'Saric', 'lalla', 'kakaas'),
(8, 'Stana', 'Stanko', 'Stanic', 'kokoda', 'blabla'),
(16, 'Dana', 'Milivoj', 'Radic', 'patd', 'ggg'),
(25, 'Yinna', 'Maluma', 'Nad', 'papap', 'sss'),
(26, 'Ana', 'Martin', 'Stefanovic', 'lardo', 'poat'),
(29, 'Denis', 'Marc', 'Peric', 'pakgs', 'poat'),
(30, 'Petra', 'Ognjen', 'Lakic', 'pakgd', 'poat'),
(31, 'Anica', 'Mihajlo', 'Mihic', 'lakagr', 'poat'),
(32, 'Lkaka', 'jshs', 'hjd', 'fdsd', 'poat'),
(33, 'Marija', 'Mare', 'Misic', 'paosnd', 'poat'),
(34, 'Sanja', 'Pa', 'laka', 'rf', 'poat'),
(35, 'Sabja', 'lala', 'shs', 'jsjs', 'poat'),
(36, 'Sabja', 'lala', 'shs', 'jsjs', 'poat'),
(37, 'Dana', 'Darko', 'Dakic', 'lajdr', 'poat'),
(38, 'Inna', 'Maluma', 'Kaddy', 'lakkdd', 'poat'),
(39, 'pkj', 'hihhi', 'ppp', 'lll', 'poat'),
(41, 'Sanja', 'Sandro', 'Stanic', 'lahdjdf', 'poat'),
(77, '', '', '', '', 'poat'),
(78, '', '', '', '', 'poat'),
(79, '', '', '', '', 'poat'),
(80, '', '', '', '', 'poat'),
(81, '', '', '', '', 'poat'),
(82, '', '', '', '', 'poat'),
(83, '', '', '', '', 'poat'),
(84, '', '', '', '', 'poat'),
(85, '', '', '', '', 'poat'),
(86, 'Marija', 'Stevan', 'Stankojevic', 'Elfakovci', 'poat'),
(87, '', '', '', '', 'poat'),
(88, 'Makica', 'Vule', 'Tonton', 'bossland', 'poat'),
(89, 'Nevena', 'Gaja', 'Nikolic', 'Tatleeee', 'poat'),
(90, 'Joks', 'Pike', 'Nikolic', 'Hshehwh', 'poat'),
(91, '', '', '', '', 'poat'),
(92, '', '', '', '', 'poat'),
(93, '', '', '', '', 'poat'),
(94, 'MmmHshsj', 'Mm', 'Mmm', 'Mmas', 'poat'),
(95, 'MmmHshsj', 'Mm', 'Mmm', 'Mmas', 'poat'),
(96, 'Josk', 'Pi', 'Ppi', 'Stoj', 'poat'),
(97, 'Josk', 'Pi', 'Ppi', 'Stoj', 'poat'),
(98, 'Nesa', 'Is', 'Penenadpi', 'Gahaga', 'poat'),
(99, '', '', '', '', 'poat'),
(101, '', '', '', '', 'poat'),
(102, '', '', '', '', 'poat'),
(103, '', '', '', '', 'poat'),
(104, '', '', '', '', 'poat'),
(105, '', '', '', '', 'poat'),
(106, 'Joks', 'Sergi', 'Roberto', 'Barca4life', 'poat'),
(107, 'Joks', 'Sergi', 'Roberto', 'Barca4life', 'poat'),
(108, 'Jovana', 'Sergi', 'Roberto', 'Tatleee', 'poat'),
(109, 'Jovana', 'Sergi', 'Roberto', 'Tatleee', 'poat'),
(110, 'Tatla', 'Tatlisa', 'Tatic', 'Hhhh', 'poat'),
(111, 'Tatla', 'Tatlisa', 'Tatic', 'Hhhh', 'poat'),
(112, 'Tatla', 'Tatlisa', 'Tatic', 'Hhhh', 'poat'),
(113, 'Kija', 'Sloba', 'Kockar', 'Zadruga', 'poat'),
(114, 'Marija', 'Br6', 'Stanojevic', 'Br6', 'poat'),
(115, '', '', '', '', 'poat'),
(116, '', '', '', '', 'poat'),
(117, '', '', '', '', 'poat'),
(118, '', '', '', '', 'poat'),
(119, '', '', '', '', 'poat'),
(120, '', '', '', '', 'poat'),
(121, '', '', '', '', 'poat'),
(122, '', '', '', '', 'poat'),
(123, '', '', '', '', 'poat'),
(124, '', '', '', '', 'poat'),
(125, '', '', '', '', 'poat'),
(126, '', '', '', '', 'poat'),
(127, '', '', '', '', 'poat'),
(128, '', '', '', '', 'poat'),
(129, '', '', '', '', 'poat'),
(130, '', '', '', '', 'poat'),
(131, '', '', '', '', 'poat'),
(132, '', '', '', '', 'poat'),
(133, '', '', '', '', 'poat'),
(134, '', '', '', '', 'poat'),
(135, '', '', '', '', 'poat'),
(136, 'Jj', 'Pp', 'Jjk', 'Kkkk', 'poat'),
(137, 'Udhdh', 'Hahsh', 'Hahahs', 'Jajsjs', 'poat'),
(138, '', '', '', '', 'poat'),
(139, '', '', '', '', 'poat'),
(140, '', '', '', '', 'poat'),
(141, '', '', '', '', 'poat'),
(142, '', '', '', '', 'poat'),
(143, '', '', '', '', 'poat'),
(144, '', '', '', '', 'poat'),
(145, 'Haja', 'Aaa', 'Aa', 'Szs', 'poat'),
(146, 'Jovana', 'Ramos', 'Nikolic', 'Mail', 'poat'),
(147, '', '', '', '', 'poat'),
(148, '', '', '', '', 'poat'),
(149, '', '', '', '', 'poat'),
(150, '', '', '', '', 'poat'),
(151, '', '', '', '', 'poat'),
(152, '', '', '', '', 'poat'),
(153, 'Cyucuyc7c', ' Ugcicic', 'Cuyciyiyc', 'Cutcuycicitc', 'poat'),
(154, 'Yvviyv8', ' 8yif86', 'Tc7tcf', 'Viyviyv', 'poat'),
(155, 'Iviyvvyc', 'Tuc7c', 'Cucut', 'Cutc7tc', 'poat'),
(156, 'Cuf7td', 'D7ttct', 'Ucutc', 'Tucut7y', 'poat'),
(157, 'G6 c7tct', 'T7c7tc', 'Tctc', ' Yfyf fyc', 'poat'),
(158, 'Xitdutd', 'Utcuct', 'Tuficiyd', 'Uofoufouf', 'poat'),
(159, 'Udcufu', 'Tidut', 'Htxutxutd', 'Tdududy7dydduytdut', 'poat'),
(160, 'Joks', 'Pike', 'Pike', 'Pstojan', 'poat'),
(161, 'Joksi', 'Stwfi', 'Nikolic', 'Pstojanovic000@ ', 'poat'),
(162, 'Maroja', 'Stefi', 'Stankovic', 'Pstojanovic000@', 'poat'),
(163, 'Sanja', 'Sandro', 'Sakic', 'pstojanovic000@gmail.comgggkkk', 'poat'),
(164, 'Jana', 'Vuki', 'Tonic', 'pstojanovic000@gmail.comjjjjjjjjj', 'poat'),
(165, 'Ana', 'Laki', 'Kak', 'gggg', 'poat'),
(166, 'Kasandra', 'Felipe', 'Pantic', 'pstojanovic000@gmail.com', 'poat'),
(167, 'Dalinda', 'Darko', 'Dakic', 'pstojanovic000@', 'poat'),
(168, 'Lana', 'Luka', 'Lakic', 'pstojanovic000@gmail.c', 'poat'),
(169, 'Lhhss', 'Lhdhdh', 'Lahshs', 'pstojanovic000@gma', 'poat'),
(170, 'Paakak', 'Hshsh', 'Gshsbbs', 'Hahsh', 'poat'),
(171, 'Anan', 'Kak', 'Hsgsh', 'Hshshhs', 'poat'),
(172, 'Marija', 'Stef', 'Tojanovic', 'Pstojanov', 'poat'),
(173, 'Milica', 'Marko', 'Nikolic', 'Stanojevic.stefi51@gmail.com', 'poat'),
(174, 'Sandra', 'Saf', 'Kaduc', 'jovananikolicdd98@gmail.com', 'poat'),
(175, 'Dana', 'Dar', 'Pald', 'jovananikolicdd98@gmail.com', 'poat'),
(176, 'La', 'Fa', 'Gas', 'jovananikolicdd98@gmail.com', 'poat'),
(177, 'Hana', 'Hari', 'Gadic', 'jovananikolicdd98@gmail.com', 'poat'),
(179, 'Jovana', 'Strahinja', 'Pike', 'jovananikolicdd98@gmail.com', 'poat');

-- --------------------------------------------------------

--
-- Table structure for table `desert`
--

CREATE TABLE `desert` (
  `name` varchar(40) NOT NULL,
  `vegeterian` tinyint(1) DEFAULT NULL,
  `Restaurant_idRestaurant` int(11) DEFAULT NULL,
  `price` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `desert`
--

INSERT INTO `desert` (`name`, `vegeterian`, `Restaurant_idRestaurant`, `price`) VALUES
('Cokoladna torta', 0, 1111, 'gold'),
('Mekika', 1, 1111, 'osnovni'),
('Mus', 0, 1111, 'gold'),
('Pita', 1, 1111, 'skupo'),
('Pitica', 1, 1111, 'skupo'),
('Sufle', 1, 1111, 'osnovni');

-- --------------------------------------------------------

--
-- Table structure for table `family`
--

CREATE TABLE `family` (
  `id` int(11) NOT NULL,
  `lastname` varchar(25) DEFAULT NULL,
  `numOfMembers` int(11) DEFAULT NULL,
  `guestType` varchar(15) DEFAULT NULL,
  `coming` tinyint(4) DEFAULT '0',
  `numComing` int(11) DEFAULT '0',
  `Tables_has_Wedding_Tables_idTable` int(11) DEFAULT NULL,
  `Tables_has_Wedding_Wedding_idWedding` int(11) DEFAULT NULL,
  `Wedding_idWedding` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `family`
--

INSERT INTO `family` (`id`, `lastname`, `numOfMembers`, `guestType`, `coming`, `numComing`, `Tables_has_Wedding_Tables_idTable`, `Tables_has_Wedding_Wedding_idWedding`, `Wedding_idWedding`) VALUES
(1, 'Nikolic', 2, 'porodica', 1, 0, 1, 1, 1),
(2, 'Stojanovic', 3, 'kolege', 0, 0, NULL, 1, 1),
(6, 'Pekic', 3, 'prijatelji', 0, 0, NULL, 1, 1),
(7, 'Katic', 2, 'kumovi', 0, 0, NULL, 1, 1),
(8, 'Kojic', 8, 'guestType', 0, 0, NULL, 1, 1),
(9, 'Igic', 2, 'guestType', 0, 0, NULL, 1, 1),
(10, 'Lalic', 6, 'kolege', 0, 0, NULL, 1, 1),
(11, 'Lakic', 2, 'prijatelji', 0, 0, NULL, 1, 1),
(12, 'Hadic', 2, 'kolege', 0, 0, NULL, 1, 1),
(13, 'Jokic', 1, 'prijatelji', 0, 0, NULL, 1, 1),
(14, 'Grujic', 1, 'prijatelj', 0, 0, NULL, 1, 1),
(15, 'Grujic', 1, 'prijatelj', 0, 0, NULL, 1, 1),
(16, 'Gasic', 1, 'neprijatelj', 0, 0, NULL, 1, 1),
(17, 'Gasic', 1, 'neprijatelj', 0, 0, NULL, 1, 1),
(18, '', 0, '', 0, 0, NULL, 1, 1),
(19, '', 3, '', 0, 0, NULL, 1, 1),
(20, 'Kontic', 3, 'prijatelji', 0, 0, NULL, 1, 1),
(21, 'Tatic', 2, 'prijatelji', 0, 0, NULL, 1, 1),
(22, 'Tatic', 4, 'prijatelji', 0, 0, NULL, 1, 1),
(23, 'Zaric', 3, 'prijatelji', 0, 0, NULL, 1, 1),
(24, 'Stanic', 3, 'kolege', 0, 0, NULL, 1, 1),
(25, 'Stanic', 4, 'prijatelji', 0, 0, NULL, 1, 1),
(26, 'Stanic', 2, 'prijatelji', 0, 0, NULL, 1, 1),
(27, 'Mrkic', 3, 'kolege', 0, 0, NULL, 1, 1),
(28, 'Neveic', 2, 'kolega', 0, 0, NULL, 1, 1),
(29, 'Deic', 1, 'prijatelji', 0, 0, NULL, 1, 1),
(30, 'Filic', 1, 'prijatelj', 0, 0, NULL, 1, 1),
(31, 'Rebic', 1, 'kum', 0, 0, NULL, 1, 1),
(32, 'Resic', 1, 'kolega', 0, 0, NULL, 1, 1),
(33, 'Gagic', 1, 'prijatelj', 0, 0, NULL, 1, 1),
(34, 'Maric', 1, 'lala', 0, 0, NULL, 1, 1),
(35, 'Yza', 1, 'laka', 0, 0, NULL, 1, 1),
(36, 'Yza', 1, 'laka', 0, 0, NULL, 1, 1),
(37, 'Mikic', 1, 'prijatelji', 0, 0, NULL, 1, 1),
(38, 'Stanojevic', 2, 'prijatelji', 0, 0, NULL, 4, 4),
(39, 'Stanojevic', 2, 'prijatelji', 0, 0, NULL, 4, 4),
(40, 'Stanojevic', 2, 'prijatelji', 0, 0, NULL, 4, 4),
(41, 'Stanojevic', 2, 'prijatelji', 0, 0, NULL, 4, 4),
(42, 'Milic', 4, 'kolege', 0, 0, NULL, 4, 4),
(43, 'Milic', 4, 'kolege', 0, 0, NULL, 4, 4),
(44, 'Milic', 4, 'kolege', 0, 0, NULL, 4, 4),
(45, 'Milic', 4, 'kolege', 0, 0, NULL, 4, 4),
(46, 'Milic', 4, 'kolege', 0, 0, NULL, 4, 4),
(47, 'Markovic', 3, 'kolege', 0, 0, NULL, 4, 4),
(48, 'Markovic', 3, 'kolege', 0, 0, NULL, 4, 4),
(49, 'Markovic', 3, 'kolege', 0, 0, NULL, 4, 4),
(50, 'Markovic', 3, 'kolege', 0, 0, NULL, 4, 4),
(51, 'Markovic', 3, 'kolege', 0, 0, NULL, 4, 4),
(52, 'Masic', 3, 'kolege', 0, 0, NULL, 4, 4),
(53, 'Zikic', 2, 'kumovi', 0, 0, NULL, 4, 4),
(54, 'Filic', 3, 'prijatelj', 0, 0, NULL, 4, 4),
(55, '', 0, 'porodica', 0, 0, NULL, 1, 1),
(56, '', 0, 'porodica', 0, 0, NULL, 1, 1),
(57, '', 0, 'porodica', 0, 0, NULL, 1, 1),
(58, '', 0, 'porodica', 0, 0, NULL, 1, 1),
(59, 'Misl', 8, 'prijatelji', 0, 0, NULL, 1, 1),
(60, '', 0, 'porodica', 0, 0, NULL, 1, 1),
(61, '', 0, 'porodica', 0, 0, NULL, 1, 1),
(62, 'Stefan', 2, 'kumovi', 0, 0, NULL, 1, 1),
(63, 'nikoloc', 3, 'prijatelji', 0, 0, NULL, 1, 1),
(64, '', 3, 'porodica', 0, 0, NULL, 1, 1),
(65, '', 2, 'porodica', 0, 0, NULL, 1, 1),
(66, '', 2, 'porodica', 0, 0, NULL, 1, 1),
(67, '', 3, 'porodica', 0, 0, NULL, 1, 1),
(68, 'rr', 3, 'porodica', 0, 0, NULL, 1, 1),
(69, '', 3, 'porodica', 0, 0, NULL, 1, 1),
(70, '', 3, 'porodica', 0, 0, NULL, 1, 1),
(71, '', 3, 'porodica', 0, 0, NULL, 1, 1),
(72, '', 3, 'porodica', 0, 0, NULL, 1, 1),
(73, 'sasas', 3, 'prijatelji', 0, 0, NULL, 1, 1),
(74, 'sasa', 4, 'prijatelji', 0, 0, NULL, 1, 1),
(75, 'sasa', 7, 'prijatelji', 0, 0, NULL, 1, 1),
(76, '', 3, 'porodica', 0, 0, NULL, 1, 1),
(77, '', 3, 'porodica', 0, 0, NULL, 1, 1),
(78, '', 3, 'porodica', 0, 0, NULL, 1, 1),
(79, 'sasa', 3, 'porodica', 0, 0, NULL, 1, 1),
(80, 'sasa', 4, 'porodica', 0, 0, NULL, 1, 1),
(81, 'sass', 4, 'prijatelji', 0, 0, NULL, 1, 1),
(82, 'sasa', 4, 'porodica', 0, 0, NULL, 1, 1),
(83, 'sasa', 4, 'porodica', 0, 0, NULL, 1, 1),
(84, 'sasa', 1, 'kumovi', 0, 0, NULL, 1, 1),
(85, 'sasa', 4, 'kumovi', 0, 0, NULL, 1, 1),
(86, 'sas', 5, 'kumovi', 0, 0, NULL, 1, 1),
(87, 'sasa', 5, 'porodica', 0, 0, NULL, 1, 1),
(88, 'sasa', 4, 'porodica', 0, 0, NULL, 1, 1),
(89, 'sasa', 5, 'porodica', 0, 0, NULL, 1, 1),
(90, 'sasa', 5, 'kolege', 0, 0, NULL, 1, 1),
(91, 'sasas', 4, 'porodica', 0, 0, NULL, 1, 1),
(92, 'sasas', 5, 'porodica', 0, 0, NULL, 1, 1),
(93, 'aaa', 5, 'porodica', 0, 0, NULL, 1, 1),
(94, 'sasa', 3, 'porodica', 0, 0, NULL, 1, 1),
(95, 'sasa', 6, 'prijatelji', 0, 0, NULL, 1, 1),
(96, 'stefa', 5, 'porodica', 0, 0, NULL, 1, 1),
(97, 'steda', 5, 'porodica', 0, 0, NULL, 1, 1),
(98, 'fa', 6, 'porodica', 0, 0, NULL, 1, 1),
(99, 'stef', 5, 'porodica', 0, 0, NULL, 1, 1),
(100, 'sa', 4, 'porodica', 1, 0, NULL, 1, 1),
(101, 'sas', 4, 'prijatelji', 0, 0, NULL, 1, 1),
(102, 'stef', 5, 'porodica', 2, 0, NULL, 1, 1),
(103, 'stef', 5, 'kumovi', 1, 0, NULL, 1, 1),
(104, 'prezime', 4, 'porodica', 0, 0, NULL, 1, 1),
(105, 'sss', 3, 'porodica', 0, 0, NULL, 1, 1),
(106, '333', 3, 'porodica', 0, 0, NULL, 1, 1),
(107, 'sss', 3, 'porodica', 0, 0, NULL, 1, 1),
(108, 'sss', 3, 'kumovi', 0, 0, NULL, 1, 1),
(109, 'sss', 3, 'porodica', 0, 0, NULL, 1, 1),
(110, 'sss', 3, 'porodica', 0, 0, NULL, 1, 1),
(111, 'sss', 3, 'kolege', 0, 0, NULL, 1, 1),
(112, 'stef', 4, 'porodica', 0, 0, NULL, 1, 1),
(113, 'stef', 4, 'porodica', 0, 0, NULL, 1, 1),
(114, 'stef', 4, 'kumovi', 0, 0, NULL, 1, 1),
(115, 'stef', 4, 'porodica', 0, 0, NULL, 1, 1),
(116, 'stef', 4, 'kumovi', 0, 0, NULL, 1, 1),
(117, 'stef', 4, 'kolege', 0, 0, NULL, 1, 1),
(118, 'stef', 4, 'porodica', 0, 0, NULL, 1, 1),
(119, 'stef', 4, 'porodica', 0, 0, NULL, 1, 1),
(120, 'stef', 4, 'kumovi', 0, 0, NULL, 1, 1),
(121, 'stef', 4, 'kolege', 0, 0, NULL, 1, 1),
(122, 'stef22', 5, 'kolege', 0, 0, NULL, 1, 1),
(123, 'peta', 5, 'porodica', 0, 0, NULL, 1, 1),
(124, 'mmm', 4, 'porodica', 0, 0, NULL, 1, 1),
(125, 'mmmss', 3, 'prijatelji', 0, 0, NULL, 1, 1),
(126, 'stef2', 4, 'prijatelji', 0, 0, NULL, 1, 1),
(127, 'petak', 2, 'prijatelji', 0, 0, NULL, 1, 1),
(128, 'Stefanovic', 2, 'porodica', 1, 0, 3, 78, 78),
(129, '', 0, 'porodica', 1, 0, 1, 78, 78),
(130, 'Stanojevic', 2, 'porodica', 1, 0, 4, 78, 78),
(131, 'Maric', 3, 'prijatelji', 1, 0, 7, 78, 78),
(132, 'Stankovic', 4, 'kolege', 1, 0, 7, 78, 78),
(133, 'Karic', 3, 'kolege', 1, 0, 16, 78, 78),
(134, 'Goncic', 5, 'prijatelji', 1, 0, 4, 78, 78),
(135, 'Gasic', 5, 'kolege', 1, 0, 16, 78, 78),
(136, 'Nikoloc', 3, 'porodica', 1, 0, 4, 78, 78),
(137, 'Jjjj', 2, 'porodica', 1, 0, 4, 78, 78),
(138, 'Sbahah', 2, 'prijatelji', 1, 0, 7, 78, 78),
(139, 'Shsbsb', 2, 'porodica', 1, 0, 4, 78, 78),
(140, 'Zbzbbs', 2, 'porodica', 1, 0, 7, 78, 78),
(141, 'Sgsgg', 2, 'porodica', 1, 0, 7, 78, 78),
(142, 'Grujic', 2, 'kolege', 1, 0, 16, 78, 78),
(143, 'Vucic', 2, 'prijatelji', 1, 0, 7, 81, 78),
(144, 'Haric', 3, 'prijatelji', 1, 0, 3, 81, 81),
(145, 'Miskovic', 2, 'kolege', 1, 0, 1, 81, 81),
(146, 'Sanic', 4, 'porodica', 3, 0, 3, 81, 81),
(147, 'Stanojevici', 6, 'prijatelji', 1, 0, 3, 81, 81),
(148, 'Markovici', 5, 'kolege', 0, 0, NULL, 81, 81),
(149, 'Mikro', 6, 'porodica', 1, 0, NULL, 81, 81),
(150, 'Nikolic', 3, 'porodica', 1, 0, 1, 83, 83),
(151, 'Mikic', 2, 'prijatelji', 1, 0, 1, 83, 83),
(152, 'Mihajlovic', 3, 'porodica', 1, 0, 1, 83, 83);

-- --------------------------------------------------------

--
-- Table structure for table `hostess`
--

CREATE TABLE `hostess` (
  `idHostess` int(11) NOT NULL,
  `name` varchar(15) DEFAULT NULL,
  `password` varchar(10) DEFAULT NULL,
  `Restaurant_idRestaurant` int(11) DEFAULT NULL,
  `email` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hostess`
--

INSERT INTO `hostess` (`idHostess`, `name`, `password`, `Restaurant_idRestaurant`, `email`) VALUES
(1, 'Ana', 'kap', 1111, ''),
(2, 'Hana', 'lala', 1111, ''),
(4, 'Nevena', 'purple', 1111, ''),
(5, 'Sara', 'ABKs7l1r', 1111, ''),
(6, 'pi', 'UlMSwqk2', 1111, ''),
(12, 'Marija', 'lala', 1111, ''),
(13, 'Tijana', 'lala', 1111, ''),
(14, 'ala', 'lala', 1111, ''),
(17, 'jjj', 'XvSbc9Im', 1111, ''),
(19, 'Mara', 'lala', 1111, ''),
(88, 'Taatjana', 'A5Q4nQ5i', 1111, ''),
(101, 'Beth', 'ppjk9zBU', 1111, ''),
(102, 'Bojana', 'dan', 1111, 'sunce'),
(103, 'Bojana', 'dan', 1111, 'sunce'),
(104, 'Lana', 'cQlGlFJ5', 1111, 'papal'),
(105, 'Sanja', 'kpaEKj1s', 1111, 'lakhdy'),
(106, 'Pita', '9ApRnOXF', 1111, 'Pstojanovic000@gmail.com'),
(107, 'Joks', 'c3Z9Siqm', 1111, 'Jovananikolicdd98@gmail.com'),
(108, 'Joksi', 'XPLsXVSo', 1111, 'Jovananikolicdd98@gmail.com'),
(109, 'Joksi', 'cYxomi3b', 1111, 'Jovananikolicdd98@gmail.com'),
(110, 'Joksi', 'ryLSHjm7', 1111, 'Jovananikolicdd98@gmail.com'),
(111, 'Joksi', 'BPNNRtGw', 1111, 'pstojanovic000@gmail.com'),
(112, 'JOKS', '4DN843KY', 1111, 'jovananikolicdd98@gmail.com'),
(113, 'PAKSILINA', 'PqOwPHeQ', 1111, 'pstojanovic000@gmail.com'),
(114, 'Hshd', 'gWFjN2Vu', 1111, 'Jajja'),
(115, 'Hana', 'wyDdvPbz', 1111, 'jovananikolicdd98@gmail.com'),
(116, 'Sanja', 'G1MVbyK4', 1111, 'jovananikolicdd98@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `maincourse`
--

CREATE TABLE `maincourse` (
  `name` varchar(40) NOT NULL,
  `vegeterian` tinyint(1) DEFAULT NULL,
  `Restaurant_idRestaurant` int(11) DEFAULT NULL,
  `price` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `maincourse`
--

INSERT INTO `maincourse` (`name`, `vegeterian`, `Restaurant_idRestaurant`, `price`) VALUES
('Filet Minjon', 0, 1111, 'skupo'),
('Hey', 1, 1111, 'gold'),
('Heyqq', 0, 1111, 'gold'),
('K', 0, 1111, 'osnovni'),
('Kobasica', 0, 1111, 'osnovni'),
('Piyica', 0, 1111, 'gold'),
('Piyicaaaa', 0, 1111, 'gold'),
('Pizza', 0, 1111, 'gold'),
('Pljeskavica', 0, 1111, 'skupo'),
('Sarma', 1, 1111, 'gold'),
('Skampi', 0, 1111, 'osnovni'),
('Svinjetina', 1, 1111, 'platinum');

-- --------------------------------------------------------

--
-- Table structure for table `manager`
--

CREATE TABLE `manager` (
  `password` varchar(8) NOT NULL,
  `Restaurant_idRestaurant` int(11) NOT NULL,
  `uniqueId` varchar(40) DEFAULT 'kkwo'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `manager`
--

INSERT INTO `manager` (`password`, `Restaurant_idRestaurant`, `uniqueId`) VALUES
('Dhdhdh', 1111, '1111'),
('jjj', 1111, 'kkwo'),
('Jovana', 1111, 'jovananikolicdd98@gmail.com'),
('lala', 1111, 'kkwo'),
('lalala', 1111, 'kkwo'),
('lalalala', 1111, NULL),
('lepdan', 1111, 'jovananikolicdd98@gmail.com'),
('lepdan19', 1111, 'kkwo'),
('niko', 1111, 'stanojevic.stefi51@gmail.com'),
('Paja', 1111, '1111'),
('Pakisha', 1111, 'Mail1'),
('papa', 1111, 'kkwo'),
('Pjta', 1111, 'Mail3'),
('Pop', 1111, '1111'),
('Sifra', 1111, 'Mail'),
('Tat', 1111, 'jovananikolicdd98@gmail.com'),
('you', 1111, 'jovananikolicdd98@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `idMember` int(11) NOT NULL,
  `email` varchar(40) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `coming` tinyint(4) DEFAULT NULL,
  `MainCourse_name` varchar(20) DEFAULT NULL,
  `Desert_name` varchar(20) DEFAULT NULL,
  `Starter_name` varchar(20) DEFAULT NULL,
  `Family_Wedding_idWedding` int(11) NOT NULL,
  `FamilyMemberId` int(11) NOT NULL,
  `password` varchar(10) NOT NULL,
  `MainSeen` tinyint(1) DEFAULT NULL,
  `StarterSeen` tinyint(1) DEFAULT NULL,
  `DesertSeen` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`idMember`, `email`, `name`, `coming`, `MainCourse_name`, `Desert_name`, `Starter_name`, `Family_Wedding_idWedding`, `FamilyMemberId`, `password`, `MainSeen`, `StarterSeen`, `DesertSeen`) VALUES
(1, 'jokstatla', 'Joks', 1, 'Filet Minjon', 'Pita', 'Skoljke', 1, 1, 'lala', NULL, 1, NULL),
(3, 'nenstatla', 'Tatlaaa', 1, NULL, NULL, NULL, 1, 2, 'pop', NULL, 1, NULL),
(5, 'tatliii', 'Piter', 0, 'Skampi', 'Mus', 'Grcka salata', 1, 1, 'top', NULL, NULL, NULL),
(6, 'lalalalaal', 'Tatla', 1, NULL, NULL, 'Skoljke', 1, 6, 'tats', NULL, NULL, NULL),
(7, 'zzz', 'Buzzz', 1, 'Pljeskavica', 'Pitica', 'Susi', 1, 15, 'pii', NULL, NULL, NULL),
(8, 'zzz', 'Tatla', 0, NULL, 'Pitica', 'Brusketi', 1, 15, 'piita', NULL, NULL, NULL),
(9, 'haha', 'Tammy', NULL, NULL, 'Pita', 'Zlatiborac', 1, 16, 'lalala', NULL, NULL, NULL),
(10, 'jaka', 'Tihi', 1, 'Pizza', 'Pitica', 'Skoljke', 1, 8, 'LALA', NULL, NULL, NULL),
(11, 'hahah', 'hhhaha', NULL, NULL, NULL, NULL, 1, 17, 'BrblKca4', NULL, NULL, NULL),
(12, 'haha', 'lalaa', NULL, NULL, NULL, NULL, 1, 17, 'laNhSpp5', NULL, NULL, NULL),
(13, 'danagrshd', 'Danica', NULL, NULL, NULL, NULL, 1, 17, 'WgVDkYHZ', NULL, NULL, NULL),
(14, 'stefimorningstar', 'Stefan', NULL, NULL, NULL, NULL, 1, 17, 'G6baNAXM', NULL, NULL, NULL),
(15, 'marijastankovicelfak', 'Marija', NULL, NULL, NULL, NULL, 1, 17, '0yI9wVFc', NULL, NULL, NULL),
(16, 'stefimorningstar', 'Stefan', NULL, 'Pizza', NULL, NULL, 1, 8, 'BxNKgWpc', NULL, NULL, NULL),
(17, 'marijastankovicelfak', 'Marija', NULL, 'Pizza', 'Pita', 'Brusketi', 1, 8, '536sDa9r', NULL, NULL, NULL),
(18, 'Peric', 'Petar', NULL, 'Skampi', NULL, NULL, 1, 8, 'dvj3Co58', NULL, NULL, NULL),
(19, 'ahahaha', 'Ana', NULL, NULL, NULL, NULL, 4, 53, 'ARtOS9XA', NULL, NULL, NULL),
(20, 'ajajja', 'Sanjas', NULL, NULL, NULL, NULL, 4, 54, '69WhfBd0', NULL, NULL, NULL),
(21, 'papapa', 'Mara', NULL, NULL, NULL, NULL, 4, 54, 'xvKzKqcL', NULL, NULL, NULL),
(22, 'haha', 'lalalala', NULL, NULL, NULL, NULL, 4, 54, 'vV1fH74V', NULL, NULL, NULL),
(23, 'lkahf', 'Vladan', 0, NULL, NULL, NULL, 1, 20, 'ggg', NULL, NULL, NULL),
(24, 'lkahf', 'Stefan', 0, NULL, NULL, NULL, 1, 20, 'ggg', NULL, NULL, NULL),
(25, 'lkahf', 'Marko', 0, NULL, NULL, NULL, 1, 20, 'ggg', NULL, NULL, NULL),
(26, 'lkahf', 'Marko', 0, NULL, NULL, NULL, 1, 21, 'ggg', NULL, NULL, NULL),
(27, 'lkahf', 'Marija', 0, NULL, NULL, NULL, 1, 21, 'ggg', NULL, NULL, NULL),
(28, 'lkahf', 'Mara', 0, NULL, NULL, NULL, 1, 21, 'ggg', NULL, NULL, NULL),
(29, 'lkahf', 'Dana', 0, NULL, NULL, NULL, 1, 24, 'ggg', NULL, NULL, NULL),
(30, 'lkahf', 'Darinka', 0, NULL, NULL, NULL, 1, 24, 'ggg', NULL, NULL, NULL),
(31, 'lkahf', 'Rada', 0, NULL, NULL, NULL, 1, 25, 'ggg', NULL, NULL, NULL),
(32, 'email', 'ime', NULL, NULL, NULL, NULL, 0, 81, '0EEBk0EF', NULL, NULL, NULL),
(33, 'email', 'ime', NULL, NULL, NULL, NULL, 0, 81, '9v4g7cag', NULL, NULL, NULL),
(34, 'email', 'ime', NULL, NULL, NULL, NULL, 0, 81, 'OJfIEPkp', NULL, NULL, NULL),
(35, 'email', 'ime', NULL, NULL, NULL, NULL, 0, 81, 'rYl1Jhno', NULL, NULL, NULL),
(36, 'email', 'ime', NULL, NULL, NULL, NULL, 0, 81, 'PpOXznO6', NULL, NULL, NULL),
(37, 'email', 'ime', NULL, NULL, NULL, NULL, 0, 81, 'ZvRbiA8v', NULL, NULL, NULL),
(38, 'email', 'ime', NULL, NULL, NULL, NULL, 0, 81, 'SwH8sH1n', NULL, NULL, NULL),
(39, 'email', 'ime', NULL, NULL, NULL, NULL, 0, 81, 'EiG2jgQc', NULL, NULL, NULL),
(40, 'email', 'ime', NULL, NULL, NULL, NULL, 0, 81, 'Zmv6kxDt', NULL, NULL, NULL),
(41, 'email', 'ime', NULL, NULL, NULL, NULL, 0, 81, 'oDbGteu9', NULL, NULL, NULL),
(42, 'email', 'ime', NULL, NULL, NULL, NULL, 0, 81, 'kgpvNgc6', NULL, NULL, NULL),
(43, 'email', 'ime', NULL, NULL, NULL, NULL, 0, 81, 'bRxx8UPZ', NULL, NULL, NULL),
(44, 'email', 'ime', NULL, NULL, NULL, NULL, 0, 81, 'yOrBaYOI', NULL, NULL, NULL),
(45, 'email', 'ime', NULL, NULL, NULL, NULL, 0, 81, 'eJpIAfln', NULL, NULL, NULL),
(46, 'email', 'ime', NULL, NULL, NULL, NULL, 0, 81, 'Gl6wVrbe', NULL, NULL, NULL),
(47, 'email', 'ime', NULL, NULL, NULL, NULL, 0, 81, 'dASASKcz', NULL, NULL, NULL),
(48, 'Lala', 'Stefan', 1, 'Piyica', 'Mus', 'Joss', 78, 128, 'rkPhxasF', NULL, NULL, NULL),
(49, 'Ahahah', 'Marija', 1, 'Sarma', 'Mus', 'Joss', 78, 128, 'He68A9R3', NULL, NULL, NULL),
(50, 'Shahah', 'Stefi', 1, NULL, NULL, NULL, 78, 130, 'c9A5DsvC', NULL, NULL, NULL),
(51, 'Shshjaah', 'Makica', 1, NULL, NULL, NULL, 78, 130, 'NUJnrgO8', NULL, NULL, NULL),
(52, 'Bsbssb', 'Miki', 1, NULL, NULL, NULL, 78, 131, 'wpkJQ6Tt', NULL, NULL, NULL),
(53, 'Ehehhe', 'Mara', 1, NULL, NULL, NULL, 78, 131, 'czWCTwiB', NULL, NULL, NULL),
(54, 'Sbbsbs', 'Pera', 1, NULL, NULL, NULL, 78, 131, 'YX2VOw1Z', NULL, NULL, NULL),
(55, 'email', 'Mika', 1, NULL, NULL, NULL, 78, 132, 'oLFOhhts', NULL, NULL, NULL),
(56, 'Sbhsah', 'Peta', 1, NULL, NULL, NULL, 78, 132, 'koj3WyMK', NULL, NULL, NULL),
(57, 'Sbahah', 'Peki', 1, NULL, NULL, NULL, 78, 132, 'DtqVh6kv', NULL, NULL, NULL),
(58, 'Hshaga', 'Mara', 1, NULL, NULL, NULL, 78, 132, 'igBI05Eb', NULL, NULL, NULL),
(59, 'Lala', 'Beba', 1, NULL, NULL, NULL, 78, 134, '0GROsw6T', NULL, NULL, NULL),
(60, 'Trinity', 'Yyyoi', 1, NULL, NULL, NULL, 78, 134, 'BRZpIDJ9', NULL, NULL, NULL),
(61, 'Hahahha', 'Tatla', 1, NULL, NULL, NULL, 78, 134, 'P6qLxjIK', NULL, NULL, NULL),
(62, 'Hag', 'Koen', 1, NULL, NULL, NULL, 78, 134, 'Uqmig2j2', NULL, NULL, NULL),
(63, 'Tatla', 'Joks', 1, NULL, NULL, NULL, 78, 134, 'WxJBfpyh', NULL, NULL, NULL),
(84, 'Hdhshs', 'Joksi', 1, NULL, NULL, NULL, 78, 136, 'EZJTdTZT', NULL, NULL, NULL),
(85, 'email', 'ime', 1, NULL, NULL, NULL, 78, 136, 'diSc074g', NULL, NULL, NULL),
(86, 'email', 'ime', 1, NULL, NULL, NULL, 78, 136, 'OAznyH8R', NULL, NULL, NULL),
(87, 'Hdhshs', 'Joksi', 1, NULL, NULL, NULL, 78, 136, 'mp6wuKLu', NULL, NULL, NULL),
(88, 'Hahaha', 'Joksiii', 1, NULL, NULL, NULL, 78, 136, 'Oabg5xHr', NULL, NULL, NULL),
(89, 'Hshshssh', 'Psk', 1, NULL, NULL, NULL, 78, 136, 'QlQdFQWg', NULL, NULL, NULL),
(90, 'email', 'ime', 1, NULL, NULL, NULL, 78, 137, 'LYBXWRst', NULL, NULL, NULL),
(91, 'email', 'ime', 1, NULL, NULL, NULL, 78, 137, 'Vmm8NBi5', NULL, NULL, NULL),
(92, 'email', 'ime', 1, NULL, NULL, NULL, 78, 138, 'LHPTE6E4', NULL, NULL, NULL),
(93, 'email', 'ime', 1, NULL, NULL, NULL, 78, 138, 'UnudKSt8', NULL, NULL, NULL),
(94, 'email', 'ime', 1, NULL, NULL, NULL, 78, 139, 'R9luEOM2', NULL, NULL, NULL),
(95, 'email', 'ime', 1, NULL, NULL, NULL, 78, 139, '0i2rdXud', NULL, NULL, NULL),
(96, 'Shshsh', 'Shhshsha', 1, NULL, NULL, NULL, 78, 140, 'Txk6olq9', NULL, NULL, NULL),
(97, 'Shsh', 'Dhdhdh', 1, NULL, NULL, NULL, 78, 140, 'K7r8SwM3', NULL, NULL, NULL),
(98, 'jovananikolicdd98@gmail.com', 'Joks', 1, NULL, NULL, NULL, 78, 141, 'yQ3WCxBG', NULL, NULL, NULL),
(99, 'Pstojanovic000@gmail.com', 'Sbdhsh', 1, NULL, NULL, NULL, 78, 141, '5NgHIbzb', NULL, NULL, NULL),
(100, 'pstojanovic000@gmail.com', 'Stanislava', 1, NULL, NULL, NULL, 78, 142, '6kjpiNUh', NULL, NULL, NULL),
(101, 'jovananikolicdd98@gmail.com', 'Caca', 1, NULL, NULL, NULL, 78, 142, '07xKllub', NULL, NULL, NULL),
(102, 'pstojanovic000@gmail.com', 'Alek', 1, NULL, NULL, NULL, 78, 143, 'lDmnFA93', NULL, NULL, NULL),
(103, 'jovananikolicdd98@gmail.com', 'Nenad', 1, 'Hey', 'Mus', 'Joss', 0, 143, 'pTyVPujc', NULL, NULL, NULL),
(104, 'jovananikolicdd98@gmail.com', 'Denis', 1, NULL, NULL, NULL, 81, 144, '6BKLPg0u', NULL, NULL, NULL),
(105, 'jovananikolicdd98@gmail.com', 'Marko', 1, NULL, NULL, NULL, 81, 144, 'ruFfC2Dz', NULL, NULL, NULL),
(106, 'jovananikolicdd98@gmail.com', 'Gavra', 1, NULL, NULL, NULL, 81, 144, 'ntU7nXwH', NULL, NULL, NULL),
(107, 'jovananikolicdd98@gmail.com', 'Hari', 1, NULL, NULL, NULL, 81, 145, 'StxSZPiM', NULL, NULL, NULL),
(108, 'jovananikolicdd98@gmail.com', 'Maksim', 1, NULL, NULL, NULL, 81, 145, 'JYBXXRqj', NULL, NULL, NULL),
(109, 'jovananikolicdd98@gmail.com', 'Filio', 1, NULL, NULL, NULL, 81, 146, 'mwbO8r7O', NULL, NULL, NULL),
(110, 'jovananikolicdd98@gmail.com', 'Karmen', 1, 'Sarma', 'Mus', 'Joss', 81, 146, 'nJOKArsd', NULL, NULL, NULL),
(111, 'jovananikolicdd98@gmail.com', 'Teri', 1, 'Sarma', 'Cokoladna torta', 'Joss', 81, 146, 'i7eXoviZ', NULL, NULL, NULL),
(112, 'jovananikolicdd98@gmail.com', 'Juan', 1, 'Sarma', 'Mus', 'Joss', 81, 146, 'DE8sWUbN', NULL, NULL, NULL),
(113, 'stanojevic.stefi51@gmail.com', 'Milos', 1, NULL, NULL, NULL, 81, 147, 'EIMzjQdr', NULL, NULL, NULL),
(114, 'stanojevic.stefi51@gmail.com', 'tefan', 1, NULL, NULL, NULL, 81, 147, 'kztVFDld', NULL, NULL, NULL),
(115, 'stanojevic.stefi51@gmail.com', 'Setf', 1, NULL, NULL, NULL, 81, 147, 'n0Wk2saJ', NULL, NULL, NULL),
(116, 'stanojevic.stefi51@gmail.com', 'Mirko', 1, NULL, NULL, NULL, 81, 147, 'rLB5CUpT', NULL, NULL, NULL),
(117, 'stanojevic.stefi51@gmail.com', 'Matk9', 1, NULL, NULL, NULL, 81, 147, 'UUnAqg9I', NULL, NULL, NULL),
(118, 'stanojevic.stefi51@gmail.com', 'Miki', 1, NULL, NULL, NULL, 81, 147, 'kTm9cHps', NULL, NULL, NULL),
(119, 'Jovananikolicdd98@gmail.com', 'Jovana', 1, NULL, NULL, NULL, 83, 150, 'uFcHyvlB', NULL, NULL, NULL),
(120, 'Jovananikolicdd98@gmail.com', 'Strahinja', 1, NULL, NULL, NULL, 83, 150, 'g9gYeLSR', NULL, NULL, NULL),
(121, 'Jovananikolicdd98@gmail.com', 'Paja', 1, NULL, NULL, NULL, 83, 150, '5v1bTFNJ', NULL, NULL, NULL),
(122, 'Jovananikolicdd98@gmail.com', 'Tetka', 1, NULL, NULL, NULL, 83, 151, 'GjuHyAVI', NULL, NULL, NULL),
(123, 'Jovananikolicdd98@gmail.com', 'Strina', 1, NULL, NULL, NULL, 83, 151, 'Fn91K8zx', NULL, NULL, NULL),
(124, 'Jovananikolicdd98@gmail.com', 'Andjela', 0, NULL, NULL, NULL, 83, 152, '5U1SSSm3', NULL, NULL, NULL),
(125, 'Jovananikolicdd98@gmail.com', 'Mika', 1, 'Pizza', 'Cokoladna torta', 'Joss', 83, 152, 'rVLBRe2v', 1, 1, 1),
(126, 'Jovananikolicdd98@gmail.com', 'Pera', 1, NULL, NULL, NULL, 83, 152, 'tFplvYgB', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `restaurant`
--

CREATE TABLE `restaurant` (
  `idRestaurant` int(11) NOT NULL,
  `location` varchar(25) DEFAULT NULL,
  `maxGuests` int(11) DEFAULT NULL,
  `minGuests` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `restaurant`
--

INSERT INTO `restaurant` (`idRestaurant`, `location`, `maxGuests`, `minGuests`) VALUES
(1111, 'Pariske Komune', 450, 100);

-- --------------------------------------------------------

--
-- Table structure for table `starter`
--

CREATE TABLE `starter` (
  `name` varchar(40) NOT NULL,
  `vegeterian` tinyint(1) DEFAULT NULL,
  `Restaurant_idRestaurant` int(11) DEFAULT NULL,
  `price` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `starter`
--

INSERT INTO `starter` (`name`, `vegeterian`, `Restaurant_idRestaurant`, `price`) VALUES
('Brusketi', 1, 1111, 'premium'),
('Grcka salata', 0, 1111, 'osnovno'),
('Joss', 1, 1111, 'gold'),
('Kavijar', 0, 1111, ''),
('Ordever', 0, 1111, ''),
('piletina sa besamel sosom', 0, 1111, 'osnovni'),
('Pitiva', 0, 1111, 'osnovni'),
('Prepelica', 0, 1111, 'platinum'),
('Ruska', 1, 1111, 'premium'),
('Skoljke', 0, 1111, 'skupo'),
('Srpska salata', 0, 1111, 'osnovnp'),
('Susi', 0, 1111, 'premium'),
('Zlatiborac', 1, 1111, 'skupo'),
('Zlatiborsko predjelo', 1, 1111, 'platinum');

-- --------------------------------------------------------

--
-- Table structure for table `tables`
--

CREATE TABLE `tables` (
  `idTable` int(11) NOT NULL,
  `shape` varchar(10) DEFAULT NULL,
  `capacity` int(11) DEFAULT NULL,
  `Restaurant_idRestaurant` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tables`
--

INSERT INTO `tables` (`idTable`, `shape`, `capacity`, `Restaurant_idRestaurant`) VALUES
(1, 'circle', 10, 1111),
(2, 'circle', 10, 1111),
(3, 'circle', 15, 1111),
(4, 'circle', 15, 1111),
(5, 'circle', 15, 1111),
(6, 'circle', 15, 1111),
(7, 'circle', 15, 1111),
(8, 'circle', 15, 1111),
(9, 'circle', 15, 1111),
(10, 'circle', 15, 1111),
(11, 'circle', 10, 1111),
(12, 'circle', 10, 1111),
(13, 'circle', 10, 1111),
(14, 'circle', 10, 1111),
(15, 'circle', 10, 1111),
(16, 'circle', 10, 1111),
(17, 'circle', 10, 1111),
(18, 'circle', 10, 1111),
(19, 'circle', 10, 1111),
(20, 'circle', 10, 1111),
(21, 'circle', 10, 1111),
(22, 'circle', 10, 1111),
(23, 'circle', 10, 1111),
(24, 'circle', 10, 1111),
(25, 'circle', 10, 1111),
(26, 'circle', 10, 1111);

-- --------------------------------------------------------

--
-- Table structure for table `tables_has_wedding`
--

CREATE TABLE `tables_has_wedding` (
  `Tables_idTable` int(11) NOT NULL,
  `numberTable` int(11) DEFAULT NULL,
  `numberPeople` int(11) DEFAULT NULL,
  `Waiter_idWaiter` int(11) DEFAULT NULL,
  `Wedding_idWedding` int(11) NOT NULL,
  `x` decimal(15,0) NOT NULL,
  `y` decimal(15,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tables_has_wedding`
--

INSERT INTO `tables_has_wedding` (`Tables_idTable`, `numberTable`, `numberPeople`, `Waiter_idWaiter`, `Wedding_idWedding`, `x`, `y`) VALUES
(1, 1, 10, 25, 1, '110', '34'),
(1, 9, 0, NULL, 6, '299', '419'),
(1, 9, 0, NULL, 7, '299', '419'),
(1, 9, 0, NULL, 8, '299', '419'),
(1, 9, 0, NULL, 14, '299', '419'),
(1, 9, 0, NULL, 74, '299', '419'),
(1, 9, 0, 1, 75, '299', '419'),
(1, 9, 0, NULL, 76, '299', '419'),
(1, 9, 0, 1, 78, '299', '419'),
(1, 9, 0, NULL, 81, '315', '520'),
(1, 9, 0, 1, 83, '279', '348'),
(2, 2, 0, 1, 1, '30', '40'),
(2, 10, 0, NULL, 6, '299', '134'),
(2, 10, 0, NULL, 7, '299', '134'),
(2, 10, 0, NULL, 8, '299', '134'),
(2, 10, 0, NULL, 14, '299', '134'),
(2, 10, 0, NULL, 74, '299', '134'),
(2, 10, 0, 11, 75, '299', '134'),
(2, 10, 0, NULL, 76, '299', '134'),
(2, 10, 0, 22, 78, '299', '134'),
(2, 10, 0, 1, 83, '306', '156'),
(3, 3, 0, 1, 1, '45', '60'),
(3, 1, 0, NULL, 6, '279', '199'),
(3, 1, 0, NULL, 7, '279', '199'),
(3, 1, 0, NULL, 8, '279', '199'),
(3, 1, 0, NULL, 14, '279', '199'),
(3, 1, 0, NULL, 74, '279', '199'),
(3, 1, 0, 1, 75, '279', '199'),
(3, 1, 0, NULL, 76, '279', '199'),
(3, 1, 0, 2, 78, '279', '199'),
(3, 1, 0, NULL, 81, '279', '199'),
(3, 1, 0, 28, 83, '210', '149'),
(4, 4, 15, 11, 1, '100', '100'),
(4, 2, 0, NULL, 6, '279', '348'),
(4, 2, 0, NULL, 7, '279', '349'),
(4, 2, 0, NULL, 8, '279', '348'),
(4, 2, 0, NULL, 14, '279', '349'),
(4, 2, 0, NULL, 74, '279', '348'),
(4, 2, 0, 11, 75, '279', '348'),
(4, 2, 0, NULL, 76, '279', '349'),
(4, 2, 0, NULL, 78, '279', '349'),
(4, 2, 0, NULL, 81, '218', '386'),
(4, 2, 0, 28, 83, '240', '276'),
(5, 3, 0, NULL, 6, '229', '149'),
(5, 3, 0, NULL, 7, '229', '149'),
(5, 3, 0, NULL, 8, '229', '149'),
(5, 3, 0, NULL, 14, '229', '149'),
(5, 3, 0, NULL, 74, '131', '288'),
(5, 3, 0, NULL, 75, '229', '149'),
(5, 3, 0, NULL, 76, '229', '149'),
(5, 3, 0, NULL, 78, '229', '149'),
(5, 3, 0, NULL, 81, '229', '149'),
(5, 3, 0, NULL, 83, '151', '70'),
(6, 4, 0, NULL, 6, '229', '399'),
(6, 4, 0, NULL, 7, '229', '399'),
(6, 4, 0, NULL, 8, '229', '399'),
(6, 4, 0, NULL, 14, '229', '399'),
(6, 4, 0, NULL, 74, '229', '399'),
(6, 4, 0, NULL, 75, '122', '257'),
(6, 4, 0, NULL, 76, '229', '399'),
(6, 4, 0, NULL, 78, '229', '399'),
(6, 4, 0, NULL, 81, '141', '345'),
(6, 4, 0, NULL, 83, '166', '486'),
(7, 7, 15, NULL, 1, '20', '80'),
(7, 5, 0, NULL, 6, '179', '99'),
(7, 5, 0, NULL, 7, '179', '99'),
(7, 5, 0, NULL, 8, '37', '46'),
(7, 5, 0, NULL, 14, '179', '99'),
(7, 5, 0, NULL, 74, '108', '153'),
(7, 5, 0, NULL, 75, '26', '172'),
(7, 5, 0, NULL, 76, '179', '99'),
(7, 5, 0, NULL, 78, '179', '99'),
(7, 5, 0, NULL, 81, '179', '99'),
(7, 5, 0, NULL, 83, '82', '114'),
(8, 6, 0, NULL, 6, '179', '449'),
(8, 6, 0, NULL, 7, '179', '449'),
(8, 6, 0, NULL, 8, '179', '449'),
(8, 6, 0, NULL, 14, '179', '449'),
(8, 6, 0, NULL, 74, '179', '449'),
(8, 6, 0, NULL, 75, '179', '449'),
(8, 6, 0, NULL, 76, '179', '449'),
(8, 6, 0, NULL, 78, '224', '516'),
(8, 6, 0, NULL, 81, '196', '513'),
(8, 6, 0, NULL, 83, '94', '462'),
(9, 7, 0, NULL, 6, '117', '319'),
(9, 7, 0, NULL, 7, '129', '49'),
(9, 7, 0, NULL, 8, '4', '123'),
(9, 7, 0, NULL, 14, '129', '49'),
(9, 7, 0, NULL, 74, '129', '49'),
(9, 7, 0, NULL, 75, '129', '49'),
(9, 7, 0, NULL, 76, '129', '49'),
(9, 7, 0, NULL, 78, '129', '49'),
(9, 7, 0, NULL, 81, '129', '49'),
(9, 7, 0, NULL, 83, '38', '185'),
(10, 8, 0, NULL, 6, '129', '499'),
(10, 8, 0, NULL, 7, '129', '499'),
(10, 8, 0, NULL, 8, '129', '499'),
(10, 8, 0, NULL, 14, '129', '499'),
(10, 8, 0, NULL, 74, '69', '445'),
(10, 8, 0, NULL, 75, '47', '379'),
(10, 8, 0, NULL, 76, '129', '499'),
(10, 8, 0, 24, 78, '57', '493'),
(10, 8, 0, NULL, 81, '67', '506'),
(10, 8, 0, NULL, 83, '26', '393'),
(11, 11, 0, NULL, 6, '259', '464'),
(11, 11, 0, NULL, 7, '259', '464'),
(11, 11, 0, NULL, 8, '259', '464'),
(11, 11, 0, NULL, 14, '259', '464'),
(11, 11, 0, NULL, 74, '259', '464'),
(11, 11, 0, NULL, 75, '259', '464'),
(11, 11, 0, NULL, 76, '259', '464'),
(11, 11, 0, NULL, 78, '322', '498'),
(11, 11, 0, NULL, 83, '259', '464'),
(12, 12, 0, NULL, 6, '259', '89'),
(12, 12, 0, NULL, 7, '259', '89'),
(12, 12, 0, NULL, 8, '259', '89'),
(12, 12, 0, NULL, 14, '259', '89'),
(12, 12, 0, NULL, 76, '259', '89'),
(12, 12, 0, NULL, 78, '259', '89'),
(13, 13, 0, NULL, 6, '219', '509'),
(13, 13, 0, NULL, 7, '327', '513'),
(13, 13, 0, NULL, 8, '219', '509'),
(13, 13, 0, NULL, 14, '219', '509'),
(13, 13, 0, NULL, 76, '219', '509'),
(13, 13, 0, 2, 78, '128', '517'),
(14, 14, 0, NULL, 6, '219', '44'),
(14, 14, 0, NULL, 7, '219', '44'),
(14, 14, 0, NULL, 8, '219', '44'),
(14, 14, 0, NULL, 14, '219', '44'),
(14, 14, 0, NULL, 76, '219', '44'),
(14, 14, 0, NULL, 78, '219', '44'),
(15, 15, 0, NULL, 6, '23', '122'),
(15, 15, 0, NULL, 7, '199', '339'),
(15, 15, 0, NULL, 8, '199', '339'),
(15, 15, 0, NULL, 14, '199', '339'),
(15, 15, 0, NULL, 76, '199', '339'),
(15, 15, 0, 11, 78, '199', '339'),
(16, 5, 15, NULL, 1, '220', '210'),
(16, 16, 0, NULL, 6, '199', '214'),
(16, 16, 0, NULL, 7, '199', '214'),
(16, 16, 0, NULL, 8, '199', '214'),
(16, 16, 0, NULL, 14, '199', '214'),
(16, 16, 0, NULL, 76, '118', '194'),
(16, 16, 0, NULL, 78, '199', '214'),
(17, 17, 0, NULL, 7, '149', '389'),
(17, 17, 0, NULL, 14, '149', '389'),
(17, 17, 0, NULL, 76, '149', '389'),
(17, 17, 0, 11, 78, '149', '389'),
(18, 18, 0, NULL, 7, '149', '164'),
(18, 18, 0, NULL, 14, '149', '164'),
(18, 18, 0, NULL, 76, '65', '146'),
(18, 18, 0, 22, 78, '149', '164'),
(22, 22, NULL, 1, 1, '249', '300'),
(23, 9, 10, 1, 1, '100', '300');

-- --------------------------------------------------------

--
-- Table structure for table `waiter`
--

CREATE TABLE `waiter` (
  `idWaiter` int(11) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `password` varchar(8) DEFAULT NULL,
  `Restaurant_idRestaurant` int(11) DEFAULT NULL,
  `email` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `waiter`
--

INSERT INTO `waiter` (`idWaiter`, `name`, `password`, `Restaurant_idRestaurant`, `email`) VALUES
(1, 'Pavle', 'paw', 1111, 'sssss@gmail.com'),
(2, 'Jovan', 'YxmM885D', 1111, 'la'),
(11, 'Petar', 'qdCr31Mz', 1111, ''),
(22, 'Stefan', 'rT5Ipn4c', 1111, ''),
(24, 'Mitar', 'q7eFmgYf', 1111, 'Pqkistatla'),
(25, 'Cale', '3VafPiy6', 1111, 'Pstojanovic000@gmail.com'),
(28, 'Andrija', '3aezrXM5', 1111, 'Jovananikolicdd98@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `wedding`
--

CREATE TABLE `wedding` (
  `idWedding` int(11) NOT NULL,
  `password` varchar(10) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `buffet` tinyint(1) DEFAULT NULL,
  `BrideAndGroom_idBrideAndGroom` int(11) DEFAULT NULL,
  `Hostess_idHostess` int(11) DEFAULT NULL,
  `priceRange` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `wedding`
--

INSERT INTO `wedding` (`idWedding`, `password`, `date`, `buffet`, `BrideAndGroom_idBrideAndGroom`, `Hostess_idHostess`, `priceRange`) VALUES
(1, 'ij9', '2019-06-15', 1, 1, 2, 'skupo'),
(4, 'perg', '2019-04-01', 0, 4, NULL, ''),
(5, 'jay', '2019-05-30', 1, 16, NULL, 'skupo'),
(6, 'kahdj', NULL, 1, 31, NULL, 'skupo'),
(7, '9S6NuqP2', '2019-05-27', 1, 8, NULL, 'skupo'),
(8, '5P5q2G1y', '2019-05-27', 1, 41, NULL, 'osnovno'),
(14, 'ZihamQoD', '0000-00-00', 0, 90, NULL, 'osnovni'),
(15, 'dbmgZK1j', '0000-00-00', 0, 90, NULL, 'osnovni'),
(16, 'Qf1a5dqe', '0000-00-00', 0, 90, NULL, 'osnovni'),
(17, 'uMJ1XfZr', '0000-00-00', 0, 90, NULL, 'osnovni'),
(18, 'qOglvubI', '0000-00-00', 0, 90, NULL, 'osnovni'),
(20, 'kCggwzC9', '2019-06-08', 1, 77, NULL, 'osnovni'),
(21, 'h790KXSh', '2019-06-08', 1, 77, NULL, 'gold'),
(22, 'vx6ebxo2', '2019-06-08', 1, 77, NULL, 'platinum'),
(23, 'cAg4GKcq', '2019-06-08', 1, 77, NULL, 'gold'),
(26, 'AoXPqPtA', '0000-00-00', 1, 77, NULL, 'gold'),
(27, 'QDv9PEvH', '0000-00-00', 1, 77, NULL, 'gold'),
(28, 'XwwsivS0', '0000-00-00', 1, 77, NULL, 'gold'),
(29, 'QjJqVs2w', '0000-00-00', 1, 77, NULL, 'gold'),
(30, '9B70Lzi6', '0000-00-00', 1, 77, NULL, 'gold'),
(31, 'hZl8XRQ9', '0000-00-00', 1, 77, NULL, 'platinum'),
(32, 'rG6ObUGE', '0000-00-00', 1, 77, NULL, 'premium'),
(34, '8qG8UtKZ', '0000-00-00', 0, 77, NULL, 'platinum'),
(35, 'QyChbm6o', '0000-00-00', 0, 77, NULL, 'platinum'),
(36, 'SDnpeM9m', '0000-00-00', 0, 77, NULL, 'platinum'),
(37, 'NJ8gawjN', '0000-00-00', 0, 77, NULL, 'premium'),
(39, 'WFQESHQk', '0000-00-00', 0, 77, NULL, 'premium'),
(40, 'rWLQM9yd', '0000-00-00', 0, 77, NULL, 'premium'),
(41, 'NLT6asbi', '0000-00-00', 0, 77, NULL, 'premium'),
(42, '4E8RZVhm', '0000-00-00', 0, 94, NULL, 'gold'),
(43, 'U7q4OsSH', '0000-00-00', 0, 94, NULL, 'gold'),
(44, 'vjvgA0mH', '0000-00-00', 1, 94, NULL, 'gold'),
(45, 'eILk0lDZ', '0000-00-00', 0, 94, NULL, 'gold'),
(46, 's8hGgKdX', '2019-06-08', 0, 94, NULL, 'osnovni'),
(47, '85pdMVuW', '2019-06-08', 0, 94, NULL, 'osnovni'),
(48, 'qXjFmWRI', '0000-00-00', 0, 94, NULL, 'osnovni'),
(49, 'dfMNJmEY', '0000-00-00', 0, 96, NULL, 'gold'),
(50, '7LAYPb23', '2019-06-08', 0, 96, NULL, 'osnovni'),
(51, 'LarX5WaO', '2019-06-08', 0, 96, NULL, 'gold'),
(52, 'j5s9x0J7', '0000-00-00', 0, 98, NULL, 'platinum'),
(53, '1f6savSh', '2022-04-14', 0, 108, NULL, 'platinum'),
(54, 'moknfM65', '2019-08-10', 0, 110, NULL, 'gold'),
(55, 'T1wrcFPu', '2022-01-09', 0, 113, NULL, 'osnovni'),
(56, 'hpTsKpy6', '2019-09-07', 0, 114, NULL, 'gold'),
(59, 'LkPhVEiP', '2019-05-19', 0, 137, NULL, 'osnovni'),
(60, 'm4bNYoop', '2019-08-15', 0, 77, NULL, 'osnovni'),
(61, 'oz5in97K', '2019-06-15', 0, 77, NULL, 'osnovni'),
(62, 'ShiwESWw', '2019-06-18', 0, 77, NULL, 'osnovni'),
(63, 'm248MMLp', '2019-09-21', 0, 77, NULL, 'osnovni'),
(64, 'J8qoVXSk', '2019-01-21', 0, 77, NULL, 'osnovni'),
(65, 'io75FIYF', '2019-06-20', 0, 77, NULL, 'osnovni'),
(66, 'bCIvYHLH', '2019-08-02', 0, 77, NULL, 'osnovni'),
(67, 'fatLHRtN', '2019-08-02', 0, 77, NULL, 'osnovni'),
(68, 'VnM5l66E', '2019-03-02', 0, 77, NULL, 'osnovni'),
(69, 'BxjcxGaS', '2019-07-20', 0, 77, NULL, 'osnovni'),
(70, '0Fgv43oZ', '2021-08-14', 0, 145, NULL, 'osnovni'),
(71, '9BuQY9Ec', '2021-06-12', 0, 159, NULL, 'platinum'),
(72, 'urqriz7L', '2019-11-12', 0, 160, NULL, 'gold'),
(73, 'hNp733mq', '2019-09-12', 0, 161, NULL, 'gold'),
(74, 'NZ5iWRg1', '2019-10-12', 0, 162, NULL, 'premium'),
(75, 'TTFJbgTf', '2017-09-15', 0, 163, NULL, 'osnovni'),
(76, 'r2jNMiKw', '2022-10-12', 0, 164, NULL, 'gold'),
(77, '8SDn8ahT', '2019-09-12', 0, 165, NULL, 'osnovni'),
(78, 'Rab0dOSN', '2019-06-14', 0, 166, NULL, 'gold'),
(79, 'OCUFFCdv', '2019-06-12', 0, 168, NULL, 'platinum'),
(80, 'ZLq7P0Vg', '2019-06-12', 0, 169, NULL, 'osnovni'),
(81, 'cIjoAmpU', '2019-09-26', 0, 177, NULL, 'gold'),
(83, 'KzMjI4tG', '2019-06-13', 0, 179, NULL, 'gold');

-- --------------------------------------------------------

--
-- Table structure for table `weddingdesert`
--

CREATE TABLE `weddingdesert` (
  `Desert_name` varchar(20) NOT NULL,
  `Wedding_idWedding` int(11) NOT NULL,
  `count` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `weddingmaincourse`
--

CREATE TABLE `weddingmaincourse` (
  `MainCourse_name` varchar(20) NOT NULL,
  `Wedding_idWedding` int(11) NOT NULL,
  `count` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `weddingstarter`
--

CREATE TABLE `weddingstarter` (
  `Starter_name` varchar(20) NOT NULL,
  `Wedding_idWedding` int(11) NOT NULL,
  `count` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brideandgroom`
--
ALTER TABLE `brideandgroom`
  ADD PRIMARY KEY (`idBrideAndGroom`),
  ADD UNIQUE KEY `idBrideAndGroom` (`idBrideAndGroom`);

--
-- Indexes for table `desert`
--
ALTER TABLE `desert`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`),
  ADD KEY `fk_Desert_Restaurant1_idx` (`Restaurant_idRestaurant`);

--
-- Indexes for table `family`
--
ALTER TABLE `family`
  ADD PRIMARY KEY (`id`,`Wedding_idWedding`) USING BTREE,
  ADD KEY `fk_Family_Tables_has_Wedding1_idx` (`Tables_has_Wedding_Tables_idTable`,`Tables_has_Wedding_Wedding_idWedding`),
  ADD KEY `fk_Family_Wedding1_idx` (`Wedding_idWedding`);

--
-- Indexes for table `hostess`
--
ALTER TABLE `hostess`
  ADD PRIMARY KEY (`idHostess`),
  ADD UNIQUE KEY `idHostess` (`idHostess`),
  ADD KEY `fk_Hostess_Restaurant1_idx` (`Restaurant_idRestaurant`);

--
-- Indexes for table `maincourse`
--
ALTER TABLE `maincourse`
  ADD PRIMARY KEY (`name`),
  ADD KEY `fk_MainCourse_Restaurant1_idx` (`Restaurant_idRestaurant`);

--
-- Indexes for table `manager`
--
ALTER TABLE `manager`
  ADD PRIMARY KEY (`password`,`Restaurant_idRestaurant`),
  ADD KEY `fk_Menadzer_Restaurant1_idx` (`Restaurant_idRestaurant`);

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`idMember`,`FamilyMemberId`,`Family_Wedding_idWedding`) USING BTREE,
  ADD KEY `fk_Member_MainCourse1_idx` (`MainCourse_name`),
  ADD KEY `fk_Member_Desert1_idx` (`Desert_name`),
  ADD KEY `fk_Member_Starter1_idx` (`Starter_name`),
  ADD KEY `fk_Member_Family` (`FamilyMemberId`,`Family_Wedding_idWedding`) USING BTREE;

--
-- Indexes for table `restaurant`
--
ALTER TABLE `restaurant`
  ADD PRIMARY KEY (`idRestaurant`);

--
-- Indexes for table `starter`
--
ALTER TABLE `starter`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`),
  ADD KEY `fk_Starter_Restaurant1_idx` (`Restaurant_idRestaurant`);

--
-- Indexes for table `tables`
--
ALTER TABLE `tables`
  ADD PRIMARY KEY (`idTable`),
  ADD KEY `fk_Tables_Restaurant1_idx` (`Restaurant_idRestaurant`);

--
-- Indexes for table `tables_has_wedding`
--
ALTER TABLE `tables_has_wedding`
  ADD PRIMARY KEY (`Tables_idTable`,`Wedding_idWedding`),
  ADD KEY `fk_Stolovi_has_Svadba_Waiter1_idx` (`Waiter_idWaiter`),
  ADD KEY `fk_Tables_has_Svadba_Tables1_idx` (`Tables_idTable`),
  ADD KEY `fk_Tables_has_Svadba_Wedding1_idx` (`Wedding_idWedding`);

--
-- Indexes for table `waiter`
--
ALTER TABLE `waiter`
  ADD PRIMARY KEY (`idWaiter`),
  ADD UNIQUE KEY `idWaiter` (`idWaiter`),
  ADD KEY `fk_Waiter_Restaurant1_idx` (`Restaurant_idRestaurant`);

--
-- Indexes for table `wedding`
--
ALTER TABLE `wedding`
  ADD PRIMARY KEY (`idWedding`),
  ADD UNIQUE KEY `idWedding` (`idWedding`),
  ADD KEY `fk_Wedding_BrideAndGroom1_idx` (`BrideAndGroom_idBrideAndGroom`),
  ADD KEY `fk_Wedding_Hostess1_idx` (`Hostess_idHostess`);

--
-- Indexes for table `weddingdesert`
--
ALTER TABLE `weddingdesert`
  ADD PRIMARY KEY (`Desert_name`,`Wedding_idWedding`),
  ADD KEY `fk_Desert_has_Wedding_Wedding1_idx` (`Wedding_idWedding`),
  ADD KEY `fk_Desert_has_Wedding_Desert1_idx` (`Desert_name`);

--
-- Indexes for table `weddingmaincourse`
--
ALTER TABLE `weddingmaincourse`
  ADD PRIMARY KEY (`MainCourse_name`,`Wedding_idWedding`),
  ADD KEY `fk_MainCourse_has_Wedding_Wedding1_idx` (`Wedding_idWedding`),
  ADD KEY `fk_MainCourse_has_Wedding_MainCourse1_idx` (`MainCourse_name`);

--
-- Indexes for table `weddingstarter`
--
ALTER TABLE `weddingstarter`
  ADD PRIMARY KEY (`Starter_name`,`Wedding_idWedding`),
  ADD KEY `fk_Starter_has_Wedding_Wedding1_idx` (`Wedding_idWedding`),
  ADD KEY `fk_Starter_has_Wedding_Starter1_idx` (`Starter_name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brideandgroom`
--
ALTER TABLE `brideandgroom`
  MODIFY `idBrideAndGroom` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=180;

--
-- AUTO_INCREMENT for table `family`
--
ALTER TABLE `family`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=153;

--
-- AUTO_INCREMENT for table `hostess`
--
ALTER TABLE `hostess`
  MODIFY `idHostess` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=117;

--
-- AUTO_INCREMENT for table `member`
--
ALTER TABLE `member`
  MODIFY `idMember` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=127;

--
-- AUTO_INCREMENT for table `restaurant`
--
ALTER TABLE `restaurant`
  MODIFY `idRestaurant` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1112;

--
-- AUTO_INCREMENT for table `tables`
--
ALTER TABLE `tables`
  MODIFY `idTable` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `waiter`
--
ALTER TABLE `waiter`
  MODIFY `idWaiter` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `wedding`
--
ALTER TABLE `wedding`
  MODIFY `idWedding` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `desert`
--
ALTER TABLE `desert`
  ADD CONSTRAINT `fk_Desert_Restaurant1` FOREIGN KEY (`Restaurant_idRestaurant`) REFERENCES `restaurant` (`idRestaurant`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `family`
--
ALTER TABLE `family`
  ADD CONSTRAINT `fk_Family_Tables_has_Wedding1` FOREIGN KEY (`Tables_has_Wedding_Tables_idTable`,`Tables_has_Wedding_Wedding_idWedding`) REFERENCES `tables_has_wedding` (`Tables_idTable`, `Wedding_idWedding`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Family_Wedding1` FOREIGN KEY (`Wedding_idWedding`) REFERENCES `wedding` (`idWedding`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `hostess`
--
ALTER TABLE `hostess`
  ADD CONSTRAINT `fk_Hostess_Restaurant1` FOREIGN KEY (`Restaurant_idRestaurant`) REFERENCES `restaurant` (`idRestaurant`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `maincourse`
--
ALTER TABLE `maincourse`
  ADD CONSTRAINT `fk_MainCourse_Restaurant1` FOREIGN KEY (`Restaurant_idRestaurant`) REFERENCES `restaurant` (`idRestaurant`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `manager`
--
ALTER TABLE `manager`
  ADD CONSTRAINT `fk_Menadzer_Restaurant1` FOREIGN KEY (`Restaurant_idRestaurant`) REFERENCES `restaurant` (`idRestaurant`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `member`
--
ALTER TABLE `member`
  ADD CONSTRAINT `fk_Member_Desert1` FOREIGN KEY (`Desert_name`) REFERENCES `desert` (`name`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Member_MainCourse1` FOREIGN KEY (`MainCourse_name`) REFERENCES `maincourse` (`name`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Member_Starter1` FOREIGN KEY (`Starter_name`) REFERENCES `starter` (`name`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `starter`
--
ALTER TABLE `starter`
  ADD CONSTRAINT `fk_Starter_Restaurant1` FOREIGN KEY (`Restaurant_idRestaurant`) REFERENCES `restaurant` (`idRestaurant`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `tables`
--
ALTER TABLE `tables`
  ADD CONSTRAINT `fk_Tables_Restaurant1` FOREIGN KEY (`Restaurant_idRestaurant`) REFERENCES `restaurant` (`idRestaurant`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `tables_has_wedding`
--
ALTER TABLE `tables_has_wedding`
  ADD CONSTRAINT `fk_Stolovi_has_Svadba_Waiter1` FOREIGN KEY (`Waiter_idWaiter`) REFERENCES `waiter` (`idWaiter`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Tables_has_Svadba_Tables1` FOREIGN KEY (`Tables_idTable`) REFERENCES `tables` (`idTable`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Tables_has_Svadba_Wedding1` FOREIGN KEY (`Wedding_idWedding`) REFERENCES `wedding` (`idWedding`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `waiter`
--
ALTER TABLE `waiter`
  ADD CONSTRAINT `fk_Waiter_Restaurant1` FOREIGN KEY (`Restaurant_idRestaurant`) REFERENCES `restaurant` (`idRestaurant`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `wedding`
--
ALTER TABLE `wedding`
  ADD CONSTRAINT `fk_Wedding_BrideAndGroom1` FOREIGN KEY (`BrideAndGroom_idBrideAndGroom`) REFERENCES `brideandgroom` (`idBrideAndGroom`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Wedding_Hostess1` FOREIGN KEY (`Hostess_idHostess`) REFERENCES `hostess` (`idHostess`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `weddingdesert`
--
ALTER TABLE `weddingdesert`
  ADD CONSTRAINT `fk_Desert_has_Wedding_Desert1` FOREIGN KEY (`Desert_name`) REFERENCES `desert` (`name`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Desert_has_Wedding_Wedding1` FOREIGN KEY (`Wedding_idWedding`) REFERENCES `wedding` (`idWedding`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `weddingmaincourse`
--
ALTER TABLE `weddingmaincourse`
  ADD CONSTRAINT `fk_MainCourse_has_Wedding_MainCourse1` FOREIGN KEY (`MainCourse_name`) REFERENCES `maincourse` (`name`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_MainCourse_has_Wedding_Wedding1` FOREIGN KEY (`Wedding_idWedding`) REFERENCES `wedding` (`idWedding`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `weddingstarter`
--
ALTER TABLE `weddingstarter`
  ADD CONSTRAINT `fk_Starter_has_Wedding_Starter1` FOREIGN KEY (`Starter_name`) REFERENCES `starter` (`name`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Starter_has_Wedding_Wedding1` FOREIGN KEY (`Wedding_idWedding`) REFERENCES `wedding` (`idWedding`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
