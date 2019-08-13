DROP DATABASE IF EXISTS ranker;
CREATE DATABASE ranker;
USE ranker;

CREATE TABLE images (
  id int NOT NULL AUTO_INCREMENT,
  url varchar(500) NOT NULL,
  PRIMARY KEY (ID)
);


/*  Execute this file from the command line by typing:
 *    mysql -u <USER> < schema.sql
 *    OR
 *    mysql -u <USER> -p < schema.sql
 *  For example, on a pairing station, it'll be
 *    mysql -u student -p < schema.sql
 *  and then you'll have to enter the password, student
 *  On your personal computer, if you haven't set up
 *  a password, it'll be
 *    mysql -u root < schema.sql
*/

INSERT INTO images (url) VALUES ('https://fecimagemodal.s3-us-west-2.amazonaws.com/images/0001.jpg');
INSERT INTO images (url) VALUES ('https://fecimagemodal.s3-us-west-2.amazonaws.com/images/0002.jpg');
INSERT INTO images (url) VALUES ('https://fecimagemodal.s3-us-west-2.amazonaws.com/images/0003.jpg');
INSERT INTO images (url) VALUES ('https://fecimagemodal.s3-us-west-2.amazonaws.com/images/0004.jpg');
INSERT INTO images (url) VALUES ('https://fecimagemodal.s3-us-west-2.amazonaws.com/images/0005.jpg');
INSERT INTO images (url) VALUES ('https://fecimagemodal.s3-us-west-2.amazonaws.com/images/0006.jpg');
INSERT INTO images (url) VALUES ('https://fecimagemodal.s3-us-west-2.amazonaws.com/images/0007.jpg');
INSERT INTO images (url) VALUES ('https://fecimagemodal.s3-us-west-2.amazonaws.com/images/0008.jpg');
INSERT INTO images (url) VALUES ('https://fecimagemodal.s3-us-west-2.amazonaws.com/images/0009.jpg');
INSERT INTO images (url) VALUES ('https://fecimagemodal.s3-us-west-2.amazonaws.com/images/0010.jpg');
INSERT INTO images (url) VALUES ('https://fecimagemodal.s3-us-west-2.amazonaws.com/images/0011.jpg');
INSERT INTO images (url) VALUES ('https://fecimagemodal.s3-us-west-2.amazonaws.com/images/0012.jpg');
