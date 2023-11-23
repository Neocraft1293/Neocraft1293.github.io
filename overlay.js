// overlay.js
document.addEventListener('DOMContentLoaded', function() {
    console.log('Chargement du DOM terminé');
    // Appel de la fonction pour charger le contenu de l'overlay
    loadOverlayContent();
});

function loadOverlayContent() {
    console.log('Chargement du contenu de overlay.html');
    // Charger le contenu de overlay.html
    fetch('overlay.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur HTTP! Statut : ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            // Injecter le contenu dans #overlay-content
            document.getElementById('overlay-content').innerHTML = html;
            console.log('Contenu de overlay.html chargé avec succès');
        })
        .catch(error => console.error('Erreur lors du chargement de overlay.html', error));
}
