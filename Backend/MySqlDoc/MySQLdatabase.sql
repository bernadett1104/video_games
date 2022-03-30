﻿# Táblák lekérdezése
Select * from categories;
Select * from developers;
Select * from gamelinks;
Select * from games;
Select * from platforms;
Select * from users;

# Táblák törlése
Delete from categories;
Delete from developers;
Delete from platforms;
Delete from games;
Delete from gamelinks;
Delete from users;

# (categories, developers, platforms, games, gamelinks, users)

# Táblák létrehozása 
Insert into categories (id, name) values (1, 'multiplayer');
Insert into developers (id, developer) values (1, 'Riot Games');
Insert into platforms (id, name) values (1, 'PC');
Insert into games (id, developerId, gameName, categoryId, platformId) values (1,1, 'League Of Legends', 1,1);
Insert into gamelinks (id, gameId, link) values (1, 1, 'https://www.youtube.com/watch?v=mDYqT0_9VR4');
Insert into users (id, name, email, password, permission) values (1, 'Nagy Sándor', 'sandor@gmail.com', 'admin', 1);

# Keresés id alapján
Select * from categories where id = 1;
Select * from developers where id = 1;
Select * from platforms where id = 1;
Select * from games where id = 1;
Select * from gamelinks where id = 1;
Select * from users where id = 1;

# Törlés táblából
Delete from categories where id = 1;
Delete from developers where id = 1;
Delete from platforms where id = 1;
Delete from games where id = 1;
Delete from gamelinks where id = 1;
Delete from users where id = 1;