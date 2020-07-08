# Tech and Human Groupe 15

## Commands
```
yarn install
```

```
yarn serve
```
## Technos 
- Vue Js
- Greensock 
- SASS

## Description 

Histocom permet aux enfants de 8 à 13 ans d'apprendre quels outils de communication utilisés à travers les époques. Après avoir choisi l'époque qu'il veut étudier, l'enfant pourra lire des textes courts qui résument chacun les caractéristiques un outils. Chaque groupe d'outil correspond à une époque. Après ça, l'enfant répondra à un petit quizz (de 3 à 5 questions) pour vérifier si il a bien compris les notions abordées. L'objectif de notre site est d'apprendre en s'amusant. Nous comptons ajouter beaucoup d'animations et de transitions entre les pages afin de garder l'enfant concentré sur site. De plus, les illustrations en aplats de couleur permettent de rendre l'interface plus lisible et agréable à regarder.

Pour ce qui est des choix techniques, nous avons voulu privilégier le desktop étant donné que notre audience la plus jeune (8 ans) ne possède souvent pas de smartphone. De plus, leur seul accès à internet est souvent l'ordinateur familial, et plus occasionnellement une tablette. Nous utilisons Vue.js pour la possibilité d'ajouter des transitions entre les pages nativement, avec l'ajout de Greensock pour des transitions plus variées. Enfin, l'utilisation de Saas permet d'avoir un fichier CSS plus lisible et plus rapidement rédigé.

N'ayant pas de développeur back, nous utilisons un fichier Json pour stocker les textes ainsi que les quizzs. Ainsi, il est inutile de multiplier les pages à coder car seul les textes et certaines couleurs d'accentuation changeront d'une page à l'autre.

## Site Histocom

[Pour voir le site cliquez ici](https://histocom.netlify.app/#/)


## Argumentaire

# Vue.js 

Nous avons choisi d’utiliser le framework Vue.js pour sa fonctionnalité de routing plus simple à mettre en place. De plus, Vue.js a la capacité de gérer des templates dynamiques avec un contenu stocké dans un ou plusieurs fichiers .json. Cela nous a permis de développer un nombre limité de pages ou templates de pages pour un grand nombre final de page. 

# SCSS

Nous avons utilisé SCSS pour le rendu css car il permet de limiter le scope des balises css. Dans la mesure ou plusieurs templates se trouvent en même temps sur une même page (par exemple : pagePeriode.vue et App.vue) les scope limités du SCSS permet d’éviter au maximum les conflits de css.

# GREENSOCK


# Client side rendering

Dans la mesure où nous n’avons pas de développeur back, nous avons choisi d’utiliser le client side rendering. Notre site n’étant pas lourd, les temps de chargement ne sont pas trop ralongés comparé au server side rendering.

# Desktop first

Notre site s’adressant à des enfants de 8 à 13 ans qui ont, pour les plus jeunes, rarement des smartphones ou des tablettes à eux, nous avons décidé de développer en desktop first. En effet, le principal accès à internet d’un enfant est l’ordinateur familial. Néanmoins, les enfants ont de plus en plus de smartphones et donc une version mobile de notre site sera à prévoir pour les années futures.

# High-tech

# Amélioration progressive 

# PWA

# Compatibilité 
