# 🧮 TD 1 — exercice 1 corrigé et cours photographié

> [!info] Périmètre de cette note
> La [[#Exercice 1 — correction complète|correction de l'exercice 1]] est réalisée à partir de la feuille visible sur les photos 10 et 31. Ensuite, les [[#Exercice 2 — recherche des points stationnaires|exercices 2]] et [[#Exercice 3 — la fonction quadratique commencée au tableau|3]] suivent les photos du tableau du 3 novembre 2026. Les originaux sont conservés dans [[Archives photographiques - TD1|l'archive des 31 images]]. L'exercice 4 n'est pas corrigé sur ces photos.

> [!tip] Comment lire
> L'exercice 1 est une **correction ajoutée** pour que tu puisses le refaire seul. Dans les exercices 2 et 3, les formules « Au tableau » reprennent ce qui est visible. Les blocs « Explication » éclairent uniquement le calcul photographié. Les clichés successifs d'un même calcul sont regroupés pour éviter les doublons.

## 🗺️ Parcours des photos

| Photos | Ce que le professeur écrit |
|---|---|
| 01 à 05 | Exercice 2, fonction, gradient, points stationnaires, Hessienne |
| 06 à 09 | Valeurs propres aux deux points non nuls, rappel sur les matrices symétriques |
| 10 | Photographie de la feuille de TD |
| 11 à 19 | Hessienne à l'origine, valeurs et vecteurs propres |
| 20 à 22 | Deux directions issues de l'origine et signes de la fonction |
| 23 à 25 | Exercice 3, forme quadratique et début du polynôme caractéristique |
| 26 à 29 | Critère de Sylvester, trois mineurs à calculer |
| 30 | Conclusion de convexité et équation $Ax=-b$ |
| 31 | Nouvelle photographie de la même feuille de TD |

---

## Exercice 1 — correction complète

### Énoncé de la feuille

**Source : photos [[assets/TD1/sources/20261103_123520848_iOS.jpg|10]] et [[assets/TD1/sources/20261103_133808186_iOS.heic|31]].** La feuille demande, pour chacune des fonctions suivantes, le domaine de définition, le gradient et, lorsqu'elle existe, la Hessienne :

$$
\begin{aligned}
f_1(x)&=e^x, & f_2(x)&=\ln x,\\
f_3(x)&=\ln\!\left(\sum_{i=1}^n e^{x_i}\right),
& f_4(x)&=\sum_{i=1}^n c_ix_i,\\
f_5(x)&=x^TQx+c^Tx+r,
& f_6(x_1,x_2)&=x_1e^{-(x_1+3x_2)}.
\end{aligned}
$$

Dans $f_4$ et $f_5$, les coefficients $c_i$ sont constants. Pour $f_5$, $Q$ est une matrice $n\times n$ qui peut être **non symétrique**, $c$ est un vecteur et $r$ un nombre.

> [!tip] La méthode à répéter six fois
> **1.** Trouve où la fonction existe. **2.** Dérive une fois selon chaque variable pour construire le gradient. **3.** Dérive chaque composante du gradient selon chaque variable pour remplir la Hessienne. En dimension $1$, la Hessienne est simplement une matrice $1\times1$.

### 1. $f_1(x)=e^x$

L'exponentielle existe pour tout réel, donc son domaine est $\mathbb R$. Sa dérivée est elle-même :

$$
\nabla f_1(x)=f_1'(x)=e^x,
\qquad
\nabla^2f_1(x)=\begin{pmatrix}f_1''(x)\end{pmatrix}
=\begin{pmatrix}e^x\end{pmatrix}.
$$

**Pour vérifier :** dérive une première fois $e^x$, puis dérive encore le résultat. On obtient $e^x$ aux deux étapes.

### 2. $f_2(x)=\ln x$

Le logarithme réel demande $x>0$. Le domaine est donc $]0,+\infty[$. On dérive une fois, puis on écrit $1/x=x^{-1}$ pour dériver encore :

$$
\nabla f_2(x)=f_2'(x)=\frac1x,
\qquad
f_2''(x)=(x^{-1})'=-x^{-2}=-\frac1{x^2}.
$$

Ainsi $\nabla^2f_2(x)=\begin{pmatrix}-1/x^2\end{pmatrix}$. La fonction n'est pas définie en $0$ ni pour les réels négatifs, même si la formule $-1/x^2$ peut être écrite ailleurs.

### 3. $f_3(x)=\ln\left(\sum_{i=1}^n e^{x_i}\right)$

Supposons $n\ge1$ et $x\in\mathbb R^n$. Chaque $e^{x_i}$ est strictement positif. Leur somme l'est aussi, donc le logarithme existe pour **tout $x\in\mathbb R^n$**.

Pour alléger le calcul, posons

$$
S(x)=\sum_{i=1}^n e^{x_i},
\qquad
p_j=\frac{e^{x_j}}{S(x)}.
$$

En dérivant selon $x_j$, tous les termes de $S$ sont constants sauf $e^{x_j}$. La règle $\partial_{x_j}\ln S=(\partial_{x_j}S)/S$ donne donc

$$
\frac{\partial f_3}{\partial x_j}
=\frac{e^{x_j}}{S}=p_j,
\qquad
\nabla f_3(x)=\begin{pmatrix}p_1\\\vdots\\p_n\end{pmatrix}.
$$

Pour trouver la Hessienne, on redérive chaque $p_j$. Il faut distinguer **la même variable** et **deux variables différentes**.

Si on dérive $p_j$ selon $x_j$, le numérateur **et** le dénominateur varient :

$$
\frac{\partial p_j}{\partial x_j}
=\frac{e^{x_j}S-e^{2x_j}}{S^2}
=p_j-p_j^2
=p_j(1-p_j).
$$

Si on dérive $p_j$ selon $x_k$ avec $k\ne j$, le numérateur reste constant et seul le dénominateur varie :

$$
\frac{\partial p_j}{\partial x_k}
=-\frac{e^{x_j}e^{x_k}}{S^2}
=-p_jp_k.
$$

La réponse complète est donc

$$
(\nabla^2f_3)_{jk}=
\begin{cases}
p_j(1-p_j)&\text{si }j=k,\\
-p_jp_k&\text{si }j\ne k.
\end{cases}
$$

**Contrôle simple :** avec $n=2$ et $x_1=x_2=0$, on obtient $S=2$, $p_1=p_2=1/2$, puis $\nabla^2f_3=\begin{pmatrix}1/4&-1/4\\-1/4&1/4\end{pmatrix}$.

### 4. $f_4(x)=\sum_{i=1}^n c_ix_i$

La somme est définie pour tout $x\in\mathbb R^n$. Si l'on dérive selon $x_j$, seul le terme $c_jx_j$ dépend de $x_j$, donc $\partial f_4/\partial x_j=c_j$. Chaque composante du gradient est une constante. En dérivant une deuxième fois, on obtient zéro :

$$
\nabla f_4(x)=\begin{pmatrix}c_1\\\vdots\\c_n\end{pmatrix}=c,
\qquad
\nabla^2f_4(x)=0_{n\times n}.
$$

> [!example] Vérification en deux variables
> Pour $f_4(x_1,x_2)=3x_1-2x_2$, le gradient est $(3,-2)^T$. La dérivée de $3$ ou de $-2$ est $0$, d'où une Hessienne entièrement nulle.

### 5. $f_5(x)=x^TQx+c^Tx+r$

Ce polynôme est défini pour tout $x\in\mathbb R^n$. La difficulté est que $Q$ n'est **pas forcément symétrique**. On ne peut donc pas écrire automatiquement $2Qx$.

Pour retrouver la bonne formule, développe $x^TQx$ sous forme de somme :

$$
x^TQx=\sum_{i=1}^n\sum_{j=1}^n Q_{ij}x_ix_j.
$$

Quand on dérive selon $x_k$, la variable $x_k$ peut se trouver à la place de $x_i$ **ou** de $x_j$. Les deux contributions sont $\sum_jQ_{kj}x_j$ et $\sum_iQ_{ik}x_i$. Elles forment la composante $k$ de $(Q+Q^T)x$. Le terme $c^Tx$ ajoute $c$, tandis que la constante $r$ disparaît :

$$
\boxed{\nabla f_5(x)=(Q+Q^T)x+c},
\qquad
\boxed{\nabla^2f_5(x)=Q+Q^T}.
$$

Si $Q$ est symétrique, alors $Q^T=Q$ et ces formules deviennent $2Qx+c$ et $2Q$. Pour refaire le calcul avec des nombres, voir [[08-Comprendre-la-hessienne-pas-a-pas#2. Exemple du cours, calcul de chaque case|l'exemple de matrice détaillé]].

### 6. $f_6(x_1,x_2)=x_1e^{-(x_1+3x_2)}$

Le produit et l'exponentielle sont définis pour tout couple réel, donc le domaine est $\mathbb R^2$. Posons $E=e^{-(x_1+3x_2)}$. La règle de la chaîne donne

$$
\frac{\partial E}{\partial x_1}=-E,
\qquad
\frac{\partial E}{\partial x_2}=-3E.
$$

Pour la première composante du gradient, utilise la règle du produit sur $x_1E$. Pour la deuxième, $x_1$ est constant selon $x_2$ :

$$
\begin{aligned}
\frac{\partial f_6}{\partial x_1}
&=1\cdot E+x_1(-E)=(1-x_1)E,\\
\frac{\partial f_6}{\partial x_2}
&=x_1(-3E)=-3x_1E.
\end{aligned}
$$

Ainsi $\nabla f_6=E(1-x_1,-3x_1)^T$. Pour la Hessienne, redérive ces deux expressions. Les quatre cases sont

$$
\begin{aligned}
\partial_{x_1}[(1-x_1)E]&=-E-(1-x_1)E=(x_1-2)E,\\
\partial_{x_2}[(1-x_1)E]&=-3(1-x_1)E=3(x_1-1)E,\\
\partial_{x_1}[-3x_1E]&=-3E+3x_1E=3(x_1-1)E,\\
\partial_{x_2}[-3x_1E]&=9x_1E.
\end{aligned}
$$

D'où

$$
\boxed{\nabla^2f_6(x_1,x_2)
=e^{-(x_1+3x_2)}
\begin{pmatrix}
x_1-2&3(x_1-1)\\
3(x_1-1)&9x_1
\end{pmatrix}}.
$$

> [!success] Contrôle de l'exercice 1
> Dans la dernière Hessienne, les deux cases croisées coïncident. Pour $f_3$, elles coïncident aussi puisque $-p_jp_k=-p_kp_j$. Le même contrôle fonctionne pour $f_5$ car $Q+Q^T$ est symétrique.

---

## Exercice 2 — recherche des points stationnaires

### Fonction, gradient et Hessienne

**Au tableau, photos [[assets/TD1/sources/20261103_120915130_iOS.heic|01]] et [[assets/TD1/sources/20261103_120917962_iOS.heic|02]] :**

$$
f(x_1,x_2)=x_1^4+x_2^4-2x_1^2+4x_1x_2-2x_2^2.
$$

$$
\nabla f(x)=4
\begin{pmatrix}
x_1^3-x_1+x_2\\
x_2^3-x_2+x_1
\end{pmatrix},
\qquad
\nabla^2 f(x)=4
\begin{pmatrix}
3x_1^2-1&1\\
1&3x_2^2-1
\end{pmatrix}.
$$

> [!example] Explication du passage du gradient à la Hessienne
> Dans la première composante du gradient, $4(x_1^3-x_1+x_2)$, la dérivée selon $x_1$ vaut $4(3x_1^2-1)$ et celle selon $x_2$ vaut $4$. Dans la deuxième composante, les dérivées valent $4$ et $4(3x_2^2-1)$. Ce sont les quatre cases de la matrice.

### Les trois candidats

**Au tableau, photos [[assets/TD1/sources/20261103_121319940_iOS.heic|03]] et [[assets/TD1/sources/20261103_121644325_iOS.heic|04]] :** un point stationnaire annule le gradient. Le facteur $4$ ne change pas les solutions, donc

$$
\begin{cases}
x_1^3-x_1+x_2=0\\
x_2^3-x_2+x_1=0.
\end{cases}
$$

Le professeur additionne les deux équations. Les termes linéaires se compensent :

$$
x_1^3+x_2^3=0
\quad\Longrightarrow\quad x_1=-x_2.
$$

Il remplace ensuite $x_2$ par $-x_1$ :

$$
x_1^3-2x_1=x_1(x_1^2-2)=0.
$$

Les trois points écrits au tableau sont

$$
x^{(0)}=(0,0),\qquad
x^{(1)}=(\sqrt2,-\sqrt2),\qquad
x^{(2)}=(-\sqrt2,\sqrt2).
$$

> [!tip] Pourquoi $x_1^3+x_2^3=0$ donne $x_1=-x_2$ ?
> On a $x_1^3=(-x_2)^3$. Sur les nombres réels, la fonction cube est strictement croissante. Deux cubes égaux proviennent donc du même nombre. Le tableau utilise cette propriété avant de remplacer dans le système.

### Hessienne aux deux points non nuls

**Au tableau, photos [[assets/TD1/sources/20261103_122151757_iOS.heic|05]], [[assets/TD1/sources/20261103_122333818_iOS.heic|06]] et [[assets/TD1/sources/20261103_123239500_iOS.heic|08]] :** puisque les coordonnées des deux points ont un carré égal à $2$,

$$
\nabla^2 f(x^{(1)})=\nabla^2 f(x^{(2)})
=4\underbrace{\begin{pmatrix}5&1\\1&5\end{pmatrix}}_{A}.
$$

Le tableau calcule les valeurs propres de $A$ :

$$
\det(A-\lambda I)
=\begin{vmatrix}5-\lambda&1\\1&5-\lambda\end{vmatrix}
=(5-\lambda)^2-1
=(4-\lambda)(6-\lambda).
$$

Les valeurs propres de **$A$** sont $4$ et $6$. Elles sont positives. Le professeur conclut que les deux points non nuls sont des **minima locaux**.

**Rappel recopié sur la photo 08 :** pour une matrice réelle symétrique, le cours écrit la factorisation $A=Q\Lambda Q^T$. La matrice $Q$ rassemble des vecteurs propres orthonormés et $\Lambda$ place les valeurs propres sur sa diagonale. Ici, le professeur utilise seulement le **signe** des valeurs propres pour conclure.

> [!warning] Précision pour refaire le calcul
> La Hessienne entière vaut $4A$. Ses valeurs propres sont donc $16$ et $24$. Le tableau affiche $4$ et $6$ parce qu'il étudie d'abord la matrice $A$. Les deux façons de faire donnent le même signe et la même conclusion locale.

La photo [[assets/TD1/sources/20261103_123452216_iOS.heic|09]] rappelle le lien entre le signe d'une matrice et ses valeurs propres. Ici les matrices sont **symétriques**, ce qui permet d'utiliser ce critère. La photo [[assets/TD1/sources/20261103_122758197_iOS.heic|07]] rappelle aussi que, pour une matrice $2\times2$, $\det\begin{pmatrix}a&b\\c&d\end{pmatrix}=ad-bc$.

### Hessienne à l'origine

**Au tableau, photos [[assets/TD1/sources/20261103_123824927_iOS.heic|11]] à [[assets/TD1/sources/20261103_124437729_iOS.heic|13]] :**

La photo 11 écrit d'abord $H_0=4B$ avec $B=\begin{pmatrix}-1&1\\1&-1\end{pmatrix}$. Le calcul qui suit sur les photos 12 et 13 utilise la Hessienne complète :

$$
H_0=\nabla^2f(x^{(0)})
=4\begin{pmatrix}-1&1\\1&-1\end{pmatrix}
=\begin{pmatrix}-4&4\\4&-4\end{pmatrix}.
$$

Le professeur cherche ses valeurs propres en calculant

$$
\det(H_0-\lambda I)
=(-4-\lambda)^2-16
=\lambda(\lambda+8).
$$

Il trouve $\lambda_1=0$ et $\lambda_2=-8$. Une direction est sans courbure à l'ordre deux, l'autre est tournée vers le bas. Le test de la Hessienne **ne suffit pas à départager maximum et point selle** à l'origine. Les petits tracés de minimum, maximum et point selle restent visibles sur la [[assets/TD1/sources/20261103_124437729_iOS.heic|photo 13]].

> [!example] Explication du déterminant
> Pour la matrice $\begin{pmatrix}-4-\lambda&4\\4&-4-\lambda\end{pmatrix}$, multiplie les deux cases de la diagonale et retranche le produit des cases croisées. Cela donne $(-4-\lambda)^2-4\times4$. En développant, $\lambda^2+8\lambda+16-16=\lambda(\lambda+8)$.

### Directions propres photographiées

**Au tableau, photos [[assets/TD1/sources/20261103_125128570_iOS.heic|14]] à [[assets/TD1/sources/20261103_125619108_iOS.heic|19]] :** le professeur résout $H_0v=\lambda v$.

Pour $\lambda_1=0$, les deux lignes imposent $v_1=v_2$. Il choisit le vecteur de norme $1$

$$
v_1=\frac1{\sqrt2}\begin{pmatrix}1\\1\end{pmatrix}.
$$

Pour $\lambda_2=-8$, les lignes imposent $v_1=-v_2$. Il choisit

$$
v_2=\frac1{\sqrt2}\begin{pmatrix}1\\-1\end{pmatrix}.
$$

> [!tip] D'où vient $1/\sqrt2$ ?
> Le vecteur $(1,1)$ a pour longueur $\sqrt{1^2+1^2}=\sqrt2$. Diviser ses coordonnées par $\sqrt2$ lui donne la longueur $1$. Le même calcul vaut pour $(1,-1)$.

### Ce que vaut la fonction le long de ces directions

**Au tableau, photos [[assets/TD1/sources/20261103_130156533_iOS.heic|20]], [[assets/TD1/sources/20261103_130348915_iOS.heic|21]] et [[assets/TD1/sources/20261103_130639060_iOS.heic|22]] :** le professeur paramètre les deux droites par $(\alpha,\alpha)$ et $(\alpha,-\alpha)$. Il utilise donc les mêmes **directions**, sans le facteur de normalisation $1/\sqrt2$.

Dans la première direction,

$$
f(\alpha,\alpha)=2\alpha^4>0
\qquad\text{pour }\alpha\ne0.
$$

Dans la seconde,

$$
f(\alpha,-\alpha)
=2\alpha^4-8\alpha^2
=2\alpha^2(\alpha-2)(\alpha+2).
$$

Le tableau de signes de la photo 22 est

| Intervalle | $]-\infty,-2[$ | $-2$ | $]-2,0[$ | $0$ | $]0,2[$ | $2$ | $]2,+\infty[$ |
|---|---|---|---|---|---|---|---|
| Signe de $f(\alpha,-\alpha)$ | $+$ | $0$ | $-$ | $0$ | $-$ | $0$ | $+$ |

Comme $f(0,0)=0$, la première droite donne des valeurs **au-dessus** de celle de l'origine. La seconde donne des valeurs **au-dessous** lorsque $\alpha$ est assez proche de $0$ et non nul. L'origine est donc un **point selle**.

> [!warning] Lecture fidèle du tableau
> Les photos s'arrêtent ici pour l'exercice 2. La preuve d'un minimum global et le développement de Taylor, bien que demandés sur la feuille imprimée, ne sont pas développés au tableau dans cette série d'images.

---

## Exercice 3 — la fonction quadratique commencée au tableau

### Gradient et Hessienne

**Au tableau, photo [[assets/TD1/sources/20261103_131157679_iOS.heic|23]] :**

$$
q(x)=\frac12x^TAx+b^Tx+c,
\qquad \nabla q(x)=Ax+b,
\qquad \nabla^2q(x)=A.
$$

Le tableau renvoie ici au calcul de la fonction quadratique $f_5$ de l'exercice 1. Dans ce nouvel exercice, $A$ est symétrique et le facteur $1/2$ conduit bien aux deux formules affichées.

La matrice de l'énoncé est symétrique :

$$
A=\begin{pmatrix}5&-2&1\\-2&6&4\\1&4&5\end{pmatrix},
\qquad b=-2\begin{pmatrix}4\\12\\12\end{pmatrix}.
$$

> [!example] Explication du facteur $1/2$
> Quand $A$ est symétrique, la dérivée de $x^TAx$ vaut $2Ax$. Le facteur $1/2$ devant ce terme donne donc $Ax$. La dérivée de $b^Tx$ ajoute $b$. Une dérivée de plus donne la Hessienne constante $A$.

### Première méthode commencée, les valeurs propres

**Au tableau, photos [[assets/TD1/sources/20261103_131419503_iOS.heic|24]] et [[assets/TD1/sources/20261103_131850975_iOS.heic|25]] :** le professeur écrit le déterminant de $A-\lambda I$ et commence son développement selon la première ligne :

$$
\begin{aligned}
p(\lambda)
&=\det(A-\lambda I)\\
&=(5-\lambda)\big[(6-\lambda)(5-\lambda)-16\big]\\
&\quad+2\big[-2(5-\lambda)-4\big]
 +\big[-8-(6-\lambda)\big].
\end{aligned}
$$

La photo écrit ensuite la forme générale $p(\lambda)=a\lambda^3+b\lambda^2+c\lambda+d$. Le tableau passe à une autre méthode sans calculer les trois racines.

### Deuxième méthode, le critère de Sylvester

**Au tableau, photos [[assets/TD1/sources/20261103_132029464_iOS.heic|26]] à [[assets/TD1/sources/20261103_132717811_iOS.heic|29]] :** pour cette **matrice symétrique**, le critère demande les déterminants des blocs situés en haut à gauche, de tailles $1$, $2$, puis $3$.

$$
A_1=(5),\qquad
A_2=\begin{pmatrix}5&-2\\-2&6\end{pmatrix},\qquad
A_3=A.
$$

Le professeur trouve

$$
\det(A_1)=5>0,
\qquad
\det(A_2)=5\times6-(-2)(-2)=26>0.
$$

Pour le troisième bloc, la photo 29 détaille le développement :

$$
\begin{aligned}
\det(A_3)
&=5(30-16)+2(-10-4)+1(-8-6)\\
&=70-28-14=28>0.
\end{aligned}
$$

> [!tip] Comment refaire le dernier déterminant ?
> En développant selon la première ligne $(5,-2,1)$, les signes des trois termes sont $+$, $-$, $+$. Le deuxième terme commence donc par $-(-2)=+2$. Chaque parenthèse est le déterminant $2\times2$ qui reste après avoir supprimé la ligne et la colonne de la case utilisée.

Les trois nombres sont **strictement positifs**, donc $A$ est **définie positive**. C'est la conclusion écrite par le critère de Sylvester.

### Dernière ligne photographiée

**Au tableau, photo [[assets/TD1/sources/20261103_133037164_iOS.heic|30]] :** le professeur conclut que $q$ est strictement convexe et écrit la condition du minimum global

$$
\nabla q(x)=Ax+b=0
\quad\Longleftrightarrow\quad
\boxed{Ax=-b}.
$$

Il précise qu'il s'agit d'un système de **trois équations à trois inconnues**. Les photos ne montrent pas la résolution du système ni la valeur minimale. La transcription s'arrête donc à cette équation.

---

## Repères à retenir de ces photos

1. Le gradient nul donne les **candidats** de l'exercice 2.
2. La Hessienne aux deux points non nuls conduit à deux minima **locaux**.
3. À l'origine, une valeur propre nulle oblige à examiner la fonction sur des directions. Les deux signes observés donnent un **point selle**.
4. Dans l'exercice 3, les mineurs $5$, $26$ et $28$ montrent que $A$ est définie positive.
5. La dernière étape visible est **$Ax=-b$**.

Pour voir chaque cliché original, ouvre [[Archives photographiques - TD1|l'archive photographique]]. Pour revoir les dérivées et les matrices sur d'autres exemples, consulte [[08-Comprendre-la-hessienne-pas-a-pas|la fiche Hessienne pas à pas]].
