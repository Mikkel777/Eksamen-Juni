# Databasemodell

## User

Brukes for å lagre informasjon om brukere av systemet.

Felter:
* username
* password
* role

Roller:
* elev
* lærer
* admin

## Ticket

Brukes for å lagre saker som opprettes av elever.

Felter:
* title
* description
* category
* status
* createdBy
* createdAt

Kategorier:
* Lav
* Middels
* Høy
* Kritisk

Status:
* Åpen
* Pågår
* Lukket

## Response

Brukes for å lagre svar fra lærere.

Felter:
* ticket
* teacher
* message
* createdAt

## AuthLog

Brukes for å logge autentisering.

Felter:
* username
* action
* timestamp
* ipAddress
