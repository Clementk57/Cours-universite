# Optimisation non linéaire

> [!abstract] Parcours du cours
> Cette note rassemble les bases, la convexité et le début des méthodes de gradient. La suite du même cours est organisée dans [[02-Calculs-gradient-et-hessienne|calculs de gradient et Hessienne]], [[03-Dichotomie-et-Newton|dichotomie et Newton]] puis [[04-Quasi-Newton-et-gradient-stochastique|quasi-Newton et gradient stochastique]].
>
> Pour réviser progressivement : [[01-Exercices-et-exemples]]. La note [[00-Optimisation-non-lineaire 1|source avec photographies]] est conservée.
>
> Pour retrouver la feuille du professeur et sa correction : [[TD1|TD 1 — optimisation sans contrainte]].

> [!tip] Lecture en petites parties
> [[05-Bases-et-optimalite|1. Bases et optimalité]] → [[06-Convexite-et-valeurs-propres|2. Convexité et valeurs propres]] → [[07-Methodes-du-gradient|3. Méthodes du gradient]] → [[02-Calculs-gradient-et-hessienne|4. Calculs du cours]] → [[03-Dichotomie-et-Newton|5. Dichotomie et Newton]] → [[04-Quasi-Newton-et-gradient-stochastique|6. Quasi-Newton et gradient stochastique]].
>
> Les trois premières parties reprennent le contenu de cette note pour permettre une lecture découpée. Cette version complète est conservée pour les liens existants.

> [!abstract] Chapitre 1 — Introduction et bases mathématiques
> Cours retranscrit à partir des photos du tableau et des diapositives.

## Bases mathématiques

Les domaines de base sont les suivants :

- l'analyse, notamment les fonctions de plusieurs variables
- l'algèbre des matrices

## Notion de programme mathématique

### Définition

Un **programme mathématique** est un problème de la forme :

$$
\begin{aligned}
\text{(Max)} \quad \min \quad & f(x) \\
\text{sous contraintes} \quad & g_i(x) \leq 0 \quad \text{pour } i = 1, \ldots, m \\
& x \in S \subset \mathbb{R}^n
\end{aligned}
$$

avec :

$$
\begin{aligned}
f : \mathbb{R}^n &\longrightarrow \mathbb{R}, & x &\longmapsto f(x) \\
g_i : \mathbb{R}^n &\longrightarrow \mathbb{R}, & x &\longmapsto g_i(x).
\end{aligned}
$$

> [!info] Vocabulaire
> La fonction $f$ est la fonction objectif. Les fonctions $g_i$ représentent les contraintes. L'ensemble $S$ représente l'ensemble dans lequel la solution $x$ doit se trouver.

### Exemple de programme linéaire

Le cours donne l'exemple suivant :

$$
\begin{aligned}
\min \quad & f(x) = 5x_1 + 5x_2 \\
\text{sous contraintes} \quad & g_1(x) = 10 - (3x_1 + 2x_2) \leq 0 \\
& g_2(x) = 15 - (2x_1 + 3x_2) \leq 0 \\
& x \in \mathbb{R}_+^2
\end{aligned}
$$

Lorsque les fonctions de l'objectif et des contraintes sont linéaires, le problème appartient à la **programmation linéaire**.

> [!note] Domaine positif
> $\mathbb{R}_+^2$ désigne les couples $(x_1,x_2)$ dont les deux composantes sont positives ou nulles.

### Exemples de programmes non linéaires

#### Premier exemple

$$
\begin{aligned}
\min \quad & f(x) = 2x_1^2 + 4x_2^3 \\
\text{sous contraintes} \quad & x_1^2 + x_2^2 \leq 4 \\
& x \in \mathbb{R}_+^2
\end{aligned}
$$

#### Exemple résolu au tableau

$$
\begin{aligned}
\min \quad & f(x) = 2x_1^2 + 4x_2^2 \\
\text{sous contraintes} \quad & x_1^2 + x_2^2 \leq 4 \\
& x \in \mathbb{R}_+^2
\end{aligned}
$$

La solution optimale indiquée dans le cours est :

$$
x^\star = (0,0)
\qquad \text{et} \qquad
f(x^\star) = 0.
$$

## Typologie des programmes mathématiques

| Hypothèses sur le problème | Type de programme |
| --- | --- |
| $f$ et $g_i$ sont non linéaires et continues, $S$ est compact | Programmation mathématique continue |
| $f$ est non linéaire, $m = 0$ et $S = \mathbb{R}^n$ | Optimisation non linéaire sans contraintes |
| $f$ et $g_i$ sont convexes | Programmation mathématique convexe |
| $f$ et $g_i$ sont linéaires, $S$ est continu | Programmation linéaire continue |
| $f$ et $g_i$ sont linéaires, $S$ est discret | Programmation linéaire en nombres entiers |

### Cas d'une fonction linéaire sans contrainte

Le cours présente le cas suivant :

$$
\begin{aligned}
\min \quad & f(x) \\
\text{sous contraintes} \quad & x \in \mathbb{R}^n
\end{aligned}
$$

Exemple :

$$
\begin{aligned}
\min \quad & 4x_1 + 5x_2 \\
\text{sous contraintes} \quad & x_1, x_2 \in \mathbb{R}
\end{aligned}
$$

## Produit scalaire et normes vectorielles

On travaille dans $\mathbb{R}^n$, l'espace des vecteurs de dimension $n$.

### Produit scalaire euclidien

Pour $x, y \in \mathbb{R}^n$, le produit scalaire euclidien est défini par :

$$
\langle x,y \rangle = \sum_{i=1}^{n} x_i y_i = x^\mathsf{T}y.
$$

avec :

$$
x^\mathsf{T} = (x_1, x_2, \ldots, x_n)
$$

et :

