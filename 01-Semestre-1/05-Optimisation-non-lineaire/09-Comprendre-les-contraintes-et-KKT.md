# Comprendre les contraintes et les conditions KKT

> [!abstract] Objectif de cette note
> Reprendre le [[New chapitrer chapitre des contrainte|chapitre 3]] sans supposer que tu connais déjà l'optimisation avec contraintes. L'exemple de Sly Cooper, les démonstrations et les exercices ci-dessous sont des **ajouts pédagogiques**, pas des paroles attribuées au professeur.

## En une minute

On cherche à rendre une quantité $f(x)$ aussi petite que possible, mais on ne peut choisir que les points $x$ qui respectent toutes les contraintes. Ces points forment l'ensemble réalisable $S$.

Sur le bord de $S$, un déplacement peut faire baisser $f$ tout en étant interdit. Il faut donc tenir compte à la fois de la pente de $f$ et des frontières. Les **conditions KKT** écrivent cet équilibre avec des multiplicateurs $u_i$.

| Question | Ce qu'il faut calculer |
| --- | --- |
| Le point est-il autorisé ? | Vérifier $g_i(x)\leq0$ pour tout $i$ |
| Quelle frontière touche-t-on ? | Chercher les contraintes avec $g_i(x)=0$ |
| Dans quelle direction peut-on bouger ? | Tester les directions admissibles |
| Le point peut-il être optimal ? | Vérifier KKT si ses hypothèses sont réunies |

## Une image mentale avec Sly Cooper

> [!example] Analogie personnelle
> Sly veut atteindre un trésor situé au point $(2,\frac32)$. Il ne peut entrer que dans une cour en forme de **demi-disque droit**. La fonction
> $f(x_1,x_2)=(x_1-2)^2+2(x_2-\frac32)^2$
> mesure son éloignement du trésor, avec une pénalité deux fois plus forte pour l'écart vertical. Le trésor est hors de la cour. Sly doit choisir le meilleur endroit **dans la cour**. Le mur droit et l'arc de cercle sont les contraintes.

L'analogie sert à retenir les mots :

- **objectif** : ce que Sly veut réduire, ici $f$
- **contraintes** : les limites de la cour
- **point réalisable** : un endroit où Sly peut se tenir
- **contrainte active** : un mur que Sly touche
- **direction admissible** : un petit pas qui ne traverse pas le mur

## Lire les deux contraintes du cours

L'exemple du cours demande de minimiser

$$
f(x_1,x_2)=(x_1-2)^2+2\left(x_2-\frac32\right)^2
$$

sous

$$
g_1(x)=x_1^2+x_2^2-2\leq0,
\qquad
g_2(x)=-x_1\leq0.
$$

On réécrit chaque inégalité pour voir sa forme :

$$
g_1(x)\leq0
\quad\Longleftrightarrow\quad
x_1^2+x_2^2\leq2
$$

donne l'intérieur et le bord d'un disque de rayon $\sqrt2$.

$$
g_2(x)\leq0
\quad\Longleftrightarrow\quad
x_1\geq0
$$

ne conserve que la moitié droite du plan. Les deux conditions doivent être vraies **en même temps**, donc $S$ est le demi-disque droit.

> [!warning] Le signe à surveiller
> La contrainte écrite $-x_1\leq0$ signifie $x_1\geq0$. Quand on multiplie une inégalité par $-1$, on inverse son sens.

## Pourquoi le meilleur point libre ne marche pas

Sans contrainte, les deux carrés de $f$ valent zéro au point $(2,\frac32)$. C'est le minimum libre.

Mais

$$
g_1\left(2,\frac32\right)
=4+\frac94-2
=\frac{17}{4}>0.
$$

Le point est hors du disque. On ne peut pas le retenir. La meilleure courbe de niveau de $f$ autorisée est une ellipse qui touche le demi-disque.

Pour se repérer, voici plusieurs valeurs :

