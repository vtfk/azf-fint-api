module.exports = {
  query: `query fodselsnummer($fodselsnummer: String) {
    person(fodselsnummer: $fodselsnummer) {
      navn {
        fornavn
        mellomnavn
        etternavn
      }
      kontaktinformasjon {
        epostadresse
        mobiltelefonnummer
        telefonnummer
      }
      fodselsdato
      fodselsnummer {
        identifikatorverdi
      }
      kjonn {
        kode
      }
      bostedsadresse {
        adresselinje
        postnummer
        poststed
      }
      elev {
        elevforhold {
          skole {
            navn
          }
          basisgruppe {
            navn
            trinn {
              navn
            }
            termin {
              navn
            }
            skolear {
              navn
            }
            periode {
              start
              slutt
            }
          }
          undervisningsgruppe {
            navn
            periode {
              start
              slutt
            }
            skolear {
              navn
            }
            skole {
              navn
            }
          }
          kontaktlarergruppe {
            navn
            undervisningsforhold {
              skoleressurs {
                person {
                  fodselsnummer {
                    identifikatorverdi
                  }
                  navn {
                    fornavn
                    mellomnavn
                    etternavn
                  }
                  kontaktinformasjon {
                    epostadresse
                    mobiltelefonnummer
                    telefonnummer
                  }
                }
              }
            }
          }
        }
      }
      personalressurs {
        arbeidsforhold {
          stillingstittel
          ansettelsesprosent
          gyldighetsperiode {
            start
            slutt
          }
          undervisningsforhold {
            basisgruppe {
              navn
              trinn {
                navn
              }
              termin {
                navn
              }
              skolear {
                navn
              }
              periode {
                start
                slutt
              }
            }
            undervisningsgruppe {
              navn
              periode {
                start
                slutt
              }
              skolear {
                navn
              }
              skole {
                navn
              }
            }
          }
        }
      }
    }
  }`
}
