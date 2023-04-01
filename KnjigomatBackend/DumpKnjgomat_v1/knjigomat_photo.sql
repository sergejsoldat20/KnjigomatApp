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
-- Table structure for table `photo`
--

DROP TABLE IF EXISTS `photo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `photo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `photo_url` varchar(100) NOT NULL,
  `post_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_photo_post1_idx` (`post_id`),
  CONSTRAINT `fk_photo_post1` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=103 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photo`
--

LOCK TABLES `photo` WRITE;
/*!40000 ALTER TABLE `photo` DISABLE KEYS */;
INSERT INTO `photo` VALUES (1,'http://dummyimage.com/138x100.png/ff4444/ffffff',1),(2,'http://dummyimage.com/105x100.png/dddddd/000000',2),(3,'http://dummyimage.com/237x100.png/5fa2dd/ffffff',3),(4,'http://dummyimage.com/123x100.png/cc0000/ffffff',4),(5,'http://dummyimage.com/182x100.png/dddddd/000000',5),(6,'http://dummyimage.com/186x100.png/cc0000/ffffff',6),(7,'http://dummyimage.com/228x100.png/ff4444/ffffff',7),(8,'http://dummyimage.com/187x100.png/dddddd/000000',8),(9,'http://dummyimage.com/191x100.png/cc0000/ffffff',9),(10,'http://dummyimage.com/225x100.png/ff4444/ffffff',10),(11,'http://dummyimage.com/190x100.png/ff4444/ffffff',11),(12,'http://dummyimage.com/202x100.png/5fa2dd/ffffff',12),(13,'http://dummyimage.com/208x100.png/ff4444/ffffff',13),(14,'http://dummyimage.com/182x100.png/ff4444/ffffff',14),(15,'http://dummyimage.com/222x100.png/cc0000/ffffff',15),(16,'http://dummyimage.com/173x100.png/ff4444/ffffff',16),(17,'http://dummyimage.com/245x100.png/5fa2dd/ffffff',17),(18,'http://dummyimage.com/104x100.png/5fa2dd/ffffff',18),(19,'http://dummyimage.com/112x100.png/5fa2dd/ffffff',19),(20,'http://dummyimage.com/222x100.png/5fa2dd/ffffff',20),(21,'http://dummyimage.com/190x100.png/dddddd/000000',21),(22,'http://dummyimage.com/147x100.png/5fa2dd/ffffff',22),(23,'http://dummyimage.com/183x100.png/cc0000/ffffff',23),(24,'http://dummyimage.com/175x100.png/cc0000/ffffff',24),(25,'http://dummyimage.com/112x100.png/dddddd/000000',25),(26,'http://dummyimage.com/218x100.png/cc0000/ffffff',26),(27,'http://dummyimage.com/227x100.png/dddddd/000000',27),(28,'http://dummyimage.com/135x100.png/cc0000/ffffff',28),(29,'http://dummyimage.com/136x100.png/5fa2dd/ffffff',29),(30,'http://dummyimage.com/219x100.png/dddddd/000000',30),(31,'http://dummyimage.com/247x100.png/dddddd/000000',31),(32,'http://dummyimage.com/171x100.png/dddddd/000000',32),(33,'http://dummyimage.com/237x100.png/5fa2dd/ffffff',33),(34,'http://dummyimage.com/210x100.png/ff4444/ffffff',34),(35,'http://dummyimage.com/152x100.png/5fa2dd/ffffff',35),(36,'http://dummyimage.com/117x100.png/ff4444/ffffff',36),(37,'http://dummyimage.com/204x100.png/ff4444/ffffff',37),(38,'http://dummyimage.com/105x100.png/dddddd/000000',38),(39,'http://dummyimage.com/192x100.png/ff4444/ffffff',39),(40,'http://dummyimage.com/103x100.png/ff4444/ffffff',40),(41,'http://dummyimage.com/238x100.png/cc0000/ffffff',41),(42,'http://dummyimage.com/141x100.png/5fa2dd/ffffff',42),(43,'http://dummyimage.com/129x100.png/dddddd/000000',43),(44,'http://dummyimage.com/176x100.png/ff4444/ffffff',44),(45,'http://dummyimage.com/236x100.png/5fa2dd/ffffff',45),(46,'http://dummyimage.com/124x100.png/5fa2dd/ffffff',46),(47,'http://dummyimage.com/188x100.png/5fa2dd/ffffff',47),(48,'http://dummyimage.com/233x100.png/5fa2dd/ffffff',48),(49,'http://dummyimage.com/193x100.png/5fa2dd/ffffff',49),(50,'http://dummyimage.com/110x100.png/5fa2dd/ffffff',50),(51,'http://dummyimage.com/238x100.png/ff4444/ffffff',51),(52,'http://dummyimage.com/135x100.png/cc0000/ffffff',52),(53,'http://dummyimage.com/237x100.png/ff4444/ffffff',53),(54,'http://dummyimage.com/144x100.png/5fa2dd/ffffff',54),(55,'http://dummyimage.com/178x100.png/5fa2dd/ffffff',55),(56,'http://dummyimage.com/207x100.png/dddddd/000000',56),(57,'http://dummyimage.com/148x100.png/5fa2dd/ffffff',57),(58,'http://dummyimage.com/168x100.png/5fa2dd/ffffff',58),(59,'http://dummyimage.com/221x100.png/5fa2dd/ffffff',59),(60,'http://dummyimage.com/149x100.png/5fa2dd/ffffff',60),(61,'http://dummyimage.com/214x100.png/5fa2dd/ffffff',61),(62,'http://dummyimage.com/113x100.png/cc0000/ffffff',62),(63,'http://dummyimage.com/161x100.png/dddddd/000000',63),(64,'http://dummyimage.com/195x100.png/ff4444/ffffff',64),(65,'http://dummyimage.com/119x100.png/5fa2dd/ffffff',65),(66,'http://dummyimage.com/204x100.png/5fa2dd/ffffff',66),(67,'http://dummyimage.com/127x100.png/cc0000/ffffff',67),(68,'http://dummyimage.com/205x100.png/5fa2dd/ffffff',68),(69,'http://dummyimage.com/119x100.png/ff4444/ffffff',69),(70,'http://dummyimage.com/189x100.png/cc0000/ffffff',70),(71,'http://dummyimage.com/216x100.png/cc0000/ffffff',71),(72,'http://dummyimage.com/170x100.png/5fa2dd/ffffff',72),(73,'http://dummyimage.com/129x100.png/cc0000/ffffff',73),(74,'http://dummyimage.com/120x100.png/5fa2dd/ffffff',74),(75,'http://dummyimage.com/198x100.png/cc0000/ffffff',75),(76,'http://dummyimage.com/130x100.png/cc0000/ffffff',76),(77,'http://dummyimage.com/134x100.png/ff4444/ffffff',77),(78,'http://dummyimage.com/236x100.png/5fa2dd/ffffff',78),(79,'http://dummyimage.com/106x100.png/ff4444/ffffff',79),(80,'http://dummyimage.com/235x100.png/ff4444/ffffff',80),(81,'http://dummyimage.com/125x100.png/5fa2dd/ffffff',81),(82,'http://dummyimage.com/158x100.png/ff4444/ffffff',82),(83,'http://dummyimage.com/202x100.png/ff4444/ffffff',83),(84,'http://dummyimage.com/156x100.png/cc0000/ffffff',84),(85,'http://dummyimage.com/244x100.png/5fa2dd/ffffff',85),(86,'http://dummyimage.com/196x100.png/5fa2dd/ffffff',86),(87,'http://dummyimage.com/208x100.png/dddddd/000000',87),(88,'http://dummyimage.com/100x100.png/cc0000/ffffff',88),(89,'http://dummyimage.com/165x100.png/ff4444/ffffff',89),(90,'http://dummyimage.com/103x100.png/cc0000/ffffff',90),(91,'http://dummyimage.com/175x100.png/dddddd/000000',91),(92,'http://dummyimage.com/107x100.png/cc0000/ffffff',92),(93,'http://dummyimage.com/102x100.png/dddddd/000000',93),(94,'http://dummyimage.com/200x100.png/ff4444/ffffff',94),(95,'http://dummyimage.com/201x100.png/ff4444/ffffff',95),(96,'http://dummyimage.com/144x100.png/cc0000/ffffff',96),(97,'http://dummyimage.com/146x100.png/5fa2dd/ffffff',97),(98,'http://dummyimage.com/228x100.png/5fa2dd/ffffff',98),(99,'http://dummyimage.com/134x100.png/ff4444/ffffff',99),(100,'http://dummyimage.com/173x100.png/dddddd/000000',100);
/*!40000 ALTER TABLE `photo` ENABLE KEYS */;
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
