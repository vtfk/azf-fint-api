module.exports = {
  query: `query skoleressurs($identity: String) {
    skoleressurs(feidenavn: $identity) {
      person {
        navn {
          fornavn
          mellomnavn
          etternavn
        }
        kontaktinformasjon {
          epostadresse
          mobiltelefonnummer
        }
        fodselsnummer {
          identifikatorverdi
        }
      }
      feidenavn {
        identifikatorverdi
      }
      undervisningsforhold {
        basisgruppe {
          navn
          periode {
            start
            slutt
          }
          skole {
            navn
          }
          systemId {
            identifikatorverdi
          }
          elevforhold {
            elev {
              person {
                navn {
                  fornavn
                  etternavn
                }
              }
            }
          }
        }
        kontaktlarergruppe {
          navn
          periode {
            start
            slutt
          }
          skole {
            navn
          }
          systemId {
            identifikatorverdi
          }
          undervisningsforhold {
            skoleressurs {
              feidenavn {
                identifikatorverdi
              }
            }
          }
        }
        undervisningsgruppe {
          navn
          periode {
            start
            slutt
          }
          skole {
            navn
          }
          systemId {
            identifikatorverdi
          }
        }
      }
      personalressurs {
        ansettelsesperiode {
          start
          slutt
        }
        arbeidsforhold {
          ansettelsesprosent
          gyldighetsperiode {
            start
            slutt
          }
        }
      }
    }
  }`
}
