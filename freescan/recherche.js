document.addEventListener('DOMContentLoaded', function() {
    // Écouter le soumission du formulaire de recherche
    document.getElementById('searchForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche l'envoi du formulaire (pour éviter un rechargement de page)
        
        // Récupérer les termes de recherche depuis le champ de recherche
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        
        // Appeler la fonction de redirection de recherche
        searchRedirect(searchTerm);
    });
    
    // Écouter les modifications dans le champ de recherche
    var searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') { // Vérifier si la touche appuyée est "Entrée"
                const searchTerm = event.target.value.toLowerCase();
                searchRedirect(searchTerm);
            }
        });
    }
    
    // Fonction de redirection de recherche
    function searchRedirect(searchTerm) {
        if (searchTerm === "jojo") {
            window.location.href = "prensentation-mangas/jojo.html";
        } else if (searchTerm === "deathnote" || searchTerm === "death note") {
            window.location.href = "prensentation-mangas/deathnote.html";
        } else if (searchTerm === "bleach") {
            window.location.href = "prensentation-mangas/bleach.html";
        } else if (searchTerm === "ippo" || searchTerm === "hajime no ippo") {
            window.location.href = "prensentation-mangas/ippo.html";
        } else if (searchTerm === "bersek") {
            window.location.href = "prensentation-mangas/bersek.html";
        } else {
            // Rediriger vers une page d'erreur ou afficher un message d'aucun résultat trouvé
            alert("Aucun résultat trouvé.");
        }
    }
    
    // Gérer le marquage de chapitres comme lus
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

    