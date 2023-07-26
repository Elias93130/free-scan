// Code JavaScript
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire (pour éviter un rechargement de page)
  
    // Récupérer les termes de recherche depuis le champ de recherche
    const searchTerm = document.getElementById('searchInput').value;
    
    // Effectuer l'action de recherche ici (par exemple, afficher les résultats ou effectuer une requête vers un serveur, etc.)
    // Exemple d'affichage des termes de recherche dans la console
    console.log('Recherche avec les termes :', searchTerm);
  });
  
  function rechercherManga() {
    // Récupérer le terme de recherche depuis le champ de saisie
    var searchTerm = document.getElementById('searchInput').value.toLowerCase();

    // Rediriger en fonction du terme de recherche
    if (searchTerm === "jojo") {
        window.location.href = "jojo.html";
        return false;
    } else if (searchTerm === "deathnote") {
        window.location.href = "deathnote.html";
        return false;
    } else if (searchTerm === "death note") {
        window.location.href = "deathnote.html";
        return false;
    } else {
        // Rediriger vers une page d'erreur ou afficher un message d'aucun résultat trouvé
        alert("Aucun résultat trouvé.");
        return false;
    }
}


