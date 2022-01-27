<div id="top"></div>
<br />
<div align="center">

<h3 align="center">System do zarządzania użytkownikami</h3>
  <p align="center">
    Możliwość dodawania, usuwania, edytowania użytkowników oraz filtrowania według ich statusu.
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Spis treści</summary>
  <ol>
    <li>
      <a href="#O-projekcie">O projekcie</a>
      <ul>
        <li><a href="#Technologie">Technologie</a></li>
      </ul>
    </li>
    <li>
      <ul>
        <a href="#Instalacja">Instalacja</a>
      </ul>
    </li>
    <li><a href="#usage">Funkcje</a></li>
    <li><a href="#contact">Kontakt</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## O projekcie

![Strona główna][product-screenshot]

<p align="right">(<a href="#top">powrót</a>)</p>



### Technologie

* [Express.js](https://expressjs.com/)
* [Ejs](https://ejs.co/)
* [MongoDB](https://www.mongodb.com/)
* [NodeJS](https://nodejs.org/en/)

<p align="right">(<a href="#top">powrót</a>)</p>


### Instalacja

1. Sklonuj repo
   ```sh
   git clone https://github.com/jakubprach/API.git
   ```
2. Zainstaluj pakiety
   ```sh
   npm install
   ```
3. Podaj dane swojego połączenia z MongoDB w pliku `config.env`
   ```js
    MONGO_URI = 'PODAJ SWÓJ KLUCZ';
   ```

<p align="right">(<a href="#top">powrót</a>)</p>



<!-- USAGE EXAMPLES -->
## Funkcje

<p align="center">
    Dodawanie użytkownika
</p>

![Strona główna][product-screenshot2]
<p align="center">
    Edytowanie użytkownika
</p>

![Strona główna][product-screenshot3]
<p align="center">
    Filtrowanie po klientach
</p>

![Strona główna][product-screenshot4]
<p align="center">
    Filtrowanie po pracownikach
</p>

![Strona główna][product-screenshot5]

<p align="right">(<a href="#top">powrót</a>)</p>

<!-- CONTACT -->
## Kontakt

jakub.prach76@gmail.com

Projekt: [https://github.com/jakubprach/API](https://github.com/jakubprach/API)

<p align="right">(<a href="#top">powrót</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/jakubprach/API.svg?style=for-the-badge
[contributors-url]: https://github.com/jakubprach/API/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jakubprach/API.svg?style=for-the-badge
[forks-url]: https://github.com/jakubprach/API/network/members
[stars-shield]: https://img.shields.io/github/stars/jakubprach/API.svg?style=for-the-badge
[stars-url]: https://github.com/jakubprach/API/stargazers
[issues-shield]: https://img.shields.io/github/issues/jakubprach/API.svg?style=for-the-badge
[issues-url]: https://github.com/jakubprach/API/issues
[license-shield]: https://img.shields.io/github/license/jakubprach/API.svg?style=for-the-badge
[license-url]: https://github.com/jakubprach/API/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/homepage.png
[product-screenshot2]: images/adduser.png
[product-screenshot3]: images/edituser.png
[product-screenshot4]: images/klienci_filtr.png
[product-screenshot5]: images/pracownicy_filtr.png