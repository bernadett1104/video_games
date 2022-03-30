# Adatbázis létrehozás
Create database videogames
	Character set utf8
	Collate utf8_hungarian_ci;

# Categories létrehozás
Create table videogames.categories (
  id int(11) not null auto_increment,
  name varchar(50) not null,
  Primary key (id)
)
Engine = innodb,
Character set utf8,
Collate utf8_hungarian_ci;

# Developers létrehozás
Create table videogames.developers (
  id int(11) not null auto_increment,
  developer varchar(255) not null,
  Primary key (id)
)
Engine = innodb,
Character set utf8,
Collate utf8_hungarian_ci;

# Platform létrehozás
Create table videogames.platforms (
  id int(11) null auto_increment,
  name varchar(50) not null,
  Primary key (id)
)
Engine = innodb,
Character set utf8,
Collate utf8_hungarian_ci;

# Games létrehozás
Create table videogames.games (
  id int(11) not null auto_increment,
  developerId int(11) not null,
  gameName varchar(255) not null,
  categoryId int(11) not null,
  platformId int(11) not null,
  Primary key (id)
)
Engine = innodb,
Character set utf8,
Collate utf8_hungarian_ci;

# Gamelinks létrehozása
Create table videogames.gamelinks (
  id int(11) not null auto_increment,
  gameId int(11) not null,
  link varchar(255) not null,
  Primary key (id)
)
Engine = innodb,
Character set utf8,
Collate utf8_hungarian_ci;

# Users létrehozás
Create table videogames.users (
  id int(11) not null auto_increment,
  name varchar(50) not null,
  email varchar(50) not null,
  password varchar(255) not null,
  permission int(11) not null,
  Primary key (id)
)
Engine = innodb,
Character set utf8,
Collate utf8_hungarian_ci;

# Games tábla kulcsok
Alter table videogames.games 
  Add constraint FK_games_categories_id foreign key (categoryId)
    References videogames.categories(id) on delete cascade on update cascade;

Alter table videogames.games 
  Add constraint FK_games_developers_id foreign key (developerId)
    References videogames.developers(id) on delete cascade on update cascade;

Alter table videogames.games 
  Add constraint FK_games_platforms_id foreign key (platformId)
    References videogames.platforms(id) on delete cascade on update cascade;

# Gamelinks tábla kulcs
Alter table videogames.gamelinks 
  Add constraint FK_gamelinks_games_id foreign key (gameId)
  References videogames.games(id) on delete cascade on update cascade;

# Táblákhoz adatgenerálás
# Kategória adatgenerálás
Insert into videogames.categories 
    (id, name) 
  Values 
    (1, 'multiplayer'),
    (2, 'singleplayer'),
    (3, 'both');

# Developers adatgenerálás
Insert into videogames.developers 
    (id, developer) 
  Values 
    (1, 'Riot Games'),
    (2, 'Psyonix'),
    (3, 'Quantic Dream'),
    (4, 'Ubisoft'),
    (5, 'Valve'),
    (6, 'Activision'),
    (7, 'Rockstar Games'),
    (8, 'Epic Games');

# Platform adatgenerálás
Insert into videogames.platforms 
    (id, name) 
  Values 
    (1, 'PC'),
    (2, 'PS4'),
    (3, 'MOBIL'),
    (4, 'CROSS-PLATFORM');

# Games adatgenerálás
Insert into videogames.games 
    (id, developerId, gameName, categoryId, platformId) 
  Values 
    (1,1, 'League Of Legends', 1,1),
    (2,1, 'League Of Runeterra', 1,1),
    (3,1, 'League Of Legends Teamfight Tactics', 1,1),
    (4,1, 'League Of Legends: Wild Rift', 1,3),
    (5,1, 'League Of Legends: The Ruined King', 2,1),
    (6,1, 'Hextech Mayhem', 2,1),
    (7,2, 'Rocket League', 1,4),
    (8,2, 'Rocket League Sideswipe', 1,3),
    (9,3, 'Detroit: Become Human', 2,2),
    (10,3, 'Beyond: Two Souls', 2,2),
    (11,3, 'Heavy Rain', 2,2),
    (12,4, 'Assassins Creed Valhalla', 3,4),
    (13,4, 'Assassins Creed Odyssey', 3,4),
    (14,4, 'Assassins Creed 3', 3,4),
    (15,4, 'Far Cry Primal', 2,4),
    (16,4, 'Far Cry 3', 3,4),
    (17,4, 'Far Cry 5', 3,4),
    (18,4, 'Far Cry 6', 3,4),
    (19,4, 'Far Cry New Dawn', 3,4),
    (20,4, 'Watch Dogs: Legion', 2,2),
    (21,5, 'CoCounter-Strike Global Offensive', 1,1),
    (22,5, 'Left 4 Dead 2', 1,2),
    (23,5, 'Dota 2', 1,1),
    (24,5, 'Team Fortress 2', 1,1),
    (25,6, 'Call Of Duty: Warzone', 1,4),
    (26,6, 'Call Of Duty: WW2', 3,4),
    (27,6, 'Call Of Duty: Vanguard', 3,4),
    (28,6, 'Call Of Duty: Black Ops', 3,4),
    (29,7, 'Grand Theft Auto: San Andreas', 3,4),
    (30,7, 'Grand Theft Auto 5', 3,4),
    (31,7, 'Grand Theft Auto Online', 1,4),
    (32,7, 'Read Dead Redeption 2', 2,4),
    (33,8, 'Fortnite', 1,4),
    (34,8, 'Unreal', 2,1),
    (35,8, 'Battle Breakers', 2,1);

