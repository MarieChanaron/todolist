# Consignes

- Mettre en place une architecture modulaire ES6
- Mettre en place un fichier service.mjs contenant un CRUD sur un tableau de tâches
- Récupérer les tâches grâce au service et les afficher
- Une fois les tâches affichées, implémenter la suppression d'une tâche
- Lorsque je coche une case, implémenter ce changement d'état sur le serveur
- Implémenter la création d'une tâche via une deuxième page
- Mettre en place json-server (trouvable sur GitHub)
- Dans le service, utiliser désormais l'API Fetch afin de ne plus utiliser le tableau
- Adapter le code pour que les modifications soient effectives côté serveur
- BONUS : afficher le détail d'une tâche sur une nouvelle page lors du clic sur celle-ci

# Mettre en route le serveur

1- Se placer dans js/server dans le terminal.

2- Entrer la ligne de commande suivante : 
json-server --watch db.json

Si aucune donnée n'apparaît, il faut réinitialiser db.json. 
db.json doit obligatoirement se trouver dans js/server.
Pour réinitialiser les données, effacer toutes les données dans db.json et saisir simplement :

{
    "tasks": {}
}

Les données seront alors automatiquement régénérées.