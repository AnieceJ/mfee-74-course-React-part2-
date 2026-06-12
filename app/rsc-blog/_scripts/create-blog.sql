CREATE TABLE `blog` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `title` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
---
INSERT INTO `blog` VALUES (1,'post1','content1'),(2,'post2','content2');
