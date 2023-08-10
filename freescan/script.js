document.addEventListener('DOMContentLoaded', function() {
    // Écouter le soumission du formulaire de recherche
    document.getElementById('searchForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche l'envoi du formulaire (pour éviter un rechargement de page)
        
        // Récupérer les termes de recherche depuis le champ de recherche
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        
        // Appeler la fonction de redirection de recherche en tenant compte du basepath
        const basePath = getBasePath();
        searchRedirect(searchTerm, basePath);
    });
    
    // Écouter les modifications dans le champ de recherche
    var searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') { // Vérifier si la touche appuyée est "Entrée"
                const searchTerm = event.target.value.toLowerCase();
                const basePath = getBasePath();
                searchRedirect(searchTerm, basePath);
            }
        });
    }
    
    // Fonction pour obtenir le chemin de base
    function getBasePath() {
        const currentPath = window.location.pathname;
        const parts = currentPath.split('/');
        parts.pop(); // Supprimer le dernier élément (nom du fichier actuel)
        return parts.join('/');
    }
    
    // Fonction de redirection de recherche
    function searchRedirect(searchTerm, basePath) {
        const normalizedSearchTerm = searchTerm.replace(/ /g, ''); // Supprimer les espaces
        const mangaPagePath = `${basePath}/prensentation-mangas/${normalizedSearchTerm}.html`;
        window.location.href = mangaPagePath;
    }
    
    // Gérer le marquage de chapitres comme lus
    function gererClic() {
        this.classList.toggle('clicked'); // Ajoute ou retire la classe "clicked" au bouton
        
        // Récupère le nom du chapitre depuis l'attribut "data-chapitre"
        const chapitreLu = this.getAttribute('data-chapitre');
        
        // Vérifie si le chapitre a été lu précédemment et met à jour le statut dans le localStorage










  