$$
x^\mathsf{T}y = x_1y_1 + x_2y_2 + \ldots + x_ny_n.
$$

### Normes usuelles

Pour $x \in \mathbb{R}^n$ :

$$
\lVert x \rVert_1 = \sum_{i=1}^{n} \lvert x_i \rvert
$$

$$
\lVert x \rVert_2 = \sqrt{\sum_{i=1}^{n} x_i^2} = \sqrt{\langle x,x \rangle}
$$

$$
\lVert x \rVert_\infty = \max_{1 \leq i \leq n} \lvert x_i \rvert.
$$

### Exemple graphique

Pour les vecteurs $x = (2,0)$ et $y = (0,1)$, le cours indique :

$$
\langle x,y \rangle = 0.
$$

Le schéma correspondant est conservé ci-dessous.

![[assets/Pasted image 20260914133837.png|700]]

## Dérivation et différentiabilité

Pour la fonction suivante :

$$
f(x) = 2x^2 - 3
\qquad \text{avec} \qquad x \in \mathbb{R}
$$

sa dérivée est :

$$
f'(x) = 4x.
$$

> [!tip] Condition nécessaire au point optimal
> Pour une fonction différentiable, la dérivée est nulle à un optimum local situé à l'intérieur du domaine. Ce résultat ne s'applique pas nécessairement à un point situé sur une frontière.

La tangente à la courbe de $f$ au point d'abscisse $a$ est donnée par :

$$
t_a(x) = f(a) + f'(a)(x-a).
$$

Pour $a = 2$ :

$$
f(2) = 5.
$$

Les intersections avec l'axe des abscisses sont obtenues en résolvant :

$$
2x^2 - 3 = 0.
$$

Ainsi :

$$
2x^2 = 3
\qquad \Longleftrightarrow \qquad
x^2 = \frac{3}{2}
\qquad \Longleftrightarrow \qquad
x = \pm\sqrt{\frac{3}{2}}.
$$

## Gradient et Hessienne

> [!info] Gradient
> Le gradient est la généralisation de la notion de dérivée en dimension $n$ quelconque.

Le gradient de $f$ en $x$ est :

$$
\nabla f(x) = \left(\frac{\partial f}{\partial x_i}(x)\right)_{i=1,\ldots,n}.
$$

### Exemple de calcul du gradient

Pour :

$$
f(x) = x_1^2 + 4x_2^3
$$

on obtient :

$$
\nabla f(x) =
\begin{pmatrix}
2x_1 \\
12x_2^2
\end{pmatrix}.
$$

### Matrice Hessienne

Si chaque dérivée partielle $\frac{\partial f}{\partial x_i}$ est différentiable, la matrice Hessienne est :

$$
\nabla^2 f(x) =
\left(
\frac{\partial^2 f}{\partial x_i \partial x_j}(x)
\right)_{i,j=1,\ldots,n}.
$$

Si $f$ est de classe $C^2$, alors $\nabla^2 f(x)$ est symétrique, d'après le théorème de Schwarz.

### Illustration des conditions nécessaires

Le cours considère :

$$
f : \mathbb{R}^2 \longrightarrow \mathbb{R}
\qquad \text{avec} \qquad
f(x_1,x_2) = x_1^2 + x_2^4.
$$

Le point étudié est :

$$
x^\star = (0,0).
$$

Le gradient de cette fonction est :

$$
\nabla f(x_1,x_2) =
\begin{pmatrix}
2x_1 \\
4x_2^3
\end{pmatrix}.
$$

Au point $x^\star$ :

$$
\nabla f(0,0) =
\begin{pmatrix}
0 \\
0
\end{pmatrix}.
$$

La première condition nécessaire est donc satisfaite : le point $(0,0)$ est stationnaire.

La Hessienne est :

$$
\nabla^2 f(x_1,x_2) =
\begin{pmatrix}
2 & 0 \\
0 & 12x_2^2
\end{pmatrix}.
$$

En $(0,0)$, elle devient :

$$
\nabla^2 f(0,0) =
\begin{pmatrix}
2 & 0 \\
0 & 0
\end{pmatrix}.
$$

Pour tout vecteur $u=(u_1,u_2)^T$, on obtient :

$$
u^T \nabla^2 f(0,0) u = 2u_1^2 \geq 0.
$$

La Hessienne est donc semi-définie positive. Enfin, comme $x_1^2 \geq 0$ et $x_2^4 \geq 0$, on a :

$$
f(x_1,x_2) \geq 0 = f(0,0).
$$

> [!success] Conclusion de l'illustration
> Le point $(0,0)$ vérifie les deux conditions nécessaires et c'est bien un minimum global de $f$.

![[assets/IMG_7341.jpeg|800]]

## Développement de Taylor-Young à l'ordre 2

> [!note] Formule de Taylor-Young
> Soit $f : \mathbb{R}^n \longrightarrow \mathbb{R}$ une fonction de classe $C^2$. Au voisinage de $x^\star$, son développement limité à l'ordre $2$ est :

$$
\begin{aligned}
f(x) ={}& f(x^\star)
+ \nabla f(x^\star)^T(x-x^\star) \\
&+ \frac{1}{2}(x-x^\star)^T \nabla^2 f(x^\star)(x-x^\star) \\
&+ \lVert x-x^\star \rVert^2 \varepsilon(x-x^\star),
\end{aligned}
$$

avec :

$$
\lim_{x \to x^\star} \varepsilon(x-x^\star) = 0.
$$

Ce développement est la base des conditions d'optimalité et de la caractérisation de la convexité.

### Lecture de la formule

En posant $h=x-x^\star$, la formule compare la valeur de $f$ en un point proche $x$ avec sa valeur au point de référence $x^\star$.

