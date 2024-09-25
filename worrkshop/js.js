document.addEventListener('DOMContentLoaded', function() {

    var map = L.map('map').setView([43.6047, 1.4442], 12); // Toulouse

    // Charger les tuiles de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);


    var customIcon = L.icon({
        iconUrl: 'icon.svg', // Exemple d'icône, tu peux mettre ton image ici
        iconSize: [30, 30], // Taille de l'icône
        iconAnchor: [22, 94], // Point de l'icône qui correspondra à la position du marqueur
        popupAnchor: [-3, -76] // Position du popup par rapport à l'icône
      });

    // Ajouter des points d'intérêt (marqueurs)
    var points = [
      { position: [43.6047, 1.4442], info: "Point 1: Centre de Toulouse" },
      { position: [43.6100, 1.4400], info: "Point 2: Un autre lieu à Toulouse" }
    ];

    // Ajouter les marqueurs sur la carte et gérer les clics
    points.forEach(function(point) {
      var marker = L.marker(point.position, {icon: customIcon}).addTo(map);
      
      // Quand le marqueur est cliqué, changer le texte de la div
      marker.on('click', function() {
        document.getElementById('description').textContent = point.info;
      });
    });
});