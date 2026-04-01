import csv

def analyser_stocks(fichier_csv):
    try:
        with open(fichier_csv, mode='r', encoding='utf-8') as fichier:
            lecteur = csv.DictReader(fichier)
            
            print(f"{'STATUT':<15} | {'TITRE':<30} | {'STOCK'}")
            print("-" * 60)

            for ligne in lecteur:
                # Si la ligne est totalement vide, on zappe
                if not any(ligne.values()):
                    continue

                titre = ligne.get('titre', 'Inconnu')
                quantite_brute = ligne.get('quantite', '').strip()

                # On saute la ligne si la quantité est vraiment vide
                if not quantite_brute:
                    continue

                try:
                    stock = int(quantite_brute)
                    priorite = ligne.get('priorite', 'Basse').strip()

                    # LOGIQUE DE DÉCISION
                    if priorite == "Haute" and stock <= 5:
                        print(f"🚨 RECOMMANDER | {titre[:30]:<30} | {stock} (Priorité Haute)")
                    elif priorite == "Moyenne" and stock <= 2:
                        print(f"⚠️  À SURVEILLER | {titre[:30]:<30} | {stock}")
                    elif priorite == "Basse" and stock >= 10:
                        print(f"💡 OPTIMISER    | {titre[:30]:<30} | {stock} (Rotation lente)")
                
                except ValueError:
                    # C'est ici que la magie opère : on affiche l'intrus !
                    print(f"❌ ERREUR DATA : Sur le livre '{titre}', la quantité trouvée est [{quantite_brute}] (Format incorrect)")

    except FileNotFoundError:
        print("Erreur : Le fichier 'inventaire.csv' est introuvable.")
    except Exception as e:
        print(f"Oups, une erreur imprévue : {e}")

if __name__ == "__main__":
    print("--- SYSTÈME D'AIDE À LA DÉCISION - SNC BAGA ---")
    analyser_stocks('inventaire.csv')