- Le terme $f(x^\star)$ est la valeur au point étudié
- Le terme $\nabla f(x^\star)^T h$ est l'approximation de premier ordre
- Le terme $\frac{1}{2}h^T\nabla^2f(x^\star)h$ décrit la courbure de la fonction
- Le dernier terme devient négligeable quand $x$ se rapproche de $x^\star$

Si $x^\star$ est un minimum local, il ne doit exister aucune petite direction qui fasse diminuer $f$. Cela impose que le gradient soit nul et que la courbure ne soit pas négative.

## Conditions nécessaires d'optimalité locale

> [!important] Théorème
> Soit $f$ de classe $C^2$ sur $\mathbb{R}^n$. Si $x^\star$ est un minimum local ou global, alors :
>
> 1. $\nabla f(x^\star) = 0$  
>    C'est la condition de **stationnarité**
>
> 2. $\nabla^2 f(x^\star) \succeq 0$  
>    La Hessienne est **semi-définie positive**

Pour une fonction d'une seule variable, ces deux conditions deviennent :

$$
f'(x^\star) = 0
\qquad \text{et} \qquad
f''(x^\star) \geq 0.
$$

> [!warning] Sens logique du théorème
> Minimum local ou global implique stationnarité et Hessienne semi-définie positive. La réciproque n'est pas toujours vraie.

### Sens de « semi-définie positive »

> [!definition] Définition
> Une matrice symétrique $A \in \mathbb{R}^{m \times m}$ est semi-définie positive si et seulement si :

$$
\forall x \in \mathbb{R}^m,
\qquad
x^T A x \geq 0.
$$

### Pourquoi ces conditions sont seulement nécessaires

Elles permettent d'écarter certains points, mais elles ne garantissent pas à elles seules qu'un point est un minimum.

#### Contre-exemple 1 — un maximum

Soit :

$$
f(x) = -x^2.
$$

Au point $x^\star = 0$ :

$$
f'(x) = -2x
\qquad \text{donc} \qquad
f'(0) = 0,
$$

mais :

$$
f''(x) = -2 < 0.
$$

Le point $0$ est donc un **maximum local**, et non un minimum.

![[assets/IMG_7347.jpeg|800]]

#### Contre-exemple 2 — un point qui n'est ni minimum ni maximum

Soit :

$$
f(x) = x^3.
$$

Au point $x^\star = 0$ :

$$
f'(x) = 3x^2
\qquad \text{et} \qquad
f''(x) = 6x,
$$

d'où :

$$
f'(0) = 0
\qquad \text{et} \qquad
f''(0) = 0.
$$

Les deux conditions nécessaires sont satisfaites, mais $0$ n'est ni un minimum local ni un maximum local car la fonction change de signe autour de $0$.

![[assets/IMG_7349 1.jpeg|800]]

## Notion d'optimum global

> [!success] Définition
> La solution $x^\star \in D$ est dite **optimum global** du problème $(P)$ si :
>
> $$
> f(x^\star) \leq f(x) \qquad \forall x \in D.
> $$

Un optimum global est meilleur que tous les points autorisés de $D$.

Un optimum local est seulement meilleur que les points suffisamment proches. Il existe un rayon $r>0$ tel que :

$$
f(x^\star) \leq f(x)
\qquad
\forall x \in D \cap B(x^\star,r).
$$

Un optimum global est donc toujours un optimum local. L'inverse n'est pas forcément vrai.

![[assets/Pasted image 20260914134407.png|850]]

## Condition suffisante d'optimalité locale

Les conditions nécessaires précédentes permettent de repérer les candidats possibles. La condition suivante permet réellement de conclure qu'un candidat est un minimum local.

> [!important] Théorème
> Soit $f : \mathbb{R}^n \longrightarrow \mathbb{R}$ une fonction de classe $C^2$.
>
> Si un point $x^\star$ vérifie :
>
> $$
> \nabla f(x^\star)=0
> $$
>
> et :
>
> $$
> \nabla^2f(x^\star)\succ 0,
> $$
>
> alors $x^\star$ est un **minimum local strict** de $f$.

La notation $\nabla^2f(x^\star)\succ0$ signifie que la Hessienne est **définie positive** :

$$
u^T\nabla^2f(x^\star)u>0
\qquad
\text{pour tout }u\neq0.
$$

> [!tip] Interprétation géométrique
> Le gradient nul indique que le sol est horizontal au point étudié. La Hessienne définie positive indique que la fonction remonte dans toutes les directions autour de ce point. Le point se trouve donc au fond d'une vallée locale.

### Ne pas confondre les deux théorèmes

| Type de condition | Hypothèses au point $x^\star$ | Ce que l'on peut conclure |
| --- | --- | --- |
| Condition nécessaire | $x^\star$ est déjà supposé minimum | $\nabla f(x^\star)=0$ et $\nabla^2f(x^\star)\succeq0$ |
| Condition suffisante | $\nabla f(x^\star)=0$ et $\nabla^2f(x^\star)\succ0$ | $x^\star$ est un minimum local strict |

> [!warning] Cas où la Hessienne est seulement semi-définie positive
> Si $\nabla^2f(x^\star)\succeq0$ sans être définie positive, le test ne permet pas toujours de conclure.
>
> Pour $f(x)=x^4$, le point $0$ est un minimum malgré $f''(0)=0$.
>
> Pour $g(x)=x^3$, le point $0$ n'est ni un minimum ni un maximum alors que $g''(0)=0$.

### Exemple rapide

Soit :

$$
f(x_1,x_2)=(x_1-2)^2+3(x_2+1)^2.
$$

Son gradient est :

$$
\nabla f(x_1,x_2)=
\begin{pmatrix}
2(x_1-2)\\
6(x_2+1)
\end{pmatrix}.
$$

Le seul point stationnaire est $x^\star=(2,-1)$. La Hessienne vaut :

