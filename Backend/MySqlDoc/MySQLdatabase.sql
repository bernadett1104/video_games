# api/users/login
Select * from users where email = "bernadett1104@gmail.com";
Select * from users where email = ?;
# api/users/registration
Insert into users (firstname, lastname, email, password, gender, permission) 
  values ("Bernadett", "Sándor", "bernadett1104@gmail.com", "admin", "nő", 0);
Insert into users (firstname, lastname, email, password, gender, permission) 
  values (?, ?, ?, ?, ?, 0);
# api/users/
Select * from users;
# api/users/:id
Select * from users Where id= 1;
Select * from users Where id= ?;
# api/users/
Update users set firstname="Bernadett", lastname="Sándor", email="bernadett@gmail.com", password="admin", gender="nő", permission=0 
  Where id=1;
Update users set firstname=?, lastname=?, email=?, password=?, gender=?, permission=? 
  Where id=?;
# api/users/
Delete from users where id = 1;
Delete from users where id = ?;

------------------------------------------------------------------------------------------------------------------------------------

# api/categories
Insert into categories (categoryName) values ("multiplayer");
Insert into categories (categoryName) values (?);
# api/categories
Select * from categories;
# api/categories/:id
Select * from categories Where id= 1;
Select * from categories Where id= ?;
# api/categories/
Update categories set categoryName="multiplayer_updated" Where id= 1;
Update categories set categoryName=? Where id= ?
# api/categories/
Delete from categories Where id = 1;
Delete from categories Where id = ?;
# api/categoriesABC/
Select categoryName, id from categories
  Order by categoryName;

------------------------------------------------------------------------------------------------------------------------------------

# api/developers
Insert into developers (developerName) values ("Riot Games");
Insert into developers (developerName) values (?)
# api/developers
Select * from developers;
# api/developers/:id
Select * from developers Where id= 1;
Select * from developers Where id= ?;
# api/developers/
Update developers set developerName="Riot Games_updated" Where id= 1;
Update developers set developerName=? Where id= ?
# api/developers/
Delete from developers Where id = 1;
Delete from developers Where id = ?;
# api/developersABC/
Select developerName, id from developers
  Order by developerName;

------------------------------------------------------------------------------------------------------------------------------------

# api/platforms
Insert into platforms (platformName) values ("PC");
Insert into platforms (platformName) values (?)
# api/platforms
Select * from platforms;
# api/platforms/:id
Select * from platforms Where id= 1;
Select * from platforms Where id= ?;
# api/platforms/
Update platforms set platformName="PC_updated" Where id= 1;
Update platforms set platformName=? Where id= ?;
# api/platforms/
Delete from platforms Where id = 1;
Delete from platforms Where id = ?;
# api/platformsABC/
Select platformName, id from platforms
  Order by platformName;

------------------------------------------------------------------------------------------------------------------------------------

# api/games
Insert into games (developerId, gameName, categoryId, platformId) values (1, "League Of Legends", 1, 1);
Insert into games (developerId, gameName, categoryId, platformId) values (?, ?, ?, ?);
# api/games
Select * from games;
# api/games/:id
Select * from games Where id= 1;
Select * from games Where id= ?;
# api/games/
Update games set developerId=1, gameName="League of Legends", categoryId=1, platformId=1 Where id= 1;
Update games set developerId=?, gameName=?, categoryId=?, platformId=? Where id= ?;
# api/games/
Delete from games Where id = 36;
Delete from games Where id = ?;
# api/gamesABC/
Select gameName, id from games
  Order by gameName;
# api/gamesallname
Select g.id id, d.id developerId, d.developerName, g.gameName, c.id categoryId, c.categoryName, p.id platformId, p.platformName from games g
  Inner join platforms p on g.platformId = p.id
  Inner join categories c on g.categoryId = c.id
  Inner join developers d on g.developerId = d.id
  Order by d.developerName;

------------------------------------------------------------------------------------------------------------------------------------

# api/gamelinks
Insert into gamelinks (gameId, link) values (1, "https://www.youtube.com/watch?v=mDYqT0_9VR4");
Insert into gamelinks (gameId, link) values (?, ?);
# api/gamelinks
Select * from gamelinks;
# api/gamelinks/:id
Select * from gamelinks Where id= 1;
Select * from gamelinks Where id= ?;
# api/gamelinks/
Update gamelinks set gameId=1, link="https://www.youtube.com/watch?v=mDYqT0_9VR4 _updated" Where id= 1;
Update gamelinks set gameId=?, link=? Where id= ?;
# api/gamelinks/
Delete from gamelinks Where id = 1;
Delete from gamelinks Where id = ?;
# api/alllinks
Select gl.id id, gl.gameId gameId, g.gameName, gl.link from gamelinks gl
  Inner join games g on gl.gameId = g.id
  Order by g.gameName;