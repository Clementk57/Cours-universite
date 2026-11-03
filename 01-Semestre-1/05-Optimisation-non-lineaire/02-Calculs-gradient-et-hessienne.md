# Calculs de gradient et de Hessienne — Exercices du cours

> [!info] Place dans le cours
> Cette fiche reprend les calculs du 5 octobre. Elle prolonge les [[00-Optimisation-non-lineaire#Gradient et Hessienne|bases sur le gradient et la Hessienne]] et prépare les [[03-Dichotomie-et-Newton|méthodes de Newton]].

> [!tip] Besoin de revoir les calculs de matrices ?
> La fiche [[08-Comprendre-la-hessienne-pas-a-pas|Comprendre la Hessienne pas à pas]] détaille chaque multiplication, dérivée, case de la matrice, déterminant et valeur propre de l'exemple ci-dessous.

> [!info] Ces exemples appartiennent au TD 1
> Les fonctions de cette fiche et l'exercice des points stationnaires figurent sur la feuille du professeur. L'énoncé complet, la correction poursuivie au tableau et les autres exercices sont regroupés dans [[TD1|TD 1 — optimisation sans contrainte]].

## 1. Dérivées de référence

Pour $f_1(x)=e^x$ :

$$
f_1'(x)=e^x
\qquad
f_1''(x)=e^x>0.
$$

La fonction exponentielle est strictement convexe sur $\mathbb R$.

Pour $f_2(x)=\ln x$, définie sur $]0,+\infty[$ :

$$
f_2'(x)=\frac1x
\qquad
f_2''(x)=-\frac1{x^2}<0.
$$

Le logarithme est strictement concave sur son domaine.

## 2. Logarithme d'une somme d'exponentielles

Le tableau étudie :

$$
f_3(x)=\ln\left(\sum_{i=1}^{m}e^{x_i}\right).
$$

Posons $S=\sum_{i=1}^{m}e^{x_i}>0$. Par dérivation d'une fonction composée :

$$
\frac{\partial f_3}{\partial x_j}=\frac{1}{S}\frac{\partial S}{\partial x_j}=\frac{e^{x_j}}{S}.
$$

En posant $p_j=e^{x_j}/S$, on a $p_j>0$ et $\sum_jp_j=1$. La dérivation du quotient donne :

$$
\frac{\partial^2f_3}{\partial x_j\partial x_k}
=\begin{cases}
p_j(1-p_j) & j=k\\
-p_jp_k & j\neq k.
\end{cases}
$$

### Détail du calcul de chaque case

On dérive la composante $p_j=e^{x_j}/S$ par rapport à $x_k$. Pour un quotient $u/v$, on utilise $(u'v-uv')/v^2$. Ici $\partial S/\partial x_k=e^{x_k}$.

Si $j=k$, le numérateur dépend aussi de $x_k$. Sa dérivée vaut $e^{x_j}$ :

$$
\frac{\partial p_j}{\partial x_j}
=\frac{e^{x_j}S-e^{x_j}e^{x_j}}{S^2}
=\frac{e^{x_j}}S\left(1-\frac{e^{x_j}}S\right)
=p_j(1-p_j).
$$

Si $j\neq k$, le numérateur $e^{x_j}$ est constant par rapport à $x_k$. Sa dérivée est donc zéro :

$$
\frac{\partial p_j}{\partial x_k}
=\frac{0\times S-e^{x_j}e^{x_k}}{S^2}
=-p_jp_k.
$$

Pour deux variables, il suffit de placer ces résultats dans les quatre cases :

$$
H_f=
\begin{pmatrix}
p_1(1-p_1)&-p_1p_2\\
-p_1p_2&p_2(1-p_2)
\end{pmatrix}.
$$

Comme $p_1+p_2=1$, cela devient $p_1p_2\begin{pmatrix}1&-1\\-1&1\end{pmatrix}$. On voit ainsi pourquoi la forme générale ci-dessous contient une diagonale et un produit de vecteurs.

La Hessienne s'écrit donc $\nabla^2 f_3=\operatorname{diag}(p)-pp^T$. Pour tout vecteur $v$ :

$$
v^T\nabla^2 f_3v
=\sum_jp_jv_j^2-\left(\sum_jp_jv_j\right)^2
=\sum_jp_j(v_j-\bar v)^2\geq0
$$

avec $\bar v=\sum_jp_jv_j$. La fonction est convexe. Elle n'est pas strictement convexe sur tout $\mathbb R^m$ car ajouter la même constante à toutes les coordonnées ajoute cette constante à $f_3$.

## 3. Fonction linéaire

Pour $f_4(x)=\sum_{i=1}^m c_ix_i=c^Tx$, avec $c$ constant :

$$
\frac{\partial f_4}{\partial x_j}=c_j
\qquad
\nabla f_4(x)=c
\qquad
\nabla^2 f_4(x)=0.
$$

## 4. Fonction quadratique

Le cours considère $f_5(x)=x^TQx+c^Tx+r$ où $Q$ n'est pas nécessairement symétrique. Alors :

$$
\nabla f_5(x)=(Q+Q^T)x+c
\qquad
\nabla^2 f_5(x)=Q+Q^T.
$$

Si $Q$ est symétrique, cela devient $\nabla f_5(x)=2Qx+c$ et $\nabla^2f_5=2Q$.

### Exemple détaillé du tableau

Pour :

$$
Q=\begin{pmatrix}1&2\\3&1\end{pmatrix}
\qquad
c=\begin{pmatrix}1\\2\end{pmatrix}
$$

on développe :

$$
f_5(x)=x_1^2+5x_1x_2+x_2^2+x_1+2x_2+r.
$$

Ainsi :

$$
\nabla f_5(x)=\begin{pmatrix}2x_1+5x_2+1\\5x_1+2x_2+2\end{pmatrix}
\qquad
\nabla^2 f_5=\begin{pmatrix}2&5\\5&2\end{pmatrix}.
$$

> [!tip] Pourquoi $Q+Q^T$ ?
> Le terme croisé reçoit une contribution de chaque côté de la matrice. Ici $2x_1x_2+3x_2x_1=5x_1x_2$.

## 5. Recherche de points stationnaires

Le second exercice du tableau utilise :

$$
f(x_1,x_2)=x_1^4+x_2^4-2x_1^2+4x_1x_2-2x_2^2.
$$

Son gradient et sa Hessienne sont :

$$
\nabla f(x)=4\begin{pmatrix}x_1^3-x_1+x_2\\x_2^3+x_1-x_2\end{pmatrix}
\qquad
\nabla^2f(x)=4\begin{pmatrix}3x_1^2-1&1\\1&3x_2^2-1\end{pmatrix}.
$$

En additionnant les deux équations du gradient nul, on obtient $x_1^3+x_2^3=0$, donc $x_2=-x_1$. En remplaçant :

$$
x_1^3-2x_1=x_1(x_1^2-2)=0.
$$

Les points stationnaires sont :

$$
(0,0)
\qquad
(\sqrt2,-\sqrt2)
\qquad
(-\sqrt2,\sqrt2).
$$

> [!example] Complément de classification
> À l'origine, la Hessienne a pour valeurs propres $0$ et $-8$. Le test seul n'est pas suffisant pour conclure, mais $f(t,t)=2t^4>0$ et $f(t,-t)=2t^4-8t^2<0$ près de zéro. L'origine est donc un point selle.
>
> Aux deux autres points, la Hessienne a pour valeurs propres $24$ et $16$. Elle est définie positive. Ce sont des minima locaux stricts. On peut montrer qu'ils sont globaux car $f=(x_1^2-2)^2+(x_2^2-2)^2+2(x_1+x_2)^2-8\geq-8$.

Suite : [[03-Dichotomie-et-Newton|dichotomie et méthode de Newton]] puis [[04-Quasi-Newton-et-gradient-stochastique|quasi-Newton et gradient stochastique]]. Pour pratiquer : [[01-Exercices-et-exemples]].