$$
\nabla^2f(x_1,x_2)=
\begin{pmatrix}
2&0\\
0&6
\end{pmatrix}.
$$

Ses deux valeurs propres sont strictement positives. La Hessienne est définie positive, donc $(2,-1)$ est un minimum local strict. Comme la fonction est une somme de carrés, il s'agit aussi du minimum global.

# Chapitre 2 — Convexité et méthodes de gradient

## Ensembles convexes

> [!definition] Définition
> Un ensemble $S\subset\mathbb{R}^n$ est **convexe** si, pour tous $x,y\in S$ et pour tout $\lambda\in[0,1]$, on a :
>
> $$
> \lambda x+(1-\lambda)y\in S.
> $$

Le point $\lambda x+(1-\lambda)y$ parcourt le segment reliant $x$ à $y$. Un ensemble est donc convexe lorsque le segment qui relie deux de ses points reste entièrement dans l'ensemble.

> [!example] Exemple du cours
> L'ensemble défini par :
>
> $$
> x_1\geq0,
> \qquad
> x_2\geq0,
> \qquad
> x_2\leq2,
> \qquad
> x_1+x_2\leq4
> $$
>
> est convexe. Chaque inégalité définit un demi-plan convexe et leur intersection reste convexe.

![[assets/IMG_7385.jpeg|750]]

### Exemples simples

- Un intervalle de $\mathbb{R}$ est convexe
- Un disque plein est convexe
- Un rectangle est convexe
- Un demi-plan est convexe
- Un cercle sans son intérieur n'est pas convexe
- Un ensemble en forme de croissant n'est généralement pas convexe

## Fonctions convexes

> [!definition] Définition
> Soit $S\subset\mathbb{R}^n$ un ensemble convexe. Une fonction $f:S\longrightarrow\mathbb{R}$ est **convexe** si, pour tous $x,y\in S$ et pour tout $\lambda\in[0,1]$, on a :
>
> $$
> f\bigl(\lambda x+(1-\lambda)y\bigr)
> \leq
> \lambda f(x)+(1-\lambda)f(y).
> $$

Le membre de gauche est la valeur de la fonction à un point du segment $[x,y]$. Le membre de droite est la hauteur du segment reliant les points $(x,f(x))$ et $(y,f(y))$.

> [!tip] Lecture géométrique
> Pour une fonction convexe, la courbe reste sous toutes ses cordes. La fonction forme une vallée et ne présente pas de sommet caché entre deux points.

![[assets/IMG_7389.jpeg|750]]

### Exemple fondamental

La fonction $f(x)=x^2$ est convexe sur $\mathbb{R}$ car :

$$
f''(x)=2\geq0
\qquad
\forall x\in\mathbb{R}.
$$

La fonction $g(x)=-x^2$ n'est pas convexe. Elle est concave car :

$$
g''(x)=-2\leq0.
$$

## Programme d'optimisation convexe

Un programme d'optimisation convexe s'écrit sous la forme :

$$
\min_{x\in S} f(x),
$$

avec :

- $S\subset\mathbb{R}^n$ convexe
- $f:S\longrightarrow\mathbb{R}$ convexe

> [!success] Propriété essentielle
> Dans un problème convexe, tout minimum local est aussi un minimum global.

En effet, si un point était seulement meilleur dans son voisinage mais moins bon qu'un point éloigné, la convexité créerait sur le segment une direction permettant d'améliorer immédiatement la valeur. Cela contredirait le caractère localement optimal du point.

> [!important] Cas sans contrainte
> Si $f$ est convexe et différentiable sur $\mathbb{R}^n$, alors tout point $x^\star$ vérifiant :
>
> $$
> \nabla f(x^\star)=0
> $$
>
> est un minimum global.

Si $f$ est strictement convexe, elle possède au plus un minimum global.

## Caractérisation de la convexité par la Hessienne

> [!important] Théorème
> Soit $S$ un ouvert convexe de $\mathbb{R}^n$ et soit $f:S\longrightarrow\mathbb{R}$ une fonction de classe $C^2$.
>
> La fonction $f$ est convexe sur $S$ si et seulement si :
>
> $$
> \nabla^2f(x)\succeq0
> \qquad
> \forall x\in S.
> $$

Cette condition peut aussi s'écrire :

$$
y^T\nabla^2f(x)y\geq0
\qquad
\forall x\in S,
\quad
\forall y\in\mathbb{R}^n.
$$

Pour une fonction d'une seule variable, la Hessienne se réduit à la dérivée seconde. On retrouve donc :

$$
f\text{ convexe}
\quad\Longleftrightarrow\quad
f''(x)\geq0
\qquad
\forall x\in S.
$$

> [!warning] Différence importante
> Pour vérifier la convexité de $f$, il faut étudier la Hessienne en **tout point** du domaine. Pour tester un candidat à l'optimalité locale, on étudie seulement la Hessienne au point candidat.

### Exemple avec deux variables

Soit :

$$
f(x_1,x_2)=x_1^2-x_1x_2+x_2^2.
$$

La Hessienne est constante :

$$
\nabla^2f(x_1,x_2)=
\begin{pmatrix}
2&-1\\
-1&2
\end{pmatrix}.
$$

Ses valeurs propres sont $1$ et $3$. Elles sont strictement positives, donc la Hessienne est définie positive. La fonction est strictement convexe sur $\mathbb{R}^2$.

## Valeurs propres et vecteurs propres

> [!definition] Valeur propre
> Soit $A\in\mathbb{R}^{n\times n}$. Un réel $\lambda$ est une valeur propre de $A$ s'il existe un vecteur non nul $v\in\mathbb{R}^n$ tel que :
>
> $$
> Av=\lambda v.
> $$
>
> Le vecteur $v$ est alors un vecteur propre associé à $\lambda$.

