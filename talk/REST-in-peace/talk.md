title: REST in peace
author:
  name: Fabien Furet
  twitter: RETFU
  url: http://fabienfuret.net
output: index.html
controls: true
style: assets/style.css

--

# REST in peace

-- 

### Qu'est-ce que REST? (1/x)

Representational State Transfer

--

# RTFM

-- 

### Qu'est-ce que REST? (1/x)

* CRUD HTTP
* Sans état
* Cachable
* Pas un standard mais un style d'architecture
* Utilise des standards

--

### Qu'est-ce que REST? (1/x)

URI = https://api.domain.com/v2/items/5 

Ressource = https://api.domain.com/v2/ **items/5**

Représentation
```json
{
  "id": 7856,
  "name": "Jo",
  "age": 18,
  "isGeek": true
  ...
}
```

-- 

### Qu'est-ce que REST? (1/x)

Modèle de maturité de Richardson
* Level1: les ressources
* Level2: verbes et code erreurs HTTP
* Level3: **hypermédia**

--

# No RESTFull don't care

--

### Les Bases (1/x)

* SSL 
* UTF-8 partout
* Versionner via l'URL: https://api.domain.com/v2
> Max 2 versions en prod sinon c'est ingérable
> <br/>Via Header `Accept: application/json; version=2`

--

### Les Bases (1/x)



--

### Les Bases (1/x)

<br/>

| Type | Description |
| ------------ | ------------- |
| String | Encodée en UTF-8 |
| Integer | Entier signé en 32-bit ou 64-bit |
| Float | Nombre flottant signé en 32-bit ou 64-bit |
| Boolean | true ou false |
| Date | **UTC** et au format [ISO8601](https://en.wikipedia.org/wiki/ISO_8601)<br/>`2015-07-31T20:00:01Z` |

--

# Ressources

--

### Convention / Formalisme

* Toujours au pluriel
* Nommé avec des - ou des _
* les ids sont des UUID
* Ne reflète pas forcément votre modèle de donnée

--

### Interactions

| URL | Action |
| ----------------------- | ------------- |
| GET /items | Liste d'item |
| GET /items/1782 | Item 1782 |
| POST /items | Creation d'un nouvel item |
| PUT /items | Mise à jour de plusieurs items |
| PUT /items/1782 | Mise à jour de l'item 1782 |
| **PATCH** /items/1782  | Mise à jour partielle de l'item 1782 |
| DELETE /items/1782 | Suppression de l'item 1782 |

--

### Relations

| URL | Action |
| ------------ | ------------- |
| GET /items/1782/comments | Liste de commentaire de l'item 1782 |
| GET /items/1782/comments/56 | Commentaire 56 de l'item #1782 |
| POST /items/1782/comments | Création d'un commentaire pour l'item 1782 |
| PUT /items/1782/comments/56 | Mise à jour du commentaire 56 pour l'item 1782 |
| **PATCH** /items/1782/comments/56 | Mise à jour partielle du commentaire #56 pour l'item #1782 |
| DELETE /items/1782/comments/56 | Suppression du commentaire 56 pour l'item 1782 |

--

### Actions

On utilise toujours **POST**.

| URL | Action |
| ------------ | ------------- |
| POST /items/1782/translate | Traduit l'item 1782 |
| POST /items/1782/enable | Active l'item 1782 |
| POST /items/1782/comments/56/star | Met en favori le commentaire 56 de l'item 1782 |

--

# Authentification

--

### HTTP basic authentification

On envoie le header Authorization:

```http
Authorization: Basic cGhwOm1lZXR1cA==
```

* username:password encodé en base64
* toujours utilisé avec SSL
* on doit maîtrise le client et le serveur

> Rapide à mettre en place, mais pas très secure, on doit avoir les credentials sur le client

--

### Basique API Key?

--

### Query Authentification

```http
GET /items?param=X&timestamp=1261496500&apiKey=XYZ&signature=3051d3c053e291b723f169
```

* le client signe la requête <br/>```SHA256( items?param=X&timestamp=1261496500&apiKey=XYZ )```
* le serveur 
    * valide la signature
    * vérifie si timestamp < X secondes (X étant définit sur le serveur)

> Il faut que le client et le serveur soit configuré de la même façon niveau date pour avoir des timestamps comparables

--

### OAuth2

RTFM

--

# Requête

--

### Headers

```bash
$ curl -X POST https://api.domain.com/v2/items \
    -H "Content-Type: application/json;charset=utf-8" \
    -H "Accept: application/json" \
    -H "Accept-Encoding: gzip" \
    -H "X-Request-UUID: 454684315618613" \
    -d '{"name": "Jo", "age": 55, "isGeek": true}'

{
  "id": 7856,
  "name": "Jo",
  "age": 18,
  "isGeek": true
  ...
}
```

--

### Body

* JSON pour POST, PUT ou PATCH
* Sérialisation identique entre le body requète et réponse
* Passer des représentations complètes ou partielles
* Bénéficier du typage JSON: `Array` `String` `Number` `Object` `Boolean` `Null`

> On peut supporter `x-www-form-urlencoded` en parallèle
> Obligera côter serveur à typer les valeurs manuelement et on n'aura pas de structure de ressource out of box.

--

### Erreurs

| HTTP status code | Information |
| ------------ | ------------- |
| 406 Not acceptable | Format de retour non disponible<br/>(la requête demande du XML alors qu'on ne gère que du JSON) |
| 415 Unsupported Media Type | Content type pas supporté<br/>(on envoie du XML alors qu'on ne suppporte que JSON) |

--

# Réponse

--

### Formats

* JSON uniquement
* JSON pretty print

![JSON vs XML](assets/jsonvsxml.png)

> Plus personne n'utilise XML sauf dans un contexte grand compte / DSI
> Donc `Accept: application/json; application/xml` mais on garde JSON en choix n°1

--

### Formats

Pas d'enveloppe

```json
{
  "id": 7856,
  "name": "Jo",
  "age": 18,
  "isGeek": true
}
```

Plutôt que

```json
{
  "item": {
    "id": 7856,
    "name": "Jo",
    "age": 18,
    "isGeek": true,
    "country_id": 569
  }
}
```

--

### Formats

Si on a des ressources imbriquées

```json
{
  "id": 7856,
  "name": "Jo",
  "age": 18,
  "isGeek": true,
  "country": {
    "id": 569
  }
}
```

Plutôt que

```json
{
  "id": 7856,
  "name": "Jo",
  "age": 18,
  "isGeek": true,
  "country_id": 569
}
```

--

### Formats

```http
X-Resource-Nested: true
```

```json
{
  "id": 7856,
  "name": "Jo",
  "age": 18,
  "isGeek": true,
  "country": {
    "id": 569,
    "name": "France",
    "codeISO": "FR"
  }
}
```

--