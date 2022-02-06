# azf-fint-api

## API-endepunkter

Alle API-kall krever en Authorization header med en gyldig JWT
```json
{
  "headers": {
    "Authorization": "Bearer $token"
  }
}
```

### `POST /graphql`

Raw GraphQL

**Forespørsel**
```json
{
  "query": "
query fodselsnummer($ssn: String) {
  person(fodselsnummer: $ssn) {
    navn {
      fornavn
      mellomnavn
      etternavn
    }
  }
}",
  "variables": {
    "ssn": "01010101010"
  },
  "options": { // valgfri; hvis ikke definert brukes production endepunkt
    "beta": true // vil bruke beta endepunkt istedenfor production endepunkt; hvis ikke definert brukes production endepunkt
  },
  "timeout": 2500 // valgfri; hvis ikke definert eller satt til 0 så brukes ikke timeout
}
```

**Response**
```json
{
  "person": {
    "navn": {
      "fornavn": "Fik",
      "mellomnavn": null,
      "etternavn": "Tiv"
    }
  }
}
```

### `POST /graphql`

GraphQL by template for en elev

**Forespørsel**
```json
{
  "template": "person",
  "variables": {
    "ssn": "01010101010"
  },
  "options": { // valgfri; hvis ikke definert brukes production endepunkt
    "beta": true // vil bruke beta endepunkt istedenfor production endepunkt; hvis ikke definert brukes production endepunkt
  },
  "timeout": 2500 // valgfri; hvis ikke definert eller satt til 0 så brukes ikke timeout
}
```

**Response**
```json
{
  "person": {
    "navn": {
      "fornavn": "Fik",
      "mellomnavn": "",
      "etternavn": "Tiv"
    },
    "kontaktinformasjon": {
      "epostadresse": null,
      "mobiltelefonnummer": "00000000",
      "telefonnummer": null
    },
    "fodselsdato": "2001-01-01T00:00:00Z",
    "fodselsnummer": {
      "identifikatorverdi": "01010101010"
    },
    "kjonn": {
      "kode": "2"
    },
    "bostedsadresse": {
      "adresselinje": [
        "Gatevei"
      ],
      "postnummer": "1",
      "poststed": "Postplass"
    },
    "elev": {
      "elevforhold": [
        {
          "skole": {
            "navn": "Nøtterøy videregående skole"
          },
          "gyldighetsperiode": {
            "start": "2021-08-01T00:00:00Z",
            "slutt": "2022-07-31T00:00:00Z"
          },
          "basisgruppe": [
            {
              "navn": "1STA",
              "trinn": {
                "navn": "VG1"
              },
              "termin": [
                {
                  "navn": "T2"
                },
                {
                  "navn": "T1"
                }
              ],
              "skolear": {
                "navn": "20212022"
              },
              "periode": [
                {
                  "start": "2021-08-01T00:00:00Z",
                  "slutt": "2022-07-31T00:00:00Z"
                }
              ]
            }
          ],
          "undervisningsgruppe": [
            {
              "navn": "M1/MAT1019-1",
              "periode": [
                {
                  "start": "2021-08-01T00:00:00Z",
                  "slutt": "2022-07-31T00:00:00Z"
                }
              ],
              "skolear": {
                "navn": "20212022"
              },
              "skole": {
                "navn": "Nøtterøy videregående skole"
              }
            },
            {
              "navn": "1STA/ENG1007",
              "periode": [
                {
                  "start": "2021-08-01T00:00:00Z",
                  "slutt": "2022-07-31T00:00:00Z"
                }
              ],
              "skolear": {
                "navn": "20212022"
              },
              "skole": {
                "navn": "Nøtterøy videregående skole"
              }
            },
            {
              "navn": "1STA/GEO1003",
              "periode": [
                {
                  "start": "2021-08-01T00:00:00Z",
                  "slutt": "2022-07-31T00:00:00Z"
                }
              ],
              "skolear": {
                "navn": "20212022"
              },
              "skole": {
                "navn": "Nøtterøy videregående skole"
              }
            },
            {
              "navn": "1STA/NOR1260",
              "periode": [
                {
                  "start": "2021-08-01T00:00:00Z",
                  "slutt": "2022-07-31T00:00:00Z"
                }
              ],
              "skolear": {
                "navn": "20212022"
              },
              "skole": {
                "navn": "Nøtterøy videregående skole"
              }
            },
            {
              "navn": "1STA/SAK1001",
              "periode": [
                {
                  "start": "2021-08-01T00:00:00Z",
                  "slutt": "2022-07-31T00:00:00Z"
                }
              ],
              "skolear": {
                "navn": "20212022"
              },
              "skole": {
                "navn": "Nøtterøy videregående skole"
              }
            },
            {
              "navn": "1TY2A/FSP6241",
              "periode": [
                {
                  "start": "2021-08-01T00:00:00Z",
                  "slutt": "2022-07-31T00:00:00Z"
                }
              ],
              "skolear": {
                "navn": "20212022"
              },
              "skole": {
                "navn": "Nøtterøy videregående skole"
              }
            },
            {
              "navn": "1STA/NOR1261",
              "periode": [
                {
                  "start": "2021-08-01T00:00:00Z",
                  "slutt": "2022-07-31T00:00:00Z"
                }
              ],
              "skolear": {
                "navn": "20212022"
              },
              "skole": {
                "navn": "Nøtterøy videregående skole"
              }
            },
            {
              "navn": "1STA/KRO1017",
              "periode": [
                {
                  "start": "2021-08-01T00:00:00Z",
                  "slutt": "2022-07-31T00:00:00Z"
                }
              ],
              "skolear": {
                "navn": "20212022"
              },
              "skole": {
                "navn": "Nøtterøy videregående skole"
              }
            },
            {
              "navn": "1STA/NAT1007",
              "periode": [
                {
                  "start": "2021-08-01T00:00:00Z",
                  "slutt": "2022-07-31T00:00:00Z"
                }
              ],
              "skolear": {
                "navn": "20212022"
              },
              "skole": {
                "navn": "Nøtterøy videregående skole"
              }
            }
          ],
          "kontaktlarergruppe": [
            {
              "navn": "1STA",
              "undervisningsforhold": [
                {
                  "skoleressurs": {
                    "person": {
                      "fodselsnummer": {
                        "identifikatorverdi": "02020202020"
                      },
                      "navn": {
                        "fornavn": "Fik",
                        "mellomnavn": "",
                        "etternavn": "Tiv Lærer"
                      },
                      "kontaktinformasjon": {
                        "epostadresse": "fik.tiv@vtfk.no",
                        "mobiltelefonnummer": "00000001",
                        "telefonnummer": null
                      }
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "personalressurs": null
  }
}
```

