# Personvern og GDPR

## Personopplysninger

Systemet lagrer følgende opplysninger:

* Brukernavn.
* Passord (kryptert).
* Saker opprettet av brukere.
* Logger for autentisering.

## Sikkerhetstiltak

### Kryptering av passord

Passord lagres ikke i klartekst. Passord krypteres ved hjelp av bcrypt før de lagres i databasen.

### Tilgangskontroll

Systemet bruker roller:

* Elev
* Lærer
* Admin

Brukere får kun tilgang til funksjoner som er relevante for rollen deres.

### Logging

Innloggingsforsøk logges for å kunne oppdage misbruk og feilsøke problemer.

## Dataminimering

Systemet lagrer kun informasjon som er nødvendig for at tjenesten skal fungere.

## Sletting av data

Administrator skal kunne slette brukere og data ved behov.