# Gamelinks adatgenerálás
Insert into videogames.gamelinks 
    (id, gameId, link) 
  Values 
    (1, 1, 'https://www.youtube.com/watch?v=mDYqT0_9VR4'),
    (2, 1, 'https://www.youtube.com/watch?v=aR-KAldshAE'),
    (3, 1, 'https://www.youtube.com/watch?v=r6zIGXun57U'),
    (4, 1, 'https://www.youtube.com/watch?v=0uyLRPmmYPk'),
    (5, 1, 'https://www.youtube.com/watch?v=_06PxBjQr4Q'),
    (6, 2, 'https://www.youtube.com/watch?v=Mbq8lgzXCxQ'),
    (7, 3, 'https://www.youtube.com/watch?v=liNLLx874g4'),
    (8, 4, 'https://www.youtube.com/watch?v=pNjWjwae-us'),
    (9, 5, 'https://www.youtube.com/watch?v=PotZzQvPdl4'),
    (10, 6, 'https://www.youtube.com/watch?v=YqgCESVWNNI'),
    (11, 7, 'https://www.youtube.com/watch?v=SgSX3gOrj60'),
    (12, 7, 'https://www.youtube.com/watch?v=9m2J2eBvp6I'),
    (13, 7, 'https://www.youtube.com/watch?v=OmNp7KMp9No'),
    (14, 8, 'https://www.youtube.com/watch?v=1knKmT4N-ZY'),
    (15, 9, 'https://www.youtube.com/watch?v=QD1pbWCJcKQ'),
    (16, 9, 'https://www.youtube.com/watch?v=YtPmIBqRwQU'),
    (17, 10, 'https://www.youtube.com/watch?v=MtEoS0MaNyA'),
    (18, 11, 'https://www.youtube.com/watch?v=GjzyBm0bqpQ'),
    (19, 12, 'https://www.youtube.com/watch?v=ssrNcwxALS4'),
    (20, 12, 'https://www.youtube.com/watch?v=1wiclO4a60A'),
    (21, 12, 'https://www.youtube.com/watch?v=XwuNWh8vIdQ'),
    (22, 12, 'https://www.youtube.com/watch?v=VBXQ3T0n1_c'),
    (23, 13, 'https://www.youtube.com/watch?v=eSw6JeHge1Y'),
    (24, 14, 'https://www.youtube.com/watch?v=-pUhraVG7Ow'),
    (25, 15, 'https://www.youtube.com/watch?v=LJ2iH57Fs3M'),
    (26, 15, 'https://www.youtube.com/watch?v=5GMon1TObdc'),
    (27, 15, 'https://www.youtube.com/watch?v=00xvrGHrSRg'),
    (28, 16, 'https://www.youtube.com/watch?v=RsrYZpswwtM'),
    (29, 17, 'https://www.youtube.com/watch?v=YWLlwqlYzd0'),
    (30, 18, 'https://www.youtube.com/watch?v=VbF6REQyel4'),
    (31, 19, 'https://www.youtube.com/watch?v=6eLHk2Eug78'),
    (32, 20, 'https://www.youtube.com/watch?v=mqh4BX8-VR4'),
    (33, 21, 'https://www.youtube.com/watch?v=edYCtaNueQY'),
    (34, 21, 'https://www.youtube.com/watch?v=z2IWGjHg-Ms'),
    (35, 21, 'https://www.youtube.com/watch?v=SrggEndb-s4'),
    (36, 21, 'https://www.youtube.com/watch?v=EdF38pVRlnE'),
    (37, 21, 'https://www.youtube.com/watch?v=0IF7-WD3TPY'),
    (38, 22, 'https://www.youtube.com/watch?v=9XIle_kLHKU'),
    (39, 23, 'https://www.youtube.com/watch?v=-cSFPIwMEq4'),
    (40, 24, 'https://www.youtube.com/watch?v=N7ZafWA2jd8'),
    (41, 25, 'https://www.youtube.com/watch?v=ljLBEbAKkvE'),
    (42, 25, 'https://www.youtube.com/watch?v=0E44DClsX5Q'),
    (43, 25, 'https://www.youtube.com/watch?v=fhNqBshFAC8'),
    (44, 26, 'https://www.youtube.com/watch?v=D4Q_XYVescc'),
    (45, 27, 'https://www.youtube.com/watch?v=OQ1CwPhE8KQ'),
    (46, 28, 'https://www.youtube.com/watch?v=m1kfCGjOaSw'),
    (47, 29, 'https://www.youtube.com/watch?v=u_CbHrBbHNQ'),
    (48, 30, 'https://www.youtube.com/watch?v=QkkoHAzjnUs'),
    (49, 30, 'https://www.youtube.com/watch?v=hvoD7ehZPcM'),
    (50, 30, 'https://www.youtube.com/watch?v=N-xHcvug3WI'),
    (51, 31, 'https://www.youtube.com/watch?v=olEGtoYs_8A'),
    (52, 32, 'https://www.youtube.com/watch?v=eaW0tYpxyp0'),
    (53, 32, 'https://www.youtube.com/watch?v=A4XnGcYmgTI'),
    (54, 33, 'https://www.youtube.com/watch?v=bBd-SVh_aLA'),
    (55, 34, 'https://www.youtube.com/watch?v=II2gFPwm_EI'),
    (56, 35, 'https://www.youtube.com/watch?v=2z7k6id-ipE');

# Users adatgenerálás
Insert into videogames.users 
    (id, name, email, password, permission) 
  Values 
    (1, 'Nagy Sándor', 'sandor@gmail.com', 'admin', 1),
    (2, 'Békefi Lili', 'lili@gmail.com', 'user', 2);