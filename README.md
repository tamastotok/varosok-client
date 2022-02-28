# Feladat:

### Egy egyszerű React webapp elkészítése, minimális NodeJS backenddel. Főbb screenek és feladatok:

- Kezdő (Bejelentkező oldal): Email cím/jelszó bekérése, majd elküldése backendnek. A backenden nem kell semmi ellenőrzést csinálni, mindig valami random user adatot ad vissza (név, userid). A választ tárold el Redux-ba.

- Profil oldal: Itt csak a felhasználó neve, email címe és az utolsó belépés óta eltelt napok legyenek kiírva. +Kijelentkezés gomb. Nem bejelentkezett user sose érhesse el ezt az oldalt.\
  FONTOS: Ha user elnavigál az oldalról/kilép a böngészőből kijelentkezés nélkül, majd visszajön, akkor már ne kelljen újra bejelentkeznie. Ebben az esetben automatikusan ide irányítsd, ne a bejelentkező oldalra.

- Városok oldal. Minden település kapjon egy egyszerű kártyát. Adott kártyára kattintva az azonos megyében lévő települések kapjanak egy zöld keretet. Ezt az oldalt bárki elérheti. Ha az URL-ben van megye=... paramétert, akkor csak az adott megyében lévő kártyák jelenjenek meg.
