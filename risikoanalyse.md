# Risikoanalyse

| Risiko                         | Konsekvens                                             | Sannsynlighet | Tiltak                                      |
| ------------------------------ | ------------------------------------------------------ | ------------- | ------------------------------------------- |
| Uautorisert tilgang til konto  | Brukere kan få tilgang til informasjon de ikke skal se | Middels       | Rollebasert tilgang og sikre passord        |
| Svake passord                  | Kontoer kan bli kompromittert                          | Middels       | Kryptering med bcrypt og krav til passord   |
| Tap av data                    | Viktig informasjon kan gå tapt                         | Lav           | Jevnlig sikkerhetskopi av databasen         |
| Databasefeil                   | Systemet blir utilgjengelig                            | Lav           | Overvåking og sikkerhetskopi                |
| Feilregistrering av saker      | Feil informasjon lagres i systemet                     | Middels       | Validering av input og opplæring av brukere |
| Uautorisert tilgang til logger | Sensitiv informasjon kan eksponeres                    | Lav           | Kun administrator har tilgang til logger    |
