# Testrutine

## Test 1: Registrering av bruker

Forventet resultat:

* Bruker opprettes i databasen.
* Passord lagres kryptert med bcrypt.


## Test 2: Innlogging

Forventet resultat:

* Bruker kan logge inn med korrekt brukernavn og passord.
* Session opprettes.


## Test 3: Tilgangskontroll

Forventet resultat:

* Uinnloggede brukere blir sendt til innlogging.
* Innloggede brukere får tilgang til saker.


## Test 4: Opprette sak

Forventet resultat:

* Ny sak lagres i MongoDB.


## Test 5: Vise saker

Forventet resultat:

* Alle registrerte saker vises.


## Test 6: Rollebasert tilgang

Forventet resultat:

* Elev får ikke tilgang til adminfunksjoner.
* Admin får tilgang til adminpanelet.


## Test 7: Databasetilkobling

Forventet resultat:

* Node.js-server kobler til MongoDB.


## Test 8: Brannmur

Forventet resultat:

* Kun nødvendige porter er åpne.
* MongoDB kan kun nås av applikasjonsserveren.

