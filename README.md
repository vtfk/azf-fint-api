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
  }
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

GraphQL by template

**Forespørsel**
```json
{
  "template": "person",
  "variables": {
    "ssn": "01010101010"
  },
  "options": { // valgfri; hvis ikke definert brukes production endepunkt
    "beta": true // vil bruke beta endepunkt istedenfor production endepunkt; hvis ikke definert brukes production endepunkt
  }
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
    "GRAPHQL_URL_BETA": "https://beta.felleskomponent.no/graphql/graphql"
  }
}
```
