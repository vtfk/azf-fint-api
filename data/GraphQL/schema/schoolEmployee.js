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
        kontaktlarergruppe {
          navn
          periode {
            start
            slutt
          }
          skole {
            navn
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
