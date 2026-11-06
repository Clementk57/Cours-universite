# Suite du cours sur les contraintes — dualité et preuve de KKT

> [!abstract] Place dans le cours
> Cette séance prolonge [[New chapitrer chapitre des contrainte|le chapitre sur les contraintes]]. Le professeur rappelle la **dualité en programmation linéaire**, s'en sert pour construire les **conditions KKT**, puis résout l'exemple du demi-disque. Les 25 photos, en JPG et en HEIC original, sont rangées dans [[Archives photographiques - dualite et KKT|l'archive de la séance]].

> [!info] Méthode de lecture
> Le texte et les formules du tableau sont retranscrits dans l'ordre chronologique des photos. Les passages signalés comme **compléments** ajoutent les étapes de calcul nécessaires pour comprendre. Les photos 2 à 4 se répètent et la photo 5 ne montre que le mot « exemple ».

## Sommaire

1. [[#1. Primal et dual en programmation linéaire|Primal et dual]]
2. [[#2. Dualité faible et dualité forte|Dualité faible et forte]]
3. [[#3. Tableau de passage du primal au dual|Tableau de passage]]
4. [[#4. Retour au problème non linéaire|Retour au problème non linéaire]]
5. [[#5. La preuve de KKT par la dualité|Preuve de KKT]]
6. [[#6. Exemple du cours — le demi-disque|Exemple du demi-disque]]
7. [[#7. Hessienne, convexité et unicité|Convexité et unicité]]

## 1. Primal et dual en programmation linéaire

Le tableau appelle **primal** le programme suivant. Le vecteur $x\in\mathbb R^n$ contient les variables, $c\in\mathbb R^n$ les coûts, $A\in\mathbb R^{m\times n}$ les coefficients des contraintes et $b\in\mathbb R^m$ les seuils.

$$
\boxed{(P)\quad \min c^Tx\quad\text{sous}\quad Ax\geq b,\quad x\geq0.}
$$

L'inégalité $Ax\geq b$ se lit **ligne par ligne**. À chaque ligne, on associe un multiplicateur $u_i$. Les $m$ multiplicateurs forment $u\in\mathbb R^m$. Le problème **dual** écrit au tableau est

$$
\boxed{(D)\quad \max u^Tb\quad\text{sous}\quad u^TA\leq c^T,\quad u\geq0.}
$$

L'objectif dual peut se développer en $u_1b_1+u_2b_2+\cdots+u_mb_m$. Écrire $A^Tu\leq c$ revient au même que $u^TA\leq c^T$.

> [!tip] Correspondance
> Le primal **minimise** sous $Ax\geq b$. Le dual **maximise** sous $A^Tu\leq c$. Les $m$ contraintes du primal fournissent $m$ variables duales. Les $n$ variables du primal fournissent $n$ contraintes duales.

### Exemple posé par le professeur

$$
\begin{array}{ll}
\min &4x_1+5x_2\\
\text{sous} &2x_1+x_2\geq6\\
&x_1+2x_2\geq7\\
&x_2\geq3\\
&x_1,x_2\geq0.
\end{array}
$$

Les multiplicateurs des trois contraintes sont $u_1,u_2,u_3\geq0$. Le dual obtenu avec la règle du cours est

$$
\begin{array}{ll}
\max &6u_1+7u_2+3u_3\\
\text{sous} &2u_1+u_2\leq4\\
&u_1+2u_2+u_3\leq5\\
&u_1,u_2,u_3\geq0.
\end{array}
$$

> [!example] Complément calculé sur l'exemple du tableau
> Le point primal $x=(\frac32,3)$ est réalisable et coûte $4\times\frac32+5\times3=21$. Le point dual $u=(2,0,3)$ est réalisable et vaut $6\times2+7\times0+3\times3=21$. La dualité faible prouvée ci-dessous établit qu'ils sont tous deux optimaux. La deuxième contrainte primale est stricte, car $\frac32+2\times3=\frac{15}{2}>7$, et son multiplicateur est nul, $u_2=0$.

**Sources :** [[Archives photographiques - dualite et KKT#Photos 1 à 7 — rappel et exemple linéaire|photos 1 à 7]]. Le dual chiffré et sa résolution sont des compléments.

## 2. Dualité faible et dualité forte

### Dualité faible

Le tableau énonce que si $x$ est réalisable pour $(P)$ et $u$ réalisable pour $(D)$, alors

$$
\boxed{u^Tb\leq c^Tx.}
$$

**Complément, preuve en deux lignes.** De $Ax\geq b$ et $u\geq0$, on obtient $u^Tb\leq u^TAx$. De $u^TA\leq c^T$ et $x\geq0$, on obtient $u^TAx\leq c^Tx$. En les réunissant, on retrouve l'inégalité du tableau.

Toute solution duale réalisable fournit donc une **borne inférieure** à la valeur d'une solution primale. Si les valeurs optimales existent, on note $V(D)\leq V(P)$.

![[01-Semestre-1/05-Optimisation-non-lineaire/assets/Contraintes-suite/sources/20261106_135441469_iOS.jpg|900]]

*Photo 8 : dualité faible et position des valeurs $V(D)$ et $V(P)$ sur la droite du tableau.*

### Dualité forte

Le professeur donne ensuite le théorème suivant pour cette paire de programmes linéaires : si les deux problèmes sont réalisables et possèdent des valeurs optimales finies, alors

$$
\boxed{V(P)=V(D).}
$$

Dans l'exemple précédent, les deux points trouvés donnent effectivement la même valeur $21$.

> [!warning] Ne pas confondre
> La **dualité faible** compare n'importe quelles solutions réalisables. La **dualité forte** affirme l'égalité des valeurs à l'optimum, sous les hypothèses du théorème. C'est la dualité linéaire que le professeur utilise ensuite dans sa preuve de KKT.

**Sources :** [[Archives photographiques - dualite et KKT#Photos 8 et 9 — dualité faible et forte|photos 8 et 9]].

## 3. Tableau de passage du primal au dual

Le professeur dessine un tableau pour passer d'un problème de **minimisation primal** à son dual.

| Côté primal | Côté dual |
| --- | --- |
| Objectif $\min$ | Objectif $\max$ |
| Contrainte $a_i^Tx\geq b_i$ | Variable $u_i\geq0$ |
| Contrainte $a_i^Tx\leq b_i$ | Variable $u_i\leq0$ |
| Contrainte $a_i^Tx=b_i$ | Variable $u_i$ libre dans $\mathbb R$ |
| Variable $x_j\geq0$ | Contrainte $(A^Tu)_j\leq c_j$ |
| Variable $x_j\leq0$ | Contrainte $(A^Tu)_j\geq c_j$ |
| Variable $x_j$ libre dans $\mathbb R$ | Contrainte $(A^Tu)_j=c_j$ |

Le dernier cas servira immédiatement : la **direction** $d$ du problème auxiliaire sera une variable libre, ce qui produira une **égalité** dans son dual.

![[01-Semestre-1/05-Optimisation-non-lineaire/assets/Contraintes-suite/sources/20261106_140520056_iOS.jpg|900]]

*Photo 10 : tableau de passage écrit au tableau.*

## 4. Retour au problème non linéaire

Après le rappel linéaire, le cours revient à

$$
\boxed{\min_{x\in\mathbb R^n}f(x)
\quad\text{sous}\quad g_i(x)\leq0,
\quad i=1,\ldots,m.}
$$

On fixe un point réalisable $x^*$ et on note l'ensemble des contraintes **actives**

$$
I(x^*)=\{i\in\{1,\ldots,m\}\mid g_i(x^*)=0\}.
$$

Une contrainte avec $g_i(x^*)<0$ est **inactive**. Elle laisse encore de la marge autour de $x^*$.

### Développement au premier ordre

Le tableau écrit, pour $x$ proche de $x^*$,

$$
f(x)=f(x^*)+\nabla f(x^*)^T(x-x^*)+o(\|x-x^*\|).
$$

En posant $x=x^*+\lambda d$ avec $\lambda>0$ petit, cela donne

$$
f(x^*+\lambda d)=f(x^*)
+\lambda\nabla f(x^*)^Td+o(\lambda).
$$

Si $d$ est une direction **réellement réalisable** et si $x^*$ est un minimum local, le terme de premier ordre ne peut pas être négatif. Il faut donc $\nabla f(x^*)^Td\geq0$.

Pour une contrainte active $g_i(x^*)=0$, le test linéarisé au tableau est

$$
\nabla g_i(x^*)^Td\leq0
\quad\Longleftrightarrow\quad
-\nabla g_i(x^*)^Td\geq0.
$$

Le professeur choisit la deuxième écriture pour retrouver la forme $\geq$ de son primal linéaire.

> [!important] Rôle de la qualification des contraintes
> Une direction qui passe le **test linéarisé** n'est pas toujours une direction qui permet un pas droit réellement réalisable. Pour étendre la condition d'optimalité à tout le cône linéarisé et déduire des multiplicateurs, il faut une hypothèse de régularité, appelée **qualification des contraintes**. La diapositive la note $(QC)$, sans la définir sur les photos. Cette nuance évite de prendre la linéarisation pour une preuve valable sans hypothèse.

**Sources :** [[Archives photographiques - dualite et KKT#Photos 11 à 13 — retour au non linéaire|photos 11 à 13]].

## 5. La preuve de KKT par la dualité

Sous la qualification utilisée dans le cours, on considère le programme linéaire **auxiliaire** écrit au tableau :

$$
\begin{array}{ll}
\min_d &\nabla f(x^*)^Td\\
\text{sous} &-\nabla g_i(x^*)^Td\geq0,
\quad i\in I(x^*)\\
&d\in\mathbb R^n\text{ libre}.
\end{array}
$$

La direction $d=0$ est réalisable et vaut $0$. Si $x^*$ est optimal et si la qualification permet d'utiliser le cône linéarisé, aucune direction du programme ne peut donner une valeur négative. Sa valeur optimale est alors $0$.

Le dual **maximise $0$** avec des multiplicateurs $u_i\geq0$ et une égalité imposée par le fait que $d$ est libre :

$$
-\sum_{i\in I(x^*)}u_i\nabla g_i(x^*)
=\nabla f(x^*).
$$

En déplaçant tous les termes du même côté, on obtient la **stationnarité**

$$
\boxed{\nabla f(x^*)
+\sum_{i\in I(x^*)}u_i\nabla g_i(x^*)=0.}
$$

Pour une contrainte inactive, le tableau pose $u_i=0$. La somme peut alors porter sur toutes les contraintes et on obtient les conditions KKT complètes :

$$
\boxed{\begin{aligned}
g_i(x^*)&\leq0 &&\text{réalisabilité}\\
\nabla f(x^*)+\sum_{i=1}^m u_i\nabla g_i(x^*)&=0 &&\text{stationnarité}\\
u_i g_i(x^*)&=0 &&\text{complémentarité}\\
u_i&\geq0 &&\text{positivité}.
\end{aligned}}
$$

Si $g_i(x^*)<0$, l'égalité $u_i g_i(x^*)=0$ oblige $u_i=0$. Si $g_i(x^*)=0$, le multiplicateur peut être positif ou nul. La séance précédente donne le théorème, tandis que ces photos montrent comment il apparaît à partir de la dualité linéaire.

**Sources :** [[Archives photographiques - dualite et KKT#Photos 14 à 19 — preuve de KKT|photos 14 à 19]].

## 6. Exemple du cours — le demi-disque

Le professeur reprend l'exemple de la séance précédente :

$$
\begin{aligned}
f(x_1,x_2)&=(x_1-2)^2+2\left(x_2-\frac32\right)^2\\
g_1(x_1,x_2)&=x_1^2+x_2^2-2\leq0\\
g_2(x_1,x_2)&=-x_1\leq0.
\end{aligned}
$$

Les gradients écrits au tableau sont

$$
\nabla f(x)=\begin{pmatrix}2(x_1-2)\\4(x_2-\frac32)\end{pmatrix},
\quad
\nabla g_1(x)=\begin{pmatrix}2x_1\\2x_2\end{pmatrix},
\quad
\nabla g_2(x)=\begin{pmatrix}-1\\0\end{pmatrix}.
$$

Avec $u_1,u_2\geq0$, la stationnarité devient

$$
\begin{pmatrix}2(x_1-2)\\4(x_2-\frac32)\end{pmatrix}
+u_1\begin{pmatrix}2x_1\\2x_2\end{pmatrix}
+u_2\begin{pmatrix}-1\\0\end{pmatrix}
=\begin{pmatrix}0\\0\end{pmatrix}.
$$

Le système développé au tableau est

$$
\begin{cases}
2(x_1-2)+2u_1x_1-u_2=0\\
4(x_2-\frac32)+2u_1x_2=0\\
u_1(x_1^2+x_2^2-2)=0\\
u_2x_1=0\\
u_1,u_2\geq0.
\end{cases}
$$

Il faut aussi vérifier $x_1^2+x_2^2\leq2$ et $x_1\geq0$. La quatrième ligne vient de $u_2g_2(x)=-u_2x_1=0$, ce qui revient à $u_2x_1=0$.

### Le candidat $(1,1)$

Le professeur pose $x^*=(1,1)$. On vérifie

$$
g_1(1,1)=1+1-2=0,
\qquad
g_2(1,1)=-1<0.
$$

Le cercle est **actif**. La contrainte $x_1\geq0$ est **inactive**, donc $u_2=0$. Les deux équations de stationnarité donnent chacune $-2+2u_1=0$, d'où $u_1=1$. Les multiplicateurs $(u_1,u_2)=(1,0)$ satisfont la positivité et la complémentarité.

La valeur de l'objectif est

$$
f(1,1)=(-1)^2+2\left(-\frac12\right)^2
=\boxed{\frac32}.
$$

> [!tip] Ce que signifient les vecteurs
> $\nabla f(1,1)=(-2,-2)$ et $\nabla g_1(1,1)=(2,2)$ se compensent avec $u_1=1$. La baisse libre de $f$ pointe vers l'extérieur du disque. Sur le bord autorisé, on ne peut plus améliorer $f$ dans cette direction.

**Sources :** [[Archives photographiques - dualite et KKT#Photos 20 à 22 — calcul du demi-disque|photos 20 à 22]].

## 7. Hessienne, convexité et unicité

La photo 23 conclut à la stricte convexité. Pour l'objectif **de l'exemple du demi-disque**, le calcul complet est

$$
\nabla^2f(x)=\begin{pmatrix}2&0\\0&4\end{pmatrix}.
$$

Ses valeurs propres sont $2$ et $4$, toutes deux strictement positives. La fonction $f$ est donc **strictement convexe**. La contrainte $g_1$ est convexe et $g_2$ est affine, donc l'ensemble réalisable est convexe. Le point réalisable $(1,1)$ qui vérifie KKT est ainsi le **minimum global unique** :

$$
\boxed{x^*=(1,1),\qquad f(x^*)=\frac32,
\qquad (u_1,u_2)=(1,0).}
$$

> [!warning] Dernières photos, autre calcul de Hessienne
> La photo 24 montre $f(x_1,x_2)=x_1^2$, dont la Hessienne est $\operatorname{diag}(2,0)$. La photo 25 montre ensuite $\operatorname{diag}(2,\alpha)$, sans que $\alpha$ soit défini dans la photo. Cette dernière matrice est définie positive **si $\alpha>0$**. Ces calculs en marge ne changent pas la Hessienne $\operatorname{diag}(2,4)$ de l'exemple principal.

**Sources :** [[Archives photographiques - dualite et KKT#Photos 23 à 25 — convexité et autre Hessienne|photos 23 à 25]].

---

**Pour réviser :** [[09-Comprendre-les-contraintes-et-KKT|Explications et exercices sur KKT]] · [[Archives photographiques - dualite et KKT|Toutes les photos de la séance]] · [[New chapitrer chapitre des contrainte|Séance précédente]].
