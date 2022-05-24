# Futattó környezet
Ennek a programnak a futatásához szükséges alkalmazások (és ha szükséges a letöltő linkjük):
|Alkalmazás|Link|
|DBForge|https://www.devart.com/dbforge/mysql/studio/download.html|
|Xampp|https://www.apachefriends.org/hu/download.html|
|Visual studio code|https://code.visualstudio.com/|
|Node js|https://nodejs.org/en/|
|Git|https://github.com/|
|Google chrome|https://www.google.com/intl/hu_hu/chrome/|

# Fejlesztői környezet telepítése
Ha a fenti alkalmazások közül hiányzik bármelyik is akkor a legelső lépés ezek telepítése a megadott linkekről.
Ha minden alkalmazás telepítve van elkezdődhet a program beindítása ezeknek a lépéseknek a követésével:
  1. Xampp elinditása -> Ezenbelűl a MySql és az Apach szerver
  2. Mappa létrehozása (értelem szerűen ide fog letöltődni a program)
  3. Gitbash megnyitása -> Beírni: git clone https://github.com/bernadett1104/video_games.git
  4. Backend és Frontend megnyitása Visual studio code-al
  5. Node js megnyitása (ctrl + ö kombinációval)
  6. npm install beírása mindkét részben (backend  + frontend) ezel a parancsal a szükséges fájlokat töltjük le 
  7. Backend szerver elindítása - npm run dev - parancsal
  8. Majd frontend elinítása - npm run serve - parancsal
  9. Végül kattintson a frontend ablakában az első url-re és meg is tekintheti a programot

# Program működése
A weboldal egy videójáték tárat testesít meg melyben többféle adat is rendelkezésre áll egy adott játékról.
Mint például: 
  1. Kategória
  2. Platform
  3. Fejlesztő
  4. Linkek
  5. Játékok

A weboldalon hitelesítési rendszer müködik. Annyit jelent, hogy bejelentkezni és/ vagy regisztrálni kell
az oldalak megtekintéséhez.

Fejlesztői bejelentkezéssel engedélyt kapunk adatok létrehozására, szerkesztésére és törlésére mindegyik
tábla esetében. 

Felhasználói bejelentkezéssel a fejlesztők játékai jellenek meg. ABC sorrendben a fejlesztők nevéhez nézve.
Szűrni lehet kategória alapján és linkelt videók tekinthetőek meg az adott játékokról.