| Point | Réalisable ? | Valeur de $f$ |
| --- | --- | ---: |
| $(2,\frac32)$ | Non, hors du disque | $0$ |
| $(0,0)$ | Oui | $\frac{17}{2}=8,5$ |
| $(0,\sqrt2)$ | Oui | $4+2(\sqrt2-\frac32)^2$ |
| $(1,1)$ | Oui, sur le cercle | $\frac32=1,5$ |

Ces comparaisons donnent une intuition. Pour **prouver** que $(1,1)$ est optimal, nous utiliserons KKT et la convexité plus bas.

## Comprendre une direction admissible

Au point $x$, une direction $d$ est admissible si les points $x+\lambda d$ restent autorisés pour **tous les pas assez petits** $\lambda\geq0$.

À l'origine $(0,0)$, le disque laisse encore de la place autour de nous. Le seul mur que l'on touche est $x_1=0$. La direction $(1,0)$ est autorisée, car $(\lambda,0)$ est dans le demi-disque lorsque $\lambda$ est petit. La direction $(-1,0)$ traverse immédiatement le mur et est interdite.

Le gradient de l'objectif à l'origine est

$$
\nabla f(0,0)=(-4,-6)^T.
$$

Si l'on avance selon $d=(1,0)$, le produit scalaire vaut

$$
\nabla f(0,0)^Td=(-4,-6)\cdot(1,0)=-4<0.
$$

Une pente négative signifie que $f$ diminue au début du déplacement. L'origine ne peut donc pas être un minimum local.

### Comment calculer les contraintes actives

Une contrainte $g_i(x)\leq0$ est active si **$g_i(x)=0$**. Si $g_i(x)<0$, il reste de la marge avant de toucher cette frontière.

À l'origine :

$$
g_1(0,0)=-2<0,\qquad g_2(0,0)=0,
\qquad I(0,0)=\{2\}.
$$

Le gradient de la seule contrainte active vaut $\nabla g_2=(-1,0)^T$. Son test du premier ordre est

$$
\nabla g_2(0,0)^T d=-d_1\leq0
\quad\Longleftrightarrow\quad d_1\geq0.
$$

Cela confirme qu'on peut partir vers la droite. Ici, ce test décrit aussi exactement les directions admissibles, car la frontière proche de l'origine est une droite.

## Une direction qui passe le test mais sort du disque

C'est le point le plus délicat du chapitre. Au sommet $x^1=(0,\sqrt2)$, les deux contraintes sont actives. Leurs gradients sont

$$
\nabla g_1(x^1)=(0,2\sqrt2)^T,
\qquad
\nabla g_2(x^1)=(-1,0)^T.
$$

Le test linéarisé donne

$$
d_1\geq0,\qquad d_2\leq0.
$$

La direction horizontale $d=(1,0)$ passe ce test : $d_1=1\geq0$ et $d_2=0\leq0$. Pourtant, si l'on fait un vrai pas,

$$
x^1+\lambda d=(\lambda,\sqrt2).
$$

Alors

$$
g_1(x^1+\lambda d)
=\lambda^2+(\sqrt2)^2-2
=\lambda^2>0
\qquad\text{pour tout }\lambda>0.
$$

On sort du disque immédiatement. **Le test du gradient n'a vu que l'ordre $\lambda$**, qui est nul ici. La courbure apparaît à l'ordre $\lambda^2$.

> [!important] À retenir
> $G(x^1)$ contient $d=(1,0)$, mais $D(x^1)$ ne le contient pas. Ainsi, $D(x^1)\subsetneq G(x^1)$. Pour cette géométrie précise,
>
> $$
> D(x^1)=\{d\mid d_1\geq0,\ d_2<0\}\cup\{(0,0)\}.
> $$
>
> Une direction qui descend strictement entre dans le disque pour un pas assez petit. Une direction parfaitement horizontale non nulle en sort.