L'action de la matrice sur un vecteur propre ne change pas sa direction, sauf éventuellement son sens. Elle multiplie sa longueur par $|\lambda|$.

| Valeur de $\lambda$ | Effet géométrique |
| --- | --- |
| $|\lambda|>1$ | Dilatation |
| $0<|\lambda|<1$ | Contraction |
| $\lambda<0$ | Inversion du sens en plus du changement d'échelle |
| $\lambda=0$ | Écrasement de la direction sur le vecteur nul |

### Comment calculer les valeurs propres

Les valeurs propres sont les solutions de l'équation caractéristique :

$$
\det(A-\lambda I)=0.
$$

Une fois $\lambda$ trouvée, les vecteurs propres associés sont les solutions non nulles de :

$$
(A-\lambda I)v=0.
$$

## Exemple complet de diagonalisation

Considérons la matrice symétrique :

$$
A=
\begin{pmatrix}
2&-1\\
-1&2
\end{pmatrix}.
$$

### Première étape — Polynôme caractéristique

$$
\begin{aligned}
p_A(\lambda)
&=\det(A-\lambda I)\\
&=\det
\begin{pmatrix}
2-\lambda&-1\\
-1&2-\lambda
\end{pmatrix}\\
&=(2-\lambda)^2-1\\
&=\lambda^2-4\lambda+3\\
&=(\lambda-1)(\lambda-3).
\end{aligned}
$$

Les valeurs propres sont donc :

$$
\lambda_1=1
\qquad
\text{et}
\qquad
\lambda_2=3.
$$

### Deuxième étape — Vecteur propre associé à $\lambda_1=1$

On résout :

$$
(A-I)v=0.
$$

Cela donne :

$$
\begin{pmatrix}
1&-1\\
-1&1
\end{pmatrix}
\begin{pmatrix}
v_1\\
v_2
\end{pmatrix}
=
\begin{pmatrix}
0\\
0
\end{pmatrix}.
$$

On obtient $v_1=v_2$. Un vecteur propre possible est $(1,1)^T$. Après normalisation :

$$
u_1=\frac{1}{\sqrt2}
\begin{pmatrix}
1\\
1
\end{pmatrix}.
$$

### Troisième étape — Vecteur propre associé à $\lambda_2=3$

On résout :

$$
(A-3I)v=0.
$$

Cela donne :

$$
\begin{pmatrix}
-1&-1\\
-1&-1
\end{pmatrix}
\begin{pmatrix}
v_1\\
v_2
\end{pmatrix}
=
\begin{pmatrix}
0\\
0
\end{pmatrix}.
$$

On obtient $v_1=-v_2$. Un vecteur propre possible est $(1,-1)^T$. Après normalisation :

$$
u_2=\frac{1}{\sqrt2}
\begin{pmatrix}
1\\
-1
\end{pmatrix}.
$$

### Quatrième étape — Écriture diagonale

On rassemble les vecteurs propres normalisés dans la matrice $Q$ et les valeurs propres dans la matrice $\Lambda$ :

$$
Q=\frac{1}{\sqrt2}
\begin{pmatrix}
1&1\\
1&-1
\end{pmatrix},
\qquad
\Lambda=
\begin{pmatrix}
1&0\\
0&3
\end{pmatrix}.
$$

La matrice $Q$ est orthogonale, donc $Q^TQ=I$. La diagonalisation de $A$ est :

$$
A=Q\Lambda Q^T.
$$

## Théorème spectral et positivité

> [!important] Théorème spectral
> Toute matrice réelle symétrique $A\in\mathbb{R}^{n\times n}$ possède des valeurs propres réelles et une base orthonormée de vecteurs propres.
>
> Il existe donc une matrice orthogonale $Q$ et une matrice diagonale $\Lambda$ telles que :
>
> $$
> A=Q\Lambda Q^T,
> \qquad
> Q^TQ=I,
> \qquad
> \Lambda=\operatorname{diag}(\lambda_1,\ldots,\lambda_n).
> $$

Soit $y\neq0$. En posant $w=Q^Ty$, on obtient :

$$
\begin{aligned}
y^TAy
&=y^TQ\Lambda Q^Ty\\
&=w^T\Lambda w\\
&=\sum_{i=1}^{n}\lambda_iw_i^2.
\end{aligned}
$$

Cette formule permet de lire directement la positivité d'une matrice symétrique.

| Valeurs propres de $A$ | Nature de $A$ |
| --- | --- |
| Toutes les valeurs propres sont strictement positives | Définie positive |
| Toutes les valeurs propres sont positives ou nulles | Semi-définie positive |
| Toutes les valeurs propres sont strictement négatives | Définie négative |
| Présence de valeurs propres positives et négatives | Indéfinie |

Dans l'exemple précédent, les valeurs propres de $A$ sont $1$ et $3$. Elles sont toutes les deux strictement positives. La matrice $A$ est donc définie positive.

> [!success] Lien direct avec la convexité
> Une fonction $f$ de classe $C^2$ est convexe lorsque toutes les valeurs propres de sa Hessienne sont positives ou nulles en tout point du domaine.
>
> Si toutes les valeurs propres de la Hessienne sont strictement positives en tout point, alors $f$ est strictement convexe.

## Direction de descente

> [!definition] Définition du cours
> Soient $x\in\mathbb{R}^n$ et $d\in\mathbb{R}^n\setminus\{0\}$. Le vecteur $d$ est une **direction de descente** de $f$ au point $x$ s'il existe $\nu>0$ tel que :
>
> $$
> f(x+\alpha d)<f(x)
> \qquad
> \forall\alpha\in(0,\nu].
> $$

Autrement dit, si l'on part de $x$ et que l'on avance d'un petit pas positif dans la direction $d$, la valeur de la fonction diminue.

Pour une fonction différentiable, on utilise l'approximation :

