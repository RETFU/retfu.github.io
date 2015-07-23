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

### Les Bases (1/x)

* SSL 
* UTF-8 partout
* Versionner via l'URL: https://api.domain.com/v2
> Max 2 versions en prod sinon c'est ingérable
> <br/>Via Header `Accept: application/json; version=2`

--

### Qu'est-ce que REST? (1/x)

* CRUD HTTP
* Stateless

--

### Qu'est-ce que REST? (1/x)

Modèle de maturité de Richardson
* Level1: les ressources
* Level2: verbes et code erreur HTTP
* Level3: hypermédia

--

### Les Bases (1/x)

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

### Ressources (1/x)

* API REST expose des ressources
* Ne reflète pas forcément votre modèle de donnée
* Toujours au pluriel
* Nommé avec des - ou des _
* les ids sont des UUID

--

### Ressources (1/x)

HTTP est le socle qui nous permet d'interragir avec nos ressources.

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

### Ressources (1/x)

Nos ressources ont parfois des relations

| URL | Action |
| ------------ | ------------- |
| GET /items/1782/comments | Liste de commentaire de l'item 1782 |
| GET /items/1782/comments/56 | Commentaire 56 de l'item #1782 |
| POST /items/1782/comments | Création d'un commentaire pour l'item 1782 |
| PUT /items/1782/comments/56 | Mise à jour du commentaire 56 pour l'item 1782 |
| **PATCH** /items/1782/comments/56 | Mise à jour partielle du commentaire #56 pour l'item #1782 |
| DELETE /items/1782/comments/56 | Suppression du commentaire 56 pour l'item 1782 |
