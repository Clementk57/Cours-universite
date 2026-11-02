# 2 — Convexité et valeurs propres

> [!info] Parcours
> [[05-Bases-et-optimalite|Bases et optimalité]] → [[06-Convexite-et-valeurs-propres|Convexité]] → [[07-Methodes-du-gradient|Gradient]] → [[02-Calculs-gradient-et-hessienne|Calculs du cours]] → [[03-Dichotomie-et-Newton|Newton]] → [[04-Quasi-Newton-et-gradient-stochastique|Quasi-Newton]]

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
