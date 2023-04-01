-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: knjigomat
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `message`
--

DROP TABLE IF EXISTS `message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `message` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sender_id` int NOT NULL,
  `receiver_id` int NOT NULL,
  `text` varchar(160) NOT NULL,
  `created_time` timestamp NOT NULL,
  `chat_id` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_message_user1_idx` (`sender_id`),
  KEY `fk_message_user2_idx` (`receiver_id`),
  CONSTRAINT `fk_message_user1` FOREIGN KEY (`sender_id`) REFERENCES `user` (`id`),
  CONSTRAINT `fk_message_user2` FOREIGN KEY (`receiver_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `message`
--

LOCK TABLES `message` WRITE;
/*!40000 ALTER TABLE `message` DISABLE KEYS */;
INSERT INTO `message` VALUES (1,105,104,'idemooo gaaas','2023-03-10 15:26:37','105104'),(2,105,104,'aloeeee','2023-03-10 15:26:50','105104'),(3,105,104,'aloeeee','2023-03-10 15:27:23','105104'),(4,105,105,'familiobe','2023-03-11 20:34:19','105105'),(5,105,105,'familiobe','2023-03-11 20:34:41','105105'),(6,105,104,'familiobe','2023-03-11 21:54:24','105#104'),(7,105,104,'test poruka 105 receiver','2023-03-11 22:04:04','105#104'),(8,104,105,'test 3 poruka 105 receiver','2023-03-11 22:14:39','105#104'),(9,106,105,'poruka za 105 od 106','2023-03-11 22:45:06','106#105'),(10,106,104,'poruka jelenaaa od 106','2023-03-11 22:45:22','106#104'),(42,105,104,'alobree','2023-03-29 23:16:45','105#104'),(43,105,104,'assdasd','2023-03-29 23:17:02','105#104'),(44,105,104,'alobreee','2023-03-29 23:21:02','105#104'),(45,105,104,'asfaf','2023-03-29 23:22:32','105#104'),(46,105,104,'assfas','2023-03-29 23:22:40','105#104'),(47,105,104,'asdasfaf','2023-03-29 23:22:48','105#104'),(48,105,104,'s','2023-03-29 23:26:09','105#104'),(49,105,104,'a','2023-03-29 23:26:12','105#104'),(50,105,104,'fff','2023-03-29 23:26:15','105#104'),(51,105,104,'aas','2023-03-29 23:30:05','105#104'),(52,105,104,'asffas','2023-03-29 23:30:08','105#104'),(53,105,104,'sdasf','2023-03-29 23:36:04','105#104'),(54,105,104,'da','2023-03-29 23:40:45','105#104'),(55,105,104,'as','2023-03-29 23:42:02','105#104'),(56,105,104,'asdasf','2023-03-29 23:44:44','105#104'),(57,105,104,'asffas','2023-03-29 23:44:47','105#104'),(58,106,105,'asfasfasd','2023-03-29 23:45:23','106#105'),(59,106,105,'de si bradonja moj debeliii','2023-03-29 23:45:33','106#105'),(60,106,105,'asfasdasfasd','2023-03-29 23:45:40','106#105'),(61,106,104,'de si jekooo','2023-03-29 23:50:44','106#104'),(62,106,105,'asdasf','2023-03-29 23:50:47','106#105'),(63,106,105,'fasfagasdasd','2023-03-29 23:50:50','106#105'),(64,106,105,'gasdasdagafdsad','2023-03-29 23:50:53','106#105'),(65,106,105,'fasdgfagffdasdsa','2023-03-29 23:50:56','106#105'),(66,106,105,'fasadsad','2023-03-29 23:50:59','106#105'),(67,106,105,'RADI JEBENI CHAT','2023-03-29 23:54:19','106#105'),(68,106,105,'asafas','2023-03-29 23:55:24','106#105'),(69,105,106,'dasafssad','2023-03-29 23:58:28','106#105'),(70,105,106,'radi konverzacija','2023-03-29 23:58:39','106#105'),(71,105,106,'asda','2023-03-29 23:58:45','106#105'),(72,105,104,'brate','2023-03-30 09:58:42','105#104');
/*!40000 ALTER TABLE `message` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-01 16:32:17