$$
f(x+\alpha d)
=f(x)+\alpha\nabla f(x)^Td+o(\alpha).
$$

On en déduit le critère pratique suivant.

> [!important] Critère de descente
> Si :
>
> $$
> \nabla f(x)^Td<0,
> $$
>
> alors $d$ est une direction de descente de $f$ en $x$.

### Direction de plus forte descente

Lorsque $\nabla f(x)\neq0$, le choix naturel est :

$$
d=-\nabla f(x).
$$

En effet :

$$
\nabla f(x)^Td
=\nabla f(x)^T\bigl(-\nabla f(x)\bigr)
=-\lVert\nabla f(x)\rVert^2
<0.
$$

Le vecteur $-\nabla f(x)$ indique donc la direction de plus forte diminution locale de la fonction pour la norme euclidienne.

### Principe de la méthode du gradient

À partir d'un point initial $x_0$, on construit une suite :

$$
x_{k+1}=x_k-\alpha_k\nabla f(x_k),
$$

où $\alpha_k>0$ est le pas de déplacement.

```mermaid
flowchart LR
    A[Point actuel xₖ] --> B[Calculer le gradient ∇f(xₖ)]
    B --> C[Prendre la direction opposée]
    C --> D[Choisir un pas αₖ]
    D --> E[Calculer xₖ₊₁]
    E --> F{Gradient assez petit}
    F -- Non --> B
    F -- Oui --> G[Arrêt]
```

> [!warning] Rôle du pas
> Un pas trop grand peut dépasser la vallée et faire augmenter la fonction. Un pas trop petit fait progresser très lentement. Le choix de $\alpha_k$ est donc essentiel.

## Méthode de résolution à retenir

Pour un problème sans contrainte, on peut suivre l'ordre suivant :

1. Calculer le gradient $\nabla f(x)$
2. Résoudre $\nabla f(x)=0$
3. Calculer la Hessienne $\nabla^2f(x)$
4. Étudier ses valeurs propres
5. Conclure sur la nature de chaque point stationnaire
6. Vérifier si la convexité permet de transformer le minimum local en minimum global

> [!abstract] Résumé express
> Gradient nul donne un candidat.
>
> Hessienne définie positive au candidat donne un minimum local strict.
>
> Hessienne semi-définie positive partout donne une fonction convexe.
>
> Fonction convexe et gradient nul donnent un minimum global.
>
> Le vecteur opposé au gradient fournit une direction de descente.

---

# Chapitre 2 — Méthodes de gradient

## Pourquoi l'opposé du gradient fait descendre

Le critère précédent permet déjà de vérifier rapidement que $-\nabla f(x)$ est une direction de descente. Le cours donne aussi une justification plus détaillée à partir du développement de Taylor.

Supposons que $f$ soit de classe $C^2$ au voisinage de $x^*$ et que $\nabla f(x^*)\neq0$. Pour $x$ proche de $x^*$, on écrit :

$$
\begin{aligned}
f(x)
={}&f(x^*)+\nabla f(x^*)^T(x-x^*)\\
&+\frac12(x-x^*)^T\nabla^2f(x^*)(x-x^*)\\
&+\lVert x-x^*\rVert^2\varepsilon(x-x^*)
\end{aligned}
$$

avec $\varepsilon(h)\to0$ lorsque $h\to0$.

On choisit maintenant un déplacement opposé au gradient :

$$
x=x^*-\alpha\nabla f(x^*)
$$

où $\alpha>0$. Alors :

$$
\begin{aligned}
f(x)-f(x^*)
={}&-\alpha\lVert\nabla f(x^*)\rVert^2\\
&+\frac{\alpha^2}{2}\nabla f(x^*)^T\nabla^2f(x^*)\nabla f(x^*)\\
&+\alpha^2\lVert\nabla f(x^*)\rVert^2
\varepsilon\bigl(-\alpha\nabla f(x^*)\bigr)
\end{aligned}
$$

Le premier terme est strictement négatif et il est d'ordre $\alpha$. Les deux autres termes sont d'ordre $\alpha^2$. Pour $\alpha$ suffisamment petit, le terme négatif domine donc les autres et :

$$
f\bigl(x^*-\alpha\nabla f(x^*)\bigr)<f(x^*).
$$

> [!success] Conclusion
> Lorsque $\nabla f(x^*)\neq0$, le vecteur $-\nabla f(x^*)$ est bien une direction de descente en $x^*$.

> [!warning] Ce que la preuve ne dit pas
> Elle garantit la descente pour un pas suffisamment petit. Elle ne garantit pas qu'un pas arbitrairement grand fera diminuer la fonction.

## Courbes et ensembles de niveau

Soient $f:\mathbb{R}^n\to\mathbb{R}$ et $c\in\mathbb{R}$. L'ensemble de niveau associé à $c$ est :

$$
N_c=\left\{x\in\mathbb{R}^n\mid f(x)=c\right\}.
$$

Dans le plan, on parle souvent de **courbe de niveau**. Tous les points d'une même courbe donnent exactement la même valeur de $f$.

### Lien entre le gradient et une courbe de niveau

Considérons une courbe $\gamma(t)$ qui reste dans $N_c$. On a :

$$
f\bigl(\gamma(t)\bigr)=c.
$$

En dérivant par rapport à $t$ :

$$
\nabla f\bigl(\gamma(t)\bigr)^T\gamma'(t)=0.
$$

Le vecteur $\gamma'(t)$ est tangent à la courbe de niveau. Le gradient lui est donc orthogonal.

> [!important] Propriété géométrique
> Si $f$ est différentiable et si $\nabla f(x)\neq0$, alors le gradient est perpendiculaire à la courbe de niveau qui passe par $x$.
>
> $$
> \nabla f(x)\perp N_{f(x)}
> $$
>
> Le gradient pointe vers la plus forte augmentation locale. Son opposé pointe vers la plus forte diminution locale.

