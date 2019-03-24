-- MySQL dump 10.13  Distrib 8.0.15, for osx10.14 (x86_64)
--
-- Host: localhost    Database: meteo-api
-- ------------------------------------------------------
-- Server version	8.0.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `meteo-api`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `meteo-api` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;

USE `meteo-api`;

--
-- Table structure for table `meteo_stations`
--

DROP TABLE IF EXISTS `meteo_stations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `meteo_stations` (
  `airTemperature` double DEFAULT NULL,
  `alarm` int(11) DEFAULT NULL,
  `devPoint` double DEFAULT NULL,
  `district` text COLLATE utf8mb4_general_ci,
  `freezTemperature` double DEFAULT NULL,
  `gid` text COLLATE utf8mb4_general_ci,
  `humidity` double DEFAULT NULL,
  `id` int(11) NOT NULL,
  `lastUpdated` bigint(20) DEFAULT NULL,
  `lat` double DEFAULT NULL,
  `lng` double DEFAULT NULL,
  `mark` text COLLATE utf8mb4_general_ci,
  `name` text COLLATE utf8mb4_general_ci,
  `prec` int(11) DEFAULT NULL,
  `prectype` int(11) DEFAULT NULL,
  `prefix` text COLLATE utf8mb4_general_ci,
  `roadTemperature` double DEFAULT NULL,
  `roadWet` text COLLATE utf8mb4_general_ci,
  `sgid` int(11) DEFAULT NULL,
  `spray` text COLLATE utf8mb4_general_ci,
  `sprayProgram` text COLLATE utf8mb4_general_ci,
  `street` text COLLATE utf8mb4_general_ci,
  `tankLevel` text COLLATE utf8mb4_general_ci,
  `technology` text COLLATE utf8mb4_general_ci,
  `tmsAlarm` int(11) DEFAULT NULL,
  `windDirection` int(11) DEFAULT NULL,
  `windSpeed` double DEFAULT NULL,
  `location` point DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meteo_stations`
--

