# Exercice 1 — Configuration de React-Admin

## 🎯 Objectif

Configurer l’application React-Admin pour se connecter à une API simulée avec `json-server`.


##  Question 1.1 — Qu’est-ce que le dataProvider ?

Le **dataProvider** est une couche d’abstraction entre React-Admin et l’API.

### Rôle :

* Envoyer les requêtes HTTP (GET, POST, PUT, DELETE)
* Adapter les réponses de l’API au format attendu par React-Admin

###  Fonctionnement :

React-Admin appelle des méthodes comme :

* `getList()`
* `getOne()`
* `create()`
* `update()`
* `delete()`

Le dataProvider traduit ces appels en requêtes HTTP vers l’API.


---

##  Question 1.2 — Requête HTTP envoyée

Lorsque la liste des employés est chargée, React-Admin envoie une requête HTTP de type :

```
GET http://localhost:3002/employees
```

Avec les paramètres de pagination et tri :

```
GET /employees?_page=1&_perPage=10&_sort=id&_order=ASC
```

