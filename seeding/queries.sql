-- /usr/local/mysql-8.0.15-macos10.14-x86_64/bin/mysql -u root -p < /Users/Andrew/webDev/hackReactor/SDC/andrew-mitchell-related-component/seeding/queries.sql
CREATE DATABASE IF NOT EXISTS test;
USE test;
DROP TABLE IF EXISTS Songs, Song_to_songs;

CREATE TABLE `Songs` (
	`id` int PRIMARY KEY,
	`name` varchar(30),
	`description` varchar(1000),
	`plays` int,
	`genre` varchar(30),
	`length` varchar(30),
	`image` varchar(100),
  `userId` int,
  `playlistId` int,
  `albumId` int
);

CREATE TABLE `Song_to_songs` 
(
	`songId` int,
	`relatedSongId` int
);

ALTER TABLE `Song_to_songs` ADD FOREIGN KEY (`songId`) REFERENCES `Songs` (`id`);

ALTER TABLE `Song_to_songs` ADD FOREIGN KEY (`relatedSongId`) REFERENCES `Songs` (`id`);

LOAD DATA INFILE "/Users/Andrew/webDev/hackReactor/SDC/andrew-mitchell-related-component/seeding/csv/songs.csv"
INTO TABLE Songs
COLUMNS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
ESCAPED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES;

LOAD DATA INFILE "/Users/Andrew/webDev/hackReactor/SDC/andrew-mitchell-related-component/seeding/csv/songsToSongs.csv"
INTO TABLE Song_to_songs
COLUMNS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
ESCAPED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES;

-- SELECT * FROM Songs as s
-- LEFT JOIN Song_to_songs as sts
--   ON s.id = sts.songId
-- RIGHT JOIN Songs as s2 
--   ON s2.id = sts.relatedSongId
-- WHERE s.id = 1;