### Exemple avec $f(x_1,x_2)=x_1^2+x_2^4$

Les courbes de niveau vérifient :

$$
x_1^2+x_2^4=c.
$$

Le gradient vaut :

$$
\nabla f(x_1,x_2)=
\begin{pmatrix}
2x_1\\
4x_2^3
\end{pmatrix}.
$$

Au point considéré, le gradient est normal à la courbe de niveau. Le vecteur $-\nabla f$ pointe vers des niveaux plus faibles et donc vers le minimum global $(0,0)$.

![[assets/IMG_7441.jpeg|800]]

> [!tip] Image mentale
> Les courbes de niveau ressemblent aux lignes d'altitude d'une carte. Le gradient monte la pente la plus raide. L'opposé du gradient descend la pente la plus raide.

### Exemple au tableau avec $f(x_1,x_2)=x_1^2+x_2^2$

Pour cette fonction :

$$
\nabla f(x_1,x_2)=
\begin{pmatrix}
2x_1\\
2x_2
\end{pmatrix}.
$$

Les ensembles de niveau sont :

$$
N_c
=\left\{(x_1,x_2)\in\mathbb{R}^2
\mid x_1^2+x_2^2=c\right\}.
$$

Pour $c\geq0$, ce sont des cercles de centre $(0,0)$ et de rayon $\sqrt c$. Au point :

$$
x^0=
\begin{pmatrix}
x_1^0\\
x_2^0
\end{pmatrix}
$$

le gradient vaut :

$$
\nabla f(x^0)=
\begin{pmatrix}
2x_1^0\\
2x_2^0
\end{pmatrix}.
$$

Ce vecteur est radial et pointe vers l'extérieur du cercle, donc vers des valeurs plus grandes de $f$. Son opposé pointe vers l'origine, qui est le minimum global.

## Algorithme de descente de gradient

La méthode transforme le principe géométrique en une suite de calculs.

> [!example] Algorithme général
> **Entrée** : un point initial $x^0$
>
> 1. Poser $k=0$
> 2. Calculer $d^k=-\nabla f(x^k)$
> 3. Choisir un pas $\alpha_k>0$
> 4. Calculer $x^{k+1}=x^k+\alpha_kd^k$
> 5. Remplacer $k$ par $k+1$
> 6. Recommencer tant que le critère d'arrêt n'est pas satisfait

Comme $d^k=-\nabla f(x^k)$, la mise à jour s'écrit aussi :

$$
x^{k+1}=x^k-\alpha_k\nabla f(x^k).
$$

### Critères d'arrêt

Le cours propose plusieurs critères possibles.

#### Gradient presque nul avec la norme euclidienne

$$
\lVert\nabla f(x^k)\rVert_2<\varepsilon
$$

#### Gradient presque nul avec la norme infinie

$$
\lVert\nabla f(x^k)\rVert_\infty<\varepsilon
$$

avec :

$$
\lVert v\rVert_\infty=\max_i|v_i|.
$$

#### Variation de la fonction presque nulle

$$
\left|f(x^{k+1})-f(x^k)\right|<\varepsilon.
$$

#### Nombre maximal d'itérations atteint

$$
k\geq k_{\max}.
$$

> [!warning] Bon usage
> Une très petite variation de $f$ peut aussi venir d'un pas beaucoup trop petit. En pratique, on combine souvent un test sur le gradient avec un nombre maximal d'itérations.

## Choix du pas

Le pas $\alpha_k$ détermine la distance parcourue dans la direction de descente. Son choix influence fortement la vitesse et la stabilité de la méthode.

### Heuristique d'augmentation et de réduction

La règle présentée dans le cours part d'une valeur initiale $\alpha_0>0$.

À l'itération $k$ :

1. Calculer $d^k=-\nabla f(x^k)$
2. Former $x^{k+1}=x^k+\alpha_kd^k$
3. Si $f(x^{k+1})>f(x^k)$, prendre $\alpha_{k+1}=0{,}5\alpha_k$
4. Sinon, prendre $\alpha_{k+1}=1{,}2\alpha_k$

L'idée est simple. Un pas qui fait monter la fonction est réduit. Un pas qui réussit à faire descendre la fonction peut être légèrement agrandi pour progresser plus vite.

> [!warning] Précision d'implémentation
> Dans une version robuste, si le nouvel essai fait augmenter $f$, on rejette généralement cet essai puis on recalcule le point avec le pas réduit. Cela évite d'accepter une itération qui dégrade la valeur de la fonction.

### Pas décroissant avec gradient normalisé

Une autre variante normalise le gradient :

$$
x^{k+1}
=x^k-\alpha_k
\frac{\nabla f(x^k)}{\lVert\nabla f(x^k)\rVert}.
$$

La norme du déplacement est alors exactement $\alpha_k$. La grandeur du gradient ne modifie plus directement la longueur du pas.

Le résultat attribué à Polyak dans le cours utilise :

$$
\alpha_0=1
$$

et, pour $k\geq1$ :

$$
\alpha_k=\frac1k.
$$

La diapositive annonce une convergence vers un point stationnaire sans préciser les hypothèses nécessaires. Le choix des pas seul ne suffit pas à garantir cette conclusion pour toute fonction. Il faut vérifier les hypothèses du théorème avant de l'appliquer.

> [!info] Intuition
> Au début, les pas sont grands pour explorer rapidement. Ensuite, ils deviennent plus petits pour stabiliser l'approche du point stationnaire.

## Méthode de la plus forte pente avec recherche exacte

Dans cette méthode, on utilise toujours la direction $-\nabla f(x^k)$, mais on choisit le meilleur pas possible sur cette demi-droite.

$$
x^{k+1}=x^k-\alpha_k\nabla f(x^k)
$$

