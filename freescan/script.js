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

document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour gérer le clic sur le bouton
    function gererClic() {
        this.classList.toggle('clicked'); // Ajoute ou retire la classe "clicked" au bouton

        // Récupère le nom du chapitre depuis l'attribut "data-chapitre"
        const chapitreLu = this.getAttribute('data-chapitre');

        // Vérifie si le chapitre a été lu précédemment et met à jour le statut dans le localStorage
        const chapitresLus = JSON.parse(localStorage.getItem('chapitresLus')) || {};
        chapitresLus[chapitreLu] = !chapitresLus[chapitreLu];
        localStorage.setItem('chapitresLus', JSON.stringify(chapitresLus));
    }

    // Sélectionne tous les boutons avec la classe "bouton-lu" et ajoute un gestionnaire d'événement pour le clic
    const boutonsLu = document.querySelectorAll('.bouton-lu');
    boutonsLu.forEach(bouton => bouton.addEventListener('click', gererClic));

    // Au chargement de la page, vérifie s'il y a des chapitres lus enregistrés dans le localStorage et met à jour les boutons
    const chapitresLus = JSON.parse(localStorage.getItem('chapitresLus')) || {};
    Object.entries(chapitresLus).forEach(([chapitre, lu]) => {
        const boutonCorrespondant = document.querySelector(`[data-chapitre="${chapitre}"]`);
        if (boutonCorrespondant) {
            if (lu) {
                boutonCorrespondant.classList.add('clicked');
            } else {
                boutonCorrespondant.classList.remove('clicked');
            }
        }
    });
});

  



