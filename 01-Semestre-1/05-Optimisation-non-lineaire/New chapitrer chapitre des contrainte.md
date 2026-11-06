# Chapitre 3 — Optimisation non linéaire avec contraintes

> [!info] Source
> Transcription des **24 photographies du cours du 5 novembre 2026**, dans leur ordre. Les calculs et formules écrits au tableau ou projetés sont distingués des compléments pédagogiques. Voir aussi [[09-Comprendre-les-contraintes-et-KKT|les explications pas à pas]] et [[Archives photographiques - contraintes|l'archive des photos]].

## Sommaire

- [[#1. Problème avec contraintes|Problème et domaine réalisable]]
- [[#2. Exemple du demi-disque|Exemple du cours]]
- [[#3. Directions admissibles|Directions admissibles]]
- [[#4. Contraintes actives et cône linéarisé|Contraintes actives]]
- [[#5. Calculs aux points du tableau|Calculs aux points du tableau]]
- [[#6. Conditions KKT|Conditions KKT]]

## 1. Problème avec contraintes

Le chapitre porte sur les problèmes de la forme

$$
(P)\qquad \min_{x\in\mathbb R^n} f(x)
\quad\text{sous}\quad
g_i(x)\leq 0,\qquad i\in I=\{1,\ldots,m\}.
$$

Toutes les fonctions $f$ et $g_i$ sont supposées de classe $C^1$. Le **domaine réalisable** est

$$
S=\{x\in\mathbb R^n\mid g_i(x)\leq0\text{ pour tout }i\in I\}.
$$

Un point est **réalisable** s'il appartient à $S$. C'est seulement parmi ces points que l'on cherche le minimum de $f$.

**Sources :** [[Archives photographiques - contraintes#Photos 01 à 04 — présentation|photos 01 à 04]].

## 2. Exemple du demi-disque

Le problème suivi sur les diapositives et au tableau est

$$
\begin{aligned}
\min_{x=(x_1,x_2)\in\mathbb R^2}\quad
f(x)&=(x_1-2)^2+2\left(x_2-\frac32\right)^2\\
\text{sous}\quad
g_1(x)&=x_1^2+x_2^2-2\leq0\\
g_2(x)&=-x_1\leq0.
\end{aligned}
$$

La contrainte $g_1(x)\leq0$ équivaut à $x_1^2+x_2^2\leq2$. Elle délimite le disque fermé de centre $(0,0)$ et de rayon $\sqrt2$. La contrainte $g_2(x)\leq0$ équivaut à $x_1\geq0$. Leur intersection est le **demi-disque droit**, bord compris.

![[01-Semestre-1/05-Optimisation-non-lineaire/assets/Contraintes/sources/20261105_135724637_iOS.jpg|700]]

*Sur le tableau, la partie hachurée est réalisable. Le point $(2,\frac32)$ se trouve à l'extérieur.*

### Minimum sans contrainte

Comme $f$ est une somme de carrés, son minimum sur tout $\mathbb R^2$ est $0$, atteint en

$$
x^{\mathrm{libre}}=
\begin{pmatrix}2\\[2pt]\frac32\end{pmatrix}.
$$

Le tableau vérifie si ce point satisfait les contraintes

$$
g_1(x^{\mathrm{libre}})
=2^2+\left(\frac32\right)^2-2
=4+\frac94-2
=\frac{17}{4}>0.
$$

Il n'est **pas réalisable**. En revanche, $g_2(x^{\mathrm{libre}})=-2<0$. Le minimum du problème avec contraintes doit donc être cherché ailleurs.

### Courbes de niveau

Le tableau dessine les courbes de niveau $f(x)=c$

$$
(x_1-2)^2+2\left(x_2-\frac32\right)^2=c.
$$

Pour $c>0$, ce sont des ellipses centrées sur le minimum libre. Pour $c=0$, il reste seulement le point $(2,\frac32)$. On cherche la plus petite ellipse qui touche $S$.

**Sources :** [[Archives photographiques - contraintes#Photos 05 à 09 — domaine et niveau|photos 05 à 09]].

## 3. Directions admissibles

La diapositive définit une **direction admissible** $d\in\mathbb R^n$ en un point réalisable $x^*$. Il faut pouvoir avancer un peu sur la droite issue de $x^*$ sans quitter $S$

$$
\exists\delta>0\quad\forall\lambda\in[0,\delta],
\qquad x^*+\lambda d\in S.
$$

Le cours note $D(x^*)$ l'ensemble des directions admissibles. Il forme un cône.

> [!tip] Lecture géométrique
> À l'intérieur du domaine, toutes les directions sont possibles pour un déplacement assez petit. Sur le bord, certaines directions sortent immédiatement du domaine.

**Source :** [[Archives photographiques - contraintes#Photo 10 — direction admissible|photo 10]].

## 4. Contraintes actives et cône linéarisé

Au point réalisable $x^*$, une contrainte est **active** si elle vaut exactement zéro. Le cours écrit

$$
I(x^*)=\{i\in I\mid g_i(x^*)=0\}.
$$

La diapositive introduit ensuite l'ensemble des directions qui passent le test du premier ordre pour toutes les contraintes actives

$$
G(x^*)=
\left\{d\in\mathbb R^n\ \middle|\
\nabla g_i(x^*)^T d\leq0
\text{ pour tout }i\in I(x^*)\right\}.
$$

Le produit scalaire $\nabla g_i(x^*)^T d$ mesure la variation de la contrainte au premier ordre. Le tableau rappelle la formule géométrique

$$
\langle a,b\rangle=\|a\|\,\|b\|\cos\theta,
$$

où $\theta$ est l'angle entre $a$ et $b$.

> [!warning] Deux ensembles à distinguer
> Si $d$ est réellement admissible, il vérifie le test du premier ordre. Ainsi $D(x^*)\subseteq G(x^*)$. L'inverse peut échouer au bord courbe d'un disque. La [[09-Comprendre-les-contraintes-et-KKT#Une direction qui passe le test mais sort du disque|note d'explications]] en donne le calcul exact.

**Sources :** [[Archives photographiques - contraintes#Photo 10 — direction admissible|photo 10]] et [[Archives photographiques - contraintes#Photos 17 à 19 — produit scalaire et directions|photos 17 à 19]].

## 5. Calculs aux points du tableau

### À l'origine $x^0=(0,0)$

Le point $x^0=(0,0)$ appartient au demi-disque. Le professeur calcule

$$
f(x^0)=(-2)^2+2\left(-\frac32\right)^2
=4+\frac92=\frac{17}{2}.
$$

Le gradient de $f$ est

$$
\nabla f(x)=
\begin{pmatrix}
2(x_1-2)\\
4(x_2-\frac32)
\end{pmatrix},
\qquad
\nabla f(x^0)=
\begin{pmatrix}-4\\-6\end{pmatrix}.
$$

Pour les contraintes, on obtient

$$
g_1(x^0)=-2<0,\qquad
g_2(x^0)=0,\qquad
I(x^0)=\{2\}.
$$

Seule $g_2$ est active. Comme $\nabla g_2(x)=(-1,0)^T$, le test appliqué à $d=(d_1,d_2)^T$ donne

$$
\nabla g_2(x^0)^T d
=(-1,0)\begin{pmatrix}d_1\\d_2\end{pmatrix}
=-d_1\leq0
\quad\Longleftrightarrow\quad d_1\geq0.
$$

Le tableau conclut qu'on peut avancer vers la droite depuis l'origine. Par exemple, $d=(1,0)$ est admissible. De plus, $\nabla f(x^0)^Td=-4<0$, donc cette direction fait d'abord diminuer $f$.

**Sources :** [[Archives photographiques - contraintes#Photos 11 à 16 — origine et contraintes actives|photos 11 à 16]] et [[Archives photographiques - contraintes#Photos 17 à 19 — produit scalaire et directions|photos 17 à 19]].

### Au sommet $x^1=(0,\sqrt2)$

Le professeur marque le sommet du demi-disque

$$
x^1=\begin{pmatrix}0\\\sqrt2\end{pmatrix}.
$$

Les deux contraintes y sont actives

$$
g_1(x^1)=0^2+(\sqrt2)^2-2=0,\qquad
g_2(x^1)=0,\qquad I(x^1)=\{1,2\}.
$$

Leurs gradients valent

$$
\nabla g_1(x^1)=
\begin{pmatrix}0\\2\sqrt2\end{pmatrix},
\qquad
\nabla g_2(x^1)=
\begin{pmatrix}-1\\0\end{pmatrix}.
$$

Le test du premier ordre s'écrit donc

$$
2\sqrt2\,d_2\leq0
\quad\text{et}\quad
-d_1\leq0,
\qquad\text{soit}\qquad
d_2\leq0,\quad d_1\geq0.
$$

![[01-Semestre-1/05-Optimisation-non-lineaire/assets/Contraintes/sources/20261105_144813179_iOS.jpg|700]]

*Le tableau indique les gradients des deux contraintes actives et les directions au sommet.*

**Sources :** [[Archives photographiques - contraintes#Photos 20 et 21 — sommet du demi-disque|photos 20 et 21]].

## 6. Conditions KKT

La dernière diapositive présente les **conditions de Karush-Kuhn-Tucker**, abrégées **KKT**. Elle suppose une **qualification des contraintes**, notée $(QC)$, sans en donner la définition dans les photographies.

Sous $(QC)$, si $x^*$ est un optimum local, il existe des multiplicateurs $u_i\in\mathbb R$ tels que

$$
\boxed{\nabla f(x^*)+\sum_{i\in I}u_i\nabla g_i(x^*)=0}
\qquad\text{stationnarité},
$$

$$
\boxed{u_i g_i(x^*)=0\quad\text{pour tout }i\in I}
\qquad\text{complémentarité},
$$

$$
\boxed{u_i\geq0\quad\text{pour tout }i\in I}
\qquad\text{positivité}.
$$

Il faut également que $x^*$ soit **réalisable**, donc $g_i(x^*)\leq0$ pour tout $i$. Les $u_i$ sont les **multiplicateurs de Lagrange**, également appelés **variables duales** sur le tableau. Si $g_i(x^*)<0$, la complémentarité impose $u_i=0$.

> [!important] Quand KKT caractérise le minimum
> Pour des fonctions $f$ et $g_i$ convexes et différentiables, tout point réalisable qui vérifie KKT est un minimum global. Pour que KKT soit aussi une condition **nécessaire**, la qualification des contraintes annoncée par le cours doit être vérifiée. Le cours la nomme $(QC)$ sans la détailler sur les photos.

Les photographies s'arrêtent au début de la caractérisation. La solution complète de l'exemple, calculée en complément, se trouve dans [[09-Comprendre-les-contraintes-et-KKT#Résolution complète de l'exemple du cours|la note d'explications]].

**Sources :** [[Archives photographiques - contraintes#Photos 22 à 24 — théorème KKT|photos 22 à 24]].

---

**Suite :** [[Nouvelle note qui suit le cours sur les avec contraintes|Dualité et preuve de KKT]] · [[09-Comprendre-les-contraintes-et-KKT|Comprendre les contraintes et KKT]] · [[Archives photographiques - contraintes|Photos du cours]] · [[05-Bases-et-optimalite|Bases et optimalité]].
