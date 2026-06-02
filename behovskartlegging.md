# Behovskartlegging

## Bakgrunn

Lærere har mistet oversikten over hvilke utfordringer elever møter i undervisningen. Kommunen ønsker derfor et system der elever kan registrere problemer og lærere kan følge dem opp.

## Brukere

### Elev

Eleven skal kunne:

* Opprette saker.
* Se egne saker.
* Endre status på egne saker.

### Lærer

Læreren skal kunne:

* Se saker.
* Svare på saker.
* Endre status på saker.

### Systemadministrator

Systemadministratoren skal kunne:

* Opprette brukere.
* Slette brukere.
* Endre brukerroller.
* Fjerne data fra databasen.

## Funksjonelle krav

* Systemet skal ha innlogging.
* Systemet skal støtte flere brukerroller.
* Elever skal kunne registrere utfordringer.
* Utfordringer skal kategoriseres.
* Lærere skal kunne besvare saker.
* Systemet skal kunne vise kritiske saker.
* All autentisering skal logges.

## Ikke-funksjonelle krav

* Passord skal lagres kryptert med bcrypt.
* Kun autoriserte brukere skal få tilgang til sine funksjoner.
* Data skal lagres i MongoDB.
* Systemet skal være enkelt å bruke.
