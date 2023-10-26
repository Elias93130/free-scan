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
            window.location.href = "jojo.html";
        } else if (searchTerm === "deathnote" || searchTerm === "death note") {
            window.location.href = "deathnote.html";
        } else if (searchTerm === "bleach") {
            window.location.href = "bleach.html";
        } else if (searchTerm === "ippo" || searchTerm === "hajime no ippo") {
            window.location.href = "ippo.html";
        } else if (searchTerm === "bersek" || searchTerm === "berserk") {
            window.location.href = "berserk.html";
        } else if (searchTerm === "dragonball" || searchTerm === "db") {
            window.location.href = "dragonball.html";
        } else {
            // Rediriger vers une page d'erreur ou afficher un message d'aucun résultat trouvé
            alert("Aucun résultat trouvé.");
        }
    }
    
    // Gérer le marquage de chapitres comme lus
    function gererClic() {
        this.classList.toggle('active'); // Ajoute ou retire la classe "active" au bouton
        
        // Récupère le nom du chapitre depuis l'attribut "data-chapitre"
        const chapitreLu = this.getAttribute('data-chapitre');
        
        // Vérifie si le chapitre a été lu précédemment et met à jour le statut dans le localStorage
        const chapitresLus = JSON.parse(localStorage.getItem('chapitresLus')) || {};
        chapitresLus[chapitreLu] = !chapitresLus[chapitreLu];
        localStorage.setItem('chapitresLus', JSON.stringify(chapitresLus));
    }
    
    // Sélectionne tous les boutons avec la classe "btn-99" et ajoute un gestionnaire d'événement pour le clic
    const boutons = document.querySelectorAll('.btn-99');
    boutons.forEach(bouton => bouton.addEventListener('click', gererClic));
    
    // Au chargement de la page, vérifie s'il y a des chapitres lus enregistrés dans le localStorage et met à jour les boutons
    const chapitresLus = JSON.parse(localStorage.getItem('chapitresLus')) || {};
    Object.entries(chapitresLus).forEach(([chapitre, lu]) => {
        const boutonCorrespondant = document.querySelector(`[data-chapitre="${chapitre}"]`);
        if (boutonCorrespondant) {
            if (lu) {
                boutonCorrespondant.classList.add('active');
            } else {
                boutonCorrespondant.classList.remove('active');
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelector(".btn-99");
  
    btn.addEventListener("click", function () {
      btn.classList.toggle("active");
    });
  });







document.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelector(".btn-99");
  
    btn.addEventListener("click", function () {
      btn.classList.toggle("active");
    });
  });

















  var menuOptions = [
    { value: '', text: '-- Choisissez une page --' },
    { value: '../scan-dragonball/chapitre1dragonball.html', text: 'chapitre 1' },
    { value: '../scan-dragonball/chapitre2dragonball.html', text: 'chapitre 2' },
    { value: '../scan-dragonball/chapitre3dragonball.html', text: 'chapitre 3' },
    { value: '../scan-dragonball/chapitre4dragonball.html', text: 'chapitre 4' },
    { value: '../scan-dragonball/chapitre5dragonball.html', text: 'chapitre 5' },
    { value: '../scan-dragonball/chapitre6dragonball.html', text: 'chapitre 6' },
    { value: '../scan-dragonball/chapitre7dragonball.html', text: 'chapitre 7' },
    { value: '../scan-dragonball/chapitre8dragonball.html', text: 'chapitre 8' },
    { value: '../scan-dragonball/chapitre9dragonball.html', text: 'chapitre 9' },
    { value: '../scan-dragonball/chapitre10dragonball.html', text: 'chapitre 10' },
    { value: '../scan-dragonball/chapitre11dragonball.html', text: 'chapitre 11' },
    { value: '../scan-dragonball/chapitre12dragonball.html', text: 'chapitre 12' },
    { value: '../scan-dragonball/chapitre13dragonball.html', text: 'chapitre 13' },
    { value: '../scan-dragonball/chapitre14dragonball.html', text: 'chapitre 14' },
    { value: '../scan-dragonball/chapitre15dragonball.html', text: 'chapitre 15' },
    // Ajoutez d'autres options ici
];

var select = document.getElementById('menuDeroulant');

// Remplissez le menu déroulant avec les options
menuOptions.forEach(function(option) {
    var opt = document.createElement('option');
    opt.value = option.value;
    opt.textContent = option.text;
    select.appendChild(opt);
});

// Fonction de redirection lorsque l'option est sélectionnée
select.addEventListener('change', function() {
    var selectedValue = select.value;
    if (selectedValue) {
        window.location.href = selectedValue;
    }
});







  