### `GET /url?url=https://beta.felleskomponent.no/utdanning/utdanningsprogram/programomrade/systemid/SSITU3----`

Get FINT data from system url

### `POST /url`

Get FINT data from system url

**Forespørsel**
```json
{
  "url": "https://beta.felleskomponent.no/utdanning/utdanningsprogram/programomrade/systemid/SSITU3----",
  "timeout": 2500 // valgfri; hvis ikke definert eller satt til 0 så brukes ikke timeout
}
```

## Templates

| Navn | Beskrivelse |
| ---- | ----------- |
| person | Henter basisinformasjon om en person samt et elevforhold eller arbeidsforhold |

## Utvikling lokalt

Opprett en `local.settings.json` fil med følgende innhold:
```json
{
  "IsEncrypted": false,
  "Values": {
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "AzureWebJobsStorage": "",
    "JWT_SECRET": "Skikkelig morsom hemmelighet...",
    "OAUTH_USERNAME": "brukernavn",
    "OAUTH_PASSWORD": "passord",
    "OAUTH_CLIENT_ID": "clientId",
    "OAUTH_CLIENT_SECRET": "clientSecret",
    "OAUTH_IDP_URL": "https://idp.felleskomponent.no/nidp/oauth/nam/token",
    "OAUTH_SCOPES": "fint-client",
    "GRAPHQL_URL": "https://api.felleskomponent.no/graphql/graphql",
    "GRAPHQL_URL_BETA": "https://beta.felleskomponent.no/graphql/graphql",
    "E18_URL": "https://e18url.net", // optional
    "E18_KEY": "secret token", // optional
    "E18_SYSTEM": "fint" // optional
  }
}
```

### E18

To support [E18](https://github.com/vtfk/e18-node#usage), add `E18_URL`, `E18_KEY` and `E18_SYSTEM`
