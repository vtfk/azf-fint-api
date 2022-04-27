module.exports = {
  query: `query fodselsnummer($identity: String) {
    person(fodselsnummer: $identity) {
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
          hovedskole
          programomrade {
            utdanningsprogram {
              navn
            }
          }
          gyldighetsperiode {
            start
            slutt
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
            systemId {
              identifikatorverdi
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
            systemId {
              identifikatorverdi
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
    }
  }`
}
