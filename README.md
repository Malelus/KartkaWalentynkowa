# Strona z kartką walentynkową

> ### [Link do strony](https://malelus.github.io/KartkaWalentynkowa/)

---

#### Strona została napisana w edytorze Visual Studio Code używając preprocesora SASS do pisania kodu CSS oraz użyto ikon ze strony https://fontawesome.com/.

- czcionki:
  - [Montserrat](https://fonts.google.com/specimen/Montserrat?query=mon).

---

### Obowiązkowe:

- układ:

  - logo,
  - zawartość.

- animacje:

  - logo,
  - kwadrat z imieniem.

---

### Dodatkowe:

#### Budowa:

- strona została zaprojektowana w sposób responsywny dzięki czemu umożliwia to swobodne i wygodne korzystanie z niej na każdym urządzeniu:

| Smartphone                                                                 | Mobile                                                                | Desktop                                                                       |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| < 699px                                                                    | 700px - 999px                                                         | > 1000px                                                                      |
| widok przystowany do korzystania na smartphonie (pierwotny design strony), | widok mobilny, dostosowanie czcionek i animacji do większych ekranów, | widok desktop , dostosowanie czcionek i animacji do komputerów stacjonarnych, |

- użyto znaczników semantycznych,

- do ułożenia kwadratów użyto display: grid.

- tekst został obrócony używając:

```
  .card__write-ver {
    writing-mode: vertical-lr;
    text-orientation: sideways;
  }
```

#### Wygląd:

- animacja wejścia na stronę wykonana przy pomocy CSS oraz JavaScript,

- animowany link do repozytorium GitHub'a w lewym dolnym rogu strony,

- zmieniony wygląd scrollbar'a.

#### Dodatki:

- informacje w konsoli o statusie animacji oraz o czasach trwania wszystkich animacji znajdujących się na stronie,

- możliwość wyłączenia całkowicie animacji znajdujących się na stronie.

  > (aby wyłączyć animacje: Ustawienia > Ułatwienia dostępu > Wyświetlacz > Pokaż animacje w systemie Windows (Wyłącz)) (Ustawienie znajduje się w pliku \_reset.scss).

---

#### Wykonał: Mateusz Narowski

#### Data: 09.02.2021