avec :

$$
\alpha_k
\in\operatorname*{argmin}_{\alpha\geq0}
f\bigl(x^k-\alpha\nabla f(x^k)\bigr).
$$

On ramène donc le problème à plusieurs variables à un problème en une seule variable. On définit :

$$
g_k(\alpha)=f\bigl(x^k-\alpha\nabla f(x^k)\bigr).
$$

Puis on cherche un minimiseur de $g_k$ sur $\alpha\geq0$.

### Orthogonalité de deux gradients successifs

Si le minimum de $g_k$ est intérieur et si $g_k$ est dérivable, alors :

$$
g_k'(\alpha_k)=0.
$$

Par la règle de dérivation en chaîne :

$$
g_k'(\alpha)
=-\nabla f(x^k)^T
\nabla f\bigl(x^k-\alpha\nabla f(x^k)\bigr).
$$

Or :

$$
x^{k+1}=x^k-\alpha_k\nabla f(x^k).
$$

Donc :

$$
\nabla f(x^k)^T\nabla f(x^{k+1})=0.
$$

> [!important] Conséquence
> Avec une recherche exacte, deux gradients successifs sont orthogonaux. Les deux directions de descente successives le sont également.

### Exemple complet

Considérons :

$$
f(x_1,x_2)=x_1^2+x_2^2
$$

avec :

$$
x^0=
\begin{pmatrix}
1\\
2
\end{pmatrix}.
$$

Le gradient est :

$$
\nabla f(x)=
\begin{pmatrix}
2x_1\\
2x_2
\end{pmatrix}
$$

donc :

$$
\nabla f(x^0)=
\begin{pmatrix}
2\\
4
\end{pmatrix}.
$$

On cherche le minimum de :

$$
\begin{aligned}
g_0(\alpha)
&=f\bigl(x^0-\alpha\nabla f(x^0)\bigr)\\
&=(1-2\alpha)^2+(2-4\alpha)^2.
\end{aligned}
$$

Sa dérivée vaut :

$$
\begin{aligned}
g_0'(\alpha)
&=-2(1-2\alpha)-4(2-4\alpha)\\
&=20\alpha-10.
\end{aligned}
$$

Ainsi :

$$
g_0'(\alpha)=0
\quad\Longrightarrow\quad
\alpha_0=\frac12.
$$

La nouvelle position est :

$$
x^1
=
\begin{pmatrix}
1\\
2
\end{pmatrix}
-\frac12
\begin{pmatrix}
2\\
4
\end{pmatrix}
=
\begin{pmatrix}
0\\
0
\end{pmatrix}.
$$

Le minimum global est atteint en une seule itération.

## Zigzag dans une vallée étroite

Considérons la fonction quadratique :

$$
q(x_1,x_2)=x_1^2+20x_2^2.
$$

Ses courbes de niveau sont les ellipses :

$$
x_1^2+20x_2^2=c
$$

avec $c>0$. Sa Hessienne vaut :

$$
\nabla^2q=
\begin{pmatrix}
2&0\\
0&40
\end{pmatrix}.
$$

Les deux directions n'ont donc pas la même courbure. La fonction varie vingt fois plus fortement suivant $x_2$ que suivant $x_1$.

![[assets/IMG_7462.jpeg|800]]

La recherche exacte donne des directions successives orthogonales. Dans une vallée très allongée, les itérés rebondissent d'un bord à l'autre. La méthode descend, mais elle avance lentement vers le minimum.

> [!warning] Phénomène de zigzag
> La direction choisie est la meilleure localement, mais elle ne tient pas compte de la forme générale de la vallée. Une forte différence entre les valeurs propres de la Hessienne peut donc ralentir la descente de gradient.

## Descente de gradient avec momentum

Le momentum ajoute une partie du déplacement précédent à la nouvelle mise à jour. Il joue le rôle d'une inertie.

On note :

$$
\Delta x^0=0
$$

et, pour $k\geq1$ :

$$
\Delta x^k=x^k-x^{k-1}.
$$

La mise à jour avec momentum est :

$$
x^{k+1}
=x^k-\alpha_k\nabla f(x^k)+\beta\Delta x^k
$$

avec :

$$
\beta\in[0,1).
$$

- Si $\beta=0$, on retrouve la descente de gradient classique
- Si $\beta$ est proche de $1$, le déplacement précédent influence fortement le nouveau mouvement
- Dans une direction stable, les déplacements s'accumulent et accélèrent la progression
- Dans une direction où le signe alterne, les oscillations tendent à se compenser

> [!tip] Intuition
> Une bille qui descend une vallée conserve une partie de sa vitesse. Elle accélère dans la direction générale de la vallée et évite de repartir entièrement de zéro à chaque étape.

### Momentum de Nesterov

La variante de Nesterov calcule le gradient légèrement en avant, au point prédit par le momentum :

$$
x^{k+1}
=x^k
-\alpha_k\nabla f\bigl(x^k+\beta\Delta x^k\bigr)
+\beta\Delta x^k.
$$

La différence essentielle est donc le point où le gradient est évalué.

| Méthode | Point d'évaluation du gradient |
| --- | --- |
| Gradient avec momentum | $x^k$ |
| Momentum de Nesterov | $x^k+\beta\Delta x^k$ |

> [!abstract] Résumé du chapitre 2
> Le gradient est orthogonal aux courbes de niveau et pointe vers la montée la plus forte.
>
> Son opposé est une direction de descente lorsque le gradient est non nul.
>
> Le pas peut être ajusté par heuristique, rendu décroissant ou obtenu par recherche exacte.
>
> La recherche exacte rend les gradients successifs orthogonaux.
>
> Une vallée très allongée produit souvent un zigzag lent.
>
> Le momentum réutilise une partie du déplacement précédent pour accélérer et réduire certaines oscillations.
