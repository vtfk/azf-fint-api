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

#### GraphQL by template for en elev

**Forespørsel**
```json
{
  "template": "student",
  "variables": {
    "identity": "01010101010"
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
      "feidenavn": {
        "identifikatorverdi": "fik0101@vtfk.no"
      },
      "elevforhold": [
        {
          "skole": {
            "navn": "Nøtterøy videregående skole"
          },
          "hovedskole": true,
          "programomrade": {
            "utdanningsprogram": [
              {
                "navn": "Nøtterøy"
              }
            ]
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
              ],
              "systemId": {
                "identifikatorverdi": "1234567"
              }
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
              },
              "systemId": {
                "identifikatorverdi": "12345678"
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
              },
              "systemId": {
                "identifikatorverdi": "12345677"
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
              },
              "systemId": {
                "identifikatorverdi": "12345676"
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
              },
              "systemId": {
                "identifikatorverdi": "12345675"
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
              },
              "systemId": {
                "identifikatorverdi": "12345674"
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
              },
              "systemId": {
                "identifikatorverdi": "12345673"
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
              },
              "systemId": {
                "identifikatorverdi": "12345672"
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
              },
              "systemId": {
                "identifikatorverdi": "12345671"
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
              },
              "systemId": {
                "identifikatorverdi": "12345670"
              }
            }
          ],
          "kontaktlarergruppe": [
            {
              "navn": "1STA",
              "systemId": {
                "identifikatorverdi": "1234567_7654321"
              },
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
    }
  }
}
```

#### GraphQL by template for en skoleansatt

**Forespørsel**
```json
{
  "template": "schoolEmployee",
  "variables": {
    "identity": "fik0101@vtfk.no"
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
  "skoleressurs": {
    "person": {
      "navn": {
        "fornavn": "Fik",
        "mellomnavn": "",
        "etternavn": "Tiv"
      },
      "kontaktinformasjon": {
        "epostadresse": null,
        "mobiltelefonnummer": "00000000"
      },
      "fodselsnummer": {
        "identifikatorverdi": "01010101010"
      }
    },
    "feidenavn": {
      "identifikatorverdi": "fik0101@vtfk.no"
    },
    "undervisningsforhold": [
      {
        "basisgruppe": [
          {
            "navn": "2STB",
            "periode": [
              {
                "start": "2022-08-01T00:00:00Z",
                "slutt": "2023-07-31T00:00:00Z"
              }
            ],
            "skole": {
              "navn": "Sandefjord videregående skole"
            },
            "systemId": {
              "identifikatorverdi": "1234569"
            },
            "elevforhold": [
              {
                "elev": {
                  "person": {
                    "navn": {
                      "fornavn": "Fik",
                      "etternavn": "Tiv 2"
                    }
                  }
                }
              }
            ]
          }
        ],
        "kontaktlarergruppe": [
          {
            "navn": "2STB",
            "periode": [
              {
                "start": "2022-08-01T00:00:00Z",
                "slutt": "2023-07-31T00:00:00Z"
              }
            ],
            "skole": {
              "navn": "Sandefjord videregående skole"
            },
            "systemId": {
              "identifikatorverdi": "1234569_458978"
            },
            "undervisningsforhold": [
              {
                "skoleressurs": {
                  "feidenavn": {
                    "identifikatorverdi": "fik0101@vtfk.no"
                  }
                }
              }
            ]
          }
        ],
        "undervisningsgruppe": [
          {
            "navn": "1SSC/ENG1009",
            "periode": [
              {
                "start": "2022-08-01T00:00:00Z",
                "slutt": "2023-07-31T00:00:00Z"
              }
            ],
            "skole": {
              "navn": "Sandefjord videregående skole"
            },
            "systemId": {
              "identifikatorverdi": "12345675"
            }
          },
          {
            "navn": "GEN-MAN/ENGRS01",
            "periode": [
              {
                "start": "2022-08-01T00:00:00Z",
                "slutt": "2023-07-31T00:00:00Z"
              }
            ],
            "skole": {
              "navn": "Sandefjord videregående skole"
            },
            "systemId": {
              "identifikatorverdi": "12345674"
            }
          },
          {
            "navn": "2ITA2ITB/SAK1001",
            "periode": [
              {
                "start": "2022-08-01T00:00:00Z",
                "slutt": "2023-07-31T00:00:00Z"
              }
            ],
            "skole": {
              "navn": "Sandefjord videregående skole"
            },
            "systemId": {
              "identifikatorverdi": "12345673"
            }
          },
          {
            "navn": "1TEKB/ENG1009",
            "periode": [
              {
                "start": "2022-08-01T00:00:00Z",
                "slutt": "2023-07-31T00:00:00Z"
              }
            ],
            "skole": {
              "navn": "Sandefjord videregående skole"
            },
            "systemId": {
              "identifikatorverdi": "12345672"
            }
          },
          {
            "navn": "2STB/HIS1009",
            "periode": [
              {
                "start": "2022-08-01T00:00:00Z",
                "slutt": "2023-07-31T00:00:00Z"
              }
            ],
            "skole": {
              "navn": "Sandefjord videregående skole"
            },
            "systemId": {
              "identifikatorverdi": "12345671"
            }
          },
          {
            "navn": "3STC/HIS1010",
            "periode": [
              {
                "start": "2022-08-01T00:00:00Z",
                "slutt": "2023-07-31T00:00:00Z"
              }
            ],
            "skole": {
              "navn": "Sandefjord videregående skole"
            },
            "systemId": {
              "identifikatorverdi": "12345670"
            }
          }
        ]
      }
    ],
    "personalressurs": {
      "ansettelsesperiode": {
        "start": "2016-08-01T00:00:00Z",
        "slutt": null
      },
      "arbeidsforhold": [
        {
          "ansettelsesprosent": 10000,
          "gyldighetsperiode": {
            "start": "2021-08-01T00:00:00Z",
            "slutt": "2021-09-30T23:59:59Z"
          }
        },
        {
          "ansettelsesprosent": 0,
          "gyldighetsperiode": {
            "start": "2021-08-01T00:00:00Z",
            "slutt": null
          }
        },
        {
          "ansettelsesprosent": 10000,
          "gyldighetsperiode": {
            "start": "2021-10-01T00:00:00Z",
            "slutt": null
          }
        }
      ]
    }
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
| student | Henter basisinformasjon om en elev samt dets elevforhold |
| schoolEmployee | Henter basisinformasjon om en skoleansatt samt dets arbeidsforhold |

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
    "PAPERTRAIL_HOST": "https://logs.collector.solarwinds.com/v1/log", // optional for logging to Papertrail
    "PAPERTRAIL_TOKEN": "token", // optional for logging to Papertrail
    "NODE_ENV": "production", // optional for logging to Papertrail
    "E18_URL": "https://e18url.net", // optional
    "E18_KEY": "secret token", // optional
    "E18_SYSTEM": "fint", // optional
    "E18_EMPTY_JOB": true // optional
  }
}
```

### E18

To support [E18](https://github.com/vtfk/e18-node#usage), add `E18_URL`, `E18_KEY` and `E18_SYSTEM`
