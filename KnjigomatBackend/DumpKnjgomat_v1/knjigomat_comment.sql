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
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `id` int NOT NULL,
  `created_time` timestamp NOT NULL,
  `text` varchar(160) NOT NULL,
  `deleted` tinyint(1) NOT NULL,
  `post_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_comment_post1_idx` (`post_id`),
  KEY `fk_comment_user1_idx` (`user_id`),
  CONSTRAINT `fk_comment_post1` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`),
  CONSTRAINT `fk_comment_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,'2022-04-26 07:06:36','lobortis est phasellus sit amet erat nulla tempus vivamus in',0,17,64),(2,'2022-12-13 22:53:58','morbi odio odio elementum eu interdum eu tincidunt',0,34,28),(3,'2022-08-02 09:05:23','nunc purus phasellus in felis donec',0,11,94),(4,'2022-07-01 11:43:13','a suscipit nulla elit ac',0,36,65),(5,'2022-03-17 23:47:31','suspendisse potenti nullam porttitor lacus at turpis donec',0,50,59),(6,'2023-03-08 09:59:45','sollicitudin mi sit amet lobortis',0,46,41),(7,'2022-11-04 13:40:14','sollicitudin ut suscipit a feugiat et eros',0,71,56),(8,'2022-03-11 03:08:51','in purus eu magna vulputate',0,58,67),(9,'2022-07-15 22:40:17','magna ac consequat metus sapien ut nunc vestibulum',0,52,92),(10,'2022-09-22 00:47:03','suspendisse ornare consequat lectus in est',0,75,76),(11,'2022-08-12 15:09:36','libero nam dui proin leo',0,84,97),(12,'2022-07-17 14:59:33','suscipit ligula in lacus curabitur at ipsum ac',0,54,61),(13,'2022-08-02 14:54:23','nibh quisque id justo sit amet sapien dignissim',0,8,92),(14,'2022-03-23 16:12:07','sociis natoque penatibus et magnis dis parturient montes',0,100,19),(15,'2022-09-20 01:39:24','velit eu est congue elementum in',0,87,80),(16,'2022-10-16 05:45:24','eu nibh quisque id justo sit amet sapien',0,97,24),(17,'2022-08-19 12:49:16','est phasellus sit amet erat nulla tempus vivamus in',0,73,72),(18,'2022-08-15 09:23:05','sem praesent id massa id nisl',0,41,74),(19,'2022-12-14 20:09:55','maecenas tristique est et tempus semper est quam',0,1,82),(20,'2022-03-29 12:30:32','lacus purus aliquet at feugiat',0,41,99),(21,'2022-12-27 04:13:15','dictumst morbi vestibulum velit id pretium iaculis diam erat',0,28,15),(22,'2022-08-02 17:55:46','ante ipsum primis in faucibus orci luctus et ultrices',0,58,25),(23,'2022-09-16 14:48:42','integer tincidunt ante vel ipsum',0,86,75),(24,'2022-08-26 09:14:26','curae donec pharetra magna vestibulum aliquet ultrices erat tortor',0,79,43),(25,'2022-04-11 12:49:28','curae duis faucibus accumsan odio curabitur convallis duis consequat',0,48,28),(26,'2022-12-29 12:41:33','a odio in hac habitasse platea dictumst',0,64,97),(27,'2022-05-31 13:48:07','ipsum primis in faucibus orci luctus et ultrices posuere cubilia',0,9,16),(28,'2022-04-17 19:16:11','vehicula condimentum curabitur in libero ut massa volutpat',0,96,42),(29,'2023-01-07 20:09:47','etiam justo etiam pretium iaculis justo in',0,44,49),(30,'2022-07-28 13:43:08','nascetur ridiculus mus etiam vel',0,76,84),(31,'2022-04-20 06:40:50','cubilia curae nulla dapibus dolor vel est donec odio',0,17,68),(32,'2022-10-01 16:05:43','varius ut blandit non interdum in',0,31,11),(33,'2022-04-13 12:53:08','sodales scelerisque mauris sit amet eros suspendisse accumsan',0,88,9),(34,'2022-10-13 23:44:00','nulla pede ullamcorper augue a suscipit nulla elit ac',0,91,100),(35,'2023-01-11 03:45:50','quisque porta volutpat erat quisque erat eros viverra',0,30,12),(36,'2022-05-22 09:41:38','est risus auctor sed tristique in tempus sit amet sem',0,17,59),(37,'2023-01-09 18:47:14','malesuada in imperdiet et commodo vulputate justo in blandit ultrices',0,63,92),(38,'2022-08-17 06:59:43','fusce congue diam id ornare imperdiet sapien urna pretium nisl',0,25,74),(39,'2022-04-10 21:48:09','semper porta volutpat quam pede lobortis ligula',0,24,9),(40,'2022-06-12 22:37:57','ligula nec sem duis aliquam convallis',0,85,13),(41,'2022-03-22 02:10:39','at ipsum ac tellus semper interdum',0,8,62),(42,'2022-09-01 02:47:52','felis sed lacus morbi sem',0,34,21),(43,'2022-03-26 11:26:11','suspendisse potenti cras in purus eu magna vulputate luctus cum',0,52,56),(44,'2022-08-28 10:54:43','vulputate luctus cum sociis natoque penatibus et magnis dis',0,54,42),(45,'2022-12-24 05:10:51','nisl duis bibendum felis sed',0,55,84),(46,'2023-03-02 17:56:03','donec dapibus duis at velit',0,30,18),(47,'2022-09-21 22:13:01','nisl ut volutpat sapien arcu sed augue',0,44,11),(48,'2022-09-20 13:19:56','lectus in est risus auctor sed tristique in',0,87,59),(49,'2023-02-18 07:44:57','faucibus orci luctus et ultrices posuere cubilia',0,9,78),(50,'2022-05-04 03:22:15','ligula nec sem duis aliquam convallis nunc proin at',0,26,70),(51,'2022-05-10 00:07:05','accumsan tortor quis turpis sed ante vivamus tortor',0,18,79),(52,'2022-07-10 00:13:36','sem mauris laoreet ut rhoncus aliquet pulvinar sed',0,27,22),(53,'2022-07-08 14:49:11','amet justo morbi ut odio cras',0,40,15),(54,'2022-06-05 16:10:45','erat nulla tempus vivamus in felis eu sapien cursus vestibulum',0,10,3),(55,'2022-04-20 01:26:59','arcu adipiscing molestie hendrerit at vulputate vitae',0,73,75),(56,'2023-03-07 23:17:40','vestibulum aliquet ultrices erat tortor',0,26,8),(57,'2022-04-24 20:13:45','eu orci mauris lacinia sapien quis',0,88,59),(58,'2022-09-28 02:00:59','tincidunt eget tempus vel pede morbi porttitor lorem id ligula',0,58,91),(59,'2023-02-26 07:59:12','metus aenean fermentum donec ut mauris eget massa tempor',0,75,89),(60,'2023-01-24 00:40:39','neque duis bibendum morbi non quam nec dui luctus rutrum',0,80,99),(61,'2022-07-13 08:27:54','nec condimentum neque sapien placerat ante nulla justo aliquam',0,62,22),(62,'2022-06-19 09:47:01','purus sit amet nulla quisque arcu libero rutrum',0,86,25),(63,'2022-04-13 14:41:00','neque aenean auctor gravida sem',0,91,68),(64,'2022-06-01 06:17:11','aenean auctor gravida sem praesent id massa id',0,55,78),(65,'2022-08-01 04:34:56','nunc vestibulum ante ipsum primis',0,63,56),(66,'2023-02-17 17:22:43','id ligula suspendisse ornare consequat lectus in est risus',0,93,84),(67,'2022-10-13 19:12:52','sapien non mi integer ac neque duis bibendum',0,34,62),(68,'2022-07-05 02:33:46','ut suscipit a feugiat et eros vestibulum ac est',0,35,79),(69,'2022-10-06 05:40:28','id ligula suspendisse ornare consequat lectus',0,66,98),(70,'2022-07-14 17:07:15','cubilia curae donec pharetra magna vestibulum aliquet ultrices',0,36,5),(71,'2022-04-24 03:23:55','habitasse platea dictumst maecenas ut',0,84,67),(72,'2022-10-15 11:53:20','urna pretium nisl ut volutpat sapien arcu sed augue aliquam',0,8,72),(73,'2022-11-26 10:13:35','nunc viverra dapibus nulla suscipit ligula in lacus curabitur',0,63,18),(74,'2022-03-29 12:27:34','ultrices vel augue vestibulum ante ipsum primis in faucibus orci',0,81,36),(75,'2022-03-23 01:31:28','cursus vestibulum proin eu mi nulla',0,29,68),(76,'2022-07-03 12:24:28','cursus urna ut tellus nulla ut erat id mauris',0,6,20),(77,'2022-05-09 09:12:00','eget tincidunt eget tempus vel pede',0,21,11),(78,'2022-06-28 21:40:15','nulla sed accumsan felis ut at dolor quis odio consequat',0,19,77),(79,'2022-11-28 07:40:53','luctus et ultrices posuere cubilia',0,9,70),(80,'2022-11-01 11:47:56','ultrices aliquet maecenas leo odio condimentum id',0,3,28),(81,'2022-04-05 01:23:44','nam congue risus semper porta volutpat quam pede',0,48,85),(82,'2022-09-22 02:24:15','sit amet consectetuer adipiscing elit',0,29,58),(83,'2022-09-06 12:59:25','posuere cubilia curae donec pharetra magna vestibulum',0,14,83),(84,'2022-03-10 21:30:27','montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis',0,54,78),(85,'2022-09-08 05:53:18','duis bibendum morbi non quam',0,14,71),(86,'2022-11-08 14:38:54','dignissim vestibulum vestibulum ante ipsum',0,16,89),(87,'2022-03-30 19:22:59','eu nibh quisque id justo sit amet sapien',0,47,98),(88,'2023-02-20 12:28:52','quam a odio in hac habitasse platea dictumst maecenas ut',0,25,67),(89,'2022-07-20 07:24:51','sem sed sagittis nam congue risus semper porta volutpat',0,29,25),(90,'2022-09-18 12:22:09','diam in magna bibendum imperdiet nullam orci pede venenatis',0,33,48),(91,'2022-04-29 22:03:07','eget vulputate ut ultrices vel augue vestibulum',0,47,23),(92,'2022-10-03 09:23:23','curabitur at ipsum ac tellus semper',0,63,30),(93,'2022-03-19 10:11:26','vestibulum sed magna at nunc commodo placerat',0,98,83),(94,'2022-11-01 13:29:23','cursus id turpis integer aliquet massa id lobortis convallis',0,50,75),(95,'2023-02-19 04:52:26','ut massa volutpat convallis morbi odio odio',0,73,28),(96,'2022-04-18 01:15:53','vitae nisi nam ultrices libero non mattis pulvinar nulla',0,18,20),(97,'2022-09-16 23:44:48','nullam sit amet turpis elementum ligula vehicula consequat morbi',0,79,34),(98,'2022-03-10 09:46:37','congue diam id ornare imperdiet sapien urna pretium nisl ut',0,83,52),(99,'2023-02-09 14:46:36','magnis dis parturient montes nascetur ridiculus mus',0,37,54),(100,'2022-11-09 01:51:33','nunc vestibulum ante ipsum primis in faucibus orci',0,40,69);
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
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
