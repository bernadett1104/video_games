# api/users
Select * from users;
# api/categories
Select * from categories;
# api/developers
Select * from developers;
# api/platforms
Select * from platforms;
# api/games
Select * from games;
# api/gamelinks
Select * from gamelinks;

## api/gamesABC
Select gameName, id from games
  Order by gameName;
## api/developersABC
Select developerName, id from developers
  Order by developerName;
## api/categoriesABC
Select categoryName, id from categories
  Order by categoryName;
## api/platformsABC
Select platformName, id from platforms
  Order by platformName;

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
Insert into games (id, developerId, gameName, categoryId, platformId) values (1, 12, 'League Of Legends', 4, 10);
Insert into gamelinks (id, gameId, link) values (1, 1, 'https://www.youtube.com/watch?v=mDYqT0_9VR4');
Insert into users (id, firstname, lastname, email, password, gender, permission) values (1, 'Test', 'NeveTest', 'sandor@gmail.com', 'admin', 'nő', 1);

# Keresés id alapján
Select * from categories where id = 4;
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
Delete from users where id = 2;

Select gl.id id, gl.gameId gameId, g.gameName, gl.link from gamelinks gl
  Inner join games g on gl.gameId = g.id
  Order by g.gameName;

Select gl.id id, gl.gameId gameId, g.gameName, gl.link from gamelinks gl
  Inner join games g on gl.gameId = g.id
  Order by g.gameName;

Select g.id id, d.id developerid, d.developerName, g.gameName, c.id categoryid, c.categoryName, p.id platformid, p.platformName from games g
  Inner join platforms p on g.platformId = p.id
  Inner join categories c on g.categoryId = c.id
  Inner join developers d on g.developerId = d.id
  Order by d.developerName;