LOCK TABLES `meteo_stations` WRITE;
/*!40000 ALTER TABLE `meteo_stations` DISABLE KEYS */;
INSERT INTO `meteo_stations` VALUES (13.01,0,-2.59,NULL,0,NULL,33.81,531801,1553165691000,50.03993,14.405042,NULL,'1-Barrandov',2,2,NULL,22.34,NULL,1,NULL,'0',NULL,'75.85','Boschung',0,175,0.83,_binary '\Ê\0\0\0\0\0åmI@K?™a\œ,@'),(11.65,0,-4.37,NULL,0,NULL,32.37,531802,1553165549000,50.085625,14.436838,NULL,'2-Bulhar',0,0,NULL,23.71,NULL,1,NULL,'0',NULL,'79.66','Boschung',0,215,2.69,_binary '\Ê\0\0\0\0\0)\\è\¬\ı\nI@\”L\˜:©\ﬂ,@'),(12.21,0,-3.57,NULL,0,NULL,33.13,531803,1553165567000,50.04036,14.470484,NULL,'3-Spo≈ôilov',0,0,NULL,23.32,NULL,1,NULL,NULL,NULL,NULL,'Boschung',0,120,0.66,_binary '\Ê\0\0\0\0\0Ö8Ñ*I@!ïbG\„\,@'),(10.5,0,-2.83,NULL,0,NULL,39.21,531804,1553165571000,50.02543,14.619888,NULL,'4-Uh≈ô√≠nƒõves',0,0,NULL,25.56,NULL,1,NULL,NULL,NULL,NULL,'Boschung',0,35,1.49,_binary '\Ê\0\0\0\0\0,+MJAI@û]æ\ıa=-@'),(11.25,0,-1.31,NULL,0,NULL,41.72,531805,1553165576000,50.054466,14.289665,NULL,'5-Zliƒç√≠n',0,0,NULL,27.51,NULL,1,NULL,NULL,NULL,NULL,'Boschung',0,250,0.32,_binary '\Ê\0\0\0\0\09_\ÏΩ¯I@xóã¯Nî,@'),(12.6,0,-2.15,NULL,0,NULL,35.89,531806,1553165555000,50.072468,14.398088,NULL,'6-SAT JIH',0,0,NULL,27.86,NULL,1,NULL,'0',NULL,'42.14','Boschung',0,130,0,_binary '\Ê\0\0\0\0\0\÷\0•°F	I@/‹π0\“\À,@'),(10.4,0,-3.26,NULL,0,NULL,38.21,531807,1553165628000,50.08843,14.38286,NULL,'7-SAT Sever',0,0,NULL,24.51,NULL,1,NULL,NULL,NULL,NULL,'Boschung',0,180,1.2,_binary '\Ê\0\0\0\0\0˛ö¨QI@§\‰\’9\ƒ,@'),(11.3,0,-3.44,NULL,0,NULL,35.5,531808,1553165632000,50.09226,14.533048,NULL,'8-Kyje',0,0,NULL,23.19,NULL,1,NULL,NULL,NULL,NULL,'Boschung',0,100,0.66,_binary '\Ê\0\0\0\0\0O]˘,\œI@|eﬁ™\Î-@'),(11.35,0,-2.81,NULL,0,NULL,37.08,531809,1553165697000,50.147495,14.494033,NULL,'9-C√≠noveck√°',0,0,NULL,24.07,NULL,1,NULL,NULL,NULL,NULL,'Boschung',0,160,0.34,_binary '\Ê\0\0\0\0\0i©º\·I@J¥\‰\Ò¸,@'),(12.96,0,-3.9,NULL,0,NULL,30.76,531810,1553165702000,49.994545,14.397537,NULL,'10-Lahovice',0,0,NULL,27.12,NULL,1,NULL,NULL,NULL,NULL,'Boschung',0,100,0.24,_binary '\Ê\0\0\0\0\0>≥$@MˇH@`\Ê;¯â\À,@'),(10.72,0,-2.99,NULL,0,NULL,38.18,531811,1553165636000,50.09355,14.304239,NULL,'11-Evropsk√°',0,0,NULL,25.73,NULL,1,NULL,NULL,NULL,NULL,'Boschung',0,135,0.61,_binary '\Ê\0\0\0\0\09EGr˘I@\„U\÷6≈õ,@'),(12.7,0,-2.39,NULL,0,NULL,35.03,531812,1553165666000,50.12508,14.614628,NULL,'12-Novopack√°',0,0,NULL,0,NULL,1,NULL,NULL,NULL,NULL,'Boschung',0,15,0,_binary '\Ê\0\0\0\0\0±üI@jinÖ∞:-@'),(10.03,0,-2.72,NULL,0,NULL,40.75,531813,1553165670000,49.995377,14.487074,NULL,'13-V√≠de≈àsk√°',0,0,NULL,24.46,NULL,1,NULL,NULL,NULL,NULL,'Boschung',0,160,0.59,_binary '\Ê\0\0\0\0\0ewÉhˇH@ºvi\√a˘,@'),(13.33,0,-3.06,NULL,0,NULL,31.98,531814,1553165675000,50.061203,14.50805,NULL,'14-Mitas',0,0,NULL,23.22,NULL,1,NULL,'0',NULL,'87.21','Boschung',0,105,0.54,_binary '\Ê\0\0\0\0\0cµ˘\’I@2w-!-@'),(10.94,0,-3.95,NULL,0,NULL,35.01,531815,1553165561000,50.113033,14.4971485,NULL,'15-Vysoƒçansk√°',0,0,NULL,27.54,NULL,1,NULL,'0',NULL,'49.17','Boschung',0,90,1.05,_binary '\Ê\0\0\0\0\04/á\›wI@ÀÇâ?ä˛,@'),(11.18,0,-2.33,NULL,0,NULL,38.87,531816,1553165706000,50.13843,14.365521,NULL,'16-Kam√Ωck√°',0,0,NULL,26.39,NULL,1,NULL,NULL,NULL,NULL,'Boschung',0,286,0.2,_binary '\Ê\0\0\0\0\0Ñd∏I@ü\0äë%ª,@'),(10.84,0,-2.87,NULL,0,NULL,38.21,531817,1553165392000,50.023476,14.353694,NULL,'17-Slivenec',0,0,NULL,24.39,NULL,1,NULL,NULL,NULL,NULL,'Boschung',0,235,0.49,_binary '\Ê\0\0\0\0\0\÷\ˆBI@6ïEaµ,@'),(12.6,0,NULL,NULL,0,NULL,NULL,531818,1553165504000,50.0712,14.39848,NULL,'18-SAT JIH II',0,0,NULL,19.46,NULL,1,NULL,NULL,NULL,NULL,'Boschung',0,NULL,NULL,_binary '\Ê\0\0\0\0\0”º\„	I@\\8í\Ã,@'),(13.48,0,-2.43,NULL,0,NULL,33.2,531819,1553165464000,50.081043,14.597582,NULL,'19-Bƒõchovice',0,0,NULL,27.54,NULL,1,NULL,NULL,NULL,NULL,'Boschung',0,60,0.15,_binary '\Ê\0\0\0\0\0\ÌH\ıù_\nI@F[ïD\ˆ1-@'),(12.52,0,-1.73,NULL,0,NULL,37.21,531820,1553165468000,50.144413,14.432528,NULL,'20-ƒåimick√°',0,0,NULL,22.41,NULL,1,NULL,NULL,NULL,NULL,'Boschung',0,0,0.05,_binary '\Ê\0\0\0\0\0 |I@e5]Ot\›,@'),(16.99,0,9.97,NULL,0,NULL,63.45,531821,1398174489000,50.097874,14.474548,NULL,'21-Krejc√°rek',0,0,NULL,25.05,NULL,1,NULL,'0',NULL,'99.98','Boschung',1,165,0.59,_binary '\Ê\0\0\0\0\0yêû\"áI@±√ò\Ù\˜\Ú,@');
/*!40000 ALTER TABLE `meteo_stations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-03-24 19:05:08
