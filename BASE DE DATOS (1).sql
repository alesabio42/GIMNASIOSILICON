CREATE DATABASE  IF NOT EXISTS `proyecto_silicon` /*!40100 DEFAULT CHARACTER SET latin1 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `proyecto_silicon`;
-- MySQL dump 10.13  Distrib 8.0.30, for macos12 (x86_64)
--
-- Host: localhost    Database: proyecto_silicon
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
-- Table structure for table `alumno_curso`
--

DROP TABLE IF EXISTS `alumno_curso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alumno_curso` (
  `id_alumno_curso` int NOT NULL AUTO_INCREMENT,
  `id_alumno` int NOT NULL,
  `id_curso` int NOT NULL,
  PRIMARY KEY (`id_alumno_curso`),
  KEY `fk_alumno_curso_alumno_idx` (`id_alumno`),
  KEY `fk_alumno_curso_curso_idx` (`id_curso`),
  CONSTRAINT `fk_alumno_curso_alumno` FOREIGN KEY (`id_alumno`) REFERENCES `alumnos` (`id_alumno`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_alumno_curso_curso` FOREIGN KEY (`id_curso`) REFERENCES `curso` (`id_curso`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alumno_curso`
--

LOCK TABLES `alumno_curso` WRITE;
/*!40000 ALTER TABLE `alumno_curso` DISABLE KEYS */;
/*!40000 ALTER TABLE `alumno_curso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `alumno_telefono`
--

DROP TABLE IF EXISTS `alumno_telefono`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alumno_telefono` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_tipo_telefono` int NOT NULL,
  `id_alumno` int NOT NULL,
  `numero` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `estado` enum('A','B') CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT 'A',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alumno_telefono`
--

LOCK TABLES `alumno_telefono` WRITE;
/*!40000 ALTER TABLE `alumno_telefono` DISABLE KEYS */;
INSERT INTO `alumno_telefono` VALUES (1,1,2,'3764565655','A'),(2,1,4,'3764345655','A'),(3,2,5,'3765464744','A');
/*!40000 ALTER TABLE `alumno_telefono` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `alumnos`
--

DROP TABLE IF EXISTS `alumnos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alumnos` (
  `id_alumno` int NOT NULL AUTO_INCREMENT,
  `apellido` varchar(45) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `nombre` varchar(45) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `sexo` enum('M','F','I') CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `dni` varchar(45) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `estado` enum('A','B') CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  `fecha_modificacion` datetime DEFAULT NULL,
  `estado_civil` varchar(45) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `clase` varchar(100) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  PRIMARY KEY (`id_alumno`),
  UNIQUE KEY `dni_UNIQUE` (`dni`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alumnos`
--

LOCK TABLES `alumnos` WRITE;
/*!40000 ALTER TABLE `alumnos` DISABLE KEYS */;
INSERT INTO `alumnos` VALUES (1,'MARTINEZ','EMILIANO','1991-08-02','M','12345678','A','2022-10-05 18:55:00','2023-03-04 13:09:22','SOLTERO','8 AM'),(3,'GUSTADO','GERMAN','2001-11-26','M','43712371','A','2022-10-05 00:00:00','2023-03-05 20:03:04','SOLTERO','9 AM'),(4,'MULLER','TOMAS','1981-11-09','M','29953469','A','2022-10-05 00:00:00','2023-03-05 20:03:36','SOLTERO','10 AM'),(5,'MESSI','TOMAS','1993-11-26','M','37590532','A','2022-10-05 18:55:00','2023-03-05 20:04:13','CASADO','2 PM'),(6,'DEL HUERTO','SOPHIA','1985-02-20','M','12332144','A','2022-10-31 19:16:27','2023-03-05 20:04:43','CASADO','3 PM'),(9,'DEL PRADO','JOSE','1987-02-20','M','12332123','A','2022-10-31 19:31:46','2023-03-05 20:05:50','CASADO','11 AM'),(10,'SABIO','ALEJANDRO','1999-08-26','M','543342425','A','2023-02-24 22:16:52','2023-03-05 20:02:10','SOLTERO','10 AM'),(11,'SOSA','ALEJANDRO','1999-06-16','M','4202324','A','2023-02-27 19:34:41','2023-03-05 20:06:10','SOLTERO','9 AM'),(12,'ROBERTO','ALEJADNRO','2015-08-18','M','46372834','A','2023-02-27 19:52:53','2023-03-05 20:06:19','CASADO','8 AM'),(13,'DE PAUL','RODRIGO','2007-03-08','M','3454323','A','2023-02-28 23:05:58',NULL,'SOLTERO','9 AM'),(14,'DE LA FUENTE','IVAN','2006-02-09','M','35434553','A','2023-02-28 23:07:42','2023-02-28 23:07:55','SOLTERO','9 AM'),(15,'FODEN','JACK','2004-01-28','M','34543234','A','2023-03-04 11:26:55',NULL,'SOLTERO','9 AM'),(18,'GERMAN','BEZUS','2005-02-17','M','45665432','A','2023-03-05 13:34:33',NULL,'SOLTERO','10 AM');
/*!40000 ALTER TABLE `alumnos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `curso`
--

DROP TABLE IF EXISTS `curso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `curso` (
  `id_curso` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(90) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  PRIMARY KEY (`id_curso`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `curso`
--

LOCK TABLES `curso` WRITE;
/*!40000 ALTER TABLE `curso` DISABLE KEYS */;
INSERT INTO `curso` VALUES (15,'8 AM'),(16,'9 AM'),(17,'10 AM'),(18,'11 AM'),(19,'2 PM'),(20,'3 PM'),(21,'4 PM'),(22,'5 PM'),(23,'6 PM'),(24,'7 PM'),(25,'8 PM'),(26,'9 PM');
/*!40000 ALTER TABLE `curso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Materiales`
--

DROP TABLE IF EXISTS `Materiales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Materiales` (
  `id` int NOT NULL AUTO_INCREMENT,
  `concepto` varchar(255) NOT NULL,
  `definicion` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Materiales`
--

LOCK TABLES `Materiales` WRITE;
/*!40000 ALTER TABLE `Materiales` DISABLE KEYS */;
INSERT INTO `Materiales` VALUES (1,'Abmat','Almohadilla para apoyar lumbar a la hora de hacer abdominales.'),(2,'AssBike','Assault bike.'),(3,'Barbell','Barra olímpica.'),(4,'Bikerg','Bicicleta estática.'),(5,'DB','Dumbbell - Mancuerna.'),(6,'KB','Kettlebell - Pesa rusa.'),(7,'Ring','Anillas utilizadas para realizar movimientos gimnásticos.'),(8,'Rack','Estructura metálica para hacer los diferentes ejercicios de gimnasia: dominadas, T2B, etc.'),(9,'Row','Remo.'),(10,'Skierg','Esquiadora.');
/*!40000 ALTER TABLE `Materiales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Movimientos`
--

DROP TABLE IF EXISTS `Movimientos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Movimientos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `concepto` varchar(255) NOT NULL,
  `definicion` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Movimientos`
--

LOCK TABLES `Movimientos` WRITE;
/*!40000 ALTER TABLE `Movimientos` DISABLE KEYS */;
INSERT INTO `Movimientos` VALUES (1,'Arch Rock','Balanceo en posición de superman.'),(2,'BS','Back Squat - Sentadilla trasera con peso detrás de la nuca.'),(3,'BP','Bench Press - Press de banca.'),(4,'Box Jump','Salto al cajón.'),(5,'BRP','Burpee.'),(6,'CLN','Clean - Cargada. Consiste en llevar una carga desde el suelo hasta los hombros. Versiones adicionales incluyen: Hang Clean (HC)(Clean desde rodillas), Power Clean (PC), y Squat Clean (SC).'),(7,'C&J','Clean and Jerk - Cargada y envión. La unión de realizar un clean y seguidamente un Jerk.'),(8,'CTB / C2B','Chest to Bar - Pecho a la barra. Dominadas en las que debes tocar el rack con el pecho.'),(9,'DL','Deadlift - Peso muerto. Levanta un peso del suelo hasta la extensión completa de cadera.'),(10,'DU’s','Double Unders - Dos vueltas de la soga en un salto.'),(11,'FS','Front Squat - Sentadilla Frontal con el peso por delante.'),(12,'Hang','Colgado. En movimientos halterofilia, se utiliza cuando el movimiento (clean o snatch) comienza desde la rodilla o por encima de ella.'),(13,'Hollow','Ejercicio funcional que consiste en estar tumbados boca arriba, con piernas y brazos extendidos (brazos hacia atrás y a los lados de la cabeza) y levantados del suelo contrayendo zona abdominal.'),(14,'Hollow Rock','Balanceo en posición de hollow.'),(15,'HSPU','Hand Stand Push-Up - Pino flexión ó Parada de manos con flexión.'),(16,'K2E','Knees to Elbows - Consiste en estar colgados en la barra y llevar las rodillas a los codos.'),(17,'MU','Muscle Up - Movimientos combinados que encadenan un balanceo con un fondo de Tríceps (puede ser en anillas o en barra).'),(18,'OHS','Over Head Squat - Sentadilla con peso por encima de la cabeza.'),(19,'Pistol','Sentadilla a una pierna.'),(20,'PP','Push Press - Press de hombros con empuje. Consiste en llevar la barra desde tus hombros hasta arriba de tu cabeza con un impulso con las piernas para empujarla hacia arriba. El movimiento termina con fuerza estricta de hombros.'),(21,'PJ','Push Jerk - Press con Envión. Consiste en llevar la barra desde tus hombros hasta arriba de tu cabeza con un impulso con las piernas para empujarla hacia arriba y además, una ligera flexión de piernas al final del movimiento para recibir la barra desde más abajo para ayudarnos un poco más a levantarla.'),(22,'PU','Pull Up or Push Up - Dominadas o flexiones.'),(23,'Ring dips','fondos de tríceps en anillas'),(24,'Rope climb','escalar la cuerda con o sin ayuda de las piernas (Es el momento en el que todos nos sentimos bomberos).'),(25,'SDL','Sumo Deadlift - Peso Muerto en con las piernas en posición de sumo.'),(26,'SDHP','Sumo Deadlift High Pull - Consiste en realizar un peso muerto en posición de sumo, y luego de que la barra llegue a la cadera, realizar un empuje y tirar con los brazos la barra hasta la altura de la barbilla.'),(27,'SP','Shoulder Press - Press de hombros estrictos. Consiste en llevar la barra desde tus hombros hasta arriba de tu cabeza únicamente con la fuerza estricta de tus hombros.'),(28,'SN','Snatch - Arrancada: Consiste en levantar la barra del suelo hasta arriba de la cabeza en un solo tiempo. Versiones adicionales incluyen, Hang Snatch (HS), Power Snatch (PS), y Squat Snatch (SS).'),(29,'Split Jerk','Envión. La técnica es similar al Push Jerk, con la diferencia que al momento de flexionar las piernas para terminar el movimiento, las piernas se mueven una hacia delante, y otra hacia atrás.'),(30,'SQ','Squat - Sentadilla.'),(31,'S-ups','Sit ups.'),(32,'SU’s','Single Unders - Una vuelta a la soga en un salto.'),(33,'Superman','Ejercicio funcional que consiste en estar tumbados boca abajo, con piernas y brazos extendidos y elevados lo más que se pueda para que no toquen suelo ni cuádriceps ni brazos.'),(34,'T2B','Toes to Bar - Consiste en estar colgados en la barra y toca la barra con los pies.'),(35,'V-ups','Abdominales en V.'),(36,'WBS','Wall Ball Shot - Lanzamiento de bola a la pared.'),(37,'Arch Rock','Balanceo en posición de superman.'),(38,'BS','Back Squat - Sentadilla trasera con peso detrás de la nuca.'),(39,'BP','Bench Press - Press de banca.'),(40,'Box Jump','Salto al cajón.'),(41,'BRP','Burpee.'),(42,'CLN','Clean - Cargada. Consiste en llevar una carga desde el suelo hasta los hombros. Versiones adicionales incluyen: Hang Clean (HC)(Clean desde rodillas), Power Clean (PC), y Squat Clean (SC).'),(43,'C&J','Clean and Jerk - Cargada y envión. La unión de realizar un clean y seguidamente un Jerk.'),(44,'CTB / C2B','Chest to Bar - Pecho a la barra. Dominadas en las que debes tocar el rack con el pecho.'),(45,'DL','Deadlift - Peso muerto. Levanta un peso del suelo hasta la extensión completa de cadera.'),(46,'DU’s','Double Unders - Dos vueltas de la soga en un salto.'),(47,'FS','Front Squat - Sentadilla Frontal con el peso por delante.'),(48,'Hang','Colgado. En movimientos halterofilia, se utiliza cuando el movimiento (clean o snatch) comienza desde la rodilla o por encima de ella.'),(49,'Hollow','Ejercicio funcional que consiste en estar tumbados boca arriba, con piernas y brazos extendidos (brazos hacia atrás y a los lados de la cabeza) y levantados del suelo contrayendo zona abdominal.'),(50,'Hollow Rock','Balanceo en posición de hollow.'),(51,'HSPU','Hand Stand Push-Up - Pino flexión ó Parada de manos con flexión.'),(52,'K2E','Knees to Elbows - Consiste en estar colgados en la barra y llevar las rodillas a los codos.'),(53,'MU','Muscle Up - Movimientos combinados que encadenan un balanceo con un fondo de Tríceps (puede ser en anillas o en barra).'),(54,'OHS','Over Head Squat - Sentadilla con peso por encima de la cabeza.'),(55,'Pistol','Sentadilla a una pierna.'),(56,'PP','Push Press - Press de hombros con empuje. Consiste en llevar la barra desde tus hombros hasta arriba de tu cabeza con un impulso con las piernas para empujarla hacia arriba. El movimiento termina con fuerza estricta de hombros.'),(57,'PJ','Push Jerk - Press con Envión. Consiste en llevar la barra desde tus hombros hasta arriba de tu cabeza con un impulso con las piernas para empujarla hacia arriba y además, una ligera flexión de piernas al final del movimiento para recibir la barra desde más abajo para ayudarnos un poco más a levantarla.'),(58,'PU','Pull Up or Push Up - Dominadas o flexiones.'),(59,'Ring dips','fondos de tríceps en anillas'),(60,'Rope climb','escalar la cuerda con o sin ayuda de las piernas (Es el momento en el que todos nos sentimos bomberos).'),(61,'SDL','Sumo Deadlift - Peso Muerto en con las piernas en posición de sumo.'),(62,'SDHP','Sumo Deadlift High Pull - Consiste en realizar un peso muerto en posición de sumo, y luego de que la barra llegue a la cadera, realizar un empuje y tirar con los brazos la barra hasta la altura de la barbilla.'),(63,'SP','Shoulder Press - Press de hombros estrictos. Consiste en llevar la barra desde tus hombros hasta arriba de tu cabeza únicamente con la fuerza estricta de tus hombros.'),(64,'SN','Snatch - Arrancada: Consiste en levantar la barra del suelo hasta arriba de la cabeza en un solo tiempo. Versiones adicionales incluyen, Hang Snatch (HS), Power Snatch (PS), y Squat Snatch (SS).'),(65,'Split Jerk','Envión. La técnica es similar al Push Jerk, con la diferencia que al momento de flexionar las piernas para terminar el movimiento, las piernas se mueven una hacia delante, y otra hacia atrás.'),(66,'SQ','Squat - Sentadilla.'),(67,'S-ups','Sit ups.'),(68,'SU’s','Single Unders - Una vuelta a la soga en un salto.'),(69,'Superman','Ejercicio funcional que consiste en estar tumbados boca abajo, con piernas y brazos extendidos y elevados lo más que se pueda para que no toquen suelo ni cuádriceps ni brazos.'),(70,'T2B','Toes to Bar - Consiste en estar colgados en la barra y toca la barra con los pies.'),(71,'V-ups','Abdominales en V.'),(72,'WBS','Wall Ball Shot - Lanzamiento de bola a la pared.');
/*!40000 ALTER TABLE `Movimientos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registros_de_peso`
--

DROP TABLE IF EXISTS `registros_de_peso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registros_de_peso` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int NOT NULL,
  `peso` decimal(4,1) NOT NULL,
  `fecha` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `registros_de_peso_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registros_de_peso`
--

LOCK TABLES `registros_de_peso` WRITE;
/*!40000 ALTER TABLE `registros_de_peso` DISABLE KEYS */;
INSERT INTO `registros_de_peso` VALUES (9,11,80.0,'2023-02-02');
/*!40000 ALTER TABLE `registros_de_peso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TerminosBasicos`
--

DROP TABLE IF EXISTS `TerminosBasicos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TerminosBasicos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `concepto` varchar(255) NOT NULL,
  `definicion` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TerminosBasicos`
--

LOCK TABLES `TerminosBasicos` WRITE;
/*!40000 ALTER TABLE `TerminosBasicos` DISABLE KEYS */;
INSERT INTO `TerminosBasicos` VALUES (2,'AHAP','As Heavy As Possible - Tan pesado como puedas.'),(3,'AMRAP','As Many Repetitions (or Rounds) As Possible - Todas las repeticiones (o rondas) posibles.'),(4,'BW','Body weight - Peso corporal.'),(5,'Box','Espacio, gimnasio o centro donde se entrena CrossFit.'),(6,'Cal','Calorías.'),(7,'Chipper','Entrenamiento con muchas repeticiones y muchos movimientos.'),(8,'CrossFit','Entrenamiento funcional, constantemente variado, ejecutado a alta intensidad.'),(9,'CrossFitter','Persona que hace CrossFit.'),(10,'EMOM','Every Minute on the Minute - Hacer un número determinado de repeticiones dentro de cada minuto.'),(11,'False Grip','Agarre Falso. Es un tipo de agarre empleado en movimientos de gimnasia, especialmente en las anillas. Se realiza metiendo la mano en la anilla hasta que la muñeca la toque, rodeando con los dedos la anilla.'),(12,'For Quality','Cuando no importa el tiempo en el que realices el movimiento, sino la técnica y calidad del mismo.'),(13,'For Time','Por tiempo.'),(14,'Hook Grip','Agarre de Gancho. Es un tipo de agarre empleado en movimientos de halterofilia para mejorar la estabilidad y dar mayor seguridad. Se basa en utilizar el dedo pulgar como gancho, sujetando la barra, mientras el resto de los dedos rodean al pulgar.'),(15,'MetCon','Metabolic Conditioning - Acondicionamiento metabólico.'),(16,'PR','Personal record - Record Personal.'),(17,'Rep','Repetición.'),(18,'Rest Day','Día de descanso.'),(19,'RM','Repetition maximum - Máxima carga que un individuo puede mover.'),(20,'ROM','Range of Motion - Rango de movimiento.'),(21,'Rx’d','As prescribed - Entrenamiento o ejercicio realizado correctamente sin ninguna modificación.'),(22,'Scaled','Ejercicio escalado o modificado.'),(23,'Set','Cantidad de veces que se realiza un determinado número de repeticiones. Por ejemplo 4 sets de 5 reps.'),(24,'Strength','Fuerza.'),(25,'TABATA','Tipo de entrenamiento que consiste en 8 intervalos de 20 segundos de trabajo intenso y 10 segundos de descanso. Su nombre viene del creador de este método el doctor Izumi Tabata.'),(26,'Time Cap','Tiempo límite que tiene un WOD para completarse.'),(27,'UB','Unbroken - Es cuando se realiza un ejercicio de principio a fin sin descanso.'),(28,'Warm up','Calentamiento.'),(29,'WOD','Workout of the day - Entrenamiento del día.'),(33,'AFAP','As Fast As Possible - Lo más rápido que puedas.');
/*!40000 ALTER TABLE `TerminosBasicos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_telefono`
--

DROP TABLE IF EXISTS `tipo_telefono`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_telefono` (
  `id` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(45) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_telefono`
--

LOCK TABLES `tipo_telefono` WRITE;
/*!40000 ALTER TABLE `tipo_telefono` DISABLE KEYS */;
INSERT INTO `tipo_telefono` VALUES (1,'Celular'),(2,'Telefono Fijo'),(3,'Telefono Laboral');
/*!40000 ALTER TABLE `tipo_telefono` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `password` varchar(200) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `email` varchar(45) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `apellido_nombre` varchar(45) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `estado` enum('A','B') CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT 'A',
  `fecha_creacion` datetime NOT NULL,
  `fecha_modificacion` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (11,'alesabio10','$2b$10$WRN7peegTQyC9iTA2UBB0OWzozHmonHIfFRjnZxqSMFMYttNodSEO','alejandrosabio15@gmail.com','Sabio Bezus Alejandro','A','2023-02-24 21:59:25',NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'proyecto_silicon'
--

--
-- Dumping routines for database 'proyecto_silicon'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-06 19:28:56
