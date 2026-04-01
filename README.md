# 📚 Système d'Aide à la Décision - Logistique Librairie (SNC BAGA)

## 📌 Présentation du Projet
Ce projet est né d'un besoin concret observé au sein de l'entreprise familiale **SNC BAGA**. En tant qu'Adjoint de Direction, j'ai identifié que la gestion manuelle du réapprovisionnement des stocks de livres était une tâche chronophage et sujette aux erreurs.

L'objectif de ce script Python est d'automatiser l'analyse des stocks et de fournir une **aide à la décision** intelligente pour le responsable des achats.

## 🚀 Fonctionnalités
- **Analyse Dynamique** : Lecture automatique des données via un fichier externe `inventaire.csv`.
- **Logistique Intelligente** : L'algorithme ne se contente pas de vérifier les quantités ; il croise les données avec une priorité de vente (Haute, Moyenne, Basse).
- **Aide à la Décision** :
    - 🚨 **Recommander** : Pour les best-sellers en rupture (ex: actualité politique, nouveautés).
    - ⚠️ **Évaluer** : Pour les ouvrages à rotation lente.
    - 💡 **Remplacer** : Pour les références obsolètes, suggérant de libérer de l'espace pour des nouveautés.

## 🛠️ Technologies utilisées
- **Langage** : Python 3
- **Format de données** : CSV (Comma-Separated Values)
- **Outils** : Terminal macOS, VS Code

## 📁 Structure des fichiers
- `gestion_librairie.py` : Le script principal contenant la logique algorithmique.
- `inventaire.csv` : La base de données simplifiée du magasin.

## 📖 Comment utiliser ce projet ?
1. Assurez-vous d'avoir Python 3 installé sur votre machine.
2. Placez le script et le fichier CSV dans le même répertoire.
3. Lancez la commande suivante dans votre terminal :
   ```bash
   python3 gestion_librairie.py