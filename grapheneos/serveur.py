from http.server import HTTPServer, SimpleHTTPRequestHandler

# Définition du répertoire racine du serveur web
root_directory = "./"

# Définition du handler pour le serveur web
handler = SimpleHTTPRequestHandler

# Création du serveur web avec le handler spécifié
server = HTTPServer(('localhost', 8000), handler)

# Affichage d'un message pour indiquer que le serveur est en cours d'exécution
print("Serveur démarré sur http://localhost:8000")

# Lancer le serveur web en continu jusqu'à ce qu'il soit arrêté manuellement
server.serve_forever()