## Lire les conditions KKT sans les mémoriser à l'aveugle

Pour des contraintes $g_i(x)\leq0$, on définit le lagrangien

$$
L(x,u)=f(x)+\sum_i u_i g_i(x),
\qquad u_i\geq0.
$$

Les quatre vérifications à effectuer sont :

1. **Faisabilité** : $g_i(x^*)\leq0$ pour tous les $i$
2. **Stationnarité** : $\nabla_xL(x^*,u)=\nabla f(x^*)+\sum_i u_i\nabla g_i(x^*)=0$
3. **Complémentarité** : $u_i g_i(x^*)=0$ pour tous les $i$
4. **Signe** : $u_i\geq0$ pour tous les $i$

La complémentarité signifie que **soit** la contrainte ne touche pas le point optimal et son multiplicateur est nul, **soit** elle touche le point et son multiplicateur peut être positif.

Le multiplicateur mesure la contribution de la frontière à l'équilibre du gradient. Si $u_i>0$, enlever ou déplacer cette frontière pourrait changer la valeur optimale.

## Résolution complète de l'exemple du cours

> [!note] Calcul pédagogique ajouté
> Les photos montrent l'exemple et les conditions KKT, puis s'arrêtent avant cette résolution complète. Les étapes ci-dessous prolongent le cours pour te montrer comment t'en servir.

On teste le point $x^*=(1,1)$ que l'on voit sur le dessin.

### Étape 1 — Vérifier les contraintes

$$
g_1(1,1)=1+1-2=0,\qquad
g_2(1,1)=-1<0.
$$

Le point est réalisable. La contrainte du cercle est **active**. Le mur vertical est **inactif**, donc la complémentarité impose $u_2=0$.

### Étape 2 — Calculer les gradients

$$
\nabla f(x)=
\begin{pmatrix}2(x_1-2)\\4(x_2-\frac32)\end{pmatrix},
\qquad
\nabla g_1(x)=\begin{pmatrix}2x_1\\2x_2\end{pmatrix},
\qquad
\nabla g_2(x)=\begin{pmatrix}-1\\0\end{pmatrix}.
$$

Au point $(1,1)$ :

$$
\nabla f(1,1)=\begin{pmatrix}-2\\-2\end{pmatrix},
\qquad
\nabla g_1(1,1)=\begin{pmatrix}2\\2\end{pmatrix}.
$$

### Étape 3 — Trouver les multiplicateurs

Avec $u_2=0$, la stationnarité devient

$$
\begin{pmatrix}-2\\-2\end{pmatrix}
+u_1\begin{pmatrix}2\\2\end{pmatrix}
=\begin{pmatrix}0\\0\end{pmatrix}.
$$

Chaque composante donne $-2+2u_1=0$, donc **$u_1=1$**. Le signe $u_1\geq0$ est bien respecté. La complémentarité donne $1\cdot g_1(1,1)=0$ et $0\cdot g_2(1,1)=0$.

### Étape 4 — Conclure correctement

La fonction $f$ est **strictement convexe**, car sa Hessienne est

$$
\nabla^2 f=\begin{pmatrix}2&0\\0&4\end{pmatrix},
$$

qui est définie positive. La fonction $g_1$ est convexe, car sa Hessienne est $2I_2$. La fonction $g_2$ est affine, donc convexe. L'ensemble réalisable est convexe.

Un point réalisable qui vérifie KKT est alors un **minimum global**. Comme $f$ est strictement convexe, ce minimum est **unique**. La réponse est

$$
\boxed{x^*=(1,1),\qquad f(x^*)=\frac32.}
$$

> [!success] Vérification rapide
> $(1,1)$ est bien sur le cercle car $1^2+1^2=2$. Il est bien dans la moitié droite car $1\geq0$. Le gradient de $f$ pointe vers le sud-ouest et le gradient de la contrainte du cercle vers le nord-est. Avec $u_1=1$, les deux se compensent.

