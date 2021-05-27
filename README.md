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

**Dersom man ønsker informasjon kun for en gitt lærer, legges `UPN` med som caller i private claims**

### `POST /graphql`

Post raw GraphQL query og få JSON tilbake

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

### `GET /students`

Henter alle elever

### `GET /students/{id}`

Henter informasjon om en elev ved å angi fødselsnummer

### `GET /students/{id}/contactteachers`

Henter kontaktlærerne for en elev ved å angi fødselsnummer

### `GET /teachers`

Henter alle lærere

### `GET /teachers/{id}`

Henter informasjon om en lærer ved å angi fødselsnummer

### `GET /teachers/{id}/contactclasses`

Henter alle klasser lærer er kontaktlærer for ved å angi fødselsnummer

### `GET /teachers/{id}/students`

Henter alle elever lærer underviser for ved å angi fødselsnummer

### `GET /classes`

Henter alle klasser

### `GET /classes/{id}`

Henter informasjon om en klasse ved å angi klassenavn

### `GET /classes/{id}/students`

Henter alle elever i en klasse ved å angi klassenavn

Dersom du kun vil hente elever for angitt lærer, sett `me` query parameteren til true: `/classes/{id}/students?me=true`

### `GET /classes/{id}/teachers`

Henter alle lærere som underviser en klasse ved å angi klassenavn

### `GET /schools`

Henter alle skoler

### `GET /schools/{id}`

Henter informasjon om en skole

### `GET /schools/{id}/teachers`

Henter alle lærere ved en skole

### `GET /schools/{id}/students`

Henter alle elever ved en skole

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
    "OAUTH_SCOPES": ["fint-client"],
    "GRAPHQL_URL": "https://api.felleskomponent.no/graphql/graphql",
    "GRAPHQL_URL_BETA": "https://beta.felleskomponent.no/graphql/graphql"
  }
}
```
