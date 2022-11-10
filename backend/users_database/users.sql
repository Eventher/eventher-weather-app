CREATE TABLE `users` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(255) NOT NULL,
    `last_name` VARCHAR(255)  NOT NULL,
    `email` VARCHAR(255)  NOT NULL,
    `city` VARCHAR(255) NOT NULL,
    `language` VARCHAR(255),
    `entry` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8;

INSERT INTO
    `users`
VALUES
  (
    1,
    'admin-test',
    'admin-test',
    'admin@test.com',
    'test',
    'test',
    '123'
  ),
  (
    2,
    'random-user-1',
    'random-user-1',
    'random-user-1@test.com',
    'test',
    'test',
    'qwe'
  ),
  (
    3,
    'random-user-2',
    'random-user-2',
    'random-user-2@test.com',
    'test',
    'test',
    'asd'
  ),
  (
    4,
    'random-user-3',
    'random-user-3',
    'random-user-3@test.com',
    'test',
    'test',
    'zxc'
  );