## Pourquoi la qualification des contraintes compte

La diapositive écrit **« sous (QC) »** sans définir $(QC)$. Il s'agit d'une hypothèse qui permet d'affirmer que les multiplicateurs KKT existent à un optimum local. Sans elle, on peut avoir un optimum pour lequel les conditions KKT ne s'appliquent pas sous cette forme.

Dans un problème convexe avec seulement des inégalités, une condition courante est **Slater** : il existe un point qui satisfait **strictement** toutes les inégalités. Ici, par exemple, $\bar x=(\frac12,0)$ donne

$$
g_1(\bar x)=\frac14-2=-\frac74<0,
\qquad
g_2(\bar x)=-\frac12<0.
$$

L'exemple vérifie donc cette condition. On peut utiliser KKT pour chercher l'optimum, puis la convexité pour confirmer que le candidat obtenu est global.

> [!warning] Deux sens à distinguer
> Avec une qualification adaptée, un optimum local **doit** vérifier KKT. Dans un problème convexe, un point réalisable qui **vérifie** KKT est un optimum global. C'est ainsi que l'on obtient une caractérisation.

## À toi de faire

### Exercice 1 — Une autre frontière du demi-disque

Au point $a=(\sqrt2,0)$ du même ensemble $S$, trouve les contraintes actives et le cône $G(a)$. La direction $d=(0,1)$ est-elle admissible au sens exact ?

> [!success]- Correction
> $g_1(a)=0$ et $g_2(a)=-\sqrt2<0$, donc seule $g_1$ est active. Son gradient est $(2\sqrt2,0)^T$. Le test donne $2\sqrt2\,d_1\leq0$, soit $d_1\leq0$. La direction $(0,1)$ passe ce test, mais $a+\lambda d=(\sqrt2,\lambda)$ vérifie $g_1=\lambda^2>0$ pour tout $\lambda>0$. Elle n'est donc pas admissible.

### Exercice 2 — KKT en une dimension

Minimise $h(x)=(x-3)^2$ sous $x\leq1$. Écris la contrainte sous la forme $g(x)\leq0$, trouve l'optimum et son multiplicateur.

> [!success]- Correction
> On pose $g(x)=x-1\leq0$. Le meilleur point autorisé est $x^*=1$. La contrainte est active. On a $h'(1)=2(1-3)=-4$ et $g'(1)=1$. La stationnarité $-4+u=0$ donne $u=4\geq0$. La complémentarité vaut $4\cdot(1-1)=0$. Comme $h$ et $g$ sont convexes, $x^*=1$ est le minimum global.

### Exercice 3 — Refaire le calcul du cours

Sans regarder la solution, vérifie que $(1,1)$ satisfait les quatre lignes KKT pour $u_1=1$ et $u_2=0$. Calcule ensuite $f(1,1)$.

> [!success]- Correction
> $g_1(1,1)=0$, $g_2(1,1)=-1$, donc le point est réalisable. La stationnarité donne $(-2,-2)+(2,2)=(0,0)$. Les deux multiplicateurs sont positifs ou nuls. Enfin $u_1g_1=1\cdot0=0$ et $u_2g_2=0\cdot(-1)=0$. On obtient $f(1,1)=(1-2)^2+2(1-\frac32)^2=1+\frac12=\frac32$.

## Méthode à reproduire sur un nouvel exercice

1. Réécris chaque contrainte pour visualiser l'ensemble réalisable
2. Cherche le minimum sans contrainte et vérifie s'il est autorisé
3. Repère les contraintes actives aux points candidats
4. Écris le lagrangien avec des multiplicateurs **positifs** pour les contraintes $g_i\leq0$
5. Résous la stationnarité, la faisabilité et la complémentarité ensemble
6. Vérifie les hypothèses avant de conclure à un minimum global

**Retour au cours :** [[New chapitrer chapitre des contrainte|Chapitre 3 — Optimisation avec contraintes]].
